//definindo login e senha
const USER_DB= "drakul31";
const PASS_DB= "111";

//criando variaveis de elementos HTML (login e senha)
var user = document.getElementById('login')
var pass = document.getElementById('senha')

//criando variavel de elemento button HTML
var button = document.getElementById('botao')

//criando evento de clique e valida de login e senha
button.addEventListener("click", function(){

    //IF = SE(validar expressão)

    if(user.value == USER_DB && pass.value == PASS_DB){
        //bloco de codigo
        window.location.href = "../html/home.html";
    }

})
