var aimlBtn = document.getElementById("aiml-btn");

  // Get a reference to the modal
  var aimlModal = document.getElementById("aiml-modal");

  // Get a reference to the close button inside the modal
  var aimlCloseBtn = document.getElementById("aiml-close-btn");

  // Add an event listener to the button that will open the modal
  aimlBtn.addEventListener("click", function() {
    aimlModal.style.display = "block";
  });

  // Add an event listener to the close button that will close the modal
  aimlCloseBtn.addEventListener("click", function() {
    aimlModal.style.display = "none";
  });

