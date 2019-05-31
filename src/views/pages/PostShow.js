import Utils        from './../../services/Utils.js'

let getPost = async (category) => {
   try {
       const response = await fetch(`http://openlibrary.org/subjects/${category}.json`);
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
};

let PostShow = {
    render : async () => {
        let request = Utils.parseRequestURL();
        let post = await getPost(request.id);
        console.log(post);
        let arr = post.works;
        console.log(arr);
        let res = arr.map((el) => `<li><a href="#/b/${el.availability.openlibrary_edition}">${el.title}</a></li>`).join('\n ');
        
        return /*html*/`
            <section class="section">
                <h1 class="section__title">Books</h1>
                <ul>
                    ${res}
                </ul>
            </section>
        `
    }
    , after_render: async () => {
    }
};

export default PostShow;