class Ball
{
   constructor(x,y,radius)
   {
     var options = {
         airFriction:0,
         restitution:0,
         density:0.001
     }
     
     this.body = Bodies.circle(x, y,radius,options);
     this.radius = radius;
     World.add(world,this.body);
   } 

   display()
   {
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS)
     fill(250,186,85);
     ellipse(0,0,this.radius);   
     pop();  
   }

}