class cartPage {

    elements = {
        inputNombre: () => cy.get('#name'),
        inputPais: () => cy.get('#country'),
        inputCiudad: () => cy.get('#city'),
        inputCardNumber: () => cy.get('#card'),
        inputMes: () => cy.get('#month'),
        inputAño: () => cy.get('#year'),
        botonCompra: () => cy.get('button').contains('Purchase')
    }

    visit() {
        cy.visit('/cart.html')
    }

    completarFormulario(nombre, pais, ciudad, nroTarjeta, mes, año) {

        // Esperar estáticamente a que la animación termine antes de completar los campos
        cy.wait(1500)
        this.elements.inputNombre().type(nombre)
        this.elements.inputPais().type(pais)
        this.elements.inputCiudad().type(ciudad)
        this.elements.inputCardNumber().type(nroTarjeta)
        this.elements.inputMes().type(mes)
        this.elements.inputAño().type(año)

        this.elements.botonCompra().click()
    }

    validacionCompraExitosa() {
        cy.contains('Thank you for your purchase!').should('be.visible')
    }

}

export default new cartPage();