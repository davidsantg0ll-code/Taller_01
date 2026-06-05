// 57. Validar contraseña (≥8 caracteres, al menos 1 número)
function validatePassword(pwd) {
  const hasLength = pwd.length >= 8;
  const hasDigit = /\d/.test(pwd);
  return hasLength && hasDigit;
}
const passwords = ['Pass1234', 'weak', 'ABC12345', 'pass'];
console.log('Validación de contraseñas:');
passwords.forEach(p => {
  const valid = validatePassword(p);
  console.log(`  "${p}": ${valid ? 'Válida' : 'Inválida'}`);
});
