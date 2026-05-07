lado_1=12
lado_2=5
lado_3=7    
if (lado_1 === lado_2 && lado_2 === lado_3) {
    console.log("El triángulo es equilátero")
}   else if (lado_1 === lado_2 || lado_1 === lado_3 || lado_2 === lado_3) {
    console.log("El triángulo es isósceles")
} else {
    console.log("El triángulo es escaleno")
}       