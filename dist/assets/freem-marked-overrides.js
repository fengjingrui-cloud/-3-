(() => {
  'use strict';

  const TARGET_PAGE_SELECTORS = [
    'main.case-page',
    'main.ip-page',
    'main.magic-page',
    'main.divine-page',
    'main.event-page',
    'main.interactive-page',
    'main.proto-page',
    'main.love-page',
    'main.proto-page.proto-page--home',
    'main.spring-page'
  ];

  const TARGET_TEXT_SELECTORS = [
    'main.case-page:nth-of-type(2) > section.case-hero:nth-of-type(1) > div.case-hero__copy > p',
    'main.case-page:nth-of-type(2) > section.case-hero:nth-of-type(1) > div.case-hero__copy > div.case-hero__credits',
    'div#root > main.case-page:nth-of-type(2) > section.freem-brazil-background-page:nth-of-type(2) > p:nth-of-type(2)',
    'main.case-page .case-hero__copy > p',
    'main.case-page .case-hero__copy > .case-hero__credits',
    'main.case-page .freem-brazil-background-page > p:nth-of-type(2)',
    'section.case-story:nth-of-type(3) > div.case-story__inner > div.case-story__copy:nth-of-type(2) > p',
    'section.case-story .case-story__copy > p',
    'section#avatar-brief > div.avatar-brief__background:nth-of-type(1) > p:nth-of-type(2)',
    'section#avatar-brief .avatar-brief__background > p:nth-of-type(2)',
    'main.ip-page:nth-of-type(2) > section.ip-hero:nth-of-type(1) > div.ip-hero__copy > p',
    'div#root > main.ip-page:nth-of-type(2) > section.freem-ip-background:nth-of-type(2) > p:nth-of-type(2)',
    'main.ip-page:nth-of-type(2) > section.ip-story:nth-of-type(4) > div.ip-story__copy:nth-of-type(2) > p',
    'main.ip-page .ip-hero__copy > p',
    'main.ip-page .freem-ip-background > p:nth-of-type(2)',
    'main.ip-page .ip-story__copy > p',
    'div#root > main.interactive-page:nth-of-type(2) > section.freem-interactive-background:nth-of-type(2) > p:nth-of-type(2)',
    'main.interactive-page .freem-interactive-background > p:nth-of-type(2)',
    'main.magic-page:nth-of-type(2) > section.magic-hero:nth-of-type(1) > div.magic-hero__copy:nth-of-type(2) > p',
    'main.magic-page:nth-of-type(2) > section.magic-hero:nth-of-type(1) > div.magic-hero__copy:nth-of-type(2) > div.magic-hero__credits',
    'main.magic-page:nth-of-type(2) > section.magic-story:nth-of-type(2) > div.magic-story__copy:nth-of-type(2) > p:nth-of-type(2)',
    'main.magic-page:nth-of-type(2) > section.magic-process:nth-of-type(5) > div.magic-process__head:nth-of-type(1) > p.section-kicker',
    'main.magic-page:nth-of-type(2) > section.magic-showcase:nth-of-type(6) > div.magic-showcase__head:nth-of-type(1) > p.section-kicker',
    'main.magic-page .magic-hero__copy > p',
    'main.magic-page .magic-hero__copy > .magic-hero__credits',
    'main.magic-page .magic-story__copy > p:nth-of-type(2)',
    'main.magic-page .magic-process__head > p.section-kicker',
    'main.magic-page .magic-showcase__head > p.section-kicker',
    'main.divine-page:nth-of-type(2) > section.divine-intro:nth-of-type(3) > div:nth-of-type(1) > p:nth-of-type(2)',
    'main.divine-page:nth-of-type(2) > section.divine-script:nth-of-type(4) > div.divine-section-head:nth-of-type(1) > p.section-kicker',
    'main.divine-page:nth-of-type(2) > section.divine-process:nth-of-type(5) > div.divine-process__copy:nth-of-type(1) > p:nth-of-type(2)',
    'main.divine-page:nth-of-type(2) > section.divine-process:nth-of-type(5) > div.divine-process__copy:nth-of-type(1) > p.section-kicker:nth-of-type(1)',
    'main.divine-page .divine-intro > div > p:nth-of-type(2)',
    'main.divine-page .divine-section-head > p.section-kicker',
    'main.divine-page .divine-process__copy > p:nth-of-type(2)',
    'main.divine-page .divine-process__copy > p.section-kicker:nth-of-type(1)',
    'main.proto-page.proto-page--card:nth-of-type(2) > section.proto-hero:nth-of-type(1) > div.proto-hero__content:nth-of-type(2) > div.proto-hero__intro',
    'section.proto-section.proto-section--intro:nth-of-type(2) > div.proto-intro-cards > div.proto-intro-cards__head:nth-of-type(1) > p',
    'main.proto-page.proto-page--home:nth-of-type(2) > section.proto-hero:nth-of-type(1) > div.proto-hero__content:nth-of-type(2) > span',
    'main.proto-page.proto-page--card .proto-hero__content > .proto-hero__intro',
    'main.proto-page .proto-intro-cards__head > p',
    'main.proto-page.proto-page--home .proto-hero__content > span',
    'section.proto-section.proto-section--intro:nth-of-type(2) > div.proto-intro__grid > div > p',
    'main.proto-page.proto-page--home .proto-intro__grid > div > p',
    'div#root > main.proto-page.proto-page--home:nth-of-type(2) > section.proto-section.proto-section--display:nth-of-type(5) > p.freem-proto-display-description',
    'div#root > main.proto-page.proto-page--home:nth-of-type(2) > section.proto-section.proto-section--display:nth-of-type(6) > p.freem-proto-display-body',
    'div#root > main.proto-page.proto-page--home:nth-of-type(2) > section.proto-section.proto-section--display:nth-of-type(7) > p.freem-proto-display-body',
    'main.proto-page.proto-page--home .proto-section--display > p.freem-proto-display-description',
    'main.proto-page.proto-page--home .proto-section--display > p.freem-proto-display-body',
    'main.event-page:nth-of-type(2) > section.event-hero:nth-of-type(1) > div.event-hero__copy:nth-of-type(2) > p.freem-event-hero-body:nth-of-type(2)',
    'div#root > main.event-page:nth-of-type(2) > section.freem-event-system:nth-of-type(2) > p:nth-of-type(2)',
    'div#root > main.event-page:nth-of-type(2) > section.freem-event-system:nth-of-type(2) > p.section-kicker:nth-of-type(1)',
    'main.event-page .event-hero__copy > p.freem-event-hero-body',
    'main.event-page .freem-event-system > p:nth-of-type(2)',
    'main.event-page .freem-event-system > p.section-kicker:nth-of-type(1)',
    'main.love-page:nth-of-type(2) > section.love-section.love-intro:nth-of-type(2) > div.love-intro__body > p',
    'section.love-section.love-stagger:nth-of-type(5) > div.love-stagger__item.love-stagger__item--top:nth-of-type(1) > div > p:nth-of-type(2)',
    'section.love-section.love-stagger:nth-of-type(5) > div.love-stagger__item.love-stagger__item--bottom:nth-of-type(2) > div > p:nth-of-type(2)',
    'main.love-page .love-intro__body > p',
    'main.love-page .love-stagger__item--top > div > p:nth-of-type(2)',
    'main.love-page .love-stagger__item--bottom > div > p:nth-of-type(2)',
    'div#root > main.spring-page:nth-of-type(2) > section.freem-spring-background-page:nth-of-type(2) > p:nth-of-type(2)',
    'main.spring-page:nth-of-type(2) > section.spring-finale:nth-of-type(4) > div.spring-finale__copy:nth-of-type(1) > span',
    'main.spring-page .freem-spring-background-page > p:nth-of-type(2)',
    'main.spring-page .spring-finale__copy > span'
  ];

  const TARGET_TEXT_NEEDLES = [
    'Regarding the character images',
    'PRODUCTION FLOW',
    'STORY BACKGROUND',
    'PROJECT THOUGHTS'
  ];

  const DISALLOWED_ANCESTORS = ['header', '.hero-topbar', '.hero-topbar--global', '.case-nav', '.daily-overview-nav', '.evaluation-nav', '.key-projects-nav'];
  const DISALLOWED_TAGS = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SVG', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'CANVAS'];
  const PROCESSED_ATTR = 'data-freem-scroll-float';
  const ORIGINAL_TEXT_ATTR = 'data-freem-scroll-float-original';

  const processed = new WeakSet();
  let scrollObserver = null;
  let rafScheduled = false;
  let scrollFloatFrame = null;
  let scrollFloatListenersReady = false;
  let reduceMotionQuery = null;
  let reduceMotionEnabled = false;

  function getTargetPages() {
    const selectors = TARGET_PAGE_SELECTORS.join(',');
    return Array.from(document.querySelectorAll(selectors));
  }

  function inAnyTargetPage(node) {
    return TARGET_PAGE_SELECTORS.some(sel => node.closest(sel));
  }

  function isTextOnly(node) {
    return Array.from(node.childNodes).every(child => {
      if (child.nodeType === Node.TEXT_NODE) return true;
      if (child.nodeType === Node.ELEMENT_NODE) return child.tagName === 'BR';
      return false;
    });
  }

  function shouldIgnoreNode(node) {
    if (!node || !node.isConnected) return true;
    if (node.matches('.react-bits-scroll-float')) return true;
    if (node.hasAttribute(PROCESSED_ATTR)) return true;
    if (node.closest?.('.react-bits-scroll-float')) return true;
    if (node.closest?.(DISALLOWED_ANCESTORS.join(', '))) return true;
    if (DISALLOWED_TAGS.includes(node.tagName)) return true;
    if (node.closest?.('figure, picture, video, canvas, svg, button, a')) return true;
    if (!node.textContent || node.textContent.trim().length < 1) return true;
    return false;
  }

  function splitText(node) {
    if (!node.textContent.trim()) return;
    node.setAttribute(ORIGINAL_TEXT_ATTR, node.innerHTML);
    let visibleCharIndex = 0;

    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
      acceptNode(textNode) {
        const parent = textNode.parentElement;
        if (!parent || parent.closest(DISALLOWED_TAGS.map(tag => tag.toLowerCase()).join(','))) {
          return NodeFilter.FILTER_REJECT;
        }
        return textNode.nodeValue && textNode.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((textNode) => {
      const frag = document.createDocumentFragment();
      Array.from(textNode.nodeValue.replace(/\r?\n/g, ' ').replace(/\u00A0/g, ' ')).forEach((char) => {
        const charNode = document.createElement('span');
        if (char === ' ') {
          charNode.className = 'react-bits-scroll-float-space';
          charNode.textContent = '\u00A0';
        } else {
          charNode.className = 'react-bits-scroll-float-char';
          charNode.textContent = char;
          charNode.style.setProperty('--scroll-float-index', String(visibleCharIndex));
          visibleCharIndex += 1;
        }
        frag.appendChild(charNode);
      });
      textNode.replaceWith(frag);
    });

    node.classList.add('react-bits-scroll-float');
    node.setAttribute(PROCESSED_ATTR, 'true');
    updateScrollFloatNode(node);
  }

  function restoreProcessed(node) {
    const originalText = node.getAttribute(ORIGINAL_TEXT_ATTR);
    if (!originalText) return;
    node.innerHTML = originalText;
    node.removeAttribute(PROCESSED_ATTR);
    node.removeAttribute(ORIGINAL_TEXT_ATTR);
    node.classList.remove('react-bits-scroll-float', 'is-visible');
    processed.delete(node);
  }

  function clearObserver() {
    if (!scrollObserver) return;
    window.removeEventListener('scroll', scheduleScrollFloatUpdate);
    window.removeEventListener('resize', scheduleScrollFloatUpdate);
    scrollFloatListenersReady = false;
  }

  function ensureObserver() {
    if (scrollFloatListenersReady) return;
    scrollObserver = true;
    scrollFloatListenersReady = true;
    window.addEventListener('scroll', scheduleScrollFloatUpdate, { passive: true });
    window.addEventListener('resize', scheduleScrollFloatUpdate, { passive: true });
  }

  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }

  function easeOutBackLike(value) {
    const t = clamp01(value);
    const c1 = 1.35;
    const c3 = c1 + 1;
    return clamp01(1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2));
  }

  function updateScrollFloatNode(node) {
    if (!node || !node.isConnected || reduceMotionEnabled) return;
    const chars = Array.from(node.querySelectorAll('.react-bits-scroll-float-char'));
    if (!chars.length) return;

    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 1;
    const centerY = rect.top + rect.height / 2;
    const start = vh * 1.5;
    const end = vh * 0.6;
    const baseProgress = clamp01((start - centerY) / Math.max(1, start - end));
    node.classList.toggle('is-visible', baseProgress > 0.01);

    const maxStagger = Math.min(0.48, Math.max(0.18, chars.length * 0.0025));
    chars.forEach((char, index) => {
      const stagger = chars.length <= 1 ? 0 : Math.min(index * 0.02, maxStagger);
      const progress = easeOutBackLike((baseProgress - stagger) / 0.45);
      char.style.setProperty('--scroll-float-progress', progress.toFixed(4));
      char.style.setProperty('--scroll-float-opacity', clamp01(progress).toFixed(4));
    });
  }

  function updateScrollFloatNodes() {
    document.querySelectorAll(`[${PROCESSED_ATTR}="true"]`).forEach(updateScrollFloatNode);
  }

  function scheduleScrollFloatUpdate() {
    if (scrollFloatFrame) return;
    scrollFloatFrame = requestAnimationFrame(() => {
      scrollFloatFrame = null;
      updateScrollFloatNodes();
    });
  }

  function initScrollFloat() {
    if (!document.documentElement) return;
    const pages = getTargetPages();
    if (!pages.length) return;

    if (reduceMotionEnabled) {
      document.querySelectorAll(`[${PROCESSED_ATTR}="${'true'}"]`).forEach(restoreProcessed);
      return;
    }

    const unique = new Set();
    pages.forEach(page => {
      const candidates = page.querySelectorAll(TARGET_TEXT_SELECTORS.join(', '));
      candidates.forEach((node) => {
        if (!node || !node.textContent || shouldIgnoreNode(node)) return;
        if (unique.has(node) || node.hasAttribute(PROCESSED_ATTR) || processed.has(node)) return;
        unique.add(node);
        if (!inAnyTargetPage(node)) return;
        splitText(node);
        processed.add(node);
      });
    });

    TARGET_TEXT_NEEDLES.forEach((needle) => {
      document.querySelectorAll('main :is(p, span, h1, h2, h3, h4, small, strong, div)').forEach((node) => {
        if (!node.textContent || !node.textContent.includes(needle)) return;
        if (node.children.length > 4 || shouldIgnoreNode(node)) return;
        if (unique.has(node) || node.hasAttribute(PROCESSED_ATTR) || processed.has(node)) return;
        unique.add(node);
        splitText(node);
        processed.add(node);
      });
    });

    scheduleScrollFloatUpdate();
  }

  function scheduleInit() {
    if (rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(() => {
      rafScheduled = false;
      ensureObserver();
      initScrollFloat();
    });
  }

  function onRouteChange() {
    scheduleInit();
  }

  function patchHistory() {
    const nativePushState = history.pushState;
    const nativeReplaceState = history.replaceState;
    if (typeof nativePushState === 'function') {
      history.pushState = function (...args) {
        const result = nativePushState.apply(this, args);
        onRouteChange();
        return result;
      };
    }
    if (typeof nativeReplaceState === 'function') {
      history.replaceState = function (...args) {
        const result = nativeReplaceState.apply(this, args);
        onRouteChange();
        return result;
      };
    }
    window.addEventListener('popstate', onRouteChange, { passive: true });
    window.addEventListener('hashchange', onRouteChange, { passive: true });
  }

  function setupMotionFallback() {
    if (!window.matchMedia) return;
    reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotionEnabled = reduceMotionQuery.matches;
    if (typeof reduceMotionQuery.addEventListener === 'function') {
      reduceMotionQuery.addEventListener('change', event => {
        reduceMotionEnabled = event.matches;
        if (reduceMotionEnabled) {
          document.querySelectorAll(`[${PROCESSED_ATTR}="${'true'}"]`).forEach(restoreProcessed);
          clearObserver();
        } else {
          scheduleInit();
        }
      });
    }
  }

  function setupObserverForDomMutations() {
    const root = document.getElementById('root');
    if (!root || !window.MutationObserver) return;
    const mutationObserver = new MutationObserver(() => {
      scheduleInit();
    });
    mutationObserver.observe(root, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupMotionFallback();
      ensureObserver();
      setupObserverForDomMutations();
      patchHistory();
      scheduleInit();
    }, { once: true });
  } else {
    setupMotionFallback();
    ensureObserver();
    setupObserverForDomMutations();
    patchHistory();
    scheduleInit();
  }
  window.addEventListener('load', () => scheduleInit(), { once: true });
})();

(() => {
  'use strict';

  const VERSION_ATTR = 'data-freem-content-fix';
  const VERSION = '20260709-final-content-polish';

  const avatarCaptions = [
    '我是谁？强调AI分身的诞生出现',
    '你想成为谁？AI能量从自身扩散开来，为衔接下一镜头的另一个分身铺垫',
    '一个人照镜子，镜子里面有他的镜像',
    '你是唯一的我；整体AI分身LOGO展现，突出唯一性',
    '身影开始分化为9个具有明显差异的自己（用颜色、外貌、动作、场景等来区别）',
    '分身代替作者在24h的不停回复用户信息和用户互动',
    '分身通过一次次大数据实验，变成了一个大模型，再变成了一个真实的作者',
    '一个个视频的内容被分身读取，形成了更像作者的永恒数字生命',
    'LOGO结尾'
  ];

  const eventCards = [
    ['金秋赛循环动画', '这里时荣誉区，所以动效得考虑扫光、闪耀的动效语言来展现'],
    ['金秋赛匹配动画', '匹配动画更多展现的是碰撞感和竞技感'],
    ['金秋赛入场动画', '地区赛 关键词是上升，所以在做动画要加上上升的感觉'],
    ['家乡赛循环动画', '主要强调汇聚的感受，结合视觉主题调性，做成水流汇聚、LOGO流动的动效形式'],
    ['家乡赛PK动画', 'PK得展现碰撞感且结合主题水流调性，增加水特效'],
    ['家乡赛入场动画', '第一次尝试用环境引出主标题的形式做入场动画，更强的突出整个赛事的主题']
  ];

  function mark(node, key) {
    if (!node) return false;
    const current = node.getAttribute(VERSION_ATTR);
    if (current === `${VERSION}:${key}`) return false;
    node.setAttribute(VERSION_ATTR, `${VERSION}:${key}`);
    return true;
  }

  function textNode(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    return node;
  }

  function setText(selector, text) {
    const node = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (node && node.textContent.trim() !== text) node.textContent = text;
  }

  function removeNode(selector) {
    const node = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (node) node.remove();
  }

  function replaceMediaWithVideo(container, src, extraClass = '') {
    if (!container) return;
    const existing = container.querySelector('video, img, picture');
    if (existing?.tagName === 'VIDEO' && existing.getAttribute('src') === src) return;
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.className = `${existing?.className || ''} ${extraClass}`.trim();
    if (existing) existing.replaceWith(video);
    else container.prepend(video);
  }

  function setupMediaPerformance() {
    const root = document.getElementById('root') || document;
    root.querySelectorAll('img').forEach((img) => {
      if (!img.closest('#top.hero, .hero-topbar')) {
        img.loading = 'lazy';
        img.fetchPriority = 'low';
      } else {
        img.fetchPriority = 'high';
      }
      img.decoding = 'async';
    });

    const videos = Array.from(root.querySelectorAll('video'));
    videos.forEach((video) => {
      const isHeroVideo = Boolean(video.closest('#top.hero')) || video.classList.contains('hero__video');
      video.playsInline = true;
      if (!isHeroVideo && !video.autoplay) {
        video.preload = 'metadata';
      }
      if (isHeroVideo) {
        video.preload = 'auto';
        video.fetchPriority = 'high';
      }
    });

    if (!window.IntersectionObserver || window.__freemMediaPerformanceReady) return;
    window.__freemMediaPerformanceReady = true;

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!(video instanceof HTMLVideoElement)) return;
        if (entry.isIntersecting) {
          if (video.dataset.freemWasPlaying === 'true' || video.autoplay) {
            video.play?.().catch(() => {});
          }
          return;
        }
        if (!video.paused) {
          video.dataset.freemWasPlaying = 'true';
          video.pause();
        } else {
          video.dataset.freemWasPlaying = 'false';
        }
      });
    }, { rootMargin: '420px 0px', threshold: 0.01 });

    const observeVideos = () => {
      root.querySelectorAll('video').forEach((video) => {
        if (video.dataset.freemMediaObserved === 'true') return;
        video.dataset.freemMediaObserved = 'true';
        videoObserver.observe(video);
      });
    };

    observeVideos();
    new MutationObserver(observeVideos).observe(root, { childList: true, subtree: true });
  }

  function replaceImage(selector, src) {
    const img = document.querySelector(selector);
    if (!img || img.getAttribute('src') === src) return;
    img.src = src;
    img.removeAttribute('srcset');
  }

  function ensureMainTitle(card, className, text) {
    if (!card) return;
    let title = card.querySelector(`.${className}`);
    if (!title) {
      title = document.createElement('h2');
      title.className = className;
      const anchor = card.querySelector('h3') || card.firstElementChild;
      if (anchor) anchor.insertAdjacentElement('beforebegin', title);
      else card.prepend(title);
    }
    title.textContent = text;
  }

  function ensureDisplayBody(section, className, text) {
    if (!section) return;
    let body = section.querySelector(`.${className}`);
    if (!body) {
      body = document.createElement('p');
      body.className = className;
      const media = section.querySelector('.proto-media-frame--wide, .workflow-showcase__card, img, video');
      if (media) media.insertAdjacentElement('afterend', body);
      else section.append(body);
    }
    body.textContent = text;
  }

  function fixHome() {
    const strengthCards = document.querySelectorAll('#strengths .strength-grid .strength-card');
    if (strengthCards[3]) strengthCards[3].remove();
    setText(strengthCards[2]?.querySelector('h3'), '日常动画全集');

    const dailyCard = strengthCards[2];
    if (dailyCard && dailyCard.getAttribute('data-freem-daily-link') !== 'true') {
      dailyCard.setAttribute('data-freem-daily-link', 'true');
      dailyCard.setAttribute('role', 'link');
      dailyCard.setAttribute('tabindex', '0');
      dailyCard.addEventListener('click', () => {
        window.location.hash = 'daily-animation';
      });
      dailyCard.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        window.location.hash = 'daily-animation';
      });
    }

    const featured = document.querySelector('#featured');
    const about = document.querySelector('#about');
    if (featured && about && featured.nextElementSibling !== about) {
      about.parentNode.insertBefore(featured, about);
    }

    Array.from(document.querySelectorAll('span, small, p')).forEach(label => {
      if (label.textContent.trim().toUpperCase() !== 'COMPANY NAME') return;
      const previous = label.previousElementSibling;
      if (previous && previous.textContent.trim() !== '北京字节跳动科技有限公司') {
        previous.textContent = '北京字节跳动科技有限公司';
      }
    });
  }

  function fixStrengthCardCopy() {
    const copy = [
      '尝试前沿AI技术从0-1打造vibecoding产品，为工作提效',
      '重点项目的详细文案介绍',
      '所有的C4D、AI日常动画作品合集'
    ];
    document.querySelectorAll('#strengths .strength-grid .strength-card').forEach((card, index) => {
      const paragraph = card.querySelector('p');
      if (!paragraph || !copy[index] || paragraph.textContent.trim() === copy[index]) return;
      paragraph.textContent = copy[index];
    });
  }


  function fixPersonalName() {
    const about = document.querySelector('#about');
    if (!about) return;
    const portrait = about.querySelector('.about__portrait');
    if (portrait) {
      let info = portrait.querySelector('.profile-card-info');
      if (!info) {
        info = document.createElement('div');
        info.className = 'profile-card-info';
        portrait.append(info);
      }
      let name = info.querySelector('strong');
      if (!name) {
        name = document.createElement('strong');
        info.prepend(name);
      }
      name.textContent = '冯鲸睿';
      let role = info.querySelector('span');
      if (!role) {
        role = document.createElement('span');
        info.append(role);
      }
      if (!role.textContent.trim()) role.textContent = 'Motion Designer';
    }

    const content = about.querySelector('.about__content, .about__copy, .section-heading');
    if (!content) return;
    let heading = about.querySelector('.freem-personal-name');
    if (!heading) {
      heading = document.createElement('h3');
      heading.className = 'freem-personal-name';
      content.insertAdjacentElement('afterbegin', heading);
    }
    heading.textContent = '冯鲸睿';
  }
  function fixDailyAnimationPage() {
    const root = document.getElementById('root');
    if (!root || document.querySelector('.daily-animation-page')) return;

    const videos = Array.from({ length: 21 }, (_, index) => {
      const number = String(index + 1).padStart(2, '0');
      return `./assets/daily-animation/daily-${number}.mp4`;
    });

    const page = document.createElement('main');
    page.className = 'daily-animation-page';
    page.id = 'daily-animation';
    page.innerHTML = `
      <header class="daily-animation-nav">
        <a href="#strengths">Back to portfolio</a>
        <span>EVERYDAY ANIME / 2026</span>
      </header>
      <section class="daily-animation-hero">
        <p>日常动画合集</p>
        <h1>Everyday Anime Collection</h1>
      </section>
      <section class="daily-animation-grid" aria-label="Everyday anime collection videos">
        ${videos.map((src, index) => `
          <article class="daily-animation-card">
            <video src="${src}" muted loop playsinline controls preload="metadata"></video>
            <span>${String(index + 1).padStart(2, '0')}</span>
          </article>
        `).join('')}
      </section>
    `;
    root.append(page);
    updateDailyAnimationRoute();
  }

  function updateDailyAnimationRoute() {
    const isDailyPage = window.location.hash === '#daily-animation';
    document.documentElement.classList.toggle('freem-daily-animation-open', isDailyPage);
    if (isDailyPage) {
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    }
  }

  function fixAvatarPage() {
    const cards = document.querySelectorAll('.avatar-page .avatar-research__grid article');
    cards.forEach((card, index) => {
      const caption = avatarCaptions[index];
      if (!caption || card.querySelector('.freem-avatar-caption')) return;
      card.appendChild(textNode('p', 'freem-avatar-caption', caption));
    });
  }

  function fixEventPage() {
    const hero = document.querySelector('.event-page .event-hero');
    const heroCopy = document.querySelector('.event-page .event-hero__copy');
    if (heroCopy && !heroCopy.querySelector('.freem-event-hero-body')) {
      const body = textNode(
        'p',
        'freem-event-hero-body',
        '根据赛程梳赛事节奏与关键节点，以此确定赛事各阶段的核心情绪基调，为全部赛事动效设计提供情绪、节奏层面的底层依据，让动效始终服务于赛事的情绪表达'
      );
      const action = heroCopy.querySelector('.event-hero__actions');
      if (action) action.insertAdjacentElement('beforebegin', body);
      else heroCopy.appendChild(body);
    }
    const heroBody = heroCopy?.querySelector('.freem-event-hero-body');
    if (heroBody) {
      heroBody.classList.remove('react-bits-scroll-float', 'is-visible');
      heroBody.removeAttribute('data-freem-scroll-float');
      heroBody.removeAttribute('data-freem-scroll-float-original');
      heroBody.textContent = '根据赛程梳赛事节奏与关键节点，以此确定赛事各阶段的核心情绪基调，为全部赛事动效设计提供情绪、节奏层面的底层依据，让动效始终服务于赛事的情绪表达';
    }
    if (hero && !document.querySelector('.freem-event-system')) {
      const section = document.createElement('section');
      section.className = 'freem-event-system';
      section.innerHTML = `
        <p class="section-kicker">抖音赛事机制</p>
        <h2>Event system</h2>
        <p>抖音一年有四个赛事，分别为：地区赛、多元赛、宠粉赛、嘉年华，每个赛事对应不同的上升渠道，比如地区赛对应区县到城市的个人主播比赛；多元赛更多考验的是主播的专业能力；宠粉赛更多是考验粉丝对主播的热度；而最后从前面三个赛事筛选出的主播将进行嘉年华赛事进行决赛</p>
      `;
      hero.insertAdjacentElement('afterend', section);
    }

    const display = document.querySelector('.event-page #event-display');
    const effect = document.querySelector('.event-page .event-effect');
    if (display && effect && display.nextElementSibling !== effect) {
      display.insertAdjacentElement('afterend', effect);
    }

    document.querySelectorAll('#event-display .event-video-card').forEach((card, index) => {
      const data = eventCards[index];
      if (!data) return;
      const copy = card.querySelector('div');
      if (!copy || !mark(copy, `event-card-${index}`)) return;
      const number = copy.querySelector('span')?.textContent || String(index + 1).padStart(2, '0');
      copy.innerHTML = '';
      copy.appendChild(textNode('span', '', number));
      copy.appendChild(textNode('h3', '', data[0]));
      copy.appendChild(textNode('p', 'freem-event-card-copy', data[1]));
    });
  }

  function fixMagicPage() {
    replaceImage(
      '.magic-page .magic-story .magic-story__media img:nth-of-type(1)',
      './assets/magic-case/user-folder/magic-story-battle.png'
    );
    replaceImage(
      '.magic-page .magic-story .magic-story__media img:nth-of-type(2)',
      './assets/magic-case/user-folder/magic-story-portal.png'
    );

    const anchor = document.querySelector('.magic-page .magic-world');
    if (!anchor || document.querySelector('.freem-magic-thinking')) return;
    const section = document.createElement('section');
    section.className = 'freem-magic-thinking';
    section.innerHTML = `
      <div class="freem-thinking-head">
        <p class="section-kicker">Project Thoughts</p>
        <h2>项目思考</h2>
      </div>
      <div class="freem-thinking-grid">
        <article>
          <span>01</span>
          <p>Why make this set of gifts?</p>
          <h3>为什么做这种故事礼物？</h3>
          <div>是基于美国用户对魔法、英雄、冒险叙事的高认知度，把直播礼物从单一道具包装成连续剧情体验。通过“圣杖建立力量源头、恶龙制造危机、主角完成净化”的三段式结构，提升礼物的故事感、仪式感和高价值感，同时顺应 TikTok 礼物动画从道具展示走向电影化、角色化、系列化的趋势；</div>
        </article>
        <article>
          <span>02</span>
          <p>How to evaluate motion effects</p>
          <h3>做动画如何考量？</h3>
          <div>第一支讲圣杖，是建立核心道具价值，让用户知道这不是普通法杖，而是后续剧情的力量源头。<br>第二支讲恶龙侵占国家，是制造冲突和危机感，让礼物从“好看”变成“有故事”。<br>第三支讲主角前往敌人老巢净化邪恶，是情绪高潮，完成英雄登场、对抗、胜利的闭环。<br>这三个礼物可以形成递进消费：低阶先建立世界观，中阶制造冲突，高阶给出最终大场面。对营收来说，它比单个礼物更适合做系列化、连送和高价位礼物包装。</div>
        </article>
      </div>
    `;
    anchor.insertAdjacentElement('beforebegin', section);
  }

  function fixIpPage() {
    const challenge = document.querySelector('.ip-page .ip-challenge');
    if (challenge && !document.querySelector('.freem-ip-background')) {
      const section = document.createElement('section');
      section.className = 'freem-ip-background';
      section.innerHTML = `
        <p class="section-kicker">项目背景</p>
        <h2>Project Background</h2>
        <p>巴西用户贫富差距较大，普遍送的都是低价的小礼物，为了能拉动整体直播礼物营收，从巴西用户喜欢的低价趣味的互动礼物方向发力，输出两套贴近巴西本地化的互动礼物去验证可行性。</p>
      `;
      challenge.insertAdjacentElement('beforebegin', section);
    }
  }

  function fixBrazilMusicPage() {
    const casePage = document.querySelector('main.case-page');
    if (!casePage) return;

    [
      './assets/brazil-music/user-folder/story-01.png',
      './assets/brazil-music/user-folder/story-02.png',
      './assets/brazil-music/user-folder/story-03.png',
      './assets/brazil-music/user-folder/story-04.png'
    ].forEach((src, index) => {
      replaceImage(
        `.case-page .case-story__frames article:nth-of-type(${index + 1}) img`,
        src
      );
    });

    const research = casePage.querySelector('.case-research');
    if (research && !casePage.querySelector('.freem-brazil-research-page')) {
      const section = document.createElement('section');
      section.className = 'freem-brazil-research-page';
      section.innerHTML = `
        <div class="freem-brazil-research-page__left">
          <h2>巴西乐队礼物</h2>
          <div class="freem-brazil-keyword-map">
            <span>多样</span>
            <span>音符</span>
            <span>个性</span>
            <span>大胆</span>
            <span>演出</span>
            <span>自由</span>
            <span>多彩</span>
            <span>反差</span>
            <span>吉他</span>
            <span>手鼓</span>
            <span>歌手</span>
          </div>
        </div>
        <div class="freem-brazil-research-page__right">
          <img class="freem-brazil-research-page__hero" src="./assets/brazil-music/user-folder/research-01.png" alt="Brazil singer research" />
          <div class="freem-brazil-research-page__grid">
            <img src="./assets/brazil-music/user-folder/research-02.png" alt="Brazil street color research" />
            <img src="./assets/brazil-music/user-folder/research-03.png" alt="Brazil neighborhood research" />
            <img src="./assets/brazil-music/user-folder/research-04.png" alt="Brazil city research" />
            <img src="./assets/brazil-music/user-folder/research-05.png" alt="Brazil drum research" />
          </div>
        </div>
      `;
      research.insertAdjacentElement('beforebegin', section);
    }
  }

  function fixInteractivePage() {
    const hero = document.querySelector('.interactive-page .interactive-hero');
    if (hero && !document.querySelector('.freem-interactive-cover')) {
      const cover = document.createElement('section');
      cover.className = 'freem-interactive-cover freem-interactive-cover--image';
      cover.innerHTML = `
        <img class="freem-interactive-cover__image" src="./assets/interactive-case/user-folder/interactive-cover-replacement.png" alt="Brazil Interactive Gift cover" />
        <div class="freem-interactive-cover__chrome">
          <span>2026</span>
          <span>礼物探索</span>
          <span>本地化设计</span>
        </div>
        <div class="freem-interactive-cover__stage">
          <img src="./assets/interactive-case/user-folder/champagne-cover-a.png" alt="Champagne gift" />
          <div class="freem-interactive-cover__title">
            <p><span></span>Brazil <em>Interactive Gift</em></p>
            <strong>巴西本地化互动礼物探索</strong>
          </div>
          <img src="./assets/interactive-case/images/bite-prop.png" alt="Bite gift" />
        </div>
      `;
      hero.insertAdjacentElement('beforebegin', cover);
    }
    removeNode('.interactive-page .interactive-hero');
    removeNode('.interactive-page .freem-interactive-work-display');

    const intro = document.querySelector('.interactive-page .interactive-intro');
    if (intro && !document.querySelector('.freem-interactive-background')) {
      const section = document.createElement('section');
      section.className = 'freem-interactive-background';
      section.innerHTML = `
        <p class="section-kicker">项目背景</p>
        <h2>Project Background</h2>
        <p>巴西用户贫富差距较大，普遍送的都是低价的小礼物，为了能拉动整体直播礼物营收，从巴西用户喜欢的低价趣味的互动礼物方向发力，输出两套贴近巴西本地化的互动礼物去验证可行性。</p>
      `;
      intro.insertAdjacentElement('beforebegin', section);
    }

    const cards = document.querySelectorAll('.interactive-page .interactive-intro__cards article');
    const first = cards[0]?.querySelector('p');
    const second = cards[1]?.querySelector('p');
    if (first) {
      first.textContent = '巴西用户的直播氛围更偏外放、热闹、喜欢玩梗，所以这种“有点无厘头、能逗主播反应”的礼物，适合做高频消费和连送。';
    }
    if (second) {
      second.textContent = '用户想轻松逗主播时，可以送搞怪礼物；想表达支持、庆祝、撑场面时，可以送香槟礼物。它们共同的目标都是让礼物不只是“飘过屏幕”，而是能被主播看到、回应、接话，从而带动更多用户跟送、连送和参与。';
    }
    const showcase = document.querySelector('.interactive-page .interactive-showcase');
    if (showcase && !document.querySelector('.freem-interactive-champagne-display')) {
      const display = document.createElement('section');
      display.className = 'freem-interactive-champagne-display';
      display.innerHTML = `
        <div class="freem-interactive-champagne-display__steps">
          <article>
            <img src="./assets/interactive-case/user-folder/frame-01.png" alt="Champagne setting" />
            <p>设定</p>
          </article>
          <span></span>
          <article>
            <img src="./assets/interactive-case/user-folder/frame-02.png" alt="Champagne white model" />
            <p>初稿白膜</p>
          </article>
          <span></span>
          <article>
            <img src="./assets/interactive-case/user-folder/frame-03.png" alt="Champagne final" />
            <p>成稿</p>
          </article>
        </div>
        <div class="freem-interactive-champagne-display__body">
          <article class="freem-interactive-shot-card">
            <img src="./assets/interactive-case/user-folder/champagne-cover-a.png" alt="Shot 1" />
            <h3>Shot 1*</h3>
            <p>香槟往后移（代表“请”），随后倒好的香槟酒杯摇晃（优雅动作），给主播喝掉</p>
            <small>Move the champagne back, then shake the poured champagne glass and have the host drink it.</small>
          </article>
          <article class="freem-interactive-shot-card">
            <img src="./assets/interactive-case/user-folder/champagne-cover-b.png" alt="Shot 2" />
            <h3>Shot 2*</h3>
            <p>主播喝完出现脸部红晕效果</p>
            <small>The streamer shows a facial flush effect after drinking.</small>
          </article>
          <article class="freem-interactive-phone">
            <video src="./assets/interactive-case/user-folder/champagne-demo.mp4" muted loop playsinline controls></video>
          </article>
        </div>
      `;
      showcase.insertAdjacentElement('afterend', display);
    }
    if (false && showcase && !document.querySelector('.freem-interactive-work-display')) {
      const display = document.createElement('section');
      display.className = 'freem-interactive-work-display';
      display.innerHTML = `
        <div class="freem-interactive-work-display__steps">
          <article>
            <img src="./assets/interactive-case/user-folder/frame-01.png" alt="Champagne setting" />
            <p>设定</p>
          </article>
          <span></span>
          <article>
            <img src="./assets/interactive-case/user-folder/frame-02.png" alt="Champagne white model" />
            <p>初稿白膜</p>
          </article>
          <span></span>
          <article>
            <img src="./assets/interactive-case/user-folder/frame-03.png" alt="Champagne final" />
            <p>成稿</p>
          </article>
        </div>
        <div class="freem-interactive-work-display__body">
          <article class="freem-interactive-shot-card">
            <img src="./assets/interactive-case/user-folder/champagne-cover-a.png" alt="Shot 1" />
            <h3>Shot 1*</h3>
            <p>香槟往后移（代表“请”），随后倒好的香槟酒杯摇晃（优雅动作），给主播喝掉</p>
            <small>Move the champagne back, then shake the poured champagne glass and have the host drink it.</small>
          </article>
          <article class="freem-interactive-shot-card">
            <img src="./assets/interactive-case/user-folder/champagne-cover-b.png" alt="Shot 2" />
            <h3>Shot 2*</h3>
            <p>主播喝完出现脸部红晕效果</p>
            <small>The streamer shows a facial flush effect after drinking.</small>
          </article>
          <article class="freem-interactive-phone">
            <video src="./assets/interactive-case/user-folder/champagne-demo.mp4" muted loop playsinline controls></video>
          </article>
        </div>
      `;
      showcase.insertAdjacentElement('beforebegin', display);
    }
  }

  function fixLovePage() {
    const loveCards = document.querySelectorAll('.love-page .love-challenge-card');
    setText(loveCards[0]?.querySelector('h3'), '如何突出情感建立');
    setText(
      loveCards[0]?.querySelector('p'),
      '本质上是在把活动从“送礼物”包装成一段恋爱进程。节前三个循环不是直接把爱心和玫瑰堆满，而是做成递进叙事：第一阶段是一个人靠近信箱，像“想表达但还没说出口”；第二阶段变成两个人坐在一起，是“心意被回应”；第三阶段进入旋转木马，是“共同约会和甜蜜回忆”。到节中再给出巨大的玫瑰爱心，完成情绪爆发，也更适合作为活动当天的主视觉。'
    );
    setText(loveCards[1]?.querySelector('h3'), '为什么用金色小人');
    setText(
      loveCards[1]?.querySelector('p'),
      '为了弱化具体身份，放大情绪代入。520 活动面对的是很多不同关系：情侣、暧昧、粉丝和主播、用户和陪伴对象。如果角色画得太具体，比如明确性别、年龄、长相、穿搭，用户很容易觉得“这不是我”。现在用半透明、发光、简化五官的方式，反而像一种“情感分身”：谁都可以把自己代入进去。'
    );
    setText(loveCards[2]?.querySelector('h3'), '怎么在情感中发力');
    setText(
      loveCards[2]?.querySelector('p'),
      '“在情感中发力”的关键，是动效节奏跟着关系进展走：先轻、再近、再甜、最后爆发。它让送礼动作不只是触发动画，而像是在推动一段关系从心动走向确认。'
    );
    setText(
      '.love-page .love-intro__body > p',
      '在这个瞬息万变的世界里，心动是最美的奇迹，它是初见乍惊欢，久处亦怦然，它是穿越人海，满载爱意的双向奔赴；本次520重在直面具象的表达爱意，拉近用户和主播的关系，所以用角色来贯穿整条故事线'
    );
    setText(
      '.love-page .love-stagger__item--top > div > p:nth-of-type(2)',
      '在增加整体暧昧氛围的基础上强化了可点击状态的示意'
    );
    setText(
      '.love-page .love-stagger__item--bottom > div > p:nth-of-type(2)',
      '这个开盒动画做成“信箱/礼盒被打开、信件飞出、光效爆开”的形式，是因为它很贴合 520 的情绪：不是单纯抽奖，而是“收到一份心意”。'
    );
    removeNode('.love-page .love-meta-row');

    replaceMediaWithVideo(
      document.querySelector('.love-page .love-display .love-video-card:nth-of-type(4)'),
      './assets/love-case/user-folder/520-mid.mp4',
      'freem-love-video'
    );
    replaceMediaWithVideo(
      document.querySelector('.love-page .love-stagger__item--top'),
      './assets/love-case/user-folder/gift-box-loop.mp4',
      'freem-love-video'
    );
    replaceMediaWithVideo(
      document.querySelector('.love-page .love-stagger__item--bottom'),
      './assets/love-case/user-folder/gift-box-open.mp4',
      'freem-love-video'
    );

    const loveVideoCards = document.querySelectorAll('.love-page .love-display .love-video-card');
    const loveDescriptions = [
      '人物靠近、信件飞来、花朵微动、场景缓慢循环，像是在表现“心意正在酝酿”。这种低频、柔和的运动不会给人强推感，更像暧昧期的试探和期待。',
      '两人同框、牵手，动效开始变得更有方向性和陪伴感：从一个人走向另一个人，从静态等待变成共同移动。',
      '从相互靠近到旋转木马游玩进一步加深情感关系，也表达了恋爱里的甜蜜记忆',
      '节中阶段用玫瑰爱心放大、闪光、花瓣漂浮，把情绪推到最高点。它把前面“靠近、回应、约会”的铺垫集中释放成一个明确的爱的符号，让用户感受到：520 当天不是普通活动上线，而是情感被正式点亮。'
    ];
    loveDescriptions.forEach((text, index) => {
      const card = loveVideoCards[index];
      if (!card) return;
      let body = card.querySelector('.freem-love-card-description');
      if (!body) {
        body = document.createElement('p');
        body.className = 'freem-love-card-description';
        const title = card.querySelector('h3');
        if (title) title.insertAdjacentElement('afterend', body);
        else card.append(body);
      }
      body.textContent = text;
    });
  }

  function fixWorkflowPage() {
    setText(
      '.workflow-page .workflow-background > p:nth-of-type(2)',
      '在传统制作流程中，设计师需要先在 Figma 中手动拆解视觉元素，包括头像环、声波层和 1-4 个装饰元素；再把这些素材导入 AE，分别放进不同等级的合成里，逐个调整声波、粒子、发光等参数；最后再通过 AE 插件批量导出研发所需格式。因此需要做一个 AI 提效工具，把固定流程产品化'
    );

    const background = document.querySelector('.workflow-page .workflow-background');
    if (background && !document.querySelector('.freem-workflow-soundwave-display')) {
      const soundwaveDisplay = document.createElement('section');
      soundwaveDisplay.className = 'workflow-section freem-workflow-soundwave-display';
      soundwaveDisplay.innerHTML = `
        <div class="freem-workflow-soundwave-display__head">
          <p class="section-kicker">WORK DISPLAY</p>
          <h2>麦位声波作品展示</h2>
          <span>Mic Position Sonic Interface Preview</span>
        </div>
        <div class="freem-workflow-soundwave-display__row">
          ${[
            ['./assets/workflow-soundwave/soundwave-03.mp4', '01'],
            ['./assets/workflow-soundwave/soundwave-04.mp4', '02'],
            ['./assets/workflow-soundwave/soundwave-02.mp4', '03'],
            ['./assets/workflow-soundwave/soundwave-01.mp4', '04']
          ].map(([src, index]) => `
            <article class="freem-workflow-soundwave-card">
              <video src="${src}" controls playsinline preload="metadata"></video>
              <span>${index}</span>
            </article>
          `).join('')}
        </div>
      `;
      background.insertAdjacentElement('afterend', soundwaveDisplay);
    }
    setText('.freem-workflow-soundwave-display__head h2', 'Animation Example');
    setText('.freem-workflow-soundwave-display__head span', '麦位声波动画示例');

    const processCards = document.querySelectorAll('.workflow-page .workflow-process .workflow-card--process');
    setText(processCards[0]?.querySelector('p'), '梳理麦位声波的业务场景、等级规则、素材结构和研发交付要求，明确哪些重复流程可以被工具化提效。');
    setText(processCards[1]?.querySelector('p'), '用claude将设计经验转化为可复用规则，包括图层命名、等级差异、动效参数和导出规范。');
    setText(processCards[1]?.querySelector('h3'), '麦位声波提效产品逻辑梳理');
    setText(processCards[2]?.querySelector('h3'), '产品骨架搭建');
    setText(processCards[3]?.querySelector('h3'), '麦位新规范制定');
    [
      ['./assets/workflow-case/marked-process/process-02.png', '麦位声波提效产品逻辑梳理'],
      ['./assets/workflow-case/marked-process/process-03.png', '产品骨架搭建'],
      ['./assets/workflow-case/marked-process/process-04.png', '麦位新规范制定'],
      ['./assets/workflow-case/marked-process/process-05.gif', '动效验证']
    ].forEach(([src, alt], index) => {
      const card = processCards[index + 1];
      if (!card) return;
      let media = card.querySelector('.freem-workflow-process-media');
      if (!media) {
        media = document.createElement('figure');
        media.className = 'freem-workflow-process-media';
        card.append(media);
      }
      media.classList.add('motion-revealed');
      media.style.setProperty('opacity', '1', 'important');
      media.style.setProperty('visibility', 'visible', 'important');
      media.style.setProperty('display', 'block', 'important');
      media.style.setProperty('width', '100%', 'important');
      media.style.setProperty('margin', 'clamp(16px, 1.4vw, 22px) 0 0', 'important');
      media.style.setProperty('padding', '0', 'important');
      media.style.setProperty('border-radius', '10px', 'important');
      media.style.setProperty('overflow', 'hidden', 'important');
      media.style.setProperty('background', 'rgba(0, 0, 0, .28)', 'important');
      media.style.setProperty('transform', 'none', 'important');
      media.style.setProperty('filter', 'none', 'important');
      media.style.setProperty('clip-path', 'none', 'important');
      media.innerHTML = `<img class="motion-revealed" src="${src}" alt="${alt}" loading="lazy" decoding="async" />`;
      const image = media.querySelector('img');
      if (image) {
        image.style.setProperty('opacity', '1', 'important');
        image.style.setProperty('visibility', 'visible', 'important');
        image.style.setProperty('display', 'block', 'important');
        image.style.setProperty('width', '100%', 'important');
        image.style.setProperty('height', 'clamp(160px, 17vw, 260px)', 'important');
        image.style.setProperty('object-fit', 'contain', 'important');
        image.style.setProperty('object-position', 'center center', 'important');
        image.style.setProperty('background', '#fff', 'important');
        image.style.setProperty('transform', 'none', 'important');
        image.style.setProperty('filter', 'none', 'important');
        image.style.setProperty('clip-path', 'none', 'important');
      }
    });
    setText(processCards[2]?.querySelector('p'), 'codex搭建插件核心流程，确定从 Figma 选区识别、参数调节、实时预览到批量导出的操作路径。');
    setText(processCards[3]?.querySelector('p'), '标准化头像环、声波层、装饰元素和粒子的拆分方式，统一尺寸、锚点、层级和等级适配关系。');
    setText(processCards[4]?.querySelector('p'), '在codex内预览不同等级和说话状态，校准声波强度、粒子数量、发光节奏和视觉识别度。');
    setText(processCards[5]?.querySelector('h3'), '部署上线');

    const challengeCards = document.querySelectorAll('.workflow-page .workflow-challenges .workflow-card');
    setText(challengeCards[0]?.querySelector('p'), '一键式操作，在较短时间完成特效制作和导出');
    setText(challengeCards[1]?.querySelector('h3'), '其它业务易操作');
    setText(challengeCards[1]?.querySelector('p'), '可以精准控制一阶到四阶不同等级的麦位特效并导出相应交付格式，并且小白易上手');
    setText(challengeCards[2]?.querySelector('p'), '大量特效粒子和元素动效的可重复性');

    setText('.workflow-page .workflow-display__head h2', '麦位声波AI提效产品搭建');
    setText('.workflow-page .workflow-display__head span', 'AI Efficiency-Boosting Product Setup - Mic Position Sonic');
    document.querySelectorAll('.workflow-page .workflow-showcase__card').forEach((card, index) => {
      if (index > 0) card.remove();
    });
    const showcaseCard = document.querySelector('.workflow-page .workflow-showcase__card');
    if (showcaseCard) {
      removeNode(showcaseCard.querySelector('h3'));
      replaceMediaWithVideo(showcaseCard, './assets/workflow-case/mic-wave-plugin-vibecodin.mp4', 'freem-workflow-main-video');
    }

    const display = document.querySelector('.workflow-page .workflow-display');
    if (display && !document.querySelector('.freem-workflow-event-ai-display')) {
      const eventDisplay = document.createElement('section');
      eventDisplay.className = 'workflow-section freem-workflow-event-ai-display';
      eventDisplay.innerHTML = `
        <div class="freem-workflow-event-ai-display__head">
          <p class="section-kicker">WORK DISPLAY</p>
          <h2>赛事AI提效产品搭建（执行中）</h2>
          <span>Building an AI Product to Boost Event Efficiency</span>
        </div>
        <div class="freem-workflow-event-ai-display__grid">
          <article>
            <span>01</span>
            <h3>一键式视觉生成</h3>
            <p>后续直接导入素材，改颜色、AI改样式和纹理</p>
          </article>
          <article>
            <span>02</span>
            <h3>一键式动态生成</h3>
            <p>视觉调整后切入动态板块，调整色彩和动态样式；调整后一键式导出研发需要格式</p>
          </article>
        </div>
      `;
      display.insertAdjacentElement('afterend', eventDisplay);
      eventDisplay.innerHTML = `
        <div class="freem-workflow-event-ai-display__head">
          <p class="section-kicker">WORK DISPLAY</p>
          <h2>赛事AI提效产品搭建（执行中）</h2>
          <span>Building an AI Product to Boost Event Efficiency</span>
        </div>
        <div class="freem-workflow-event-ai-display__grid">
          <article>
            <span>01</span>
            <h3>一键式视觉生成</h3>
            <p>后续直接导入素材，改颜色、AI改样式和纹理</p>
          </article>
          <article>
            <span>02</span>
            <h3>一键式动态生成</h3>
            <p>视觉调整后切入动态板块，调整色彩和动态样式；调整后一键式导出研发需要格式</p>
          </article>
        </div>
      `;
    }
    setText('.freem-workflow-event-ai-display__head h2', '赛事AI提效产品搭建（执行中）');
    setText('.freem-workflow-event-ai-display__grid article:nth-of-type(1) h3', '一键式视觉生成');
    setText('.freem-workflow-event-ai-display__grid article:nth-of-type(1) p', '后续直接导入素材，改颜色、AI改样式和纹理');
    setText('.freem-workflow-event-ai-display__grid article:nth-of-type(2) h3', '一键式动态生成');
    setText('.freem-workflow-event-ai-display__grid article:nth-of-type(2) p', '视觉调整后切入动态板块，调整色彩和动态样式；调整后一键式导出研发需要格式');
    const eventCards = document.querySelectorAll('.freem-workflow-event-ai-display__grid article');
    replaceMediaWithVideo(eventCards[0], './assets/workflow-case/visual-block.mp4', 'freem-workflow-event-video');
    replaceMediaWithVideo(eventCards[1], './assets/workflow-case/motion-block.mp4', 'freem-workflow-event-video');
  }

  function fixSpringPage() {
    const heroTitle = document.querySelector('.spring-page .spring-hero__copy > span');
    const finaleTitle = document.querySelector('.spring-page .spring-finale__copy > span');
    [heroTitle, finaleTitle].forEach((node) => {
      if (!node) return;
      node.removeAttribute('data-react-bits-scroll-float');
      node.classList.remove('react-bits-scroll-float', 'is-visible');
      node.querySelectorAll('.react-bits-scroll-float-char').forEach((char) => {
        char.replaceWith(document.createTextNode(char.textContent || ''));
      });
    });
    setText(heroTitle, '抖音春节动态设计系统');
    setText(finaleTitle, '2025春节顶部特效动态展示');

    const springCards = document.querySelectorAll('.spring-page .spring-works .spring-card-grid article');
    const springVideos = [
      ['./assets/spring-case/user-folder/spring-01.mp4', '大年初一循环动画'],
      ['./assets/spring-case/user-folder/spring-daily.mp4', '日常KV循环动画'],
      ['./assets/spring-case/user-folder/spring-eve.mp4', '除夕KV循环动画'],
      ['./assets/spring-case/user-folder/spring-05.mp4', '大年初五循环动画'],
      ['./assets/spring-case/user-folder/spring-08.mp4', '大年初八循环动画'],
      ['./assets/spring-case/user-folder/spring-gift.mp4', '节中KV循环视频']
    ];
    springVideos.forEach(([src, title], index) => {
      const card = springCards[index];
      if (!card) return;
      replaceMediaWithVideo(card, src, 'freem-spring-work-video');
      setText(card.querySelector('h3'), title);
    });

    replaceMediaWithVideo(
      document.querySelector('.spring-page .spring-finale .spring-wide-card'),
      './assets/spring-case/user-folder/top-effect.mp4',
      'spring-top-special-video'
    );
  }

  function revealSecondaryPageText(pageSelector) {
    document.querySelectorAll(`${pageSelector} h1, ${pageSelector} h2, ${pageSelector} h3, ${pageSelector} h4, ${pageSelector} p, ${pageSelector} span, ${pageSelector} article, ${pageSelector} section`).forEach((node) => {
      node.classList.remove('motion-pending');
      node.classList.add('motion-revealed');
    });
  }
  function fixEvaluationPage() {
    document.querySelectorAll('.evaluation-page .freem-evaluation-main-title').forEach((node) => node.remove());
    revealSecondaryPageText('.evaluation-page');
  }
  function fixKeyProjectsPage() {
    const groups = document.querySelectorAll('.key-projects-page .key-projects-grid .key-projects-group');
    setText(groups[0]?.querySelector('h2'), '北京快手科技有限公司');
    ensureMainTitle(groups[1], 'freem-key-projects-main-title', '北京字节跳动科技有限公司');
    const byteDanceGroup = groups[1];
    if (byteDanceGroup) {
      let title = byteDanceGroup.querySelector(':scope > h2.freem-key-projects-main-title, :scope > h2');
      if (!title) {
        title = document.createElement('h2');
        title.className = 'freem-key-projects-main-title';
        const subtitle = byteDanceGroup.querySelector(':scope > .key-projects-group__subtitle');
        if (subtitle) subtitle.insertAdjacentElement('beforebegin', title);
        else byteDanceGroup.prepend(title);
      }
      title.textContent = '\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8';
      byteDanceGroup.querySelectorAll('.freem-key-projects-main-title').forEach((node) => {
        if (node !== title) node.remove();
      });
    }
    const labels = Array.from(document.querySelectorAll('.key-projects-page span, .key-projects-page p, .key-projects-page small'));
    labels.forEach((label) => {
      if (label.textContent.trim().toUpperCase() !== 'COMPANY NAME') return;
      const group = label.closest('article, section, div');
      if (!group || !group.textContent.includes('\u5bb6\u56ed\u7cfb\u7edf\u52a8\u6001\u8bbe\u8ba1')) return;
      let title = label.previousElementSibling;
      if (!title || !/^H[1-6]$/.test(title.tagName)) {
        title = document.createElement('h2');
        label.insertAdjacentElement('beforebegin', title);
      }
      title.textContent = '\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8';
    });
    revealSecondaryPageText('.key-projects-page');
  }

  function fixProtoHomePage() {
    const cards = document.querySelectorAll('.proto-page.proto-page--home .proto-section--challenge .proto-info-card');
    const card = cards[0];
    if (card) card.classList.add('freem-proto-card-copy-lower');
    setText(
      '.proto-page.proto-page--home .proto-section--intro .proto-intro__grid > div > p',
      '家园动效要像一个会呼吸的场景，而不是一组同时播放的特效。通过主次层级、错峰节奏、低频循环和状态触发，把动态控制在“看得见生命力，但不会打扰使用”的程度。'
    );
    setText(cards[0]?.querySelector('h3'), '资源量巨大，怎么上线落地');
    setText(cards[0]?.querySelector('p'), '通过引擎定位的方式去还原落地，这样既能让资源包大小降低到合适容量，保证交互体验感，又能保证视觉质量不被压缩');
    setText(cards[1]?.querySelector('h3'), '怎么区分层级关系');
    setText(cards[1]?.querySelector('p'), '我通过“建筑体量递增、视觉中心排布、光效强弱、循环动效复杂度、装饰丰富度”建立层级规则，让每个建筑既能统一在家园系统里，又能清晰表达等级和功能优先级。');
    setText(cards[2]?.querySelector('h3'), '如何做出不让用户审美疲劳的动效');
    setText(cards[2]?.querySelector('p'), '家园动效要像一个会呼吸的场景，而不是一组同时播放的特效。通过主次层级、错峰节奏、低频循环和状态触发，把动态控制在“看得见生命力，但不会打扰使用”的程度。');
    setText(
      '.proto-page.proto-page--home .proto-section--intro .proto-intro__grid > div > p',
      '分散玩法反馈整合为家园成长玩法，塑造“月度追求”，打造稳定空间承载主播成长和粉丝互动，长期实现24小时互动可能；并且将每个建筑设定为不同等级区别，用户达成成就后解锁高等级建筑，强化金主的送礼仪式感和意愿度'
    );
    setText(cards[2]?.querySelector('h3'), '如何做出不让用户审美疲劳的动效');
    setText(cards[2]?.querySelector('p'), '家园动效要像一个会呼吸的场景，而不是一组同时播放的特效。通过主次层级、错峰节奏、低频循环和状态触发，把动态控制在“看得见生命力，但不会打扰使用”的程度。');
    const introCards = document.querySelectorAll('.proto-page.proto-page--home .proto-intro-cards .proto-card-grid article');
    setText(introCards[2]?.querySelector('h3'), '如何将七夕和穿越联系起来');
    setText(introCards[2]?.querySelector('p'), '把“七夕相会”转译成“穿越奔赴”。卡片被设计成一张限定通行证，承载热气球、游轮、私人飞机等不同浪漫出行方式；当用户触发礼物时，光效、粒子和旋转动效像是在打开时空通道，让卡片从静态皮肤变成一次七夕限定旅程。');
    setText(
      '.proto-page.proto-page--home .proto-intro-cards > .proto-card-grid:nth-of-type(2) > article:nth-of-type(3) > h3',
      '如何将七夕和穿越联系起来'
    );
    setText(
      '.proto-page.proto-page--home .proto-intro-cards > .proto-card-grid:nth-of-type(2) > article:nth-of-type(3) > p',
      '把“七夕相会”转译成“穿越奔赴”。卡片被设计成一张限定通行证，承载热气球、游轮、私人飞机等不同浪漫出行方式；当用户触发礼物时，光效、粒子和旋转动效像是在打开时空通道，让卡片从静态皮肤变成一次七夕限定旅程。'
    );
    ensureDisplayBody(
      document.querySelector('.proto-page.proto-page--home .proto-section--display:nth-of-type(6)'),
      'freem-proto-display-body',
      '家园系统里的粉丝营地是将主播粉丝凝聚力转化为具象化空间陈列的独立玩法，核心作用是提升主播粉丝活跃度、强化主粉粘性'
    );
    ensureDisplayBody(
      document.querySelector('.proto-page.proto-page--home .proto-section--display:nth-of-type(7)'),
      'freem-proto-display-body',
      '赛事荣耀是用于展示主播在各类平台赛事中所获成绩的功能模块，核心作用是沉淀主播赛事荣誉、强化主播个人品牌价值'
    );
  }

  function fixIpCopyPage() {
    const cards = document.querySelectorAll('.ip-page .ip-challenge__grid article');
    setText(cards[0]?.querySelector('h3'), '如何打造故事感');
    setText(cards[0]?.querySelector('p'), '该礼物有三套，认识它们、看见它们互动、最后一起进入派对。这样用户不会只觉得这是平台塞进来的 IP，而会觉得它们有关系、有性格、有生活场景。而且也为后面的故事埋下伏笔');
    setText(cards[1]?.querySelector('h3'), '如何让巴西用户喜欢这款IP');
    setText(cards[1]?.querySelector('p'), '第一是文化氛围。巴西给人的大众印象里，海滩、阳光、派对、音乐、热情社交都很强，这套礼物选择沙滩、墨镜、椰树、球、派对这些元素，天然更接近巴西用户熟悉的快乐场景。\n第二是直播场景。海外快手的礼物不是静态 IP 展示，而是要在直播间里快速制造情绪。巴西用户在社交娱乐里通常更接受外放、热闹、幽默的互动感，所以让 IP 打闹、冲撞、开派对，比单纯摆 pose 更容易带动气氛。');
    setText(cards[2]?.querySelector('h3'), '在动效方面要怎么考量');
    setText(cards[2]?.querySelector('p'), '尝试用更讨巧、有趣的动作，这种动作也更适合带气氛。吹了气球、KAKA搞怪、WAII被撞和夸张位移，都是很轻松的喜剧节奏，能在几秒内制造“好玩”的记忆点。它比单纯旋转、发光更像一个小剧场，主播和观众也更容易接话，比如“被砸到了”“好可爱”“在海边玩起来了”。');
    setText(
      '.ip-page .ip-story__copy > p',
      'KAKA 和 WAII 正在度假时悠闲地在海滩上晒太阳。就在这时候，调皮的胖子 WAII 想向 KAKA 展示一口气吹大气球的独门技能，可阴险的 KAKA 怎么可能让他得逞呢？就在 WAII 准备吹气球的时候，轻轻拍了一下气球，砰！WAII 飞了出去，在空中划出一道漂亮的弧线，然后又飞回镜头前凑合着入镜。更不用说当时有多尴尬了……'
    );
  }

  function fixDivinePage() {
    replaceImage('.divine-page .divine-script .divine-script__grid article:nth-of-type(1) img', './assets/divine-case/user-folder/script-01.png');
    replaceImage('.divine-page .divine-script .divine-script__grid article:nth-of-type(2) img', './assets/divine-case/user-folder/script-02.png');
    replaceImage('.divine-page .divine-script .divine-script__grid article:nth-of-type(3) img', './assets/divine-case/user-folder/script-03.png');
    replaceImage('.divine-page .divine-process .divine-process__grid article:nth-of-type(2) img', './assets/divine-case/user-folder/process-02.png');
    replaceImage('.divine-page .divine-process .divine-process__grid article:nth-of-type(3) img', './assets/divine-case/user-folder/process-03.png');
    replaceImage('.divine-page .divine-process .divine-process__grid article:nth-of-type(4) img', './assets/divine-case/user-folder/process-04.png');
    document.querySelectorAll('.divine-page .divine-hero, .divine-page .freem-divine-english-cover, .divine-page .freem-divine-reasons-title, .divine-page .freem-divine-cover-page').forEach((node) => node.remove());
  }
  function fixProtoTitlePage() {
    setText('.proto-page.proto-page--home .proto-section--intro .proto-intro__grid > div > h3', '项目背景');
    replaceImage(
      '.proto-page.proto-page--home .proto-section--display:nth-of-type(5) .proto-media-frame--wide img',
      './assets/proto-home/user-folder/gift-exhibition.gif'
    );
    replaceImage(
      '.proto-page.proto-page--home .proto-section--display:nth-of-type(7) .proto-media-frame--wide img',
      './assets/proto-home/user-folder/event-glory.gif'
    );
    const giftSection = document.querySelector('.proto-page.proto-page--home .proto-section--display:nth-of-type(5)');
    if (giftSection && !giftSection.querySelector('.freem-proto-display-description')) {
      const desc = document.createElement('p');
      desc.className = 'freem-proto-display-description';
      desc.textContent = '礼物展馆是整个家园的核心功能区，它来承担绝大部分的收益，所以这一块展示必须特别明显，点进展馆就会打开礼物展馆二级页查看送礼';
      const media = giftSection.querySelector('.proto-media-frame--wide');
      if (media) media.insertAdjacentElement('afterend', desc);
      else giftSection.append(desc);
    }
  }

  function fixLatestBrowserComments() {
    const casePage = document.querySelector('main.case-page');
    const caseStory = casePage?.querySelector('.case-story');
    if (caseStory && !casePage.querySelector('.freem-brazil-background-page')) {
      const section = document.createElement('section');
      section.className = 'freem-brazil-background-page';
      section.innerHTML = `
        <p class="section-kicker">项目背景</p>
        <h2>Project Background</h2>
        <p>深度本地化驱动消费升级，研究巴西市场“音乐角色”套系礼物设计全链路，探索巴西当地爱好习惯设计出一套刺激用户消费的套系直播礼物，拉动大盘营收</p>
      `;
      caseStory.insertAdjacentElement('beforebegin', section);
    }

    setText(
      '.magic-page .freem-magic-thinking .freem-thinking-grid article:nth-of-type(2) div',
      '三个礼物动画可以做成递进消费：低阶先建立世界观，中阶制造冲突，高阶给出最终大场面故事结尾。对营收来说，它比单个礼物更适合做系列化、连送和高价位礼物包装。'
    );

    [
      '主要讲解圣杖的重要性，为后面的套系故事埋下伏笔',
      '恶龙侵占国家，是制造冲突和危机感，让礼物从“好看”变成“有故事”。',
      '主角前往敌人老巢净化邪恶，是情绪高潮，完成英雄登场、对抗、胜利的闭环。'
    ].forEach((text, index) => {
      const card = document.querySelector(`.magic-page .magic-showcase__grid .magic-video-card:nth-of-type(${index + 1}) > div`);
      if (!card) return;
      let body = card.querySelector('.freem-magic-card-description');
      if (!body) {
        body = document.createElement('p');
        body.className = 'freem-magic-card-description';
        card.append(body);
      }
      body.textContent = text;
    });

    const eventDisplay = document.querySelector('.event-page #event-display');
    if (eventDisplay && !document.querySelector('.freem-event-thinking')) {
      const section = document.createElement('section');
      section.className = 'freem-event-thinking';
      section.innerHTML = `
        <div class="freem-event-thinking__head">
          <p class="section-kicker">项目思考</p>
          <h2>Project Thoughts</h2>
        </div>
        <div class="freem-event-thinking__grid">
          <article>
            <h3>赛事动态情绪定位</h3>
            <span>Event Updates Language</span>
            <p>金秋赛事更偏“城市赛、组队、荣誉晋级”，所以在动效上更要考虑往上升、撞击竞争、闪耀的感觉。家乡赛更偏“地域归属、家乡阵营、全民争峰”，所以动效更强调汇聚感、连接感，强调地域连接和阵营对抗。</p>
          </article>
          <article>
            <h3>Dynamic Visualization</h3>
            <span>抽象规则变成直观视觉</span>
            <p>赛事机制通常很复杂，比如海选、晋级、组队、PK、榜单、奖励。设计难点是不能把规则直接堆文字，而要用奖牌、城市、旋涡、对战卡片、能量光效这些动态视觉符号，让用户快速感受到“竞争正在发生”。</p>
          </article>
        </div>
      `;
      eventDisplay.insertAdjacentElement('beforebegin', section);
    }

    const eventThinking = document.querySelector('.event-page .freem-event-thinking');
    if (eventThinking) {
      setText(eventThinking.querySelector('.freem-event-thinking__head .section-kicker'), '项目思考');
      setText(eventThinking.querySelector('.freem-event-thinking__grid article:nth-of-type(1) h3'), 'Dynamic language');
      setText(eventThinking.querySelector('.freem-event-thinking__grid article:nth-of-type(1) span'), '赛事动态情绪定位');
      setText(eventThinking.querySelector('.freem-event-thinking__grid article:nth-of-type(2) span'), '抽象规则变成直观视觉');
    }

    setText(
      '.ip-page .freem-ip-background > p:nth-of-type(2)',
      '首次将KWAI  品牌IP推向巴西，策略上先用礼物的形式让用户建立品牌认知，后续持续将IP包装成品牌延展输出，让更多的用户了解它们、喜爱它们。'
    );

    const springWorks = document.querySelector('.spring-page .spring-works');
    if (springWorks && !document.querySelector('.spring-page .freem-spring-background-page')) {
      const section = document.createElement('section');
      section.className = 'freem-spring-background-page';
      section.innerHTML = `
        <p class="section-kicker">项目背景</p>
        <h2>Project Background</h2>
        <p>春节期间放大传统新年节日氛围，通过节前氛围预热造势为节中玩法做前置预热和认知传递，节中通过主播赛道分层强化竞争态，推高趣味竞争，拓展营收增量。</p>
      `;
      springWorks.insertAdjacentElement('beforebegin', section);
    }

    const springHero = document.querySelector('.spring-page .spring-hero');
    if (springHero) {
      let figure = document.querySelector('.spring-page .freem-spring-horse-image');
      if (!figure) {
        figure = document.createElement('figure');
        figure.className = 'freem-spring-horse-image';
        figure.innerHTML = '<img src="./assets/spring-case/group-228.png" alt="Spring festival horse" />';
      }
      const image = figure.querySelector('img');
      if (image && image.getAttribute('src') !== './assets/spring-case/group-228.png') {
        image.src = './assets/spring-case/group-228.png';
        image.removeAttribute('srcset');
      }
      figure.removeAttribute('hidden');
      figure.style.removeProperty('display');
      if (figure.parentElement !== springHero) springHero.append(figure);
    }
  }

  function ensureRevenueDataPage(main, className, config) {
    if (!main) return;

    let section = main.querySelector(`.${className}`);
    if (!section) {
      section = document.createElement('section');
      section.className = `freem-revenue-data-page ${className}`;
      main.append(section);
    }

    section.innerHTML = `
      <div class="freem-revenue-data-page__meta">
        <span class="freem-revenue-data-page__globe" aria-hidden="true"></span>
        <span>Revenue data support<br />from live gifting projects</span>
      </div>
      <div class="freem-revenue-data-page__controls" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="freem-revenue-data-page__label">Revenue Data / 营收数据</p>
      <h2>${config.title}</h2>
      <div class="freem-revenue-data-page__stats">
        <article>
          <strong>${config.stats[0].value}</strong>
          <p>${config.stats[0].label}</p>
        </article>
        <article>
          <strong>${config.stats[1].value}</strong>
          <p>${config.stats[1].label}</p>
        </article>
        <article>
          <strong>${config.stats[2].value}</strong>
          <p>${config.stats[2].label}</p>
        </article>
      </div>
    `;
  }

  function fixRevenueDataPages() {
    document.querySelector('main.event-page .freem-revenue-data-page--event')?.remove();
    document.querySelector('main.proto-page.proto-page--home .freem-revenue-data-page--home')?.remove();
    document.querySelector('main.love-page .freem-revenue-data-page--love')?.remove();
    document.querySelector('main.ip-page .freem-revenue-data-page--ip')?.remove();
    return;

    ensureRevenueDataPage(document.querySelector('main.event-page'), 'freem-revenue-data-page--event', {
      title: '后续动态更加强调品牌感，根据不同赛事的个性化内涵，概括提炼专属动效并贯穿核心页面，强化抖音赛事专属记忆点、深化主题情感共鸣',
      stats: [
        { value: '12%', label: '日均增幅' },
        { value: '8.255亿+', label: '营收增量' },
        { value: '122%', label: '目标完成度' }
      ]
    });
    ensureRevenueDataPage(document.querySelector('main.proto-page.proto-page--home'), 'freem-revenue-data-page--home', {
      title: '家园玩法承接主播成长与粉丝互动，形成更稳定的长期营收空间',
      stats: [
        { value: '+2.27%', label: '人均总收入正向趋势增长' },
        { value: '+ 7.4%', label: '展馆 tab 流水' },
        { value: '1368 万', label: '家园总流水 AA 日均' }
      ]
    });
    ensureRevenueDataPage(document.querySelector('main.love-page'), 'freem-revenue-data-page--love', {
      title: '后续持续优化情感动态语言；把214、520、七夕串联在一起，形成从 被看见、被准备 → 到告白心动 → 到长久陪伴。完整的情绪发展链路；以统一的动态语法承接多变的情感主题，让每一次活动都不同，但都属于抖音直播情感活动',
      stats: [
        { value: '1.1亿+', label: '日均增幅' },
        { value: '6.69亿+', label: '全端口总增量' },
        { value: '122%', label: '目标完成度' }
      ]
    });

    document.querySelector('main.ip-page .freem-revenue-data-page--ip')?.remove();
  }

  function fixCardSkinMarkedComments() {
    const card = document.querySelector('.proto-page--card .proto-intro-cards > .proto-card-grid:nth-of-type(2) > article:nth-of-type(3), .proto-page--card .proto-section--challenge .proto-info-card:nth-of-type(3)');
    if (!card) return;
    card.classList.add('freem-card-skin-emotion-chain-card');
    setText(card.querySelector('h3'), '如何将七夕和穿越联系起来');
    setText(
      card.querySelector('p'),
      '后续持续优化情感动态语言；把214、520、七夕串联在一起，形成从 被看见、被准备 → 到告白心动 → 到长久陪伴。完整的情绪发展链路；\n以统一的动态语法承接多变的情感主题，让每一次活动都不同，但都属于抖音直播情感活动。'
    );
  }

  function ensureDivineImageCover() {
    const main = document.querySelector('main.divine-page');
    if (!main) return;
    document.querySelectorAll('.divine-page .divine-hero, .divine-page .freem-divine-english-cover, .divine-page .freem-divine-reasons-title, .divine-page .freem-divine-cover-page').forEach((node) => node.remove());
    let cover = main.querySelector(':scope > .freem-divine-image-cover');
    if (!cover) {
      cover = document.createElement('section');
      cover.className = 'freem-divine-image-cover';
    }
    cover.innerHTML = '<img src="./assets/divine-case/user-folder/divine-cover-full.png" alt="God descends 神相临尘封页" loading="eager" decoding="async" />';
    const nav = main.querySelector(':scope > .case-nav');
    if (nav) {
      nav.insertAdjacentElement('afterend', cover);
    } else {
      main.prepend(cover);
    }
  }
  function ensurePageBackButton() {
    const main = document.querySelector('#root > main');
    const isHomeHero = !!main?.querySelector(':scope > .hero#top');
    const hasOverviewPanel = !!document.querySelector('.overview-panel');
    const isSubPage = !!main && !isHomeHero && !hasOverviewPanel && (main.className || main.querySelector('.case-nav, .daily-overview-nav'));
    let button = document.querySelector('body > .freem-return-prev-page');
    if (!isSubPage) {
      button?.remove();
      return;
    }
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'freem-return-prev-page';
      button.setAttribute('aria-label', '返回上一页');
      button.textContent = '返回上一页';
      button.addEventListener('click', () => {
        const candidates = [...document.querySelectorAll('.case-nav button, .case-nav a, .daily-overview-nav button, .daily-overview-nav a, a, button')]
          .filter((node) => node !== button && /Back to portfolio|返回/.test((node.textContent || '').trim()));
        const target = candidates.find((node) => node.offsetParent !== null) || candidates[0];
        if (target) {
          target.click();
        } else {
          window.history.back();
        }
      });
      document.body.append(button);
    }
  }
  function fixDivineReasonsTitle() {
    const reasons = document.querySelector('.divine-page .divine-reasons');
    if (!reasons) return;
    let title = reasons.querySelector('.freem-divine-reasons-title');
    if (!title) {
      title = document.createElement('div');
      title.className = 'freem-divine-reasons-title';
      reasons.prepend(title);
    }
    title.innerHTML = '<h2>GOD DESCENDS</h2><p>神相临尘</p>';
  }

  function fixEventRevenueMarkedPage() {
    const main = document.querySelector('main.event-page');
    if (!main) return;
    let section = main.querySelector('.freem-event-revenue-marked-page');
    if (!section) {
      section = document.createElement('section');
      section.className = 'freem-event-revenue-marked-page';
      main.append(section);
    }
    section.innerHTML = `
      <div class="freem-event-revenue-marked-page__support">
        <span class="freem-event-revenue-marked-page__globe" aria-hidden="true"></span>
        <p>Revenue data support<br />from live gifting projects</p>
      </div>
      <div class="freem-event-revenue-marked-page__dots" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="freem-event-revenue-marked-page__lead">后续动态更加强调品牌感，根据不同赛事的个性化内涵，概括提炼专属动效并贯穿核心页面，强化抖音赛事专属记忆点、深化主题情感共鸣</p>
      <div class="freem-event-revenue-marked-page__stats">
        <article><strong>8.25亿</strong><span>金秋赛营收增量</span></article>
        <article><strong>11%</strong><span>同比增长</span></article>
        <article><strong>2.69亿</strong><span>收益成本</span></article>
      </div>
    `;
  }

  function ensureHomeTopbarFixedClone() {
    const source = document.querySelector('section#top .hero-topbar');
    if (!source) return;
    let clone = document.querySelector('body > .freem-home-topbar-fixed');
    if (!clone) {
      clone = source.cloneNode(true);
      clone.classList.add('freem-home-topbar-fixed', 'hero-topbar--global');
      clone.removeAttribute('id');
      document.body.append(clone);
    }
    source.style.setProperty('visibility', 'hidden', 'important');
    source.style.setProperty('opacity', '0', 'important');
    source.style.setProperty('pointer-events', 'none', 'important');
    clone.innerHTML = source.innerHTML;
    clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
    clone.setAttribute('data-freem-fixed-home-nav', 'true');

    if (clone.dataset.freemHomeTopbarEntranceReady === 'true') return;
    clone.dataset.freemHomeTopbarEntranceReady = 'true';
    clone.classList.remove('freem-home-topbar-entered');

    const playEntrance = () => {
      if (!clone.isConnected || clone.classList.contains('freem-home-topbar-entered')) return;
      clone.getBoundingClientRect();
      clone.classList.add('freem-home-topbar-entered');
    };

    const waitForLoader = () => {
      if (!document.documentElement.classList.contains('freem-loading') && !document.body.classList.contains('freem-entry-locked')) {
        setTimeout(() => requestAnimationFrame(playEntrance), 1000);
        return;
      }
      setTimeout(waitForLoader, 80);
    };

    waitForLoader();
  }

  let lastActiveMainKey = '';

  function getActiveMain() {
    return Array.from(document.querySelectorAll('#root > main'))
      .find((main) => getComputedStyle(main).display !== 'none') || document.querySelector('#root > main');
  }

  function scrollToTopNow() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function scrollToTopSettled() {
    scrollToTopNow();
    requestAnimationFrame(scrollToTopNow);
    setTimeout(scrollToTopNow, 80);
    setTimeout(scrollToTopNow, 240);
  }

  function isHomeMain(main) {
    return !!main?.querySelector(':scope > .hero#top');
  }

  function activeMainKey() {
    const main = getActiveMain();
    if (!main) return '';
    return `${main.className || 'home'}:${isHomeMain(main) ? 'home' : 'sub'}:${window.location.hash || ''}`;
  }

  function ensureSubPagesStartAtTop() {
    const key = activeMainKey();
    if (!key || key === lastActiveMainKey) return;
    lastActiveMainKey = key;
    const main = getActiveMain();
    if (!main || isHomeMain(main)) return;
    scrollToTopSettled();
  }

  function goToHomeHero() {
    document.querySelector('.overview-panel__close')?.click();
    document.querySelector('.showreel-panel__close')?.click();
    if (document.documentElement.classList.contains('freem-daily-animation-open')) {
      history.replaceState(null, '', `${location.pathname}${location.search}#top`);
      updateDailyAnimationRoute();
    }

    const activeMain = getActiveMain();
    if (activeMain && !isHomeMain(activeMain)) {
      const backButton = Array.from(activeMain.querySelectorAll('.case-nav button, .daily-animation-nav a, button, a'))
        .find((node) => /Back to portfolio|返回/.test((node.textContent || '').trim()));
      if (backButton) backButton.click();
    }

    history.replaceState(null, '', `${location.pathname}${location.search}#top`);
    scrollToTopSettled();
  }

  function ensureFreemBrandHomeLink() {
    document.querySelectorAll('.brand').forEach((brand) => {
      brand.setAttribute('href', '#top');
      brand.setAttribute('data-freem-home-link', 'true');
    });
  }

  function setupGlobalNavigationBehavior() {
    if (window.__freemGlobalNavigationBehaviorReady) return;
    window.__freemGlobalNavigationBehaviorReady = true;
    document.addEventListener('click', (event) => {
      const brand = event.target?.closest?.('.brand');
      if (!brand) return;
      event.preventDefault();
      event.stopPropagation();
      goToHomeHero();
    }, true);
  }

  function setupClickSpark() {
    if (window.__freemClickSparkReady) return;
    window.__freemClickSparkReady = true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'react-bits-click-spark-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.append(canvas);

    const ctx = canvas.getContext('2d');
    const sparks = [];
    let sparkFrame = 0;
    const config = {
      color: '#fff',
      size: 10,
      radius: 70,
      count: 8,
      duration: 400,
      extraScale: 1
    };

    function resizeCanvas() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = Math.round(window.innerWidth * dpr);
      const height = Math.round(window.innerHeight * dpr);
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function easeOut(t) {
      return t * (2 - t);
    }

    function addSpark(event) {
      if (event.button !== 0) return;
      const now = performance.now();
      for (let index = 0; index < config.count; index += 1) {
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          angle: (2 * Math.PI * index) / config.count,
          startTime: now
        });
      }
      requestSparkFrame();
    }

    function draw(timestamp) {
      sparkFrame = 0;
      resizeCanvas();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let index = sparks.length - 1; index >= 0; index -= 1) {
        const spark = sparks[index];
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= config.duration) {
          sparks.splice(index, 1);
          continue;
        }

        const progress = elapsed / config.duration;
        const eased = easeOut(progress);
        const distance = eased * config.radius * config.extraScale;
        const lineLength = config.size * (1 - eased);
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.globalAlpha = Math.max(0, 1 - progress);
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (sparks.length) requestSparkFrame();
    }

    function requestSparkFrame() {
      if (document.hidden || sparkFrame || !sparks.length) return;
      sparkFrame = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('visibilitychange', requestSparkFrame);
    document.addEventListener('pointerdown', addSpark, { passive: true });
  }

  function setupLogoLoopEnhancement() {
    const loop = document.querySelector('#works.cinema-marquee');
    const track = loop?.querySelector('.cinema-marquee__track');
    if (!loop || !track) return;

    loop.classList.add('react-bits-logo-loop');
    track.classList.add('react-bits-logo-loop__track');
    track.style.setProperty('--logoloop-copy-shift', '-16.6667%');
  }

  function setupDecayCardEnhancement() {
    const cards = document.querySelectorAll('#featured .featured-grid > .featured-card--clickable:nth-of-type(-n+4)');
    cards.forEach((card, index) => {
      card.classList.add('react-bits-decay-card');
      card.style.setProperty('--decay-seed', String(index + 1));

      if (card.dataset.freemDecayCardReady === 'true') return;
      card.dataset.freemDecayCardReady = 'true';

      const setIdle = () => {
        card.style.setProperty('--decay-active', '0');
        card.style.setProperty('--decay-pointer-x', '50%');
        card.style.setProperty('--decay-pointer-y', '50%');
        card.style.setProperty('--decay-x', '0px');
        card.style.setProperty('--decay-y', '0px');
        card.style.setProperty('--decay-rz', '0deg');
        card.style.setProperty('--decay-tilt-x', '0deg');
        card.style.setProperty('--decay-tilt-y', '0deg');
      };

      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const percentX = ((event.clientX - rect.left) / rect.width) * 100;
        const percentY = ((event.clientY - rect.top) / rect.height) * 100;
        const centerX = percentX - 50;
        const centerY = percentY - 50;
        const moveX = Math.max(-18, Math.min(18, centerX * 0.22));
        const moveY = Math.max(-16, Math.min(16, centerY * 0.18));
        card.style.setProperty('--decay-active', '1');
        card.style.setProperty('--decay-pointer-x', `${percentX.toFixed(2)}%`);
        card.style.setProperty('--decay-pointer-y', `${percentY.toFixed(2)}%`);
        card.style.setProperty('--decay-x', `${moveX.toFixed(2)}px`);
        card.style.setProperty('--decay-y', `${moveY.toFixed(2)}px`);
        card.style.setProperty('--decay-rz', `${(centerX * 0.035).toFixed(2)}deg`);
        card.style.setProperty('--decay-tilt-x', `${(centerX * 0.09).toFixed(2)}deg`);
        card.style.setProperty('--decay-tilt-y', `${(-centerY * 0.08).toFixed(2)}deg`);
      }, { passive: true });

      card.addEventListener('pointerleave', setIdle, { passive: true });
      setIdle();
    });
  }

  function setupProfileCardEnhancement() {
    const portrait = document.querySelector('#about .about__portrait');
    if (!portrait) return;
    portrait.classList.add('react-bits-profile-card', 'freem-profile-card-enhanced');

    ['profile-card-behind', 'profile-card-shine', 'profile-card-glare'].forEach((className) => {
      if (!portrait.querySelector(`:scope > .${className}`)) {
        const layer = document.createElement('span');
        layer.className = className;
        layer.setAttribute('aria-hidden', 'true');
        portrait.prepend(layer);
      }
    });

    if (portrait.dataset.freemProfileCardReady === 'true') return;
    portrait.dataset.freemProfileCardReady = 'true';

    const setCenter = () => {
      portrait.classList.remove('freem-profile-card-tracking');
      portrait.style.setProperty('--profile-card-opacity', '0');
      portrait.style.setProperty('--profile-pointer-x', '50%');
      portrait.style.setProperty('--profile-pointer-y', '50%');
      portrait.style.setProperty('--profile-rotate-x', '0deg');
      portrait.style.setProperty('--profile-rotate-y', '0deg');
    };

    let profileFrame = 0;
    let latestPointerEvent = null;
    const applyPointerTilt = () => {
      profileFrame = 0;
      const event = latestPointerEvent;
      if (!event) return;

      const rect = portrait.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const percentX = ((event.clientX - rect.left) / rect.width) * 100;
      const percentY = ((event.clientY - rect.top) / rect.height) * 100;
      const centerX = percentX - 50;
      const centerY = percentY - 50;
      portrait.classList.add('freem-profile-card-tracking');
      portrait.style.setProperty('--profile-card-opacity', '1');
      portrait.style.setProperty('--profile-pointer-x', `${percentX.toFixed(2)}%`);
      portrait.style.setProperty('--profile-pointer-y', `${percentY.toFixed(2)}%`);
      portrait.style.setProperty('--profile-rotate-x', `${(-centerY / 6.2).toFixed(2)}deg`);
      portrait.style.setProperty('--profile-rotate-y', `${(centerX / 6.8).toFixed(2)}deg`);
    };

    portrait.addEventListener('pointermove', (event) => {
      latestPointerEvent = event;
      if (!profileFrame) {
        profileFrame = requestAnimationFrame(applyPointerTilt);
      }
    }, { passive: true });

    portrait.addEventListener('pointerenter', () => {
      portrait.classList.add('freem-profile-card-tracking');
      portrait.style.setProperty('--profile-card-opacity', '1');
    }, { passive: true });
    portrait.addEventListener('pointerleave', setCenter, { passive: true });
    setCenter();
  }

  function setupStrengthsScrollStack() {
    const section = document.querySelector('#strengths');
    const grid = section?.querySelector('.strength-grid');
    if (!section || !grid) return;
    const cards = Array.from(grid.querySelectorAll('.strength-card')).slice(0, 3);
    if (cards.length < 3) return;

    section.classList.add('react-bits-scroll-stack');
    grid.classList.add('react-bits-scroll-stack-inner');
    cards.forEach((card, index) => {
      card.classList.add('react-bits-scroll-stack-card');
      card.classList.remove('motion-pending');
      card.classList.add('motion-revealed');
      card.style.setProperty('--stack-index', String(index));
      card.style.setProperty('--stack-z', String(10 + index));
      if (!card.querySelector(':scope > .freem-stack-card-art')) {
        const art = document.createElement('span');
        art.className = 'freem-stack-card-art';
        art.setAttribute('aria-hidden', 'true');
        art.innerHTML = '<i></i><i></i><i></i>';
        card.append(art);
      }
    });

    if (window.__freemStrengthsScrollStackReady) return;
    window.__freemStrengthsScrollStackReady = true;

    let stackProgress = 0;
    let targetStackProgress = 0;
    let stackFrame = 0;
    let stackZone = 'above';

    function smooth(value) {
      const t = Math.max(0, Math.min(1, value));
      return t * t * (3 - 2 * t);
    }

    const stopStackFrame = () => {
      if (!stackFrame) return;
      cancelAnimationFrame(stackFrame);
      stackFrame = 0;
    };

    const renderStack = () => {
      const viewportHeight = window.innerHeight || 1;
      const stageHeight = Math.max(1, grid.getBoundingClientRect().height || section.offsetHeight || viewportHeight);
      const riseDistance = stageHeight * 0.92;
      const firstCard = cards[0];
      const firstRevealDistance = Math.max(210, (firstCard?.getBoundingClientRect().height || stageHeight) * 0.66);

      cards.forEach((card, index) => {
        let y = 0;
        if (index === 0) {
          y = (1 - smooth(stackProgress / 0.24)) * firstRevealDistance;
        }
        if (index === 1) {
          y = (1 - smooth((stackProgress - 0.24) / 0.48)) * riseDistance + 24;
        }
        if (index === 2) {
          y = (1 - smooth((stackProgress - 0.58) / 0.40)) * riseDistance + 48;
        }
        const isWaiting = index > 0 && y > riseDistance * 0.82;
        card.style.setProperty('--stack-x', '0px');
        card.style.setProperty('--stack-y', `${y.toFixed(2)}px`);
        card.style.setProperty('--stack-scale', '1');
        card.style.setProperty('--stack-rotate', '0deg');
        card.style.setProperty('--stack-blur', '0px');
        card.style.setProperty('--stack-opacity', index === 0 || !isWaiting ? '1' : '0');
      });
    };

    const requestStackFrame = () => {
      if (stackFrame) return;
      const tick = () => {
        const distance = targetStackProgress - stackProgress;
        if (Math.abs(distance) < 0.001) {
          stackProgress = targetStackProgress;
          stackFrame = 0;
          renderStack();
          return;
        }
        stackProgress += distance * 0.14;
        renderStack();
        stackFrame = requestAnimationFrame(tick);
      };
      stackFrame = requestAnimationFrame(tick);
    };

    const isSectionActive = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      return rect.top <= viewportHeight * 0.34 && rect.bottom >= viewportHeight * 0.28;
    };

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      let rendered = false;
      let nextZone = 'inside';
      if (rect.top > viewportHeight * 0.72) nextZone = 'above';
      if (rect.bottom < viewportHeight * 0.24) nextZone = 'below';

      if (nextZone === 'above' && stackZone !== 'above') {
        stopStackFrame();
        stackProgress = 0;
        targetStackProgress = 0;
        renderStack();
        rendered = true;
      }
      if (nextZone === 'below' && stackZone !== 'below') {
        stopStackFrame();
        stackProgress = 1;
        targetStackProgress = 1;
        renderStack();
        rendered = true;
      }
      if (nextZone === 'inside' && stackZone === 'above') {
        stopStackFrame();
        stackProgress = 0;
        targetStackProgress = 0;
        renderStack();
        rendered = true;
      }
      if (nextZone === 'inside' && stackZone === 'below') {
        stopStackFrame();
        stackProgress = 1;
        targetStackProgress = 1;
        renderStack();
        rendered = true;
      }
      stackZone = nextZone;
      if (!rendered) renderStack();
    };

    const handleWheel = (event) => {
      if (!isSectionActive()) return;
      const delta = event.deltaY || 0;
      if ((delta > 0 && targetStackProgress < 1) || (delta < 0 && targetStackProgress > 0)) {
        event.preventDefault();
        const step = Math.max(-0.035, Math.min(0.035, delta / 5200));
        targetStackProgress = Math.max(0, Math.min(1, targetStackProgress + step));
        requestStackFrame();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    requestAnimationFrame(update);
  }

  function setupDailyAnimationCircularGallery() {
    const grid = document.querySelector('.daily-animation-page .daily-animation-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.daily-animation-card'));
    if (!cards.length) return;
    grid.classList.add('react-bits-circular-gallery');
    cards.forEach((card, index) => {
      card.classList.add('react-bits-circular-gallery-item');
      card.style.setProperty('--cg-index', String(index));
    });

    if (grid.dataset.freemCircularGalleryReady === 'true') return;
    grid.dataset.freemCircularGalleryReady = 'true';
    grid.tabIndex = 0;
    grid.setAttribute('role', 'region');
    grid.setAttribute('aria-label', 'Circular daily animation gallery');

    const state = { target: 0, current: 0, dragging: false, startX: 0, startTarget: 0 };
    let galleryFrame = 0;

    const isGalleryActive = () => !document.hidden && window.location.hash === '#daily-animation';

    const render = () => {
      galleryFrame = 0;
      if (!isGalleryActive()) return;
      state.current += (state.target - state.current) * 0.055;
      const count = cards.length;
      cards.forEach((card, index) => {
        let offset = index - state.current;
        while (offset > count / 2) offset -= count;
        while (offset < -count / 2) offset += count;
        const clamped = Math.max(-4.5, Math.min(4.5, offset));
        const angle = clamped * 13.5;
        const x = clamped * 350;
        const y = Math.abs(clamped) * 18;
        const z = -Math.abs(clamped) * 120;
        const scale = Math.max(0.68, 1 - Math.abs(clamped) * 0.07);
        const opacity = Math.max(0, 1 - Math.max(0, Math.abs(clamped) - 2.75) * 0.48);
        card.style.setProperty('--cg-x', `${x.toFixed(2)}px`);
        card.style.setProperty('--cg-y', `${y.toFixed(2)}px`);
        card.style.setProperty('--cg-z', `${z.toFixed(2)}px`);
        card.style.setProperty('--cg-r', `${angle.toFixed(2)}deg`);
        card.style.setProperty('--cg-scale', scale.toFixed(3));
        card.style.setProperty('--cg-opacity', opacity.toFixed(3));
        card.style.setProperty('--cg-z-index', String(Math.round(100 - Math.abs(clamped) * 10)));
      });
      if (Math.abs(state.target - state.current) > 0.001 || state.dragging) {
        requestGalleryFrame();
      }
    };

    const requestGalleryFrame = () => {
      if (!isGalleryActive() || galleryFrame) return;
      galleryFrame = requestAnimationFrame(render);
    };

    grid.addEventListener('wheel', (event) => {
      event.preventDefault();
      state.target += Math.sign(event.deltaY || event.deltaX) * 0.8;
      requestGalleryFrame();
    }, { passive: false });

    grid.addEventListener('pointerdown', (event) => {
      state.dragging = true;
      state.startX = event.clientX;
      state.startTarget = state.target;
      grid.classList.add('is-dragging');
      grid.setPointerCapture?.(event.pointerId);
      requestGalleryFrame();
    });
    grid.addEventListener('pointermove', (event) => {
      if (!state.dragging) return;
      state.target = state.startTarget - (event.clientX - state.startX) / 180;
      requestGalleryFrame();
    }, { passive: true });
    const endDrag = (event) => {
      state.dragging = false;
      state.target = Math.round(state.target);
      grid.classList.remove('is-dragging');
      if (event?.pointerId) grid.releasePointerCapture?.(event.pointerId);
      requestGalleryFrame();
    };
    grid.addEventListener('pointerup', endDrag);
    grid.addEventListener('pointercancel', endDrag);
    grid.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        state.target += 1;
        requestGalleryFrame();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        state.target -= 1;
        requestGalleryFrame();
      }
    });

    window.addEventListener('hashchange', requestGalleryFrame);
    document.addEventListener('visibilitychange', requestGalleryFrame);
    requestGalleryFrame();
  }

  function setupEvaluationAnimatedContent() {
    const page = document.querySelector('main.evaluation-page');
    const grid = page?.querySelector('.evaluation-grid');
    const cards = Array.from(grid?.querySelectorAll('.evaluation-card') || []).slice(0, 3);
    if (!page || !grid || cards.length < 3) return;

    const animateCard = (card) => {
      if (card.dataset.freemEvaluationSlideDone === 'true') return;
      card.dataset.freemEvaluationSlideDone = 'true';
      card.classList.add('is-visible');

      const duration = 900;
      const delay = Number(card.dataset.freemEvaluationSlideDelay || 0) * 1000;
      const start = performance.now() + delay;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!card.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;
        card.style.setProperty('visibility', 'visible', 'important');
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          card.style.setProperty('opacity', '1', 'important');
          card.style.removeProperty('transform');
          card.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    cards.forEach((card, index) => {
      card.classList.add('react-bits-evaluation-animated-content');
      card.dataset.freemEvaluationSlideDelay = (0.12 + index * 0.12).toFixed(2);
      if (card.dataset.freemEvaluationSlideReady === 'true') return;
      card.dataset.freemEvaluationSlideReady = 'true';
      card.style.setProperty('visibility', 'visible', 'important');
      card.style.setProperty('opacity', '1', 'important');
      card.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      card.style.setProperty('will-change', 'transform, opacity');
    });

    const playCards = () => {
      cards.forEach((card) => animateCard(card));
    };

    const gridRect = grid.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (gridRect.top < viewportHeight * 0.92 && gridRect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(playCards);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        playCards();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(grid);
  }

  function setupKeyProjectsSlideCards() {
    const page = document.querySelector('main.key-projects-page');
    const grid = page?.querySelector('.key-projects-grid');
    const cards = Array.from(grid?.querySelectorAll('.key-projects-group') || []);
    if (!page || !grid || !cards.length) return;

    const animateCard = (card) => {
      if (card.dataset.freemKeyProjectSlideDone === 'true') return;
      card.dataset.freemKeyProjectSlideDone = 'true';
      card.classList.add('is-visible');

      const duration = 900;
      const delay = Number(card.dataset.freemKeyProjectSlideDelay || 0) * 1000;
      const start = performance.now() + delay;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!card.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;
        card.style.setProperty('visibility', 'visible', 'important');
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          card.style.setProperty('opacity', '1', 'important');
          card.style.removeProperty('transform');
          card.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    cards.forEach((card, index) => {
      card.classList.add('react-bits-key-project-slide-card');
      card.dataset.freemKeyProjectSlideDelay = (0.1 + index * 0.14).toFixed(2);
      if (card.dataset.freemKeyProjectSlideReady === 'true') return;
      card.dataset.freemKeyProjectSlideReady = 'true';
      card.style.setProperty('visibility', 'visible', 'important');
      card.style.setProperty('opacity', '1', 'important');
      card.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      card.style.setProperty('will-change', 'transform, opacity');
    });

    const playCards = () => {
      cards.forEach((card) => animateCard(card));
    };

    const gridRect = grid.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (gridRect.top < viewportHeight * 0.92 && gridRect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(playCards);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        playCards();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(grid);
  }

  function setupAboutIntroEntrances() {
    const about = document.querySelector('#about');
    if (!about) return;

    const portrait = about.querySelector('.about__portrait');
    const name = about.querySelector('.freem-personal-name');
    if (!portrait && !name) return;

    if (name) {
      name.classList.add('freem-about-name-entrance', 'freem-shiny-text');
      if (name.dataset.freemAboutNameEntranceReady !== 'true') {
        name.dataset.freemAboutNameEntranceReady = 'true';
        name.classList.remove('freem-about-name-in');
      }
    }

    if (portrait && portrait.dataset.freemAboutPortraitSlideReady !== 'true') {
      portrait.dataset.freemAboutPortraitSlideReady = 'true';
      portrait.classList.add('freem-about-portrait-slide-card');
      portrait.style.setProperty('visibility', 'visible', 'important');
      portrait.style.setProperty('opacity', '1', 'important');
      portrait.style.setProperty('transform', `translate3d(-${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      portrait.style.setProperty('will-change', 'transform, opacity');
    }

    const animatePortrait = () => {
      if (!portrait || portrait.dataset.freemAboutPortraitSlideDone === 'true') return;
      portrait.dataset.freemAboutPortraitSlideDone = 'true';

      const duration = 900;
      const start = performance.now() + 80;
      const startX = -Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!portrait.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;

        portrait.style.setProperty('visibility', 'visible', 'important');
        portrait.style.setProperty('opacity', '1', 'important');
        portrait.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          portrait.style.setProperty('opacity', '1', 'important');
          portrait.style.removeProperty('transform');
          portrait.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    const reveal = () => {
      if (name) name.classList.add('freem-about-name-in', 'is-visible');
      animatePortrait();
    };

    const aboutRect = about.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (aboutRect.top < viewportHeight * 0.86 && aboutRect.bottom > viewportHeight * 0.12) {
      requestAnimationFrame(reveal);
      return;
    }

    if (about.dataset.freemAboutIntroEntranceObserver === 'true') return;
    about.dataset.freemAboutIntroEntranceObserver = 'true';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.14) return;
        reveal();
        observer.disconnect();
      });
    }, { threshold: [0.14], rootMargin: '0px 0px -16% 0px' });

    observer.observe(about);
  }

  function setupAboutBorderGlowCard() {
    const card = document.querySelector('#about .about__cards .stat-card:first-of-type');
    if (!card) return;

    card.classList.add('react-bits-border-glow-card', 'freem-self-evaluation-border-glow');
    if (!card.querySelector(':scope > .edge-light')) {
      const edge = document.createElement('span');
      edge.className = 'edge-light';
      edge.setAttribute('aria-hidden', 'true');
      card.prepend(edge);
    }

    if (card.dataset.freemBorderGlowReady === 'true') return;
    card.dataset.freemBorderGlowReady = 'true';
    card.style.setProperty('--edge-proximity', '0');
    card.style.setProperty('--cursor-angle', '45deg');

    const getCenter = () => {
      const rect = card.getBoundingClientRect();
      return { rect, cx: rect.width / 2, cy: rect.height / 2 };
    };

    const getEdgeProximity = (x, y) => {
      const { cx, cy } = getCenter();
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;
      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);
      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    };

    const getCursorAngle = (x, y) => {
      const { cx, cy } = getCenter();
      const dx = x - cx;
      const dy = y - cy;
      if (dx === 0 && dy === 0) return 0;
      let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;
      return degrees;
    };

    let frame = 0;
    let latest = null;
    const updateGlow = () => {
      frame = 0;
      if (!latest) return;
      const rect = card.getBoundingClientRect();
      const x = latest.clientX - rect.left;
      const y = latest.clientY - rect.top;
      const edge = getEdgeProximity(x, y);
      const angle = getCursorAngle(x, y);
      card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
      card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
    };

    card.addEventListener('pointermove', (event) => {
      latest = event;
      if (!frame) frame = requestAnimationFrame(updateGlow);
    }, { passive: true });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--edge-proximity', '0');
    }, { passive: true });

    card.classList.add('sweep-active');
    card.style.setProperty('--edge-proximity', '100');
    card.style.setProperty('--cursor-angle', '110deg');
    setTimeout(() => {
      if (!card.matches(':hover')) card.style.setProperty('--edge-proximity', '0');
      card.classList.remove('sweep-active');
    }, 1400);
  }

  function setupAboutSplitText() {
    const targets = [
      document.querySelector('section#about .freem-personal-name'),
      document.querySelector('section#about p.about__lead'),
      document.querySelector('section.case-second .case-second__title > p'),
      document.querySelector('main.case-page .case-hero__copy > p'),
      document.querySelector('main.case-page .case-hero__copy > .case-hero__credits'),
      document.querySelector('main.case-page .freem-brazil-background-page > p:nth-of-type(2)'),
      document.querySelector('main.case-page .case-research > div > p'),
      document.querySelector('main.case-page .case-story__copy'),
      document.querySelector('main.case-page .case-process > .case-section__head'),
      document.querySelector('main.case-page .case-process__head > p:nth-of-type(2)'),
      document.querySelector('section#avatar-brief .avatar-brief__background'),
      document.querySelector('main.avatar-page .avatar-research__head'),
      document.querySelector('main.ip-page .ip-hero__copy > p'),
      document.querySelector('main.ip-page .freem-ip-background > p:nth-of-type(2)'),
      document.querySelector('main.ip-page .ip-challenge__head'),
      document.querySelector('main.ip-page .ip-story__copy'),
      document.querySelector('main.ip-page .ip-gallery > p'),
      document.querySelector('main.event-page .freem-event-system > p:nth-of-type(2)'),
      document.querySelector('main.interactive-page .freem-interactive-background'),
      document.querySelector('main.interactive-page .interactive-intro__head'),
      document.querySelector('main.magic-page .magic-hero__copy > p'),
      document.querySelector('main.magic-page .magic-hero__copy > .magic-hero__credits'),
      document.querySelector('main.magic-page .magic-story__copy > p:nth-of-type(2)'),
      document.querySelector('main.magic-page .magic-process__head'),
      document.querySelector('main.divine-page .divine-intro > div > p:nth-of-type(2)'),
      document.querySelector('main.divine-page .divine-process__copy > p:nth-of-type(2)'),
      document.querySelector('main.proto-page.proto-page--card .proto-hero__content'),
      document.querySelector('main.love-page .love-intro__body'),
      document.querySelector('main.love-page .love-stagger__item--bottom > div')
    ].filter(Boolean);
    if (!targets.length) return;

    const restoreScrollFloat = (node) => {
      if (!node.classList.contains('react-bits-scroll-float')) return;
      const original = node.getAttribute('data-freem-scroll-float-original');
      if (original) {
        node.innerHTML = original;
      } else {
        node.textContent = node.textContent || '';
      }
      node.classList.remove('react-bits-scroll-float', 'is-visible');
      node.removeAttribute('data-freem-scroll-float');
      node.removeAttribute('data-freem-scroll-float-original');
    };

    const splitNode = (node) => {
      const isMarkedIpBackground = node.matches?.('main.ip-page .freem-ip-background > p:nth-of-type(2)');
      const isMarkedBrazilBackground = node.matches?.('main.case-page .freem-brazil-background-page > p:nth-of-type(2)');
      const isMarkedDivineIntro = node.matches?.('main.divine-page .divine-intro > div > p:nth-of-type(2)');
      const isMarkedDivineProcess = node.matches?.('main.divine-page .divine-process__copy > p:nth-of-type(2)');
      const isMarkedEventSystem = node.matches?.('main.event-page .freem-event-system > p:nth-of-type(2)');
      const shouldRefreshMarkedIpBackground =
        isMarkedIpBackground && node.dataset.freemIpBackgroundEntranceVersion !== '20260711-about-body';
      const shouldRefreshMarkedBrazilBackground =
        isMarkedBrazilBackground && node.dataset.freemBrazilBackgroundEntranceVersion !== '20260713-about-body';
      const shouldRefreshMarkedDivineText =
        (isMarkedDivineIntro || isMarkedDivineProcess) && node.dataset.freemDivineTextEntranceVersion !== '20260713-about-body';
      const shouldRefreshMarkedEventText =
        isMarkedEventSystem && node.dataset.freemEventTextEntranceVersion !== '20260713-about-body';

      if (!shouldRefreshMarkedIpBackground && !shouldRefreshMarkedBrazilBackground && !shouldRefreshMarkedDivineText && !shouldRefreshMarkedEventText && node.dataset.freemSplitTextReady === 'true' && node.querySelector('.react-bits-split-char')) return;
      if (node.dataset.freemSplitTextOriginal) {
        node.innerHTML = node.dataset.freemSplitTextOriginal;
      }
      node.classList.remove('react-bits-split-text', 'react-bits-about-split-text', 'is-visible');
      restoreScrollFloat(node);
      node.dataset.freemSplitTextReady = 'true';
      node.dataset.freemSplitTextOriginal = node.innerHTML;

      let index = 0;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
        acceptNode(textNode) {
          return textNode.nodeValue && textNode.nodeValue.trim()
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      });
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);

      textNodes.forEach((textNode) => {
        const frag = document.createDocumentFragment();
        Array.from(textNode.nodeValue.replace(/\r?\n/g, ' ')).forEach((char) => {
          const span = document.createElement('span');
          if (char === ' ') {
            span.className = 'react-bits-split-space';
            span.textContent = ' ';
          } else {
            span.className = 'react-bits-split-char';
            span.textContent = char;
            span.style.setProperty('--split-index', String(index));
            index += 1;
          }
          frag.appendChild(span);
        });
        textNode.replaceWith(frag);
      });

      node.classList.add('react-bits-split-text', 'react-bits-about-split-text');
      if (isMarkedIpBackground) {
        node.classList.add('freem-ip-background-body-entrance');
        node.dataset.freemIpBackgroundEntranceVersion = '20260711-about-body';
      }
      if (isMarkedBrazilBackground) {
        node.classList.add('freem-brazil-background-body-entrance');
        node.dataset.freemBrazilBackgroundEntranceVersion = '20260713-about-body';
      }
      if (isMarkedDivineIntro || isMarkedDivineProcess) {
        node.classList.add('freem-divine-body-entrance');
        node.dataset.freemDivineTextEntranceVersion = '20260713-about-body';
      }
      if (isMarkedEventSystem) {
        node.classList.add('freem-event-system-body-entrance');
        node.dataset.freemEventTextEntranceVersion = '20260713-about-body';
      }
    };

    const reveal = (node) => {
      node.classList.add('is-visible');
    };

    const isInRevealZone = (node) => {
      const rect = node.getBoundingClientRect();
      const height = window.innerHeight || document.documentElement.clientHeight || 800;
      return rect.bottom > 0 && rect.top < height * 0.9;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.1) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: [0.1], rootMargin: '0px 0px -24% 0px' });

    targets.forEach((node) => {
      splitNode(node);
      if (isInRevealZone(node)) {
        reveal(node);
        return;
      }
      observer.observe(node);
    });
  }

  function setupMagicStoryBlockEntrance() {
    const media = document.querySelector('main.magic-page .magic-story__media');
    if (!media || media.dataset.freemMagicStoryBlockEntranceReady === 'true') return;
    media.dataset.freemMagicStoryBlockEntranceReady = 'true';

    const reveal = () => {
      media.classList.add('freem-magic-story-block-in');
    };

    const rect = media.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(reveal);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.16) return;
        reveal();
        observer.disconnect();
      });
    }, { threshold: [0.16], rootMargin: '0px 0px -14% 0px' });

    observer.observe(media);
  }

  function setupExperienceSlideCards() {
    const list = document.querySelector('section#about .experience-list');
    const cards = Array.from(list?.querySelectorAll('.experience-item') || []).slice(0, 2);
    if (!list || cards.length < 2) return;

    const animateCard = (card) => {
      if (card.dataset.freemExperienceSlideDone === 'true') return;
      card.dataset.freemExperienceSlideDone = 'true';

      const duration = 900;
      const delay = Number(card.dataset.freemExperienceSlideDelay || 0) * 1000;
      const start = performance.now() + delay;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!card.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;

        card.style.setProperty('visibility', 'visible', 'important');
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          card.style.setProperty('opacity', '1', 'important');
          card.style.removeProperty('transform');
          card.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    cards.forEach((card, index) => {
      card.classList.add('react-bits-experience-slide-card');
      card.dataset.freemExperienceSlideDelay = (0.08 + index * 0.14).toFixed(2);
      if (card.dataset.freemExperienceSlideReady === 'true') return;
      card.dataset.freemExperienceSlideReady = 'true';
      card.style.setProperty('visibility', 'visible', 'important');
      card.style.setProperty('opacity', '1', 'important');
      card.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      card.style.setProperty('will-change', 'transform');
    });

    const playCards = () => cards.forEach((card) => animateCard(card));
    const rect = list.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(playCards);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        playCards();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(list);
  }

  function setupFeaturedSlideCards() {
    const grid = document.querySelector('#featured .featured-grid');
    const cards = Array.from(grid?.children || []);
    if (!grid || !cards.length) return;

    const animateCard = (card) => {
      if (card.dataset.freemFeaturedSlideDone === 'true') return;
      card.dataset.freemFeaturedSlideDone = 'true';

      const duration = 900;
      const delay = Number(card.dataset.freemFeaturedSlideDelay || 0) * 1000;
      const start = performance.now() + delay;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!card.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;

        card.style.setProperty('visibility', 'visible', 'important');
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          card.style.setProperty('opacity', '1', 'important');
          card.style.removeProperty('transform');
          card.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    cards.forEach((card, index) => {
      card.classList.add('react-bits-featured-slide-card');
      card.dataset.freemFeaturedSlideDelay = (0.06 + index * 0.1).toFixed(2);
      if (card.dataset.freemFeaturedSlideReady === 'true') return;
      card.dataset.freemFeaturedSlideReady = 'true';
      card.style.setProperty('visibility', 'visible', 'important');
      card.style.setProperty('opacity', '1', 'important');
      card.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      card.style.setProperty('will-change', 'transform');
    });

    const playCards = () => cards.forEach((card) => animateCard(card));
    const rect = grid.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(playCards);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        playCards();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(grid);
  }

  function setupFeaturedTiltedCards() {
    const cards = [
      ...Array.from(document.querySelectorAll('#featured .featured-grid > *')),
      ...Array.from(document.querySelectorAll('.overview-grid > .project-card--clickable'))
    ];
    if (!cards.length) return;

    const canTilt = () => {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
      if (window.matchMedia?.('(hover: none), (pointer: coarse)').matches) return false;
      return true;
    };

    cards.forEach((card) => {
      if (card.dataset.freemTiltedCardReady === 'true') return;
      card.dataset.freemTiltedCardReady = 'true';
      card.classList.add('freem-tilted-card');
      card.style.setProperty('--freem-tilt-x', '0deg');
      card.style.setProperty('--freem-tilt-y', '0deg');
      card.style.setProperty('--freem-tilt-glow-x', '50%');
      card.style.setProperty('--freem-tilt-glow-y', '50%');

      const reset = () => {
        card.classList.remove('freem-tilted-card--active');
        card.style.setProperty('--freem-tilt-x', '0deg');
        card.style.setProperty('--freem-tilt-y', '0deg');
        card.style.setProperty('--freem-tilt-glow-x', '50%');
        card.style.setProperty('--freem-tilt-glow-y', '50%');
      };

      card.addEventListener('pointermove', (event) => {
        if (!canTilt()) return;
        if (card.classList.contains('react-bits-featured-slide-card') && card.dataset.freemFeaturedSlideDone !== 'true') return;
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 16;
        const rotateX = ((y / rect.height) - 0.5) * -16;

        card.classList.add('freem-tilted-card--active');
        card.style.setProperty('--freem-tilt-x', `${rotateX.toFixed(2)}deg`);
        card.style.setProperty('--freem-tilt-y', `${rotateY.toFixed(2)}deg`);
        card.style.setProperty('--freem-tilt-glow-x', `${((x / rect.width) * 100).toFixed(1)}%`);
        card.style.setProperty('--freem-tilt-glow-y', `${((y / rect.height) * 100).toFixed(1)}%`);
      });

      card.addEventListener('pointerleave', reset);
      card.addEventListener('blur', reset, true);
    });
  }

  function setupLoveThoughtSlideCards() {
    const page = document.querySelector('main.love-page');
    const cards = Array.from(page?.querySelectorAll('.love-challenge-card') || []).slice(0, 3);
    if (!page || cards.length < 3) return;

    const animateCard = (card) => {
      if (card.dataset.freemLoveThoughtSlideDone === 'true') return;
      card.dataset.freemLoveThoughtSlideDone = 'true';

      const duration = 900;
      const delay = Number(card.dataset.freemLoveThoughtSlideDelay || 0) * 1000;
      const start = performance.now() + delay;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!card.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;

        card.style.setProperty('visibility', 'visible', 'important');
        card.style.setProperty('opacity', '1', 'important');
        card.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          card.style.setProperty('opacity', '1', 'important');
          card.style.removeProperty('transform');
          card.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    cards.forEach((card, index) => {
      card.classList.add('react-bits-love-thought-slide-card');
      card.dataset.freemLoveThoughtSlideDelay = (0.08 + index * 0.14).toFixed(2);
      if (card.dataset.freemLoveThoughtSlideReady === 'true') return;
      card.dataset.freemLoveThoughtSlideReady = 'true';
      card.style.setProperty('visibility', 'visible', 'important');
      card.style.setProperty('opacity', '1', 'important');
      card.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      card.style.setProperty('will-change', 'transform');
    });

    const trigger = cards[0].parentElement || cards[0];
    const playCards = () => cards.forEach((card) => animateCard(card));
    const rect = trigger.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(playCards);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        playCards();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(trigger);
  }

  function setupBrazilResearchSlidePanel() {
    const section = document.querySelector('.freem-brazil-research-page');
    const panel = section?.querySelector('.freem-brazil-research-page__right');
    if (!section || !panel) return;

    const animatePanel = () => {
      if (panel.dataset.freemBrazilResearchSlideDone === 'true') return;
      panel.dataset.freemBrazilResearchSlideDone = 'true';

      const duration = 900;
      const start = performance.now() + 80;
      const startX = Math.max(900, (window.innerWidth || 1200) * 0.78);
      const easeOutCubic = (value) => {
        const t = Math.max(0, Math.min(1, value));
        return 1 - Math.pow(1 - t, 3);
      };

      const tick = (now) => {
        if (!panel.isConnected) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(tick);
          return;
        }

        const progress = Math.max(0, Math.min(1, elapsed / duration));
        const eased = easeOutCubic(progress);
        const x = startX * (1 - eased);
        const scale = 1.1 - 0.1 * eased;

        panel.style.setProperty('visibility', 'visible', 'important');
        panel.style.setProperty('opacity', '1', 'important');
        panel.style.setProperty('transform', `translate3d(${x.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`, 'important');

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          panel.style.setProperty('opacity', '1', 'important');
          panel.style.removeProperty('transform');
          panel.style.removeProperty('will-change');
        }
      };

      requestAnimationFrame(tick);
    };

    panel.classList.add('react-bits-brazil-research-slide-panel');
    if (panel.dataset.freemBrazilResearchSlideReady !== 'true') {
      panel.dataset.freemBrazilResearchSlideReady = 'true';
      panel.style.setProperty('visibility', 'visible', 'important');
      panel.style.setProperty('opacity', '1', 'important');
      panel.style.setProperty('transform', `translate3d(${Math.max(900, (window.innerWidth || 1200) * 0.78).toFixed(2)}px, 0, 0) scale(1.1)`, 'important');
      panel.style.setProperty('will-change', 'transform');
    }

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
    if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08) {
      requestAnimationFrame(animatePanel);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return;
        animatePanel();
        observer.disconnect();
      });
    }, { threshold: [0.12] });

    observer.observe(section);
  }

  function removeCaseSecondEyebrow() {
    document.querySelectorAll('main.case-page .case-second__hero > small').forEach((node) => node.remove());
  }

  function setupProtoHomeGradualBlur() {
    const page = document.querySelector('main.proto-page.proto-page--home');
    if (!page) return;
    page.classList.remove('react-bits-gradual-blur-page');
    page.querySelectorAll(':scope > .freem-gradual-blur').forEach((layer) => layer.remove());
    page.querySelectorAll('.freem-gradual-blur-reveal').forEach((node) => {
      node.classList.remove('freem-gradual-blur-reveal');
      node.style.removeProperty('--freem-gradual-blur');
      node.style.removeProperty('--freem-gradual-opacity');
    });
  }

  function applyContentFixes() {
    fixHome();
    fixStrengthCardCopy();
    ensureHomeTopbarFixedClone();
    ensureFreemBrandHomeLink();
    setupGlobalNavigationBehavior();
    setupMediaPerformance();
    setupClickSpark();
    setupLogoLoopEnhancement();
    setupDecayCardEnhancement();
    setupProfileCardEnhancement();
    setupStrengthsScrollStack();
    setupDailyAnimationCircularGallery();
    setupEvaluationAnimatedContent();
    setupKeyProjectsSlideCards();
    setupExperienceSlideCards();
    setupFeaturedSlideCards();
    setupFeaturedTiltedCards();
    setupLoveThoughtSlideCards();
    setupBrazilResearchSlidePanel();
    removeCaseSecondEyebrow();
    setupProtoHomeGradualBlur();
    setupMagicStoryBlockEntrance();
    fixPersonalName();
    fixDailyAnimationPage();
    fixAvatarPage();
    fixEventPage();
    fixMagicPage();
    fixIpPage();
    fixBrazilMusicPage();
    fixInteractivePage();
    fixLovePage();
    fixWorkflowPage();
    fixSpringPage();
    fixEvaluationPage();
    fixKeyProjectsPage();
    fixProtoHomePage();
    fixProtoTitlePage();
    fixDivinePage();
    ensureDivineImageCover();
    fixIpCopyPage();
    fixLatestBrowserComments();
    fixCardSkinMarkedComments();
    fixRevenueDataPages();
    setupAboutSplitText();
    setupAboutIntroEntrances();
    setupAboutBorderGlowCard();
    ensurePageBackButton();
    ensureSubPagesStartAtTop();
  }

  let scheduled = false;
  function scheduleContentFixes() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyContentFixes();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleContentFixes, { once: true });
  } else {
    scheduleContentFixes();
  }

  window.addEventListener('load', scheduleContentFixes, { once: true });
  window.addEventListener('hashchange', () => {
    updateDailyAnimationRoute();
    scheduleContentFixes();
  });
  window.addEventListener('popstate', () => {
    updateDailyAnimationRoute();
    scheduleContentFixes();
  });

  const root = document.getElementById('root');
  if (root && window.MutationObserver) {
    new MutationObserver(scheduleContentFixes).observe(root, { childList: true, subtree: true });
  }
})();



