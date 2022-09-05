import { Dropbox } from "dropbox"
const ACCESS_TOKEN = ""

/**
 * 
 * @param {string} data 
 * @param {string} path 
 */
export function saveLog(data,path)
{
    let dbx = new Dropbox({accessToken: ACCESS_TOKEN})
    let dataFile = new Blob([data],{type:"text/plain;charset=utf-8"})
    dbx.filesUpload({path:`${path.slice(-1) === '/' ? path : path + '/'}log.txt`,contents:dataFile}).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.error(error)
    })
}

