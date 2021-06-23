function preload()
{

}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()
{
    image(video,50,50,550,390);
    tint(tint_color);
    fill(106,90,205);
    stroke(106,90,205);
    circle(50, 50, 80);

    fill(106,90,205);
    stroke(106,90,205);
    circle(590, 50, 80);

    fill(106,90,205);
    stroke(106,90,205);
    circle(50, 430, 80);

    fill(106,90,205);
    stroke(106,90,205);
    circle(590, 430, 80);

    fill(199,21,133);
    stroke(199,21,133);
    rect(90,40,460,20);

    fill(199,21,133);
    stroke(199,21,133);
    rect(90,420,460,20);

    fill(199,21,133);
    stroke(0, 128, 0);
    rect(40,90,20,300);

    fill(199,21,133);
    stroke(199,21,133);
    rect(580,90,20,300);
}
function take_snapshot()
{
    save("student_name.png");
}
function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}