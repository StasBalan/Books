import Utils        from '../../services/Utils.js'

let getPost = async (id) => {
    try {
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`);
        const json = await response.json();
        console.log(json);
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let Books = {
    render : async () => {
        let request = Utils.parseRequestURL();
        let post = await getPost(request.id);
        console.log(request);

        return /*html*/`
            <section class="section">
                <h1>123</h1>
                
            </section>
        `
    }
    , after_render: async () => {
    }
};

export default Books;