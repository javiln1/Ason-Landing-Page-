import { useEffect, useCallback } from "react";

const STORAGE_KEY = "pp_utm";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UTMData = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  first_touch?: number;
};

function readUTMs(): UTMData {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeUTMs(data: UTMData) {
  const current = readUTMs();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...data }));
}

export function useUTM() {
  // Capture UTM params from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: UTMData = {};
    let found = false;

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) {
        utms[key] = value;
        found = true;
      }
    }

    if (found) {
      writeUTMs({ ...utms, first_touch: Date.now() });
    }
  }, []);

  const getUTMQueryString = useCallback((): string => {
    const data = readUTMs();
    const parts = UTM_KEYS.filter((k) => data[k]).map(
      (k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k]!)}`,
    );
    return parts.join("&");
  }, []);

  const getUTMs = useCallback((): UTMData => {
    return readUTMs();
  }, []);

  return { getUTMs, getUTMQueryString };
}
