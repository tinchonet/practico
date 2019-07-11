
$(document).ready(inicio);

function inicio(){

definirAdministradores();
baseDefault();
ocultarMultiple('formsLogin');

// Grupo de Botones para moverse entre formularios

$("#btnIrRegistro").click(MostrarFormRegistro);
$("#btnVolverLogin").click(MostrarFormLogin);
$("#btnCerrarSesion").click(MostrarFormLogin);
$("#btnCambiarContraseña").click(MostrarFormCambiarContraseña);
$("#btnMenuCrearCompetencia").click(MostrarFormCrearCompetencia);
$("#btnMenuAsignarCompetencia").click(MostrarFormAsignarCompetencia);
$("#btnGestionSocios").click(MostrarFormGestionSocios);
$("#btnGestionEquipo").click(MostrarFormsGestionEquipo);
$("#btnMenuCrearEquipo").click(MostrarFormCrearEquipo);
$("#btnMenuAsignarEquipo").click(MostrarFormAsignarEquipo);
$("#btnMenuReportes").click(MostrarFormsReportes);
$("#btnMenuIniciarCompetencia").click(MostrarFormAdministrarComptencia);

$("#btnVolverMenu1").click(MostrarMenus);
$("#btnVolverMenu2").click(MostrarMenus);
$("#btnVolverMenu3").click(MostrarMenus);
$("#btnVolverMenu4").click(MostrarMenus);
$("#btnVolverMenu5").click(MostrarMenus);
$("#btnVolverMenu6").click(MostrarMenus);
$("#btnVolverMenu7").click(MostrarMenus);
$("#btnVolverMenu8").click(MostrarMenus);
$("#btnVolverMenuGestionEquipo").click(MostrarFormsGestionEquipo);
$("#btnVolverMenuGestionEquipo2").click(MostrarFormsGestionEquipo);

// Grupo de Botones con Funcionalidad

$("#btnConfirmarRegistro").click(F01RegistrarSocio);
$("#btnLogin").click(F02Login);
$("#btnInscripcionCompetencia").click(F07AsignarCompetencia);
$("#btnCrearCompetencia").click(F09CrearCompetencia);
$("#btnConsultarEstadoSocio").click(F10EstadoUsusario);
$("#btnCambiarEstado").click(F10CambiarEstado);
$("#selectLogo").change(vistaPreviaLogo);
$("#btnSalirEquipo").click(F05SalirEquipo);
$("#btnCrearEquipo").click(F05CrearNuevoEquipo);
$("#btnAsignarEquipo").click(F05AsignarEquipo);
$("#btnConfirmarCambioContraseña").click(F04CambiarContraseña);
$("#btnGenerarReporteEquipo").click(F08ReporteAdministrador);
$("#btnIniciarCompetencia").click(F11IniciarCompetencia);
$("#btnRegistrar").click(F11RegistrarMetros);

}

function definirAdministradores(){

var administrador = new Administrador('MAREOSA','MAREOSA@GMAIL.COM','1234');
    administradores.push(administrador);

var administrador = new Administrador('ECESCO','ECESCO@GMAIL.COM','1234');
    administradores.push(administrador);

var administrador = new Administrador('ADMIN','ADMIN@GMAIL.COM','ADMIN');
    administradores.push(administrador);

}

function baseDefault(){
    
    // FUNCION A MODO DE BASE INICIAL PARA PROBAR FUNCIONALIDADES
    
var nuevoSocio = new Socio('SOCIO1','SOCIO1@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
var nuevoSocio = new Socio('SOCIO2','SOCIO2@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
var nuevoSocio = new Socio('SOCIO3','SOCIO3@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
var nuevoSocio = new Socio('SOCIO4','SOCIO4@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
var nuevoSocio = new Socio('SOCIO5','SOCIO5@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
var nuevoSocio = new Socio('SOCIO6','SOCIO6@GMAIL.COM','1234');
    socios.push(nuevoSocio);
    
socios[0].equipo = "Pro";
socios[1].equipo = "Pro";   
socios[2].equipo = "Pro";    
socios[3].equipo = "New";
socios[4].equipo = "New";
socios[5].equipo = "New";

var nuevoEquipo = new Equipo('New','img/Android.png');
    equipos.push(nuevoEquipo);
var nuevoEquipo = new Equipo('Pro','img/Ram.jpg');
    equipos.push(nuevoEquipo);

var nuevaCompetencia = new Competencia('Competencia1');
    competencias.push(nuevaCompetencia);
 
var nuevaCompetencia = new Competencia('Competencia2');
    competencias.push(nuevaCompetencia);
    
var nuevaCompetencia = new Competencia('Competencia3');
    competencias.push(nuevaCompetencia);
    
competencias[0].estaTerminada = true;
competencias[1].estaTerminada = true;

var nuevoReporte = new Reporte('Competencia1','Pro','SOCIO1');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia1','Pro','SOCIO2');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia1','Pro','SOCIO3');
    reportes.push(nuevoReporte);
       
var nuevoReporte = new Reporte('Competencia2','Pro','SOCIO1');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia2','Pro','SOCIO2');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia2','Pro','SOCIO3');
    reportes.push(nuevoReporte);
   
var nuevoReporte = new Reporte('Competencia1','New','SOCIO4');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia1','New','SOCIO5');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia1','New','SOCIO6');
    reportes.push(nuevoReporte);
       
var nuevoReporte = new Reporte('Competencia2','New','SOCIO4');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia2','New','SOCIO5');
    reportes.push(nuevoReporte);
    
var nuevoReporte = new Reporte('Competencia2','New','SOCIO6');
    reportes.push(nuevoReporte);
   
   reportes[0].metros = 350;
   reportes[1].metros = 300;
   reportes[2].metros = 250;
   reportes[3].metros = 200;
   reportes[4].metros = 150;
   reportes[5].metros = 100;
   reportes[6].metros = 50;
   reportes[7].metros = 450;
   reportes[8].metros = 150;
   reportes[9].metros = 100;
   reportes[10].metros = 50;
   reportes[11].metros = 450;
}

// Funciones para moverse entre formularios

function MostrarFormRegistro(){
    
// Muestro el formulario de Registro, Cambio el Titulo de Menus e Inicializo los input

ocultarMultiple('formsRegistro');
$("#lblTituloMenu").html("REGISTRO DE SOCIO");
$("#inRegistroNombre").val("");
$("#inRegistroMail").val("");
$("#inRegistroPass1").val("");
$("#inRegistroPass2").val("");
$("#lblRegistroExitoso").html("");

}

function MostrarFormLogin(){
    
// Muestro el formulario de Login, Cambio el Titulo de Menus e Inicializo los input
    
ocultarMultiple('formsLogin');
$("#lblTituloMenu").html("LOGIN");
$("#inLoginUser").val("");
$("#inLoginPass").val("");
$("#lblErrorLogin").html("");
$('#btnConfirmarRegistro').prop('disabled', false);
    
}


function MostrarMenus(){
    
// Si el usuario logueado es un Administrador, Muestro los menu de administrador y los botones comunes
// Si no, muestro los menu de Socio y los menus comunes
    
if ("Administrador" === perfilUsuarioLogueado){
   ocultarMultiple('formsMenuAdmin');
   mostrarClase('formsMenuAmbos');  
}
else{
    ocultarMultiple('formsMenuSocio');
    mostrarClase('formsMenuAmbos');  
}
}

function MostrarFormsReportes(){
   
if ("Administrador" === perfilUsuarioLogueado){
    ocultarMultiple('formReporteAdmin');
    $("#lblErrorReporteEquipo").html("");
    $("#tbReporteAdmin").html("");
    $("#inNombreEquipoReporte").val("");
    $("#frmImagenEquipo").attr("src","");
    
}
else{
    ocultarMultiple('formReporteSocio');
    F08ReporteSocio(usuarioLogeado);
}
}

function MostrarFormCambiarContraseña(){
    
    ocultarMultiple('formsCambiarContraseña');
    $("#lblCambioContraseñaExitoso").html("");
    $('#btnConfirmarCambioContraseña').prop('disabled', false);
    $("#inCambiarPass1").val("");
    $("#inCambiarPass2").val("");    
    
}

function MostrarFormCrearCompetencia(){
    
    $("#inCrearCompetencia").val("");
    $("#lblCreacionCompetenciaExitosa").html("");
    $("#lblCrearCompetenciaError").html("");
    
    ocultarMultiple('formsCrearCompetencia');
    
}

function MostrarFormAsignarCompetencia(){
      
    ocultarMultiple('formsInscripcionCompetencia');
    $("#inInscripcionCompetencia").val("");
    $('#btnInscripcionCompetencia').prop('disabled', false);
    $("#lblInscripcionCompetenciaError").html("");
    $("#lblInscripcionCompetenciaExitosa").html("");
    
    var equipo = equipoSocio(usuarioLogeado);
    
    $("#lblEquipoActualInscCom").html(equipo);
    
    // Si el usuario no tiene equipo "===Ninguno", muestro error y deshabilito el boton de inscripcion a competencias
    
    if(equipo === "Ninguno"){
        $("#lblInscripcionCompetenciaError").html("Debes pertenecer a un equipo completo para inscribirte en una competencia");
        $('#btnInscripcionCompetencia').prop('disabled', true);
    }
    
    // Si el Equipo no esta lleno, Muestro el error de que debe tener 3 socios y deshabilito el boton de inscripcion  a competencia
    
    else{
        if (!equipoLleno(equipo)){
            $("#lblInscripcionCompetenciaError").html("El Equipo debe contar con 3 Socios para poder participar de cualquier competencia");
            $('#btnInscripcionCompetencia').prop('disabled', true);
        }
        else{
            for (var C=0;C<socios.length;C++){
                if(socios[C].equipo === equipo && socios[C].estado === false){ 
                // Si El equipo esta completo, pero alguno de los participantes se encuentra inhabilitado, muestro error
                    $("#lblInscripcionCompetenciaError").html("Los 3 Miembros del Equipo deben ser Ususarios Habilitados para Participar");
                    $('#btnInscripcionCompetencia').prop('disabled', true);
                    break;
                }
            }
        }
    }
}

function MostrarFormGestionSocios(){
   $("#inEstadoSocio").val("");
   ocultarMultiple('formsEstadoSocio');
}

function MostrarFormsGestionEquipo(){
    
    ocultarMultiple('formsGestionEquipo');
    var equipo = equipoSocio(usuarioLogeado);
    $('#btnSalirEquipo').prop('disabled', false);
    $('#btnMenuAsignarEquipo').prop('disabled', false);
    $('#btnMenuCrearEquipo').prop('disabled', false);          
    $("#lblEquipoActualGestEqui").html(equipo);
    
    // Si no tiene equipo, deshabilito el boton de dejar equipo
    
    if (equipo === "Ninguno"){
        $('#btnSalirEquipo').prop('disabled', true);
    }
    
    // Si ya tiene equipo, deshabilito ,los botones de asignar y crear equipo 
    
    else{
        $('#btnMenuAsignarEquipo').prop('disabled', true);
        $('#btnMenuCrearEquipo').prop('disabled', true);
    }
}

function MostrarFormCrearEquipo(){
    
    $("#ErrorNombreEquipo").html("");
    $("#lblEquipoCreado").html("");
    $("#inNombreEquipo").val("");
    $('#btnCrearEquipo').prop('disabled', false);
    ocultarMultiple("formCrearEquipo");
    
    
}

function MostrarFormAsignarEquipo(){
    
    ocultarMultiple("formAsignarEquipo");
    $('#btnAsignarEquipo').prop('disabled', false);
    $("#ErrorNombreEquipo2").html("");
    $("#lblEquipoAsignado").html("");
    $("#inNombreEquipo2").val("");
    
}

function MostrarFormAdministrarComptencia(){
    ocultarMultiple("formAdminCompetencia");
    $('#btnIniciarCompetencia').prop('disabled', false);
    $("#btnRegistrar").prop('disabled', true);
    $("#inNombreCompetencia").val("");
    $("#lblIniciarCompetencia").html("");
    $("#inMtsRecorridos").val("");
    $("#lblNombreSocioComptencia").html("");
    $("#ErrorNombreComptencia").html("");
    $("#tbAdminCompetencia").html("")
    $("#lblSiguienteCompetidor").html("");
    $("#lblCompetenciaIniciada").html("");
    $("#ErrorMetrosRecorridos").html("");
    
}											

// Funcionalidades del Programa

function F01RegistrarSocio(){

//Cargo en Variables los datos a verificar

var nombre = $("#inRegistroNombre").val();
var eMail = $("#inRegistroMail").val();
var pass1 = $("#inRegistroPass1").val();
var pass2 = $("#inRegistroPass2").val();
var emailUnico = false;
var usuarioUnico = false;
var passOK = false;

// verifico que el campo no este vacio, si esta vacio muestro error
// si el ususario NO existe, es unico. esta ok para registrar, si ya existe, muestro error

if(nombre === ""){
    $("#lblRegistroNombreError").html("  Este campo es Obligatorio");
}
else{
    usuarioUnico = !usuarioExiste(nombre);
    if(!usuarioUnico){
        $("#lblRegistroNombreError").html("  El Usuario ya se encuentra registrado");
    }
    else{
        $("#lblRegistroNombreError").html("");
    }
}
    
// verifico que el campo no este vacio, si esta vacio muestro error
// si el mail NO existe, es unico. esta ok para registrar 

if(eMail === ""){
    $("#lblRegistroEMailError").html("  Este campo es Obligatorio");
}
else{
    emailUnico = !mailExiste(eMail);
    if(!emailUnico){
        $("#lblRegistroEMailError").html("  El E-Mail ya se encuentra registrado");
    }
    else{
        $("#lblRegistroEMailError").html("");
    }
}

// verifico que el no este vacio, si esta vacio muestro error
// verifico que las contrasenas coincidan, si no coinciden, muestro error
// verifico que la password ademas sea valida

if(pass1 === ""){
    $("#lblRegistroPassError").html("  Este campo es Obligatorio");
}
else{
    if(pass1 !== pass2){
        $("#lblRegistroPassError").html("  Las Contraseñas no coinciden");
    }
    else{
        passOK = validarContraseña(pass1);
        if(!passOK){
            $("#lblRegistroPassError").html("  La Contraseña no es Valida, debe tener al menos 1 numero y 1 letra");
        }
        else{
            $("#lblRegistroPassError").html("");
        }
    }
}

// Si todas las condicioens son verdaderas, registro el nuevo socio.

if (emailUnico && passOK && usuarioUnico){
    var nuevoSocio = new Socio(nombre,eMail,pass1);
    socios.push(nuevoSocio);
    $("#lblRegistroExitoso").html("   SOCIO REGISTRADO CON EXITO");
    $('#btnConfirmarRegistro').prop('disabled', true);
}

}

function F02Login(){
  
    var EMail = $("#inLoginUser").val();
    var Password = $("#inLoginPass").val();
    var resultadoLogin = validarLogin(EMail,Password);
    $("#lblErrorLogin").html("");
    
    switch(resultadoLogin){
        case "Socio":
            usuarioLogeado = buscarNombre(EMail);
            perfilUsuarioLogueado = resultadoLogin;
            $("#lblTituloMenu").html("BIENVENIDO : " + usuarioLogeado);
            MostrarMenus();
        break;
        case "Administrador":
            usuarioLogeado = buscarNombre(EMail);
            perfilUsuarioLogueado = resultadoLogin;
            $("#lblTituloMenu").html("BIENVENIDO : " + usuarioLogeado);
            MostrarMenus();
        break;
        case"Inexistente":
            // MOSTRAR ERROR DE QUE LOS DATOS SON INCORRECTOS
            $("#lblErrorLogin").html("El Ususario No Existe");
        break;
        case"Inhabilitado":
            // MOSTRAR ERROR DE QUE EL USUSARIO ESTA INHABILITADO
            $("#lblErrorLogin").html("El Ususario Esta Inhabilitado");
        break;
        case"Incorrecta":
            // MOSTRAR ERROR DE QUE EL USUSARIO ESTA INHABILITADO
            $("#lblErrorLogin").html("La Contraseña es Incorrecta");
        break;
    }
}

function F03CerrarSesion(){
    
    MostrarFormLogin();
    usuarioLogeado = "";
    perfilUsuarioLogueado = "";
    
}

function F04CambiarContraseña(){
    
    var pass1 = $("#inCambiarPass1").val();
    var pass2 = $("#inCambiarPass2").val();
    var passOK = false;
    
// verifico que el no este vacio, si esta vacio muestro error
// verifico que las contrasenas coincidan, si no coinciden, muestro error
// verifico que la password ademas sea valida

if(pass1 === ""){
    $("#lblCambiarPassError").html("  Este campo es Obligatorio");
}
else{
    if(pass1 !== pass2){
        $("#lblCambiarPassError").html("  Las Contraseñas no coinciden");
    }
    else{
        passOK = validarContraseña(pass1);
        if(!passOK){
            $("#lblCambiarPassError").html("  La Contraseña no es Valida, debe tener al menos 1 numero y 1 letra");
        }
        else{
            $("#lblCambiarPassError").html("");
            $("#lblCambioContraseñaExitoso").html("La Contraseña se cambio con Extito");
            $('#btnConfirmarCambioContraseña').prop('disabled', true);
            for (var C=0;C<socios.length;C++){
                if(socios[C].nombre === usuarioLogeado){ 
                    socios[C].contraseña = pass1;
                    break;
                }
            }
        }
    }
}
      
}

function F05CrearNuevoEquipo(){
    
    $("#ErrorNombreEquipo").html("");
    $("#lblEquipoCreado").html("");
    var nombreEquipo = $("#inNombreEquipo").val();
    var equipoLogo = $("#selectLogo").find(":selected").val();
    

    if (equipoExiste(nombreEquipo)){
       $("#ErrorNombreEquipo").html("El equipo ya existe");
    }
    else{
        if(validarNombreEquipo(nombreEquipo)){
            var nuevoEquipo = new Equipo(nombreEquipo,equipoLogo);
            equipos.push(nuevoEquipo);
            for (var C=0;C<socios.length;C++){
                if(socios[C].nombre === usuarioLogeado){ 
                    socios[C].equipo = nombreEquipo;
                    $("#lblEquipoCreado").html("Equipo creado con exito");
                    $('#btnCrearEquipo').prop('disabled', true);
                    break;
                }
            }
        }
        else{
            $("#ErrorNombreEquipo").html("El nombre del Equipo no es Valido");
        }
    }
}    

function F05SalirEquipo(){
        for (var C=0;C<socios.length;C++){
            if(socios[C].nombre === usuarioLogeado){ 
                socios[C].equipo = "Ninguno";
                break;
            }
        }
        MostrarFormsGestionEquipo();
}

function F05AsignarEquipo(){
    
    var nombreEquipo = $("#inNombreEquipo2").val();
    $("#ErrorNombreEquipo2").html("");
    $("#lblEquipoAsignado").html("");
    
    if (!equipoExiste(nombreEquipo)){
        $("#ErrorNombreEquipo2").html("El Equipo No Existe");
    }
    else{
            if(equipoLleno(nombreEquipo)){
                $("#ErrorNombreEquipo2").html("El Equipo esta lleno");
            }
            else{
                $("#lblEquipoAsignado").html("Asignado con Exito");
                $('#btnAsignarEquipo').prop('disabled', true);
                for (var C=0;C<socios.length;C++){
                if(socios[C].nombre === usuarioLogeado){ 
                    socios[C].equipo = nombreEquipo;
                    break;
                }
            }
        }
    }
}

function F07AsignarCompetencia(){
    
    // Inicializo campos del HTML y variables basicas
    
    var equipoActual = equipoSocio(usuarioLogeado);
    var nombreCompetencia = $("#inInscripcionCompetencia").val();
    $("#lblInscripcionCompetenciaExitosa").html("");
    $("#lblInscripcionCompetenciaError").html("");
    
    if(competenciaExiste(nombreCompetencia)){
       if(competenciaTerminada(nombreCompetencia)){
          $("#lblInscripcionCompetenciaError").html("La competencia ya finalizo!");
       }
       else{
           if(equipoInscripto(nombreCompetencia,equipoActual)){
               $("#lblInscripcionCompetenciaError").html("El Equipo ya esta inscripto en esta competencia");
           }
           else{
           // Si estan dadas todas las condiciones, recorro el array de socios para encontrar a los 3
           // miembros de un mismo grupo
                for (var x = 0; x < socios.length; x ++){
                    if(socios[x].equipo === equipoActual){
                         var inscripcion = new Reporte(nombreCompetencia,equipoActual,socios[x].nombre);
                         reportes.push(inscripcion);
                    }
                }
                $("#lblInscripcionCompetenciaExitosa").html("INSCRIPCION REALIZADA CON EXITO !! ");
            }
       }
    }
    else{
      $("#lblInscripcionCompetenciaError").html("El nombre de Competencia no existe");  
    }
}

function F08ReporteSocio(nombreSocio){

var titulos = "<table><tr><th>  Competencia  </th><th>  Equipo  </th><th>  Metros Recorridos  </th></tr>";    

var tabla = titulos;
var fila = "";

for (var X=0; X < reportes.length ;X++){
    if(reportes[X].socio === nombreSocio){
        fila = "<tr><td>" + reportes[X].competencia + "</td><td>" + reportes[X].equipo + "</td><td>" + reportes[X].metros + "</td>"; 
        tabla = tabla + fila;
    }
}

tabla = tabla + "</table>";  

$("#tbReporteSocio").html(tabla);     
}

function F08ReporteAdministrador(){

//GENERO EL HEADER DE LA TABLA E INICIALIZO EL RESTO DE LAS VARIABLES
var titulos = "<table><tr><th>  Competencia  </th><th>  Socio  </th><th>  Metros Recorridos  </th></tr>";    
var nombreEquipo = $("#inNombreEquipoReporte").val();
var tabla = "" + titulos;
var fila = "";
var MetrosAcum = 0;
var registros = 0;

// REVISO QUE EXISTA EL EQUIPO EN LA TABLA DE EQUIPOS
if(!equipoExiste(nombreEquipo)){
    $("#lblErrorReporteEquipo").html("El Equipo no Existe");
    $("#tbReporteAdmin").html("");
}
else{

// SI EXISTE, RECORRO LA TABLA DE REPORTES PARA OBTENER TODOS LOS REGISTROS DEL EQUIPO
for (var X=0; X < reportes.length ;X++){
    if(reportes[X].equipo === nombreEquipo){
        fila = "<tr><td>" + reportes[X].competencia + "</td><td>" + reportes[X].socio + "</td><td>" + reportes[X].metros + "</td>"; 
        MetrosAcum = MetrosAcum + reportes[X].metros;
        registros = registros + 1; 
        tabla = tabla + fila;
    }
    // CADA 3 REGISTROS AGREGO UNA NUEVA LINEA CON EL TOTAL DEL EQUIPO EN ESA COMPETENCIA
    if ( registros === 3 ){
        fila = "<tr><td class=tdTotalEquipo> Total del Equipo</td><td class=tdTotalEquipo></td><td class=tdTotalEquipo>" + MetrosAcum + "</td>";
        tabla = tabla + fila;
        registros = 0;
        MetrosAcum = 0;
    }
}
   
    tabla = tabla + "</table>";  

//  BUSCO LA IMAGEN DEL EQUIPO PARA MOSTRARLA
for (var C=0;C<equipos.length;C++){
    if(equipos[C].nombre === nombreEquipo){ 
        $("#frmImagenEquipo").attr("src",equipos[C].logo);
        break;
    }
}

    $("#tbReporteAdmin").html(tabla);

}
}




function F09CrearCompetencia(){
    
    // Creo una nueva competencia, el nombre no puede estar duplicado.
    
    var nombreCompetencia = $("#inCrearCompetencia").val();
    $("#lblCreacionCompetenciaExitosa").html("");
    $("#lblCrearCompetenciaError").html("");

    if(!competenciaExiste(nombreCompetencia)){
        var nuevaCompetencia = new Competencia(nombreCompetencia);
        competencias.push(nuevaCompetencia); 
        $("#lblCreacionCompetenciaExitosa").html("Creacion Exitosa");
    }
    else{
        $("#lblCrearCompetenciaError").html("Nombre Duplicado");
    }  
}

function F10EstadoUsusario() {
    var nombreSocio = $("#inEstadoSocio").val();
    $("#lblErrorNombreSocio").html("");
    if (usuarioExiste(nombreSocio)) {
        if (estadoActualSocio(nombreSocio)) {
            $("#lblEstadoActual").html("Habilitado");
        } else {
            $("#lblEstadoActual").html("Inhabilitado");
        }

    } else {
        $("#lblErrorNombreSocio").html("Usuario Inexistente");
    }
}

function F10CambiarEstado(){
    
   var nombreSocio = $("#inEstadoSocio").val();
   
    if (usuarioExiste(nombreSocio)){
       for (var x = 0; x < socios.length; x ++){
          if (nombreSocio === socios[x].nombre){
              if (socios[x].estado === true){
                  socios[x].estado = false;
                   $("#lblEstadoActual").html("Inhabilitado");
                }else{
                  socios[x].estado = true;
                  $("#lblEstadoActual").html("Habilitado");
              }
          }
      }
  }
}


// ADMINISTRADOR DE COMPETENCIAS

function F11GenerarTablaCompetencia(nombreCompetencia){
    var titulos = "<table><tr><th>  Equipo  </th><th>  Socio  </th><th>  Metros Recorridos  </th></tr>";
    var tabla = titulos;
    var fila = "";
    var nombreCompetencia = $("#inNombreCompetencia").val();
    if (competenciaExiste(nombreCompetencia)) {
        if (!competenciaTerminada(nombreCompetencia)) {
            for (var X = 0; X < reportes.length; X++) {
                if (reportes[X].competencia === nombreCompetencia) {
                    fila = "<tr><td>" + reportes[X].equipo + "</td><td>" + reportes[X].socio + "</td><td>" + reportes[X].metros + "</td>";
                    tabla = tabla + fila;
                }
            }

        }
    }
    tabla = tabla + "</table>";

    $("#tbAdminCompetencia").html(tabla);
}

function F11IniciarCompetencia() {

    var nombreCompetencia = $("#inNombreCompetencia").val();
    var siguienteCompetidor = "";
    $("#ErrorNombreComptencia").html("");

    // Reviso condiciones para el inicio de una competencia
    // 
    // Primero, debe existir el nombre de la competencia
    if(competenciaExiste(nombreCompetencia)){
        // Segundo, no debe de haber terminado
        if(!competenciaTerminada(nombreCompetencia)){
            // Tercero, debe de haber al menos 1 equipo anotado en la competencia
            if(tieneParticipantes(nombreCompetencia)){
                
                // Muestro por Primera vez la tabla
                F11GenerarTablaCompetencia(nombreCompetencia);
                
                // Habilito el boton de registro de metros y deshabilto el de iniciar competencia y el del volver al menu
                // ya que no se podra iniciar otra competencia o salir al menu en tanto la actual no finalize
                
                $("#btnRegistrar").prop('disabled', false);
                $("#btnIniciarCompetencia").prop('disabled', true);
                $("#btnVolverMenu8").prop('disabled', true);
                
                
                for (var x = 0; x < reportes.length; x++) {
                    if (reportes[x].metros === "" && reportes[x].competencia === nombreCompetencia) {
                        siguienteCompetidor = reportes[x].socio;
                        break;

                    }
                }
                
                $("#lblAuxSiguienteCompetidor").html("Siguiente Competidor: ");    
                $("#lblSiguienteCompetidor").html(siguienteCompetidor);
                $("#lblCompetenciaIniciada").html("Competencia Iniciada: " + nombreCompetencia);

                if (siguienteCompetidor === ""){
                    for (var x = 0; competencias.length; x++) {
                        if (competencias[x].nombre === nombreCompetencia) {
                            // Cuando no tengo mas competidores, doy por terminada la competencia y deshabilito el boton registrar
                            // Habilito la opcion de volver al menu o iniciar otra competencia
                            competencias[x].estaTerminada = true;
                            $("#lblSiguienteCompetidor").html("No Hay Mas Competidores");
                            $("#lblCompetenciaIniciada").html("La competencia ha Finalizado");
                            $("#lblAuxSiguienteCompetidor").html("");
                            $("#btnRegistrar").prop('disabled', true);
                            $("#btnIniciarCompetencia").prop('disabled', false);
                            $("#btnVolverMenu8").prop('disabled', false);
                        }
                    }
                }  
                
            }
            else{
              $("#ErrorNombreComptencia").html("La Competencia no tiene participantes registrados");   
            }
        }
        else{
            $("#ErrorNombreComptencia").html("La Competencia ya ha terminado"); 
        }
    }
    else{
        $("#ErrorNombreComptencia").html("La Competencia No Existe");  
    }
}
 
var NroParticipante = 1;

function F11RegistrarMetros(){
    var nombreCompetencia = $("#inNombreCompetencia").val();
    var siguienteCompetidor =  $("#lblSiguienteCompetidor").html();
    var metros = parseInt($("#inMtsRecorridos").val());
    var controlMetros = false;
    
    $("#ErrorMetrosRecorridos").html("");
    
    // Controlo que lo ingresado sea un numero
    if (isNaN(metros)){
        $("#ErrorMetrosRecorridos").html("Debe ingresar un Numero");
    }
    else{
        
        // Controlo que los metros ingresados sean multiplos de 50 para los 2 primeros participantes o 
        // sean multiplos de 25 para el tercer participante 
        
        if (NroParticipante === 3){
            controlMetros = (metros%25 === 0);
        }
        else{
            controlMetros = (metros%50 === 0);
        }
        
        // Si se pasa la validacion anterior, escribo los metros en el reporte 
        
        if(controlMetros){
            for (var x = 0; x < reportes.length; x++){
            if (reportes[x].socio === siguienteCompetidor && reportes[x].competencia === nombreCompetencia) {
                reportes[x].metros = metros;
            }
            }
            F11IniciarCompetencia();
            
            // Adelanto el contador de participante, si ya esta en 3, pasa al siguiente equipo y vuelve a 1
            if(NroParticipante === 3){
                NroParticipante = 1;
            }
            else{
                NroParticipante = NroParticipante + 1;
            }
        }
        
        // Manejo de errores con en Nro de Metros
        else{
            if(NroParticipante === 3){
                $("#ErrorMetrosRecorridos").html("Debe ser multiplo de 25");
            }
            else{
                $("#ErrorMetrosRecorridos").html("Debe ser multiplo de 50");
            }
        }
    } 
}


function vistaPreviaLogo(){
    $("#frmVistaPreviaLogo").attr("src",$("#selectLogo").find(":selected").val());
}
