// DOM elements to intereact with
const mazeDiv = document.getElementById("mazeDiv");
const avatarDiv = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
let avatarRow; 
let avatarCol;

// Separate array for keeping track of the moving crates.
const crates = [];

// START HERE -----------------------------------------------------------------/
// While the maze project only kept track of (W)alls, the player's
// (S)tarting position, and the (F)inishing position, in sokoban, we
// have to keep track of (O)pen storage locations, (B)oxes, and
// e(X)actly where to move those boxes to. 
//
// Write a conditional that adds Xs to the "crateRow" variable but uses
// an "O" class for the cell. "B"
//
// Your task is to write a for loop that draws the map, taking the above cell
// types into consideration. Keep in mind that the player and boxes will be
// absolutely positioned (so that they can be moved) and that you'll need to
// draw a box for both B's _and_ X's. 
//
// Similarly, you'll want to draw a a storage location for both O's and X's. In
// other words, X is a tile that has both a box and something indicating it as
// storage at the same time.
//
// Continue to STEP 2


// Helper function for creating a div representing a box/crate,
// and positioning it at a specified row/column in the grid.
function crate(row, col) {
    const newCrate = document.createElement("div");

    newCrate.className = "crate";
    newCrate.style.left = col * delta + "px";
    newCrate.style.top = row * delta + "px";
    mazeDiv.appendChild(newCrate);

    return newCrate;
}


// Update the coordinates of the player's avatar.
function redrawAvatar() {
    avatarDiv.classList.remove("hidden");
    avatarDiv.style.top = avatarRow * delta + "px";
    avatarDiv.style.left = avatarCol * delta + "px";
}

// Move the player's avatar in the specified direction
// dRow is the desired change in row (-1, 0, or +1)
// dCol is the desired change in column (-1, 0, or +1)
function move(dRow, dCol) {
    // Calculate the coordinates the player wants to move to.
    const destRow = avatarRow + dRow;
    const destCol = avatarCol + dCol;
    const destCell = map[destRow][destCol];

    // Check if there is a crate there.
    const crate = crates[destRow][destCol];

    // STEP 2 -----------------------------------------------------------------/
    // For the maze, it was enough to check that the place the player wanted to
    // move was empty. Here, we want to check if the place that the player wants
    // to move has a crate in it, and if so, if the space next to that crate is
    // empty. If so, we can move that crate.
    //
    // The following conditional successfully determines if there is a crate
    // next to a player and if there is an empty cell next to the crate.
    // However, it does not properly account for when there is another crate
    // or a wall next to the crate that the player wants to move. Your task is
    // to add logic to account for those two possibilities.
    if(crate) {
        // Calculate the coordinates we would need to push the crate.
        const crateDestRow = destRow + dRow;
        const crateDestCol = destCol + dCol;

        // Push the crate.
        crates[crateDestRow][crateDestCol] = crate;
        crates[destRow][destCol] = null;
        crate.style.top = crateDestRow * delta + "px";
        crate.style.left = crateDestCol * delta + "px";

    }

    // If there's no wall in the way, move the player's avatar.
    if(destCell && destCell !== "W") {
        avatarRow += dRow;
        avatarCol += dCol;
        redrawAvatar();
    }

    checkForWin();
}

function checkForWin() {
    for(let row = 0; row < map.length; row++) {
        for(let col = 0; col < map[row].length; col++) {
            // Is there a crate that's not on a storage location?
            if(crates[row][col] && (map[row][col] !== "O" && map[row][col] !== "X")) {
                return;
            }
        }
    }

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
