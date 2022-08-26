Feature: Gestión de huéspedes
  Scenario 1: El usuario registra un huésped con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en " huéspedes"
    And haga clic en "Registrar un huésped"
    And aparece un formulario de registro.
    And llena los campos con información válida.
    And haga clic en "Registrarse"
    Then se creará un huésped en la basve de datos con la información proporcionada

  Scenario 2: el usuario registra un huésped con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Huéspedes"
    And haga clic en "Registrar un huésped"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica un huésped con información válida
    Given que el usuario está en el panel de administración de huéspedes
    When el usuario hace clic en un huésped
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información válida.
    And haga clic en "Modificar"
    Then el huésped seleccionado se actualizará en la base de datos con la información brindada

  Scenario 4: el usuario modifica un invitado con huésped no válida
    Given que el usuario está en el panel de administración de huéspedes
    When el usuario hace clic en un huésped
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina un invitado
    Given que el usuario está en el panel de administración de huéspedes
    When el usuario hace clic en un huésped
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then el huésped seleccionado se archivará en la base de datos.


