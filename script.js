// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = event.target.getAttribute("href");
        window.location.href = target;
      });
    });
  });
  
  // Add event listener to contact form submit button
  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      // Send form data to server-side script or API
      console.log(formData);
    });
  });
  
  // Add event listener to hero section CTA button
  document.addEventListener("DOMContentLoaded", function() {
    const heroCta = document.querySelector(".hero.cta");
    heroCta.addEventListener("click", function(event) {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      window.location.href = target;
    });
  });