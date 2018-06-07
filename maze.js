// DOM elements to intereact with
const mazeDiv = document.getElementById("mazeDiv");
const avatarDiv = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the cells in the grid, in pixels.
const delta = 33;

// START HERE -----------------------------------------------------------------/
// Unlike the other difficulty levels, you have full control over how this game
// is implemented, so long as it behaves properly. If you find that it's
// difficult to get started, consider trying one of the other difficulties
// first:
//
//      $ git checkout hard
//
// Here are some hints to get started:
//
// - We've included some styles to make drawing the board easier. Try
//   experimenting with how the styles intereact with each other by writing HTMl
//   by hand in "index.html" first, before trying to generate a grid. For
//   starters, though, the "#mazeDiv" was intended to have ".row"s in it, each
//   of which had ".cell"s. ".cell" was meant to be combined with ".W", ".O",
//   etc to create cells of a certain kind.
//
// - You'll need to draw a map where the player's avatar and boxes are
//   absolutely positioned.
// 
// - You'll need to think about when a player should be allowed to move and when
//   a box is allowed to be pushed. That is, with the maze game, you only had to
//   consider the cell next to the player to determine if she could move or
//   not. With sokoban, you have to consider that cell in addition to the one
//   next to it -- you can't push a box if the cell it's next to isn't empty!
//    
// - When the player wins, a box should pop up exclaiming so. At the moment, it
//   is being hidden, so think about how you could cause that box to appear.
//
// - The player will need to move around, which means that you'll need to attach
//   event listeners to the arrow keys.
//
// - If you get stuck, try to ask a coach or instructor for help before moving
//   on to an easier difficulty. Don't give up!
