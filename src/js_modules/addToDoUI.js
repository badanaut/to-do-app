export default function initAddToDoModal() {
  // Get the modal
  const modal = document.getElementById('myModal');
  const modalButton = document.getElementById('modal-btn');
  const addProjectButton = document.getElementById('add-to-do');

  function displayModal() {
    modal.style.display = 'flex';
    // eslint-disable-next-line no-undef
    modal.style.flex = center;
  }

  addProjectButton.onclick = () => displayModal();

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  // When the user clicks on button, close the modal
  modalButton.onclick = () => {
    modal.style.display = 'none';
  };
}
