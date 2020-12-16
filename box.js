class Box{
    constructor(x,y,width,height){
       var options = {
            'friction':0.3,
            'density':1.0,
            isStatic:true
      }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image = loadImage("dustbingreen image.png");

        World.add(world,this.body);
    }
    display(){
       var pos=this.body.position;
       
        rectMode(CENTER);
        fill("brown");
    rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER);
 image(this.image,pos.x,pos.y,this.height,this.width);
     

    }
}