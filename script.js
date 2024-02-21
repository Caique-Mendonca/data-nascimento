let botaoCalcular = document.querySelector("#botao-calcular")
botaoCalcular.addEventListener('click', (event)=>{
    event.preventDefault();
    let diaInput = document.querySelector('#dia-input').value
    let mesInput = document.querySelector('#mes-input').value
    let anoInput = document.querySelector('#ano-input').value
    let aviso = document.querySelector('#aviso')
    let resultado = document.querySelector('#resultado')
    console.log(diaInput)
    console.log(mesInput)
    console.log(anoInput)
    if(diaInput == "" || mesInput == "null" || anoInput == ""){
        if(diaInput == ""){
            mesInput = null
            diaInput = null
            anoInput = null
            aviso.innerText = "Por favor Preencha os dados corretamente"
            aviso.innerText = "Por favor Preencha os dados corretamente"
        }
        else if(mesInput == "null"){
            mesInput = null
            diaInput = null
            anoInput = null
            aviso.innerText = "Por favor Preencha os dados corretamente"
        }
        else if(anoInput == ""){
            mesInput = null
            diaInput = null
            anoInput = null
            aviso.innerText = "Por favor Preencha os dados corretamente"
        }
    }

    switch (mesInput) {
        case 1:
            mesInput = "January"
            break;
        case 2:
            mesInput = "February"
            break;
        case 3:
            mesInput = "March"
            break;
        case 4:
            mesInput = "April"
            break;
        case 5:
            mesInput = "May"
            break;
        case 6: 
            mesInput = "June"
            break;
        case 7: 
            mesInput = "July"
            break;
        case 8: 
            mesInput = "August"
            break;
        case 9: 
            mesInput = "September"
            break;
        case 10: 
            mesInput = "October"
            break;
        case 11: 
            mesInput = "November"
            break;
        case 12: 
            mesInput = "December"
            break;
        case "null":
            mesInput = null
            break;
    }
    let data = new Date(`${mesInput} ${diaInput}, ${anoInput} 10:00:00`);
    let semana = data.toLocaleDateString('pt-BR', {weekday: 'long'})
    console.log(semana)
    resultado.innerText = semana
})
