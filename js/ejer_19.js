salario=1300000
if (salario<1500000)
{
    salario=salario+(salario*0.0)
    console.log("Salario a pagar: " + salario)
}
else if (salario<3000000 )
{
    salario=salario+(salario*0.10)
    console.log("Salario a pagar: " + salario)
}
else if (salario>3000000)
{
    salario=salario+(salario*0.20)
    console.log("Salario a pagar: " + salario)  
}
else {
    console.log("Salario a pagar: " + salario)
}