function onSubmit(){
  $.ajax({
  url:        './result/data.json',
  success:    function(datas){
    search(datas,function(data){
      if(data == null)
        window.location = './index.html';
      else if(data.status === 1)
        window.location="./announcement.html?phone_num="+data.phone_num;
      $('#nickname').text(data.nickname);
    });     
  }
  });
}
$(document).ready(function() {
  initial(function(){
    onSubmit();
  });
	$('#fullpage').fullpage({
  	autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: true,		
	  onLeave: function(index, nextIndex, direction){
          var leavingSection = $(this);

          //after leaving section 2
          if(index == 4 && direction == "down"){
              $('.hidetext').hide();
			$('.showtext').show();
          }
      }
  });
});