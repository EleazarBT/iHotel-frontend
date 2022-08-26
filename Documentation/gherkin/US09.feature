Feature: Gestión de trabajadores
  Scenario 1: El usuario registra a un trabajador con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Trabajadores"
    And haga clic en "Registrar un trabajador"
    And aparece un formulario de registro
    And llena los campos con información válida
    And haga clic en "Registrarse"
    Then se creará un trabajador en la base de datos con la información proporcionada
  
  Scenario 2: El usuario registra a un trabajador con información inválida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Trabajadores"
    And haga clic en "Registrar un trabajador"
    And aparece un formulario de registro
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica un trabajador con información válida
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en un trabajador
    And haga clic en "Modificar"
    And aparece un formulario de modificación
    And llena los campos con información válida
    And haga clic en "Modificar"
    Then el trabajador seleccionado se actualizará en la base de datos con la información brindada
  
  Scenario 4: El usuario modifica a un trabajador con información inválida
    Given que el usuario está en el panel de administración del servicio
    When el usuario hace clic en un trabajador
    And haga clic en "Modificar"
    And aparece un formulario de modificación
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida
  
  Scenario 5: El usuario elimina a un trabajador
    Given que el usuario está en el panel de administración de invitados
    When el usuario hace clic en un trabajador
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then el trabajador seleccionado será archivado en la base de datos


  