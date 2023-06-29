function openModal(index) {
  const dialog = document.getElementById('modal');
  const image = dialog.querySelector('img');
  const title = dialog.querySelector('h2');
  const content = dialog.querySelector('p');

  // Set the image source, title, and content based on the index
  if (index === 1) {
    image.src = 'images/skills/solidworks.png';
    title.textContent = 'SolidWorks';
    content.textContent = 'SolidWorks is a powerful 3D computer-aided design (CAD) software...';
  } else if (index === 2) {
    image.src = 'images/skills/PTC.png';
    title.textContent = 'PTC Creo';
    content.textContent = 'Creo something something...';
  }

  dialog.style.display = 'flex';
}

function closeModal() {
  const dialog = document.getElementById('modal');
  dialog.style.display = 'none';
}
