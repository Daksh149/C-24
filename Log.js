class Log{

    constructor(x,y,height,angle){
    var options={
        'friction': 1.0,
        'restitution':0.8,
        'density':1.0
    }
    this.body=Bodies.rectangle(x,y,20,height,options);
    this.height=height;
    this.width=20;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    };