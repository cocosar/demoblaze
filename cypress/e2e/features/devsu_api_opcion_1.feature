# language: es
Requisito: Prueba de servicios REST para el SIGNUP y el LOGIN

    - Crear un nuevo usuario en signup
    - Intentar crear un usuario ya existente
    - Usuario y password correcto en login
    - Usuario y password incorrecto en login

    Escenario: Crear un nuevo usuario en signup
        Cuando hago una petición POST con un usuario y contraseña nuevos a "https://api.demoblaze.com/signup"
        Entonces el sistema devuelve un código de estado 200
        Y el sistema responde con un string vacío


    Escenario: Intentar crear un usuario ya existente
        Dado que registré un usuario previamente en "https://api.demoblaze.com/signup"
        Cuando hago una petición POST con un usuario y contraseña ya existentes a "https://api.demoblaze.com/signup"
        Entonces el sistema devuelve un código de estado 200
        Y el sistema responde con mensaje de error "This user already exist."

    Escenario: Usuario y password correcto en login
        Dado que registré un usuario previamente en "https://api.demoblaze.com/signup"
        Cuando hago una petición POST con un usuario y contraseñas correctas a "https://api.demoblaze.com/login"
        Entonces el sistema devuelve un código de estado 200
        Y la petición devuelve un token para inicio de sesión

    Escenario: Intentar crear un usuario ya existente
        Dado que registré un usuario previamente en "https://api.demoblaze.com/signup"
        Cuando hago una petición POST con un usuario y contraseñas incorrectas a "https://api.demoblaze.com/login"
        Entonces el sistema devuelve un código de estado 200
        Y el sistema responde con mensaje de error "Wrong password."


