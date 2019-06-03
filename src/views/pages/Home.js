// --------------------------------
//  Define Data Sources
// --------------------------------
const CATEGORY = [
    { name: 'art', icon: `<i class="fas fa-palette icon"></i>` },
    { name: 'prose', icon: `<i class="fas fa-book-reader icon"></i>` },
    { name: 'romance', icon: `<i class="fas fa-seedling icon"></i>` },
    { name: 'fantasy', icon: `<i class="fas fa-dragon icon"></i>` },
    { name: 'comedy', icon: `<i class="fas fa-theater-masks icon"></i>` },
    { name: 'fiction', icon: `<i class="fas fa-book-open icon"></i>` },
    { name: 'history', icon: `<i class="fas fa-globe-americas icon"></i>` },
    { name: 'biography', icon: `<i class="fas fa-book icon"></i>` },
    { name: 'horror', icon: `<i class="fas fa-snowman icon"></i>` }
];

let Home = {
    render : async () => {
        const res = CATEGORY.map((el) => `<li class="section__item">${el.icon}<a href="#/p/${el.name}">${el.name.toUpperCase()[0] + el.name.slice(1).toLowerCase()}</a></li>`).join('\n ');
       return/*html*/`
            <section class="section">
                <h1 class="section__title"> Home </h1>
                <ul class="section__menu">
                    ${res}
                </ul>
            </section>
        `;
    }
    , after_render: async () => {
    }

};

export default Home;