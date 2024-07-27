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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const hiddenNameDesc = document.querySelectorAll('.desc_hidden');
hiddenNameDesc.forEach((el) => description_obs.observe(el));
const nameColor = document.querySelectorAll('.name_start');
nameColor.forEach((el) => name_obs.observe(el));