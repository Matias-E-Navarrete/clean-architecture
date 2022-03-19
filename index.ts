import { Application } from 'express';
import { IoC } from './api/ioc/container';
import { Server } from './api/server';
import ApplicationService from './modules';

const application = async (applicationService: ApplicationService) => {

    const PORT = Number(process.env.PORT) || 3001

    const container = await IoC.init();

    const server = Server.getInstance()

    server.run(PORT)
    // how to resolve all services??
    container.resolve('applicationService') as ApplicationService

    const response = applicationService.execute()

    return response
}

