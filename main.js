document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
  
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    function showItem(index) {
      items.forEach((item, idx) => {
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
          setTimeout(() => {
            item.style.opacity = 2;
          }, 50);
        } else {
          item.classList.remove("active");
          dots[idx].classList.remove("active");
          item.style.opacity = 0;
        }
      });
    }
  
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
    
    function autoPlay() {
      let currentIndex = [...items].findIndex(item => item.classList.contains("active"));
      let nextIndex = (currentIndex + 1) % items.length;
      showItem(nextIndex);
      setTimeout(autoPlay, 5000);
    }
    
    setTimeout(autoPlay, 5000);
});