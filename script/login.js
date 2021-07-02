/*ação dos botões "cadastre-se/faça o login" da versão mobile*/
function irCadastrar(){
    document.getElementById('login').style.marginLeft = '-300vh'
    document.getElementById('cadastro').style.marginRight = '0'  
}

function irLogin(){
    document.getElementById('login').style.marginLeft = '0'
    document.getElementById('cadastro').style.marginRight = '-300vh'
}

/*animação das barras dos imputs*/ 
function aumentaBarra(posicao){
    document.getElementsByClassName('barra')[posicao].style.width = '100%'
}

function diminuiBarra(posicao){

    if(document.getElementsByClassName('inputs')[posicao].value == ''){

        document.getElementsByClassName('barra')[posicao].style.width = '0%'
    }
}

function verificaSenha(){
    if (document.getElementsByClassName('inputs')[7].value !== document.getElementsByClassName('inputs')[6].value) {
        document.getElementById('verifica-senha').style.display = 'block'
    }else{
        document.getElementById('verifica-senha').style.display = 'none'
    }
}

/*ação quando clica no botão entrar*/
function entrar(){

    for (var i = 0; i < 2; i++){

        if (document.getElementsByClassName('inputs')[i].value == '') {
            document.getElementsByClassName('verifica')[i].style.display = 'block'
        } else {
            document.getElementsByClassName('verifica')[i].style.display = 'none'
        }
    }
}

/*ação quando clica no cadastrar entrar*/
function cadastrar(){

    for (var i = 2; i < 8; i++){

        if (document.getElementsByClassName('inputs')[i].value == '') {
            document.getElementsByClassName('verifica')[i].style.display = 'block'
        }else{
            document.getElementsByClassName('verifica')[i].style.display = 'none'
        }
    }
}