// LineUp to play the matches
function LineUp(
    strategy,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    player10,
    player11
) {
    this.strategy = strategy
    this.player1 = player1
    this.player2 = player2
    this.player3 = player3
    this.player4 = player4
    this.player5 = player5
    this.player6 = player6
    this.player7 = player7
    this.player8 = player8
    this.player9 = player9
    this.player10 = player10
    this.player11 = player11
}

LineUp.prototype.centralDefense = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        (((this.player1.keeper * 0.8892) + (this.player1.defending * 0.4226))) + // Goalkeeper
        this.player2.defending * 0.4109 + // Right Defender
        // EMPTY POSITION
        ((this.player3.defending * 1)) + // Central Defender
        // EMPTY POSITION
        this.player4.defending * 0.4109 + // Left Defender
        this.player5.defending * 0.2002 + // Winger Right
        this.player6.defending * 0.3126 + // Right Inner
        this.player7.defending * 0.3126 + // Central Inner
        this.player8.defending * 0.3126 + // Left Inner
        this.player9.defending * 0.2002 // Winger Left
        )   
    }

    return result * 0.20
};

LineUp.prototype.rightDefense = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        (((this.player1.keeper * 0.6296 ) + (this.player1.defending * 0.2821))) +
        this.player2.defending * 0.9413 +
        // EMPTY POSITION
        this.player3.defending * 0.5296 +
        // EMPTY POSITION
        this.player5.defending * 0.3571 +
        this.player6.defending * 0.1562 +
        this.player7.defending * 0.1562 +
        this.player8.defending * 0.1562 
        )
    }

    return result * 0.25
};

LineUp.prototype.leftDefense = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        (((this.player1.keeper * 0.6296) + (this.player1.defending * 0.2821))) +
        // EMPTY POSITION
        this.player3.defending * 0.5296 +
        // EMPTY POSITION
        this.player4.defending * 0.9413 +
        this.player6.defending * 0.1562 +
        this.player7.defending * 0.1562 +
        this.player8.defending * 0.1562 +
        this.player9.defending * 0.3571 
        )
    }

    return result * 0.25
};

LineUp.prototype.midfield = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        this.player2.playmaking * 0.1667 + 
        // EMPTY POSITION
        this.player3.playmaking * 0.2521 + 
        // EMPTY POSITION
        this.player4.playmaking * 0.1667 +
        this.player5.playmaking * 0.4658 +

        this.player6.playmaking * 0.8271 +
        this.player7.playmaking * 0.8271 +
        this.player8.playmaking * 0.8271 +   
             
        this.player9.playmaking * 0.4658 + 

        this.player10.playmaking * 0.2362 +
        this.player11.playmaking * 0.2362
        )
    }

    return result * 0.20
};

LineUp.prototype.rightAttack = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        this.player2.winger * 0.5219 +
        // EMPTY POSITION
        this.player3.winger * 0.0 + 
        // EMPTY POSITION
        ((this.player5.winger * 0.7723) + (this.player5.passing * 0.2186)) + 
        ((this.player6.winger * 0.0) + (this.player6.passing * 0.1882)) + 
        ((this.player7.winger * 0.0) + (this.player7.passing * 0.1882)) + 
        ((this.player8.winger * 0.0) + (this.player8.passing * 0.1882)) + 
        ((this.player10.winger * 0.1833) + (this.player10.passing * 0.1208) + (this.player11.scoring * 0.2224)) + 
        ((this.player11.winger * 0.1833) + (this.player11.passing * 0.1208) + (this.player11.scoring * 0.2224))
        )
    }

    return result * 0.25
};

LineUp.prototype.leftAttack = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        // EMPTY POSITION
        this.player3.winger * 0.0+ 
        // EMPTY POSITION
        this.player4.winger * 0.5219 +
        ((this.player6.winger * 0.0) + (this.player6.passing * 0.1882)) + 
        ((this.player7.winger * 0.0) + (this.player7.passing * 0.1882)) + 
        ((this.player8.winger * 0.0) + (this.player8.passing * 0.1882)) + 
        ((this.player9.winger * 0.7723) + (this.player5.passing * 0.2186)) + 
        ((this.player10.winger * 0.1833) + (this.player10.passing * 0.1208) + (this.player11.scoring * 0.2224)) + 
        // EMPTY POSITION
        ((this.player11.winger * 0.1833) + (this.player11.passing * 0.1208) + (this.player11.scoring * 0.2224))
        )
    }

    return result * 0.25
};

LineUp.prototype.centralAttack = function() {
    var result = 0.0

    if (this.strategy == '3-5-2') {
        result = parseFloat(
        (this.player5.passing * 0.1181) + 
        (((this.player6.scoring * 0.1733) + (this.player6.passing * 0.2664))) +  
        (((this.player7.scoring * 0.1733) + (this.player7.passing * 0.2664))) + 
        (((this.player8.scoring * 0.1733) + (this.player8.passing * 0.2664))) + 
        (this.player9.passing * 0.1181) +
        (((this.player10.scoring * 0.9459) + (this.player10.passing * 0.3186))) +
        // EMPTY POSITION
        (((this.player11.scoring * 0.9459) + (this.player11.passing * 0.3186)))
        )
    }

    return result * 0.20
};

module.exports = LineUp;
