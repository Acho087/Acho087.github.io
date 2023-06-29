// Get the modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModal");

// Get the button that closes the modal
const closeModalBtn = document.getElementById("closeModal");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.showModal();
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", function() {
  modal.close();
});

// Close the modal when clicking outside of it
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.close();
  }
});