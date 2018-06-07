// DOM elements to intereact with
const mazeDiv = document.getElementById("mazeDiv");
const avatarDiv = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
let avatarRow; 
let avatarCol;

// START HERE -----------------------------------------------------------------/
// While the maze project only kept track of (W)alls, the player's
// (S)tarting position, and the (F)inishing position, in sokoban, we
// have to keep track of (O)pen storage locations, (B)oxes, and
// e(X)actly where to move those boxes to. 
//
// Write a for loop to draw the game board.
//
// When drawing the map, remember to consider how the above new cells behave.
// You may find it useful to keep track of crates together so that it's easier
// to check for a win condition later, though this isn't strictly necessary.
//
// Continue to STEP 2

function move(dRow, dCol) {
    // STEP 2 -----------------------------------------------------------------/
    // Complete this move function. It should not only allow the player to move
    // into empty spaces, but should allow crates that are not next to walls or
    // other crates to be pushed into empty cells. Keep in mind that if a crate
    // is pushed, the player should then be moved into that empty space.
    //
    // The "dRow" and "dCol" arguments that we have provided are the destination
    // row and destination column offsets that the player wants to move so,
    // similar to what we did with the maze game.
    //
    // Once all pieces have been moved, be sure to check if the player won.
}

function checkForWin() {
    // STEP 3 -----------------------------------------------------------------/
    // Write a function that checks if the player won. A player wins when all
    // boxes are moved over all storage spaces.
    //
    youWonDiv.classList.remove("hidden");
}

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case "ArrowDown":
            move(1,0);
            break;
        case "ArrowUp":
            move(-1,0);
            break;
        case "ArrowLeft":
            move(0,-1);
            break;
        case "ArrowRight":
            move(0,1);
            break;
        default:
            console.log('keydown event\n\nkey: ' + event.key);
    }
});

youWonDiv.addEventListener("click", () => location.reload());
