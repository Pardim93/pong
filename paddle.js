class Paddle {
    constructor(isLeft) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        this.flag = isLeft;
        
        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = width - this.w;
        }
    }
    
    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
    }
    
    move(steps) {
        this.ychange = steps;
    }
    
    show() {
        
        rectMode(CENTER);
       if(this.flag)
            fill(255, 0,0);
        else
            fill(0,0,255);

        rect(this.x, this.y, this.w, this.h,20);
 

    }
}




