Feature: Registro
  Scenario 1: El usuario se registra con información válida
    Given que el usuario está en la pantalla de "iniciar sesión"
    When el usuario hace clic en "¿No es un usuario?"
    And aparece un formulario de registro.
    And el usuario rellena el formulario con información válida
    And haga clic en "registrarse"
    Then se creará una cuenta con las credenciales proporcionadas
  
  Scenario 2: El usuario se registra con información inválida
    Given que el usuario está en la pantalla de "iniciar sesión"
    When el usuario hace clic en "¿No es un usuario?"
    And aparece un formulario de registro.
    And el usuario completa el formulario con información no válida
    And haga clic en "registrarse"
    Then se resaltarán los campos con información no válida


