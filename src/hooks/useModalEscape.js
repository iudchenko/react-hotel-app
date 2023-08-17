import { useEffect } from "react";

export function useModalEscape(handler) {
  useEffect(
    function () {
      function handleEscape(e) {
        if (e.key === "Escape") {
          handler();
        }
      }
      document.addEventListener("keydown", handleEscape, true);

      return () => document.removeEventListener("keydown", handleEscape, true);
    },
    [handler]
  );
  return null;
}
