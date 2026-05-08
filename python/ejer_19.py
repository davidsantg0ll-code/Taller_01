salario=1300000
if (salario<1500000):
    salario_final=salario-(salario*0.0)
    print("Salario a pagar: ", salario_final)
elif (salario<=3000000):
    salario_final=salario-(salario*0.10)
    print("Salario a pagar: ", salario_final)
elif (salario>3000000):
    salario_final=salario-(salario*0.20)
    print("Salario a pagar: ", salario_final)
else:   
    print("Salario no valido")