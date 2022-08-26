Feature: Gestión de hoteles y habitaciones
  Scenario 1:  El usuario registra un hotel con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Hoteles"
    And haga clic en "Registrar un hotel"
    And aparece un formulario de registro.
    And llena los campos con información válida.
    And haga clic en "Registrarse"
    Then se creará un hotel en la base de datos con la información proporcionada

  Scenario 2: El usuario registra un hotel con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Hoteles"
    And haga clic en "Registrar un hotel"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica un hotel con información válida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información válida.
    And haga clic en "Modificar"
    Then el hotel seleccionado se actualizará en la base de datos con la información brindada

  Scenario 4: El usuario modifica un hotel con información inválida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina un hotel
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then el hotel seleccionado y todas las habitaciones asociadas al hotel seleccionado se archivarán en la base de datos.

  Scenario 6: El usuario registra una habitación con información válida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And haga clic en "Registrar una habitación"
    And aparece un formulario de registro.
    And llena los campos con información válida.
    And haga clic en "Registrarse"
    Then una habitación, relacionada con el hotel seleccionado, se creará en la base de datos con la información proporcionada

  Scenario 7: El usuario registra una habitación con información no válida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And haga clic en "Registrar una habitación"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 8: El usuario modifica una habitación con información válida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And hace clic en una habitación
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then la habitación seleccionada, relacionada con el hotel seleccionado, se actualizará en la base de datos con la información brindada

  Scenario 9: El usuario modifica una habitación con información válida
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And hace clic en una habitación
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 10: El usuario elimina una habitación
    Given que el usuario está en el panel de administración del hotel
    When el usuario hace clic en un hotel
    And hace clic en una habitación
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then la habitación seleccionada, relacionada con el hotel seleccionado, se archivará en la base de datos.

