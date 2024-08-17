// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para validar  minúsculas y sin acentos 
function validarTexto(texto) {
    
    let regex = /^[a-z\s.,!?;:"'()]+$/; 
    return regex.test(texto);
}
// Eventos de los botones
document.getElementById("Btn_Encriptar").onclick = function() {
    let textoInput = document.getElementById("Input_Encriptador").value;

    if (validarTexto(textoInput)) {
        let textoEncriptado = encriptarTexto(textoInput);
        document.getElementById("Output_Texto").innerText = textoEncriptado;
        document.getElementById("Imagen_Ocultar").style.display = "none"; // Ocultar imagen y mensaje
        document.getElementById("Output_Texto").style.display = "block"; // Mostrar texto encriptado
        document.getElementById("Btn_Copiar").style.display = "block";
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
    }
};

document.getElementById("Btn_Desencriptar").onclick = function() {
    let textoInput = document.getElementById("Output_Texto").value;
    let textoDesencriptado = desencriptarTexto(textoInput);
    document.getElementById("Output_Texto").innerText = textoDesencriptado;
};

document.getElementById("Btn_Copiar").onclick = function() {
    let textoCopiable = document.getElementById("Output_Texto").value;
    navigator.clipboard.writeText(textoCopiable);
};
