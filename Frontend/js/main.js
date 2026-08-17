/* =====================================================
   EXPLORE INDIA - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   BACKGROUND IMAGES
   3 Indian tourism images
===================================================== */

const images = [

    // Taj Mahal
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",

    // Kerala
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=90",

    // Rajasthan
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=90"

];


let index = 0;
let layer = 1;


const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const dots = document.getElementById("dots");


/* =====================================================
   SHOW FIRST IMAGE IMMEDIATELY
===================================================== */

bg1.style.backgroundImage =
    `url("${images[0]}")`;


/* =====================================================
   CREATE SLIDER DOTS
===================================================== */

images.forEach((image, i) => {

    const dot = document.createElement("span");

    dot.className =
        i === 0 ? "dot active" : "dot";

    dots.appendChild(dot);

});


/* =====================================================
   BACKGROUND SLIDESHOW
   Changes every 5 seconds
===================================================== */

setInterval(() => {

    index = (index + 1) % images.length;


    /* Load image before displaying it */

    const newImage = new Image();

    newImage.onload = function () {

        const allDots =
            document.querySelectorAll(".dot");


        allDots.forEach(dot => {
            dot.classList.remove("active");
        });


        allDots[index].classList.add("active");


        /* Use the other layer */

        if (layer === 1) {

            bg2.style.backgroundImage =
                `url("${images[index]}")`;

            bg2.style.opacity = "1";
            bg1.style.opacity = "0";

            layer = 2;

        } else {

            bg1.style.backgroundImage =
                `url("${images[index]}")`;

            bg1.style.opacity = "1";
            bg2.style.opacity = "0";

            layer = 1;
        }

    };


    newImage.src = images[index];

}, 5000);


/* =====================================================
   LOGIN / SIGNUP
===================================================== */

function openLogin() {

    document.getElementById("authModal")
        .style.display = "flex";

    showLogin();
}


function openSignup() {

    document.getElementById("authModal")
        .style.display = "flex";

    showSignup();
}


function closeModal(id) {

    document.getElementById(id)
        .style.display = "none";
}


/* =====================================================
   SHOW LOGIN
===================================================== */

function showLogin() {

    document.getElementById("loginForm")
        .style.display = "block";

    document.getElementById("signupForm")
        .style.display = "none";


    document.getElementById("loginTab")
        .classList.add("active");

    document.getElementById("signupTab")
        .classList.remove("active");
}


/* =====================================================
   SHOW SIGNUP
===================================================== */

function showSignup() {

    document.getElementById("loginForm")
        .style.display = "none";

    document.getElementById("signupForm")
        .style.display = "block";


    document.getElementById("signupTab")
        .classList.add("active");

    document.getElementById("loginTab")
        .classList.remove("active");
}


/* =====================================================
   LOGIN TYPE
   Email OR Mobile
===================================================== */

function changeLoginType() {

    const type =
        document.getElementById("loginType").value;


    document.getElementById("loginEmail")
        .style.display =
        type === "email" ? "block" : "none";


    document.getElementById("loginPhone")
        .style.display =
        type === "phone" ? "block" : "none";
}


/* =====================================================
   LOGIN
===================================================== */

function login(event) {

    event.preventDefault();

    alert("Login successful!");

}


/* =====================================================
   SIGNUP
   Email only
===================================================== */

function signup(event) {

    event.preventDefault();


    const password =
        document.getElementById("password").value;


    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    closeModal("authModal");


    document.getElementById("detailsModal")
        .style.display = "flex";
}


/* =====================================================
   AGE CALCULATION
===================================================== */

function calculateAge() {

    const dob =
        new Date(
            document.getElementById("dob").value
        );


    const today = new Date();


    let age =
        today.getFullYear() -
        dob.getFullYear();


    const month =
        today.getMonth() -
        dob.getMonth();


    if (
        month < 0 ||
        (
            month === 0 &&
            today.getDate() < dob.getDate()
        )
    ) {

        age--;

    }


    document.getElementById("age").value =
        age + " years";
}


/* =====================================================
   CITIZENSHIP
===================================================== */

function citizenFields() {

    const value =
        document.getElementById("citizen").value;


    document.getElementById("indian")
        .style.display =
        value === "yes" ? "block" : "none";


    document.getElementById("foreign")
        .style.display =
        value === "no" ? "block" : "none";
}


/* =====================================================
   CREATE ACCOUNT
===================================================== */

function createAccount(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    closeModal("detailsModal");


    document.getElementById("landingPage")
        .style.display = "none";


    document.getElementById("dashboard")
        .style.display = "block";


    document.getElementById("userName")
        .textContent = name;
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    document.getElementById("dashboard")
        .style.display = "none";


    document.getElementById("landingPage")
        .style.display = "flex";
}