document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let numeroInput = document.getElementById("numero");
    let numero = parseInt(numeroInput.value);

    // Verificar si el dato de entrada es un número
    if (isNaN(numero)) {
        alert("Error: Por favor, ingresa un número válido.");
        numeroInput.value = "";
        return;
    }

    let factorial = calcularFactorial(numero);
    document.getElementById("resultado").textContent = "El factorial de " + numero + " es: " + factorial;
});

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
