var btnEncrypt = document.querySelector(".btn-encrypt");
var btnDecrypt = document.querySelector(".btn-decrypt");
var btnCopy = document.querySelector(".btn-copy");
var textArea = document.querySelector(".main-textarea");
var result = document.querySelector(".encrypted-text") 
var noTextMessage = document.querySelector(".no-text-message-container");
var resultContainer = document.querySelector(".result-container");


btnEncrypt.addEventListener("click", function(){
    if(!validateText(textArea.value)) 
    {
        alert("El texto no puede contener caracteres especiales o mayusculas");
        return;
    }
    toggleMensaje();

    result.textContent = "";

    result.textContent = encryptText(textArea.value);
});


btnDecrypt.addEventListener("click", function(){
    if(!validateText(textArea.value)) 
    {
        alert("El texto no puede contener caracteres especiales o mayusculas");
        return;
    }
    toggleMensaje();
    result.textContent = "";
    result.textContent = decryptText(textArea.value);
});

//Esta funcion copia el texto del parametro ingresado en nuestro clipboard
btnCopy.addEventListener("click", function(){
    navigator.clipboard.writeText(result.textContent);
    alert("Mensaje copiado con exito");
})

//Muestro div con mensaje si el textarea esta poblado a la hora de hacer click
function toggleMensaje(){
        if(textArea.value.length == 0){
            noTextMessage.classList.remove("hide");
            resultContainer.classList.add("hide");
        }
        else{
            noTextMessage.classList.add("hide");
            resultContainer.classList.remove("hide");
        }
}

//Funcion para encriptar texto
function encryptText(message){
    //Recibe el texto ingresado en el textarea y lo almacena en la vareable Text
    let encryptedText = "";
    let text = message;

    for(var i=0; i < text.length; i++){
        //Iteramos el texto y creamos una nueva cadena con el texto encriptado
        switch(text[i]){
            case "e":
                encryptedText += "enter";
                break;
            case "i":
                encryptedText += "imes";
                break;
            case "a":
                encryptedText += "ai";
                break;
            case "o":
                encryptedText += "ober";
                break;
            case "u":
                encryptedText += "ufat";
                break;
            default:
                encryptedText += text[i];
        }
    }

    return encryptedText
}

//Funcion para desencriptar texto
function decryptText(message){
    //Recibe el texto ingresado en el textarea y lo almacena en la vareable Text
    let decryptedText = "";
    let text = message;

    for(var i=0; i < text.length; i++){
        //Iteramos el texto y creamos una nueva cadena con el texto desencriptado
        switch(text[i]){
            case "e":
                decryptedText += "e";
                i += 4; //incrementa el valor del indice en base a las letras que debe saltearse en el texto encriptado
                break;
            case "i":
                decryptedText += "i";
                i += 3;
                break;
            case "a":
                decryptedText += "a";
                i +=1;
                break;
            case "o":
                decryptedText += "o";
                i += 3;
                break;
            case "u":
                decryptedText += "u";
                i += 3;
                break;
            default:
                decryptedText += text[i];
        }
    }

    return decryptedText
}

function validateText(string){
    return((/^[a-z ]+$/.test(string)));
}
