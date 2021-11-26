const formEnviado = async () => {
    const nomeInput = document.getElementById('nome').value;
    const sobreNomeInput = document.getElementById('sobrenome').value;
    const mensagem = document.querySelector('.messagem');

    const url = "/Aula";

    const model =  {
        nome : nomeInput,
        sobrenome : sobreNomeInput
    }

    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(model),
            headers: {
                "Content-Type": "application/json",
            }
        });
    if(response.ok)
    {   

        const result = await response.json();
        mensagem.innerHTML = 
        `
            <span>nome de catálogo:  ${result.nomeCatalagoObj}</span>
            <div>nome completo:  ${result.nomeCompletoObj}</div>
        `;
    }
    else
    {
        mensagem.innerText = "Deu erro !";
        console.log("Deu erro")
    }   
}


const iniciar =  () => 
{
    document.addEventListener('submit',async (e)=>{
       e.preventDefault();
        await formEnviado()
    })
}



document.addEventListener("DOMContentLoaded", iniciar);