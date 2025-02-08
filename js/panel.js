const tablero = document.getElementById('tablero');
const matriz = []; // Matriz para almacenar el estado de los cuadros

// Crear el tablero de 13x128
for (let i = 0; i < 13; i++) {
    matriz[i] = [];
    for (let j = 0; j < 128; j++) {
        const cuadro = document.createElement('div');
        cuadro.classList.add('cuadro');
        cuadro.addEventListener('click', () => {
            cuadro.classList.toggle('negro'); // Cambiar color
            matriz[i][j] = cuadro.classList.contains('negro') ? ' ' : 'x'; // Actualizar matriz
            console.log(matriz); // Mostrar matriz en la consola (opcional)
        });
        tablero.appendChild(cuadro);
        matriz[i][j] = 'x'; // Inicialmente todos 'x' (blanco)
    }
}