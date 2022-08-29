const { SocketEventHelper } = require ('./socketEvents')

const initSocket = async io =>{
    try{
        io.on('connection', (socket) => {
            console.log('a user connected',socket.id);
            SocketEventHelper.getStaticInstance(io).emitToALLClients("test","Testmessage");
        });
    }catch(err){
        console.log(err)
    }

}

module.exports = initSocket