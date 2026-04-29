/*
9. Conversor de unidades tipado
Diseña una función que permita convertir entre distintas unidades de medida:
"cm", "m" y "km".
Usa un tipo unión para representar las unidades posibles y asegúrate de validar
correctamente los valores de entrada y salida.
*/

type Unidad = "cm" | "m" | "km";

function convertirUnidades(valor: number, unidadInicial: Unidad, unidadFinal: Unidad): number {
    if (unidadInicial !== unidadFinal) {
        if (unidadInicial === "cm") {
            if (unidadFinal === "m") {
                valor = valor / 100;
            } else {
                valor = valor / 100000;
            }
        } else if (unidadInicial === "m") {
            if (unidadFinal === "cm") {
                valor = valor * 100;
            } else{
                valor = valor / 1000;
            }
        } else  {
            if (unidadFinal === "cm") {
                valor = valor * 100000;
            } else{
                valor = valor * 1000;
            }
        }
    }
    return valor;
}

