class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.5
        }
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
this.image = loadImage("paper image.png");
World.add(world,this.body)


        }
   display(){
   fill("white");
//ellipseMode(RADIUS)
//ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
imageMode(CENTER);
 image(this.image,this.body .position.x,this.body.position.y);
   }

    }


