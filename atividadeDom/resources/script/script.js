let titulo = document.querySelector("h1")

let subtitulos = document.querySelectorAll("p")

subtitulos.forEach(subtitulo => {
    subtitulo.textContent = "texto alterado pelo javaScript";
});