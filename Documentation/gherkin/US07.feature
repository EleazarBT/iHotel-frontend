Feature: Gestión de Consumo
  Scenario 1: El usuario registra el consumo con información no válida
    Given que el usuario está en el panel de gestión de consumo
    When el usuario hace clic en un consumo
    And haga clic en "Registrar un consumo"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida
  
  Scenario 2: El usuario modifica un consumo con información válida
    Given que el usuario está en el panel de gestión de consumo
    When el usuario hace clic en un consumo
    And hace clic en un consumo
    And haga clic en "Modificar"
    And aparece un formulario de modificación
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then el consumo seleccionado se actualizará en la base de datos con la información brindada

  Scenario 3: El usuario modifica un consumo con información no válida
    Given que el usuario está en el panel de gestión de consumo
    When el usuario hace clic en un consumo
    And hace clic en un consumo
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida
  
  Scenario 4: El usuario elimina un consumo
    Given que el usuario está en el panel de gestión de consumo
    When el usuario hace clic en un consumo
    And hace clic en un consumo
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación
    And haga clic en "Confirmar acción"
    Then el consumo seleccionado será archivado en la base de datos
 



