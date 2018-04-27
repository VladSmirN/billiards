  
  var ball = function (x,y,r,m,vx,vy){
    
    this.x = x;
    this.y = y;
	this.r = r;
    this.m = m;
	this.vx = vx;
	this.vy = vy; 
    this.type = 1; 
  }
  
  ball.prototype = {
    
	draw : function (color){
	ctx.beginPath();
	
	
	
	  ctx.strokeStyle =color;
	 ctx.fillStyle =color;
	 if(this.type == 0)
	 
	 
	ctx.moveTo(this.x,this.y);
	 for(var i = 0 ;i<= Math.PI * 2; i += Math.PI/36) {
  
     ctx.lineTo(Math.cos(i)*this.r+this.x,Math.sin(i)*this.r+this.y);
	 
	 
     } 
	
  //ctx.rect(this.x,this.y,this.r,this.r);
  ctx.fill();
 ctx.stroke();
    ctx.closePath();
	},
	
    move: function(){
	  if(this.type == 2) {
	    this.vy =0;
		this.vx =0;
		return;
	  }
	    
      this.y += this.vy; 
	  this.x += this.vx; 
   },	
  
   moveBitok: function(a){
   
    var bp = new point(this.x,this.y);
    var d =lengthPoint(a,bp);
	
	if(d <= height / 2){
	
	this.vx = (-this.x + a.x) * 0.05;
	this.vy = (-this.y + a.y)  * 0.05;
	
	}
	if(d >= height / 2){
	this.vx = ( -this.x + a.x) * 0.05 / d * height / 2;
	this.vy = ( -this.y + a.y)  * 0.05 /d * height / 2;
	}
	 
   },
  
  
  };