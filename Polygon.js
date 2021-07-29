class Polygon {
    constructor(x, y, radius){
      var options = {
        restitution:0.8,
        friction:1.0,
        density: 1.0,
        isStatic: false
    }
    this.image = loadImage("polygon.png");
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
}
display(){
    fill("yellow");
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}