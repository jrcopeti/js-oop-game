# Catch the Pokémons

## Description
Catch the Pokémons is an interactive web-based game built using HTML5 Canvas and JavaScript. The game challenges players to catch various Pokémon by throwing Pokéballs as they move across the screen. Each level increases in difficulty with faster-moving Pokémon and special events.

## Features
- **HTML5 Canvas**: For rendering game graphics.
- **JavaScript**: Used to create game logic, control animations, and manage game states.
- **CSS**: Styles the game canvas and UI elements for a visually appealing experience.

## How to Play

### Controls
- **Arrow Up**: Move the player up.
- **Arrow Down**: Move the player down.
- **Spacebar**: Throw a Pokéball.
- **M Key**: Use a Masterball to catch all Pokémon on the screen.
- **Enter**: Pause or resume the game.

### Gameplay
1. **Start the Game**: Click the 'Start Game' button on the initial screen.
2. **Catch Pokémon**: Use the arrow keys to move your character up and down to align with Pokémon. Press the spacebar to throw Pokéballs.
3. **Score Points**: Catching Pokémon earns points. Different Pokémon are worth varying amounts of points.
4. **Use Masterballs**: Special masterballs can catch all Pokémon on the screen at once. Use them wisely!
5. **Advance through Levels**: Accumulate enough points to advance to the next level, which features faster Pokémon and different backgrounds.
6. **Lives**: The player starts with three lives. Contact with certain Pokémon may result in a loss of life.

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

## Installation

To play the game, simply clone the repository and open `index.html` in your browser:
```bash
git clone [repository-url]
cd [repository-folder]
open index.html
