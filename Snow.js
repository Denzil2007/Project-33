class Snow{
    constructor(x,y){
        var options = {
            restitution : 0.1,
            friction : 0.01,
            density : 0.5
       }
        this.snow = Bodies.circle(x,y,5,options);
        this.radius = 5;
        var img;
        
        var r = Math.round(random(1,2));
        if(r === 1 ){
            img = "snow4.webp";  
        }
        else{
            img = "snow5.webp";
        }
        this.image = loadImage(img);
        World.add(World,this.snow);
        }
        snowDrop(){
            fill("blue");
            imageMode(CENTER);
            image(this.image,this.snow.position.x,this.snow.position.y,10,10);
        }
        updateY(){
            if(this.snow.position.y > height){
                Matter.Body.setPosition(this.snow,{x:random(0,1200),y:random(0,800)})
            }
        }
}