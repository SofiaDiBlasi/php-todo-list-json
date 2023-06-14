<?php
    header('Content-Type: application/json');

    $todoList = file_get_contents("data.json");

    $todoListData = json_decode($todoList);

    if (isset($_POST['task'])){
        $todoListData[] = $_POST['task'];

        file_put_contents("data.json", json_encode($todoListData) );
    }

    $todoListJson = json_encode($todoListData);

    echo $todoListJson;
?>