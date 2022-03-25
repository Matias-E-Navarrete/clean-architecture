import express from 'express';
import { route, GET, POST } from "awilix-express";

@route('/users')
export class MovementController {
    constructor(private readonly userService: any) { }

    @GET()
    public async all(req: express.Request, res: express.Response) {
        try {
            res.send(
                // await this.userService.all()
                console.log("first")
            );
        } catch (error) {
            console.log(error)
        }
    }

    @route('/:id')
    @GET()
    public async find(req: express.Request, res: express.Response) {
        console.log(req.params.id);
        try {
            const id = Number(req.params.id);

            const result = await this.userService.find(id);

            if (result) {
                res.send(result);
            } else {
                res.status(404);
                res.send();
            }
        } catch (error) {
            console.log(error)
        }
    }
}