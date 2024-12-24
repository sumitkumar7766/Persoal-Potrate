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

let clickimg4 = document.querySelector("#clickimg4"),
img4div = document.querySelector(".img4div");

clickimg4.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img4div.hidden = false;
})

let clickimg5 = document.querySelector("#clickimg5"),
img5div = document.querySelector(".img5div");

clickimg5.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img5div.hidden = false;
})

let collect131 = document.querySelector("#collect131"),
collect132 = document.querySelector("#collect132"),
likecount3 = document.querySelector("#likecount3"),
heartlogocolor3 = document.querySelector("#heartlogocolor3"),
likeed3 = document.querySelector("#likeed3"),
likecountno3 = document.querySelector("#likecountno3"),
follow2 = document.querySelector("#follow2");

collect131.addEventListener("click", () => {
    collect131.hidden = true;
    collect132.hidden = false;
})

likecount3.addEventListener("click", () => {
    likeno = 311;
    likecountno3.innerHTML = likeno + 1;
    likeed3.innerHTML = 'Liked';
    heartlogocolor3.style.color = 'red';
})

follow2.addEventListener("click", () => {
    follow2.innerHTML = 'Following';
    follow2.style.color = 'green';
})

collect132.addEventListener("dblclick", () => {
    collect131.hidden = false;
    collect132.hidden = true;
})

likecount3.addEventListener("dblclick", () => {
    likeno = 312;
    likecountno3.innerHTML = likeno - 1;
    likeed3.innerHTML = 'Like';
    heartlogocolor3.style.color = 'rgb(100, 100, 100)';
})

follow2.addEventListener("dblclick", () => {
    follow2.innerHTML = 'Follow';
    follow2.style.color = 'rgb(99, 99, 99)';
})

let collect141 = document.querySelector("#collect141"),
collect142 = document.querySelector("#collect142"),
likecount4 = document.querySelector("#likecount4"),
heartlogocolor4 = document.querySelector("#heartlogocolor4"),
likeed4 = document.querySelector("#likeed4"),
likecountno4 = document.querySelector("#likecountno4"),
follow3 = document.querySelector("#follow3");

collect141.addEventListener("click", () => {
    collect141.hidden = true;
    collect142.hidden = false;
})

likecount4.addEventListener("click", () => {
    likeno = 311;
    likecountno4.innerHTML = likeno + 1;
    likeed4.innerHTML = 'Liked';
    heartlogocolor4.style.color = 'red';
})

follow3.addEventListener("click", () => {
    follow3.innerHTML = 'Following';
    follow3.style.color = 'green';
})

collect142.addEventListener("dblclick", () => {
    collect141.hidden = false;
    collect142.hidden = true;
})

likecount4.addEventListener("dblclick", () => {
    likeno = 312;
    likecountno4.innerHTML = likeno - 1;
    likeed4.innerHTML = 'Like';
    heartlogocolor4.style.color = 'rgb(100, 100, 100)';
})

follow3.addEventListener("dblclick", () => {
    follow3.innerHTML = 'Follow';
    follow3.style.color = 'rgb(99, 99, 99)';
})

let collect151 = document.querySelector("#collect151"),
collect152 = document.querySelector("#collect152"),
likecount5 = document.querySelector("#likecount5"),
heartlogocolor5 = document.querySelector("#heartlogocolor5"),
likeed5 = document.querySelector("#likeed5"),
likecountno5 = document.querySelector("#likecountno5"),
follow4 = document.querySelector("#follow4");

collect151.addEventListener("click", () => {
    collect151.hidden = true;
    collect152.hidden = false;
})

likecount5.addEventListener("click", () => {
    likeno = 500;
    likecountno5.innerHTML = likeno + 1;
    likeed5.innerHTML = 'Liked';
    heartlogocolor5.style.color = 'red';
})

follow4.addEventListener("click", () => {
    follow4.innerHTML = 'Following';
    follow4.style.color = 'green';
})

collect152.addEventListener("dblclick", () => {
    collect151.hidden = false;
    collect152.hidden = true;
})

likecount5.addEventListener("dblclick", () => {
    likeno = 501;
    likecountno5.innerHTML = likeno - 1;
    likeed5.innerHTML = 'Like';
    heartlogocolor5.style.color = 'rgb(100, 100, 100)';
})

follow4.addEventListener("dblclick", () => {
    follow4.innerHTML = 'Follow';
    follow4.style.color = 'rgb(99, 99, 99)';
})