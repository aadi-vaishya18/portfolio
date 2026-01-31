// ------------ About Section ------------

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName, element) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    if (element) {
        element.classList.add("active-link");
    }
    document.getElementById(tabName).classList.add("active-tab");
}


// ------------ Side Menu ------------

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


// ------------ Contact Form Submission ------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwu3S6-2iFQ9BZi7_m_00oRk78x-965sjJj0iOSmRsO2b8UxzEdqwkhMM77gg0eSHd9/exec';
const form = document.forms['YOUR_FORM_NAME'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    // ✅ Capture form data FIRST
    const formData = new FormData(form);

    // ✅ Clear form immediately
    form.reset();

    // Optional: immediate feedback
    msg.innerHTML = "Sending message...";

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        msg.innerHTML = "Message sent successfully ✅";
        setTimeout(() => msg.innerHTML = "", 2000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "Error sending message ❌";
        setTimeout(() => msg.innerHTML = "", 5000);
    });
});

