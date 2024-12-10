/*Proyecto de Gabriel Enrique Bustos Bonilla*/

/*Juego de Rol de 6 jugadores*/



/*Metas y Objetivos acerca del Proyecto del juego

Crear 6 jugadores Con diferentes tipos de rol, asesino/s, inocentes, sheriff y vigilante y poseen diferentes habilidades

El juego debera de tener 6 jugadores como minimo, caso contrario se cancela por falta de jugadores

cada ronda se dividira en 2 ciclos de dia y de noche, por el dia se realizaran las votaciones y por la noche los jugadores podran usar sus roles

En el juego mediante votaciones por ronda los inocentes decidiran eliminar a un jugador con la intencion de hallar al asesino

el asesino debera matar a un jugador por ronda obligatoriamente caso contrario sera eliminado automaticamente su habilidad se aplica por las noches su objetivo es asesinar a todos los demas jugadores sin ser descubierto

el sheriff tiene como objetivo matar al asesino posee 2 balas y en caso de matar a un inocente sera eliminado su habilidad solo se usa mediante el dia y todos podran observar a que jugador elimino en caso de usar su habilidad

el vigilante puede usar su habilidad 2 veces con el objetivo de hallar al asesino su habilidad solo aplica en las noches y en caso de observar al asesino eliminando a algun jugador le saldra una alerta haciendole saber el suceso

los inocentes no poseen ningun rol, pero podran hacer votaciones mediante el dia para decidir a que jugador eliminar

el sistema de eleccion del rol debera ser aleatorio y se hara antes de comenzar el juego, los jugadores deberan saber que rol tienen en todo momento

los jugadores podran dialogar mediante el dia y en caso de haber asesinatos se les mencionara que jugador fue asesinado y si poseia algun rol

*/

function bienvenida(nombre) {
    if (nombre === null) {
        alert("Se cancela la partida por falta de jugadores");
        return;
    } else {
        alert("Bienvenido jugador " + nombre);
    }
}

function nombreElegido() {
    let nombreDelJugador = prompt("Por favor, ingrese su nombre");
    bienvenida(nombreDelJugador);
}

nombreElegido();