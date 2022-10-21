const btnEnviar = document.querySelector('#btn');
events()
function events () {
    btnEnviar.addEventListener('click', llamadoApi)
}

function llamadoApi () {
    const api = async () => {

        let concejo = document.querySelector('#concejos-text');
        let concejoId = document.querySelector('#concejoId')

        concejo.textContent = 'Esperando concejo...'
        await fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const {slip} = data
            concejoId.innerHTML = `# ${slip.id}`
            concejo.innerHTML = slip.advice
        })
    }
    api();


}

/* const btn = document.querySelector('#api');


btn.addEventListener('click', api) */