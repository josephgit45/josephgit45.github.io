<?php
header("Content-Type: text/plain; charset=UTF-8");  // output as text file
function echoFileContent() {
    $myfile = fopen("../dictionary.txt", "r") or die("Unable to open file!");
    $str = fread($myfile,filesize("../dictionary.txt"));
    echo $str;
    fclose($myfile);
}

echoFileContent();
?>
