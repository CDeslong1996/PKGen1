
class Player {

    constructor(n, gender) {
        if (gender == 'male') {
            this.isBoy = true;
        }
        else {
            this.isBoy = false;
        }

        this.name = n;

        this.badges = [false,false,false,false,false,false,false,false];

        this.money = 3000;

        this.party = [];

        this.selectedItem = "";

        this.box = [];

    }

}

module.exports = Player;
