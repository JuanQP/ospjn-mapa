# Script used to get 'especialidades'
import requests
import json

data = None
with open('../ospjn_db.json', 'r') as f:
    data = json.loads(f.read())
baselink = 'https://www.ospjn.gov.ar/prestadores/verDetalle?id='

for register in data['data']:
    link = f"{baselink}{register['idLong']}"
    print(f"Waiting for {link}...", end=' ')
    register['listaEspecialidades'] = requests.get(link, verify=False).json()['listaEspecialidades']
    print("Ok.")

with open('results.json', 'w') as f:
    f.write(json.dumps(data))
