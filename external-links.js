js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    if (link.hostname && link.hostname !== location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
