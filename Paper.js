class Paper{
 constructor(x,y){
  var properties={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2   
  }  
  this.body=Bodies.circle(x,y,20,properties)   
  World.add(world,this.body)
} 
display(){
 var pos=this.body.position
 var angle=this.body.angle
 push()
 translate(pos.x,pos.y)
 rotate(angle)
 ellipseMode(RADIUS)
 ellipse(0,0,20,20)  
 pop() 
}  
}
