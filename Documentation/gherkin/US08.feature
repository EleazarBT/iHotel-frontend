Feature: Administración de Servicios
  Scenario 1: El usuario registra un servicio con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Servicios"
    And haga clic en "Registrar un servicio"
    And aparece un formulario de registro.
    And llena los campos con información válida.
    And haga clic en "Registrarse"
    Then se creará un servicio en la base de datos con la información proporcionada

  Scenario 2: El usuario registra un servicio con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Servicios"
    And haga clic en "Registrar un servicio"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica un servicio con información válida
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en un servicio
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información válida.
    And haga clic en "Modificar"
    Then el servicio seleccionado se actualizará en la base de datos con la información brindada

  Scenario 4: El usuario modifica un servicio con información inválida
    Given que el usuario está en el panel de administración del servicio
    When el usuario hace clic en un servicio
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina un servicio
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en un servicio
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then el servicio seleccionado será archivado en la base de datos



