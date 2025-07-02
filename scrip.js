document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "admin" && contrasena === "1234") {
    alert("Bienvenido, acceso concedido.");
  } else {
    alert("Credenciales incorrectas. Intenta nuevamente.");
  }
});

