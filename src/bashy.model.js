// Bashy the bashman - A model character ES6 class

class Character {
    constructor(name, x, y) {
      this.name = "Bashy"
      this.terminalIcon = loadImage("src/assets/terminal.png")
      this.x = x || 50;
      this.y = y || 50;
      this.speed = 3;
    }
    
    say(text){
      // @TODO: Clear text after so many seconds
      this.talk = text;
    }

    move(collisonHandlers){

      // Create an object to store the proposed movement
      let newPosition = {x: 0, y: 0};

      // Match keybindings to x/y coordinates
      if(key === "w"){
        newPosition.y = -1 * this.speed;
      }

      if(key === "s"){
        newPosition.y = 1 * this.speed;
      }

      if(key === "a"){
        newPosition.x = -1 * this.speed;
      }

      if(key === "d"){
        newPosition.x = 1 * this.speed;
      }

      let canMove = true; 

      // Call collision handers for any objects passed in
      if(collisonHandlers){
        collisonHandlers.forEach(sceneObject => {
          if(sceneObject.isColliding(this.x + newPosition.x, this.y + newPosition.y)){
            // Character cannot move in this direction, proposed movement will be rejected
            canMove = false;
            
            this.say("Ouch!")
          }
        });
      }


      if(canMove){
        this.x += newPosition.x;
        this.y += newPosition.y;
      }

    }
    

    
    draw(){
      
      image(this.terminalIcon, this.x, this.y, 50, 50);

      fill(0);
      rect(this.x, this.y, 50, 50)
      fill(255)
      
      rect(this.x + 10, this.y + 10, 15, 5)
      rect(this.x + 35, this.y + 10, 15, 5)
      
      fill(255)
      textFont('Georgia');
      text("> ", this.x + 10, this.y + 25);

      if(this.talk){        
        fill(0)
        textSize(15);
        text(this.talk, this.x + 60, this.y);
      }
    }
  }