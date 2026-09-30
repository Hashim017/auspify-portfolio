const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.className = "form-status";
  formStatus.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Thank you! Your message was sent.";
      formStatus.classList.add("success");
      form.reset();
    } else {
      formStatus.textContent = "Something went wrong. Please try again.";
      formStatus.classList.add("error");
    }
  } catch (error) {
    formStatus.textContent = "Network error. Please try again.";
    formStatus.classList.add("error");
  }
});