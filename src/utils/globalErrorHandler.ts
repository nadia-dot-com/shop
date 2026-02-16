export function initGlobalErrorHandler() {
  window.onerror = function (message, source, lineno, colno, error) {
    console.log("Global JS error:", {
      message,
      source,
      lineno,
      colno,
      error,
    });
  };
}
