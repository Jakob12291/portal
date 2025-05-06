//öppna modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

//stänga modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Påskägg 1: Byt bakgrund vid klick på "Mitt CV"
document.querySelector('.logo').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./profile.jpg')";
});

// Påskägg 2: Visa modal vid tangentbordsinput
let inputSequence = ' ';
const secretCode = 'xdxdxdxd';

document.addEventListener('keydown', function(event) {
    inputSequence += event.key;
    if (inputSequence.includes(secretCode)) {
        alert('Grattis, du hittade ett påskägg!');
        inputSequence = '';
    }
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}