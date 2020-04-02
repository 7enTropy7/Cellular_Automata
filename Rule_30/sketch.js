let world;
let res;

function initialize_world(rows,cols){
    let arr = new Array(cols);
    for(let i=0;i<arr.length;i++){
        arr[i] = new Array(rows);
    }
    return arr;
}


function XOR_Gate(a,b) {
	if (((world[a-1][b-1]==1) && !((world[a+0][b-1]==1) || (world[a+1][b-1]==1))) || (!(world[a-1][b-1]==1) && ((world[a+0][b-1]==1) || (world[a+1][b-1]==1)))){
		world[a][b] = 1;
		return world[a][b];
    } 
    else {
		world[a][b] = 0;
		return world[a][b];
	}
}

function setup(){
    createCanvas(1800,840);
    res = 4;
	cols = floor(width / res);
    rows = floor(height / res);
    world = initialize_world(rows,cols);
    world[floor((cols - 1) / 2)][0] = 1;
    for (var i=0;i<rows;i++) {
		for (var j=0; j<cols;j++) {
			if (j!==0 && i!==0 && j!==cols-1){
                XOR_Gate(j,i);
            }
		}
		for (var k=cols-1;k>0;k--) {
			if (k!==0 && i!==0 && k!==cols-1){
                XOR_Gate(k,i);
            }
		}
	}
}

function draw(){
    background(0);
    for (var i=0;i<cols; i++){
		for (var j=0;j<rows;j++){
			if((world[i][j]==1)){
                fill(0,0,255);
            }
			else{
                fill(0);
            }
			stroke(0);
			strokeWeight(0.25);
			rect(i*res,j*res,res-1,res-1);
		}
	}
}