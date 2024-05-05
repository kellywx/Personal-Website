// Changing experiences
const experiences = document.querySelectorAll("div.experience");
const experienceToggle = document.querySelectorAll("a.toggle-inactive, a.toggle-active")

const changeExperience = (event) => {
    experiences.forEach(experience => experience.style.display = "none");
    let clicked = document.getElementById(event.target.innerHTML);
    clicked.style.display = "block";
    experienceToggle.forEach(toggle => toggle.className = "toggle-inactive");
    event.target.className = "toggle-active";
}

experienceToggle.forEach(toggle => toggle.addEventListener('click', changeExperience));

// Reveal while scrolling

const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for (let i=0; i<reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);