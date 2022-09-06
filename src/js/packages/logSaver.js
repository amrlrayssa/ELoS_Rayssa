import { Dropbox } from "dropbox"
const ACCESS_TOKEN = ""

/**
 * 
 * @param {string} data 
 * @param {string} path 
 */
export async function saveLog(data,path)
{
    let success
    let dbx = new Dropbox({accessToken: ACCESS_TOKEN})
    let dataFile = new Blob([data],{type:"text/plain;charset=utf-8"})
    await dbx.filesUpload({path:`${path.slice(-1) === '/' ? path : path + '/'}log.txt`,contents:dataFile,autorename:true}).then(function(response){
        console.log(response)
        success = true
    }).catch(function(error){
        console.error(error)
        success = false
    })

    return success
}

