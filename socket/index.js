const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO.listen(server);

const net = require('net');
const client = new net.Socket();

io.sockets.on('connection', socket => {
    socket.on('text', data => {
        console.log(data);
        client.connect(50001, 'localhost', () => {
            let command = Buffer.alloc(2);
            command.writeInt16LE(1, 0); // コマンド
            let speed = Buffer.alloc(2);
            speed.writeInt16LE(-1, 0); // 速度
            let tone = Buffer.alloc(2);
            tone.writeInt16LE(-1, 0); // 音程
            let volume = Buffer.alloc(2);
            volume.writeInt16LE(-1, 0); // 音量
            let voice = Buffer.alloc(2);
            voice.writeInt16LE(0, 0); // 声質
            let charCode = Buffer.alloc(1);
            charCode.writeInt8(0, 0);
            let txt = Buffer.from(data, 'utf-8');
            let len = Buffer.alloc(4);
            len.writeInt32LE(txt.length, 0);
            client.write(command);
            client.write(speed);
            client.write(tone);
            client.write(volume);
            client.write(voice);
            client.write(charCode);
            client.write(len);
            client.write(txt);
            client.end();
        });
    });
});

app.use(express.static('./'));
server.listen(8000, () => console.log('server is working at localhost:8000'));