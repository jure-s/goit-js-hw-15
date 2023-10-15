function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.getElementById('controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
    `;
    boxes.push(box);
  }
  return boxes;
}

function renderBoxes(boxes) {
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  const newBoxes = createBoxes(amount);
  renderBoxes(newBoxes);
});

destroyButton.addEventListener('click', destroyBoxes);