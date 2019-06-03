let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
                <p>@StasBalan</p>
                <a href="https://github.com/StasBalan?tab=repositories">
                    https://github.com/StasBalan?tab=repositories
                </a>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;