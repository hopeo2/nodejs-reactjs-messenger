class ClientManager {
    constructor(peer) {
        this.peer = peer;
        this.peer.on('connection', this.connectionHandler)
    }
    connectionHandler(client) {
        console.log(`${client} connected`, client);
        const { id, token } = client;
        console.log(`Client connected from ${id}:${token}`);
    }
}


module.exports = ClientManager;