from flask_restful import Api, Resource, reqparse
import requests
import json
import os

api_key = os.environ['DB_API_KEY']

class ApiHandler(Resource):

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('especialidad', type=int)
    args = parser.parse_args()

    request_especialidad = args['especialidad']

    link = "https://data.mongodb-api.com/app/data-tjtvw/endpoint/data/beta/action/find"
    data = {
      "collection": "providers",
      "database": "ospjn",
      "dataSource": "Cluster0",
      "filter": {"listaEspecialidades.especialidad.id": request_especialidad},
      "projection": {
        "numPres": 0,
        "_id": 0,
        "listaEspecialidades.primaria": 0,
        "listaEspecialidades.codEsp": 0,
        "listaDomicilios.otrosDomicilios": 0,
        "listaDomicilios.cp": 0,
        "listaDomicilios.localidad.id": 0,
        "listaDomicilios.localidad.provincia": 0
      }
    }
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': api_key,
    }
    r = requests.post(link, headers=headers, data=json.dumps(data))
    return r.json()
