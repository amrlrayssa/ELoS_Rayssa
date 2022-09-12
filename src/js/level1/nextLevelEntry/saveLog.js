import { saveLog } from "../../packages/logSaver"

export function configureSaveLogModal(redirectPath)
{
    if(window.sessionStorage.getItem('levelTotalTime'))
    {
        let totalTime = parseFloat(window.sessionStorage.getItem('levelTotalTime'))
        window.localStorage.removeItem('levelTotalTime')
        let hour = Math.floor(totalTime / 3600)
        let min = Math.floor(totalTime / 60)
        let seg = Math.floor(totalTime % 60)
        var subBtn = document.getElementById("subBtn")
        subBtn.addEventListener('click',async function(e){
            let name = document.getElementById('name').value
            let age = document.getElementById('age').value

            if((name != null || name != "") && (age != null || age!= ""))
            {
                subBtn.disabled = true
                let data = `${name},${age},${hour < 10 ? '0' + hour : hour}:${(min < 10 ? '0' + min : min)}:${(seg < 10 ? '0' + seg : seg)};`
                let success = await saveLog(data,'/level1/')
                if(success)
                {
                    window.location.href = redirectPath
                }
                else
                {
                    alert("Ops! Algo deu errado!")
                    subBtn.disabled = false
                }
            }
            else
            {
                alert("É necessário preencher o formulário para avançar.")
            }
        })
    }
    else
    {
        window.location.href = "../../"
    }
}