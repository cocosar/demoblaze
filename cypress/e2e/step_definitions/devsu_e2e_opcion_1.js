const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: homePage } = require("../page_objects/homePage");
const { default: cartPage } = require("../page_objects/cartPage");

Given('que visito la página de Demoblaze', () => {
    homePage.visit()
})

When('selecciono un producto', () => {
    homePage.seleccionDePrimerProducto()
})

When('vuelvo a la página Home', () => {
    homePage.visit()
})

When('selecciono otro producto', () => {
    homePage.seleccionDeUltimoProducto()
})

When('me dirijo al carro de compras', () => {
    cartPage.visit()
})

When('completo el formulario de compra con los datos {string}, {string}, {string}, {string}, {string} y {string}',
    (nombre, pais, ciudad, nroTarjeta, mes, año) => {
        cartPage.completarFormulario(nombre, pais, ciudad, nroTarjeta, mes, año)
    })


Then('visualizo un mensaje de éxito', () => {
    cartPage.validacionCompraExitosa()
})