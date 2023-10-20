document.getElementById('verificar').addEventListener('click', function() {
    var respuesta = document.getElementById('respuesta').value.toLowerCase();
    if (respuesta === 'kirby' || respuesta === 'KIRBY') {
        document.getElementById('resultado').innerHTML = '<p class="text-success text-center">¡Correcto! ¿COMO SUPISTE QUE ERA KIRBY? </p>';
    } else {
        document.getElementById('resultado').innerHTML = '<p class="text-danger text-center">Respuesta incorrecta. Pista: Empieza con K y termina con irby</p>';
    }
});