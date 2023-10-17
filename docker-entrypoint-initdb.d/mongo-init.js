db = db.getSiblingDB('ospjn');

db.createCollection('providers');

db.providers.insertMany([
  {
    "id": 67075,
    "numPres": "7019",
    "nombre": "Asistencia Diagnostica Prof.Dr.Noguera",
    "telat": "4961-8672 / 4962-1346 / 4747-0130",
    "horarios": "LU a VI 8 a 19",
    "listaDomicilios": [
      {
        "id": 67075,
        "codint": 202,
        "domicilio": "Chacabuco 661",
        "cp": "B1642CHI",
        "otrosDomicilios": null,
        "localidad": {
          "id": 108,
          "descripcion": "San Isidro",
          "provincia": {
            "id": 2,
            "nombre": "Buenos Aires"
          }
        },
        "urlGoogle": "https://www.google.com/maps/search/?api=1&query=chacabuco+661%2CB1642CHI%2CSan+Isidro%2CBuenos+Aires",
        "latitud": -34.4673473,
        "longitud": -58.5129373
      },
      {
        "id": 67075,
        "codint": 201,
        "domicilio": "Paraguay 2063",
        "cp": "C1121ABE",
        "otrosDomicilios": null,
        "localidad": {
          "id": 489,
          "descripcion": "Capital Federal",
          "provincia": {
            "id": 1,
            "nombre": "C.A.B.A"
          }
        },
        "urlGoogle": "https://www.google.com/maps/search/?api=1&query=paraguay+2063%2CC1121ABE%2CCapital+Federal%2CC.A.B.A",
        "latitud": -34.5983483,
        "longitud": -58.3967289
      }
    ],
    "listaEspecialidades": [
      {
        "id": 67075,
        "codEsp": 1076,
        "primaria": "S",
        "especialidad": {
          "id": 1076,
          "nombre": "Acelerador Lineal"
        }
      },
      {
        "id": 67075,
        "codEsp": 1087,
        "primaria": "S",
        "especialidad": {
          "id": 1087,
          "nombre": "Ecografías"
        }
      },
      {
        "id": 67075,
        "codEsp": 1098,
        "primaria": "S",
        "especialidad": {
          "id": 1098,
          "nombre": "Endoscopías Urológicas"
        }
      },
      {
        "id": 67075,
        "codEsp": 1102,
        "primaria": "S",
        "especialidad": {
          "id": 1102,
          "nombre": "Estudios Mamarios"
        }
      },
      {
        "id": 67075,
        "codEsp": 1108,
        "primaria": "S",
        "especialidad": {
          "id": 1108,
          "nombre": "Laboratorio de Análisis Clínicos"
        }
      },
      {
        "id": 67075,
        "codEsp": 1118,
        "primaria": "S",
        "especialidad": {
          "id": 1118,
          "nombre": "Punciones Biópsicas Bajo Control Ecográfico"
        }
      },
      {
        "id": 67075,
        "codEsp": 1119,
        "primaria": "S",
        "especialidad": {
          "id": 1119,
          "nombre": "Punciones Biópsicas Bajo Control Tomográfico"
        }
      },
      {
        "id": 67075,
        "codEsp": 1121,
        "primaria": "S",
        "especialidad": {
          "id": 1121,
          "nombre": "Radiología"
        }
      },
      {
        "id": 67075,
        "codEsp": 1123,
        "primaria": "S",
        "especialidad": {
          "id": 1123,
          "nombre": "Radiología Mamaria"
        }
      },
      {
        "id": 67075,
        "codEsp": 1127,
        "primaria": "S",
        "especialidad": {
          "id": 1127,
          "nombre": "Resonancia Nuclear Magnética"
        }
      },
      {
        "id": 67075,
        "codEsp": 1128,
        "primaria": "S",
        "especialidad": {
          "id": 1128,
          "nombre": "Tomografía Axial Computada"
        }
      },
      {
        "id": 67075,
        "codEsp": 1184,
        "primaria": "S",
        "especialidad": {
          "id": 1184,
          "nombre": "Diagnostico por Imagenes"
        }
      }
    ],
    "idLong": 67075
  }
]);
