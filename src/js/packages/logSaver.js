import { Dropbox } from "dropbox"
const ACCESS_TOKEN = ""

/**
 * A function that saves the log of the levels on a Dropbox server (a file called log.txt),generates one file per play, needs to put the access token on the file to work. Returns a boolean to indicate if the upload was a success.
 * @async
 * @param {string} data - The data that will be writen in the log.txt
 * @param {string} path - The path that the file will be saved in the app folder, it's recommended to call the path by the level name, such as '/level1/'
 * @returns {Promise<boolean>}
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

