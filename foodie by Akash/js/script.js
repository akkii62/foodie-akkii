/*****************************/
/* set current year */
/*****************************/
const yearEl = document.querySelector(".year");
const currDate = new Date().getFullYear();
yearEl.textContent = currDate;

/*****************************/
/* mobile navigation */
/*****************************/
const btnNavEL = document.querySelector(".mob-nav-btn");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

/*****************************/
/* sticky navigation */
/*****************************/

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
