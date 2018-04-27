 var lengthPoint  = function (a , b) {
  
  var c = Math.sqrt( (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)) ;
  
  return c;
  }
  
  var crashBall = function (a , id) {
  
    for ( j in Ball ) {
	
	  if (j == id) 
         continue ;
		 
      var d = 	lengthPoint(a , Ball[j]);	
	  
         if(d < a.r + Ball[j].r) {
		 
         var f = a.r + Ball[j].r - d;
		 
		 var dx = a.x - Ball[j].x;
		 var dy = a.y - Ball[j].y;
		 
		 Ball[j].vx += f / Ball[j].m * dx/d*(-1);
		 Ball[j].vy += f / Ball[j].m * dy/d*(-1);
		 
      }	 
	} 
  } 
  
  var crashBorder = function (a) {
  
    if ( a.x < a.r 
	    && a.y > pulTopY
		&& a.y < pulDownY )
	 
	     a.vx *= -1;
	   
	if ( a.y < a.r 
    	&&(a.x > pulMid +3*Rball || a.x < pulMid) 
		&& a.y > 0 
		&& a.x > pulLeftX 
		&& a.x < pulRightX) 
	      a.vy *=  -1;   
	   
	 if ( a.x > width - a.r
	     && a.y > pulTopY
		 && a.y < pulDownY) 
	       a.vx *= -1;
	   
	if ( a.y > height - a.r 
	    && (a.x > pulMid +3*Rball || a.x < pulMid) 
		&& a.y < height
		&& a.x > pulLeftX 
		&& a.x < pulRightX) 
	      a.vy *= -1;   
 
  }
  var crashFriction = function (a) {
    a.vx *= 0.99; 
    a.vy *= 0.99;
  }
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  