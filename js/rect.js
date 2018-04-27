
  var rect = function(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
	
    this.act = false;
	
	this.vx = 0;
    this.vy = 0;
   
    this.maxMove = 10;

}

  rect.prototype ={
  
    draw: function(){
	  ctx.fillStyle ="green";
      ctx.fillRect(this.x,this.y,this.w,this.h);
	//
    },
    stroke: function(){
      ctx.strokeRect(this.x,this.y,this.w,this.h);
    },
    chanAct: function(){
     this.act = !this.act; 
   },
   grav: function(){
   if(this.vy <= this.maxMove )
    this.vy += 0.1; 
   },
   
   move: function(){
    this.y += this.vy; 
	this.x += this.vx; 
   }
  };
  
    
  var rectActive = function (r,x,y) {
   return r.x<x && r.x + r.w > x && r.y<y && r.y + r.h > y;


  }