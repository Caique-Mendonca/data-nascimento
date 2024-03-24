window.addEventListener('load',()=>{
    let botaoCalcular = document.querySelector("#botao-calcular")
    botaoCalcular.addEventListener('click', (event)=>{
        event.preventDefault();
        let diaInput = document.querySelector('#dia-input').value
        let mesInput = document.querySelector('#mes-input').value
        let anoInput = document.querySelector('#ano-input').value
        let aviso = document.querySelector('#aviso')
        let resultado = document.querySelector('#resultado')
        let diasDeVidaHTML = document.querySelector('#dias-de-vida')
        let mesesDeVidaHTML = document.querySelector('#meses-de-vida')
        let semanasDeVidaHTML = document.querySelector('#semanas-de-vida')
        let minutosDeVidaHTML = document.querySelector('#minutos-de-vida')
        let segundosDeVidaHTML = document.querySelector('#segundos-de-vida')
        let milisegundosDeVidaHTML = document.querySelector('#milisegundos-de-vida')
        let resultadosUl = document.querySelector('.resultados')
        resultadosUl.style.display = "flex"
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
        let data = new Date(`${mesInput} ${diaInput}, ${anoInput} 10:00:00`); // Dia de nascimento
        let dataAbsoluta = Date.parse(`${mesInput} ${diaInput}, ${anoInput}`) // Data em relação a 1/1/1970 em milisegundos
        let semana = data.toLocaleDateString('pt-BR', {weekday: 'long'}) // Dia da semana
        let diaAtual = Date.now() // Dia de hoje em relação a 1/1/1970 em milisegundos
        console.log(semana)
        if(semana == "segunda-feira" || semana == "terça-feira" || semana == "quarta-feira" || semana == "quinta-feira" || semana == "sexta-feira"){
            resultado.innerText = `Você nasceu em uma ${semana}`
        }else if(semana == "sábado" || semana == "domingo"){
            resultado.innerText = `Você nasceu em um ${semana}`
        }
        console.log(data);
        console.log(diaAtual); 
        console.log(dataAbsoluta);
        console.log(diaAtual - dataAbsoluta );// Diferença entre as duas datas em milisegundos
        let diasMilisegundos = diaAtual - dataAbsoluta
        let diasDesdeNascimento = Math.floor(diasMilisegundos / (1000*60*60*24)) // Formula pra transformar milisegundos em dias 
        diasDeVidaHTML.innerText = `Você tem ${diasDesdeNascimento.toLocaleString('pt-br')} dias de vida`
        milisegundosDeVidaHTML.innerText = `Você tem ${diasMilisegundos.toLocaleString('pt-br')} milisegundos de vida`
        let segundosDesdeNascimento = Math.floor(diasMilisegundos / 1000)
        segundosDeVidaHTML.innerText = `Você tem ${segundosDesdeNascimento.toLocaleString('pt-br')} segundos de vida`
        let minutosDesdeNascimento = Math.floor(diasMilisegundos / (1000*60))
        minutosDeVidaHTML.innerText = `Você tem ${minutosDesdeNascimento.toLocaleString('pt-br')} minutos de vida`
        let semanasDesdeNascimento = Math.floor(diasMilisegundos / (1000*60*60*24*7))
        semanasDeVidaHTML.innerText = `Você tem ${semanasDesdeNascimento.toLocaleString('pt-br')} semanas de vida`
        let mesesDesdeNascimento = Math.floor(diasMilisegundos / (1000*60*60*24*30))
        mesesDeVidaHTML.innerText = `Você tem aproximadente ${mesesDesdeNascimento.toLocaleString('pt-br')} mêses de vida`
    })
    
    let botaoLimpar = document.querySelector('#botao-limpar')
    botaoLimpar.addEventListener('click', ()=>{
        document.querySelector('#dia-input').style.borderColor = "black"
        document.querySelector('#mes-input').style.borderColor = "black"
        document.querySelector('#ano-input').style.borderColor = "black"
        document.querySelector('.resultados').innerHTML = " "
        aviso.innerText = " "
        resultado.innerText= " "
    })
})