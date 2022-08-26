Feature: Documentación de precios, características y operaciones comunes
  Scenario 1: El usuario accede a la documentación de precios, características y operaciones comunes
    Given que el usuario está en el tablero principal
    When el usuario hace clic en "Docs."
    And aparece la pantalla de documentos.
    And haga clic en "Precios, características y operaciones comunes"
    Then se desplegará la pantalla de documentación de precios, características y operaciones comunes


