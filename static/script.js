function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, I am Henry";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, I am Henry";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, I am Henry";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        E.innerHTML = "Good night, I am Henry";
    }
}

if (window.location.href.indexOf("index.html") > -1 || window.location.href.endsWith('/')) {
    greetingFunc();
}

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML = "&copy; " + y + " design and coded by Henry Zhu";
}

// function showList() {
//     var list = document.querySelector('div ul');
//     var btn = document.querySelector('div button');
//     list.style.display = 'block';
//     btn.style.display = 'none';
// }

function validateForm() {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var commentField = document.getElementById("comment");
    var validationMessage = document.getElementById("validationMessage");
    var formMessage = document.getElementById("formMessage");

    if (!nameField.checkValidity()) {
        formMessage.innerHTML = "Please fill out the Name section.";
    }
    else if (!emailField.checkValidity()) {
        formMessage.innerHTML = "Please fill out the Email section.";
    }
    else if (!commentField.checkValidity()) {
        formMessage.innerHTML = "Please fill out the Comment section.";
    }
    else {
        validationMessage.innerHTML = "All required sections filled out!";
    }
}

$(document).ready(function(){
    $("#readMore").click(function(){
        $("#shortBio").hide();
        $("#fullBio").show();
    });
    $("#readLess").click(function(){
        $("#fullBio").hide();
        $("#shortBio").show();
    });
});

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            var advice = data.slip.advice;
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Error fetching advice.";
            console.error(error);
        });
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.pathname === currentPath) {
      link.classList.add('active');
    }
  });
});