// 60. Sistema de votación (3 candidatos, contar votos, mostrar ganador)
const votes = { 'Candidato A': 0, 'Candidato B': 0, 'Candidato C': 0 };
const vote_list = ['A', 'B', 'A', 'C', 'A', 'B', 'A'];
vote_list.forEach(v => {
  const name = 'Candidato ' + v;
  if (name in votes) votes[name]++;
});
const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
console.log('Resultados de votación:');
Object.entries(votes).forEach(([k, v]) => console.log(`  ${k}: ${v} votos`));
console.log('Ganador:', winner);
