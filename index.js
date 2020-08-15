const link = document.querySelector(".myBDiv");
const link2 = document.querySelector(".myBDivi");
    link.onmouseover = function () {
        link.style.top = '4.8em';
};
link2.onmouseover = function () {
    link2.style.top = '7.8em';
};
link.onmouseout = function () {
    link.style.top = '5em';
};
link2.onmouseout = function () {
    link2.style.top = '8em';
};


