# language: es
Requisito: Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra

    Esquema del escenario: Flujo de compra en Demonblaze
        Dado que visito la página de Demoblaze
        Cuando selecciono un producto
        Y selecciono el botón "Add to cart"
        Y vuelvo a la página Home
        Y selecciono otro producto
        Y selecciono el botón "Add to cart"
        Y me dirijo al carro de compras
        Y selecciono el botón "Place Order"
        Y completo el formulario de compra con los datos "<Nombre>", "<Pais>", "<Ciudad>", "<Tarjeta de Credito>", "<Mes>" y "<Año>"
        Entonces visualizo un mensaje de éxito

        Ejemplos:
            | Nombre  | Pais      | Ciudad       | Tarjeta de Credito  | Mes | Año |
            | Juan    | Argentina | Rosario      | 3214 2452 5456 5555 | 05  | 27  |
            | Agustin | Peru      | Lima         | 1111 2222 3333 4444 | 06  | 25  |
            | Pablo   | Argentina | Buenos Aires | 5545 5454 2121 2332 | 03  | 25  |