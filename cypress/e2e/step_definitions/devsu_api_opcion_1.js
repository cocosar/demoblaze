import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


When('hago una petición POST con un usuario y contraseña nuevos a {string}', (apiUrl) => {

    // Llamo a la función custom creada y almacenada en support/commands.js
    cy.generarNombreAleatorio("juan").then((body) => {
        // Genero el request
        cy.request('POST', apiUrl, body).as('requestDemoblaze')
    })

})

Then('el sistema devuelve un código de estado 200', () => {

    // Traigo el resultado de la llamada
    cy.get('@requestDemoblaze').should((response) => {
        // Validación
        expect(response.status).to.eq(200)
    })
})

Then('el sistema responde con un string vacío', () => {

    // Traigo el resultado de la llamada
    cy.get('@requestDemoblaze').should((response) => {
        // Validación
        expect(response.body).to.be.empty
    })
})

Given('que registré un usuario previamente en {string}', (apiUrl) => {

    // Llamo a la función custom creada y almacenada en support/commands.js
    cy.generarNombreAleatorio("juan").then((body) => {

        // Genero el request
        cy.request('POST', apiUrl, body)
        // Guardo el usuario y contraseña en Node
        cy.task('setTestData', body)

    })


})

When('hago una petición POST con un usuario y contraseña ya existentes a {string}', (apiUrl) => {

    // Traigo el usuario y contraseñas ya útilizados
    cy.task('getTestData', "usuario").then((response) => {
        cy.request('POST', apiUrl, response).as('requestDemoblaze')
    })

})

Then('el sistema responde con mensaje de error {string}', (textoError) => {

    cy.get('@requestDemoblaze').should((response) => {
        expect(response.body).to.be.an('object')
        expect(response.body.errorMessage).to.be.eq(textoError)
    })
})

When('hago una petición POST con un usuario y contraseñas correctas a {string}', (apiUrl) => {

    // Traigo el usuario y contraseñas ya útilizados
    cy.task('getTestData', "usuario").then((response) => {
        cy.request('POST', apiUrl, response).as('requestDemoblaze')
    })

})

When('la petición devuelve un token para inicio de sesión', () => {

    cy.get('@requestDemoblaze').should((response) => {
        // Verificar que el cuerpo de la respuesta contiene "Auth_token"
        expect(response.body).to.include('Auth_token');
    })

})

When('hago una petición POST con un usuario y contraseñas incorrectas a {string}', (apiUrl) => {

    // Traigo el usuario y contraseñas ya útilizados
    cy.task('getTestData', "usuario").then((response) => {
        let usuarioCredencialesInvalidas = {
            username: response.username,
            password: "aaa111"
         }
        cy.request('POST', apiUrl, usuarioCredencialesInvalidas).as('requestDemoblaze')
    })

})