Feature: Login
  Scenario 1: El inicio de sesión del usuario con credenciales válidas
    Given que el usuario está en la pantalla de "iniciar sesión"
    When el usuario llena los campos con credenciales válidas
    And haga clic en "iniciar sesión" 
    Then se cargará la cuenta asociada a las credenciales proporcionadas
    And se mostrará el tablero principal
  
  Scenario 2: El inicio de sesión del usuario con credenciales no válidas
    Given que el usuario está en la pantalla de "iniciar sesión"
    When el usuario llena los campos con credenciales inválidas
    And haga clic en "iniciar sesión"
    Then se mostrará el mensaje de error "Credenciales no válidas"