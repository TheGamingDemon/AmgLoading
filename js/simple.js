// Fading for the subtitle
function fadeIn() {
	$("#subTitle").fadeIn("slow", function() {
		$(this).delay(4000);
		fadeOut();
	});
}
	
function fadeOut() {
	$("#subTitle").fadeOut("slow", function() {
		$(this).delay(1000);
		fadeIn();
	});
}
$(document).ready(function() {
	// Default animating stuff
	$("#bar").animate({ width: '0%' });
	$("#bar").animate({ width: '50%' }, 1000);
	$("#bar").animate({ width: '100%' }, 1000);
	$("#title").animate({ left: '-500px' });
	$("#title").animate({ left: '-500px' });
	$("#title").animate({ left: '20px' }, 1000);
	$("#news").animate({ right: '-400px' }, 1000);
	$("#news").animate({ right: '-400px' }, 1000);
	$("#news").animate({ right: '200px'}, 1000);
	$("#details").animate({ right: '-400px' });
	$("#details").animate({ right: '-400px' }, 1000);
	$("#details").animate({ right: '100px' }, 1000);
	$("#serverImage").animate({ right: '-100px' }, 1500);
	$("#serverImage").animate({ right: '-100px' }, 1000);
	$("#serverImage").animate({ right: '20px' }, 1000);

	// Sets background
	if(useBackgroundImage) {
		$("body").css("backgroundImage", "url(" + backgroundImage + ")");
	}
	
	if(useServerImage) {
		$("#serverImage").css("backgroundImage", "url(" + serverImage + ")");
	}
	
	// Checks for server name
	if(useServerName) {
		$("#title").html(serverName);
	}
	
	// Finds server-related stuffs
	function setServerName(servername) {
		$("#title").html(servername);
	}
	
	// Checks for fade config
	if(fade) {
		$("#subTitle").animate({ left: '-200px' });
		$("#subTitle").animate({ left: '-200px' });
		$("#subTitle").animate({ left: '150px' }, 1000);
		fadeOut();
	}
	else {
		$("#subTitle").animate({ left: '-200px' });
		$("#subTitle").animate({ left: '150px' }, 1000);
	}
	
	// Music Playlist
	if(useMusic && musicPlaylist.length > 0) {
		currentSong = -1;
		function loadSong() {
			currentSong += 1;
			if (currentSong > musicPlaylist.length) {
				currentSong = 0;
			}
			song = musicPlaylist[currentSong];
			$("body").append('<audio src="' + song + '" autoplay>');
			$("audio").prop('volume', 50/100);
			$("audio").bind("ended", function() {
				$(this).remove();
				loadSong();
			})
		}
		loadSong();
	}
	
	// Animates News Updates
	if(useUpdates && newsUpdates.length > 0) {
		function grabUpdate(i) {
				$("#newsContent").html(newsUpdates[i]);
				$("#newsContent").css("color", "rgb(100,255,100)");
				animateUpdate(i);
		}
		
		function animateUpdate(i) {
			$("#newsContent").animate({ right: '-500px'});
			$("#newsContent").animate({ right: '-500px'});
			$("#newsContent").animate({ left: '' + newsUpdates[i].length + '' }, 10000, function() {
				$("#newsContent").removeAttr('style');
				i += 1;
				if (i < 3) {
					grabUpdate(i);
				}
				else {
					i = 0;
					grabUpdate(i);
				}
			});
		}
		
		var i = 0;
		grabUpdate(i);
	}
});