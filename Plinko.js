class Plinko {
  constructor(x,y,r){
var options={
    isStatic:true
}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/4, options)
		World.add(world, this.body);

  }
  
  display()
  {
          
          var plinkopos=this.body.position;		

          push()
          translate(plinkopos.x, plinkopos.y);
          rectMode(CENTER)
          strokeWeight(3);
          fill("white");
          ellipse(plinkopos.x,plinkopos.y,this.r);
          pop()
          
  }



}