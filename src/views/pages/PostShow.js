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
        let res = arr.map((el) =>{
            if(el.title === `A summer in Skye`) console.log('post map', el);
            return `<li><a href="#/b/${el.cover_edition_key}">${el.title}</a></li>`
        }).join('\n ');
        
        return /*html*/`
            <section class="section section-books">
                <h1 class="section__title">Books</h1>
                <ul class="section-books__menu">
                    ${res}
                </ul>
            </section>
        `
    }
    , after_render: async () => {
    }
};

export default PostShow;