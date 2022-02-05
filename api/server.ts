import Express from '../infrastructure/server/express/express';
import { IoC } from './ioc/container';

export class Server {

    server;

    constructor(){
        this.server = new Express().app;
    }

} 