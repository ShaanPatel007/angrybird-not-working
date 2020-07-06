class SlingShot{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            PointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.PointB = PointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
       
       this.sling.bodyA = null;

    }

    display(){
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.PointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}