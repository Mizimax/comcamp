var load;load=document.getElementById('load');function loading(){setTimeout(function(){load.appendChild(document.createTextNode(" ."));setTimeout(function(){load.appendChild(document.createTextNode(" ."));setTimeout(function(){load.appendChild(document.createTextNode(" ."));setTimeout(function(){load.innerHTML='Loading';loading();},550);},550);},550);},550);}
loading();init();$.ajax({url:'./index.html',type:'post',data:'',success:function(){setTimeout(function(){$('.loading').hide();$('#myModal').modal('toggle');$('body').css('overflow','visible');$('html').css('overflow','visible');},2000);$('#logo').attr('class','wow zoomIn');},error:function(){setTimeout(function(){$('#myModal').modal('toggle');$('.loading').hide();$('body').css('overflow','visible');$('html').css('overflow','visible');},2000);$('#logo').attr('class','wow zoomIn');}});var fading=$('.navbar');$(window).bind('scroll',function(){var offset=$(document).scrollTop(),opacity=0.9;var targetOffset=$("#comcamp").offset().top;fading.css('min-height','0');if(offset<=targetOffset-100){fading.slideUp('slow');}
if(offset>targetOffset-100){fading.slideDown('slow');}});$(document).ready(function(){fading.css('background','rgba(162, 36, 88,1)');fading.slideUp('fast');smoothScroll.init({speed:1000});$('#learning .container .container img').hover(function(){$(this).attr('style','opacity:1');$(this).attr('class','jello animated');},function(){$(this).attr('class','');});if($(window).width()<768){$('[data-toggle="popover"]').attr('data-placement','bottom');}
$('[data-toggle="popover"]').popover();var isClick=false;var i=0;$('.question').click(function(){$('.question').removeClass('qactive');$(this).addClass('qactive');});var lanopt=$("#faq");lanopt.on("show.bs.collapse",".collapse",function(){lanopt.find(".collapse.in").collapse("hide");});new WOW({offset:30}).init();});var onScroll=false;$(window).scroll(function(){$('body').css('background-color','#323E6E'+($(this).scrollTop()/10));});
function search(datas, callback){
  var myData;
  datas.forEach(function(data){
    if($('#search-text-input').val() == data.phone_num)
      myData = data;
  }
  );
  callback(myData);
}
function onSubmit(){
  $.ajax({
    url:        './result/data.json',
    success:    function(datas){
      search(datas,function(data){
        if(data == null)
          alert('ไม่มีเบอร์นี้จ้า');
        else if(data.status === 0)
          window.location="./announce.html?phone_num="+data.phone_num;
        else
          window.location="./announcement.html?phone_num="+data.phone_num;
        $('.submit').text('เช็คผล');
      });     
    }
    });
  $('.submit').text('Loading...');
}