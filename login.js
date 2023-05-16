let emails = ["LanaDelRey@hotmail.com", "Zendayas2@gmail.com"]
let senhas = ["123", "456"]
let usuarios = ["Lanita", "Zeezee"]
let fotos = [`<img src="https://assets.teenvogue.com/photos/58ed1645db3c9223fd29b1c1/master/w_473,h_472,c_limit/lana-tout.jpg">`,`<img scr="https://midias.agazeta.com.br/2023/04/24/zendaya-durante-o-29-screen-actors-guild-awards-em-fevereiro-de-2023-1591616.jpeg">`]

function login(){


    let email = id_email.value
    let senha = id_senha.value
    let auth = false 


    for (let contador = 0; contador < emails.length; contador++){

        if(email == emails[contador]){
            if(senha == senhas[contador]){
                auth = true
                alert("Bem Vindo!")
                id_foto.innerHTML = fotos[contador]
            }u
        }


    }

    if(auth == false){
        alert('email ou senha incorretos, tente novamente')
    }


}

