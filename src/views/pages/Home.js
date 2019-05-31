// --------------------------------
//  Define Data Sources
// --------------------------------
const CATEGORY = [
    {
        name: 'art'
    },
    {
        name: 'prose'
    },
    {
        name: 'romance'
    },
    {
        name: ''
    }
];

let Home = {
    render : async () => {
        const res = CATEGORY.map((el) => `<li><a href="#/p/${el.name}">${el.name}</a></li>`).join('\n ');
       return/*html*/`
            <section class="section">
                <h1 class="section__title"> Home </h1>
                <ul>
                    ${res}
                </ul>
            </section>
        `;
    }
    , after_render: async () => {
    }

};

export default Home;