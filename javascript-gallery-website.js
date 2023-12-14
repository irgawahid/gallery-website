
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });

  // function changeLanguage(selectElement) {
  //   console.log("Change language function called");
  //   var selectedLanguage = selectElement.value;
  //   console.log("Selected language: " + selectedLanguage);}

  //   function changeLanguage(selectElement) {
  //     // Ambil nilai (value) dari opsi yang dipilih
  //     var selectedLanguage = selectElement.value;

  //     // Gantilah URL dengan URL yang sesuai berdasarkan nilai bahasa yang dipilih
  //     switch (selectedLanguage) {
  //         case 'id':
  //             window.location.href = 'index.html';
  //             break;
  //         case 'en':
  //             window.location.href = 'index-2.html';
  //             break;
  //         case 'zh':
  //             window.location.href = 'index-3.html';
  //             break;
  //         case 'ja':
  //             window.location.href = 'index-4.html';
  //             break;
  //         default:
  //             // URL default jika tidak ada opsi yang cocok
  //             window.location.href = '';
  //             break;
  //     }
  // }

  function changeLanguage() {
    // Mendapatkan elemen select
    var select = document.getElementById("language");

    // Mendapatkan nilai yang dipilih
    var selectedValue = select.options[select.selectedIndex].value;

    // Menentukan URL berdasarkan nilai yang dipilih
    var url = "";

    switch (selectedValue) {
        case "id":
            url = "index.html"; // Ganti dengan URL bahasa Indonesia
            break;
        case "en":
            url = "index-2.html"; // Ganti dengan URL bahasa Inggris
            break;
        case "zh":
            url = "index-3.html"; // Ganti dengan URL bahasa China
            break;
        case "ja":
            url = "index-4.html"; // Ganti dengan URL bahasa Jepang
            break;
        default:
            url = "index.html"; // URL default jika tidak ada pilihan yang cocok
    }

    // Arahkan pengguna ke URL yang sesuai
    window.location.href = url;
}
  


document.addEventListener("scroll", function() {
    const contactSection = document.getElementById("contact");
    const photoSourceSection = document.getElementById("photo-source");
    const scrollPosition = window.scrollY;

    // Adjust the values as needed
    contactSection.style.bottom = `calc(-100px + ${scrollPosition}px)`;
    photoSourceSection.style.bottom = `calc(-100px + ${scrollPosition}px)`;
});
