

function usuarioExiste(nombre){
    // recibe un nombre y recorre el array de administradores y despues el de socios
    // retorno true si existe alguien con ese nombre y false si no encontre nada
    
    var existe = false;
    
    for (var C=0;C<administradores.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el nombre que estoy validando
            if(administradores[C].nombre === nombre){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                existe = true;
                break;
            }
    }
    
    // Si recorri los administradores y el nombre aun no se encuentra, recorro los Socios
    
    if(existe === false){
        for (var C=0;C<socios.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el nombre que estoy validando
            if(socios[C].nombre === nombre){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                existe = true;
                break;
            }
        }
    }
    
    // Si no lo encuentro, devuelvo false
    return existe; 
}

function mailExiste(email){
    // recibe un email y recorre el array de administradores y despues el de socios
    // retorno true si existe alguien con ese mail y false si no encontre nada
    
        var existe = false;
    
    for (var C=0;C<administradores.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el email que estoy validando
            if(administradores[C].email === email){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                existe = true;
                break;
            }
    }
    
    // Si recorri los administradores y el email aun no se encuentra, recorro los Socios
    
    if(existe === false){
        for (var C=0;C<socios.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el email que estoy validando
            if(socios[C].email === email){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                existe = true;
                break;
            }
        }
    }
    
    // Si no lo encuentro, devuelvo false
    return existe; 
}

function equipoExiste(nombreEquipo){
    // Recorro el array de grupos para ver si el grupo que ingrese existe en ese array
    // devuelvo True si existe , False si no
    
    var bandera = false;
    
    for (var C=0;C<equipos.length;C++){
            // Recorro el Array de Socios y comparo el nombre de grupo en cada 
            // posicion con el nombre que estoy buscando
            if(equipos[C].nombre === nombreEquipo){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                bandera = true;
                break;
            }
    }
    // Si no lo encuentro, devuelvo false
    return bandera;
}

function equipoLleno(nombreEquipo){
    // recorro el arrary de socios y cuento cuantas veces encuentro ese grupo
    // si integrantes = 3, grupo lleno, devuelvo true
    
    var integrantes = 0;
    
    for (var C=0;C<socios.length;C++){
            // Recorro el Array de Socios y comparo el nombre de grupo en cada 
            // posicion con el nombre que estoy buscando
            if(socios[C].equipo === nombreEquipo){ 
                // si encuentro una coincidencia, sumo 1 integrante
                integrantes = integrantes + 1;
                
            }
    }
    
// Si tengo 3 integrantes, el grupo esta lleno, devuelvo True

    if(integrantes >= 3){
        return true;
    }
    else{
        return false;
    }
}

function equipoSocio(nombreSocio){
    // busco en el array de socios y devuelvo el nombre del equipo del socio
    
    for (var C=0;C<socios.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el nombre que estoy validando
            if(socios[C].nombre === nombreSocio){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                return socios[C].equipo;
                break;
            }
        }
}

function validarNombreEquipo(nombreEquipo){
    // la funcion recibe un string y valida que la primer posicion sea mayuscula
    // el resto minuscula y solo sean letras
    // si cumple con la condicion, devuelvo True, si no False.
    
    var primMayus = esMayus(nombreEquipo.charAt(0));
    var soloLetras = true;
    var restoMinus = true;
    
    for (var C=1;C<nombreEquipo.length;C++){
        if (!esMinus(nombreEquipo.charAt(C))){
            restoMinus = false;
            break;
        }
    }
    
    for (var C=0;C<nombreEquipo.length;C++){
        if (!esLetra(nombreEquipo.charAt(C))){
            soloLetras = false;
            break;
        }
    }
    
    return soloLetras && restoMinus && primMayus;
    
}

function esMayus(Letra){
    var Mayus = Letra.toUpperCase();
    var Minus = Letra.toLowerCase();
    
    return (Mayus === Letra && Minus !== Letra);
}

function esMinus(Letra){
    var Mayus = Letra.toUpperCase();
    var Minus = Letra.toLowerCase();
    
    return (Mayus !== Letra && Minus === Letra);
}

function esLetra(Letra) {
  return Letra.toLowerCase() !== Letra.toUpperCase();
}

function competenciaExiste(nombreCompetencia){
    // recorro la lista de competencias y devuelvo true si existe, false si no
    
    var bandera = false;
    
    for (var C=0;C<competencias.length;C++){
            // Recorro el Array de Competencias y comparo el nombre de grupo en cada 
            // posicion con el nombre que estoy buscando
            if(competencias[C].nombre === nombreCompetencia){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                bandera = true;
                break;
            }
    }
    // Si no lo encuentro, devuelvo false
    return bandera;  
}

function competenciaTerminada(nombreCompetencia){
    // recorro la lista de competencias y devuelvo true si esta terminada y false si no esta terminada
    
    for (var C=0;C<competencias.length;C++){
            // Recorro el Array de Competencias y comparo el nombre de grupo en cada 
            // posicion con el nombre que estoy buscando
            if(competencias[C].nombre === nombreCompetencia){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                return competencias[C].estaTerminada;
                break;
            }
    }
    // Si no lo encuentro, devuelvo false 
}

function tieneParticipantes(nombreCompetencia){
    
    // asumiendo que una competencia ya existe, reviso si tiene participantes registrados en la tabla de reportes
    
    var bandera = false;
    
    for (var C=0;C<reportes.length;C++){
            // Recorro el Array de reportes y busco el nombre de la competencia
            if(reportes[C].competencia === nombreCompetencia){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                bandera = true;
                break;
            }
    }
    
    return bandera;
    // Si no lo encuentro, devuelvo false 
}

function equipoInscripto(nombreCompetencia,nombreEquipo){
    
    var bandera = false;
    
    for (var C=0;C<reportes.length;C++){
            // Recorro el Array de reportes en busca del equipo 
            if(reportes[C].equipo === nombreEquipo && reportes[C].competencia === nombreCompetencia){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                bandera = true;
                break;
            }
        }
    return bandera;
}

function ocultarClase(clase){
    
    //Oculto todos los elementos de 1 clase
    
var elementosClase = document.getElementsByClassName(clase);

for (var i = 0; i < elementosClase.length; i ++) {
    elementosClase[i].style.display = 'none';
}
    
}

function mostrarClase(clase){
    
    //Muestro todos los elementos de 1 clase
    
var elementosClase = document.getElementsByClassName(clase);

for (var i = 0; i < elementosClase.length; i ++) {
    elementosClase[i].style.display = 'initial';
}
    
}

function ocultarMultiple(dejarClase){
    
    //Oculto todas las clases exepto la que se pasa por parametro
    
for (var C = 0; C < formularios.length; C ++){
    var  clase = formularios[C];
        if (clase !== dejarClase){
            ocultarClase(clase);
        }
        else{
            mostrarClase(clase);
        }
}   
}

function validarLogin(EMail,Contraseña){
    // recibe un nombre de ususario y password, si es valido devuelve el perfil del Ususario
    // si no es valido devuelve "Invalido", si el ususario esta inhabilitado devuelve Inhabilitado
    // Salidas --> Socio, Administrador, Incorrecta, Inexistente,Inhabilitado
        var retorno = "Inexistente";
        for (var x=0; x<socios.length;x++){
             if (socios[x].email === EMail){
                if (socios[x].estado === true){
                    if (socios[x].contraseña === Contraseña){
                        retorno = "Socio";
                    }else{
                        retorno = "Incorrecta";
                    }}else{
                        retorno = "Inhabilitado";
                    }
                }
            }
        
        if (retorno === "Inexistente") {
        for (var x = 0; x<administradores.length; x++) {
        if (administradores[x].email === EMail){
                    if (administradores[x].contraseña === Contraseña){
                        retorno = "Administrador";
                    }else{
                        retorno = "Incorrecta";
                    }
                }
            }
        }
        return retorno;
        
}

function estadoActualSocio(nombre){
    for (var x = 0; x<socios.length; x++) {
        if (nombre === socios[x].nombre){
            return socios[x].estado;
            break;
        }   
    }
}

function validarContraseña(contraseña){
    
    // Valido si la contraseña cumple con los parametros solicitados
    // retorno True si esta todo bien, false si no    
    
    var tieneLetra = false;
    var tieneNumero = false;
    
    // Recorro el String
    
    for(var C = 0;C<contraseña.length;C++){

        // Valido si el caracter es una letra y cambio la bandera en caso afirmativo
        if(esLetra(contraseña.charAt(C))){
            tieneLetra = true;
        }
        
        // Valido si el caracter es un numero y cambio la bandera en caso afirmativo
        if(!isNaN(contraseña.charAt(C))){
            tieneNumero = true;
        }  
    }
    
    // Retorno TRUE solo si las 2 condiciones son verdaderas
    
    return tieneLetra && tieneNumero;
}


function buscarNombre(Email){
    
    var nombre = "";
    
    for (var C=0;C<administradores.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el nombre que estoy validando
            if(administradores[C].email === Email){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                nombre = administradores[C].nombre;
                break;
            }
    }
    
    // Si recorri los administradores y el nombre aun no se encuentra, recorro los Socios
    
    if(nombre === ""){
        for (var C=0;C<socios.length;C++){
            // Recorro el array de administradores y comparo si alguno tiene el nombre que estoy validando
            if(socios[C].email === Email){ 
                // Si lo encuentro, devulevo TRUE y salgo del FOR
                nombre = socios[C].nombre;
                break;
            }
        }
    }
    
    // Si no lo encuentro, devuelvo false
    return nombre; 
}