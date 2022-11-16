// var face_x,face_y,face_size
var face_x = [] 
var face_y = []
var face_size = []
var face_num = 10

var song
var songIsplay=false //設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
var amp
var vol
function preload(){
  song = loadSound("star-walkin-league-of-legends-worlds-anthem.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,400)  //臉的大小100~400
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}

function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
    push()  
      // fill(255,0,0)
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
 
      fill("#0096c7")
      ellipse(0,0,f_s)  //臉


      ellipse(0,0,f_s/8,f_s/8)//鼻子
      fill("#e63946")
      ellipse(-f_s/4,-f_s/15,f_s/25,f_s/100)//鼻孔
      ellipse(f_s/4,-f_s/15,f_s/25,f_s/100)//鼻孔
      noFill()
      //左眼
      ellipse(-f_s/5,-f_s/5,f_s/7)
      fill(0)
      ellipse(-f_s/4.5+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      noFill()
      //右眼
      ellipse(f_s/5,-f_s/5,f_s/7)
      fill(0)
      ellipse(f_s/5.8+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      fill(255)
      ellipse(-f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(-f_s/9+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛

      noFill()
      fill(255)
      ellipse(f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(f_s/15+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛
      
      fill("#e63946")
      ellipse(-f_s/13,-f_s/2.7,f_s/25,f_s/50)//眉毛
      ellipse(f_s/13,-f_s/2.7,f_s/25,f_s/50)//眉毛
      // noFill()
      // arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      // fill('#2a9d8f')
      // ellipse(f_s/5,f_s/2.5,150,200)
      // ellipse(f_s/3.5,f_s/1.7,150,75)
      fill(255,0,0)
      // arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      fill(255)
      // if(mouseIsPressed)
      // {   //mouseIsPressed為true，代表有按下滑鼠
      //   arc(0,f_s/4-1,f_s/2,f_s/10,0,180)   //上弧
      // }
      // else
      // {   //mouseIsPressed為false，代表沒有按下滑鼠
      //   arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
      // }


      if(!songIsplay){
    noFill()
        arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //沒有播放
      }
      else{
        vol = amp.getLevel() //取得聲音值(值為0~1之間)
        // console.log(vol)+
        fill("#C42021")
        arc(0,f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/10),0,180)
      }
      
      noFill()

    

    pop()

  }
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
