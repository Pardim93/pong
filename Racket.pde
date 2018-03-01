class Racket{
  
  float x = width/2;
  float y = height/2;
  float xspeed = 3;
  float yspeed = 1; 
  
  void update(){
    x = x + xspeed;
    y = y + yspeed;
    
  }
  
  void start(){
    fill(255);
    ellipse(x,y,22,22);
  }
  
}