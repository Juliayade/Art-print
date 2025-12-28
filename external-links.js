js
document.querySelectorAll("a[href^='http']").forEach(link => {
  if (!link.href.includes(location.hostname)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
