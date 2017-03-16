var urlParam = getParameterByName('phone_num');
function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function search(datas, callback){
  var myData;
  datas.forEach(function(data){
    if(urlParam == data.phone_num){
      myData = data;
    }
  }
  );
  callback(myData);
}
function initial(callback){
    if(urlParam == null){
      window.location = './index.html';
    }    
    callback(); 
  }