function convertToRoman(num) {
  	
        	const obj = [
		{value:1000,symbol:'M'},
		{value:500,symbol:'D'},
		{value:100,symbol:'C'},
		{value:50,symbol:'L'},
		{value:10,symbol:'X'},
		{value:5,symbol:'V'},
		{value:1,symbol:'I'},
	
    ];


	let result = "";
	for (let i = 0; i < obj.length; i++) {
		if(num>= obj[i].value){
			result += obj[i].symbol;
			num -=obj[i].value;
		}
	}
 
    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 // console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
