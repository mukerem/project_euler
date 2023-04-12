

function solve(x, y, path){
    if(path[x][y] != 0) return path[x][y];
    // if(x == n || y == n) path[x][y] = 1;
    else path[x][y] = solve(x + 1, y, path) + solve(x, y + 1, path);
    return path[x][y];
}
function latticePaths(gridSize) {
    const path = new Array(gridSize+1);

    for (let i = 0; i < path.length; i++) {
    path[i] = new Array(gridSize+1).fill(0);
    }
    for(let i = 0; i <= gridSize; i++){
        path[gridSize][i] = 1;
        path[i][gridSize] = 1;
    }

    solve(0, 0, path);
    return path[0][0];
    
}
  
console.log(latticePaths(2));
console.log(latticePaths(4));
console.log(latticePaths(20));