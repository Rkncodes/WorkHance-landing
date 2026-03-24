// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Enter a valid email");
    return;
  }

  // SUCCESS UI (not just alert)
  const btn = form.querySelector("button");
  btn.innerText = "Sent ✓";
  btn.style.background = "#16A34A";

  this.reset();
});