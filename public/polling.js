const { render } = require("express/lib/response");

setInterval(() => {
    render(req, res, "chat", { chats: CHATS });
    console.log("done deal!")
}, 1000);