<?php
// save this file as `enquiryadd.php` and host it on your server

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $email = htmlspecialchars($_POST['email']);

    // Example: Save to a file (you can replace this with database logic)
    $file = fopen("submissions.txt", "a");
    fwrite($file, "Name: $name, Contact: $contact, Email: $email\n");
    fclose($file);

    // Redirect to a thank-you page
    header("Location: thank-you.html");
    exit;
} else {
    echo "Invalid request.";
}
?>