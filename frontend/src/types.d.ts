interface Provider {
  id: number;
  numPres: string;
  nombre: string;
  telat: string;
  horarios: string;
  listaDomicilios: Domicilio[];
  listaEspecialidades: Especialidad[];
  idLong: number;
}

interface Especialidad {
  id: number;
  codEsp: number;
  primaria: string;
  especialidad: EspecialidadDetail
}

interface EspecialidadDetail {
  id: number;
  nombre: string;
}

interface Domicilio {
  id: number;
  codint: number;
  domicilio: string;
  cp: string;
  localidad?: Localidad,
  urlGoogle: string;
  latitud: number | null;
  longitud: number | null;
}

interface DomicilioWithLatLong extends Domicilio {
  latitud: number;
  longitud: number;
}

interface Localidad {
  id: number,
  descripcion: string,
  provincia: Provincia,
}

interface ProvinciaSchema {
  id: number,
  nombre: string,
}
