/**
 * 
 *  Document     : controller.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : pkjana
 *  Organization : IIT Khatagpur
 *  
 */

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
//    document.getElementById("rangeValue12").value = sliderVal;
    CrankRotator12(sliderVal);
	SimulatorSetup.scene.remove(CrankRotator12.couplerPt);
}

function left_button() {
	var i,t;
//	ccwclick = -ccwclick;
//	if (ccwclick>0) 
//	{
		for (i=0;i<=720;i++) 
		{
    		t=setTimeout(dCrankRotator12,10,720/720);
		}
//	else
		clearTimeout(t); 
//	}
}

function right_button() {
	var i,t;
//	ccwclick = -ccwclick;
//	if (ccwclick>0) 
//	{
		for (i=0;i<=720;i++) 
		{
    		t=setTimeout(dCrankRotator12,10,-720/720);
		}
//	else
		clearTimeout(t); 
//	}
}