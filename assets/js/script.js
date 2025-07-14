// Simple navigation for vCard sections

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-link[data-nav-link]');
  const pages = document.querySelectorAll('article[data-page]');

  navLinks.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Remove active from all nav links
      navLinks.forEach((b) => b.classList.remove('active'));
      // Add active to clicked nav link
      this.classList.add('active');

      // Hide all pages
      pages.forEach((page) => page.classList.remove('active'));
      // Show the page that matches the button text (case-insensitive)
      const pageName = this.textContent.trim().toLowerCase();
      pages.forEach((page) => {
        // Fix for possible whitespace or case issues
        if (page.dataset.page && page.dataset.page.trim().toLowerCase() === pageName) {
          page.classList.add('active');
        }
      });
    });
  });
});
