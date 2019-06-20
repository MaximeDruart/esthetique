<?php
$to      = 'showroomrelookingms@gmail.com';
$subject = 'Showroomrelooking RDV - A '.htmlspecialchars($_POST['hour']).' le '.htmlspecialchars($_POST['date']).' pour '.htmlspecialchars($_POST['service']);

$message = 'Date :'.htmlspecialchars($_POST['date'])."\n".
'Horaire :'.htmlspecialchars($_POST['hour'])."\n".
'Service :'.htmlspecialchars($_POST['service'])."\n".
'Nom / prénom :'.htmlspecialchars($_POST['hour'])."\n".
'Infos supplémentaires :'.htmlspecialchars($_POST['message'])."\n";

$headers = 'From: showroomrelookingms@gmail.com' . "\r\n" .
    'Reply-To: showroomrelookingms@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
header("Refresh: 6;url=showroomrelooking.fr/");
?>
