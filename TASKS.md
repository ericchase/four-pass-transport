1. an A* search function
   - nothing fancy
   - just a simple A* search algorithm
   - cost and heuristic function will be given as closures

2. a min-heap data structure

3. higher-order heuristic function
   - given an array of numbers (tiles), produce a tailored heuristic function
   - where the corresponding tiles are considered walls
   - otherwise, return the Manhattan distance

4. permutation function
   - given an array of numbers, produces all permutations
   - in the form of another array

5. execution function
   - given an array of permutations of nodes
   - calls A* function between each 2 adjacent nodes in list per permutation
   - stores A* results into associative array and stores into min-heap
   - skip over entire permutation if A* results in a No Solution
   - returns the min-heap

<br>

6. gui function
   - given a min-heap of permutated pathings
   - display each possible pathing starting with the top of the min-heap
