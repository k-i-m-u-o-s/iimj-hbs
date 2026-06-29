/* =====================================================
MISSION TOPPER
===================================================== */

const slides = [
  {
    label: "",

    backgroundImage: "assets/images/home/hero-0.webp",

    supportingText: "Inspiring future generations.",

    keyword: false,
  },
  {
    label: "educate leaders",

    backgroundImage: "assets/images/home/hero-1.webp",

    supportingText:
      "Our innovative and engaging teaching methods leverage faculty and peer expertise to help shape tomorrow’s leaders.",

    keyword: true,
  },

  {
    label: "a difference",

    backgroundImage: "assets/images/home/hero-2.webp",

    supportingText:
      "IIM Jammu students and alumni are creating impact through entrepreneurship, innovation, and leadership across industries and communities.",

    keyword: true,
  },

  {
    label: "the world",

    backgroundImage: "assets/images/home/hero-3.webp",

    supportingText: "Build institutions that influence globally.",

    keyword: true,
  },

  /* extra image */

  // {
  //   label: "",

  //   backgroundImage: "assets/images/home/hero-4.webp",

  //   supportingText: "Inspiring future generations.",

  //   keyword: false,
  // },

  {
    label: "",

    backgroundImage: "assets/images/home/hero-5.webp",

    supportingText: "Inspiring future generations.",

    keyword: false,
  },

  {
    label: "",

    backgroundImage: "assets/images/home/hero-6.webp",

    supportingText: "Inspiring future generations.",

    keyword: false,
  },
];

let activeIndex = 0;

const bg = document.querySelector(".mission-bg");

const text = document.querySelector(".mission-text");

const buttons = document.querySelectorAll(".mission-keyword");

// function renderSlide(index) {
//   activeIndex = index;

//   bg.style.backgroundImage = `url(${slides[index].backgroundImage})`;

//   text.textContent = slides[index].supportingText;

//   buttons.forEach((btn) => btn.classList.remove("is-active"));

//   buttons[index].classList.add("is-active");
// }
const card = document.querySelector(".mission-card");

function renderSlide(index) {
  activeIndex = index;

  bg.style.backgroundImage = `url(${slides[index].backgroundImage})`;

  buttons.forEach((btn) => {
    btn.classList.remove("is-active");
  });

  /* only first 3 */

  if (slides[index].keyword) {
    buttons[index].classList.add("is-active");

    card.classList.remove("is-hidden");

    text.textContent = slides[index].supportingText;
  } else {
    card.classList.add("is-hidden");
  }
}
buttons.forEach((btn) => {
  btn.addEventListener(
    "click",

    () => {
      renderSlide(Number(btn.dataset.index));
    },
  );
});

document
  .querySelector(".mission-prev")

  .addEventListener(
    "click",

    () => {
      activeIndex--;

      if (activeIndex < 0) {
        activeIndex = slides.length - 1;
      }

      renderSlide(activeIndex);
    },
  );

document
  .querySelector(".mission-next")

  .addEventListener(
    "click",

    () => {
      activeIndex++;

      if (activeIndex >= slides.length) {
        activeIndex = 0;
      }

      renderSlide(activeIndex);
    },
  );

console.log("HOME JS RUNNING");

renderSlide(0);

/* =====================================================
SECTION 5 — SCROLL REACTIVE KEYWORDS
===================================================== */

/* =====================================================
SECTION 5 — SCROLL REACTIVE KEYWORDS
===================================================== */

const rows = document.querySelectorAll(".keyword-strip");

/* duplicate for infinite width */

rows.forEach((row) => {
  row.innerHTML += row.innerHTML;
});

/* section */

const keywordSection = document.querySelector(".keyword-scroll");

window.addEventListener("scroll", () => {
  /* start counting only after section arrives */

  const triggerPoint = window.innerHeight * 0.65;

  const scroll = Math.max(
    0,
    window.scrollY - keywordSection.offsetTop + triggerPoint,
  );

  rows.forEach((row, index) => {
    let speed = 0;

    let direction = 1;

    if (index === 0) {
      speed = 0.35;
      direction = -1;
    }

    if (index === 1) {
      speed = 0.25;
      direction = 1;
    }

    if (index === 2) {
      speed = 0.32;
      direction = -1;
    }

    const offset = scroll * speed * direction;

    row.style.transform = `translateX(${offset}px)`;
  });
});
