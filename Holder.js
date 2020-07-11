class Holder{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length: 250
        }
        this.pointB=pointB
        this.holder = Constraint.create(options);
        World.add(world, this.holder);
    }
fly (){
    this.holder.bodyA=null
}



    display(){
        if(this.sling.bodyA){
        var pointA = this.holder.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
    }
    
}
}