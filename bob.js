class Bob{
    constructor(x,y,r){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5,
        };

         this.x=x;
         this.y=y;
         this.r=r;

         this.body=Bodies.circle(this.x,this.y,this.r,options);
         

         World.add(world,this.body);

         
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}