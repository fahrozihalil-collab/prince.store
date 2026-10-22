const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cek apakah pengguna sudah pernah menyimpan preferensi sebelumnya
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
}

// Event listener saat tombol diklik
toggleButton.addEventListener('click', () => {
    let currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});