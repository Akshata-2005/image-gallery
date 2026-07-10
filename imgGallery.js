let lightboxEl = document.getElementById("lightbox");
let prevButtonEl = document.getElementById("prevButton");
let lightboxImgEl = document.getElementById("lightboxImg");
let nxtButtonEl = document.getElementById("nxtButton");
let closeButtonEl = document.getElementById("closeButton");

let imgIds = ['img1', "img2", "img3", "img4", "img5", "img6", "img7", "img8"];
let currentIndex = 0;

imgIds.forEach((id, index) => {
    let img = document.getElementById(id);
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImgEl.src = img.src;
        lightboxEl.style.display = 'flex';
    });
});

closeButtonEl.addEventListener('click', () => {
    lightboxEl.style.display = 'none';
});

// Next image
nxtButtonEl.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgIds.length;
    lightboxImgEl.src = document.getElementById(imgIds[currentIndex]).src;
});

// Previous image
prevButtonEl.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgIds.length) % imgIds.length;
    lightboxImgEl.src = document.getElementById(imgIds[currentIndex]).src;
});

// Close when clicking outside the image
lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) {
        lightboxEl.style.display = 'none';
    }
});
