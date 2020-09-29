class Ball
{
    constructor(x,y,r)
    {
    var options =
    {
        'restitution':0.3,
        'friction':0.5,
        'density':1.6,
       
    }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
     
       this.image = loadImage("paper.png");
      
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        strokeWeight(4);
        stroke("green")
        imageMode(CENTER);
      
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}