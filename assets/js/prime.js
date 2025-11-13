// card start
const button = document.getElementById("btn");
const card = document.querySelector(".card");
const user = document.querySelector(".user");
const imgBx = document.querySelector(".imgBx");
const contact1 = document.getElementById("id1");
const contact2 = document.getElementById("id2");
const contact3 = document.getElementById("id3");
const contact4 = document.getElementById("id4");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
let toOpen = true;
const mainColor = "#0ef";

button.addEventListener("click" , event => {
    card.classList.toggle("enable");

    if(toOpen){
        user.style.backgroundColor = mainColor;
        imgBx.style.borderColor = "white";
        contact1.classList.remove("blur");
        contact2.classList.remove("blur");
        contact3.classList.remove("blur");
        contact4.classList.remove("blur");
    }
    else{
        user.style.backgroundColor = mainColor;
        imgBx.style.borderColor = "black";
    }

    toOpen = !toOpen;
});


contact1.addEventListener("mouseover", event => {
    if(contact1.classList == "blur"){
        contact1.classList.remove("blur");
        p1.style.color = mainColor;
    }
});
contact1.addEventListener("mouseout", event => {
    if(contact1.classList != "blur"){
        contact1.classList.add("blur");
        p1.style.color = "white";
    }
});

contact2.addEventListener("mouseover", event => {
    if(contact2.classList == "blur"){
        contact2.classList.remove("blur");
        p2.style.color = mainColor;
    }
});
contact2.addEventListener("mouseout", event => {
    if(contact2.classList != "blur"){
        contact2.classList.add("blur");
        p2.style.color = "white";
    }
});



contact3.addEventListener("mouseover", event => {
    if(contact3.classList == "blur"){
        contact3.classList.remove("blur");
        p3.style.color = mainColor;
    }
});
contact3.addEventListener("mouseout", event => {
    if(contact3.classList != "blur"){
        contact3.classList.add("blur");
        p3.style.color = "white";
    }
});
contact4.addEventListener("mouseover", event => {
    if(contact4.classList == "blur"){
        contact4.classList.remove("blur");
        p4.style.color = mainColor;
    }
});
contact4.addEventListener("mouseout", event => {
    if(contact4.classList != "blur"){
        contact4.classList.add("blur");
        p4.style.color = "white";
    }
});
/* card end */



