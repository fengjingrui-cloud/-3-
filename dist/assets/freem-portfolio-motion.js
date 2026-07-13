(() => {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduceMotion) return;

  const easeOut = "cubic-bezier(.16, 1, .3, 1)";
  const easeSoft = "cubic-bezier(.22, .9, .18, 1)";
  const animated = new WeakSet();
  const prepared = new WeakSet();
  const parallaxItems = new Set();
  let homeStartFixed = false;
  let bootRaf = 0;

  const qsa = (root, selector) => Array.from(root.querySelectorAll(selector));

  function staggerDelay(index, base = 0) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const ripple = [0, 155, 70][col] || 0;
    return base + row * 185 + ripple + (index % 2) * 45;
  }

  function animate(el, keyframes, options = {}) {
    if (!el || typeof el.animate !== "function") return null;
    el.classList.remove("motion-pending");
    el.classList.add("motion-revealed");
    el.classList.add("motion-will-change");
    const animation = el.animate(keyframes, {
      duration: 1100,
      easing: easeOut,
      fill: "both",
      ...options,
    });
    animation.addEventListener("finish", () => {
      el.classList.remove("motion-will-change");
      if (options.clear !== false) {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.clipPath = "";
        el.style.filter = "";
      }
    });
    return animation;
  }

  function prepare(el, type) {
    if (!el || prepared.has(el) || animated.has(el)) return;
    prepared.add(el);
    el.classList.add("motion-pending", `motion-${type}`);
  }

  function revealTitle(el, delay = 0) {
    if (!el || animated.has(el)) return;
    animated.add(el);
    animate(
      el,
      [
        {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          transform: "translate3d(-34px, 150px, 0) scaleX(.52)",
          filter: "blur(18px)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0 0 0)",
          transform: "translate3d(0, 0, 0) scaleX(1)",
          filter: "blur(0)",
        },
      ],
      { duration: 1780, delay, easing: easeSoft }
    );
  }

  function revealCard(el, index = 0) {
    if (!el || animated.has(el)) return;
    animated.add(el);
    const x = index % 2 === 0 ? -54 : 54;
    const rotate = index % 2 === 0 ? "-1.8deg" : "1.8deg";
    animate(
      el,
      [
        {
          opacity: 0,
          clipPath: "inset(0 0 32% 0 round 22px)",
          transform: `translate3d(${x}px, 148px, 0) scale(.9) rotate(${rotate})`,
          filter: "blur(16px) saturate(.72) brightness(.82)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0 0 0 round 22px)",
          transform: "translate3d(0, 0, 0) scale(1)",
          filter: "blur(0) saturate(1)",
        },
      ],
      { duration: 1480, delay: staggerDelay(index, 360), easing: easeSoft }
    );
  }

  function revealMedia(el, index = 0) {
    if (!el || animated.has(el)) return;
    animated.add(el);
    const x = index % 2 === 0 ? 34 : -34;
    animate(
      el,
      [
        {
          opacity: .05,
          clipPath: "inset(0 0 100% 0)",
          transform: `translate3d(${x}px, 96px, 0) scale(1.18)`,
          filter: "blur(14px) brightness(.62) saturate(.8)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0 0 0)",
          transform: "translate3d(0, 0, 0) scale(1)",
          filter: "blur(0) brightness(1)",
        },
      ],
      { duration: 1620, delay: staggerDelay(index, 720), easing: easeSoft, clear: false }
    );
    if (el.tagName === "IMG") parallaxItems.add(el);
  }

  function openingAnimation() {
    const hero = document.querySelector("#top.hero");
    if (!hero || hero.dataset.motionOpening === "true") return;
    hero.dataset.motionOpening = "true";

    const video = hero.querySelector(".hero__video, .hero__bg-video, video");
    const wash = hero.querySelector(".hero__wash");
    const globalTopbar = document.querySelector(".hero-topbar--global");
    const topbar = globalTopbar || hero.querySelector(".hero-topbar");
    const titleParts = qsa(hero, ".hero__copy h1 span, .hero__copy h1");
    const actions = qsa(hero, ".hero__actions > *");
    const cinemaCards = qsa(hero, ".cinema-card").slice(0, 14);

    [...titleParts, ...actions, ...cinemaCards, video, wash, topbar].forEach((el) => {
      el?.classList?.remove("motion-pending");
      el?.classList?.add("motion-revealed");
    });

    animate(video, [
      { opacity: .08, transform: "scale(1.14)", filter: "blur(14px) brightness(.45) saturate(.75)" },
      { opacity: 1, transform: "scale(1)", filter: "blur(0) brightness(1) saturate(1)" },
    ], { duration: 1850, easing: easeSoft, clear: false });

    animate(wash, [
      { opacity: 0 },
      { opacity: 1 },
    ], { duration: 1500, delay: 220, easing: easeOut });

    animate(
      topbar,
      globalTopbar
        ? [
            { opacity: 0, transform: "translate3d(-50%, -72px, 0) scaleX(.94)" },
            { opacity: 1, transform: "translate3d(-50%, 0, 0) scaleX(1)" },
          ]
        : [
            { opacity: 0, transform: "translate3d(0, -72px, 0) scaleX(.94)" },
            { opacity: 1, transform: "translate3d(0, 0, 0) scaleX(1)" },
          ],
      { duration: 1250, delay: 180, easing: easeSoft, clear: false }
    );

    titleParts.forEach((part, index) => {
      animate(
        part,
        [
          {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            transform: "translate3d(0, 120px, 0) scaleX(.62)",
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
            transform: "translate3d(0, 0, 0) scaleX(1)",
            filter: "blur(0)",
          },
        ],
        { duration: 1580, delay: 420 + index * 170, easing: easeSoft }
      );
    });

    actions.forEach((item, index) => {
      animate(item, [
        { opacity: 0, transform: "translate3d(0, 38px, 0) scale(.92)" },
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
      ], { duration: 1050, delay: 980 + index * 110, easing: easeOut });
    });

    cinemaCards.forEach((card, index) => revealCard(card, index + 9));
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = entry.target;
        sectionObserver.unobserve(section);

        const title = section.querySelector("h1, h2, .split-heading, .section-heading h2");
        revealTitle(title, 0);

        const cards = qsa(
          section,
          ".strength-card, .featured-card, .overview-card, .project-card, .key-project-tile, .evaluation-card, article"
        ).filter((el) => !el.closest(".hero-topbar"));
        cards.forEach((card, index) => revealCard(card, index));

        const media = qsa(section, "img, video").filter((el) => !el.closest(".hero-topbar"));
        media.forEach((item, index) => revealMedia(item, index));
      });
    },
    { rootMargin: "0px 0px -18% 0px", threshold: .18 }
  );

  function watchSections() {
    qsa(document, "main > section, .case-page > section, .proto-page > section, .overview-panel__inner").forEach((section) => {
      if (section.matches("#top.hero")) return;
      if (section.dataset.motionWatched === "true") return;
      section.dataset.motionWatched = "true";

      const title = section.querySelector("h1, h2, .split-heading, .section-heading h2");
      prepare(title, "title");

      const cards = qsa(
        section,
        ".strength-card, .featured-card, .overview-card, .project-card, .key-project-tile, .evaluation-card, article"
      ).filter((el) => !el.closest(".hero-topbar"));
      cards.forEach((card) => prepare(card, "card"));

      const media = qsa(section, "img, video").filter((el) => !el.closest(".hero-topbar"));
      media.forEach((item) => prepare(item, "media"));

      sectionObserver.observe(section);
    });
  }

  let parallaxRaf = 0;
  function updateParallax() {
    parallaxRaf = 0;
    if (document.hidden) return;
    const vh = window.innerHeight || 1;
    parallaxItems.forEach((img) => {
      if (!img.isConnected) {
        parallaxItems.delete(img);
        return;
      }
      const rect = img.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const y = Math.max(-18, Math.min(18, progress * -34));
      img.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.035)`;
    });
  }

  function requestParallax() {
    if (document.hidden) return;
    if (parallaxRaf) return;
    parallaxRaf = requestAnimationFrame(updateParallax);
  }

  function bootMotion() {
    document.documentElement.classList.add("motion-ready");
    if (!homeStartFixed && document.querySelector("#top.hero")) {
      homeStartFixed = true;
      if (location.hash && location.hash !== "#top") {
        history.replaceState(null, "", `${location.pathname}${location.search}#top`);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    openingAnimation();
    watchSections();
    requestParallax();
  }

  function scheduleBootMotion() {
    if (document.hidden || bootRaf) return;
    bootRaf = requestAnimationFrame(() => {
      bootRaf = 0;
      bootMotion();
    });
  }

  const root = document.getElementById("root");
  if (root) {
    new MutationObserver(scheduleBootMotion).observe(root, { childList: true, subtree: true });
  }

  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) scheduleBootMotion();
  });
  window.addEventListener("load", scheduleBootMotion);
  scheduleBootMotion();
})();
