document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("updateBtn");
  const form = document.getElementById("userForm");
  const summary = document.getElementById("userSummary");

  updateBtn.addEventListener("click", () => {
    const formData = new FormData(form);
    let output = "<h3>Your Updated Info:</h3><ul>";

    formData.forEach((value, key) => {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    });

    output += "</ul>";
    summary.innerHTML = output;

    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });
    localStorage.setItem("superFitUser", JSON.stringify(userData));
  });

  const savedData = JSON.parse(localStorage.getItem("superFitUser"));
  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) input.value = value;
    });

    let output = "<h3>Your Saved Info:</h3><ul>";
    Object.entries(savedData).forEach(([key, value]) => {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    output += "</ul>";
    summary.innerHTML = output;
  }
});
