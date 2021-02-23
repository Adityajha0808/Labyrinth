# Labyrinth

A Maze game using Vanilla Javascript.

(Approx. 12 hr solo project)

Visit here:- https://adityajha0808.github.io/Labyrinth/

Used Randomized depth-first search algorithm and Recursive Backtracking technique for Maze creation!

Player is asked for the preferred maze size and Rows/Columns, according to which maze will be generated.

Frequently implemented with a stack, this approach is one of the simplest ways to generate a maze using a computer. According to chosen size by the user, Maze is created. Consider the space for a maze being a large grid of cells (like a large chess board), each cell starting with four walls. Starting from a random cell, the computer then selects a random neighbouring cell that has not yet been visited. The computer removes the wall between the two cells and marks the new cell as visited, and adds it to the stack to facilitate backtracking. The computer continues this process, with a cell that has no unvisited neighbours being considered a dead-end. When at a dead-end it backtracks through the path until it reaches a cell with an unvisited neighbour, continuing the path generation by visiting this new, unvisited cell (creating a new junction). This process continues until every cell has been visited, causing the computer to backtrack all the way back to the beginning cell. We can be sure every cell is visited.

~ Iterative implementation:

- Choose the initial cell, mark it as visited and push it to the stack
- While the stack is not empty
    1. Pop a cell from the stack and make it a current cell
    2. If the current cell has any neighbours which have not been visited
         a. Push the current cell to the stack
         b. Choose one of the unvisited neighbours
         c. Remove the wall between the current cell and the chosen cell
         d. Mark the chosen cell as visited and push it to the stack
     
Once the maze is created, player can move the purple square avatar using arrow keys. The goal is to reach the green square marking the exit, Their is a timer at the top of the maze which will track the time taken by the player.

As the player completes the puzzle, a greeting prompt is thrown which shows the time taken and the total number of steps to complete maze; And allows if user want to restart!
