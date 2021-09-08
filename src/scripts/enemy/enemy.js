import Ship from '../ship'
import Projectile from '../projectiles/projectile'
import {Util} from '../util'
import EnemyProjectile from '../projectiles/enemyProjectile';

export default class Enemy extends Ship{
    constructor(options){
        super(options)
        this.hurtboxRadius = 20;
        this.fire = Util.throttle(this.fire, (200 / this.game.delta), this);
    }

    fire(pos){
        const tmp = new EnemyProjectile({
            ctx: this.ctx, 
            game: this.game, 
            pos: this.pos,
            color: "yellow",
            hurtboxRadius: 10,
            hitboxRadius: 10,
            dir: pos
        })
        
        this.game.activeHitbox.push(tmp);
    } 
}