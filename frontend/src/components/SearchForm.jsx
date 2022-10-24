import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import SearchIcon from '@mui/icons-material/Search';

const especialidades = [
  {id: 1076, label: "Acelerador Lineal"},
  {id: 1194, label: "Acompañante Terapeutico"},
  {id: 1001, label: "Adolescencia y Pubertad"},
  {id: 1002, label: "Alergia e Inmunología"},
  {id: 1003, label: "Alergia e Inmunología Infantil"},
  {id: 1163, label: "Ambulancias"},
  {id: 1077, label: "Anatomía Patológica"},
  {id: 1004, label: "Andrología"},
  {id: 1181, label: "Anestesiología"},
  {id: 88, label: "Anestesiología"},
  {id: 1078, label: "Angiografía Digital"},
  {id: 1079, label: "Angiografías"},
  {id: 1080, label: "Angioplastías"},
  {id: 1081, label: "Angioplastías y Valvuloplastías Pediátricas"},
  {id: 1131, label: "Articulación Temporo - Mandibular"},
  {id: 1082, label: "Audiometrías"},
  {id: 1005, label: "Cardiología"},
  {id: 1006, label: "Cardiología Infantil"},
  {id: 1170, label: "Cardiológicas"},
  {id: 1130, label: "Centros de Internación"},
  {id: 1171, label: "Centros de Vacunación"},
  {id: 1007, label: "Cirugía Cardíaca Infantil"},
  {id: 1008, label: "Cirugía Cardiovascular"},
  {id: 1009, label: "Cirugía de Cabeza y Cuello y Maxilo - Facial"},
  {id: 1010, label: "Cirugía de Cabeza y Cuello y Maxilo - Facial Infan"},
  {id: 1011, label: "Cirugía de Mano"},
  {id: 1012, label: "Cirugía de Quemados"},
  {id: 1013, label: "Cirugía del Pie"},
  {id: 1133, label: "Cirugia Dento - Maxilar"},
  {id: 1014, label: "Cirugía General"},
  {id: 1015, label: "Cirugía Infantil"},
  {id: 1191, label: "Cirugía Máximo Facial"},
  {id: 1016, label: "Cirugía Oncológica"},
  {id: 1017, label: "Cirugía Plástica Reparadora"},
  {id: 1018, label: "Cirugía Torácica"},
  {id: 1197, label: "Cirugía Traumatologica Bucomaxilofacial"},
  {id: 1019, label: "Cirugía Vascular Periférica"},
  {id: 1083, label: "Citodiagnóstico"},
  {id: 87, label: "Clinica de Rehabilitacion"},
  {id: 1020, label: "Clínica Médica"},
  {id: 1183, label: "Consultorios Externos"},
  {id: 1084, label: "Densitometrías Oseas"},
  {id: 1021, label: "Dermatología"},
  {id: 1022, label: "Dermatología Infantil"},
  {id: 1200, label: "Diabetología"},
  {id: 1184, label: "Diagnostico por Imagenes"},
  {id: 1196, label: "Drenage Linfatico Manual"},
  {id: 1201, label: "Drogueria"},
  {id: 1085, label: "Ecocardiografía"},
  {id: 1086, label: "Ecocardiografía Infantil"},
  {id: 1087, label: "Ecografías"},
  {id: 1088, label: "Ecografías Infantiles"},
  {id: 1159, label: "Educación Especial"},
  {id: 1089, label: "Electrocardiografía Infantil"},
  {id: 1090, label: "Electrocardiografía y Electrocardiografía Dinámica"},
  {id: 1091, label: "Electroencefalografía"},
  {id: 1092, label: "Electroencefalografía Infantil"},
  {id: 1093, label: "Electromiografías"},
  {id: 1182, label: "Emergencias"},
  {id: 1023, label: "Endocrinología"},
  {id: 1024, label: "Endocrinología Infantil"},
  {id: 1134, label: "Endodoncia"},
  {id: 1094, label: "Endoscopías Digestivas"},
  {id: 1095, label: "Endoscopías Digestivas Pediátricas"},
  {id: 1097, label: "Endoscopías Respiratorias"},
  {id: 1098, label: "Endoscopías Urológicas"},
  {id: 1179, label: "Enfermería"},
  {id: 1176, label: "Estimulación Cognitiva Mayores"},
  {id: 1175, label: "Estimulación Cognitiva Mayores Adultos"},
  {id: 1177, label: "Estimulación Cognitiva Menores"},
  {id: 1178, label: "Estimulación Cognitiva niños"},
  {id: 1160, label: "Estimulación Temprana"},
  {id: 1025, label: "Estomatología"},
  {id: 1135, label: "Estomatología Odontología"},
  {id: 1102, label: "Estudios Mamarios"},
  {id: 1161, label: "Evaluación Neurocognitiva"},
  {id: 1156, label: "Farmacias"},
  {id: 1186, label: "Fertilización Asistida"},
  {id: 1026, label: "Fisiatría"},
  {id: 1027, label: "Flebología"},
  {id: 1103, label: "Fonoaudiología"},
  {id: 1028, label: "Gastroenterología"},
  {id: 1029, label: "Gastroenterología Infantil"},
  {id: 1030, label: "Genética Médica"},
  {id: 1031, label: "Geriatría"},
  {id: 1032, label: "Ginecología"},
  {id: 1033, label: "Ginecología Infanto-Juvenil"},
  {id: 1034, label: "Hematología"},
  {id: 1035, label: "Hematología Pediátrica"},
  {id: 1203, label: "Hemodialisis"},
  {id: 1104, label: "Hemodinamia Adultos"},
  {id: 1105, label: "Hemodinamia Infantil"},
  {id: 1036, label: "Hemostasia y Trombosis"},
  {id: 109, label: "Hemoterapia"},
  {id: 1037, label: "Hepatología"},
  {id: 1143, label: "Hospital de Día"},
  {id: 1199, label: "Imagenes odontologicas"},
  {id: 1132, label: "Implantes"},
  {id: 1038, label: "Infectología"},
  {id: 1039, label: "Infectología Infantil"},
  {id: 1180, label: "Internación Domiciliaria"},
  {id: 1144, label: "Internación Psiquiátrica"},
  {id: 1106, label: "Kinesiología - Terapia Física"},
  {id: 1107, label: "Kinesiología Pediátrica"},
  {id: 1108, label: "Laboratorio de Análisis Clínicos"},
  {id: 1109, label: "Mapeos Cerebrales"},
  {id: 1166, label: "Médicas"},
  {id: 1040, label: "Medicina del Dolor"},
  {id: 1110, label: "Medicina Nuclear"},
  {id: 1111, label: "Medicina Nuclear Infantil"},
  {id: 1041, label: "Micología Médica"},
  {id: 1112, label: "Monitoreo Fetal"},
  {id: 1042, label: "Nefrología"},
  {id: 1043, label: "Nefrología Infantil"},
  {id: 39, label: "Neonatologia"},
  {id: 1044, label: "Neumonología"},
  {id: 1045, label: "Neumonología Infantil"},
  {id: 1046, label: "Neurocirugía"},
  {id: 1047, label: "Neurocirugía Infantil"},
  {id: 1048, label: "Neurofisiología"},
  {id: 1049, label: "Neurofisiología Infantil"},
  {id: 1050, label: "Neurología"},
  {id: 1051, label: "Neurología Infantil"},
  {id: 1052, label: "Neurooftalmología"},
  {id: 1113, label: "Nutrición"},
  {id: 1053, label: "Nutrición y Diabetología"},
  {id: 1054, label: "Nutrición y Diabetología Infanto - Juvenil"},
  {id: 1168, label: "Obstétricas"},
  {id: 1055, label: "Obstetricia"},
  {id: 1136, label: "Odontología Discapacitados"},
  {id: 1137, label: "Odontología General"},
  {id: 1138, label: "Odontopediatría"},
  {id: 1056, label: "Oftalmología"},
  {id: 1057, label: "Oftalmología Infantil"},
  {id: 1164, label: "Oftalmológicas"},
  {id: 1058, label: "Oncología"},
  {id: 1059, label: "Oncología Infantil"},
  {id: 1157, label: "Opticas"},
  {id: 1145, label: "Orientación Vocacional"},
  {id: 1139, label: "Ortodoncia y Ortopedia de Maxilares"},
  {id: 1060, label: "Ortopedia y Traumatología"},
  {id: 1061, label: "Ortopedia y Traumatología Infantil"},
  {id: 1114, label: "Ortóptica"},
  {id: 1062, label: "Osteopatías Médicas"},
  {id: 1063, label: "Otorrinolaringología"},
  {id: 1064, label: "Otorrinolaringología Infantil"},
  {id: 1169, label: "Otorrinolaringológicas"},
  {id: 1188, label: "Oxigenoterapia Hiperbarica"},
  {id: 1065, label: "Patología Mamaria"},
  {id: 1066, label: "Pediatría"},
  {id: 1172, label: "Pediátricas"},
  {id: 1140, label: "Periodoncia"},
  {id: 1115, label: "Potenciales Evocados"},
  {id: 1116, label: "Prevención Médica Integral"},
  {id: 1067, label: "Proctología"},
  {id: 1202, label: "Prótesis Dentobucomaxilar"},
  {id: 1146, label: "Psicodiagnóstico"},
  {id: 1147, label: "Psicología"},
  {id: 1148, label: "Psicología Adolescentes"},
  {id: 1149, label: "Psicología Gerontes"},
  {id: 1150, label: "Psicología Infantil"},
  {id: 1151, label: "Psicología Pareja y Familia"},
  {id: 1185, label: "Psicomotricidad"},
  {id: 1152, label: "Psicopedagogía"},
  {id: 1117, label: "Psicoprofilaxis del Parto"},
  {id: 1153, label: "Psiquiatría"},
  {id: 1162, label: "Psiquiatría Infantil"},
  {id: 1167, label: "Psiquiátricas"},
  {id: 1189, label: "Punciones Biópsicas Bajo Control Ecográfico"},
  {id: 1118, label: "Punciones Biópsicas Bajo Control Ecográfico"},
  {id: 1119, label: "Punciones Biópsicas Bajo Control Tomográfico"},
  {id: 1193, label: "Punciones de Tiroides Bajo Control Ecográfico"},
  {id: 1165, label: "Quemados"},
  {id: 1120, label: "Quimioterapia"},
  {id: 1121, label: "Radiología"},
  {id: 1141, label: "Radiología Dental"},
  {id: 1122, label: "Radiología Infantil"},
  {id: 1123, label: "Radiología Mamaria"},
  {id: 1124, label: "Radioterapia y Telecobaltoterapia"},
  {id: 1125, label: "Rehabilitación"},
  {id: 1126, label: "Rehabilitación Cardiovascular"},
  {id: 1198, label: "Rehabilitacion Pulmonar"},
  {id: 1127, label: "Resonancia Nuclear Magnética"},
  {id: 1068, label: "Reumatología"},
  {id: 1069, label: "Reumatología Infantil"},
  {id: 1195, label: "RPG"},
  {id: 1154, label: "Terapia Ocupacional"},
  {id: 1128, label: "Tomografía Axial Computada"},
  {id: 1070, label: "Toxicología"},
  {id: 1071, label: "Toxicología Infantil"},
  {id: 1187, label: "Transtornos Alimentarios y Obesidad"},
  {id: 1155, label: "Tratamiento de Adicciones"},
  {id: 1190, label: "Tratamiento de Trastornos del Sueño"},
  {id: 1072, label: "Traumatología"},
  {id: 1173, label: "Traumatológicas"},
  {id: 1142, label: "Urgencias Odontológicas"},
  {id: 1129, label: "Urodinamia"},
  {id: 1073, label: "Uroginecología"},
  {id: 1074, label: "Urología"},
  {id: 1075, label: "Urología Infantil"},
]

function SearchForm({loading, defaultEspecialidad, onEspecialidadChange, onSearchClick}) {

  function handleSelectChange(e) {
    onEspecialidadChange(e.target.value);
  }

  function handleSearchClick() {
    onSearchClick();
  }

  return (
    <Grid container>
      <Grid xs={0} md />
      <Grid xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="especialidades">
            Especialidad
          </InputLabel>
          <NativeSelect
            onChange={handleSelectChange}
            defaultValue={defaultEspecialidad}
            inputProps={{
              name: 'especialidades',
              id: 'especialidades',
            }}
          >
            {especialidades.map(e => <option key={e.id} value={e.id}>{e.label}</option> )}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid xs={12} md={3}>
        <LoadingButton
          fullWidth
          startIcon={<SearchIcon />}
          variant="contained"
          loading={loading}
          onClick={handleSearchClick}
        >
          Buscar
        </LoadingButton>
      </Grid>
      <Grid xs={0} md />
    </Grid>
  )
}

export default SearchForm;
