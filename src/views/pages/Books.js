import Utils        from '../../services/Utils.js'

let getPost = async (id) => {
    try {
        const response = await fetch(`http://openlibrary.org/subjects/art.json`)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Books = {

    render : async () => {
        let request = Utils.parseRequestURL();
        let post = await getPost(request.id);
        console.log(post);


        return /*html*/`
            <section class="section">
                <h1>123</h1>
              
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default Books;