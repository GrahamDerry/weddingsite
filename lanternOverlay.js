/**
 * Lantern Overlay (Step C)
 * Drop-in component for a static site (GitHub Pages friendly).
 *
 * Usage (static HTML):
 *   1) Put lantern.svg next to this file (or set svgPath).
 *   2) Add: <script type="module" src="./lanternOverlay.js"></script>
 *
 * Optional:
 *   import { launchLantern } from "./lanternOverlay.js";
 *   launchLantern({ durationS: 22 });
 */

export function launchLantern(userOptions = {}) {
  const baseUrl = (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/";
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  const defaults = {
    svgPath: `${baseUrl}lantern.svg`,
    durationS: 22,
    startDelayS: 0,
    // Visible immediately: start within viewport
    yStartVh: 92,
    yEndVh: -55,
    scaleStart: 1.0,
    scaleEnd: 0.20,
    maxDriftPx: 16,
    maxSwayDeg: 0.9,
    // Flicker
    flicker: true,
    flickerPeriodS: 3.8,
    // Size
    sizeCss: "min(480px, 92vw)",
    // Layering / interaction
    zIndex: 10,
    // "oncePerSession": if true, only plays once per browser session
    oncePerSession: false,
    sessionKey: "weddingLanternPlayed",
    // Remove DOM node after finishing
    cleanup: true,
    // Debug badge
    debug: false,
  };

  const opt = { ...defaults, ...userOptions };

  if (opt.oncePerSession) {
    try {
      if (sessionStorage.getItem(opt.sessionKey) === "1") return;
      sessionStorage.setItem(opt.sessionKey, "1");
    } catch (_) {
      // ignore sessionStorage failures
    }
  }

  // Reduced motion: show static lantern and stop
  if (prefersReduced) {
    injectStyles(opt);
    const { overlay, lantern } = createDom(opt);
    lantern.style.opacity = "1";
    lantern.style.transform = "translateX(-50%) translateY(60vh) scale(1)";
    return;
  }

  injectStyles(opt);
  const { overlay, lantern, img, debugEl } = createDom(opt);

  // Wind: slow multi-sine (Perlin-ish)
  const r = (min, max) => min + Math.random() * (max - min);
  const f1 = r(0.010, 0.016);
  const f2 = r(0.006, 0.011);
  const f3 = r(0.016, 0.023);
  const p1 = r(0, Math.PI * 2);
  const p2 = r(0, Math.PI * 2);
  const p3 = r(0, Math.PI * 2);

  // Ease-out curve so it moves immediately
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const start = performance.now();

  function tick(now) {
    const elapsed = (now - start) / 1000;
    const tRaw = (elapsed - opt.startDelayS) / opt.durationS;
    const t = Math.max(0, Math.min(1, tRaw));
    const e = easeOutCubic(t);

    const yVh = opt.yStartVh + (opt.yEndVh - opt.yStartVh) * e;
    const s = opt.scaleStart + (opt.scaleEnd - opt.scaleStart) * e;

    // Fade out near top
    let opacity = 1;
    if (t > 0.82) opacity = Math.max(0, 1 - (t - 0.82) / 0.18);

    // Wind
    const time = elapsed;
    const n =
      0.55 * Math.sin((time * Math.PI * 2) * f1 + p1) +
      0.30 * Math.sin((time * Math.PI * 2) * f2 + p2) +
      0.15 * Math.sin((time * Math.PI * 2) * f3 + p3);

    const x = n * opt.maxDriftPx;
    const rot = n * opt.maxSwayDeg;

    lantern.style.opacity = opacity.toFixed(3);
    lantern.style.transform =
      `translateX(calc(-50% + ${x.toFixed(2)}px)) translateY(${yVh.toFixed(2)}vh) scale(${s.toFixed(3)}) rotate(${rot.toFixed(2)}deg)`;

    if (opt.debug && debugEl) {
      debugEl.textContent =
        `LanternOverlay\nDuration: ${opt.durationS}s\nProgress: ${(t * 100).toFixed(1)}%`;
    }

    if (t < 1) {
      requestAnimationFrame(tick);
    } else if (opt.cleanup) {
      // let fade finish visually, then remove
      setTimeout(() => overlay.remove(), 150);
    }
  }

  requestAnimationFrame(tick);
}

function createDom(opt) {
  const overlay = document.createElement("div");
  overlay.className = "lantern-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.zIndex = String(opt.zIndex);

  const lantern = document.createElement("div");
  lantern.className = "lantern-node";
  lantern.id = "lantern-node";

  const img = document.createElement("img");
  img.src = opt.svgPath;
  img.alt = "";
  img.decoding = "async";
  img.loading = "eager";

  if (opt.flicker) {
    img.classList.add("lantern-flicker");
    img.style.animationDuration = `${opt.flickerPeriodS}s`;
  }

  lantern.appendChild(img);
  overlay.appendChild(lantern);

  let debugEl = null;
  if (opt.debug) {
    debugEl = document.createElement("div");
    debugEl.className = "lantern-debug";
    debugEl.textContent = "LanternOverlay";
    overlay.appendChild(debugEl);
  }

  document.body.appendChild(overlay);
  return { overlay, lantern, img, debugEl };
}

function injectStyles(opt) {
  if (document.getElementById("lantern-overlay-styles")) return;

  const style = document.createElement("style");
  style.id = "lantern-overlay-styles";
  style.textContent = `
    .lantern-overlay{
      position: fixed;
      inset: 0;
      pointer-events: none;
      contain: layout paint;
    }
    .lantern-node{
      position: absolute;
      left: 50%;
      top: 0;
      width: ${opt.sizeCss};
      transform-origin: 50% 100%;
      will-change: transform, opacity;
      opacity: 1;
    }
    .lantern-node img{
      width: 100%;
      height: auto;
      display: block;
    }

    /* Micro flame flicker: glow breathes gently, lantern body steady */
    .lantern-flicker{
      filter:
        drop-shadow(0 0 18px rgba(255,170,80,0.35))
        drop-shadow(0 0 32px rgba(255,140,60,0.18));
      animation-name: lanternFlameFlicker;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
    @keyframes lanternFlameFlicker{
      0%{
        filter:
          drop-shadow(0 0 16px rgba(255,170,80,0.30))
          drop-shadow(0 0 28px rgba(255,140,60,0.15));
      }
      40%{
        filter:
          drop-shadow(0 0 22px rgba(255,180,90,0.42))
          drop-shadow(0 0 38px rgba(255,150,70,0.22));
      }
      70%{
        filter:
          drop-shadow(0 0 18px rgba(255,165,85,0.34))
          drop-shadow(0 0 30px rgba(255,145,65,0.18));
      }
      100%{
        filter:
          drop-shadow(0 0 16px rgba(255,170,80,0.30))
          drop-shadow(0 0 28px rgba(255,140,60,0.15));
      }
    }

    .lantern-debug{
      position: fixed;
      left: 12px;
      bottom: 12px;
      font-size: 12px;
      color: rgba(255,255,255,0.8);
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      padding: 8px 10px;
      backdrop-filter: blur(6px);
      pointer-events: none;
      user-select: none;
      white-space: pre-line;
    }

    @media (prefers-reduced-motion: reduce){
      .lantern-flicker{ animation: none !important; }
    }
  `;
  document.head.appendChild(style);
}

// Auto-run on page load (safe default for the wedding site)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => launchLantern());
} else {
  launchLantern();
}
