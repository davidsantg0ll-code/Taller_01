# 60. Sistema de votación (3 candidatos, contar votos, mostrar ganador)
votes = {'Candidato A': 0, 'Candidato B': 0, 'Candidato C': 0}
vote_list = ['A', 'B', 'A', 'C', 'A', 'B', 'A']
for v in vote_list:
    name = 'Candidato ' + v
    if name in votes:
        votes[name] += 1
winner = max(votes, key=votes.get)
print('Resultados de votación:')
for k, v in votes.items():
    print(f'  {k}: {v} votos')
print('Ganador:', winner)
