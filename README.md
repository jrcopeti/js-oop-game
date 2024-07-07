# Catch them All: A Pokémon Game

https://catch-them-all.vercel.app/

![Screenshot](/assets/screenshots/1.png)
Intro screen

![Screenshot](/assets/screenshots/2.png)
Instructions

![Screenshot](/assets/screenshots/3.png)
Gameplay

![Screenshot](/assets/screenshots/6.png)
Throwing a Pokéball

![Screenshot](/assets/screenshots/4.png)
Catching a Pokémon

![Screenshot](/assets/screenshots/5.png)
Using a Masterball

![Screenshot](/assets/screenshots/7.png)
Game over

## Description

Catch them all is an interactive web-based game built using HTML5 Canvas and JavaScript. The game challenges players to catch various Pokémon by throwing Pokéballs as they move across the screen. Each level increases in difficulty with faster-moving Pokémon and special events.

The game features a player character that can move up and down, right and left, to catch Pokémons. Players can use Pokéballs to catch Pokémon and earn points. Special masterballs can catch all Pokémon on the screen at once. The game includes multiple levels with different backgrounds and sound effects.

## Features

- **HTML5 Canvas**: For rendering game graphics.
- **JavaScript**: Used to create game logic, control animations, and manage game states.
- **CSS**: Styles the game canvas and UI elements for a visually appealing experience.

## How to Play

### Controls

- **Arrow Up**, **Arrow Down**, **Arrow Right**, **Arrow Left**: Move the player character.
- **Spacebar**: Throw a Pokéball.
- **M Key**: Use a Masterball to catch all Pokémon on the screen.
- **Enter**: Pause or resume the game.

### Gameplay

1. **Start the Game**: Click the 'Start Game' button on the initial screen.
2. **Catch Pokémon**: Use the arrow keys to move your character up and down to align with Pokémon. Press the spacebar to throw Pokéballs.
3. **Avoid Missing Pokémon**: Missing Pokémon will result in a loss of life..
4. **Score Points**: Catching Pokémon earns points. Different Pokémon are worth varying amounts of points.
5. **Rare Pokémon**: They are worth more points and carry extra bonuses.
6. **Use Masterballs**: Special masterballs can catch all Pokémon on the screen at once. Use them wisely!
7. **Advance through Levels**: Catch the right number of Pokémons to advance to the next level, which features and different backgrounds and increased difficulty.
8. **Lives**: The player starts with three lives. Contact with certain Pokémon may result in a loss of life.
9. **Enemies**: Beware of enemies that can reduce your score, items and lives.

## Technical Structure

### HTML

- **Canvas**: The game is rendered on a `<canvas>` element, centered in the browser window.

### CSS

- **Styling**: The canvas and other UI elements are styled using CSS to enhance the visual appeal and user experience.

### JavaScript Classes

- **Game**: Manages game loop, game state, and interaction between game elements.
- **Player**: Handles player movement, rendering, and interactions.
- **Pokémon**: Represents individual Pokémon with their properties like speed, position, and score value.
- **Pokeball**: Manages the creation and movement of Pokéballs.
- **ScorePopup**: Displays a popup score when the player catches a Pokémon.

### Game Logic

- **Game Loop**: The game loop controls the rendering and updating of game elements.
- **Collision Detection**: Detects collisions between player, Pokéballs, and Pokémon.
- **Scoring**: Calculates and updates the player's score based on the Pokémon caught.
- **Levels**: Implements multiple levels with increasing difficulty and different backgrounds.

### Other Features

- **Sound Effects**: Adds sound effects for the actions on the game.
- **Music**: Includes background music that plays during the game.
- **Pause/Resume**: Allows the player to pause and resume the game using the Enter key.

Description:
A Pokémon game built using HTML5 Canvas and JavaScript classes. The game challenges players to catch various Pokémon by throwing Pokéballs as they move across the screen. Each level increases in difficulty.
