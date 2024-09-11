// ensures that when a navigation link is clicked

document.querySelectorAll('nav ul a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// highlights the navigation link corresponding
//  to the section currently in view when the user scroll

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a');

function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

window.addEventListener('scroll', changeActiveLink);






// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Validate name input
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate email input
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
        // Log the input values to the console
        console.log('Name:', nameInput.value);
        console.log('Email:', emailValue);
});

