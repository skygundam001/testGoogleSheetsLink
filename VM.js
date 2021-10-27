var parameter = {
  url: 'https://docs.google.com/spreadsheets/d/14r98wAcYmZGqHYiruGAeYt9iGTnp-gsot_EGXKagOV4/edit#gid=1071390541',
  name: '表單回應 1',
  startRow: 1,
  startColumn: 1
};

$.get('https://script.google.com/macros/s/AKfycbzOuKwdIMjjG8aH4uk5h4vuFmfirsb6Iog--mRbmCV6FBRFSjqoJ6xaRHV__vidhhYp/exec', parameter, function(data) {
  console.log(data);
  $(document).ready(function(){
    $("#showMySheetsData").html(data);
  });
  
});
