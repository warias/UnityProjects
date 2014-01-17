#pragma strict

var pic22 : LensFlare;
var leftmouse : KeyCode;


function Start () {
 pic22.brightness = 0;

}

function Update () {
	if(Input.GetKey(leftmouse) == true){
		if(pic22.brightness == 1){
			pic22.brightness = 0;
		}else{
			pic22.brightness = 1;
		}
	
	}

}