let header = document.querySelector('header');
let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .nav');

menu.addEventListener( 'click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// Email JS
let contactForm = document.getElementById('contact-form');
let contactMessage = document.getElementById('contact-message');
let contactButton = document.getElementById('contact-button');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_06xotmr','template_x1g3s1r','#contact-form','revyh4GOMBfSxAMvc')
    .then( () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        //Remove message after 5s and change button text color
        setTimeout( () => {
            contactMessage.textContent = '';
            contactButton.classList.remove('clicked');
        }, 5000);
        
        //Clear Form
        contactForm.reset();
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);
contactButton.addEventListener('click', function(){
    contactButton.classList.add('clicked');
})