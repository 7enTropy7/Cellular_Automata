let world;
let cols,rows;
let res = 10;

function count_alive_neighbors(world,x,y){
    let sum = 0;
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            let c = (x+i+cols)%cols;
            let r = (y+j+rows)%rows;
            sum += world[c][r];
        }
    }
    sum -= world[x][y];
    return sum;
}

function initialize_world(rows,cols){
    let arr = new Array(cols);
    for(let i=0;i<arr.length;i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup(){
    createCanvas(1820,840);
    cols = width/res;
    rows = height/res;
    reset_sketch();
    let button = createButton("Reset");
    button.mousePressed(reset_sketch);
}

function reset_sketch() {
    world = initialize_world(rows,cols);
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            world[i][j] = floor(random(2));
        }    
    }
}

function draw(){
    
    background(0);
    
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            let x = i * res;
            let y = j * res;
            if(world[i][j]==1){
                fill(0,255,0);
                stroke(0);
                rect(x,y,res-1,res-1);
            }
        }    
    }
    
    let new_world = initialize_world(rows,cols);
    
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            let state = world[i][j];        
            let sum = 0;
            let alive_neighbors = count_alive_neighbors(world,i,j);
            if(state == 0 && alive_neighbors == 3){
                new_world[i][j] = 1;
            }
            else if(state == 1 && (alive_neighbors<2 || alive_neighbors>3)){
                new_world[i][j] = 0;                
            }
            else{
                new_world[i][j] = state;
            }
        }
    }
    world = new_world;
}