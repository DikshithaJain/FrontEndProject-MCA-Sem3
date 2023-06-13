let students = [];

// JS for Login page
const loginError = document.getElementById("loginError");
const username = document.getElementById("username");
const password = document.getElementById("password");
let loginFlag = false;

function hideLoginError() {
    loginError.style.display = "none";
}

function login() {
    fetch("spring_flowers.json")
    .then(response => response.json())
    .then(json => {
        students = JSON.parse(JSON.stringify(json)).student;
   
        for (let i = 0; i < students.length; i++) {
            if ((username.value == students[i]["username"]) && (password.value == students[i]["password"])) {
            sessionStorage.setItem('username', students[i]["username"]);
            sessionStorage.setItem('id', students[i]["id"]);
            sessionStorage.setItem('dob', students[i]["DOB"]);
            sessionStorage.setItem('address', students[i]["address"]);
            sessionStorage.setItem('email', students[i]["email"]);
            sessionStorage.setItem('bloodGroup', students[i]["bloodGroup"]);
            sessionStorage.setItem('class', students[i]["class"]);
            sessionStorage.setItem('phone', students[i]["phone"]);
            sessionStorage.setItem('fatherName', students[i]["fatherName"]);
            sessionStorage.setItem('fatherEmail', students[i]["fatherEmail"]);
            sessionStorage.setItem('fatherPhone', students[i]["fatherPhone"]);
            sessionStorage.setItem('motherName', students[i]["motherName"]);
            sessionStorage.setItem('motherEmail', students[i]["motherEmail"]);
            sessionStorage.setItem('motherPhone', students[i]["motherPhone"]);
            sessionStorage.setItem('maths', students[i]["marks"]["maths"]);
            sessionStorage.setItem('physics', students[i]["marks"]["physics"]);
            sessionStorage.setItem('chemistry', students[i]["marks"]["chemistry"]);
            sessionStorage.setItem('biology', students[i]["marks"]["biology"]);
            sessionStorage.setItem('history', students[i]["marks"]["history"]);
            sessionStorage.setItem('geography', students[i]["marks"]["geography"]);
            sessionStorage.setItem('english1', students[i]["marks"]["english1"]);
            sessionStorage.setItem('english2', students[i]["marks"]["english2"]);
            sessionStorage.setItem('hindi', students[i]["marks"]["hindi"]);
            sessionStorage.setItem('computer', students[i]["marks"]["computer"]);
            loginFlag = true;
            window.location.href = "home.html";
            } 
        }
        if (!loginFlag) {
            loginError.style.display = "block";
            loginError.innerHTML = "<span><sup>*</sup> Invalid username or password! Please try again.</span>";
        }
    });
}

// JS for Exam Result page
function result(sub) {
    document.getElementById("dropdown-btn").innerText = sub;
    const cardMarksGrade = document.getElementById("card-marks-grade");
    const tableConsolidated = document.getElementById("table-consolidated");
    const marksEle = document.getElementById("marks");
    const gradeEle = document.getElementById("grade");
    if(sub=="Maths") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('maths');
        gradeEle.innerText = grade(sessionStorage.getItem('maths'));
    }
    else if(sub=="Physics") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('physics');
        gradeEle.innerText = grade(sessionStorage.getItem('physics'));
    }
    else if(sub=="Chemistry") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('chemistry');
        gradeEle.innerText = grade(sessionStorage.getItem('chemistry'));
    }
    else if(sub=="Biology") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('biology');
        gradeEle.innerText = grade(sessionStorage.getItem('biology'));
    }
    else if(sub=="History") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('history');
        gradeEle.innerText = grade(sessionStorage.getItem('history'));
    }
    else if(sub=="Geography") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('geography');
        gradeEle.innerText = grade(sessionStorage.getItem('geography'));
    }
    else if(sub=="English 1") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('english1');
        gradeEle.innerText = grade(sessionStorage.getItem('english1'));
    }
    else if(sub=="English 2") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('english2');
        gradeEle.innerText = grade(sessionStorage.getItem('english2'));
    }
    else if(sub=="Hindi") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('hindi');
        gradeEle.innerText = grade(sessionStorage.getItem('hindi'));
    }
    else if(sub=="Computer") {
        cardMarksGrade.style.display = "block";
        tableConsolidated.style.display = "none";
        marksEle.innerText = sessionStorage.getItem('computer');
        gradeEle.innerText = grade(sessionStorage.getItem('computer'));
    } 
    else if(sub=="Consolidated") {
        cardMarksGrade.style.display = "none";
        tableConsolidated.style.display = "block";
        document.getElementById("maths").innerText = sessionStorage.getItem('maths');
        document.getElementById("gradeMaths").innerText = grade(sessionStorage.getItem('maths'));
        document.getElementById("physics").innerText = sessionStorage.getItem('physics');
        document.getElementById("gradePhysics").innerText = grade(sessionStorage.getItem('physics'));
        document.getElementById("chemistry").innerText = sessionStorage.getItem('chemistry');
        document.getElementById("gradeChemistry").innerText = grade(sessionStorage.getItem('chemistry'));
        document.getElementById("biology").innerText = sessionStorage.getItem('biology');
        document.getElementById("gradeBiology").innerText = grade(sessionStorage.getItem('biology'));
        document.getElementById("history").innerText = sessionStorage.getItem('history');
        document.getElementById("gradeHistory").innerText = grade(sessionStorage.getItem('history'));
        document.getElementById("geography").innerText = sessionStorage.getItem('geography');
        document.getElementById("gradeGeography").innerText = grade(sessionStorage.getItem('geography'));
        document.getElementById("english1").innerText = sessionStorage.getItem('english1');
        document.getElementById("gradeEnglish1").innerText = grade(sessionStorage.getItem('english1'));
        document.getElementById("english2").innerText = sessionStorage.getItem('english2');
        document.getElementById("gradeEnglish2").innerText = grade(sessionStorage.getItem('english2'));
        document.getElementById("hindi").innerText = sessionStorage.getItem('hindi');
        document.getElementById("gradeHindi").innerText = grade(sessionStorage.getItem('hindi'));
        document.getElementById("computer").innerText = sessionStorage.getItem('computer');
        document.getElementById("gradeComputer").innerText = grade(sessionStorage.getItem('computer'));
    }
}

function grade(marks) {
    if(marks >= 85) {
        return "Distinction";
    }
    else if(marks >= 75) {
        return "First Class";
    }
    else if(marks >= 60) {
        return "Second Class";
    }
    else if(marks >= 40) {
        return "Third Class";
    }
    else {
        return "Fail";
    }
}

// JS for Extra Activity page
const activityError = document.getElementById("activityError");
const activity = document.getElementById("activity");
const desc = document.getElementById("description");
const submittedModal = document.getElementById("submitted-modal");
const btnAddActivity = document.getElementById("addActivity-btn");

function hideActivityError() {
    activityError.style.display = "none";
}

function addActivity() {
    if (activity.value == "" || desc.value == "") {
        activityError.style.display = "block";
        activityError.innerHTML = "<span><sup>*</sup> Activity name and description are required to add an activity.</span>";
    } else {
        sessionStorage.setItem("Activity"+activity.value, desc.value);
        alert("Activity added");
        sessionStorage.setItem("activityExists", true);
        activity.value = "";
        desc.value = "";

    }
}

// JS for Home page
const displayActivity = document.getElementById("display-activity");
const activityList = document.getElementById("activity-list");
let activityExists = false;
 
function homePageOnLoad() {
    if(sessionStorage.length == 1) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById('profile-btn').innerText = sessionStorage.getItem('username');
    if (!sessionStorage.getItem('activityExists')) {
        displayActivity.style.display = "none";
    } else {
        displayActivity.style.display = "block";
        for (let i = 0; i < sessionStorage.length; i++) {
            if(sessionStorage.key(i).startsWith('Activity')) {
                activityExists = true;
                key = sessionStorage.key(i);
                activityName = document.createElement('h5');
                activityDesc = document.createElement('p');
                activityName.innerText = key;
                activityDesc.innerText = sessionStorage.getItem(key);
                listItem = document.createElement('li');
                listItem.appendChild(activityName)
                listItem.appendChild(activityDesc);
                activityList.appendChild(listItem);
            }
        }
    }
}

// JS for Profile page
function profilePageOnLoad() {
    if(sessionStorage.length == 1) {
        window.location.href = "index.html";
        return;
    }
    console.log(sessionStorage.getItem('marks'));
    document.getElementById('profile-btn').innerText = sessionStorage.getItem('username');
    document.getElementById("name").innerHTML = sessionStorage.getItem("username");
    document.getElementById("id").innerHTML = sessionStorage.getItem("id");
    document.getElementById("dob").innerHTML = "DOB:<br>"+sessionStorage.getItem("dob");
    document.getElementById("address").innerHTML = "Address:<br>"+sessionStorage.getItem("address");
    document.getElementById("phone").innerHTML = "Phone:<br>"+sessionStorage.getItem("phone");
    document.getElementById("email").innerHTML = "Email:<br>"+sessionStorage.getItem("email");
    document.getElementById("bloodGroup").innerHTML = "Blood group:<br>"+sessionStorage.getItem("bloodGroup");
    document.getElementById("class").innerHTML = "Class:<br>"+sessionStorage.getItem("class");
    document.getElementById("fatherName").innerHTML = "Father Name:<br>"+sessionStorage.getItem("fatherName");
    document.getElementById("fatherPhone").innerHTML = "Father Phone:<br>"+sessionStorage.getItem("fatherPhone");
    document.getElementById("fatherEmail").innerHTML = "Father Email:<br>"+sessionStorage.getItem("fatherEmail");
    document.getElementById("motherName").innerHTML = "Mother Name:<br>"+sessionStorage.getItem("motherName");
    document.getElementById("motherPhone").innerHTML = "Mother Phone:<br>"+sessionStorage.getItem("motherPhone");
    document.getElementById("motherEmail").innerHTML = "Mother Email:<br>"+sessionStorage.getItem("motherEmail");
}

// Global
function logout() {
    window.location.href = "index.html";
    sessionStorage.clear();
}

function onLoad() {
    if(sessionStorage.length == 1) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById('profile-btn').innerText = sessionStorage.getItem('username');
}