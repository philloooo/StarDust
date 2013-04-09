function onBodyLoad()
{	
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("touchmove", function (e) { e.preventDefault(); return false; }, false);
    document.addEventListener("touchstart", function (e) {}, false);	
}
    
function onDeviceReady()
{
    

    //PGLowLatencyAudio.preloadFX('bassdrum', 'music/bassdrum.mp3');
	var instrumentIDs=['snaredrum','highhatdrum','bongodrum','bassdrum'];
	preloadAudios(instrumentIDs);
    //PGLowLatencyAudio.preloadFX('snaredrum', 'music/snaredrum.mp3');
    //PGLowLatencyAudio.preloadFX('highhatdrum', 'music/highhatclosed.mp3');
    //PGLowLatencyAudio.preloadFX('bongodrum', 'music/bongo.mp3');
    //bassdrum = new Media('/assets/www/music/bassdrum.mp3',function(){console.log("successfully load");},function(){console.log("cant load")});    
    
    //snaredrum = new Media('/assets/www/media/snaredrum.mp3');    
    //highhatdrum = new Media('/media/highhatclosed.mp3');    
    //bongodrum = new Media('/media/bongo.mp3')
	// navigator.notification.alert(PGLowLatencyAudio);    
}
function preloadAudios(instrumentIDs){
	instrumentIDs.forEach(function(id){
		PGLowLatencyAudio.preloadFX(id,'music/'+id+'.mp3');
	});
	console.log("loaded all audios");
	}

function touchInstrument(id){
	document.getElementById(id).className="touched";
	playMusic(id);
	if (serverOn){socket.emit('send',{secretstuff:id});}
}

function playMusic(id){
	console.log("playMusic:",id);
	PGLowLatencyAudio.play(id);

}

//function touchBass() {
  //  console.log(cordova);
    //document.getElementById("bassDiv").className = "touched";
    //bass();
    //socket.emit('send', {secretstuff:"play1Please"});

//}

//function bass() {
    //console.log(PGLowLatencyAudio.play);
    //console.log(PGLowLatencyAudio.play('bass'));
    
    //alert("bassTouched");
    //PGLowLatencyAudio.play('bassdrum');
    //bassdrum.play();
//}

//function touchSnare() {
  //  document.getElementById("snareDiv").className = "touched";
    //snare();

   // socket.emit('send', {secretstuff:"play2Please"});
//}

/*function snare() {
    console.log("snareplayed");
    PGLowLatencyAudio.play('snaredrum');
    //snaredrum.play();
}

function highhat() {
    document.getElementById("hhDiv").className = "touched";
    PGLowLatencyAudio.play('highhatdrum');
    //highhatdrum.play();
}

function bongo() {
    document.getElementById("bongoDiv").className = "touched";
    PGLowLatencyAudio.play('bongodrum');
    //bongodrum.play();
}
*/
function touchend( event ) {
    event.target.className = "";
}



