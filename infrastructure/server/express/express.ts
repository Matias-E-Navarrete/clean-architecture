import express, { Router } from 'express'
import IServer from '../../interfaces/IServer.interface'


export default class ExpressAdapter {

    app;

    constructor(private readonly middlewares: unknown[], private readonly router: Router) {
        this.app = express();
        this.setup(middlewares, router)
    }

    setup(middlewares: unknown[], router: Router) {
        
        for (const middleware of middlewares) {
            this.app.use(middlewares);
        }

        this.app.use('/v1', router);
        // this.app.use(apiErrorHandler);
    }
    
}