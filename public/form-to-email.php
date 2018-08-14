<?php
if(!isset($_POST['submit']))
{
  //This page should not be accessed directly. Need to submit the form.
  header('HTTP/1.1 200 OK');
  header('Status:200 OK');
  header('Content-type:application/json');
  mail("vishwanathiyer161294@gmail.com","hello","hello1");
  echo "error; you need to submit the form!";
  
}

//   $name = $_POST['name'];
//   $email = $_POST['email'];
//   $number = $_POST['number'];
//   $message = $_POST['message'];
//   $comments = $_POST['comments'];

// //Validate first
// if(empty($name)||empty($email)||empty($number)||empty($address)||empty($message))
// {
//     echo "All the fields are mandatory!";
//     exit;
// }

// if(IsInjected($email))
// {
//     echo "Bad email value!";
//     exit;
// }

// $email_from = 'contact.nyaydarshan@gmail.com';//<== update the email address
// $email_subject = "New Form submission";
// $email_body = "You have received a new message from the user $name.\n".
//     "Here is the message:\n $message".
//     "\n\n---DETAILS---\n".
//     "\nName: $name".
//     "\nEmail: $email".
//     "\nContact Number: $number".
//     "\nAddress: $message";
    
// $to = "contact.nyaydarshan@gmail.com'";//<== update the email address
// $headers = "From: $email_from \r\n";
// $headers .= "Reply-To: $email \r\n";
// //Send the email!
// mail($to,$email_subject,$email_body,$headers);
// //done. redirect to thank-you page.
// //header('Location: thank-you.html');


// // Function to validate against any email injection attempts
// function IsInjected($str)
// {
//   $injections = array('(\n+)',
//               '(\r+)',
//               '(\t+)',
//               '(%0A+)',
//               '(%0D+)',
//               '(%08+)',
//               '(%09+)'
//               );
//   $inject = join('|', $injections);
//   $inject = "/$inject/i";
//   if(preg_match($inject,$str))
//     {
//     return true;
//   }
//   else
//     {
//     return false;
//   }
// }
   
?> 