// Open popup when Choose Options is clicked
const chooseButtons = document.querySelectorAll(".choose-btn");
const modal = document.getElementById("popup-modal");
const closeBtn = document.getElementById("close-modal");

chooseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Click outside closes popup
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
