# Generative Art

## Description
**Generative Art** is a code-based project that creates unique pieces of art using JavaScript and the [p5.js library](https://p5js.org/). Each piece is generated programmatically, allowing for a variety of visual outputs.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone this repository to your local machine.
2. Open a terminal, navigate to the project directory, and install the dependencies by running:

   ```bash
   npm install

### Running the Project
To run the project locally, use the command:

   ```bash
   npm run start
   ```

### Switching Between Art Pieces
To run different pieces of art, open the `index.html` file and change the file referenced in the `<script>` tag. For example:

   ```html
   <script src="/art/rects.js"></script>
   ```
Replace rects.js with the filename of the art piece you want to display.

### Project Structure
- **/art** - Contains individual JavaScript files, each representing a unique piece of generative art.
- **index.html** - The main HTML file used to load specific art scripts.

### Built With
- **JavaScript** - The primary language for this project.
- **p5.js Library** - A creative coding library for easy canvas manipulation and interactive visuals.
