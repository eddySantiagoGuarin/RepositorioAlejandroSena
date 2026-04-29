/*
Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing).
*/

type SMS = {
    numero: number;
    mensaje: string;
}
type Email = {
    receptor: string;
    mensaje: string
}
type Push = {
    esquina: string
}
type Notificacion = SMS | Email | Push

function enviarNotificacion(notificacion: Notificacion) {
    if ("numero" in notificacion) {
        console.log(`Enviando SMS al número ${notificacion.numero} con el mensaje: ${notificacion.mensaje}`);
    } else if ("receptor" in notificacion) {
        console.log(`Enviando Email al receptor ${notificacion.receptor} con el mensaje: ${notificacion.mensaje}`);
    } else {
        console.log(`Enviando Push a la esquina ${notificacion.esquina}`);
    }
}

