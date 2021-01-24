/*var preguntas = ['Cuál es tu nombre?','Cuántos años tienes?',"Lenguage de programación favorito?"];
var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim()) ;
    if(respuestas.length<preguntas.length){
        pregunta(respuestas.length);
    }else{
        process.exit();
    }
})
pregunta(0);
*/
var mailList=[];
var compraList=[];
var i = 0;
var teste;
function start(){
    process.stdout.write('Digite seu email:\n');
}
function addMail(data){
    if(data!='fim'){
        mailList.push(data);
        process.stdout.write(`Digite outro email ou digite 'fim' para sair:\n`);
    }else{
        console.table(mailList);
        process.exit();
    }
}

function addCompra(data){
    
}

start();
process.stdin.on('data',function(data){
      teste=(data.toString().trim());
      addMail(teste);
    
})
/*function askMail(i){
    process.stdout.write("Digite um email ou digite 'fim' para sair:\n");
    mailList[i]= data
    i++;
    
}

process.stdin.on('data',function(data){
start();
mailList[i]= data;
if(mailList!='fim'){
    askMail(i);
}else{
    console.log(mailList);
    process.exit();
}

});

*/