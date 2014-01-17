#pragma strict

var mouse :KeyCode;
var borad :Component;
function Update () {
	if(Input.GetKey(mouse)){
		Debug.Log("asdfsadf");
		//cube1.hide();
		//cube1.transform.position.x += 1;
		borad.transform.localScale.x = 0;
		borad.transform.localScale.y = 0;
	}
}