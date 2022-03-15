const express = require('express');
const fs = require('fs');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const CHATS = [{
    "name": 'User 1',
    "chat": 'Chat 1'
}];

app.get('/', (req, res) => {
    if (req.cookies.name) {
        res.redirect('/chat');
    } else {
        res.render('index');
    }
});

app.post('/setname', (req, res) => {
    const name = req.body.name;
    res.cookie('name', name);
    res.redirect('/chat');
});

app.get('/chat', (req, res) => {
    res.render('chat', { chats: CHATS });
});

app.post('/create-chat', (req, res) => {
    let name = req.cookies.name;
    let chat = req.body.chat;
    CHATS.push({ name, chat });
    res.redirect('/chat');
})

app.listen(8000);