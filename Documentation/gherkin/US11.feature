Feature: Gestión de facturación y contabilidad
  Scenario 1: El usuario registra una factura con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Facturas"
    And haga clic en "Registrar una factura"
    And aparece un formulario de registro
    And llena los campos con información válida
    And haga clic en "Registrarse"
    Then se creará un servicio en la base de datos con la información proporcionada
  
  Scenario 2: El usuario registra una factura con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Facturas"
    And haga clic en "Registrar una factura"
    And aparece un formulario de registro
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica una factura con información válida
    Given que el usuario está en el panel de administración de facturas
    When el usuario hace clic en una factura
    And haga clic en "Modificar"
    And aparece un formulario de modificación
    And llena los campos con información válida
    And haga clic en "Modificar"
    Then la factura seleccionada se actualizará en la base de datos con la información proporcionada
  
  Scenario 4: El usuario modifica una factura con información no válida
    Given que el usuario está en el panel de administración de facturas
    When el usuario hace clic en una factura
    And haga clic en "Modificar"
    And aparece un formulario de modificación
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina una factura
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en una factura
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación
    And haga clic en "Confirmar acción"
    Then la factura seleccionada se archivará en la base de datos


