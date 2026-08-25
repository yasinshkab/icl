"use client";

import { useEffect } from "react";

export default function DevOverlayCleaner() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    function removeOverlays() {
      try {
        const nodes = Array.from(document.querySelectorAll("body *"));
        for (const el of nodes) {
          const txt = (el.textContent || "").trim().toLowerCase();
          if (!txt) continue;
          // target obvious dev overlay labels
          if (txt.includes("rendering") || txt.includes("rendering...") || txt === "render") {
            const cs = window.getComputedStyle(el as Element);
            if (cs.position === "fixed" || cs.position === "absolute") {
              // remove obvious small fixed overlays
              el.remove();
            }
          }
        }
      } catch (e) {
        // ignore
      }
    }

    // run immediately and a few times to catch async overlays
    removeOverlays();
    const id = setInterval(removeOverlays, 400);
    const timeout = setTimeout(() => clearInterval(id), 5000);
    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
