
// Arrays de Datos

var administradores = [];
var socios = [];
var equipos =[];
var competencias = [];
var reportes = [];

// Listado de nombres de Clases para manejo visual de Formularios
var formularios = ["formsRegistro","formsLogin","formsMenuAdmin","formsMenuSocio","formsMenuAmbos","formsCambiarContraseña","formsCrearCompetencia","formsInscripcionCompetencia",
    "formCrearEquipo","formsEstadoSocio","formsGestionEquipo","formAsignarEquipo","formReporteSocio","formReporteAdmin","formAdminCompetencia"];

// Variable global para saber quien esta logueado y que tipo de perfil tiene

var usuarioLogeado = "";
var perfilUsuarioLogueado = "";

// Constructores 

function Administrador (nombre,email,contraseña){
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
}

function Socio (nombre,email,contraseña){
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.equipo = "Ninguno";
    this.estado = true;
}

function Equipo (nombre,logo){
    this.nombre = nombre;
    this.logo = logo;
}

function Competencia (nombre){
    this.nombre = nombre;
    this.estaTerminada = false;
}

function Reporte (competencia,equipo,socio){
    this.competencia = competencia;
    this.equipo = equipo;
    this.socio = socio;
    this.metros = "";
}


