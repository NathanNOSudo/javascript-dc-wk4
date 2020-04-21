const space = function (spc) {
	if(spc === 0) {
		return "";}
		return " " +space (spc-1);
    };
	const star = function (str){
		if (str === 0) {
			return "";}
			return "*" + star(str-1);
		};
		const run = function (n,spc,str) {
			if(n===0) {
				return " ";}
				console.log(space(spc)+star(str))
			run(n-1,spc-1,str+2);
		}
		const triangleStars = function(n)
		{
			run(n,n-1,1)
		};
        console.log(triangleStars(113));
        
		/* 
		Another way to do it.
		let pyramidComplete = (rows) => {
  
			for(let i = 1; i <= rows; i++){
			  let str = '';
			  
			  //Add the white space to the left
			  for(let k = 1; k <= (rows - i); k++){
				str += ' ';
			  }
			  
			  //Add the '*' for each row
			  for(let j = 0; j != (2 * i - 1); j++){
				str += '*';
			  }
			  
			  //Add the white space to the right
			  for(let k =  i + 1; k <= rows; k++){
				str += ' ';
			  }
			  
			   //Print the pyramid pattern for each row
			  console.log(str);
			}
		 } */