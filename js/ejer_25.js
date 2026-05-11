menu= menu = "1. Opcion 1\n2. Opcion 2\n3. Opcion 3"
console.log(menu)
saludo = "hola, bienvenido a este menu"
console.log(saludo)   
fecha = "7/6/2026"
console.log("fecha: " + fecha)  
salir= "           Salir"
console.log(salir)
let tipo_de_cliente = ("1. vip\n2. normal")
let compra = 100000
if (tipo_de_cliente === "1. vip") {
descuento = compra * 0.20
total = compra - descuento
console.log("cliente vip - descuento del 20%: ")
}   
else if (tipo_de_cliente === "2. normal") {
descuento = compra * 0.05
total = compra - descuento
console.log("cliente normal - descuento del 5%: ")
}
else {
console.log("tipo de cliente no válido")
}
console.log("descuento: " + descuento)
console.log("total: " + total)
