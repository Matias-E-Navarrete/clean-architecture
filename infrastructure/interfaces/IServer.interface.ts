
export default interface IServer {
    app();
    listen(port: number);
    run();
    use(middleware: any);
}