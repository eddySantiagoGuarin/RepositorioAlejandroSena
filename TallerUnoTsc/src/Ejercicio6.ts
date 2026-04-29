/*
6. Sistema de calificaciones por categoría
Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
"examen") y nota.
Escribe una función que calcule el promedio por categoría para un estudiante
específico.
*/

type Categoria = "tareas" | "quices" | "examen";

type Calificacion = {
    estudianteId: number;
    materia: string;
    categoria: Categoria;
    nota: number;
};

type prmPorCategoria = {
    tareas: number;
    quices: number;
    examen: number;
};

function promedioPorCategoria(calificaciones: Calificacion[], estudianteId: number): prmPorCategoria {
    const promedio: prmPorCategoria = {
        tareas: 0,
        quices: 0,
        examen: 0
    };
    let divisorTareas = 1;
    let divisorQuices = 1;
    let divisorExamen = 1;
    for (const calificacion of calificaciones) {
        if (calificacion.estudianteId === estudianteId) {
            switch (calificacion.categoria) {
                case "tareas":
                    promedio.tareas += calificacion.nota;
                    divisorTareas++;
                    break;
                case "quices":
                    promedio.quices += calificacion.nota;
                    divisorQuices++;
                    break;
                case "examen":
                    promedio.examen += calificacion.nota;
                    divisorExamen++;
                    break;
            }
        }

    }
    promedio.tareas = promedio.tareas / divisorTareas ;
    promedio.quices = promedio.quices / divisorQuices ;
    promedio.examen = promedio.examen / divisorExamen ;
    return promedio;
}
