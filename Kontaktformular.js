//Elemente des formulars und Fehlermeldung
const contactForm = document.getElementById("contactFormular");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Event-Listener für das Formular absenden hinzufügen

contactForm.addEventListener("submit", function (event) {
    //verhindert das normale Absenden des Formulars
    event.preventDefault();

    // Werte der Formularfelder abrufen
    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;

    // Fehlermeldungen zurücksetzen
    resetErrors();

    //Validierung für den Namen
    if (!isValidName(name)){
        displayError(nameError, "Bitte geben sie einen gültigen Namen ein.");
        // Hervorheben des fehlerhaften Feldes
        nameField.classList.add ("errorInput");
        return;
    }


//Validierung für die Email-Adresse 
if (!isValidEmail(email)){
    displayError(emailError, "Bitte geben sie eine gültige Email ein.");
    emailField.classList.add("errorInput");
    return;
}


    //Erfolgsmeldung anzeigen und Formular zurücksenden
    alert("Vielen Dank für Ihre Nachricht!");
    contactForm.reset();
});

//Function für resetErrors, zum Zurücksetzen der Fehlermeldung und der roten Rahmen
function resetErrors(){
nameError.textContent = "";
emailError.textContent="";
messageError.textContent="";

nameField.classList.remove("errorInput");
emailField.classList.remove("errorInput");
messageField.classList.remove("errorInput");
}

//Function zum Anzeigen der Fehlermeldung
function displayError(errorElement, errorMessage){
    errorElement.textContent = errorMessage;
}

//Function zur Überprüfung/Validierung des Namens
function isValidName(name){
    return /^[A-Za-z\s]{2,}$/.test(name);
}

function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}


//Funktion zum Zurücksetzen des Formulars
function resetForm(){
    contactForm.reset();
    resetErrors();
}

