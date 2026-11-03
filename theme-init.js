/* Apply the saved palette before first paint. */
(function () {
  try {
    var palette = localStorage.getItem("daniela_lima_palette");
    if (palette) document.documentElement.setAttribute("data-theme", palette);
  } catch (error) {}
})();

