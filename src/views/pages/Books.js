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
        console.log(post);
        for(let key in post) {
            const obj = post[key];
            const img = obj.cover.large;
            const publishDate = obj.publish_date;
            const authors = obj.authors;
            const resAuthors = authors.map((el) => el.name);
            const subjectPeople = obj.subject_people;
            const resSubjectPeople = subjectPeople ? subjectPeople.map((el) => el.name) : 'no people' ;
            return /*html*/`
            <section class="section">
                <h1 class="section__title">${obj.title}</h1>
                <div class="section__box section-box">
                    <img src="${img}" alt="">
                    <div class="section-box__inner">
                        <p>Authors: ${resAuthors}</p>
                        <p>Publish date: ${publishDate}</p>
                        <p>Subject people: ${resSubjectPeople}</p>
                    </div>
                </div>
            </section>
        `
        }


    }
    , after_render: async () => {
    }
};

export default Books;