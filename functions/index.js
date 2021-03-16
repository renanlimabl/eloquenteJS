/**
 * O código a seguir demonstra esse conceito. Ele define e executa duas funções em que ambas atribuem um valor à variável x. A primeira função f1 declara a variável como local e então muda apenas seu valor. Já a segunda função f2 não declara x localmente, portanto sua referência a x está associada à variável global x definida no topo do exemplo:
 */

var x = "outside"

var f1 = function() {
    var x = 'inside f1'
}

f1()
console.log(x) // outside

var f2 = function() {
    x = 'inside f2'
}

f2()
console.log(x) // inside f2

/** */

