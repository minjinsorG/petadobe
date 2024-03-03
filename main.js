const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let x = e.clientX;
    let y = e.clientY;

    let buttonTop = e.target.offsetTop;
    let buttonLeft = e.target.offsetLeft;

    let xInside = x - buttonLeft;
        let yInside = y - buttonTop;
        
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.top = yInside + 'px';
        ripple.style.left = xInside + 'px';

        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 300);
    })
})