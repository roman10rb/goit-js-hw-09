const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body};let e;t.start.addEventListener("click",(()=>{e||(colorInterval=setInterval((()=>{e=!0,t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),t.stop.addEventListener("click",(()=>{clearInterval(colorInterval),e=!1}));
//# sourceMappingURL=01-color-switcher.7f58b225.js.map