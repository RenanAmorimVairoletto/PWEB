var num1 = prompt("Insira o primeiro valor");
var num2 = prompt("Insira o segundo valor");

var soma = (parseFloat(num1) + parseFloat(num2));

if (confirm(soma + " e a soma correta dos dois numeros?")){
    var subtracao = (parseFloat(num1) - parseFloat(num2));
    if(confirm(subtracao + " e a subtracao correta dos dois numeros?")){
        var produto = (parseFloat(num1) * parseFloat(num2));
        if(confirm(produto + " e a multiplicacao correta dos dois numeros?")){
            var divInteira = (parseInt(num1) / parseInt(num2));
            if(confirm(divInteira + "  a divisao correta dos dois numeros?")){
                var divResto = (parseInt(num1) % parseInt(num2));
                if(confirm(divResto + " e o resto correto da divisao dos dois numeros?")){
                    alert("Todas as operações foram realizadas com sucesso.")
                }
            }
        }
    }
}