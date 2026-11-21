const $ = (id) => document.getElementById(id);

function showError(input, text) {
  const p = input.parentElement.querySelector(".error");
  p.textContent = text;
  p.classList.toggle("hidden", !text);
  input.classList.toggle("border-red-500", !!text);
  return !text;
}

$("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("name"), email = $("email"), message = $("message");

  const ok = [
    showError(name, name.value.trim() ? "" : "Enter your name"),
    showError(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? "" : "Enter a valid email"),
    showError(message, message.value.trim().length >= 10 ? "" : "Write at least 10 characters"),
  ].every(Boolean);
  if (!ok) return;

  $("msg").textContent = "Thanks " + name.value.trim() + ", your message was sent.";
  $("msg").classList.remove("hidden");
  e.target.reset();
});