Array.prototype.isSubsetOf = 
function(subset, array){
    var result= true;
    each(subset,function(value){
        if(!contains(value,array)){
            result=false;
            return result;
        }
        });

        return result;
    }
    

function contains(word,array){
    var result= false;
    for(var i=0; i<array.length;i++){
        if(array[i]===word){
            result= true;
        }
    }
    return result;
}

function each(collection,callback){
    for(var x=0;x<collection.length;x++){
        callback(collection[x]);
    }
}

console.log( ["dog","cat"].isSubsetOf(["dog","fox","cat"]));
