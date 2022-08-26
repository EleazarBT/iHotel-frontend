Feature: Logout
  Scenario 1: El usuario cierra la sesión
    Given que el usuario está en cualquier pantalla
    When el usuario hace clic en el icono de su perfil
    And "cerrar sesión"
    Then se cerrará la sesión de la cuenta de usuario.
    And se mostrará la pantalla de "iniciar sesión"
