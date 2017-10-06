const mpp = require('./movesjson');

class pk{
    constructor(pkobj, level, wild, traded){
        this.name = pkobj.NAME;
        this.num = pkobj.DEXNUM;
        this.type1 = pkobj.TYPE1;
        this.type2 = pkobj.TYPE2;
        this.level = level;
        this.wild = wild;
        this.traded = traded;
        if (Math.random() * 100 <= pkobj.GENDER)
        {
            this.isBoy = true;
        }
        else
        {
            this.isBoy = false;
        }
        this.currentexp = 0;
        this.exptype = pkobj.EXPTYPE;
        if (this.exptype===1){
            this.nxtlvlexp = (Math.pow(this.level, 3) * 1.25);
        }
        else if (this.exptype === 2) {
            this.nxtlvlexp = Math.pow(this.level, 3);
        }
        else if (this.exptype === 3) {
            this.nxtlvlexp = ((Math.pow(this.level, 3) * 1.22)-(15*(Math.pow(this.level,2)))+(100*this.level -140));
        }
        else if (this.exptype === 4) {
            this.nxtlvlexp = (Math.pow(this.level, 3) * .8);
        }
        this.evcap = 65025;
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
        this.movespp = [];
        this.maxpp = [];
        var override = 0;
        for (var property in pkobj.MOVES) {
            if (pkobj.MOVES[property] <= level) {
                if (this.moves.length < 4) {
                    
                    this.moves.push(property);
                    
                }
                else {
                    this.moves[override] = property;
                    override += 1;
                    if (override > 3)
                        override = 0;
                }
            }
        }

        for (var i = 0; i < this.moves.length; i++) {
            
            for (var n in mpp) {
                
                if (mpp[n].NAME == this.moves[i]) {
                    
                    this.movespp.push(mpp[n].BASE_PP);
                    this.maxpp.push(mpp[n].BASE_PP);
                }
            }
        }
        
    }

    pkDefeated(pkobj, opppk) {
        this.speev += pkobj.SPE;
        this.spdev += pkobj.SPD;
        this.aev += pkobj.ATK;
        this.dev += pkobj.DEF;
        this.hpev += pkobj.HP;
        if (this.speev > this.evcap) {
            this.speev = evcap;
        }
        if (this.spdev > this.evcap) {
            this.spdev = evcap;
        }
        if (this.aev > this.evcap) {
            this.aev = evcap;
        }
        if (this.dev > this.evcap) {
            this.dev = evcap;
        }
        if (this.hpev > this.evcap) {
            this.hpev = evcap;
        }
        if (this.traded)
        {
            if (!opppk.wild)
                this.currentexp += (1.5 * 1.5 * pkobj.EXP * opppk.level) / 7;
            else
                this.currentexp += (1.5 * pkobj.EXP * opppk.level) / 7;
        }
        else{
            if (!opppk.wild)
                this.currentexp += (1.5 * pkobj.EXP * opppk.level) / 7;
            else
                this.currentexp += (pkobj.EXP * opppk.level) / 7;
        }
        if (this.currentexp >= this.nxtlvlexp)
        {
            this.currentexp -= this.nxtlvlexp;
            this.lvlup();
        }
            
    }

    lvlup()
    {

    }
}

module.exports = pk;