import axios from "axios";

const PROVIDERS_URL = '/api/providers';

interface ProvidersResponse {
  documents: Provider[];
}

export async function getProviders(especialidadId: number) {
  const { data } = await axios.get<ProvidersResponse>(
    PROVIDERS_URL, { params: { especialidad: especialidadId } }
  );
  return data.documents;
}
