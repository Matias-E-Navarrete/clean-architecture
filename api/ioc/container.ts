import express from 'express'
import { scopePerRequest } from 'awilix-express';
import { asClass, asFunction, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';


export default (app: express.Application): void => {

    const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

    container.register({
        // repositories
        
            // userRepository: asClass(UserRepository).scoped(),

        // services

            // userService: asClass(UserService).scoped()
    });

    app.use(scopePerRequest(container));
};