<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" href="stylesheet.css" type="text/css" />
    <script src="https://kit.fontawesome.com/bf141cf2a1.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" />
    <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/site.webmanifest">
    <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>MineKraft-Logik-Gatter</title>
</head>

<body>
    <div class="header">
        <nav>
            <table class="header" style="font-family: 'Cabin Sketch', cursive;">
                <tr>
                    <td class="logo"><img src="images/logo_ohneText.png" class="logo" alt="logo" /></td>
                    <td class="savespace"></td>
                    <td>
                        <ul class="nav-links">
                            <li class="header" id="active"><a class="active" href="">Home</a></li>
                            <li class="header"><a href="http://meinkraft-logik-gatter.xobor.de/">Forum</a></li>
                            <li class="header"><a href="">Download</a></li>
                            <li class="header"><a href="">Wiki</a></li>
                            <li class="header"><img src="images/lupe.png" class="suchfeld" alt="searchButton" id="searchIcon" /></li>
                        </ul>
                    </td>
                    <td>
                        <div class="dropdown">
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                    </td>
                    <td>
                        <div id="searchDiv">
                            <form id="search" method="get" action="ForumHub.html" >
                                <input type="search" name="q" id="suchbegriff" placeholder="Suchbegriff" class="mcButton" style="text-shadow: none;" />
                                <input type="submit" value="Search" class="mcButton" />
                            </form>
                        </div>
                        <div id="output">
                            <?php include("wdw_suche/search.php");?>
                        </div>

                    </td>
                </tr>
            </table>
        </nav>
    </div>

    <article>
        <div class="sidebar">
            <a href="" target="_blank"><img src="images/instagram-logo.png" class="sidebar" alt="instagram" /></a>
            <br /><hr style="border: solid #555555 1.25px; height: 1px; width: 80%; margin-left:10%" />
            <a href="" target="_blank"><img src="images/twitter-logo.png" class="sidebar" alt="twitter" /></a>
            <br /><hr style="border: solid #555555 1.25px; height: 0.5px; width: 80%; margin-left:10%" />
            <a href="https://github.com/Gnuhry/PM_TINF19AI2" target="_blank"><img src="https://seeklogo.net/wp-content/uploads/2015/09/github-mark-logo-200x200.png" class="sidebar" alt="github" /></a>
            <br /><hr style="border: solid #555555 1.25px; height: 0.5px; width: 80%; margin-left:10%" />
            <a href="mailto:silas.wessely@gmx.de"><img src="images/email-logo.png" class="sidebar" alt="email" /></a>
            <br /><hr style="border: solid #555555 1.25px; height: 0.5px; width: 80%; margin-left:10%" />
            <a href=""><img src="https://img.icons8.com/ios/500/info.png" class="sidebar" alt="impressum" /></a>
            <br /><br />
        </div>
        <div class="preview">
            <p class="seitenüberschrift" style="font-family: MCButton;">MeinKraft-Logik-Gatter</p>
            <p style="font-family: MCButton; text-align: center; font-size: 25px; color: slategray; padding: 20px 100px;"><i>hilft dir komplexe Logik-Gatter einfach und kompakt in Minecraft zu bauen</i></p>
            <div class="hr">
            </div>
            <div class="seitenbreite">
                <div class="previewWindow" id="logicGate">
                    <img src="images/logicBlock-Logo.png" alt="Logik-Gatter" id="logicPic" />
                </div>
                <div id="logicInvis">
                     <h2 style="font-family: 'Cabin Sketch', cursive;">Das Logik-Gatter</h2>
                     <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        Das Logik-Gatter berechnet mit Hilfe von Logikchips die Redstone-Ausgabe. Das Logik-Gatter berechnet mit Hilfe von Logikchips die Redstone-Ausgabe.
                        Das Logik-Gatter berechnet mit Hilfe von Logikchips die Redstone-Ausgabe. Das Logik-Gatter berechnet mit Hilfe von Logikchips die Redstone-Ausgabe.
                     </p>
                </div>
                <br />
            </div>

            <div class="seitenbreite">
                <div class="previewWindow" id="table">
                    <img src="images/logic-gate.jpg" alt="Tisch" id="tablePic" />
                </div>
                <div id="tableInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Bau dir deine passende Schaltung</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        Das ist der Tisch, auf dem man die Logik-Plug-Ins erstellen kann. Je nach Gatter werden verschiedene Materialien benötigt.
                        Außerdem können Input- und Output-Chips erstellt werden, um die Gatter zu konfigurieren.
                    </p>
                </div>
            </div>

            <div class="seitenbreite">
                <div class="previewWindow" id="tutorial">

                    <img src="images/logic-gate.jpg" alt="Tutorial" id="tutorialPic" />
                </div>
                <div id="tutorialInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Mit eingebautem Tutorial</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        Wenn du eine Welt generierst, wirst du ein Buch erhalten in dem alle Logik-Gatter erklärt werden und alle Rezepete aufgelistet sind.
                        Dieses Buch unterstützt dich bei deinen Anfängen in der neuen Redstone-Welt.
                    </p>
                </div>
            </div>

            <div class="seitenbreite2">
                <div class="previewWindow" id="test">

                    <img src="images/logic-gate.jpg" alt="Test" id="testPic" />
                </div>
                <div id="testInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Test</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        In diesem Block steht noch nicht fest, was erscheinen wird.
                    </p>
                </div>
            </div>
            <br />
            <div>
                <img src="images/redstone.png" class="animationRestone" />
            </div>
        </div>
    </article>

    <div class="footer">
        <div class="impressum">
            <a style="text-align: center;" href="#" class="mcButton">Impressum</a>
        </div>
        <div class="footerMitte">
            <img src="images/logo.png" class="logoFooter" alt="logo" />
        </div>
        <div class="icons">
            <ul class="footer">
                <li class="footer"><a href="" target="_blank"><img src="images/instagram-logo.png" class="footer" alt="instagram" /></a></li>
                <li class="footer"><a href="" target="_blank"><img src="images/twitter-logo.png" class="footer" alt="twitter" /></a></li>
                <li class="footer"><a href="https://github.com/Gnuhry/PM_TINF19AI2" target="_blank"><img src="https://seeklogo.net/wp-content/uploads/2015/09/github-mark-logo-200x200.png" class="footer" alt="github" /></a></li>
            </ul>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>


