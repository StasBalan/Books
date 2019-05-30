// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
    //  const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // };
    try {
        const response = await fetch(`http://openlibrary.org/subjects/art.json`);
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let Home = {
    render : async () => {
        let posts = await getPostsList();
        console.log(posts);
        let view =  /*html*/`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    <li><a href="#/p/${posts.ebook_count}">${posts.name}</a></li>
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;