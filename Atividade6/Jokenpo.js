var user, input, random, pc, aux;
input = prompt("Escolha um (1 - Pedra, 2 - Tesoura, 3 - Papel)");
random = Math.random();
          
switch (input){
case '1':
    user = "Pedra";
    break;
case '2':
    user = "Tesoura";
    break;
case '3':
    user = "Papel";
    break;
default:
    alert("Entrada inválida")
}

if(random < 0.33){
    pc = "Pedra";
}
else if(random > 0.66){
    pc = "Papel";
}
else{
    pc = "Tesoura";
}

if(user==pc){
alert("Sua escolha: " + user + " VS Pc: " + pc);
alert("Empate")
}   
else if(user == "Pedra" && pc == "Tesoura" || user == "Papel" && pc == "Pedra" || user == "Tesoura" && pc == "Papel"){
    alert("Sua escolha: " + user + " VS Pc: " + pc);
    alert("Você ganhou!")
}
else{
        alert("Sua escolha: " + user + " VS Pc: " + pc);
        alert("Você perdeu!");
}
alert("Recarregue a página para jogar novamente!")