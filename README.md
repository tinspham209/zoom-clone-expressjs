# Mini Project: Zoom Clone Web Application

### Tech-Stack

- `NodeJS v14.7.0`
- `ExpressJS v4.17.1`
- `jQuery`
- `bootstrap 4`
- `Socket.IO v2.3.0` : communicate client & server REAL-TIME ENGINE
- `WebRTC` : provides web browsers and mobile applications with real-time communication
- `peer v0.5.3` : provides a complete, configurable, and easy-to-use peer-to-peer API built on top of WebRTC, supporting both data channels and media streams.
- `Nodemon v2.0.4` : restarting the app when file changes
- `Morgan v1.10.0` : HTTP Logger
- `ejs v3.1.3` : Embedded Javascript, get variables from the BE to FE
- `CORS v2.8.5`
- `uuid v8.3.0` : unique id
- `FontAwesome icons`

### Deploy

https://zoom-clone-nodejs-sdgsdg.herokuapp.com

### Screenshot

<img src="https://i.imgur.com/pgmT8TR.png" />

### Plan Of Action

- Initialize NodeJS Project - DONE
- Initialize first view - DONE
- Create a room id - DONE
- Add the ability to view own video - DONE
- Add ability to allow others to stream their video - DONE
- Add styling - DONE
- Add the ability to create messages - DONE
- Add mute button - DONE
- Add stop video button - DONE

### After this project

I have improve my knowledge about

- set layout with flex-box
- class name with BEM
- bootstrap to set font-family
- Skills of Express & NodeJS
- Template engine with ejs
- Debug with console.log

I have understand about

- Create unique id room with uuid
- Create unique id user with uuid
- Using Socket.IO to communicate between Client & Server in Real-Time
- Using Peer to PTP API on top of WebRTC, share media streams & data channels in Real-Time
- Using jQuery
  - tracking message when user typing text and hit enter key
  - append 'li' tag when server send the message
  - tracking to scrollBottom when chat_window is full
  - set mute/unmute audio, play/stop video button onClick

### Directory Structure

```

.
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── public
        ├── script.js
        ├── style.css
    ├── views
        ├── room.ejs
    ├── server.js

```

### Set up

- `git clone https://github.com/tinspham209/zoom-clone-expressjs`
- `npm install`
- `npm start`
