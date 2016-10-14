# language: es

Característica: Administración del Stock
  Sólo puede tener acceso el Administrador

  Escenario: El Administrador agrega un nuevo producto al stock
    Dado Usuario en sesión es Admin
    Cuando Él agrega 5 unidades de Tomates, precio por item: 3.5$
    Entonces El Stock no está vacío
    Y El Stock contiene 5 unidades de Tomates