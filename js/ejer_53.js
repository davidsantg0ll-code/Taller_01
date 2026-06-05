// 53. Registrar usuarios (nombre y edad) en arreglo
const users = [
  { name: 'Juan', age: 25 },
  { name: 'María', age: 30 },
  { name: 'Pedro', age: 22 }
];
console.log('Usuarios registrados:');
users.forEach(u => console.log(`  ${u.name}: ${u.age} años`));
