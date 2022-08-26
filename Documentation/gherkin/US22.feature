Feature: Almacenamiento y disponibilidad fuera de línea
  Scenario 1: El usuario accede a un dispositivo recurrente
    Given que el usuario está en la pantalla de inicio de sesión en un dispositivo recurrente
    When el usuario inicia sesión con credenciales válidas
    Then la cuenta relacionada con las credenciales proporcionadas se cargará con datos desde la maquina


