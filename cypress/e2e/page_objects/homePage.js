class homePage {

    elements = {
        primerProducto: () =>  cy.get('#tbodyid > div > .card > a').first() ,
        ultimoProducto: () =>  cy.get('#tbodyid > div > .card > a').last() 
    }

    visit() {
        cy.visit('/')
    }

    seleccionDePrimerProducto() {
        this.elements.primerProducto().click()
    }

    seleccionDeUltimoProducto() {
        this.elements.ultimoProducto().click()
    }


}

export default new homePage();