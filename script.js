// Add simple interactivity or animations later
console.log("Welcome to Harshit Rawat's portfolio!");
// Scroll animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Thanks for your message!";
  this.reset();
});
