class B2
{
   constructor(x,y,radius)
   {
     var options = {
         isStatic: true,
         airFriction:0.3,
     }
     
     this.body = Bodies.circle(x, y,radius,options);
     this.radius = radius;
     World.add(world,this.body);
   } 

   display()
   {
     var pos = this.body.position;
     ellipseMode(RADIUS)
     fill(255);
     ellipse(pos.x,pos.y,this.radius);     
   }

}