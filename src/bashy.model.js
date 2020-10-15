// Bashy the bashman - A model character ES6 class

class Character {
    constructor(name) {
      this.name = "Bashy"
    }
    
    say(text){
      this.talk = text;
    }
    
    draw(x, y){
      
      fill(0);
      rect(x, y, 50, 50)
      fill(255)
      
      rect(x + 10, y + 10, 15, 5)
      rect(x + 35, y + 10, 15, 5)
      
      if(this.talk){        
        fill(0)
        textSize(15);
        textFont('Georgia');
        text(this.talk, x + 60, y);
      }
    }
  }