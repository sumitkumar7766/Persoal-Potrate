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

let clickimg6 = document.querySelector("#clickimg6"),
img6div = document.querySelector(".img6div");

clickimg6.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img6div.hidden = false;
})

let clickimg7 = document.querySelector("#clickimg7"),
img7div = document.querySelector(".img7div");

clickimg7.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img7div.hidden = false;
})

let clickimg8 = document.querySelector("#clickimg8"),
img8div = document.querySelector(".img8div");

clickimg8.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img8div.hidden = false;
})

let clickimg9 = document.querySelector("#clickimg9"),
img9div = document.querySelector(".img9div");

clickimg9.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img9div.hidden = false;
})

let clickimg10 = document.querySelector("#clickimg10"),
img10div = document.querySelector(".img10div");

clickimg10.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img10div.hidden = false;
})

let clickimg11 = document.querySelector("#clickimg11"),
img11div = document.querySelector(".img11div");

clickimg11.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img11div.hidden = false;
})

let clickimg12 = document.querySelector("#clickimg12"),
img12div = document.querySelector(".img12div");

clickimg12.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img12div.hidden = false;
})

let clickimg13 = document.querySelector("#clickimg13"),
img13div = document.querySelector(".img13div");

clickimg13.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img13div.hidden = false;
})

let clickimg14 = document.querySelector("#clickimg14"),
img14div = document.querySelector(".img14div");

clickimg14.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img14div.hidden = false;
})

let clickimg15 = document.querySelector("#clickimg15"),
img15div = document.querySelector(".img15div");

clickimg15.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img15div.hidden = false;
})

let clickimg16 = document.querySelector("#clickimg16"),
img16div = document.querySelector(".img16div");

clickimg16.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img16div.hidden = false;
})

let clickimg17 = document.querySelector("#clickimg17"),
img17div = document.querySelector(".img17div");

clickimg17.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img17div.hidden = false;
})

let clickimg18 = document.querySelector("#clickimg18"),
img18div = document.querySelector(".img18div");

clickimg18.addEventListener("click", () => {
    contanerimgmain.hidden = true;
    img18div.hidden = false;
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

let collect161 = document.querySelector("#collect161"),
collect162 = document.querySelector("#collect162"),
likecount6 = document.querySelector("#likecount6"),
heartlogocolor6 = document.querySelector("#heartlogocolor6"),
likeed6 = document.querySelector("#likeed6"),
likecountno6 = document.querySelector("#likecountno6"),
follow6 = document.querySelector("#follow6");

collect161.addEventListener("click", () => {
    collect161.hidden = true;
    collect162.hidden = false;
})

likecount6.addEventListener("click", () => {
    likeno = 611;
    likecountno6.innerHTML = likeno + 1;
    likeed6.innerHTML = 'Liked';
    heartlogocolor6.style.color = 'red';
})

follow6.addEventListener("click", () => {
    follow6.innerHTML = 'Following';
    follow6.style.color = 'green';
})

collect162.addEventListener("dblclick", () => {
    collect161.hidden = false;
    collect162.hidden = true;
})

likecount6.addEventListener("dblclick", () => {
    likeno = 501;
    likecountno6.innerHTML = likeno - 1;
    likeed6.innerHTML = 'Like';
    heartlogocolor6.style.color = 'rgb(100, 100, 100)';
})

follow6.addEventListener("dblclick", () => {
    follow6.innerHTML = 'Follow';
    follow6.style.color = 'rgb(99, 99, 99)';
})

let collect181 = document.querySelector("#collect181"),
collect182 = document.querySelector("#collect182"),
likecount8 = document.querySelector("#likecount8"),
heartlogocolor8 = document.querySelector("#heartlogocolor8"),
likeed8 = document.querySelector("#likeed8"),
likecountno8 = document.querySelector("#likecountno8"),
follow8 = document.querySelector("#follow8");

collect181.addEventListener("click", () => {
    collect181.hidden = true;
    collect182.hidden = false;
})

likecount8.addEventListener("click", () => {
    likeno = 212;
    likecountno8.innerHTML = likeno + 1;
    likeed8.innerHTML = 'Liked';
    heartlogocolor8.style.color = 'red';
})

follow8.addEventListener("click", () => {
    follow8.innerHTML = 'Following';
    follow8.style.color = 'green';
})

collect182.addEventListener("dblclick", () => {
    collect181.hidden = false;
    collect182.hidden = true;
})

likecount8.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno8.innerHTML = likeno - 1;
    likeed8.innerHTML = 'Like';
    heartlogocolor8.style.color = 'rgb(100, 100, 100)';
})

follow8.addEventListener("dblclick", () => {
    follow8.innerHTML = 'Follow';
    follow8.style.color = 'rgb(99, 99, 99)';
})

let collect191 = document.querySelector("#collect191"),
collect192 = document.querySelector("#collect192"),
likecount9 = document.querySelector("#likecount9"),
heartlogocolor9 = document.querySelector("#heartlogocolor9"),
likeed9 = document.querySelector("#likeed9"),
likecountno9 = document.querySelector("#likecountno9"),
follow9 = document.querySelector("#follow9");

collect191.addEventListener("click", () => {
    collect191.hidden = true;
    collect192.hidden = false;
})

likecount9.addEventListener("click", () => {
    likeno = 212;
    likecountno9.innerHTML = likeno + 1;
    likeed9.innerHTML = 'Liked';
    heartlogocolor9.style.color = 'red';
})

follow9.addEventListener("click", () => {
    follow9.innerHTML = 'Following';
    follow9.style.color = 'green';
})

collect192.addEventListener("dblclick", () => {
    collect191.hidden = false;
    collect192.hidden = true;
})

likecount9.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno9.innerHTML = likeno - 1;
    likeed9.innerHTML = 'Like';
    heartlogocolor9.style.color = 'rgb(100, 100, 100)';
})

follow9.addEventListener("dblclick", () => {
    follow9.innerHTML = 'Follow';
    follow9.style.color = 'rgb(99, 99, 99)';
})
let collect1101 = document.querySelector("#collect1101"),
collect1102 = document.querySelector("#collect1102"),
likecount10 = document.querySelector("#likecount10"),
heartlogocolor10 = document.querySelector("#heartlogocolor10"),
likeed10 = document.querySelector("#likeed10"),
likecountno10 = document.querySelector("#likecountno10"),
follow10 = document.querySelector("#follow10");

collect11111.addEventListener("click", () => {
    collect11111.hidden = true;
    collect11112.hidden = false;
})

likecount111.addEventListener("click", () => {
    likeno = 212;
    likecountno111.innerHTML = likeno + 1;
    likeed111.innerHTML = 'Liked';
    heartlogocolor111.style.color = 'red';
})

follow111.addEventListener("click", () => {
    follow111.innerHTML = 'Following';
    follow111.style.color = 'green';
})

collect11112.addEventListener("dblclick", () => {
    collect11111.hidden = false;
    collect11112.hidden = true;
})

likecount111.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno111.innerHTML = likeno - 1;
    likeed111.innerHTML = 'Like';
    heartlogocolor111.style.color = 'rgb(100, 100, 100)';
})

follow111.addEventListener("dblclick", () => {
    follow111.innerHTML = 'Follow';
    follow111.style.color = 'rgb(99, 99, 99)';
})
let collect1111 = document.querySelector("#collect1111"),
collect1112 = document.querySelector("#collect1112"),
likecount11 = document.querySelector("#likecount11"),
heartlogocolor11 = document.querySelector("#heartlogocolor11"),
likeed11 = document.querySelector("#likeed11"),
likecountno11 = document.querySelector("#likecountno11"),
follow11 = document.querySelector("#follow11");

collect1111.addEventListener("click", () => {
    collect1111.hidden = true;
    collect1112.hidden = false;
})

likecount11.addEventListener("click", () => {
    likeno = 212;
    likecountno11.innerHTML = likeno + 1;
    likeed11.innerHTML = 'Liked';
    heartlogocolor11.style.color = 'red';
})

follow11.addEventListener("click", () => {
    follow11.innerHTML = 'Following';
    follow11.style.color = 'green';
})

collect1112.addEventListener("dblclick", () => {
    collect1111.hidden = false;
    collect1112.hidden = true;
})

likecount11.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno11.innerHTML = likeno - 1;
    likeed11.innerHTML = 'Like';
    heartlogocolor11.style.color = 'rgb(100, 100, 100)';
})

follow11.addEventListener("dblclick", () => {
    follow11.innerHTML = 'Follow';
    follow11.style.color = 'rgb(99, 99, 99)';
})
let collect1121 = document.querySelector("#collect1121"),
collect1122 = document.querySelector("#collect1122"),
likecount12 = document.querySelector("#likecount12"),
heartlogocolor12 = document.querySelector("#heartlogocolor12"),
likeed12 = document.querySelector("#likeed12"),
likecountno12 = document.querySelector("#likecountno12"),
follow12 = document.querySelector("#follow12");

collect1121.addEventListener("click", () => {
    collect1121.hidden = true;
    collect1122.hidden = false;
})

likecount12.addEventListener("click", () => {
    likeno = 212;
    likecountno12.innerHTML = likeno + 1;
    likeed12.innerHTML = 'Liked';
    heartlogocolor12.style.color = 'red';
})

follow12.addEventListener("click", () => {
    follow12.innerHTML = 'Following';
    follow12.style.color = 'green';
})

collect1122.addEventListener("dblclick", () => {
    collect1121.hidden = false;
    collect1122.hidden = true;
})

likecount12.addEventListener("dblclick", () => {
    likeno = 21313
    likecountno12.innerHTML = likeno - 1;
    likeed12.innerHTML = 'Like';
    heartlogocolor12.style.color = 'rgb(100, 100, 100)';
})

follow12.addEventListener("dblclick", () => {
    follow12.innerHTML = 'Follow';
    follow12.style.color = 'rgb(99, 99, 99)';
})
let collect1131 = document.querySelector("#collect1131"),
collect1132 = document.querySelector("#collect1132"),
likecount13 = document.querySelector("#likecount13"),
heartlogocolor13 = document.querySelector("#heartlogocolor13"),
likeed13 = document.querySelector("#likeed13"),
likecountno13 = document.querySelector("#likecountno13"),
follow13 = document.querySelector("#follow13");

collect1131.addEventListener("click", () => {
    collect1131.hidden = true;
    collect1132.hidden = false;
})

likecount13.addEventListener("click", () => {
    likeno = 212;
    likecountno13.innerHTML = likeno + 1;
    likeed13.innerHTML = 'Liked';
    heartlogocolor13.style.color = 'red';
})

follow13.addEventListener("click", () => {
    follow13.innerHTML = 'Following';
    follow13.style.color = 'green';
})

collect1132.addEventListener("dblclick", () => {
    collect1131.hidden = false;
    collect1132.hidden = true;
})

likecount13.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno13.innerHTML = likeno - 1;
    likeed13.innerHTML = 'Like';
    heartlogocolor13.style.color = 'rgb(100, 100, 100)';
})

follow13.addEventListener("dblclick", () => {
    follow13.innerHTML = 'Follow';
    follow13.style.color = 'rgb(99, 99, 99)';
})
let collect1141 = document.querySelector("#collect1141"),
collect1142 = document.querySelector("#collect1142"),
likecount14 = document.querySelector("#likecount14"),
heartlogocolor14 = document.querySelector("#heartlogocolor14"),
likeed14 = document.querySelector("#likeed14"),
likecountno14 = document.querySelector("#likecountno14"),
follow14 = document.querySelector("#follow14");

collect1141.addEventListener("click", () => {
    collect1141.hidden = true;
    collect1142.hidden = false;
})

likecount14.addEventListener("click", () => {
    likeno = 212;
    likecountno14.innerHTML = likeno + 1;
    likeed14.innerHTML = 'Liked';
    heartlogocolor14.style.color = 'red';
})

follow14.addEventListener("click", () => {
    follow14.innerHTML = 'Following';
    follow14.style.color = 'green';
})

collect1142.addEventListener("dblclick", () => {
    collect1141.hidden = false;
    collect1142.hidden = true;
})

likecount14.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno14.innerHTML = likeno - 1;
    likeed14.innerHTML = 'Like';
    heartlogocolor14.style.color = 'rgb(100, 100, 100)';
})

follow14.addEventListener("dblclick", () => {
    follow14.innerHTML = 'Follow';
    follow14.style.color = 'rgb(99, 99, 99)';
})
let collect1151 = document.querySelector("#collect1151"),
collect1152 = document.querySelector("#collect1152"),
likecount15 = document.querySelector("#likecount15"),
heartlogocolor15 = document.querySelector("#heartlogocolor15"),
likeed15 = document.querySelector("#likeed15"),
likecountno15 = document.querySelector("#likecountno15"),
follow15 = document.querySelector("#follow15");

collect1151.addEventListener("click", () => {
    collect1151.hidden = true;
    collect1152.hidden = false;
})

likecount15.addEventListener("click", () => {
    likeno = 212;
    likecountno15.innerHTML = likeno + 1;
    likeed15.innerHTML = 'Liked';
    heartlogocolor15.style.color = 'red';
})

follow15.addEventListener("click", () => {
    follow15.innerHTML = 'Following';
    follow15.style.color = 'green';
})

collect1152.addEventListener("dblclick", () => {
    collect1151.hidden = false;
    collect1152.hidden = true;
})

likecount15.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno15.innerHTML = likeno - 1;
    likeed15.innerHTML = 'Like';
    heartlogocolor15.style.color = 'rgb(100, 100, 100)';
})

follow15.addEventListener("dblclick", () => {
    follow15.innerHTML = 'Follow';
    follow15.style.color = 'rgb(99, 99, 99)';
})
let collect1161 = document.querySelector("#collect1161"),
collect1162 = document.querySelector("#collect1162"),
likecount16 = document.querySelector("#likecount16"),
heartlogocolor16 = document.querySelector("#heartlogocolor16"),
likeed16 = document.querySelector("#likeed16"),
likecountno16 = document.querySelector("#likecountno16"),
follow16 = document.querySelector("#follow16");

collect1161.addEventListener("click", () => {
    collect1161.hidden = true;
    collect1162.hidden = false;
})

likecount16.addEventListener("click", () => {
    likeno = 212;
    likecountno16.innerHTML = likeno + 1;
    likeed16.innerHTML = 'Liked';
    heartlogocolor16.style.color = 'red';
})

follow16.addEventListener("click", () => {
    follow16.innerHTML = 'Following';
    follow16.style.color = 'green';
})

collect1162.addEventListener("dblclick", () => {
    collect1161.hidden = false;
    collect1162.hidden = true;
})

likecount16.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno16.innerHTML = likeno - 1;
    likeed16.innerHTML = 'Like';
    heartlogocolor16.style.color = 'rgb(100, 100, 100)';
})

follow16.addEventListener("dblclick", () => {
    follow16.innerHTML = 'Follow';
    follow16.style.color = 'rgb(99, 99, 99)';
})
let collect1171 = document.querySelector("#collect1171"),
collect1172 = document.querySelector("#collect1172"),
likecount17 = document.querySelector("#likecount17"),
heartlogocolor17 = document.querySelector("#heartlogocolor17"),
likeed17 = document.querySelector("#likeed17"),
likecountno17 = document.querySelector("#likecountno17"),
follow17 = document.querySelector("#follow17");

collect1171.addEventListener("click", () => {
    collect1171.hidden = true;
    collect1172.hidden = false;
})

likecount17.addEventListener("click", () => {
    likeno = 212;
    likecountno17.innerHTML = likeno + 1;
    likeed17.innerHTML = 'Liked';
    heartlogocolor17.style.color = 'red';
})

follow17.addEventListener("click", () => {
    follow17.innerHTML = 'Following';
    follow17.style.color = 'green';
})

collect1172.addEventListener("dblclick", () => {
    collect1171.hidden = false;
    collect1172.hidden = true;
})

likecount17.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno17.innerHTML = likeno - 1;
    likeed17.innerHTML = 'Like';
    heartlogocolor17.style.color = 'rgb(100, 100, 100)';
})

follow17.addEventListener("dblclick", () => {
    follow17.innerHTML = 'Follow';
    follow17.style.color = 'rgb(99, 99, 99)';
})
let collect1181 = document.querySelector("#collect1181"),
collect1182 = document.querySelector("#collect1182"),
likecount18 = document.querySelector("#likecount18"),
heartlogocolor18 = document.querySelector("#heartlogocolor18"),
likeed18 = document.querySelector("#likeed18"),
likecountno18 = document.querySelector("#likecountno18"),
follow18 = document.querySelector("#follow18");

collect1181.addEventListener("click", () => {
    collect1181.hidden = true;
    collect1182.hidden = false;
})

likecount18.addEventListener("click", () => {
    likeno = 212;
    likecountno18.innerHTML = likeno + 1;
    likeed18.innerHTML = 'Liked';
    heartlogocolor18.style.color = 'red';
})

follow18.addEventListener("click", () => {
    follow18.innerHTML = 'Following';
    follow18.style.color = 'green';
})

collect1182.addEventListener("dblclick", () => {
    collect1181.hidden = false;
    collect1182.hidden = true;
})

likecount18.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno18.innerHTML = likeno - 1;
    likeed18.innerHTML = 'Like';
    heartlogocolor18.style.color = 'rgb(100, 100, 100)';
})

follow18.addEventListener("dblclick", () => {
    follow18.innerHTML = 'Follow';
    follow18.style.color = 'rgb(99, 99, 99)';
})
