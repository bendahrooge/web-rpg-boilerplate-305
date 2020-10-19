# web-rpg-boilerplate-305
 
A basis for creating a Javascript-based game using the p5.js libaray. 

### Project Structure

- lib/ contains all p5js files, and likely should not be editited
- src/ is intended to hold all project-related Javascript files
- src/assets/ is intended to contain any non-code files needed to make the game run (e.g., images, sounds, datafiles)

To keep things orgainzed, it is recommended that any files that define a specfifc secene are named **scenename**.scene.js. The same goes for movable entities **entitiyname**.model.js and non-moveable game objects **objectname**.object.js.

TODO: 

1. Create a moveable entitiy class, with support for accept keyboard input, moving to a position from a call to a public method and collision with other objects in the scene, and inventory 
    - Should save the player's position, active scene, inventory etc to the browser as localStorage. (Check local storage for existing data when constructor is called.)
2. Create a nonmoveable object class, with support for interacting moveables and on user click
3. Create a scene class? (Used for both scenes where the player is moveable and for minigames where the player might not be visible on the screen)
4. Create an item class 

Ideas for extenions 

Story extends scene : A scene that shows mostly dialouge that is passed to the consturcotr (e.g., cut scenes)

Game extends scene : Class for minigames ? 