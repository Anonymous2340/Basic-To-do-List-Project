"use strict";

// create a constructor class to build up object tasks
// store each in the array every click
// loop in the array and display each object task in the screen through appending child element

const add = document.querySelector(".fa-square-plus");
const body = document.body;
const date = new Date();
const day = date.getDate();
const currentDate = date.getDay();
const year = date.getFullYear();
const hours = date.getHours() > 10 ? date.getHours() % 12 : date.getHours + "0";
const minutes = date.getMinutes() > 10 ? date.getMinutes() : date.getMinutes() + "0";
const ampm = date.getHours() > 12 ? "PM" : "AM";
const days = ['Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat'];

class task {
    constructor (dateTime, text) {
        this.dateTime = dateTime;
        this.text = text;
    };
};

add.addEventListener("click", ()=>{
    let timeStamp = `• ${days[currentDate]} ${day}, ${year}, ${hours}:${minutes}${ampm}`;

    let value = document.getElementById("task-name");
    let myTask = new task(`${timeStamp}: Task 1`, value.value);
    appendFunc(myTask)
});

function appendFunc(myTask) {
    let container = document.createElement("div");
    let innerContainer = document.createElement("div");
    let i = document.createElement("i");
    let spanDiv = document.createElement("div");
    let span = document.createElement("span");
    let description = document.createElement("div");

    // attribute setting
    container.setAttribute("class", "task-list");
    innerContainer.setAttribute("class", "task");
    i.setAttribute("aria-hidden", true);
    i.setAttribute("class", "fa-solid fa-xmark");
    spanDiv.setAttribute("class", "labels");
    span.setAttribute("class", "label");
    description.setAttribute("class", "descriptions");

    // content setting
    span.innerText = `${myTask.dateTime}`;
    description.innerText = `"${myTask.text}"`;

    // appending setting
    innerContainer.appendChild(i);
    innerContainer.appendChild(spanDiv)
    spanDiv.appendChild(span);
    innerContainer.appendChild(description);
    container.appendChild(innerContainer);
    body.appendChild(container);

    i.addEventListener("click", ()=>{
        container.remove();
    });
};
