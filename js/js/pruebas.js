	 	
function presentarUsuario()
{
	// debugger;
	var min=1; 
    var max=3;
	var aleatorio = Math.floor(Math.random() * (+max - +min)) + +min; 
	
	if(aleatorio == 1){
		var responseAPI = {
     'img': 'https://imgs.xkcd.com/comics/6_foot_zone.png',
     'title' : '6-Foot Zone'
    };
	}else{
		if(aleatorio == 2){
			var responseAPI = {
     'img': 'https://imgs.xkcd.com/comics/woodpecker.png',
     'title' : 'Woodpecker'
		}
	}
	}
   
  
  var info = '<div class="user-info">' +
      '<img src="' + responseAPI.img + '" />' +
  "<div class='username'>" + responseAPI.title + "</div>" +
  
'</div>';
  
  document.getElementById("contenedor").innerHTML = info;
  

}
		
		
 
	