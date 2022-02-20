$(document).ready(() => {
  // const btns = Array.from(menuBtn.children);
  const changeNav = () => {
    $('.links').toggle(1500);
    // $('#menu-btn').toggleClass('turn');
    menuBtn.classList.toggle('turn')
    // btns.forEach((item) => item.classList.toggle('turn'));
  };
  menuBtn.onclick = changeNav;
});
const menuBtn = document.querySelector('.menu-btn');

const handleIntersect = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    // entry.target.previousSibling.previousSibling.style.color = 'var(--light)';
    entry.target.style.width='28rem';
    entry.target.style.border = '3px solid red';
    console.log(entry.target.previousSibling.previousSibling);
    // entry.target.previousSibling.previousSibling.style.color = 'red';
  } else { entry.target.style.width = '0';
}
  })    
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(handleIntersect, options);
const movers = document.querySelectorAll('.move');
movers.forEach((move) => {
  observer.observe(move);
})