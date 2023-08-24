'use strict';
const imageEl = document.getElementById('image-container');
const qrImageEl = document.getElementById('qr-image');
const qrTextEl = document.getElementById('name');
const btnEl = document.getElementById('btn');

//fuction
function generateQR() {
  if (qrTextEl.value.trim() === '') {
    alert('Fields are mandatory');
  } else {
    qrImageEl.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      qrTextEl.value;
    imageEl.classList.add('shown-image');
  }
  qrTextEl.value = null;
}

// addeventlistener;
btnEl.addEventListener('click', () => {
  generateQR();
});
