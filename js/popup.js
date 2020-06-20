$(function(){
$('select').material_select();
chrome.storage.sync.get('id',function(market){
  var id = market.id;
  var select = $('#market');
  if(!id || id==="1"){
    select.find('option:eq(1)').prop('selected', true);
  }else{
    select.find('option:eq(2)').prop('selected', true);
  }
  select.material_select();
});
$('#checklink').on('click', function(){
    var market = $('#market :selected').val();
    chrome.storage.sync.set({'id':market});
    var asin = $('#asin').val();
    if(!asin){
      var notificationOptions ={
        type:'basic',
        iconUrl:'img/icon-48.png',
        title:'No ASIN code !',
        message:'Please, enter ASIN code.'
      };
      chrome.notifications.create('asinnotif',notificationOptions);
      return;
    }
    if(market==="1"){
      window.open("https://www.amazon.com/dp/"+asin);
    }
    if(market==="2"){
      window.open("https://www.amazon.in/dp/"+asin);
    }
});

});
