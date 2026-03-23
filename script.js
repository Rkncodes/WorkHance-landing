document.addEventListener("DOMContentLoaded", function () {

  // ── FORM VALIDATION ──
  const form = document.getElementById("contactForm");
  const feedbackMsg = document.getElementById("formMessage");
  const feedbackTitle = document.querySelector(".feedback-title");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedbackTitle.textContent = "Error";
      feedbackMsg.textContent = "Please fill in all fields before submitting.";
      feedbackMsg.className = "feedback-msg error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      feedbackTitle.textContent = "Error";
      feedbackMsg.textContent = "Please enter a valid email address.";
      feedbackMsg.className = "feedback-msg error";
      return;
    }

    feedbackTitle.textContent = "Feedback";
    feedbackMsg.textContent = "Thank you for your message! We will get back to you soon.";
    feedbackMsg.className = "feedback-msg success";
    form.reset();
  });

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // ── NAVIGATION SCROLL + ACTIVE LINK (FINAL FIX) ──
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  // CLICK → smooth scroll
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // INTERSECTION OBSERVER → active nav highlight
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        links.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => observer.observe(section));

});