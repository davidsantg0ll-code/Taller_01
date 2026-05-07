compra=120.000
if (compra>=100.000){
    total=compra-(compra*0.10)
    console.log("Descuento aplicado del 10%")
}else {
    total=compra
    console.log("No se aplicó descuento")
}
console.log("Total a pagar: " + total)      

