 var drawBoard  = function () {
    ctx.beginPath();
    ctx.fillStyle ="black";
	var sizeR =10;
    ctx.fillRect( pulMid, 0 , 3*Rball,sizeR );
	ctx.fillRect( pulMid, height-sizeR , 3*Rball,sizeR );
	
	
	ctx.fillRect( 0,0 , sizeR , 2 * Rball);
	
	ctx.fillRect( 0,0 , 2 * Rball,sizeR );
	
	ctx.fillRect( 0,height - 2 * Rball , sizeR , 2 * Rball );
	
	ctx.fillRect( width -sizeR ,height -2 * Rball , sizeR , 2 * Rball );
	
	ctx.fillRect( width -sizeR , 0 , sizeR , 2 * Rball );
	
	ctx.fillRect( 0,0 , 2 * Rball,sizeR );
	
	ctx.fillRect( width - 2 * Rball,0 , 2 * Rball,sizeR );
	
	ctx.fillRect( width - 2 * Rball,height -sizeR , 2 * Rball,sizeR );
	
	ctx.fillRect( 0,height -sizeR  , 2 * Rball,sizeR );
	
	
	ctx.closePath();
  }
  