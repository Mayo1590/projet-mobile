class Application {
    constructor(window, endroitDAO, vueAjouterEndroit) {
        this.window = window;
        this.endroitDAO = endroitDAO;

        this.vueAjouterEndroit = vueAjouterEndroit;
        this.vueAjouterEndroit.initialiserActionAjouterEndroit(endroit => this.actionAjouterEndroit(endroit));

    }

    actionAjouterEndroit(endroit){
        this.endroitDAO.ajouter(endroit);
    }

}

new Application(window, new EndroitDAO(), new VueAjouterEndroit());