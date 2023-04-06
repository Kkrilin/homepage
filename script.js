const navlinks = document.querySelectorAll(".nav-links");
const navLinks_2 = document.querySelector(".nav-links-2");
// const closeMenu = document.querySelector(".absolute");
const openMenu = document.querySelector(".menu-hidden");
const nav = document.querySelector(".nav");

navLinks_2.addEventListener("click", function () {
  navLinks_2.classList.remove("absolute");
  navLinks_2.classList.add("nav-2-hidden");
  document.querySelector("body").style.backgroundColor = "white";
});

openMenu.addEventListener("click", function () {
  navLinks_2.classList.add("absolute");
  navLinks_2.classList.remove("nav-2-hidden");
  document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.5)";
});

const hoverEffect = function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    const navitem = document.querySelectorAll(".nav-item");
    navitem.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

navlinks.forEach((links) =>
  links.addEventListener("mouseover", hoverEffect.bind(0.4))
);
navlinks.forEach((links) =>
  links.addEventListener("mouseout", hoverEffect.bind(1))
);

// sticky nav
/*
const homepage = document.querySelector("#homepage");

const navheight = nav.getBoundingClientRect().height;
// console.log(navheight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const homepageobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.9,
  // rootMargin: `+${navheight}px`,
});

homepageobserver.observe(homepage);
*/
