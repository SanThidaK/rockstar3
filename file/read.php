<?php
  // Run in terminal php read.php
  $file = fopen('data.txt', 'r');

  while (!feof($file)) {
    echo fgets($file);
  }

  echo 'other processes';
