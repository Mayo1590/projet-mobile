class Application {
    constructor(window, membreDAO, vueConnexionMembre) {
        this.window = window;
        this.membreDAO = membreDAO;

        this.vueConnexionMembre = vueConnexionMembre;
        this.vueConnexionMembre.initialiserActionConnexionMembre(membre => this.actionConnexionMembre(membre));
    }

    actionConnexionMembre(membre){
        this.membreDAO.connecter(membre);
    }
}

new Application(window, new MembreDAO(), new VueConnexionMembre());