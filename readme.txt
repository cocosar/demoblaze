Requisitos para el proyecto:
- Poseer instalado Node.js

Instrucciones de instalación:
- Clonar el proyecto
- Correr el comando 'npm install'

Instrucciones de ejecución:
- Correr el comando 'npx cypress run' (modo headless)
- Correr el comando 'npx cypress open' (abrir interfaz de cypress y ejecutar pruebas por UI)

Si se desea correr un set de pruebas en especifico se puede agregar el parametro "--spec 'ruta/del/archivo_de_pruebas.feature'" para correr solamente el archivo indicado.
(Ejemplo: 'npx cypress run --spec 'cypress/e2e/feature/devsu_e2e_opcion_1.feature')

Comandos según ejercicio:
Ejercicio E2E opción 1:
- npx cypress run --spec 'cypress/e2e/feature/devsu_e2e_opcion_1.feature'
Ejercicio API opción 1:
- npx cypress run --spec 'cypress/e2e/feature/devsu_api_opcion_1.feature'
