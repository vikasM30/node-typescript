import App from './app';
import MongoDBConfiguration from './config/db_config'
class BootstrapApp {
    private app: App;
    private mongoConfig: MongoDBConfiguration

    constructor() {
        this.app = new App();
        this.mongoConfig = new MongoDBConfiguration()
        this.startServer()
        this.startDB()
    }

    private startServer() {
        this.app.start();
    }

    private startDB() {
        this.mongoConfig.run()
    }

}

new BootstrapApp();