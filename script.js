$(document).ready(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const btns = Array.from(menuBtn.children);
  const changeNav = () => {
    $('.links').toggle(1500);
    // $('#menu-btn').toggleClass('turn');
    menuBtn.classList.toggle('turn')
    // btns.forEach((item) => item.classList.toggle('turn'));
  };
  menuBtn.onclick = changeNav;
});
