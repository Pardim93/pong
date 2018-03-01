Racket racket; 
void setup() {
  size(800, 600);
  racket = new Racket();
}

void draw() {
  background(0);
  racket.start();
  racket.update();
  
}