document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pesan = `Halo, saya ingin pesan:\nNama: ${nama}\nAlamat: ${alamat}\nProduk: ${produk}\nWarna: ${warna}\nJumlah: ${jumlah}`;
  const nomorWA = '6281234567890';
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});
document.getElementById('formKomentar').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
  
    if (nama && pesan) {
      const komentarBaru = document.createElement('div');
      komentarBaru.classList.add('komentar-item');
      komentarBaru.innerHTML = `<strong>${nama}</strong><p>${pesan}</p>`;
  
      document.getElementById('daftarKomentar').prepend(komentarBaru);
  
      // Kosongkan input
      document.getElementById('nama').value = '';
      document.getElementById('pesan').value = '';
    }
  });
  const logos = document.querySelectorAll('.logo-container img');
  const selectedDisplay = document.getElementById('selected-method');

  logos.forEach(logo => {
    logo.addEventListener('click', () => {
      logos.forEach(l => l.classList.remove('selected'));
      logo.classList.add('selected');
      selectedDisplay.textContent = `Metode pembayaran dipilih: ${logo.dataset.method}`;
    });
  });
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => showSlide(index + 1));
  prev.addEventListener('click', () => showSlide(index - 1));

  // Auto play every 4 seconds
  setInterval(() => showSlide(index + 1), 4000);  