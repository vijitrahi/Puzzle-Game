	var arr = [1,2,3,4,5,6,7,8,9];
	var squares = document.querySelectorAll(".square");
	var current = 0;				//Holds position of brown box
	var img = [0,0,0,0,0,0,0,0,0];	//To set images
	var count = 0;
	var time1 = new Date(); 		//For Starting time whenever new game starts
	var start = null;				//To set time update intervals
	var time;						//For total time
	var solved = 0;					//1 if puzzle solved
	
	function timer(){
		updateClock();
		start = setInterval("updateClock()", 10);
	}
	function updateClock(){
		var time2 = new Date();
		time = new Date(time2-time1);		
		 min = time.getUTCMinutes()
        ,sec = time.getUTCSeconds()
        ,ms = parseInt(time.getUTCMilliseconds()/10);
		if(solved==0){
			document.getElementById("time").innerHTML = "Puzzle Game////////////////TIME : " +
			(min <= 9 ? "0"+min : min ) + ":" +
			(sec <= 9 ? "0"+sec : sec );
		}
		if(solved==1){
			document.getElementById("reset").innerHTML = "<div id='score'> TIME TAKEN: " +
			(min <= 9 ? "0"+min : min ) + ":" +
			(sec <= 9 ? "0"+sec : sec ) + "</div>";
		}
	}
	
	function randomImageGenerator(){					//Put images randomly
		for( var i = 9; i > 0; i--){
			var random = Math.floor((Math.random()*i));
			var image2 = document.getElementById(i);
			img[i] = arr[random];
			var text2 = "Photos/" + img[i] + ".jpg";
			image2.src = text2;
			if(arr[random] == 9)
				current = i;
			arr.splice(random,1);
		}
	}
	
	randomImageGenerator();
	
	up.addEventListener("click",function(){
		if(current - 3 > 0){
			current = current - 3;
			var swap = img[current];
			img[current] = img[current+3];
			img[current+3] = swap;
			var image2 = document.getElementById(current);
			var image1 = document.getElementById(current + 3);
			var text2 = "Photos/" + img[current + 3] + ".jpg";
			var text1 = "Photos/" + img[current] + ".jpg";
			image1.src = text2;
			image2.src = text1;
			completed();
		}
	});
		
	down.addEventListener("click",function(){
		if(current + 3 < 10){
			current = current + 3;
			var swap = img[current];
			img[current] = img[current-3];
			img[current-3] = swap;
			var image2 = document.getElementById(current);
			var image1 = document.getElementById(current - 3);
			var text2 = "Photos/" + img[current - 3] + ".jpg";
			var text1 = "Photos/" + img[current] + ".jpg";
			image1.src = text2;
			image2.src = text1;
			completed();
		}
	});
			
	left.addEventListener("click",function(){
		if((current - 1)%3 != 0){
			current = current - 1;
			var swap = img[current];
			img[current] = img[current+1];
			img[current+1] = swap;
			var image2 = document.getElementById(current);
			var image1 = document.getElementById(current + 1);
			var text2 = "Photos/" + img[current + 1] + ".jpg";
			var text1 = "Photos/" + img[current] + ".jpg";
			image1.src = text2;
			image2.src = text1;
			completed();
		}
	});
		
	right.addEventListener("click",function(){
		if((current + 1)%3 != 1){
			current = current + 1;
			var swap = img[current];
			img[current] = img[current-1];
			img[current-1] = swap;
			var image2 = document.getElementById(current);
			var image1 = document.getElementById(current - 1);
			var text2 = "Photos/" + img[current - 1] + ".jpg";
			var text1 = "Photos/" + img[current] + ".jpg";
			image1.src = text2;
			image2.src = text1;
			completed();
		}
	});
		
	function completed(){														//To check if puzzle completed
		if(document.getElementById(1).getAttribute('src') == "Photos/1.jpg")
			count++;
		if(document.getElementById(2).getAttribute('src') == "Photos/2.jpg")
			count++;
		if(document.getElementById(3).getAttribute('src') == "Photos/3.jpg")
			count++;
		if(document.getElementById(4).getAttribute('src') == "Photos/4.jpg")
			count++;
		if(document.getElementById(5).getAttribute('src') == "Photos/5.jpg")
			count++;
		if(document.getElementById(6).getAttribute('src') == "Photos/6.jpg")
			count++;
		if(document.getElementById(7).getAttribute('src') == "Photos/7.jpg")
			count++;
		if(document.getElementById(8).getAttribute('src') == "Photos/8.jpg")
			count++;
		if(document.getElementById(9).getAttribute('src') == "Photos/9.jpg")
			count++;
		if(count==9){
			clearInterval(start);
			solved = 1;
			updateClock();
		}
		if(count!=9)
			count=0;
	}
	
	newGame.addEventListener("click",function(){
		document.location.reload(true);
	});
		