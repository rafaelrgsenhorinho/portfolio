//Character head

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    let navegation = document.getElementById('navegation');
    let headLine = document.getElementById('head-line');
    let imageHead = document.getElementById('image-head');
    
  
    let maxScroll = 500;

    if (scrollTop <= maxScroll) {

        navegation.style.background = `rgba(0, 0, 0, ${(scrollTop / maxScroll)})`;

        headLine.style.transform = `translateY(${scrollTop * -0.28}px)`;

        imageHead.style.filter = `drop-shadow(0px 0px 12px rgba(84, 201, 247, ${(1 - scrollTop / maxScroll)}))`;
        imageHead.style.transform = `scale(${1 + scrollTop * -0.001})`;

    } else {

        navegation.style.background = `rgba(0, 0, 0, 1)`;

        headLine.style.transform = `translateY(${maxScroll * -0.28}px)`;

        imageHead.style.filter = `drop-shadow(0px 0px 12px rgba(84, 201, 247, 0))`;
        imageHead.style.transform = `scale(${1 + maxScroll * -0.001})`;
    }
});

window.addEventListener('mousemove', function(event) {
    let imageHead = document.getElementById('image-head');
    let eyeLeft = document.getElementById('eye-left');
    let eyeRight = document.getElementById('eye-right');
    let mouth = document.getElementById('mouth');
  
    let rect = imageHead.getBoundingClientRect();

    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    let mouseX = event.clientX;
    let mouseY = event.clientY;
  
    let rotateX = (mouseY - centerY) / rect.height * 4; 
    let rotateY = (mouseX - centerX) / rect.width * -4; 

    let currentTransform = imageHead.style.transform;

    let scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
    let translateYMatch = currentTransform.match(/translateY\(([^)]+)\)/);

    let currentScale = scaleMatch ? scaleMatch[1] : 1;
    let currentTranslateY = translateYMatch ? translateYMatch[1] : '0px';

    const translateX = (mouseX - centerX) * 0.008;
    const translateY = (mouseY - centerY) * 0.008;

    const translateXmouth = (mouseX - centerX) * 0.008;
    const translateYmouth = (mouseY - centerY) * 0.008;
    
    imageHead.style.transform = `translateY(${currentTranslateY}) scale(${currentScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    eyeLeft.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    eyeRight.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;  
    mouth.style.transform  = `translateX(${translateXmouth}px) translateY(${translateYmouth}px)`;  
});

document.addEventListener('click', function() {
    let headAnima = document.getElementById('head-anima');
    let mouth = document.getElementById('mouth-anima');


    headAnima.classList.add('vertical-shake');
    mouth.classList.add('laugh');
  
    setTimeout(function() {
        headAnima.classList.remove('vertical-shake');
        mouth.classList.remove('laugh');
    }, 1200);
});

//Work cards

document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.work-element');
    const innerWorkElements = document.querySelectorAll('.work-content');
    const innerWorkNumberElements = document.querySelectorAll('.work-name');

    columns.forEach(click => {
        click.addEventListener('click', event => {
            const isExpanded = click.classList.contains('expanded');

            columns.forEach(column => {
                column.classList.remove('expanded');
            });

            innerWorkElements.forEach(innerElement => {
                innerElement.classList.remove('active');
            });

            innerWorkNumberElements.forEach(innerElement => {
                innerElement.classList.remove('active');
            });

            if (!isExpanded) {
                click.classList.add('expanded');
                click.querySelector('.work-content').classList.add('active');
                click.querySelector('.work-name').classList.add('active');
            }
        });
    });
});

//Track Skill

const carousel = document.querySelector(".skills-list").cloneNode(true);
document.querySelector(".skills-track").appendChild(carousel);

//Mouth animation

function switchAnimation(newAnimationClass) {
    const mouthElement = document.getElementById('mouth');

    // Remove all animation classes
    mouthElement.classList.remove('mouthzero', 'mouthone', 'mouthtwo');

    // Temporarily force reflow to restart animation
    void mouthElement.offsetWidth;

    // Add the new animation class
    mouthElement.classList.add(newAnimationClass);
}

document.getElementById('charhead').addEventListener('click', function() {
    switchAnimation('mouthzero');
});

document.getElementById('profile-photo').addEventListener('click', function() {
    switchAnimation('mouthone');
});

document.getElementById('work-element').addEventListener('click', function() {
    switchAnimation('mouthtwo');
});
