//counter code
var button = function(){
//create a request object
var request = new XMLHttpRequest();

//Capture the response  and str it in variable.

request.onreadystatechange = function(){
  
  if (request.readystate === XMLHttpRequest.DONE){
    //Take ction
     if (request.status === 200){
       var counter = request.responseText;
       var span = document.getElementById('count');
       span.innerHTML = counter.toString();
     }
  }
    
};
    //make request
request.open('GET', 'http://dalalhrishi.imad.hasura-app.io/counter', true);
request.send(null);
}; 

//Submit NAme
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function(){
    //make a request to server 
    
    
    //capture a list of names & render as a list
    
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i = 0; i < names.length ; i++){
        list += '<li>' + names[i] + '</li>';
        
    }
    
var ul = document.getElementById('namelist');
ul.innerHTML = list;

};
