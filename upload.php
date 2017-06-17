<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
print_r($_POST);
  if(isset($_POST['code']) && strlen($_POST['code'])>0) {

    $msg = "{{".$_POST['code']."}}";
    print("send to: ".$_POST['ip']);

      $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
      if(!$sock) {
        die('socket not created');
      }

    //Sending data
    if ( //If
        $sock_data = socket_connect($sock,$_POST['ip'], 80) //Can connect to the socket
    ) {  //Then
        $sock_data = socket_set_option($sock, SOL_SOCKET, SO_BROADCAST, 1); //Set
        $sock_data = socket_write($sock, $msg, strlen($msg)); //Send data
        socket_close($sock); //Close socket
        return true;
    } else {
      die('error connecting');
    }
    die("ok");
  }
?>