class Paddle{
    constructor(x,y,width,height,type)
    {
      var options = {
          friction:0,
          frictionAir:0.01,
          density:0.002,
      }
        this.body = Bodies.rectangle(x,y,width,height/1.2,options);
        this.width = width;
        this.height = height;
      
      if(type === 1)
      {
       this.image = loadImage("paddle.png")
      }
      else
      {
        this.image = loadImage("paddle2.png")   
      }   
      World.add(world,this.body);
    }

  display()
  {
     var angle = this.body.angle;
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     noStroke();
     image(this.image,0,0,this.width,this.height);
     pop();
  }






}