// 54. Mostrar usuarios mayores de edad (>=18)
const users = [
  { name: 'Juan', age: 25 },
  { name: 'Ana', age: 17 },
  { name: 'María', age: 30 },
  { name: 'Carlos', age: 16 }
];
const adults = users.filter(u => u.age >= 18);
console.log('Usuarios mayores de edad:');
adults.forEach(u => console.log(`  ${u.name}: ${u.age}`));
