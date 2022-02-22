# Script used to map addresses to lat long objects
import requests
import json

data = None
with open('./results.json', 'r') as f:
    data = json.loads(f.read())
baselink = 'https://maps.googleapis.com/maps/api/geocode/json?address='
key = 'The API Key goes here'

failed_requests = []

print("Making requests...")
for register in data['data'][1900:2050]:
    for domicilio in register['listaDomicilios']:
        address = domicilio['urlGoogle'].replace("%2C0000", "").split('query=')[1]
        link = f"{baselink}{address}&region=ar&components=country:AR&key={key}"
        results = requests.get(link).json()['results']
        if len(results) == 1 and not results[0].get('partial_match'):
            print(".", end="", flush=True)
        elif len(results) == 0:
            domicilio['latitud'] = None
            domicilio['longitud'] = None
            print("!", end="", flush=True)
            failed_requests.append(domicilio['urlGoogle'])
            continue
        else:
            print("!", end="", flush=True)
            failed_requests.append(domicilio['urlGoogle'])
        domicilio['latitud'] = results[0]['geometry']['location']['lat']
        domicilio['longitud'] = results[0]['geometry']['location']['lng']

with open('results.json', 'w') as f:
    f.write(json.dumps(data, indent=2))

print("")
print("Failed requests:")
for failed_request in failed_requests:
    print(failed_request)
