class Roof{
    constructor(x,y,height,width){
        var options={
            'isStatic':true,
        }

    
    this.body=Bodies.rectangle(x,y,height,width,options);
    this.height=height;
    this.width=width;

    World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.height,this.width);
    }
}