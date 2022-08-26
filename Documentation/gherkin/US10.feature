Feature: Gestión de productos e inventario
  Scenario 1: El usuario registra un producto con información válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Productos"
    And haga clic en "Registrar un producto"
    And aparece un formulario de registro.
    And llena los campos con información válida.
    And haga clic en "Registrarse"
    Then se creará un producto en la base de datos con la información proporcionada

  Scenario 2: El usuario registra un producto con información no válida
    Given que el usuario está en el panel de administración
    When el usuario hace clic en "Productos"
    And haga clic en "Registrar un producto"
    And aparece un formulario de registro.
    And llena los campos con información inválida
    And haga clic en "Registrarse"
    Then se resaltarán los campos con información no válida

  Scenario 3: El usuario modifica un producto con información válida
    Given que el usuario está en el panel de administración de productos
    When el usuario hace clic en un producto
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información válida.
    And haga clic en "Modificar"
    Then el producto seleccionado se actualizará en la base de datos con la información brindada

  Scenario 4: El usuario modifica un producto con información no válida
    Given que el usuario está en el panel de administración de productos
    When el usuario hace clic en un producto
    And haga clic en "Modificar"
    And aparece un formulario de modificación.
    And llena los campos con información inválida
    And haga clic en "Modificar"
    Then se resaltarán los campos con información no válida

  Scenario 5: El usuario elimina un producto
    Given que el usuario está en el panel de administración de productos
    When el usuario hace clic en un producto
    And haga clic en "Eliminar"
    And aparece un cuadro de diálogo de confirmación.
    And haga clic en "Confirmar acción"
    Then el producto seleccionado será archivado en la base de datos



  