//This is for a sleep() control 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//This is for the text animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    });
});

const description_obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('desc_show')
        }

    });
});


const name_obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            sleep(800).then(() => { entry.target.classList.add('name_progress');
                sleep(750).then(() => { entry.target.classList.add('name_finish') });});

        } 
    });
});

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the pop-up when clicking outside the content
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

document.getElementById("about-btn").addEventListener("click", function(event) {
    
    // Get the position of the "About Me" section
    const aboutSection = document.getElementById("about-me");
    const aboutPosition = aboutSection.offsetTop;
    
    // Use window.scrollTo() for smooth scrolling
    window.scrollTo({
        top: aboutPosition,
        behavior: "smooth"
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const hiddenNameDesc = document.querySelectorAll('.desc_hidden');
hiddenNameDesc.forEach((el) => description_obs.observe(el));
const nameColor = document.querySelectorAll('.name_start');
nameColor.forEach((el) => name_obs.observe(el));