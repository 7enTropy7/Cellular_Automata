let fr = 15;
let grid;
let world;
let rows,cols;
let res = 20;
let flag = 0;

class Cell{
    constructor(i,j,res){
        this.i = i;
        this.j = j;
        this.x = this.i*res;
        this.y = this.j*res;
        this.state = 0;
    }
    
    clicked(mx,my){
        if(this.x<mx && mx<this.x+res && this.y<my && my<this.y+res){
            if(this.state == 0){
                this.state = 1;
            }
            else{
                this.state = 0;
            }
        }
    }

    show(){
        if(this.state == 1){
            fill(0,255,0);
            stroke(0);
            rect(this.x,this.y,res-1,res-1);
        }
    }
}

function initialize_world(){
    let arr = new Array(cols);
    for(let i = 0;i<arr.length;i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

function mousePressed() {
    for(let i=0;i<cols;i++) {
        for(let j=0;j<rows;j++){
            world[i][j].clicked(mouseX, mouseY);
        }
    }
}

function setup(){
    createCanvas(1820,800);
    frameRate(fr);
    cols = width/res;
    rows = height/res;
    apocalypse();
    let simulate_button = createButton("Simulate");
    simulate_button.mousePressed(simulate);
    let reset_button = createButton("Reset");
    reset_button.mousePressed(reset_world);
}

function reset_world(){
    flag = 0;
}

function apocalypse(){
    world = initialize_world();
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            world[i][j] = new Cell(i,j,res);
        }
    }
}

function simulate(){
    grid = initialize_world();
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            grid[i][j] = world[i][j].state;
        }
    }
    flag = 1;
}

function count_alive_neighbors(grid,x,y){
    let sum = 0;
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            let c = (x+i+cols)%cols;
            let r = (y+j+rows)%rows;
            sum += grid[c][r];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function draw(){
    background(0);
    if(flag == 0){
        for(let i=0;i<cols;i++){
            for(let j=0;j<rows;j++){
                let x = i * res;
                let y = j * res;
                if(world[i][j].state == 1){
                    world[i][j].show();
                }
            }    
        }
    }
    else{
        for(let i=0;i<cols;i++){
            for(let j=0;j<rows;j++){
                let x = i * res;
                let y = j * res;
                if(grid[i][j]==1){
                    fill(0,255,0);
                    stroke(0);
                    rect(x,y,res-1,res-1);
                }
            }    
        }
        
        let new_world = initialize_world(rows,cols);
        
        for(let i=0;i<cols;i++){
            for(let j=0;j<rows;j++){
                let state = grid[i][j];        
                let sum = 0;
                let alive_neighbors = count_alive_neighbors(grid,i,j);
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
        grid = new_world;
    }
}
