/*
7. Control de stock con reglas personalizadas
Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
"tecnología", "papelería").
Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
categoría:
alimentos: menos de 20 unidades
tecnología: menos de 5 unidades
papelería: menos de 50 unidades
*/

type CategoriaProducto = "alimentos" | "tecnología" | "papelería";

type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: CategoriaProducto;
};

function tieneBajoStock(producto: Producto): boolean {
    switch (producto.categoria) {
        case "alimentos":
            return producto.cantidad < 20;
        case "tecnología":
            return producto.cantidad < 5;
        case "papelería":
            return producto.cantidad < 50;
        default:
            return false;
    }
}
