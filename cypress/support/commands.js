// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add('generarNombreAleatorio', (nombre) => {
    const caracteresEspeciales = ['!', '#', '$', '%', '&', '@', '*'];
    const codigoAleatorio = Math.floor(Math.random() * 9000) + 1000;
    const caracterEspecialAleatorio = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    const nombreConCodigo = nombre + caracterEspecialAleatorio + codigoAleatorio;

    const usuario = {
        "username": nombreConCodigo,
        "password": "abc123"
    };

    return usuario;
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })