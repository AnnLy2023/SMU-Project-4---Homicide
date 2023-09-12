function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://YOUR-SERVER/views/YOUR-VISUALIZATION";

    var viz = new tableau.Viz(containerDiv, url);
}