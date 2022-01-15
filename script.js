function NavbarOnScroll() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}

function OnHamburgerToggle(item) {
    var sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('open');
}

window.addEventListener('scroll', NavbarOnScroll);

const hamburger = document.getElementsByClassName('hamburger');
for (item of hamburger) {
    item.addEventListener('click', OnHamburgerToggle);
}

const sideBarItems = document.getElementsByClassName('side-bar-item');
for (item of sideBarItems) {
    item.addEventListener('click', OnHamburgerToggle);
}
