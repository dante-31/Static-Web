// Contoh JavaScript sederhana
document.addEventListener('DOMContentLoaded', function() {
  console.log('Website telah dimuat sepenuhnya!');

  // Contoh interaksi sederhana
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.addEventListener('click', () => {
          alert(`Anda mengklik bagian: ${section.id}`);
      });
  });
});