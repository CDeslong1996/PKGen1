class pk{
    constructor(pkobj, level){
        this.name = pkobj.NAME;
        this.num = pkobj.DEXNUM;
        this.type1 = pkobj.TYPE1;
        this.type2 = pkobj.TYPE2;
        this.level = level;
        if (Math.random() * 100 <= pkobj.GENDER)
        {
            this.isBoy = true;
        }
        else
        {
            this.isBoy = false;
        }
        this.currentexp;
        this.level;
        this.adv = Math.floor(Math.random() * 16);
        this.ddv = Math.floor(Math.random() * 16);
        this.spdv = Math.floor(Math.random() * 16);
        this.sadv = Math.floor(Math.random() * 16);
        this.hpdv = (this.adv % 2 * 8 + this.ddv % 2 * 4 + this.spdv % 2 * 2 + this.sadv % 2 * 1);
        this.speev = 0;
        this.spdev = 0;
        this.aev = 0;
        this.dev = 0;
        this.hpev = 0;
        this.maxhp = ((pkobj.HP + this.hpdv) * level / 50 + 5 + (Math.floor(Math.sqrt(this.hpev - 1) + 1) * level / 400));
        this.attack = ((pkobj.ATK + this.adv) * level / 50 + 5 + (Math.floor(Math.sqrt(this.aev - 1) + 1) * level / 400));
        this.defense = ((pkobj.DEF + this.ddv) * level / 50 + 5 + (Math.floor(Math.sqrt(this.dev - 1) + 1) * level / 400));
        this.special = ((pkobj.SPD + this.sadv) * level / 50 + 5 + (Math.floor(Math.sqrt(this.spdev - 1) + 1) * level / 400));
        this.speed = ((pkobj.SPE + this.spdv) * level / 50 + 5 + (Math.floor(Math.sqrt(this.speev - 1) + 1) * level / 400));
        this.currenthp = this.maxhp;
        this.moves = [];
        var override = 0;
        for (var property in pkobj.MOVES) {
            if (pkobj.MOVES[property] <= level) {
                if (this.moves.length < 4)
                    this.moves.push(property);
                else {
                    this.moves[override] = property;
                    override += 1;
                    if (override > 3)
                        override = 0;
                }
            }
        }
    }

    
}

module.exports = pk;