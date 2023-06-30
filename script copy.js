const modal = document.getElementById('modal');
const image = modal.querySelector('img');
const title = modal.querySelector('h2');
const content = modal.querySelector('p');
let isHidden = true;

function openModal(index) {
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

  if (isHidden) {
    modal.style.display = 'flex';
    isHidden = false;
  } else {
    modal.style.display = 'none';
    isHidden = true;
  }
}

modal.addEventListener('click', function(event) {
  if (!isHidden) {
    const target = event.target;
    if (target === modal) {
      modal.style.display = 'none';
      isHidden = true;
    }
  }
});