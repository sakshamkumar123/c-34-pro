  
class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':1.2,
          'friction':1.5,
          'density':0.7,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      circle(0, 0, 50);
      pop();
    }
  };