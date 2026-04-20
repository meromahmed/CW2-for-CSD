const form = document.getElementById("regForm");
const membershipOptions = document.getElementById("membershipOptions");
const resultBox = document.getElementById("result");

// Show/hide membership plans
document.querySelectorAll('input[name="type"]').forEach(radio => {
  radio.addEventListener("change", () => {
    membershipOptions.classList.toggle("hidden", radio.value !== "membership");
  });
});

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  if (data.type === "membership" && !data.plan) {
    alert("Please select a membership plan.");
    return;
  }

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <strong>Registration Successful!</strong><br><br>
    <strong>Type:</strong> ${data.type}<br>
    ${data.plan ? `<strong>Plan:</strong> ${data.plan}<br>` : ""}
    <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
    <strong>Email:</strong> ${data.email}<br>
    <strong>Phone:</strong> ${data.phone}<br>
    <strong>Date of Birth:</strong> ${data.dob}<br>
    <strong>Weight:</strong> ${data.weight || "N/A"} kg<br>
    <strong>Height:</strong> ${data.height || "N/A"} cm<br>
  `;

  form.reset();
  membershipOptions.classList.add("hidden");
});
