function draw(){
		let canvas = document.getElementById('canvas');
		let ctx = canvas.getContext('2d');
		let dots = []

		canvas.addEventListener('click', (event) => {
				let dotX =  [event.clientX];
				let dotY  = [event.clientY];
				let dot = dotX.concat(dotY)
				dots.push(dot)
				if(dots.length == 3){
					drawCanvas(dots,ctx)
				}

		  });
}


const drawCanvas = (dots,ctx)=>{
	
	let x= 1
	for(let i = 0;i<dots.length; i++){
		
		ctx.fillRect(dots[i][0] , dots[i][1], x, x)
	}

	function getRandomArbitrary(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  }

	let currentPoint = dots[0];


	function* idGenerator() {
		let i = 0;
		while (i<100000) {
			let j = getRandomArbitrary(0, 2)
			let newDot = [((currentPoint[0]+dots[j][0])/2), ((currentPoint[1]+dots[j][1])/2)]
			ctx.fillRect(newDot[0],newDot[1], x, x)
			currentPoint = newDot;
		  yield i++;
		}
	  }

	  let it = idGenerator()

	  setInterval(() => {
		it.next().value;
	  }, 5);


	
	// for(let i= 0 ; i< 1000000; i++){
	// 	setTimeout(() => {
	// 	let j = getRandomArbitrary(0, 2)
	// 	let newDot = [((currentPoint[0]+dots[j][0])/2), ((currentPoint[1]+dots[j][1])/2)]
	// 	ctx.fillRect(newDot[0],newDot[1], x, x)
	// 	currentPoint = newDot;
	// 	}, 100);
	// }

}

    	// ctx.fillStyle = "rgb(200,0,0)";ctx.beginPath();
		// ctx.arc(1400, 200, 55, 50,Math.PI*2,true);
        // ctx.fillRect (1400, 200, 55, 50);

        // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        // ctx.fillRect (100, 200, 55, 50);
		
		// ctx.fillStyle = "rgb(177, 252, 115)";
        // ctx.fillRect (800, 700, 55, 50);


		// ctx.beginPath();
		// ctx.arc(1400, 200, 15, 0, 2*Math.PI, false);
		// ctx.fillStyle = "rgb(106, 224, 106, 0.603)";
		// ctx.fill();
		// ctx.lineWidth = 1;
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(100, 200, 15, 0, 2*Math.PI, false);
		// ctx.fillStyle = "rgba(138, 138, 138, 0.603)";
		// ctx.fill();
		// ctx.lineWidth = 1;
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(800, 700, 15, 0, 2*Math.PI, false);
		// ctx.fillStyle = "rgb(0, 0, 0)";
		// ctx.fill();
		// ctx.lineWidth = 1;
		// ctx.stroke();


		// ctx.beginPath();
		// ctx.arc(30,30, 15, 0, 2*Math.PI, false);
		// ctx.fillStyle = "rgb(155, 62, 209, 0.603)";
		// ctx.fill();
		// ctx.lineWidth = 1;
		// ctx.stroke();
