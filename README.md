# Labyrinth

A Maze game using Vanilla Javascript.

(Approx. 12 hrs solo project)

Visit here:- https://adityajha0808.github.io/Labyrinth/

## Explanation

Used Randomized *Depth-first search* algorithm and *Recursive Backtracking* technique for Maze creation!

Frequently implemented with a stack, this approach is one of the simplest ways to generate a maze using a computer. According to chosen size by the user, Maze is created. Consider the space for a maze being a large grid of cells (like a large chess board), each cell starting with four walls. Starting from a random cell, the computer then selects a random neighbouring cell that has not yet been visited. The computer removes the wall between the two cells and marks the new cell as visited, and adds it to the stack to facilitate backtracking. The computer continues this process, with a cell that has no unvisited neighbours being considered a dead-end. When at a dead-end it backtracks through the path until it reaches a cell with an unvisited neighbour, continuing the path generation by visiting this new, unvisited cell (creating a new junction). This process continues until every cell has been visited, causing the computer to backtrack all the way back to the beginning cell. We can be sure every cell is visited.

### Iterative implementation:

```
- Choose the initial cell, mark it as visited and push it to the stack
- While the stack is not empty
    1. Pop a cell from the stack and make it a current cell
    2. If the current cell has any neighbours which have not been visited:-
          (a) Push the current cell to the stack
          (b) Choose one of the unvisited neighbours
          (c) Remove the wall between the current cell and the chosen cell
          (d) Mark the chosen cell as visited and push it to the stack
         
The goal is to make the purple avatar, meet the green box. Steps are:-
        (1) Select the maze size between 300 to 600.
        (2) Select the number of rows/columns(between 5-30) for the maze to be generated.
        (3) Hold on! The algorithm will generate a maze as per your requirements.
            Once maze is generated the purple colored avatar rests back to initial position.
        (4) After maze generation, you can start moving by using arrow keys to reach your destination.
```
 
A step tracker and a time tracker is also implemented to mark down the user's statistics.

As the player completes the puzzle, a greeting prompt is thrown which shows the user statistics and allows if user want to restart!

## Hosting

The website is currently hosted online with GitHub Pages.
