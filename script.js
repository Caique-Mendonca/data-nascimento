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
    // Tratamento para todos os inputs positivos
    if(diaInput !== "" || mesInput !== "null" || anoInput !== ""){
        if(diaInput !== ""){
            document.querySelector('#dia-input').style.borderColor = "black" 
        }
        if(mesInput !== "null"){
            document.querySelector('#mes-input').style.borderColor = "black" 
        }
        if(anoInput !== ""){
            document.querySelector('#ano-input').style.borderColor = "black"
        }
        aviso.innerText = ""
    }
    // Tratamento para todos os inputs negativos
    if(diaInput == "" && mesInput == "null" && anoInput == ""){
        document.querySelector('#dia-input').style.borderColor = "red"
        document.querySelector('#mes-input').style.borderColor = "red"
        document.querySelector('#ano-input').style.borderColor = "red"
        aviso.innerText = "Por favor Preencha os dados corretamente"
    }
    // Tratamento para 2 inputs nevativos e 1 positivo
    if(diaInput !== "" && mesInput == "null" && anoInput == ""){
        document.querySelector('#dia-input').style.borderColor = "black"
        document.querySelector('#mes-input').style.borderColor = "red"
        document.querySelector('#ano-input').style.borderColor = "red"
        aviso.innerText = "Por favor Preencha os dados corretamente"
    }else if(diaInput == "" && mesInput !== "null" && anoInput ==""){
        document.querySelector('#dia-input').style.borderColor = "red"
        document.querySelector('#mes-input').style.borderColor = "black"
        document.querySelector('#ano-input').style.borderColor = "red"
    }else if(diaInput == "" && mesInput == "null" && anoInput !==""){
        document.querySelector('#dia-input').style.borderColor = "red"
        document.querySelector('#mes-input').style.borderColor = "red"
        document.querySelector('#ano-input').style.borderColor = "black"
    }
    // Tratamento separadamente
    if(diaInput == ""){
        mesInput = null
        diaInput = null
        anoInput = null
        aviso.innerText = "Por favor Preencha os dados corretamente"
        document.querySelector('#dia-input').style.borderColor = "red"
    }
    
    if(mesInput == "null"){
        mesInput = null
        diaInput = null
        anoInput = null
        aviso.innerText = "Por favor Preencha os dados corretamente"
        document.querySelector('#mes-input').style.borderColor = "red"
    }
    
    if(anoInput == ""){
        mesInput = null
        diaInput = null
        anoInput = null
        aviso.innerText = "Por favor Preencha os dados corretamente"
        document.querySelector('#ano-input').style.borderColor = "red"
    }

    // Tratamento em Switch case dos meses 
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

let botaoLimpar = document.querySelector('#botao-limpar').addEventListener('click', ()=>{
        document.querySelector('#dia-input').style.borderColor = "black"
        document.querySelector('#mes-input').style.borderColor = "black"
        document.querySelector('#ano-input').style.borderColor = "black"
        aviso.innerText = " "
        resultado.innerText= " "
    })