export default interface IServer {
    run(port: number): any
    stop(done: unknown): any
}