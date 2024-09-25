const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

//Page 1 Animation---------------------------------------------------------->

const frames = document.querySelectorAll(".image-section > div");

const timeline1 = gsap.timeline();

frames.forEach((frame, i) => {
  timeline1.from(
    frame,
    {
      y: -300,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    i * 0.2
  );
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top start",
      end: "+=500",
      scrub: 1,
      // pin: true,
    },
  })
  .to(
    frames,
    {
      x: (index) => index * 70,
      ease: "power1.out",
      duration: 1,
    },
    0
  )
  .to(
    ".transition-text .beautiful",
    {
      x: 300,
      opacity: 1,
      duration: 0.2,
      ease: "power1.out",
    },
    0
  )

  .to(
    ".transition-text .premium",
    {
      x: 300,
      duration: 0.2,
      ease: "power1.out",
    },
    0
  );

gsap.to(".whatsapp", {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "linear",
  delay: 2,
});

//Page 2 Animation ------------------------------------------------------------------------------------->

const headline = document.getElementById("headline");

function wrapWordsInSpan(element) {
  const words = element.innerHTML.split(/\s+/);
  const wrappedWords = words.map((word) => `<span>${word}</span>`);
  element.innerHTML = wrappedWords.join(" ");
}

wrapWordsInSpan(headline);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#headline",
    start: "top 75%",
    end: "bottom 25%",
    scrub: true,
  },
});

const wordsBeforeSpan = gsap.utils.toArray("#headline span").slice(0, 8);

const wordsInSpan = gsap.utils.toArray("#headline span").slice(8);

wordsBeforeSpan.forEach((word, i) => {
  timeline.to(
    word,
    {
      color: "#111",
      duration: 0.1,
      ease: "power2.out",
    },
    i * 0.1
  );
});

wordsInSpan.forEach((word, i) => {
  timeline.to(
    word,
    {
      color: "blue",
      duration: 0.1,
      ease: "power2.out",
    },
    (wordsBeforeSpan.length + i) * 0.1
  );
});

ScrollTrigger.create({
  trigger: "#headline",
  start: "bottom 25%",
  onEnter: () => {
    gsap.to(".divider", {
      height: "100px",
      duration: 0.2,
      ease: "power2.out",
    });
  },
});

const textParagraph = document.getElementById("text-paragraph");
wrapWordsInSpan(textParagraph);

const paragraphTimeline = gsap.timeline({
  paused: true,
});

gsap.utils.toArray("#text-paragraph span").forEach((word, i) => {
  paragraphTimeline.to(word, {
    opacity: 1,
    duration: 0.01,
    ease: "power2.out",
  });
});

ScrollTrigger.create({
  trigger: ".divider",
  start: "top 25%",
  end: "bottom top",
  onEnter: () => {
    paragraphTimeline.play(0);
  },
  onLeaveBack: () => {
    paragraphTimeline.reverse();
  },
});

//Page 3 Animation --------------------------------------------------------------->

gsap.registerPlugin(ScrollTrigger);

const videoContainer = document.querySelector(".video-container");

gsap.to(videoContainer, {
  width: "100%",
  height: "100%",
  duration: 0.1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: videoContainer,
    start: "top 80%",
    end: "bottom 0%",
    scrub: 1,
  },
});
