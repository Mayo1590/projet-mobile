class Application {
    constructor(window, endroitDAO, vueListeEndroit) {

        this.window = window;
        this.endroitDAO = endroitDAO;

        this.vueListeEndroit = vueListeEndroit;
        this.endroitDAO.lister();

    }

}

new Application(window, new EndroitDAO(), new VueListeEndroit());