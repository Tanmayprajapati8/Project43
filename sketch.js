var hr,sc,mn;
var title;
function setup(){
  createCanvas(800,800);

}
function draw() {
  background(0);
  angleMode(DEGREES);

  //creating title
  title=createElement("h1");
  title.html("Tick Tock");
  title.position(290,-8);
  title.style("font-size","50px");
  title.style("color","white");

  //giving some instruction to recogonise clock 
  fill("blue");
  textSize(40);
  text("Blue color sands for second.",150,500);
  fill("green");
  text("Green color sands for minute.",140,580);
  fill("red");
  text("Red color sands for hour.",170,650);
  fill(255);
  text("12",378,200);
  text("3",500,298);
  text("6",395,400);
  text("9",280,300);

  

  //making hr and sec and mn
  hr=hour();
  sc=second();
  mn=minute();

  //translating the x and y 400 and 400 so taht we can use 0
  // and useing rotate -90 for upper side
  translate(400,280);
  rotate(-90);

  stroke("red");
  noFill();
  strokeWeight(8);
// using map for movement
  let hrAngle=map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  stroke("blue");
  let scAngle=map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke("green");
  let mnAngle=map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  //drawing seconds hand
  push();
  rotate(scAngle);//rotate the hand based on angle
  stroke("blue");
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  //drawing  minute hand
  push();
  rotate(mnAngle);// rotate the hand based on angle
  stroke("green");
  strokeWeight(8);
  line(0,0,75,0);
  pop();

    //drawing  hours hand
    push();
    rotate(hrAngle);// rotate the hand based on angle
    stroke("red");
    strokeWeight(8);
    line(0,0,50,0);
    pop();


  drawSprites();
}