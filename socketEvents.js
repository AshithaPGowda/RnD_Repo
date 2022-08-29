var staticInstance = null

class SocketEventHelper {
  constructor(io) {
    this.io = io
  }

  static getStaticInstance(io) {
    if (staticInstance == null) {
    console.log("static instance initialized")
      staticInstance = new SocketEventHelper(io)
      
    }
    return staticInstance;
  }

  emitToALLClients (eventName,message) {
    console.log("in send to all clients")
    console.log(this.io, "Event name = ",eventName, "message", message)
    this.io.emit(eventName,message)
}

}


module.exports = {SocketEventHelper}