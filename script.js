var index=0;
function slideShow(){
    let arr=["slide1.jpg", "slide2.jpg", "slide3.jpg","slide4.jpg"]
    if(index<arr.length)
  {
    document.getElementById("ph").src=arr[index];
  }
  if(index==arr.length-1)
  {
    index=-1;
  }
  index++;
  setTimeout(slideShow, 4000);
}
var min=10;
var time=min*60;
var text=document.getElementById('tim');
var inter=setInterval(count,1000);
function count(){
  let mins=Math.floor(time/60);
  let sec=(time%60);
  if(mins==0 && sec==0)
  {
    clearInterval(inter);
  }
  sec=sec>=10?sec : '0'+sec;
  text.innerHTML=`${mins}:${sec}`;
  time--;
  // setInterval(count,1000);
}
        



