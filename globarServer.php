<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>$_SERVER</h1>
    <table>
        <?php foreach ($_SERVER as $key => $value): ?>
            <tr>
                <td><?=$key?></td>
                <td><?=$value?></td>
            </tr>
        <?php endforeach;?>
    </table>
</body>
</html>