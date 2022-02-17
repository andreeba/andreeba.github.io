	<?php
$pages = isset($_GET['page']) ? trim(strip_tags($_GET['page'])) : 'index'; ?>

<html>
<head>
<meta charset="utf-8">
	
	<link href="css/stylesheet.css" rel="stylesheet"></a>
	<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway&display=swap" rel="stylesheet">
</head>

<body>
	
	<div class="container">
	<div class="leftnav">
	<div id="navbar">
	<a href="index.php"><div class="logo" style="background-image: url(images/mylogo.png);"></div></a>
	<h1 class="leftnavlogo">Andree Bårdsen</h1><ul>
	<li><a href="index.php">Hjem</a></li>
	<li><a href="?page=about">Om meg</a></li>
	<li><a href="?page=contact">Kontakt</a></li>	
		</ul></div></div></div></div>
	<div class="main">
<?php echo file_get_contents($pages. '.html'); ?></div>

	
</body>
</html>


