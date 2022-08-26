Feature: Gestión de reservas
  Scenario 1: El usuario registra una reserva con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Reserva"
    And haga clic en "Registrar una reserva"
    And aparece un formulario de registro.
    And llena los campos con información válida.h
    And haga clic en "Registrarse"
    Then se creará un servicio en la base de datos con la información proporcionada

  Scenario 2: El usuario registra una reserva con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Reserva"
    And haga clic en "Registrar una reserva"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica una reserva con información válida
    Given que el usuario está en el panel de administración de reservas
    When el usuario hace clic en una reserva
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And reserva los campos con información válida
    And haga clic en "Modificar"
    Then la reserva seleccionada se actualizará en la base de datos con la información brindada

  Scenario 4: El usuario modifica una reserva con información inválida
    Given que el usuario está en el panel de gestión de reservas
    When el usuario hace clic en una reserva
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina una reserva
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en una reserva
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then la reserva seleccionada será archivada en la base de datos


