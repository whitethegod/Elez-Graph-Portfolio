import { useEffect } from "react";

/**
 * Anti-DevTools & Anti-Inspection security hook.
 * Disables right-click, DevTools shortcuts, and adds debugger traps.
 */
export function useAntiDevTools() {
  useEffect(() => {
    // 1. Disable Right Click (Context Menu)
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    // 2. Disable Keyboard Shortcuts for DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12") {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // 3. Infinite Debugger Loop
    const debuggerInterval = setInterval(function () {
      (function () {
        return false;
      })["constructor"]("debugger")["call"]();
    }, 50);

    // 4. Anti-debugging (makes DevTools hang)
    function detectDevTool() {
      const allow = 100;
      const start = +new Date();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = +new Date();
      if (isNaN(start) || isNaN(end) || end - start > allow) {
        // Devtools is open
      }
    }

    const devToolHandler = () => detectDevTool();

    detectDevTool();
    window.addEventListener("resize", devToolHandler);
    window.addEventListener("mousemove", devToolHandler);
    window.addEventListener("focus", devToolHandler);
    window.addEventListener("blur", devToolHandler);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(debuggerInterval);
      window.removeEventListener("resize", devToolHandler);
      window.removeEventListener("mousemove", devToolHandler);
      window.removeEventListener("focus", devToolHandler);
      window.removeEventListener("blur", devToolHandler);
    };
  }, []);
}
