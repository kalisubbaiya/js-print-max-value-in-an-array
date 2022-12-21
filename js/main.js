let array=[18,7,45,333,17,3,1,27];
let big=array[0];
function bigger(){
    for(i=0;i<array.length;i++){
        if(array[i]>big){
            big=array[i];
        }
    }
    console.log(big);
}
bigger();