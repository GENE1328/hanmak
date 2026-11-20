/* HANMAK inner pages: image reveals, stagger, category switch, page transitions. No libraries. */
(function(){
  if(document.body.dataset.page==='home')return;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var main=document.querySelector('main');if(!main)return;

  /* image reveal + loading shimmer for static figures */
  var figs=[].slice.call(main.querySelectorAll('figure')).filter(function(f){return f.querySelector('img')&&!f.classList.contains('wtb-figure')&&!f.closest('.product-grid,.modal,[role="dialog"]')});
  figs.forEach(function(f){
    var img=f.querySelector('img');
    if(!(img.complete&&img.naturalWidth)){f.classList.add('is-loading');var done=function(){f.classList.remove('is-loading')};img.addEventListener('load',done,{once:true});img.addEventListener('error',done,{once:true});}
  });
  if(!reduce&&'IntersectionObserver'in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    figs.forEach(function(f){f.classList.add('img-reveal');io.observe(f)});
  }

  /* stagger siblings that use .reveal inside the same grid/row */
  if(!reduce){
    var groups=new Map();
    [].slice.call(main.querySelectorAll('.reveal')).forEach(function(el){var p=el.parentElement;if(!groups.has(p))groups.set(p,[]);groups.get(p).push(el)});
    groups.forEach(function(list){if(list.length<2)return;list.forEach(function(el,i){if(!/delay-/.test(el.className))el.style.transitionDelay=Math.min(i,5)*90+'ms'})});
  }

  /* shop: stagger cards and animate category switches */
  var grid=main.querySelector('.product-grid');
  if(grid){
    var stagger=function(){var i=0;[].slice.call(grid.querySelectorAll('.product-card')).forEach(function(c){if(c.offsetParent!==null){c.style.setProperty('--i',i++)}})};
    stagger();
    if('MutationObserver'in window)new MutationObserver(stagger).observe(grid,{childList:true});
    document.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('[data-filter]');if(!b)return;
      setTimeout(function(){stagger();if(!reduce&&grid.animate)grid.animate([{opacity:.35,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:480,easing:'cubic-bezier(.2,.75,.25,1)'})},30);
    });
  }

  /* smooth page leave */
  if(!reduce){
    document.addEventListener('click',function(e){
      var a=e.target.closest&&e.target.closest('a[href]');
      if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      var h=a.getAttribute('href');
      if(!h||h.charAt(0)==='#'||/^(mailto:|tel:|javascript:)/.test(h)||a.target==='_blank'||a.hasAttribute('download'))return;
      var u;try{u=new URL(a.href,location.href)}catch(_){return}
      if(u.origin!==location.origin&&u.protocol!=='file:')return;
      if(u.pathname===location.pathname&&u.hash)return;
      e.preventDefault();document.body.classList.add('is-leaving');
      setTimeout(function(){location.href=a.href},200);
    });
    window.addEventListener('pageshow',function(){document.body.classList.remove('is-leaving')});
  }
})();
