module.exports = {
    name: 'server-ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Pong! PD Studios servers are down.');
    }
}