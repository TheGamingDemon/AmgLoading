<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/simple.css" />
	<link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="marquee.js"></script>

	<title>simpleLoad</title>
</head>
<body>
<?php
	$id = $_GET["steamid"];
	$name = "Player";
	
	$avatar = "images/no-user.jpg";
	if (isset($_GET['steamid'])) {
		$plydata = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=BEE6488A04F1506A9EE8440DB3667C36&steamids='.$id."&format=json";
		$f = file_get_contents($plydata);
		$array = json_decode($f, true);
		if (isset($array['response']['players'][0]['personaname']))
			$name = $array['response']['players'][0]['personaname'];
		
		if (isset($array['response']['players'][0]['avatarmedium']))
			$avatar = $array['response']['players'][0]['avatarmedium'];
	}
?>
<script type="text/javascript">
	function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
		setGamemode(gamemode);
		setMap(mapname);
	}
	
	function SetStatusChanged( status ) {
		changeStatus(status);
	}
	
	function DownloadingFile( file ) {
		setDownloading(file);
	}
	
	function setGamemode(gamemode) {
		$("#gm").html(gamemode);
	}
	
	function setMap(mapname) {
		$("#map").html(mapname);
	}
	
	function changeStatus(status) {
		if (status == "Sending client info...") {
			$("#files").html("You're on your way!");
			$("#downloading").html("");
			$("#status").html(status);
		}
		else if (status.indexOf("Getting Addon #" != -1)) {
			$("#downloading").html(status);
			$("#status").html("Gathering Addons...");
		}
		else {
			$("#status").html(status);
		}
		
		var width = $("#status").width();
		$("#status").css("margin-left", "'"-(width/2) + "px'");
		var width = $("#files").width();
		$("#files").css("margin-left", "'"-(width/2) + "px'");
	}
	
	function setDownloading(file) {
		$("#downloading").html(file);
		changeStatus("Downloading Files...");
	}
</script>


	<div id="bar"></div>
	<div id="title">Amethyst Gaming</div>
	<div id="serverImage"></div>
	
	<div id="details">Current Map: <span id="map">map</span><br>
					  Current Gamemode: <span id="gm">gamemode</span>
	</div>
	
	<div id="playerinfo">
		<img id="avatar" src="<?php echo $avatar; ?>" />
		Hey there, <span id="name"><?php echo $name; ?></span>
	</div>
	
	<div id="subTitle">You're Joining In!</div>
	<div id="news"><span id="newsContent"></span></div>
	
	<div id="status">Retrieving Server Info...</div>
	<div id="downloading"></div>
	
	<script src="js/config.js"></script>
	<script src="js/simple.js"></script>
</body>
</html>