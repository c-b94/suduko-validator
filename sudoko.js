let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzle2 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]]; 
              
let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];             

function getRow(arr,num){
return arr[num];
}

function getColumn(arr,num){
let column = [];
    for(let i = 0;i<arr.length;i++){
    column[i] = arr[i][num];  
    }
        return column;
}

function getSection(arr,num1,num2){
let section = [];
let ynum = (num1*3);
let xnum = (num2*3);
    for(let y = ynum;y<ynum+3;y++){
        for(let x = xnum;x<xnum+3;x++){
            section.push(arr[y][x]);
            
        }
    }
    return section;
}

function includes1to9(arr){
if(arr.length === 9){    
    for(let i = 1;i<10;i++){
        let counter = 0;
        for(let k = 0;k<arr.length;k++){
            if(arr[k]===i){
                counter++;
            }
           //
        }
        if(counter >1){
            return false;
        }
    }
    return true;
}
return false;
}

function sudokuIsValid(arr){
let row = [];
let column = [];
let section = [];
let xaxis = 0;
let yaxis = 0;

    for(let i = 0;i<arr.length;i++){//checks if columns and rows have 9 non repeating numbers
        
        if(includes1to9(getRow(arr,i)) !== true){
            
            return false;
        }
        if(includes1to9(getColumn(arr,i)) !== true){
            return false;
        }
        
    }
    for(xaxis = 0;xaxis<3;xaxis++){// check if sections have 1-9 and non repeating
        for(yaxis = 0;yaxis<3;yaxis++){
            if(includes1to9(getSection(arr, xaxis,yaxis)) !== true){
                return false; 
            }
        }
    }
    return true;
}

function isSame(arr1,arr2){
    if(sudokuIsValid(arr1) && sudokuIsValid(arr2)){
        for(let i = 0;i<arr1.length;i++){
            
            for(let k = 0;k<arr1.length;k++){
                if(arr1[i][k] !== arr2[i][k]){
                    return console.log('are these sudoku puzzles the same?:',false);
                }
            }
        }
        return console.log('are these sudoku puzzles the same?:',true);  
    }
    return console.log('failue: one of these is not a sudoku puzzle:',-1);
}



 console.log('get row:(puzzle,8):',getRow(puzzle, 8));
// // // -> [ 3,2,8,1,9,6,5,4,7 ]


console.log('get row:(puzzle,0):',getRow(puzzle, 0));
// // // -> [ 8,9,5,7,4,2,1,3,6 ]

console.log('get column:(puzzle,0):',getColumn(puzzle, 0));
// // // -> [ 8,2,4,9,5,6,1,7,3 ]

console.log('get column:(puzzle,8):',getColumn(puzzle, 8));
// // // -> [ 6,5,2,8,4,1,3,9,7 ]

console.log('get section:(puzzle,0,0):',getSection(puzzle, 0, 0));
// // // -> [ 8,9,5,2,7,1,4,6,3 ]

// /// This grabs the values from column 0 and row 1 (second from the top left)
console.log('get section:(puzzle,0,1):',getSection(puzzle, 0,1));
// // // -> [ 7,4,2,9,6,3,5,8,1 ]

console.log('includes1to9 correct:[1,2,3,4,5,6,7,8,9]:',includes1to9([1,2,3,4,5,6,7,8,9]));
console.log('includes1to9 wrong:[1,1,2,3,4,5,6,7,8]:',includes1to9([1,1,2,3,4,5,6,7,8]));

console.log('is this array in sudoku format?(p8zzle)',sudokuIsValid(p8zzle));
console.log('is this array in sudoku format?(puzzle)',sudokuIsValid(puzzle));

isSame(puzzle, p8zzle);
isSame(puzzle, puzzle2);
isSame(puzzle, puzzleCopy);

