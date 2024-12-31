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
    window.location.replace('index.html');
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
    window.location.replace('index.html');
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
    likeno = 644;
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
    likeno = 645;
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
    likeno = 546;
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
    likeno = 547;
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

collect1101.addEventListener("click", () => {
    collect1101.hidden = true;
    collect1102.hidden = false;
})

likecount10.addEventListener("click", () => {
    likeno = 141;
    likecountno10.innerHTML = likeno + 1;
    likeed10.innerHTML = 'Liked';
    heartlogocolor10.style.color = 'red';
})

follow10.addEventListener("click", () => {
    follow10.innerHTML = 'Following';
    follow10.style.color = 'green';
})

collect1102.addEventListener("dblclick", () => {
    collect1101.hidden = false;
    collect1102.hidden = true;
})

likecount10.addEventListener("dblclick", () => {
    likeno = 142;
    likecountno10.innerHTML = likeno - 1;
    likeed10.innerHTML = 'Like';
    heartlogocolor10.style.color = 'rgb(100, 100, 100)';
})

follow10.addEventListener("dblclick", () => {
    follow10.innerHTML = 'Follow';
    follow10.style.color = 'rgb(99, 99, 99)';
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
    likeno = 147;
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
    likeno = 148;
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
    likeno = 985;
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
    likeno = 986;
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
    likeno = 10;
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
    likeno = 11;
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
    likeno = 21;
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
    likeno = 22;
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
    likeno = 1010;
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
    likeno = 1011;
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
    likeno = 2121;
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
    likeno = 2122;
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
    likeno = 8522;
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
    likeno = 8523;
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
let collect1191 = document.querySelector("#collect1191"),
collect1192 = document.querySelector("#collect1192"),
likecount19 = document.querySelector("#likecount19"),
heartlogocolor19 = document.querySelector("#heartlogocolor19"),
likeed19 = document.querySelector("#likeed19"),
likecountno19 = document.querySelector("#likecountno19"),
follow19 = document.querySelector("#follow19");

collect1191.addEventListener("click", () => {
    collect1191.hidden = true;
    collect1192.hidden = false;
})

likecount19.addEventListener("click", () => {
    likeno = 212;
    likecountno19.innerHTML = likeno + 1;
    likeed19.innerHTML = 'Liked';
    heartlogocolor19.style.color = 'red';
})

follow19.addEventListener("click", () => {
    follow19.innerHTML = 'Following';
    follow19.style.color = 'green';
})

collect1192.addEventListener("dblclick", () => {
    collect1191.hidden = false;
    collect1192.hidden = true;
})

likecount19.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno19.innerHTML = likeno - 1;
    likeed19.innerHTML = 'Like';
    heartlogocolor19.style.color = 'rgb(100, 100, 100)';
})

follow19.addEventListener("dblclick", () => {
    follow19.innerHTML = 'Follow';
    follow19.style.color = 'rgb(99, 99, 99)';
})
let collect1201 = document.querySelector("#collect1201"),
collect1202 = document.querySelector("#collect1202"),
likecount20 = document.querySelector("#likecount20"),
heartlogocolor20 = document.querySelector("#heartlogocolor20"),
likeed20 = document.querySelector("#likeed20"),
likecountno20 = document.querySelector("#likecountno20"),
follow20 = document.querySelector("#follow20");

collect1201.addEventListener("click", () => {
    collect1201.hidden = true;
    collect1202.hidden = false;
})

likecount20.addEventListener("click", () => {
    likeno = 212;
    likecountno20.innerHTML = likeno + 1;
    likeed20.innerHTML = 'Liked';
    heartlogocolor20.style.color = 'red';
})

follow20.addEventListener("click", () => {
    follow20.innerHTML = 'Following';
    follow20.style.color = 'green';
})

collect1202.addEventListener("dblclick", () => {
    collect1201.hidden = false;
    collect1202.hidden = true;
})

likecount20.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno20.innerHTML = likeno - 1;
    likeed20.innerHTML = 'Like';
    heartlogocolor20.style.color = 'rgb(100, 100, 100)';
})

follow20.addEventListener("dblclick", () => {
    follow20.innerHTML = 'Follow';
    follow20.style.color = 'rgb(99, 99, 99)';
})
let collect1211 = document.querySelector("#collect1211"),
collect1212 = document.querySelector("#collect1212"),
likecount21 = document.querySelector("#likecount21"),
heartlogocolor21 = document.querySelector("#heartlogocolor21"),
likeed21 = document.querySelector("#likeed21"),
likecountno21 = document.querySelector("#likecountno21"),
follow21 = document.querySelector("#follow21");

collect1211.addEventListener("click", () => {
    collect1211.hidden = true;
    collect1212.hidden = false;
})

likecount21.addEventListener("click", () => {
    likeno = 212;
    likecountno21.innerHTML = likeno + 1;
    likeed21.innerHTML = 'Liked';
    heartlogocolor21.style.color = 'red';
})

follow21.addEventListener("click", () => {
    follow21.innerHTML = 'Following';
    follow21.style.color = 'green';
})

collect1212.addEventListener("dblclick", () => {
    collect1211.hidden = false;
    collect1212.hidden = true;
})

likecount21.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno21.innerHTML = likeno - 1;
    likeed21.innerHTML = 'Like';
    heartlogocolor21.style.color = 'rgb(100, 100, 100)';
})

follow21.addEventListener("dblclick", () => {
    follow21.innerHTML = 'Follow';
    follow21.style.color = 'rgb(99, 99, 99)';
})
let collect1221 = document.querySelector("#collect1221"),
collect1222 = document.querySelector("#collect1222"),
likecount22 = document.querySelector("#likecount22"),
heartlogocolor22 = document.querySelector("#heartlogocolor22"),
likeed22 = document.querySelector("#likeed22"),
likecountno22 = document.querySelector("#likecountno22"),
follow22 = document.querySelector("#follow22");

collect1221.addEventListener("click", () => {
    collect1221.hidden = true;
    collect1222.hidden = false;
})

likecount22.addEventListener("click", () => {
    likeno = 212;
    likecountno22.innerHTML = likeno + 1;
    likeed22.innerHTML = 'Liked';
    heartlogocolor22.style.color = 'red';
})

follow22.addEventListener("click", () => {
    follow22.innerHTML = 'Following';
    follow22.style.color = 'green';
})

collect1222.addEventListener("dblclick", () => {
    collect1221.hidden = false;
    collect1222.hidden = true;
})

likecount22.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno22.innerHTML = likeno - 1;
    likeed22.innerHTML = 'Like';
    heartlogocolor22.style.color = 'rgb(100, 100, 100)';
})

follow22.addEventListener("dblclick", () => {
    follow22.innerHTML = 'Follow';
    follow22.style.color = 'rgb(99, 99, 99)';
})
let collect1231 = document.querySelector("#collect1231"),
collect1232 = document.querySelector("#collect1232"),
likecount23 = document.querySelector("#likecount23"),
heartlogocolor23 = document.querySelector("#heartlogocolor23"),
likeed23 = document.querySelector("#likeed23"),
likecountno23 = document.querySelector("#likecountno23"),
follow23 = document.querySelector("#follow23");

collect1231.addEventListener("click", () => {
    collect1231.hidden = true;
    collect1232.hidden = false;
})

likecount23.addEventListener("click", () => {
    likeno = 212;
    likecountno23.innerHTML = likeno + 1;
    likeed23.innerHTML = 'Liked';
    heartlogocolor23.style.color = 'red';
})

follow23.addEventListener("click", () => {
    follow23.innerHTML = 'Following';
    follow23.style.color = 'green';
})

collect1232.addEventListener("dblclick", () => {
    collect1231.hidden = false;
    collect1232.hidden = true;
})

likecount23.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno23.innerHTML = likeno - 1;
    likeed23.innerHTML = 'Like';
    heartlogocolor23.style.color = 'rgb(100, 100, 100)';
})

follow23.addEventListener("dblclick", () => {
    follow23.innerHTML = 'Follow';
    follow23.style.color = 'rgb(99, 99, 99)';
})
let collect1241 = document.querySelector("#collect1241"),
collect1242 = document.querySelector("#collect1242"),
likecount24 = document.querySelector("#likecount24"),
heartlogocolor24 = document.querySelector("#heartlogocolor24"),
likeed24 = document.querySelector("#likeed24"),
likecountno24 = document.querySelector("#likecountno24"),
follow24 = document.querySelector("#follow24");

collect1241.addEventListener("click", () => {
    collect1241.hidden = true;
    collect1242.hidden = false;
})

likecount24.addEventListener("click", () => {
    likeno = 212;
    likecountno24.innerHTML = likeno + 1;
    likeed24.innerHTML = 'Liked';
    heartlogocolor24.style.color = 'red';
})

follow24.addEventListener("click", () => {
    follow24.innerHTML = 'Following';
    follow24.style.color = 'green';
})

collect1242.addEventListener("dblclick", () => {
    collect1241.hidden = false;
    collect1242.hidden = true;
})

likecount24.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno24.innerHTML = likeno - 1;
    likeed24.innerHTML = 'Like';
    heartlogocolor24.style.color = 'rgb(100, 100, 100)';
})

follow24.addEventListener("dblclick", () => {
    follow24.innerHTML = 'Follow';
    follow24.style.color = 'rgb(99, 99, 99)';
})
let collect1251 = document.querySelector("#collect1251"),
collect1252 = document.querySelector("#collect1252"),
likecount25 = document.querySelector("#likecount25"),
heartlogocolor25 = document.querySelector("#heartlogocolor25"),
likeed25 = document.querySelector("#likeed25"),
likecountno25 = document.querySelector("#likecountno25"),
follow25 = document.querySelector("#follow25");

collect1251.addEventListener("click", () => {
    collect1251.hidden = true;
    collect1252.hidden = false;
})

likecount25.addEventListener("click", () => {
    likeno = 212;
    likecountno25.innerHTML = likeno + 1;
    likeed25.innerHTML = 'Liked';
    heartlogocolor25.style.color = 'red';
})

follow25.addEventListener("click", () => {
    follow25.innerHTML = 'Following';
    follow25.style.color = 'green';
})

collect1252.addEventListener("dblclick", () => {
    collect1251.hidden = false;
    collect1252.hidden = true;
})

likecount25.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno25.innerHTML = likeno - 1;
    likeed25.innerHTML = 'Like';
    heartlogocolor25.style.color = 'rgb(100, 100, 100)';
})

follow25.addEventListener("dblclick", () => {
    follow25.innerHTML = 'Follow';
    follow25.style.color = 'rgb(99, 99, 99)';
})
let collect1261 = document.querySelector("#collect1261"),
collect1262 = document.querySelector("#collect1262"),
likecount26 = document.querySelector("#likecount26"),
heartlogocolor26 = document.querySelector("#heartlogocolor26"),
likeed26 = document.querySelector("#likeed26"),
likecountno26 = document.querySelector("#likecountno26"),
follow26 = document.querySelector("#follow26");

collect1261.addEventListener("click", () => {
    collect1261.hidden = true;
    collect1262.hidden = false;
})

likecount26.addEventListener("click", () => {
    likeno = 212;
    likecountno26.innerHTML = likeno + 1;
    likeed26.innerHTML = 'Liked';
    heartlogocolor26.style.color = 'red';
})

follow26.addEventListener("click", () => {
    follow26.innerHTML = 'Following';
    follow26.style.color = 'green';
})

collect1262.addEventListener("dblclick", () => {
    collect1261.hidden = false;
    collect1262.hidden = true;
})

likecount26.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno26.innerHTML = likeno - 1;
    likeed26.innerHTML = 'Like';
    heartlogocolor26.style.color = 'rgb(100, 100, 100)';
})

follow26.addEventListener("dblclick", () => {
    follow26.innerHTML = 'Follow';
    follow26.style.color = 'rgb(99, 99, 99)';
})
let collect1271 = document.querySelector("#collect1271"),
collect1272 = document.querySelector("#collect1272"),
likecount27 = document.querySelector("#likecount27"),
heartlogocolor27 = document.querySelector("#heartlogocolor27"),
likeed27 = document.querySelector("#likeed27"),
likecountno27 = document.querySelector("#likecountno27"),
follow27 = document.querySelector("#follow27");

collect1271.addEventListener("click", () => {
    collect1271.hidden = true;
    collect1272.hidden = false;
})

likecount27.addEventListener("click", () => {
    likeno = 212;
    likecountno27.innerHTML = likeno + 1;
    likeed27.innerHTML = 'Liked';
    heartlogocolor27.style.color = 'red';
})

follow27.addEventListener("click", () => {
    follow27.innerHTML = 'Following';
    follow27.style.color = 'green';
})

collect1272.addEventListener("dblclick", () => {
    collect1271.hidden = false;
    collect1272.hidden = true;
})

likecount27.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno27.innerHTML = likeno - 1;
    likeed27.innerHTML = 'Like';
    heartlogocolor27.style.color = 'rgb(100, 100, 100)';
})

follow27.addEventListener("dblclick", () => {
    follow27.innerHTML = 'Follow';
    follow27.style.color = 'rgb(99, 99, 99)';
})
let collect1281 = document.querySelector("#collect1281"),
collect1282 = document.querySelector("#collect1282"),
likecount28 = document.querySelector("#likecount28"),
heartlogocolor28 = document.querySelector("#heartlogocolor28"),
likeed28 = document.querySelector("#likeed28"),
likecountno28 = document.querySelector("#likecountno28"),
follow28 = document.querySelector("#follow28");

collect1281.addEventListener("click", () => {
    collect1281.hidden = true;
    collect1282.hidden = false;
})

likecount28.addEventListener("click", () => {
    likeno = 212;
    likecountno28.innerHTML = likeno + 1;
    likeed28.innerHTML = 'Liked';
    heartlogocolor28.style.color = 'red';
})

follow28.addEventListener("click", () => {
    follow28.innerHTML = 'Following';
    follow28.style.color = 'green';
})

collect1282.addEventListener("dblclick", () => {
    collect1281.hidden = false;
    collect1282.hidden = true;
})

likecount28.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno28.innerHTML = likeno - 1;
    likeed28.innerHTML = 'Like';
    heartlogocolor28.style.color = 'rgb(100, 100, 100)';
})

follow28.addEventListener("dblclick", () => {
    follow28.innerHTML = 'Follow';
    follow28.style.color = 'rgb(99, 99, 99)';
})
let collect1291 = document.querySelector("#collect1291"),
collect1292 = document.querySelector("#collect1292"),
likecount29 = document.querySelector("#likecount29"),
heartlogocolor29 = document.querySelector("#heartlogocolor29"),
likeed29 = document.querySelector("#likeed29"),
likecountno29 = document.querySelector("#likecountno29"),
follow29 = document.querySelector("#follow29");

collect1291.addEventListener("click", () => {
    collect1291.hidden = true;
    collect1292.hidden = false;
})

likecount29.addEventListener("click", () => {
    likeno = 212;
    likecountno29.innerHTML = likeno + 1;
    likeed29.innerHTML = 'Liked';
    heartlogocolor29.style.color = 'red';
})

follow29.addEventListener("click", () => {
    follow29.innerHTML = 'Following';
    follow29.style.color = 'green';
})

collect1292.addEventListener("dblclick", () => {
    collect1291.hidden = false;
    collect1292.hidden = true;
})

likecount29.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno29.innerHTML = likeno - 1;
    likeed29.innerHTML = 'Like';
    heartlogocolor29.style.color = 'rgb(100, 100, 100)';
})

follow29.addEventListener("dblclick", () => {
    follow29.innerHTML = 'Follow';
    follow29.style.color = 'rgb(99, 99, 99)';
})
let collect1301 = document.querySelector("#collect1301"),
collect1302 = document.querySelector("#collect1302"),
likecount30 = document.querySelector("#likecount30"),
heartlogocolor30 = document.querySelector("#heartlogocolor30"),
likeed30 = document.querySelector("#likeed30"),
likecountno30 = document.querySelector("#likecountno30"),
follow30 = document.querySelector("#follow30");

collect1301.addEventListener("click", () => {
    collect1301.hidden = true;
    collect1302.hidden = false;
})

likecount30.addEventListener("click", () => {
    likeno = 212;
    likecountno30.innerHTML = likeno + 1;
    likeed30.innerHTML = 'Liked';
    heartlogocolor30.style.color = 'red';
})

follow30.addEventListener("click", () => {
    follow30.innerHTML = 'Following';
    follow30.style.color = 'green';
})

collect1302.addEventListener("dblclick", () => {
    collect1301.hidden = false;
    collect1302.hidden = true;
})

likecount30.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno30.innerHTML = likeno - 1;
    likeed30.innerHTML = 'Like';
    heartlogocolor30.style.color = 'rgb(100, 100, 100)';
})

follow30.addEventListener("dblclick", () => {
    follow30.innerHTML = 'Follow';
    follow30.style.color = 'rgb(99, 99, 99)';
})
let collect1311 = document.querySelector("#collect1311"),
collect1312 = document.querySelector("#collect1312"),
likecount31 = document.querySelector("#likecount31"),
heartlogocolor31 = document.querySelector("#heartlogocolor31"),
likeed31 = document.querySelector("#likeed31"),
likecountno31 = document.querySelector("#likecountno31"),
follow31 = document.querySelector("#follow31");

collect1311.addEventListener("click", () => {
    collect1311.hidden = true;
    collect1312.hidden = false;
})

likecount31.addEventListener("click", () => {
    likeno = 212;
    likecountno31.innerHTML = likeno + 1;
    likeed31.innerHTML = 'Liked';
    heartlogocolor31.style.color = 'red';
})

follow31.addEventListener("click", () => {
    follow31.innerHTML = 'Following';
    follow31.style.color = 'green';
})

collect1312.addEventListener("dblclick", () => {
    collect1311.hidden = false;
    collect1312.hidden = true;
})

likecount31.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno31.innerHTML = likeno - 1;
    likeed31.innerHTML = 'Like';
    heartlogocolor31.style.color = 'rgb(100, 100, 100)';
})

follow31.addEventListener("dblclick", () => {
    follow31.innerHTML = 'Follow';
    follow31.style.color = 'rgb(99, 99, 99)';
})
let collect1321 = document.querySelector("#collect1321"),
collect1322 = document.querySelector("#collect1322"),
likecount32 = document.querySelector("#likecount32"),
heartlogocolor32 = document.querySelector("#heartlogocolor32"),
likeed32 = document.querySelector("#likeed32"),
likecountno32 = document.querySelector("#likecountno32"),
follow32 = document.querySelector("#follow32");

collect1321.addEventListener("click", () => {
    collect1321.hidden = true;
    collect1322.hidden = false;
})

likecount32.addEventListener("click", () => {
    likeno = 212;
    likecountno32.innerHTML = likeno + 1;
    likeed32.innerHTML = 'Liked';
    heartlogocolor32.style.color = 'red';
})

follow32.addEventListener("click", () => {
    follow32.innerHTML = 'Following';
    follow32.style.color = 'green';
})

collect1322.addEventListener("dblclick", () => {
    collect1321.hidden = false;
    collect1322.hidden = true;
})

likecount32.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno32.innerHTML = likeno - 1;
    likeed32.innerHTML = 'Like';
    heartlogocolor32.style.color = 'rgb(100, 100, 100)';
})

follow32.addEventListener("dblclick", () => {
    follow32.innerHTML = 'Follow';
    follow32.style.color = 'rgb(99, 99, 99)';
})
let collect1331 = document.querySelector("#collect1331"),
collect1332 = document.querySelector("#collect1332"),
likecount33 = document.querySelector("#likecount33"),
heartlogocolor33 = document.querySelector("#heartlogocolor33"),
likeed33 = document.querySelector("#likeed33"),
likecountno33 = document.querySelector("#likecountno33"),
follow33 = document.querySelector("#follow33");

collect1331.addEventListener("click", () => {
    collect1331.hidden = true;
    collect1332.hidden = false;
})

likecount33.addEventListener("click", () => {
    likeno = 212;
    likecountno33.innerHTML = likeno + 1;
    likeed33.innerHTML = 'Liked';
    heartlogocolor33.style.color = 'red';
})

follow33.addEventListener("click", () => {
    follow33.innerHTML = 'Following';
    follow33.style.color = 'green';
})

collect1332.addEventListener("dblclick", () => {
    collect1331.hidden = false;
    collect1332.hidden = true;
})

likecount33.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno33.innerHTML = likeno - 1;
    likeed33.innerHTML = 'Like';
    heartlogocolor33.style.color = 'rgb(100, 100, 100)';
})

follow33.addEventListener("dblclick", () => {
    follow33.innerHTML = 'Follow';
    follow33.style.color = 'rgb(99, 99, 99)';
})
let collect1341 = document.querySelector("#collect1341"),
collect1342 = document.querySelector("#collect1342"),
likecount34 = document.querySelector("#likecount34"),
heartlogocolor34 = document.querySelector("#heartlogocolor34"),
likeed34 = document.querySelector("#likeed34"),
likecountno34 = document.querySelector("#likecountno34"),
follow34 = document.querySelector("#follow34");

collect1341.addEventListener("click", () => {
    collect1341.hidden = true;
    collect1342.hidden = false;
})

likecount34.addEventListener("click", () => {
    likeno = 212;
    likecountno34.innerHTML = likeno + 1;
    likeed34.innerHTML = 'Liked';
    heartlogocolor34.style.color = 'red';
})

follow34.addEventListener("click", () => {
    follow34.innerHTML = 'Following';
    follow34.style.color = 'green';
})

collect1342.addEventListener("dblclick", () => {
    collect1341.hidden = false;
    collect1342.hidden = true;
})

likecount34.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno34.innerHTML = likeno - 1;
    likeed34.innerHTML = 'Like';
    heartlogocolor34.style.color = 'rgb(100, 100, 100)';
})

follow34.addEventListener("dblclick", () => {
    follow34.innerHTML = 'Follow';
    follow34.style.color = 'rgb(99, 99, 99)';
})
let collect1351 = document.querySelector("#collect1351"),
collect1352 = document.querySelector("#collect1352"),
likecount35 = document.querySelector("#likecount35"),
heartlogocolor35 = document.querySelector("#heartlogocolor35"),
likeed35 = document.querySelector("#likeed35"),
likecountno35 = document.querySelector("#likecountno35"),
follow35 = document.querySelector("#follow35");

collect1351.addEventListener("click", () => {
    collect1351.hidden = true;
    collect1352.hidden = false;
})

likecount35.addEventListener("click", () => {
    likeno = 212;
    likecountno35.innerHTML = likeno + 1;
    likeed35.innerHTML = 'Liked';
    heartlogocolor35.style.color = 'red';
})

follow35.addEventListener("click", () => {
    follow35.innerHTML = 'Following';
    follow35.style.color = 'green';
})

collect1352.addEventListener("dblclick", () => {
    collect1351.hidden = false;
    collect1352.hidden = true;
})

likecount35.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno35.innerHTML = likeno - 1;
    likeed35.innerHTML = 'Like';
    heartlogocolor35.style.color = 'rgb(100, 100, 100)';
})

follow35.addEventListener("dblclick", () => {
    follow35.innerHTML = 'Follow';
    follow35.style.color = 'rgb(99, 99, 99)';
})
let collect1361 = document.querySelector("#collect1361"),
collect1362 = document.querySelector("#collect1362"),
likecount36 = document.querySelector("#likecount36"),
heartlogocolor36 = document.querySelector("#heartlogocolor36"),
likeed36 = document.querySelector("#likeed36"),
likecountno36 = document.querySelector("#likecountno36"),
follow36 = document.querySelector("#follow36");

collect1361.addEventListener("click", () => {
    collect1361.hidden = true;
    collect1362.hidden = false;
})

likecount36.addEventListener("click", () => {
    likeno = 212;
    likecountno36.innerHTML = likeno + 1;
    likeed36.innerHTML = 'Liked';
    heartlogocolor36.style.color = 'red';
})

follow36.addEventListener("click", () => {
    follow36.innerHTML = 'Following';
    follow36.style.color = 'green';
})

collect1362.addEventListener("dblclick", () => {
    collect1361.hidden = false;
    collect1362.hidden = true;
})

likecount36.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno36.innerHTML = likeno - 1;
    likeed36.innerHTML = 'Like';
    heartlogocolor36.style.color = 'rgb(100, 100, 100)';
})

follow36.addEventListener("dblclick", () => {
    follow36.innerHTML = 'Follow';
    follow36.style.color = 'rgb(99, 99, 99)';
})
let collect1371 = document.querySelector("#collect1371"),
collect1372 = document.querySelector("#collect1372"),
likecount37 = document.querySelector("#likecount37"),
heartlogocolor37 = document.querySelector("#heartlogocolor37"),
likeed37 = document.querySelector("#likeed37"),
likecountno37 = document.querySelector("#likecountno37"),
follow37 = document.querySelector("#follow37");

collect1371.addEventListener("click", () => {
    collect1371.hidden = true;
    collect1372.hidden = false;
})

likecount37.addEventListener("click", () => {
    likeno = 212;
    likecountno37.innerHTML = likeno + 1;
    likeed37.innerHTML = 'Liked';
    heartlogocolor37.style.color = 'red';
})

follow37.addEventListener("click", () => {
    follow37.innerHTML = 'Following';
    follow37.style.color = 'green';
})

collect1372.addEventListener("dblclick", () => {
    collect1371.hidden = false;
    collect1372.hidden = true;
})

likecount37.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno37.innerHTML = likeno - 1;
    likeed37.innerHTML = 'Like';
    heartlogocolor37.style.color = 'rgb(100, 100, 100)';
})

follow37.addEventListener("dblclick", () => {
    follow37.innerHTML = 'Follow';
    follow37.style.color = 'rgb(99, 99, 99)';
})
let collect1381 = document.querySelector("#collect1381"),
collect1382 = document.querySelector("#collect1382"),
likecount38 = document.querySelector("#likecount38"),
heartlogocolor38 = document.querySelector("#heartlogocolor38"),
likeed38 = document.querySelector("#likeed38"),
likecountno38 = document.querySelector("#likecountno38"),
follow38 = document.querySelector("#follow38");

collect1381.addEventListener("click", () => {
    collect1381.hidden = true;
    collect1382.hidden = false;
})

likecount38.addEventListener("click", () => {
    likeno = 212;
    likecountno38.innerHTML = likeno + 1;
    likeed38.innerHTML = 'Liked';
    heartlogocolor38.style.color = 'red';
})

follow38.addEventListener("click", () => {
    follow38.innerHTML = 'Following';
    follow38.style.color = 'green';
})

collect1382.addEventListener("dblclick", () => {
    collect1381.hidden = false;
    collect1382.hidden = true;
})

likecount38.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno38.innerHTML = likeno - 1;
    likeed38.innerHTML = 'Like';
    heartlogocolor38.style.color = 'rgb(100, 100, 100)';
})

follow38.addEventListener("dblclick", () => {
    follow38.innerHTML = 'Follow';
    follow38.style.color = 'rgb(99, 99, 99)';
})
let collect1391 = document.querySelector("#collect1391"),
collect1392 = document.querySelector("#collect1392"),
likecount39 = document.querySelector("#likecount39"),
heartlogocolor39 = document.querySelector("#heartlogocolor39"),
likeed39 = document.querySelector("#likeed39"),
likecountno39 = document.querySelector("#likecountno39"),
follow39 = document.querySelector("#follow39");

collect1391.addEventListener("click", () => {
    collect1391.hidden = true;
    collect1392.hidden = false;
})

likecount39.addEventListener("click", () => {
    likeno = 212;
    likecountno39.innerHTML = likeno + 1;
    likeed39.innerHTML = 'Liked';
    heartlogocolor39.style.color = 'red';
})

follow39.addEventListener("click", () => {
    follow39.innerHTML = 'Following';
    follow39.style.color = 'green';
})

collect1392.addEventListener("dblclick", () => {
    collect1391.hidden = false;
    collect1392.hidden = true;
})

likecount39.addEventListener("dblclick", () => {
    likeno = 213;
    likecountno39.innerHTML = likeno - 1;
    likeed39.innerHTML = 'Like';
    heartlogocolor39.style.color = 'rgb(100, 100, 100)';
})

follow39.addEventListener("dblclick", () => {
    follow39.innerHTML = 'Follow';
    follow39.style.color = 'rgb(99, 99, 99)';
})