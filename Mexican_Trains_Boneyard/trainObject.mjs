//--------------------------------------------------------------------------//
 //--------------------------BONEYARD CLASS-----------------------------------//

    export class Boneyard {
        constructor(){
        //console.log(TrainSet)
        //Empty array to hold dominos 
        this.TrainSet=[]
        for(var i=0;i<=12;i++){
            for(var ii=i;ii<=12;ii++){
                //inserting all values into our array
                this.TrainSet.push(new Tile(i,ii))  
            }     
        }
    }
    drawTile(){
        return this.TrainSet.pop()
    }

    isEmpty(){
       let check= this.TrainSet.length==0 ? true:false
        return check;  
    }
/*
NOTE: Not my function I found this online , and used it in my code
//lInk to resource: https://javascript.info/array-methods#shuffle-an-array
*/
    shuffle(){
        this.TrainSet.sort( () => .5 - Math.random() );
        console.log("shuffling dominos")
    }
}

//--------------------------------------------------------------------------//
 //--------------------------TILE CLASS-----------------------------------//

export class Tile {
    constructor(right,left){
    this.right=right;
    this.left=left
    try{
    if(left<0 || left>12){
        throw `Left Domino: ${left} to low or to high \nConstructor takes a left value between 0 and 12`;
        
    }
    else if(right<0 || right>12){
        throw `RIght Domino ${right} to low or to high \nConstructor takes a right value between 0 and 12`;
    }
    } catch(err){
        console.log(err)
    }
    }
    toString(){
        return `[ ${this.left}, ${this.right} ]`
    }
    }
