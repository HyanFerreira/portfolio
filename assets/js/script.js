const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navigation-list");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

window.ityped.init(document.querySelector(".ityped"), {
    strings: ['Desenvolvedor Web,', 'Técnico em Informática,', 'e Designer Gráfico.'],
    loop: true,
    typeSpeed: 100
});

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

skills.map((item, index) => {
    let skill = c(".card-skill").cloneNode(true);

    skill.querySelector(".card-skill img").src = item.img;

    c(".content-skills .skills").append(skill);
});

projects.map((item, index) => {
    let skill = c(".card-project").cloneNode(true);

    // skill.querySelector(".card-project span").innerHTML = item.project;
    skill.querySelector(".card-project img").src = item.img;
    skill.querySelector(".card-project a").href = item.link;

    c(".content-projects .projects").append(skill);
});