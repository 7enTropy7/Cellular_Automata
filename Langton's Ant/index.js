let world;
let cols,rows;
let res = 10;
let x;
let y;
let ant_up = 0;
let ant_right = 1;
let ant_down = 2;
let ant_left = 3;
let dir;

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
    world = initialize_world(rows,cols);
    
    x = 90;
    y = 40;
    dir = ant_up;

    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            world[i][j] = 0;
            if(i == x && j == y){
                world[i][j] = 1;
            } 
        }    
    }
}


function turn_right(){
    dir++;
    if(dir>ant_left){
        dir = ant_up;
    }
}

function turn_left(){
    dir--;
    if(dir<ant_up){
        dir = ant_left;
    }
}

function move_forward(){
    if(dir == ant_up){
        y--;
    }
    else if(dir == ant_right){
        x++;
    }
    else if(dir == ant_down){
        y++;
    }
    else if(dir == ant_left){
        x--;
    }

    if(x>width){
        x = 0;
    }
    else if(x<0){
        x = width - 1;
    }

    if(y>height){
        y = 0;
    }
    else if(y<0){
        y = height - 1;
    }

}

function draw(){
    
    background(0);

    let state = world[x][y];

    if(state == 0){
        turn_right();
        world[x][y] = 1;
        move_forward();
    }
    else if(state == 1){
        turn_left();
        world[x][y] = 0;
        move_forward();
    }

    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            let x = i * res;
            let y = j * res;
            if(world[i][j]==0){
                fill(255,0,0);
                stroke(0);
                rect(x,y,res-1,res-1);
            }
            else{
                fill(0,0,0);
                stroke(0);
                rect(x,y,res-1,res-1);
            }
        }    
    }
}