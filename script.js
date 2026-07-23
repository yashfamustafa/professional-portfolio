/*=========================================
        TYPING EFFECT
=========================================*/

const textArray = [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Java Developer",
    "Digital Marketer",
    "Graphic Designer",
    "Content Writer",
    "AI Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    let currentText = textArray[textIndex];

    if(isDeleting){

        typing.textContent = currentText.substring(0,charIndex--);

    }

    else{

        typing.textContent = currentText.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentText.length + 1){

        speed = 1800;

        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        textIndex++;

        if(textIndex === textArray.length){

            textIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();

/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        navbar.style.background="rgba(5,8,22,.95)";
        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(5,8,22,.75)";
        navbar.style.boxShadow="none";

    }

});

/*=========================================
      ACTIVE NAVBAR LINK
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=========================================
      SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".why-card, .service, .project-card, .stat-box, .skill-card, .contact-card, .achievement-card, .about-image, .about-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, { threshold: 0.2 });
 


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = ()=>{

                const increment = target / 80;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*=========================================
      SKILL PROGRESS BAR
=========================================*/

const progressBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target;

const width = bar.getAttribute("data-width");

bar.style.width = width;

}

});

},{threshold:0.4});

progressBars.forEach(bar=>{

bar.style.width="0";

skillObserver.observe(bar);

});


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.pageYOffset > 400){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*=========================================
      PROJECT CARD EFFECT
=========================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.project-btn,.project-btn2"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width,rect.height);

const x = e.clientX - rect.left - size/2;

const y = e.clientY - rect.top - size/2;

ripple.style.width = size+"px";
ripple.style.height = size+"px";
ripple.style.left = x+"px";
ripple.style.top = y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================
      SIMPLE PAGE LOADER
=========================================*/

window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

}

});
/*=========================================
      PROJECT FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.getAttribute("data-filter");

projectItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});


/*=========================================
      CONTACT FORM VALIDATION
=========================================*/

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]');
const email=this.querySelector('input[type="email"]');
const message=this.querySelector("textarea");

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(email.value.trim()===""){

alert("Please enter your email.");

email.focus();

return;

}

if(message.value.trim()===""){

alert("Please enter your message.");

message.focus();

return;

}

alert("Thank you! Your message has been sent.");

this.reset();

});

}


/*=========================================
      ACTIVE MENU ON SCROLL
=========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================================
      SCROLL PROGRESS BAR
=========================================*/

const progress=document.createElement("div");

progress.id="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/*=========================================
      CURSOR GLOW EFFECT
=========================================*/

const glow=document.createElement("div");

glow.id="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=========================================
      PARALLAX HERO IMAGE
=========================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(heroImage){

const x=(window.innerWidth/2-e.pageX)/40;
const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

}

});


/*=========================================
      FLOATING ANIMATION
=========================================*/

const floatingCards=document.querySelectorAll(

".why-card,.service,.project-card,.skill-card"

);

floatingCards.forEach((card,index)=>{

card.style.animation=`floatCard ${4+index%3}s ease-in-out infinite`;

});


/*=========================================
      PRELOADER (OPTIONAL)
=========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

setTimeout(()=>{

loader.remove();

},500);

}

});


/*=========================================
      CONSOLE MESSAGE
=========================================*/

console.log("%cPortfolio Designed by Yashfa Mustafa",
"color:#38bdf8;font-size:18px;font-weight:bold;");

