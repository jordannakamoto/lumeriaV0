/**
 * Simple preloader in Javascript
 * 
 * Copyright (c) 2016 iBird Rose
 * Dual licensed under the MIT and GPL licenses.
 *
 * Version 1.1.1
 */

/* preloader */

;(function () {
	var preloaderDiv = document.createElement('div');
	preloaderDiv.innerHTML = `
		<style>
            #preloader_preload {
                display: block;
                z-index: 99999;
                height: 100vh;
                background: url('https://pm1.narvii.com/6565/615169b70f1a5bac42bd5e8dfa02c5fe1f231515_hq.jpg') center center no-repeat;
                background-color: white;
                position: fixed;
                top: 0;
                width: 100%;
                left: 0;
            }
            body.preloader {
              overflow: hidden;
              height: 100vh;
            }
        </style>
        <div id="preloader"><div id="preloader_preload"></div></div>
	`;
	
	document.body.insertBefore(preloaderDiv, document.body.firstChild);

    var preloaderStart = document.getElementById("preloader_preload");

    document.body.classList.add('preloader');

    function fadeOutFunction(el) {
        el.style.opacity = 1;

        var preloaderEngine = setInterval(function () {
            
            document.body.classList.remove('preloader');

            el.style.opacity = el.style.opacity - 0.05;

            if (el.style.opacity <= 0.05) {
                clearInterval(preloaderEngine);
                preloaderStart.style.display = "none";
            }

        }, 20);
    }

    window.onload = function () {
        setTimeout(function () {
            fadeOutFunction(preloaderStart);
        }, 1000);
    };
})();