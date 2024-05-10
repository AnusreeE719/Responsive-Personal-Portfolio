let hamburger = document.querySelector(".hamburger");
let navItems = document.querySelector(".nav-items");
let icon  = hamburger.querySelector(".fa-bars")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-xmark");
    }else{
        icon.classList.replace("fa-xmark","fa-bars");
    }
}


let form = document.querySelector('form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');



    const serviceID = "service_wrggezo";
    const templateID = "template_o6vgnsn";
    const publicKey = "i6_0HY-fdgfF0Q0yT";
    

    emailjs.init(publicKey);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputData = {
            sender_name: nameInput.value,
            sender_email: emailInput.value,
            message: messageInput.value,
        };
        
        emailjs.send(serviceID, templateID, inputData).then(() => {
            console.log("Success");
        },
        (error) => { 
            console.log(error);
         });
    });
