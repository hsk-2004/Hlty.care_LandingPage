"use client";

import { useCallback } from "react";

interface TallyPopupOptions {
  key?: string;
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'bounce' | 'pulse';
  };
  hiddenFields?: Record<string, any>;
  onOpen?: () => void;
  onClose?: () => void;
  onSubmit?: (payload: any) => void;
}

declare global {
  interface Window {
    Tally: any;
  }
}

export const useTally = () => {
  const openPopup = useCallback((formId: string, options: TallyPopupOptions = {}) => {
    if (typeof window !== "undefined") {
      if (window.Tally) {
        window.Tally.openPopup(formId, options);
      } else {
        console.warn("Tally script not loaded yet. Attempting to open in new tab as fallback.");
        const hiddenFieldsQuery = options.hiddenFields 
          ? Object.entries(options.hiddenFields)
              .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
              .join('&')
          : '';
          
        const url = `https://tally.so/r/${formId}${hiddenFieldsQuery ? `?${hiddenFieldsQuery}` : ""}`;
        window.open(url, "_blank");
      }
    }
  }, []);

  return { openPopup };
};
