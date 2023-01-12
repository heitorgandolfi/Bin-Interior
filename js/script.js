// Seletores

const links = Array.from(document.querySelectorAll("a"));

// Funções

links.map((link) =>
    link.addEventListener("click", (e) => { e.preventDefault() }))

// Eventos

