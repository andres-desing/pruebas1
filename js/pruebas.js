	 	
function presentarUsuario()
{
	// debugger;
	var min=1; 
    var max=3;
	var aleatorio = Math.floor(Math.random() * (+max - +min)) + +min; 
	
	if(aleatorio == 1){
		var responseAPI = {
     'img': 'https://imgs.xkcd.com/comics/woodpecker.png',
     'title' : 'Woodpecker'
	};
	
	}else{
		if(aleatorio == 2){
			var responseAPI = {
	 'title' : '6-Foot Zone',
	 'img': 'https://imgs.xkcd.com/comics/6_foot_zone.png',
	 
     
		};
	}
	}

	var info = '<div class="user-info">' +
	"<div class='username' style = 'font-weight: bold'>" + responseAPI.title + "</div>" +
	'<img src="' + responseAPI.img + '" style="width: 100%" />' + 
  '</div>';
  
  document.getElementById("contenedor").innerHTML = info;
  

}
		
		
 
