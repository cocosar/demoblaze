import { When } from "@badeball/cypress-cucumber-preprocessor"

When('selecciono el botón {string}', (nombreBoton) => {
    cy.contains(nombreBoton).click()
})