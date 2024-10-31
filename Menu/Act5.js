let opcion = 2;


if (opcion === 1) {
    let numero = -4;
    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
} else if (opcion === 2) {
    let operacion = "suma";
    let a = 5;
    let b = 3;

    if (operacion === "suma") {
        console.log("Resultado de la suma:", a + b);
    } else if (operacion === "resta") {
        console.log("Resultado de la resta:", a - b);
    } else if (operacion === "multiplicación") {
        console.log("Resultado de la multiplicación:", a * b);
    } else if (operacion === "división") {
        if (b !== 0) {
            console.log("Resultado de la división:", a / b);
        } else {
            console.log("No se puede dividir por cero");
        }
    } else {
        console.log("Operación no reconocida");
    }
} else if (opcion === 3) {
    let dia = 6;

    if (dia === 1) {
        console.log("Lunes");
    } else if (dia === 2) {
        console.log("Martes");
    } else if (dia === 3) {
        console.log("Miércoles");
    } else if (dia === 4) {
        console.log("Jueves");
    } else if (dia === 5) {
        console.log("Viernes");
    } else if (dia === 6) {
        console.log("Sábado");
    } else if (dia === 7) {
        console.log("Domingo");
    } else {
        console.log("Número inválido");
    }
} else {
    console.log("Opción no válida");
}
