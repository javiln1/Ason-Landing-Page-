// UTM Capture & Persistence Utility
// Framework-agnostic, minimal, and safe
(function () {
  const KEY = "pp_utm";
  
  function getUTMsFromURL() {
    const p = new URLSearchParams(window.location.search);
    const keys = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
    const out = {};
    let found = false;
    keys.forEach(k => {
      const v = p.get(k);
      if (v) { out[k] = v; found = true; }
    });
    return found ? out : null;
  }
  
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }
  
  function write(obj) {
    if (!obj) return;
    const current = read();
    const merged = { ...current, ...obj };
    localStorage.setItem(KEY, JSON.stringify(merged));
  }
  
  // 1) Capture on first hit
  const fromURL = getUTMsFromURL();
  if (fromURL) {
    write({ ...fromURL, first_touch: Date.now() });
    console.info("[UTM] Captured from URL:", fromURL);
  } else {
    console.info("[UTM] No UTMs in URL; using stored:", read());
  }

  // 2) Populate hidden inputs on DOM ready
  function populateHiddenInputs(root=document) {
    const data = read();
    const keys = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
    keys.forEach(k => {
      const inputs = root.querySelectorAll(`input[name="${k}"]`);
      inputs.forEach(inp => { if (data[k]) inp.value = data[k]; });
    });
    console.info("[UTM] Populated hidden inputs:", data);
  }

  // 3) Append UTMs to iframe src (Typeform/others)
  function appendUTMsToIframes(root=document) {
    const data = read();
    const keys = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
    const q = keys.filter(k => data[k]).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join("&");
    if (!q) return;
    root.querySelectorAll("iframe[src]").forEach(ifr => {
      const src = new URL(ifr.src, window.location.origin);
      // Only append if not already present
      let changed = false;
      keys.forEach(k => {
        if (data[k] && !src.searchParams.get(k)) {
          src.searchParams.set(k, data[k]);
          changed = true;
        }
      });
      if (changed) {
        ifr.src = src.toString();
        console.info("[UTM] Appended to iframe:", ifr, ifr.src);
      }
    });
  }

  // Expose minimal API
  window.__UTM__ = { read, populateHiddenInputs, appendUTMsToIframes };
  
  // Auto-run on DOM ready
  document.addEventListener("DOMContentLoaded", function() {
    window.__UTM__.populateHiddenInputs();
    window.__UTM__.appendUTMsToIframes();
  });
})();
