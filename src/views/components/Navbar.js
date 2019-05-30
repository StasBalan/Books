let Navbar = {
    render: async () => {
        let view =  /*html*/`
            <header class="navbar">
                <div class="container">
                        <a class="navbar__logo" href="/#/">
                            LOGO BOOK
                        </a>
                    <ul class="navbar__menu"> 
                        <li>
                            <a class="navbar__item" href="/#/">Home</a>
                        </li> 
                        <li>
                            <a class="navbar__item" href="/#/art">Art</a>
                        </li>
                        <li>
                            <a class="navbar__item" href="/#/fantasy">Fantasy</a>
                        </li>
                        <li>
                            <a class="navbar__item" href="/#/prose">Prose</a>
                        </li>
                        <li>
                            <a class="navbar__item" href="/#/romance">Romance</a>
                        </li>
                        <li>
                            <a class="navbar__item" href="/#/music">Music</a>
                        </li>
                    </ul>
                </div>
            </header>     
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;