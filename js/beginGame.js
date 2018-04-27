

var beginGame =function() {

  
  Ball.length = 0;
  
  
  Ball.push(new ball (width*3/4,height/2-Rball,Rball,1,0,0));
  Ball[0].type = 0;
  var beginPosY = height /2  - Rball*5;
  var xp=width /4 -Rball*5;
  var yp=beginPosY;
  for( var i = 5; i>=0 ;i--) {
    yp = beginPosY + (5-i)*(Rball);
    xp += 2*Rball ;
    for( var j = 0; j<i ;j++) {
	
      Ball.push(new ball (xp,yp,Rball,1,0,0));
      yp += 2*Rball; 
    }
	
  }
  
  Ball.push(new ball (pulMid,1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (pulMid +3*Rball,1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
  
  Ball.push(new ball (pulMid,height-1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (pulMid +3*Rball,height-1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
  Ball.push(new ball (pulLeftX,1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (pulRightX,1,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
  Ball.push(new ball (pulLeftX,height,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (pulRightX,height,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
  Ball.push(new ball (0,pulTopY,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (0,pulDownY,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
   Ball.push(new ball (width,pulTopY,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  Ball.push(new ball (width,pulDownY,1,1,0,0));
  Ball[Ball.length - 1].type =2;
  
  
  
  
  
  
  
  
  
  
}