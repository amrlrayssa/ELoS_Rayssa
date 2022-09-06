import { saveLog } from "../../packages/logSaver"

if(window.localStorage.getItem('levelTotalTime'))
{
    let totalTime = parseFloat(window.localStorage.getItem('levelTotalTime'))
    window.localStorage.removeItem('levelTotalTime')
    let hour = Math.floor(totalTime / 3600)
    let min = Math.floor(totalTime / 60)
    let seg = Math.floor(totalTime % 60)
    var form = document.getElementById("dataLog")
    form.addEventListener('submit',async function(e){
        e.preventDefault()
        let name = document.getElementById('name').value
        let age = document.getElementById('age').value

        if((name != null && name != "") && (age != null && age!= ""))
        {
            let subBtn = document.getElementById("subBtn")
            subBtn.disabled = true
            let data = `${name},${age},${hour < 10 ? '0' + hour : hour}:${(min < 10 ? '0' + min : min)}:${(seg < 10 ? '0' + seg : seg)};`
            let success = await saveLog(data,'/level1/')
            if(success)
            {
                window.location.href = '../../'
            }
            else
            {
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