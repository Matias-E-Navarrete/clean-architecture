import express from 'express'
import IServer from '../../interfaces/IServer.interface'

export default class Express implements IServer {
    app;
    
    constructor() {
        this.app = express()
    }
    listen(port) {
        this.app.listen(port, ()=>{
            console.log(`Server running on`);
        })
    }
    run() {
        throw new Error('Method not implemented.');
    }
    use() {
        this.app.use();
    }

}