import { printErrorOnConsole, printOnConsole } from "../helpers/Util";

const functionFilter = [
    {
        filter: new RegExp('^se(\\s+)?\\((\\s+)?.+\\)$'),
        type: 'conditional'
    },
    {
        filter: new RegExp('^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$'),
        type: 'conditional&&blockValidation'
    },
    {
        filter: new RegExp('^senao$'),
        type: 'elseValidation'
    },
    {
        filter: new RegExp('^senao(\\s+){$'),
        type: 'elseValidation&&blockValidation'
    },
    {
        filter: new RegExp('^}$'),
        type: "closeBlockValidation"
    },
    {
        filter: new RegExp('^{$'),
        type: "blockValidation"
    }
]

const conditionalParameters = [
    new RegExp('true')
]

/**
 * 
 * @param {string} line 
 * @param {number} index 
 * @returns {boolean}
 */
function ifValidation(line)
{
    let trimLine = line.trim()
    let condition = line.substring(trimLine.indexOf('(') + 1,trimLine.lastIndexOf(')') - 1)

    for(let i = 0; i < conditionalParameters.length; i++)
    {
        if(conditionalParameters[i].test(condition.trim()))
        {
            return true
        }
        else
        {
            continue
        }
    }

    return false
}

/**
 * 
 * @param {Array<string>} lines 
 * @param {number} index 
 * @returns {boolean}
 */
function blockValidation(lines,index)
{
    let valid = false
    let ignoreClosure = 0
    for(let i = index + 1; i < lines.length; i++)
    {
        if(lines[i].includes('}'))
        {
            if(ignoreClosure == 0)
            {
                valid = true
                break
            }
            else
            {
                ignoreClosure--
            }
        }
        else if(lines[i].includes('{'))
        {
            ignoreClosure++
        }
        else
        {
            continue
        }
    }

    return valid
}

/**
 * 
 * @param {Array<string>} lines 
 * @param {number} index 
 * @returns {boolean}
 */
function closeBlockValidation(lines,index)
{
    let valid = false
    for(let i = index - 1; i >= 0;i--)
    {
        if(lines[i].includes('{'))
        {
            valid = true
            break
        }
        else
        {
            continue
        }
    }

    return valid
}

/**
 * 
 * @param {Array<string>} lines 
 * @param {number} index 
 * @returns {boolean}
 */
function elseValidation(lines,index)
{
    let valid = false
    let completeCommonIf = new RegExp('^se(\s+)?\((\s+)?.+\)(\s+)?.+(\s+)?$')
    let commonIf = new RegExp('^se(\\s+)?\\((\\s+)?.+\\)$')
    let completeblockIf = new RegExp('^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[\\S\\s]*?}$')
    let blockIf = new RegExp('^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$')

    let start = null
    for(let i = index - 1; i >= 0;i--)
    {
        if(commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim()))
        {
            start = i
            break
        }
        else
        {
            continue
        }   
    }

    if(start != null)
    {
        let codeTillElse = ""
        for(let i = start; i < index;i++)
        {
            codeTillElse += `${lines[i].trim()}\n`
        }

        if(completeCommonIf.test(codeTillElse) || completeblockIf.test(codeTillElse))
        {
            valid = true
            return valid
        }
        else
        {
            return valid
        }
    }
    else
    {
        return valid
    }
}

/**
 * 
 * @param {string} code 
 * @param {number} [limit=0]
 * @returns {string | null}
 */
export function parseCode(code,limit = 0)
{
    let codeParsed = "async function runCode(){\n"
    let lines = code.split('\n')
    let valid = true
    for(let i = 0; i < lines.length;i++)
    {
        let validLine = false
        let lineType
        if(lines[i].trim() != "")
        {
            for(let j = 0; j < functionFilter.length;j++)
            {
                validLine = functionFilter[j].filter.test(lines[i].trim())
                if(validLine)
                {
                    lineType = functionFilter[j].type
                }
                else
                {
                    continue
                }
            }

            if(validLine)
            {
                if(lineType === "sequential")
                {
                    let lineParsed = `await ${lines[i].trim()}\n`
                    codeParsed += lineParsed
                }
                else if(lineType === 'conditional&&blockValidation')
                {
                    let validConditional = false
                    if(blockValidation(lines,i))
                    {
                        if(ifValidation(lines[i]))
                        {
                            validConditional = true          
                        }
                        else
                        {
                            printErrorOnConsole(`${lines[i]} (Condição inválida)`,i+1)
                        }   
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Bloco é aberto mas nunca é fechado)`,i+1)   
                    }

                    if(validConditional)
                    {
                        let line = lines[i].trim()
                        let lineParsed = `if${line.substring(line.indexOf('('))}\n`
                        codeParsed += lineParsed   
                    }
                    else
                    {
                        valid = false
                        break
                    }
                }
                else if(lineType === 'conditional')
                {
                    if(ifValidation(lines[i]))
                    {
                        let line = lines[i].trim()
                        let lineParsed = `if${line.substring(line.indexOf('('))}\n`
                        codeParsed += lineParsed          
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Condição inválida)`,i+1)
                        valid = false
                        break
                    }
                }
                else if(lineType === 'elseValidation')
                {
                    if(elseValidation(lines,i))
                    {
                        let lineParsed = 'else\n'
                        codeParsed += lineParsed
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Condição inválida)`,i+1)
                        valid = false
                        break
                    }
                }
                else if(lineType === 'elseValidation&&blockValidation')
                {
                    let validElse = false
                    if(blockValidation(lines,i))
                    {
                        if(elseValidation(lines,i))
                        {
                            validElse = true
                        }
                        else
                        {
                            printErrorOnConsole(`${lines[i]} (Condição inválida)`,i+1)
                        }
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Bloco é aberto mas nunca é fechado)`,i+1)
                    }

                    if(validElse)
                    {
                        let lineParsed = 'else{\n'
                        codeParsed += lineParsed
                    }
                    else
                    {
                        valid = false
                        break
                    }
                }
                else if(lineType === "blockValidation")
                {
                    if(blockValidation(lines,i))
                    {
                        let lineParsed = `${lines[i].trim()}\n`
                        codeParsed += lineParsed   
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Bloco é aberto mas nunca é fechado)`,i+1)
                        valid = false
                        break
                    }
                }
                else if (lineType === "closeBlockValidation")
                {
                    if(closeBlockValidation(lines,i))
                    {
                        let lineParsed = `${lines[i].trim()}\n`
                        codeParsed += lineParsed
                    }
                    else
                    {
                        printErrorOnConsole(`${lines[i]} (Bloco é fechado mas nunca é aberto)`,i+1)
                        valid = false
                        break   
                    }
                }
                else
                {
                    let lineParsed = `${lines[i].trim()}\n`
                    codeParsed += lineParsed
                }
            }
            else
            {
                printErrorOnConsole(lines[i],i+1)
                valid = false
                break
            }

            if(limit > 0 && totalCommands > limit)
            {
                printOnConsole(`O código tem mais linhas do que o robô pode processar. Tente rescrever seu código em ${limit} linhas ou menos.`)
                valid = false
                break
            }
        }
        else
        {
            continue
        }
    }

    if(valid)
    {
        codeParsed += "}\nrunCode()"
        return codeParsed
    }
    else
    {
        return null
    }
}