// "use strict";
// // Test for local storage
// function supportsLocalStorage() {
// 	try {
// 		return "localStorage" in window && window["localStorage"] !== null;
// 	} catch (e) {
// 		return false;
// 	}
// }

let closeWindow = document.querySelector(".fa-window-close");

// Hamburger menu
function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// Close alert box
let alertBox = document.querySelector(".alert");
let closeAlert = document.querySelector(".fa-window-close");
let removeAlert = () => {
	alertBox.style.display = "none";
};

// Notifications
var el = document.querySelector(".fa-bell");
let getNotifications = dataCount => {
	let data = dataCount;
	var count = Number(el.getAttribute("data-count")) || 0;
	el.setAttribute("data-count", data);
	el.offsetWidth = el.offsetWidth;
	el.classList.add("notify");
	if (data === 2) {
		el.classList.add("show-count");
	} else {
		el.classList.remove("notify");
	}
};

getNotifications(2);

// Display notification
let myNotifications = () => {
	let notificationBox = document.querySelector(".notification-box");
	notificationBox.classList.toggle("display-none");
};

// Autocompletion to the search field
$(function() {
	var availableTags = [
		"Victoria Chambers",
		"Dale Byrd",
		"Dawn Wood",
		"Dan Oliver"
	];
	$("#search-user").autocomplete({
		source: availableTags
	});
});

// Validate Form
let btnSendMessage = document.getElementById("send-btn");
let textArea = document.getElementById("textarea");

btnSendMessage.addEventListener("click", function validateForm() {
	let name = document.forms["message-user"]["search"].value;
	let text = textArea.value;

	if (name == "" || text == "") {
		alert("Username and text area must be filled out");
	} else {
		alert(`Your Message was sent to ${name} successfully`);
	}
});

// =====================================
//  localStorage
// =====================================

// Save Settings to Local Storage

const emailSettings = document.getElementById("toggle--off--on1");
const profileSettings = document.getElementById("toggle--off--on2");
const timeZone = document.getElementById("timezone");
const setEmail = localStorage.getItem("emailSettings");
const setProfile = localStorage.getItem("profileSettings");
const setTimeZone = localStorage.getItem("timeZone");
const saveBtn = document.getElementById("save-settings");
const cancelBtn = document.getElementById("cancel-settings");

const storeData = function() {
	if (setEmail !== null) {
		emailSettings.checked = setEmail === "true";
	}

	if (setProfile !== null) {
		profileSettings.checked = setProfile === "true";
	}

	if (setTimeZone !== null) {
		timeZone.value = setTimeZone;
	}
};

document.addEventListener("DOMContentLoaded", function() {
	saveBtn.addEventListener("click", function() {
		localStorage.setItem("emailSettings", emailSettings.checked);
		localStorage.setItem("profileSettings", profileSettings.checked);
		localStorage.setItem("timeZone", timeZone.value);
		alert("Great! Your settings have been saved");
	});

	cancelBtn.addEventListener("click", function() {
		const cancel = confirm("Continue without saving?");

		if (emailSettings == true) {
			localStorage.removeItem = emailSettings;
		}
	});

	storeData();
});
