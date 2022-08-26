Feature: Documentación del sistema de reservas de terceros
  Scenario 1: El usuario accede a la documentación del sistema de reservas de terceros
    Given que el usuario está en el tablero principal
    When el usuario hace clic en "Docs."
    And aparece la pantalla de documentos.
    And haga clic en "Integración de terceros"
    Then se mostrará la pantalla de documentación del sistema de reservas de terceros


