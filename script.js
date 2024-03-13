//On loading create span tag for loader text
const revalSpan = (classname) => {
  document.querySelectorAll(classname).forEach((el) => {
    let spanChild = document.createElement("span");
    let spanParent = document.createElement("span");
    spanChild.classList.add("child");
    spanParent.classList.add("parent");
    spanChild.textContent = el.textContent;
    spanParent.appendChild(spanChild);
    (el.innerHTML = ""), el.appendChild(spanParent);
  });
};

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(EasePack);

gsap.set("#hero", {
  opacity: 0,
});

const loaderAnimation = () => {
  var t = gsap.timeline();
  t.to(".child", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: Circ.easeInOut,
    stagger: 0.1,
  });

  t.to(".blackLoader", {
    duration: 1,
    height: 0,
    esase: Expo.easeInOut,
    padding: 0,
  });

  t.to(".greenLoader", {
    height: "100%",
    duration: 0.8,
    delay: -0.6,
    top: 0,
    esase: Expo.easeInOut,
  });

  t.to(".greenLoader", {
    height: "0%",
    delay: -0.4,
    duration: 0.7,
    esase: Expo.easeInOut,
  });

  t.to("#hero", {
    opacity: 1,
    delay: -0.1,
  });
};

/**
 *
 * Hero-Section
 */

const createSpan = (classname) => {
  //Create Span
  document.querySelectorAll(classname).forEach((el) => {
    let spanChild = document.createElement("span");
    let spanParent = document.createElement("span");
    spanChild.classList.add("heroChild");
    spanParent.classList.add("heroParent");
    spanChild.textContent = el.textContent;
    spanParent.appendChild(spanChild);
    (el.innerHTML = ""), el.appendChild(spanParent);
  });
};

function splitText(className) {
  const spanTags = document.querySelectorAll(className);
  console.log(spanTags);
  spanTags.forEach((spans) => {
    const textContent = spans.textContent.trim(); // Trim to remove leading/trailing white spaces
    spans.innerHTML = ""; // Clear existing content
    console.log(textContent);
    for (const char of textContent) {
      const singleSpan = document.createElement("span");
      if (char === " ") {
        singleSpan.textContent = "\u00A0"; // Using '\u00A0' for non-breaking space
      } else {
        singleSpan.textContent = char;
      }
      singleSpan.classList.add("s");
      spans.appendChild(singleSpan);
    }
  });
}

//setter function
const heroElementSetter = () => {
  var t = gsap.timeline();
  t.set(".circle", {
    y: "70%",
  });

  t.set(".s", {
    y: "100%",
  });

  t.set(".hero-para", {
    y: "100%",
    opacity: 1,
  });
};

const heroTitleAnimation = () => {
  const t = gsap.timeline();

  t.to(".s", {
    y: "0%",
    stagger: 0.05,
    duration: 1.2,
    delay: 3.2,
    ease: "power2.out",
  });

  t.to(".circle", {
    y: "0%",
    delay: -1.5,
    duration: 1.4,
    ease: "power2.out",
  });

  t.to(".hero-para span", {
    y: "0%",
    stagger: 0.02,
    duration: 1,
    delay: -0.5,
    ease: "power2.out",
  });
};

//Scrolltrigger Animation on hero-header and span
const onScrollHeroAnimation = () => {
  const t = gsap.timeline();
  t.to(".heroChild", {
    scrollTrigger: {
      trigger: ".heroChild",
      // markers: true,
      scrub: true,
      start: "top 40%",
    },
    opacity: 0,
    // scale: .9,
    y: 100,
    esase: "power4.out",
  });
  t.to(".hero-para span", {
    scrollTrigger: {
      trigger: ".hero-para span",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    scale: 0.9,
    delay: -1,
    esase: "power4.out",
  });
};

const splitMethod = () => {
  const h3Array = document.querySelectorAll(".page2 h3");
  h3Array.forEach((elem) => {
    let clutter = "";
    let h3Text = elem.textContent;
    const splittedArray = h3Text.split("");
    splittedArray.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });

    elem.innerHTML = clutter;
  });
};

revalSpan(".reval");
loaderAnimation();
/**
 * Hero-Section
 */

createSpan(".hero-title");
splitText(".heroChild");
heroElementSetter();
heroTitleAnimation();
onScrollHeroAnimation();

/**
 * About Section
 */

splitMethod();

const a = () => {
  const t = gsap.timeline();
  t.to(".page2 h1", {
    y: "0%",
    opacity: 1,
    delay: 2,
  });
  t.to(".page2", {
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page2",
      scrub: true,
      start: 100,
      end: 600,
      markers: true,
    },
    backgroundColor: "black",
    duration: 1,
    esase: "power4.out",
  });

  t.to(".about h3 span", {
    stagger: 0.1,
    scrollTrigger: {
      trigger: "h3 span",
      scrub: true,
      start: 700,
      end: 950,
    },
    color: "#8e8e77",
  });
};

a();

gsap.to(".page3", {
  scrollTrigger: {
    trigger: ".page3",
    start: "top top",
    markers: true,
    scrub: true,
    start: 930,
    end: 1000
  },
  backgroundColor: "#111",
   // Change to any color you prefer
   duration: 1,
 
   esase: "power4.out",
});
