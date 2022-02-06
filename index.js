document.addEventListener("DOMContentLoaded", function() {
    let grabP = document.querySelector("p");
    grabP.textContent = 'This is really cool!'
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );