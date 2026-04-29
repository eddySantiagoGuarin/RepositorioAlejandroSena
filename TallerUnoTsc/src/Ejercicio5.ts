/**
 * 5. Historial de cambios de usuario
Modela un historial de cambios de un usuario, donde cada cambio puede ser de
nombre, correo o contraseña.
Escribe una función que reciba una lista de estos cambios y devuelva un resumen
con el número de veces que se cambió cada uno.
 */

type CambioNombre = {
    tipo: "nombre";
    nuevoNombre: string;
};

type CambioCorreo = {
    tipo: "correo";
    nuevoCorreo: string;
};

type CambioContraseña = {
    tipo: "contraseña";
    nuevaContraseña: string;
};

type Cambio = CambioNombre | CambioCorreo | CambioContraseña;

type ResumenCambios = {
    nombre: number;
    correo: number;
    contraseña: number;
};

function resumenCambios(cambios: Cambio[]): ResumenCambios {
    const resumen = { nombre: 0, correo: 0, contraseña: 0 };

    for (const cambio of cambios) {
        switch (cambio.tipo) {
            case "nombre":
                resumen.nombre++;
                break;
            case "correo":
                resumen.correo++;
                break;
            case "contraseña":
                resumen.contraseña++;
                break;
        }
    }

    return resumen;
}


