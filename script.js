// --- Modals logic ---
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');

const buyBtn = document.getElementById('buyBtn');
const buyModal = document.getElementById('buyModal');

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
});

buyBtn.addEventListener('click', () => {
    buyModal.classList.add('active');
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (event.target === buyModal) {
        buyModal.classList.remove('active');
    }
});

// --- Dynamic Title logic ---
const titleText = "asami.cc";
let index = 0;
let isDeleting = false;

function animateTitle() {
    if (!isDeleting) {
        index++;
        if (index > titleText.length) {
            isDeleting = true;
            setTimeout(animateTitle, 1000);
            return;
        }
    } else {
        index--;
        if (index === 0) {
            isDeleting = false;
            document.title = "\u200E"; 
            setTimeout(animateTitle, 400);
            return;
        }
    }

    document.title = titleText.substring(0, index);
    const speed = isDeleting ? 150 : 300;
    setTimeout(animateTitle, speed);
}

animateTitle();