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


// CSS animation triggered when scrolling
const animation_element = document.querySelectorAll('.text-typing, .text-typing-2');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })
}, {
    threshold: 0.5  // starts animating as soon as 50% of element comes in screen
});

// add all animation elements into our observer
for (let i=0; i<animation_element.length; i++) {
    const element = animation_element[i];

    observer.observe(element);
}