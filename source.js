//working js -also this is a comment
class Person{
    constructor(dmgmult, health,maxHealth, dmgresist, status){
        this.dmgmult = dmgmult
        this.health = health
        this.maxHealth = maxHealth
        this.dmgresist = dmgresist
        this.status = status
        console.log(status)
    }
    takedamage(damage,mult){
        damage = damage * mult
        let calculateddamage =  damage - this.dmgresist
        if(calculateddamage < 0){
            calculateddamage = 0
        }
            this.health -= calculateddamage
            this.dmgresist -= damage
            if(this.dmgresist < 0){
                this.dmgresist = 0
            }
        if(this.health <= 0){
            this.status[0] = "dead"
            this.health = 0
        }
    }
    special(multincrease){
        this.dmgmult += multincrease
    }

    defend(dmgresist, defend_val){
        this.dmgresist += defend_val
         
    }
}

class Enemy extends Person{
    constructor(dmgmult, health,maxHealth, dmgresist, status){
    super(dmgmult, health, maxHealth, dmgresist, status)
    
    }
    
    

}
class Player extends Person{
    constructor(dmgmult, health,maxHealth, dmgresist, status, ap){
    super(dmgmult, health, maxHealth, dmgresist, status)
    this.ap = ap
    
    }
    

}


//AAAAAAAAAAAAA
//