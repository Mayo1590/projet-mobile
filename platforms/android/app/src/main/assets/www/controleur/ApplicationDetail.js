class Application {
    constructor(window, endroitDAO, vueListeEndroitDetail) {

        this.window = window;
        this.endroitDAO = endroitDAO;

        const expression = /^.*\/liste-details.html\?(\d+)/i

        const findId = (url) => {
            const match = expression.exec(url);
            if (match) {
                return match[1];
            }
            return null;
        };

        this.vueListeDetailEndroit = vueListeEndroitDetail;
        this.endroitDAO.listerDetail(findId(window.location.href));
    }

}

new Application(window, new EndroitDAO(), new VueListeEndroitDetail());