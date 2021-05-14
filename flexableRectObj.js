class FlexableRectObj{
    constructor(x,y,width,height)
    {
      var options = {
          friction:0,
          frictionAir:0.01,
          density:0.002,
      }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }

    display()
    {
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("grey");
       rect(0,0,this.width,this.height);
       pop();
    }
}