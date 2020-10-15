// The terminal, the starting scene for my demo game 

class Terminal {
    
    // Constructor function 
    constructor(themeColor) {
      this.backgroundColor = themeColor || color(240);
      this.level = 0;
      this.userText = "";

      // Load an image and a font
      this.terminalIcon = loadImage("src/assets/terminal.png")
      this.font = loadFont("src/assets/IBM-Terminal.ttf");
    
      // If true, show an "access denied" message
      this.lastAnswerIncorrect;
    }

    handleKeyBoardInput(){
        if(key === "Backspace"){
            // If input is backspace, remove the last character from the user input
            this.userText = this.userText.substring(0, this.userText.length - 1)
        }else if(key === "Enter") {
            // If the key is enter, check the command
            this.checkIfLevelPassed();
        }
        else if(key && key !== this.userText[this.userText.length - 1] && this.level < 100){
            this.userText += key;
        }
    }

    checkIfLevelPassed(){
        switch(this.level){
            case 0:
                // Open the file
                if(this.userText.toLowerCase().indexOf("open") + 1){
                    this.level++; 
                    this.lastAnswerIncorrect = false;
                }else{
                    this.lastAnswerIncorrect = true;
                }
                break;
            case 1: 
                // sudo chmod 777 file
                if(this.userText.toLowerCase().indexOf("sudo") + 1 && 
                    this.userText.toLowerCase().indexOf("chmod") + 1){
                        this.level++; 
                        this.lastAnswerIncorrect = false;
                }else{
                        this.lastAnswerIncorrect = true;
                }
                break;
            case 2: 
                // Shutdown now
                if(this.userText.toLowerCase().indexOf("shutdown") + 1 || 
                    this.userText.toLowerCase().indexOf("reboot") + 1){
                        this.level = 100;   
                } else {
                        this.level = 101;
                }
                break;
        }
        

        this.userText = "";
    }


    draw(){
        // This is a very basic scene which only consits of an image, some text and a flashing bar

        background(this.backgroundColor)

        textFont(this.font);

        image(this.terminalIcon, (width / 2) - 25, 50, 50, 50);

        if(this.lastAnswerIncorrect){
            fill(255, 0, 0);
            textSize(45);

            // Animate the "!" after access denied
            if(frameCount % 60 < 30){
                text("ACCESS DENIED!", 120, 400);
            }else{
                text("ACCESS DENIED", 120, 400);
            }

        }

        fill(0);
        textSize(25);

        // Display user input 
        if(this.userText){
            text(this.userText, 80, 275);
        }

        if(frameCount % 60 < 30 && this.level < 100){
            fill(0);
            stroke(255)
            rect(50, 250, 15, 40);
        }

        // Question to ask, based on what level the user is on
        switch(this.level){
            case 0:
                text("> You discover a strange file on \nyour computer. What do you do? ", 50, 200);
                break;
            case 1:
                text("> You do not have permissions to \nopen the file. What do you do? ", 50, 200);
                break;
            case 2:
                text("> The file is an executable. \nWhat do you do? ", 50, 200);
                break;

            case 100:
                text("> You win!  ", 50, 200);
                break;
            case 101:
                text("> Your computer was distroyed.  ", 50, 200);
                break;
        }
    }

  }