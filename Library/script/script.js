function doLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Di sini Anda dapat melakukan validasi login dengan menggunakan username dan password yang benar.
  // Contoh sederhana hanya untuk ilustrasi. Ini bukan cara keamanan yang sebenarnya.
  if (username === 'andika' && password === 'alakate') {
    // Jika login berhasil, simpan status login dan alihkan ke halaman utama.
    setLoginStatus();
    alert('Login successful! Redirecting to homepage.');
    window.location.href = 'home.html'; // Ganti 'homepage.html' dengan halaman utama Anda.
    return false;
  } else {
    // Jika login gagal, tampilkan pesan error dalam popup.
    const errorPopup = document.getElementById('errorPopup');
    errorPopup.style.display = 'block'; // Tampilkan popup error
    return false;
  }
}

// Fungsi untuk menyembunyikan popup error saat pengguna menutupnya
function closePopup() {
  const errorPopup = document.getElementById('errorPopup');
  errorPopup.style.display = 'none';
}

// Fungsi untuk menyimpan status login dalam session storage
function setLoginStatus() {
  sessionStorage.setItem('isLoggedIn', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.title');

  titles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      const showTooltip = title.scrollWidth > title.clientWidth;
      title.setAttribute('data-show-tooltip', showTooltip);
    });

    title.addEventListener('mouseleave', () => {
      title.setAttribute('data-show-tooltip', false); // Set data-show-tooltip to false on mouseleave
    });
  });
});

// Function untuk menangani perpindahan kelas "active"
function handleNavigationClick(event) {
  // Menghapus kelas "active" dari tautan aktif saat ini
  const activeLink = document.querySelector('.active');
  activeLink.classList.remove('active');

  // Menambahkan kelas "active" pada tautan yang baru diklik
  const clickedLink = event.target;
  clickedLink.classList.add('active');
}

// Menambahkan event listener pada setiap tautan di navigasi
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', handleNavigationClick);
});

// Menggunakan event listener untuk mengonfirmasi ketika dokumen telah dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Mendefinisikan fungsi untuk menangani event klik kanan
  function disableRightClick(event) {
    event.preventDefault(); // Mencegah aksi default (misalnya, munculnya menu konteks)
  }

  // Menambahkan event listener ke seluruh dokumen untuk mengantisipasi klik kanan
  document.addEventListener('contextmenu', disableRightClick);
});