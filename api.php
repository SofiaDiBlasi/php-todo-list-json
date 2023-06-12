<?php
    $personaggi = [
        "Alice",
        "Ariel",
        "Belle",
        "Aurora",
        "Jasmine"
    ];
    
    header('Content-Type: application/json');
    $jsonprincipesse = json_encode($personaggi);

    echo $jsonprincipesse;

?>