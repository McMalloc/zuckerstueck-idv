<?php
header('Content-Type: text/plain');
if (rand(0, 10) > 7) {
	echo 35 + rand(-40, 40)/5;
} else {
	echo 35 + rand(-20, 15)/10;
}

// echo 30 + (sin(time()))*5 + rand(-10, 10)/10;
?>