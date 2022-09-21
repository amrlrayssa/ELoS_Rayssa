import { printErrorOnConsole } from "../helpers/Util";

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
        filter: new RegExp('^}$'),
        type: "normal"
    },
    {
        filter: new RegExp('^{$'),
        type: "blockValidation"
    }
]

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
 * @param {string} code 
 * @returns {string | null}
 */
export function parseCode(code)
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
                    if(blockValidation(lines[i],i))
                    {
                        if(/* Method to validated what is inside the '()', this conditional always go false while we don't know what conditions will be necessary*/ false)
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
                    if(/* Method to validated what is inside the '()', this conditional always go false while we don't know what conditions will be necessary*/ false)
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
                else if(lineType === "blockValidation")
                {
                    if(blockValidation(lines[i],i))
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
        }
        else
        {
            continue
        }
    }

    if(valid)
    {
        codeParsed += "}\nrundCode()"
        return codeParsed
    }
    else
    {
        return null
    }
}