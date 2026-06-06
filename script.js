let selectedService = "Not Selected";
let selectedPlan = "Not Selected";

/* Service Selection */
function selectService(service){

    selectedService = service;

    document.getElementById("serviceSlot").innerText = service;

    document.getElementById("msgBox").value =
    `I am interested in ${service}.`;

    // Pricing section par auto scroll
    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth"
    });
}

/* Plan Selection */
function selectPlan(plan){

    selectedPlan = plan;

    document.getElementById("planSlot").innerText = plan;

    document.getElementById("msgBox").value =
    `I am interested in ${selectedService} with ${plan} package.`;

    // Contact section par auto scroll
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function viewWork() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

function viewWork(){
    document.getElementById("portfolio").scrollIntoView({
        behavior:"smooth"
    });
}

/* Send Request */
function submitForm(e){

    e.preventDefault();

    let name =
    document.querySelector(
        'input[type="text"]'
    ).value;

    let phone =
    document.querySelector(
        'input[type="tel"]'
    ).value;

    let requirement =
    document.getElementById(
        "msgBox"
    ).value;

    let message =
`🔥 NEW CLIENT REQUEST

👤 Name: ${name}

📱 WhatsApp: ${phone}

🎯 Service: ${selectedService}

💎 Plan: ${selectedPlan}

📝 Requirement:
${requirement}

━━━━━━━━━━━━━━
Sent from CreatorHub Website`;

    let yourNumber = "917366012324";

    let whatsappURL =
    `https://wa.me/${yourNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}

/* Hero Button Scroll */
document.addEventListener(
    "DOMContentLoaded",
    function(){

        let btn =
        document.querySelector(
            ".primary-btn"
        );

        if(btn){

            btn.addEventListener(
                "click",
                function(){

                    document
                    .getElementById(
                        "services"
                    )
                    .scrollIntoView({
                        behavior:"smooth"
                    });

                }
            );

        }

    }
);

/* Navbar Glass Effect */
window.addEventListener(
    "scroll",
    function(){

        let header =
        document.querySelector(
            "header"
        );

        if(window.scrollY > 50){

            header.style.background =
            "rgba(5,8,22,0.85)";

        }else{

            header.style.background =
            "rgba(255,255,255,0.05)";

        }

    }
);

/* Card Animation */
const cards =
document.querySelectorAll(
    ".service-card,.price-card"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},
{
threshold:0.2
}
);

cards.forEach((card)=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
"all 0.8s ease";

observer.observe(card);

});