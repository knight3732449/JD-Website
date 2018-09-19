window.onload = function () {
    search();
    secondkill();
}
 var search = function () {
     var bgc = document.getElementsByClassName('jd_header_box')[0];
     var banner = document.getElementsByClassName('jd_banner')[0];
     var height = banner.offsetHeight;
     window.onscroll = function () {
         var tops = document.body.scrollTop;
         console.log(tops);
         if( tops > height ){
             bgc.style.background = 'rgba(201,21,35,0.85)';
             console.log(1);
         }
         else{
             var op = tops/height*0.85;
             bgc.style.background = 'rgba(201,21,35,'+ op +')';
         }
     }
 }
var secondkill = function () {
    var skillTime = document.getElementsByClassName('jd_sktime')[0];
    var span_time = skillTime.getElementsByClassName('jd_sktime_num');
    console.log(span_time);
    var times = 4*60*60;
    setInterval(function () {
        times--;
        var h = Math.floor(times/(60*60));
        var min = Math.floor((times/60)%60);
        var s = times%60;
        console.log(h + "-" +min +"+" + s);
        span_time[0].innerHTML = h>0?Math.floor(h/10):0;
        span_time[1].innerHTML = h%10;
        span_time[2].innerHTML = min>0?Math.floor(min/10):0;
        span_time[3].innerHTML = min%10;
        span_time[4].innerHTML = s>0?Math.floor(s/10):0;
        span_time[5].innerHTML = s%10;
    },1000)

}
