const { PeerServer } = require('peer');
const ClientManager = require('./messenger/clientManager');
const server = new PeerServer({
    port: process.env.PEER_PORT,
    path: '/messenger'
})

const startPeerServer = () => {
    new ClientManager(server)
}

module.exports = startPeerServer;