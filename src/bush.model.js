// A Bush class 
// Could be drawn using images/sprites instead to simplify

class Bush {
    constructor(x, y, w, h) {
        this.x = x || 0; // Bushy's position
        this.y = y || 0; 
        this.w = w || 50;
        this.h = h || 50;
    }
    
    // Function to determine if another object is collinding with this object
    isColliding(objectToCheckX, objectToCheckY){
        
        if( objectToCheckX > this.x &&
            objectToCheckX < this.x + this.w &&
            objectToCheckY > this.y &&
            objectToCheckY < this.y + this.h){
                // The object is colliding, @NOTE: perhaps we should take some damage on the player?
                if(typeof this.onCollide === "function"){
                    this.onCollide();
                }

                return true;
            
            }
        return false;
    }

    draw(){
        // The world's simpliest bush class

        fill(0, 100, 0); // Green
        rect(this.x, this.y, this.w, this.h);

        // Maybe add a few more details at some point?

    }

  }