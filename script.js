// Button Animation
const animatedButton = document.getElementById('animatedButton');
animatedButton.addEventListener('click', () => {
    animatedButton.style.animation = 'bounce 0.5s ease-in-out';
    setTimeout(() => {
        animatedButton.style.animation = ''; // Reset animation
    }, 500);
});

// Bounce Animation (added dynamically)
const style = document.createElement('style');
style.textContent = `
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}`;
document.head.appendChild(style);

// Save and Retrieve User Preferences
const saveButton = document.getElementById('savePreference');
const userInput = document.getElementById('userPreference');
const storedPreference = document.getElementById('storedPreference');

// Save preference to localStorage
saveButton.addEventListener('click', () => {
    const preference = userInput.value;
    if (preference) {
        localStorage.setItem('userPreference', preference);
        displayStoredPreference(preference);
    }
});

// Display stored preference
function displayStoredPreference(preference) {
    storedPreference.textContent = `Your preference: ${preference}`;
    storedPreference.style.animation = 'fadeIn 1s ease-in-out';
}

// Retrieve and display preference on page load
window.addEventListener('load', () => {
    const savedPreference = localStorage.getItem('userPreference');
    if (savedPreference) {
        displayStoredPreference(savedPreference);
    }
});

// Tabs Functionality
const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabPanes.forEach(pane => pane.classList.add('hidden'));
        document.getElementById(tab.dataset.content).classList.remove('hidden');
    });
});

// Form Validation
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailFeedback.textContent = 'Invalid email format';
    } else {
        emailFeedback.textContent = '';
    }
});

const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters';
    } else {
        passwordFeedback.textContent = '';
    }
});

// Form Submission
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});