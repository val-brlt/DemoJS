<html>

<head>
    <title> Ma page </title>
</head>

<body>
    <h1> Bienvenue sur ma page </h1>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus corporis sapiente, dolor magni porro est deleniti eveniet alias aut explicabo enim id consequuntur, praesentium delectus veritatis suscipit fuga recusandae temporibus!</p>
    <h3> Liste de villes avec lien </h3>
    <form action="#" method="post" id="search">
        <input id="ville" type="text" name="ville" placeholder="Entrez une ville">
        <input id="btn" type="submit" value="Valider">
    </form>

    <ul>
        <li > <a class="link" href="/demo.php?city=nantes"> Nantes </a> </li>
        <li > <a class="link" href="/demo.php?city=paris"> Paris </a> </li>
        <li > <a class="link" href="/demo.php?city=lyon"> Lyon </a> </li>
    </ul>

    <div id="result">

    </div>
</body>
<script type="text/javascript"  src="js/script.js" ></script>
</html>