console.log("Hello Class!");

var name= "Global";

function myFunc(){
	console.log(this.name);
}

var myObj={
	name: "myObj"
};

myFunc(); // Global 

myObj.myFunc= myFunc; //myObj

//refers to the object that it's called upon

myFunc.call(myObj); // myObj 

[1,2,3,4,5].forEach(myObj.func)// Global 5x

[1,2,3,4,5].forEach(function(){
	myObj.func(item);
}); //myObj 5x

//free function implications vs. context 