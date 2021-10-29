//  Football Player
function Player(
    keeper,
    defending,
    playmaking,
    winger,
    passing,
    scoring,
    setPieces
) {
    this.keeper = keeper;
    this.defending = defending;
    this.playmaking = playmaking;
    this.winger = winger;
    this.passing = passing;
    this.scoring = scoring;
    this.setPieces = setPieces;
}

module.exports = Player;
