!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body},a=null,e=null;t.start.addEventListener("click",(function(o){a||(e=setInterval((function(){a=!0,o.target.disabled=!0,t.stop.disabled=!1,t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),t.stop.addEventListener("click",(function(o){clearInterval(e),o.target.disabled=!0,a=!1,t.start.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.098c6e23.js.map
