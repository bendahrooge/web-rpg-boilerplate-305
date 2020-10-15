// A small screen to demo collision, etc.

class DemoScene {
    
    // Constructor function 
    constructor() {

        // Define the scene objects in the constructor
        // If the scene were more advanced, certain groups of compoents (e.g., A room) could be made into class themselves. 
        // It may also be bennifical to store these objects in an array
        this.myCharacter = new Character("Demo player", 200, 200);
        this.leftBush = new Bush(50, 50, 100, 50);
        this.rightBush = new Bush(400, 50, 100, 50);

        this.rightBush.onCollide = function(){
            currentScene = miniGame;
        }

        // Note: Creating a new instance of a class should ALWAYS be done inside of a consturtor, and not inside of draw() 
        // - otherwise this is creating infinite empty objects uselessly

    }

    draw(){
        // This is a demo scene to show collision and a moving character...

        // Clear the frame by filling a background color
        background(200);

        // Pass keyboard events to our character so that they move? 
        if(keyIsPressed){
            this.myCharacter.move([this.leftBush, this.rightBush])
        }

        this.leftBush.draw();
        this.rightBush.draw();

        this.myCharacter.draw();

        textSize(25)
        fill(0);
        text("The left bush will hurt you! ", 50, 400)
        text("But there is a minigame under the right bush! ", 50, 440)
        

        
    }

  }