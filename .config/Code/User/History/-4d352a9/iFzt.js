const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", 
                "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
                "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg",
                "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg"];

const gallery = document.querySelector(".image-gallery");

function showImages(startIndex) {
  gallery.innerHTML = "";
  for (let i = startIndex; i < startIndex + 4; i++) {
    if (i < images.length) {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "image-wrapper";
      const img = document.createElement("img");
      img.src = images[i];
      imgWrapper.appendChild(img);
      gallery.appendChild(imgWrapper);
    }
  }
}

let startIndex = 0;
showImages(startIndex);

const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", () => {
  startIndex += 4;
  if (startIndex >= images.length) {
    startIndex = 0;
  }
  showImages(startIndex);
});
