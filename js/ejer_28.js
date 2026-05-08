n1 = parseInt(prompt("Ingrese la calificacion: "))
if (n1 >= 4.5) {
    console.log("excelente")
} else if (n1 >= 4 && n1 < 4.49) {
    console.log("bueno")
} else if (n1 >= 3 && n1 < 3.99) {
    console.log("aprobado")
} else if (n1 < 3 ) {
    console.log("reprobado")
}       
else {
    console.log("calificacion no valida")
}   