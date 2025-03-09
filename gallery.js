/* Name this external file gallery.js */

function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
  
    // Store original text and background only once
    if (!imageDiv.dataset.originalText) {
      imageDiv.dataset.originalText = imageDiv.innerHTML;
      imageDiv.dataset.originalBg = imageDiv.style.backgroundImage;
    }
  
    // Update image and text
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  }
  
  function unDo() {
    let imageDiv = document.getElementById("image");
  
    // Restore original values
    imageDiv.innerHTML = imageDiv.dataset.originalText || "Hover over an image";
    imageDiv.style.backgroundImage = imageDiv.dataset.originalBg || "none";
  }
  