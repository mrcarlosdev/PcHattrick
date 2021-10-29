var Person = require("./Player.js");

const httpServer= require('http');
const Player = require("./Player.js");
const LineUp = require("./LineUp.js");
const hostname = 'localhost';
const port = 8084;

const server = httpServer.createServer((req, res) => {
    // new Player(10, 7, 3, 2, 2, 3, 2)
    var player1 = new Player(10, 7, 3, 2, 2, 3, 2)
    var player2 = new Player(1, 11, 8, 3, 6, 4, 7)
    var player3 = new Player(1, 13, 7, 4, 7, 4, 3)
    var player4 = new Player(1, 11, 6, 2, 8, 4, 5)
    var player5 = new Player(1, 7, 7, 11, 4, 4, 2)
    var player6 = new Player(1, 4, 15, 4, 7, 4, 1)
    var player7 = new Player(1, 2, 13, 3, 8, 8, 2)
    var player8 = new Player(1, 2, 15, 6, 6, 6, 2)
    var player9 = new Player(1, 3, 10, 9, 5, 5, 2)
    var player10 = new Player(1, 6, 8, 5, 11, 12, 5);
    var player11 = new Player(1, 5, 5, 5, 7, 10, 4);

    var lineUp1 = new LineUp('3-5-2', player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11)
    var centralDefense = lineUp1.centralDefense() + 0.75
    var rightDefense = lineUp1.rightDefense() + 0.75
    var leftDefense = lineUp1.leftDefense() + 0.75
    var midfield = lineUp1.midfield() + 0.75
    var rightAttack = lineUp1.rightAttack() + 0.75
    var leftAttack = lineUp1.leftAttack() + 0.75
    var centralAttack = lineUp1.centralAttack() + 0.75
    res.statusCode = 200;

    var html = ''
    html += '<html><body>';
    html += '<b>Midfield: ' + midfield.toFixed(2) + '</b></br>';
    html += '<b>Right Defense: ' + rightDefense.toFixed(2) + '</b></br>';
    html += '<b>Central Defense: ' + centralDefense.toFixed(2) + '</b></br>';
    html += '<b>Left Defense: ' + leftDefense.toFixed(2) + '</b></br>';
    html += '<b>Right Attack: ' + rightAttack.toFixed(2) + '</b></br>';
    html += '<b>Central Attack: ' + centralAttack.toFixed(2) + '</b></br>';
    html += '<b>Left Attack: ' + leftAttack.toFixed(2) + '</b></br>';
    html += '</body></html>';

    res.end(html)
})

server.listen(port, hostname);

console.log("Nodejs Tutorials - http://localhost:%d", port);
