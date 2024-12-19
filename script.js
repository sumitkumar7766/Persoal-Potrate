const openpage1 = () => {
    window.location.href = 'indexvedio.html';
}

const openpage2 = () => {
    window.location.href = 'indexleader.html';
}

const openpage3 = () => {
    window.location.href = 'indexchalange.html';
}

const openpage4 = () => {
    window.location.href = 'index.html';
}

const openpage5 = () => {
    window.location.href = 'indexvedio.html';
}

const openpage6 = () => {
    window.location.href = 'indexleader.html';
}

const openpage7 = () => {
    window.location.href = 'index.html';
}

const openpage8 = () => {
    window.location.href = 'indexvedio.html';
}

const openpage9 = () => {
    window.location.href = 'indexchalange.html';
}

const openpage10 = () => {
    window.location.href = 'index.html';
}

const openpage11 = () => {
    window.location.href = 'indexleader.html';
}

const openpage12 = () => {
    window.location.href = 'indexchalange.html';
}

let collection1 = document.querySelector(".collection1"),
collection2 = document.querySelector(".collection2");

collection1.addEventListener("click", () => {
    collection2.hidden = false;
    collection1.hidden = true;
})

collection2.addEventListener("click", () => {
    collection1.hidden = false;
    collection2.hidden = true;
})

let likedivimg1 = document.querySelector(".likedivimg1"),
heartlogo = document.querySelector(".heartlogo"),
likeword = document.querySelector(".likeword"),
liklecount = document.querySelector(".liklecount");

likedivimg1.addEventListener("click", () => {
    let count = 126;
    heartlogo.style.color = "red";
    count ++;
    liklecount.innerHTML = count;
    likeword.innerHTML = 'Liked';
})

likedivimg1.addEventListener("dblclick", () => {
    let count = 127;
    heartlogo.style.color = "rgb(100, 100, 100)";
    count --;
    liklecount.innerHTML = count;
    likeword.innerHTML = 'Like';
})

let clickimg1 = document.querySelector("#clickimg1"),
clickimg2 = document.querySelector("#clickimg2"),
img2div = document.querySelector(".img2div"),
contanerimgmain = document.querySelector(".contanerimgmain"),
img1div = document.querySelector(".img1div"),
back1but = document.querySelector(".back1but");

clickimg2.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img2div.hidden = false;
})

clickimg1.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img1div.hidden = false;
})

back1but.addEventListener("click", () => {
    contanerimgmain.hidden = false;
    img1div.hidden = true;
})

let claspdof1 = document.querySelector(".claspdof1");

claspdof1.addEventListener("click", () => {
    claspdof1.innerHTML = 'Following';
    claspdof1.style.color = 'green';
})

claspdof1.addEventListener("dblclick", () => {
    claspdof1.innerHTML = 'Follow';
    claspdof1.style.color = 'rgb(99, 99, 99';
})

const freetouse = () => {
    alert("You Can Use this containt to any where Freealy");
}

const backtomain = () => {
    contanerimgmain.hidden = false;
    img1div.hidden = true;
}

let collect11 = document.querySelector("#collect11"),
collect12 = document.querySelector("#collect12"),
follow1 = document.querySelector("#follow1"),
likecount1 = document.querySelector("#likecount1"),
heartlogocolor1 = document.querySelector("#heartlogocolor1"),
likeed1 = document.querySelector("#likeed1"),
likecountno1 = document.querySelector("#likecountno1");

collect11.addEventListener("click", () => {
    collect11.hidden = true;
    collect12.hidden = false;
})

collect12.addEventListener("click", () => {
    collect12.hidden = true;
    collect11.hidden = false;
})

collect11.addEventListener("dblclick", () => {
    collect11.hidden = false;
    collect12.hidden = true;
})

collect12.addEventListener("dblclick", () => {
    collect12.hidden = false;
    collect11.hidden = true;
})

follow1.addEventListener("click", () => {
    follow1.innerHTML = 'Following';
    follow1.style.color = 'green';
})

follow1.addEventListener("dblclick", () => {
    follow1.innerHTML = 'Follow';
    follow1.style.color = 'rgb(99, 99, 99)';
})

likecount1.addEventListener("click", () => {
    let count = 232;
    heartlogocolor1.style.color = "red";
    count ++;
    likecountno1.innerHTML = count;
    likeed1.innerHTML = 'Liked';
})

likecount1.addEventListener("dblclick", () => {
    let count = 233;
    heartlogocolor1.style.color = "rgb(100, 100, 100)";
    count --;
    likecountno1.innerHTML = count;
    likeed1.innerHTML = 'Like';
})

let clickimg3 = document.querySelector("#clickimg3"),
img3div = document.querySelector(".img3div");

clickimg3.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img3div.hidden = false;
})