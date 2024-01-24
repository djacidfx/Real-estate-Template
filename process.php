<?php
    header('Content-type: application/json');

    $responce = array();
    $datetime = date('Y-m-d H:i:s');
    $data =     $_POST;

    $name =     $data["name"];
    $email =    $data["email"];
    $subject =  $data["subject"];
    $message =  $data["message"];

    $emailTo =  "info@habro.com";
    $emailSubject = "New Message Received";


    // prepare email body text
    $emailMessage = "Name: ";
    $emailMessage .= $name;
    $emailMessage .= "\n";

    $emailMessage .= "Email: ";
    $emailMessage .= $email;
    $emailMessage .= "\n";

    $emailMessage .= "Subject: ";
    $emailMessage .= $subject;
    $emailMessage .= "\n";

    $emailMessage .= "Message: ";
    $emailMessage .= $message;
    $emailMessage .= "\n";

    $emailMessage .= "Date and Time: ";
    $emailMessage .= $datetime;
    $emailMessage .= "\n";

    //$success = 1;

    //if ($success){ // for local
    if (@mail($emailTo, $emailSubject, $emailMessage, "From:".$email)){ // send email
        //echo json_encode($Body);
        $responce["success"] = '<div class="alert alert-success">Thank you <strong>'.$name.'</strong> your email has been sent we will contact you soon.</div>';
    }else{
        $responce["error"] = '<div class="alert alert-danger"><strong>'.$name.'</strong> we are unable to send your email at this time!</div>';
    }

    if($responce){
        echo json_encode($responce);
    }
?>
