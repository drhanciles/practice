// we are given an [] with nested [] as it's elements
// each element in the nested [] is a num that represents the height of an individual building
// each grid aka [] that contains nested [] is a skyline 
//  we are allowed to ++ the num in each nested [] by any amount 
// the new skyline must be the same as skyline from the original grid
// find the max total sum the height of buildings can be increased

// solution

const inspect = m =>  m[0].map((x, i) => m.map(x => x[i]))
// we need a helper function that will return a new [] with a nested [] 

var maxIncreaseKeepSkyline = (grid) => {
  let rowMaxes = grid.map(row => Math.max(...row))
  let colMaxes = inspect(grid).map(col => Math.max(...col))
  // these variables are return to us the highest values from the rows and columns from the grid into new []

  let increase = 0; 
  // the value we will eventually return 
  for (let i = 0; i < grid.length; i++) {
    // this is allowing us to iterate through our grid
    for (let j = 0; j < grid[i].length; j++) {
      // this is a second iterator that will allow us to keep track of which nested [] we are on
      let newTotal = Math.min(rowMaxes[i], colMaxes[j])
      increase += newTotal - grid[i][j]
    }
  }
  return increase; 
}
