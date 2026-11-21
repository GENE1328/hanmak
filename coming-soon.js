(function(){
  var stage=document.querySelector('[data-cs]');if(!stage)return;
  var open=stage.querySelector('[data-cs-open]'),close=stage.querySelector('[data-cs-close]'),body=stage.querySelector('[data-cs-body]');
  function set(on){
    stage.classList.toggle('is-open',on);
    open.setAttribute('aria-expanded',on?'true':'false');
    body.setAttribute('aria-hidden',on?'false':'true');
    if(on){body.removeAttribute('inert');setTimeout(function(){close.focus({preventScroll:true})},500);}
    else{body.setAttribute('inert','');try{open.focus({preventScroll:true})}catch(e){}}
    if(on){var r=stage.getBoundingClientRect();if(r.top<80||r.top>window.innerHeight*.5){window.scrollTo({top:window.scrollY+r.top-90,behavior:'smooth'});}}
  }
  open.addEventListener('click',function(){set(true)});
  close.addEventListener('click',function(){set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&stage.classList.contains('is-open'))set(false)});
  body.setAttribute('inert','');
})();
