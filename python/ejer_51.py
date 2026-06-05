# 51. Registrar 5 notas, calcular promedio y determinar estado
notes = [8.5, 9.0, 7.5, 8.0, 8.2]
avg = sum(notes) / len(notes)
status = 'Aprobado' if avg >= 7 else 'Reprobado'
print('Notas:', notes)
print('Promedio:', round(avg, 2))
print('Estado:', status)
