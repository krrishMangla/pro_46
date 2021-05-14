class Screw{
    constructor(bodyA,pointB,offset)
    {
      var options = {
          bodyA: bodyA,
          pointA:{x:offset,y:0},
          pointB: pointB,
          stiffness: 0,
          length: 1
      }
      this.body = Constraint.create(options);
      this.pointB = pointB;
      World.add(world,this.body);
    }

    display()
    {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(3);
      stroke(0);
      line(pointA.x,pointA.y,pointB.x,pointB.y);  
    }
}