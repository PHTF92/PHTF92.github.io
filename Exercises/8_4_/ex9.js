const assert = require("assert")

class EmailMessage {
    constructor(to, subject, content) {
        this.from = undefined;
        this.to = to;
        this.subject = subject;
        this.content = content
    }
}

class EmailServer {
    constructor(owner) {
        this.sent_messages = []
        this.owner = owner;
    }

    createMessage(destino, assunto, msg) {
        return new EmailMessage(destino, assunto, msg)
    }

    sendMessage(mensagemDeEmail){
        this.sent_messages.push(mensagemDeEmail.content)
        mensagemDeEmail.from = this.owner         
        return mensagemDeEmail
    }
}

assert.equal(typeof EmailMessage.prototype, "object")
let msg1 = new EmailMessage("tryber@betrybe.com", "Email Message", "Esse aqui é o conteúdo da mensagem")
assert.equal(msg1.from, undefined)
assert.equal(msg1.to, "tryber@betrybe.com")
assert.equal(msg1.subject, "Email Message")
assert.equal(msg1.content, "Esse aqui é o conteúdo da mensagem")

assert.equal(typeof EmailServer.prototype, "object")
let server1 = new EmailServer("my-email@betrybe.com")
assert.equal(server1.owner, "my-email@betrybe.com")
assert.equal(server1.sent_messages.length, 0)
let msg2 = server1.createMessage("destination@betrybe.com", "HAHAHA", "hehehe")
assert.ok(msg2 instanceof EmailMessage)
assert.equal(msg2.from, undefined)
assert.equal(msg2.to, "destination@betrybe.com")
assert.equal(msg2.subject, "HAHAHA")
assert.equal(msg2.content, "hehehe")
assert.equal(server1.sent_messages.length, 0)
msg2 = server1.sendMessage(msg2)
assert.ok(msg2 instanceof EmailMessage)
assert.equal(msg2.from, "my-email@betrybe.com")
assert.equal(msg2.to, "destination@betrybe.com")
assert.equal(msg2.subject, "HAHAHA")
assert.equal(msg2.content, "hehehe")
assert.equal(server1.sent_messages.length, 1)