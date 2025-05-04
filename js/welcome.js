document.getElementById("nextBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();


  if (!name) {
    alert("Please enter your name!");
    nameInput.focus();
    return;
  }

  if (name.length > 20) {
    alert("Name too long (max 20 characters)");
    nameInput.focus();
    return;
  }


  const sanitizedName = sanitizeInput(name);


  try {
    localStorage.setItem("playerName", sanitizedName);
    window.location.href = "avatars.html";
  } catch (e) {
    console.error("Storage error:", e);
    alert("Error saving data. Please try again.");
  }
});


function sanitizeInput(input) {
  return input.replace(/<[^>]*>?/gm, '') 
             .substring(0, 20); 
}