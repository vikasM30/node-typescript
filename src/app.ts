import express, { Application, Request, Response, NextFunction } from 'express';
import Helmet from 'helmet';
import dotenv from 'dotenv';
import compression from 'compression';
import apiRoutes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './swagger/swagger.json';

class App {
    private app: Application;
    private port: number

    constructor() {
        dotenv.config({ path: './.env' });
        this.app = express();
        this.port = Number(process.env.PORT)
        this.initializeMiddlewares();
        this.initializeRoutes();
        // this.initializeErrorHandling();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }))
        this.app.use(Helmet());
        this.app.use(compression());
        // this.app.use((req: Request, res: Response, next: NextFunction) => {
        //     // requestLogger(req, res, next, {});
        // });
    }

    private initializeRoutes() {
        this.app.get('/api/docs/swagger.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerJson);
        });
        this.app.use(
            '/api/docs',
            swaggerUi.serve,
            swaggerUi.setup(undefined, {
                swaggerOptions: {
                    url: '/api/docs/swagger.json',
                },
            })
        );
        this.app.use('/api', apiRoutes);
        this.app.all('*', async () => {
            throw new Error('Not Found');
        });
    }

    // private initializeErrorHandling() {
    //     this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //         // requestLogger(req, res, next, err);
    //         // errorHandler(err, req, res, next);
    //     });
    // }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

export default App;
