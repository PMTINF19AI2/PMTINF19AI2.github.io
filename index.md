<body>
    <div class="header">
        <nav>
            <table class="header" style="font-family: 'Cabin Sketch', cursive;">
                <tr>
                    <td class="logo"><a href="index.html"><img src="images/logo_ohneText.png" class="logo" alt="logo" /></a></td>
                    <td class="savespace"></td>
                    <td class="nav-td">
                        <ul class="nav-links">
                            <li class="header" id="active"><a class="active" href="">Home</a></li>
                            <li class="header"><a href="http://meinkraft-logik-gatter.xobor.de/">Forum</a></li>
                            <li class="header"><a href="">Download</a></li>
                            <li class="header"><a href="wiki_home.html">Wiki</a></li>
                            <li class="savespace"></li>
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
            <a href="impressum_wiki.html"><img src="https://img.icons8.com/ios/500/info.png" class="sidebar" alt="impressum" /></a>
            <br /><br />
        </div>
        <div class="gitHub_Information">
            <p><a href="https://github.com/Gnuhry/PM_TINF19AI2" target="_blank">GitHub-Projekt</a></p>
            <ul class="gitHub">
                <li><img alt="GitHub forks" src="https://img.shields.io/github/forks/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub watchers" src="https://img.shields.io/github/watchers/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub stars" src="https://img.shields.io/github/stars/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/Gnuhry/PM_TINF19AI2/development?label=commit"></li>
                <li><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
            </ul>
        </div>
        <div class="preview">
            <p class="seitenüberschrift" style="font-family: MCButton;">MeinKraft-Logik-Gatter</p>
            <p class="unterüberschrift" style="font-family: MCButton; text-align: center; color: slategray;"><i>hilft dir komplexe Logik-Gatter einfach und kompakt in Minecraft zu bauen</i></p>
            <div class="hr">
            </div>
            <div class="seitenbreite">
                <div class="previewWindow" id="logicGate" >
                <img src="images/logicBlock-Logo3d2.png" alt="Logik-Gatter" id="logicPic" onmouseover="glowingOnLogic();"/>
                <video width="100%" height="100%" id="logicVideo" autoplay autoload muted loop onmouseout="glowingOffLogic();">
                    <source src="videos/animated_glowing_logicBlock2.mp4" type="video/mp4">
                </video>         
                    </div>
                <div id="logicInvis">
                     <h2 style="font-family: 'Cabin Sketch', cursive;">Das Logik-Gatter</h2>
                     <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        Der Logik-Gatter-Hub kompremiert komplexe Logik-Schaltungen auf die Größe eines Blocks. Mit Hilfe von Erweiterungskarten kann man Inputs und Outputs einstellen. Außerdem ermöglich eine Logik-Erweiterungskarte dem Block eine Logik zu übergeben, die je nach Input einen Output berechnet.
                     </p>
                </div>
                <br />
            </div>
            <div class="seitenbreite">
                <div class="previewWindow" id="flipflop">
                    <img src="images/flipflopBlock_3d.png" alt="Logik-Gatter" id="flipflopPic" onmouseover="glowingOnFlip();"/>
                    <video width="100%" height="100%" id="flipflopVideo" autoplay autoload muted loop onmouseout="glowingOffFlip();">
                        <source src="videos/animated_flipflop.mp4" type="video/mp4">
                    </video> 
                </div>
                <div id="flipflopInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Der Flip-Flop-Block</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        Das Flip-Flop-Hub implementiert die möglichkeit Redstonesigale in einem Block zu speichern. Diese können über einen Set-Input gesetzt werden, über einen Reset-Input zurückgesetzt werden und die Clock taktet den Flip-Flop-Hub, sodass bei einem bestimmen Zustand ein Output ausgegeben wird.
                    </p>
                </div>
            </div>
            <div class="seitenbreite">
                <div class="previewWindow" id="tutorial">
                    <img src="images/Wiki/workbench_model.png" alt="Logik-Gatter" id="tutorialPic" onmouseover="glowingOnWork();"/>
                    <video width="100%" height="100%" id="tutotialVideo" autoplay autoload muted loop onmouseout="glowingOffWork();">
                        <source src="videos/animated_workbench.mp4" type="video/mp4">
                    </video> 
                </div>
                <div id="tutorialInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Workbench</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        <b>Bau dir deine eigene Schaltung</b><br />
                        In der Workbench werden aus Kabeln, Pins, Speicherkarten und Widerständen Logik- und Flip-Flop-Erweiterungskarten erstellt. 
                    </p>
                </div>
            </div>
            <div class="seitenbreite2">
                <div class="previewWindow" id="test">
                    <img src="images/Wiki/codebench_model.png" alt="Logik-Gatter" id="testPic" onmouseover="glowingOnCode();"/>
                    <video width="100%" height="100%" id="testVideo" autoplay autoload muted loop onmouseout="glowingOffCode();">
                        <source src="videos/animated_codebench.mp4" type="video/mp4">
                    </video> 
                </div>
                <div id="testInvis">
                    <h2 style="font-family: 'Cabin Sketch', cursive;">Test</h2>
                    <p id="beschreibung" style="font-family: 'Amatic SC', cursive;">
                        In der Codebench kann man anhand einer aussagenlogischen Formel auf einer Custom-Erweiterungskarte eine Logik speichern, die vom Logik-Gatter-Hub ausgelesen werden kann.
                        Die Logik ist dabei nur durch  drei Eingänge und einen Ausgang begrenzt.
                    </p>
                </div>
            </div>
            <br />
            <div>
                <img src="images/redstone.png" class="animationRestone" />
            </div>
        </div>
    </article>
    <div class="gitHub_footer">
        <div class="gitHub_footer_title"><p><a href="https://github.com/Gnuhry/PM_TINF19AI2" target="_blank">GitHub-Projekt</a></p></div>
        <div class="gitHub_footer_body">
            <ul class="gitHub">
                <li><img alt="GitHub forks" src="https://img.shields.io/github/forks/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub watchers" src="https://img.shields.io/github/watchers/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub stars" src="https://img.shields.io/github/stars/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
                <li><img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/Gnuhry/PM_TINF19AI2/development?label=commit"></li>
                <li><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Gnuhry/PM_TINF19AI2?color=%54602d"></li>
            </ul>
        </div>
    </div>
    <div class="footer">
        <div class="impressum">
            <a style="text-align: center;" href="impressum_wiki.html" class="mcButton">Impressum</a>
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
    <script src="./app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</body>