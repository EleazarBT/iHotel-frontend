Feature: Almacenamiento y disponibilidad en línea
  Scenario 1: El usuario accede a un dispositivo diferente
    Given que el usuario está en la pantalla de inicio de sesión en un dispositivo diferente
    When el usuario inicia sesión con credenciales válidas
    Then la cuenta relacionada con las credenciales proporcionadas se cargará con datos del servidor

