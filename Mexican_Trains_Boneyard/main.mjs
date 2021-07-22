import {Tile, Boneyard} from './trainObject.mjs'
let boneYard = new Boneyard();
//need to shuffle to get random order
boneYard.shuffle()
console.log(`Boneyard. Total tiles: ${boneYard.TrainSet.length}`);
while(!boneYard.isEmpty()){
    console.log(`Total tiles: ${boneYard.drawTile().toString()}`);
    //console.log(boneYard.Tile.length)
}


