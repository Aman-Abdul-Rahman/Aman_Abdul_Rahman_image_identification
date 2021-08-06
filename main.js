img="";
status="";
objects=[];

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";

}

function draw()
{
    image(img,0,0,640,420);
    
    if(status!="")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status : Objects Detected";

            fill("#FF0000")  ;
            percent=floor(objects[i].confidence*100);
             text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
             noFill();
             stroke("#FF0000");
             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelloaded()
{
    console.log("model is loaded!");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,result)
{
if(error)
{
    console.log(error);
}
console.log(result);

}