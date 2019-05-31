let Navbar = {
    render: async () => {
        return/*html*/`
            <header class="navbar">
                <div class="container">
                        <a class="navbar__logo" href="/#/">
                            LOGO BOOK
                        </a>
                    <ul class="navbar__menu"> 
                        <li>
                            <a class="navbar__item" href="/#/">Home</a>
                        </li> 
                    </ul>
                </div>
            </header>     
        `;
    },
    after_render: async () => { }

};

export default Navbar;