/*
 * AUTHOR: toydotgame
 * CREATED ON: 2023-12-16
 * Content-loading script so that I can update nav, header and footer,
 * etc all here and have it dynamically update across all pages.
 */

document.getElementById("nav").innerHTML = `
<div id="navpfp"></div><h1>toydotgame</h1>
<a href="/home">home</a>
|
<a href="/blog/">blog</a>
|
<a href="/">card</a>
|
<a href="/jp/hoomu">日本語</a>
<hr>
`;

document.getElementById("footer").innerHTML = `
<hr>
<div id="recentblogs">
<h1>Recent Blog Posts</h1>
<ul>
	<li><a href="/blog/2023-04-10_toypack"><b>2023-04-10:</b> ToyPack v1.13.6</a></li>
</ul>
</div>
<a href="http://www.wtfpl.net/"><img src="media/badges/wtfpl.png" width="88"></a>
<img src="media/badges/2019.gif" width="88">
<a href="https://cyber.dabamos.de/88x31/"><img src="media/badges/88x31.gif" width="88"></a>
<img src="media/badges/abrowser.gif" width="88">
<img src="media/badges/anythingbut.gif" width="88">
<a href="https://archlinux.org/"><img src="media/badges/archlinux.gif" width="88"></a>
<img src="media/badges/cssdif.gif" width="88">
<a href="https://www.dell.com/"><img src="media/badges/dell.gif" width="88"></a>
<a href="https://www.mozilla.org/en-US/firefox/new/"><img src="media/badges/firefox3.gif" width="88"></a>
<img src="media/badges/gregg.gif" width="88">
<a href="https://archive.org/donate"><img src="media/badges/internetarchive.gif" width="88"></a>
<img src="media/badges/miku.gif" width="88">
<a href="https://minecraft.net/"><img src="media/badges/minecraft.gif" width="88"></a>
<img src="media/badges/minibanner.gif" width="88">
<img src="media/badges/right2repair.gif" width="88">
<a href="https://yesterweb.org/no-to-web3/"><img src="media/badges/roly-saynotoweb3.gif" width="88"></a>
<img src="media/badges/transnow2.gif" width="88">
<a href="https://donate.wikimedia.org/><img src="media/badges/wikipedia.gif" width="88"></a>
<br>
<a href="https://www.free-website-hit-counter.com/"><img src="https://www.free-website-hit-counter.com/c.php?d=6&id=160327&s=5" width="88"></a>
<p>Website &#x1F12F; 2023 toydotgame</p>
`;