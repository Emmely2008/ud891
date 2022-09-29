// Find the modal and its overlay
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');

var modalToggle = document.querySelector('.modal-toggle');
modalToggle.addEventListener('click', openModal);
modal.close()

function openModal() {

  // Listen for indicators to close the modal
  modalOverlay.addEventListener('click', closeModal);
  // Sign-Up button
  var signUpBtn = modal.querySelector('#signup');
  signUpBtn.addEventListener('click', closeModal);


  // Show the modal and overlay
  modal.showModal();
  modalOverlay.style.display = 'block';

}

function closeModal() {
  // Hide the modal and overlay
  modal.close();
  modalOverlay.style.display = 'none';

}
