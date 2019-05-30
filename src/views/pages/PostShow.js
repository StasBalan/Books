import Utils        from './../../services/Utils.js'

let getPost = async (id) => {
   try {
       const response = await fetch(`http://openlibrary.org/subjects/art.json`)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let PostShow = {

    render : async () => {
        let request = Utils.parseRequestURL();
        let post = await getPost(request.id);
        let arr = post.works;
        let res = arr.map((el) => {
                   console.log(el.title);
                  return `<li><a href="#/p/${post.ebook_count}/${el.cover_id}">${el.title}</a></li>`
                }).join('\n ');
        
        return /*html*/`
            <section class="section">
                <h1>123</h1>
                <ul>
                    ${res}
                </ul>
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;