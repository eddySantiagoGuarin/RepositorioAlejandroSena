/*
4. Validación de formularios dinámicos
Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo.
*/

type tipoFormulario = "texto" | "numero" | "email";
type valorFrmulario = string | number;

type CampoFormulario = { 
    nombre: string;
    tipo: tipoFormulario;
    valor: valorFrmulario;
};

function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = [];
    for (const campo of campos) {
        switch (campo.tipo) {
            case "texto":
                if (typeof campo.valor !== "string") {
                    camposInvalidos.push(campo.nombre);
                }
                break;
            case "numero":
                if (typeof campo.valor !== "number") {
                    camposInvalidos.push(campo.nombre);
                }
                break;
            case "email":
                if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
                    camposInvalidos.push(campo.nombre);
                }
                break;
        }
    }
    return camposInvalidos;
}
