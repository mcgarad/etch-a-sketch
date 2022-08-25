const canvas = document.querySelector('#canvas')

if (typeof gridSize == 'undefined') {
    var gridSize = 4;
}

function drawGrid(gridSize) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    };
    for (const i of Array(gridSize).keys()) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow');
        canvas.appendChild(pixelRow);
        for (const j of Array(gridSize).keys()) {
            const pixelCell = document.createElement('div');
            pixelCell.classList.add('pixelCell');
            pixelRow.appendChild(pixelCell);
        };
    };
    const canvasCells = document.querySelectorAll('.pixelCell');
    canvasCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('coloredIn');
        });
    });
};

drawGrid(gridSize);

const topper = document.querySelector('#top')
const gridSizeButton = document.createElement('button');
topper.appendChild(gridSizeButton)
gridSizeButton.textContent = "Select grid size"

gridSizeButton.addEventListener('click', () => {
    let size = prompt("Set resolution for canvas (1-100)", "100");
    let numSize = Number(size);
    if (numSize >= 1 && numSize <= 100) {
        gridSize = numSize;
    };
    drawGrid(gridSize);
});