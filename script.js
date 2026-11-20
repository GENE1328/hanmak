const products=[
  {id:'heu-vavi',name:'Heu Vavi',price:'K80',category:'islands',number:'01',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'sukundumi',name:'Sukundumi',price:'K70',category:'sepik',number:'02',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'kalami',name:'Kalami',price:'K50',category:'everyday',number:'03',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'marvelous-maprik',name:'Marvelous Maprik',price:'K80',category:'sepik',number:'04',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'poro-sepik',name:'Poro Sepik',price:'K80',category:'sepik',number:'05',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'yangoru-drop',name:'Yangoru Drop',price:'K80',category:'sepik',number:'06',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'kubalia-backup',name:'Kubalia Backup',price:'K80',category:'sepik',number:'07',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'wosera-standby',name:'Wosera Standby',price:'K80',category:'sepik',number:'08',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'east-4',name:'East 4',price:'K80',category:'islands',number:'09',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'westside',name:'Westside',price:'K80',category:'everyday',number:'10',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'no-yua-no-yeno',name:'No Yua No Yeno',price:'On enquiry',category:'sepik',number:'11',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'sepik-river-queen',name:'Sepik River Queen',price:'On enquiry',category:'sepik',number:'12',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'sundi',name:'Sundi',price:'On enquiry',category:'everyday',number:'13',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'sweet-manui',name:'Sweet Manui',price:'On enquiry',category:'everyday',number:'14',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'tamine-kove',name:'Tamine Kove',price:'On enquiry',category:'islands',number:'15',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'warrah-claan-chol',name:'Warrah Claan Chol',price:'On enquiry',category:'everyday',number:'16',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'clock-tana',name:'Clock Tana',price:'On enquiry',category:'everyday',number:'17',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'end-up-malac',name:'End Up Malac',price:'On enquiry',category:'everyday',number:'18',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'ialibu',name:'Ialibu',price:'On enquiry',category:'everyday',number:'19',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'kelenu-feiyana',name:'Kelenu Feiyana',price:'On enquiry',category:'everyday',number:'20',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'kiamsac',name:'Kiamsac',price:'On enquiry',category:'everyday',number:'21',detail:'A featured HANMAK catalogue design from the current range.'},
  {id:'maienduo',name:'Maienduo',price:'On enquiry',category:'everyday',number:'22',detail:'A featured HANMAK catalogue design from the current range.'}
];
const navItems=[['index.html','Home','home'],['shop.html','Shop All','shop'],['services.html','Bulk Printing','services'],['story.html','Our Story','story'],['contact.html','Where to Buy','contact']];
function renderShell(){
  const page=document.body.dataset.page||'';
  const header=document.querySelector('[data-site-header]');
  const footer=document.querySelector('[data-site-footer]');
  if(header){header.outerHTML=`<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="HANMAK Apparel home"><img class="brand-logo-full" src="images/hanmak-logo.webp" alt="HANMAK Apparel" width="900" height="190"></a><button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button><nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">${navItems.map(([href,label,key])=>`<a href="${href}" class="${page===key?'is-active':''}">${label}</a>`).join('')}<a class="header-cta" href="contact.html#enquiry">Enquire ↗</a></nav></div></header>`;}
  if(footer){footer.outerHTML=`<footer class="site-footer section-ink"><div class="container footer-grid"><div><a class="brand" href="index.html"><img class="brand-logo-full" src="images/hanmak-logo.webp" alt="HANMAK Apparel" width="900" height="190"></a><p class="footer-tagline">Wear Your Roots.<br><em>Rep Your Province.</em></p></div><div class="footer-links"><p class="eyebrow eyebrow-light">Explore</p>${navItems.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div><div class="footer-links"><p class="eyebrow eyebrow-light">Find us</p><span>Unity Mall / Stall No. 27</span><span>Port Moresby</span><a href="https://www.facebook.com/Hanmak" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://www.instagram.com/hanmak25/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div class="container footer-bottom"><span>© HANMAK Apparel</span><span>PNG-owned / Kokopo to the nation</span></div></footer>`;}
  setupMenu();
}
function setupMenu(){const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.primary-nav');if(!toggle||!nav)return;toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}));}
function setupReveal(){const items=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)){items.forEach(item=>item.classList.add('is-visible'));return}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -45px'});items.forEach(item=>observer.observe(item));}
function setupParallax(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const items=document.querySelectorAll('[data-parallax]');if(!items.length)return;let ticking=false;const update=()=>{const scroll=window.scrollY;items.forEach(item=>{const rect=item.parentElement.getBoundingClientRect();if(rect.bottom>0&&rect.top<window.innerHeight){item.style.transform=`scale(1.06) translateY(${(scroll-rect.top)*.045}px)`}});ticking=false};window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(update);ticking=true}},{passive:true});}
function renderProductCard(product,index){return `<article class="product-card reveal" style="animation-delay:${index*.05}s"><button class="product-card-button" data-product="${product.id}" aria-label="View ${product.name} showcase" style="border:0;background:none;padding:0;text-align:left;width:100%;color:inherit"><div class="product-visual has-img"><img src="${((showcaseImages[product.id]||{}).colours||[{}])[0].shirt||''}" alt="${product.name} HANMAK tee" loading="lazy"><span class="product-number">${product.number}</span></div><div class="product-info"><div><h3>${product.name}</h3><p>Enquiry / size + colour</p></div><span class="product-price">${product.price}</span></div><span class="product-cta">View showcase ↗</span></button></article>`;}
function renderProducts(filter='all'){const grid=document.getElementById('product-grid');if(!grid)return;const shown=filter==='all'?products:products.filter(product=>product.category===filter);grid.innerHTML=shown.map(renderProductCard).join('');grid.querySelectorAll('.product-card').forEach(item=>item.classList.add('is-visible'));grid.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>openProduct(button.dataset.product)));}
function setupCatalog(){const grid=document.getElementById('product-grid');if(!grid)return;const params=new URLSearchParams(window.location.search);let initial=params.get('filter')||'all';if(!['all','sepik','islands','everyday'].includes(initial))initial='all';document.querySelectorAll('.filter-button').forEach(button=>{button.classList.toggle('is-active',button.dataset.filter===initial);button.addEventListener('click',()=>{document.querySelectorAll('.filter-button').forEach(item=>item.classList.remove('is-active'));button.classList.add('is-active');renderProducts(button.dataset.filter)})});renderProducts(initial);}
function openProduct(id){
  const modal=document.getElementById('product-modal');
  const content=document.getElementById('modal-content');
  const product=products.find(item=>item.id===id);
  if(!modal||!content||!product)return;
  const colours=(showcaseImages[product.id]||{}).colours||[];
  content.innerHTML=`<div class="modal-product"><div class="modal-visual has-img"><img data-modal-img src="${(colours[0]||{}).shirt||''}" alt="${product.name} HANMAK tee"><div class="modal-image-caption"><span>HANMAK design / ${product.name}</span><span>Colours confirmed on enquiry</span></div></div><div class="modal-details"><p class="eyebrow">${product.number} / HANMAK catalogue</p><h2 id="modal-title">${product.name}</h2><div class="modal-price">${product.price}</div><p class="modal-description">${product.detail} Select your preferred fit and colour below, then send an order enquiry so HANMAK can confirm the actual available print, stock, payment and delivery details.</p><div class="option-group"><label>Size</label><div class="option-buttons" data-option-group="size">${['S','M','L','XL','2XL','3XL'].map((size,index)=>`<button class="option-button ${index===1?'is-selected':''}" type="button">${size}</button>`).join('')}</div></div><div class="option-group"><label>Colour / subject to availability</label><div class="option-buttons" data-option-group="colour">${(colours.length?colours.map(c=>c.name):['Black','White','Red','Pink','Green']).map((colour,index)=>`<button class="option-button ${index===0?'is-selected':''}" type="button">${colour}</button>`).join('')}</div></div><a class="button button-dark" href="contact.html#enquiry" data-order-enquiry="${product.name}">Order enquiry <span>↗</span></a><p class="modal-honesty">Photo shows the supplied HANMAK shirt. Colours, stock, payment and delivery are confirmed on enquiry.</p></div></div>`;
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll');
  content.querySelectorAll('.option-buttons').forEach(group=>group.addEventListener('click',event=>{if(event.target.matches('.option-button')){group.querySelectorAll('.option-button').forEach(item=>item.classList.remove('is-selected'));event.target.classList.add('is-selected')}}));
  const mimg=content.querySelector('[data-modal-img]'),cbtns=[...content.querySelectorAll('[data-option-group="colour"] .option-button')];
  cbtns.forEach((b,k)=>b.addEventListener('click',()=>{if(colours[k]&&mimg)mimg.src=colours[k].shirt}));
  content.querySelector('[data-order-enquiry]').addEventListener('click',()=>{const size=content.querySelector('[data-option-group="size"] .is-selected')?.textContent||'Not selected';const colour=content.querySelector('[data-option-group="colour"] .is-selected')?.textContent||'Not selected';sessionStorage.setItem('hanmak-order-enquiry',`Order enquiry: ${product.name} (${product.price}). Preferred size: ${size}; preferred colour: ${colour}. Actual availability to confirm with HANMAK.`);closeProduct()});
}
function closeProduct(){const modal=document.getElementById('product-modal');if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll');}
function setupModal(){document.querySelectorAll('[data-close-modal]').forEach(item=>item.addEventListener('click',closeProduct));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeProduct()});}
function setupForms(){document.querySelectorAll('[data-fallback-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const feedback=form.querySelector('.form-feedback');if(!feedback)return;feedback.textContent='Your enquiry is prepared on this page. Please use HANMAK social links or visit a stall to confirm it directly; no message was sent from this static site.';form.reset();}));const stored=sessionStorage.getItem('hanmak-order-enquiry');const message=document.querySelector('#enquiry-form textarea[name="message"]');if(stored&&message){message.value=stored;sessionStorage.removeItem('hanmak-order-enquiry');}}
function addFooterStyles(){const style=document.createElement('style');style.textContent='.site-footer{padding:80px 0 20px}.footer-grid{display:grid;grid-template-columns:1.5fr .7fr .9fr;gap:50px}.footer-tagline{font-family:var(--display);font-size:clamp(2rem,3vw,3.2rem);line-height:.95;letter-spacing:-.06em;margin-top:44px}.footer-tagline em{font-style:normal;color:var(--rust)}.footer-links{display:flex;flex-direction:column;gap:10px;color:rgba(242,239,232,.68);font-size:.85rem}.footer-links .eyebrow{margin-bottom:10px}.footer-links a:hover{color:var(--cream)}.footer-bottom{border-top:1px solid var(--line-light);margin-top:70px;padding-top:16px;display:flex;justify-content:space-between;text-transform:uppercase;letter-spacing:.12em;font-size:.6rem;color:rgba(242,239,232,.6)}@media(max-width:560px){.footer-grid{grid-template-columns:1fr 1fr;gap:38px 24px}.footer-grid>div:first-child{grid-column:1/-1}.footer-bottom{display:block}.footer-bottom span{display:block;margin-top:8px}}';document.head.appendChild(style);}
/* Optional real imagery for the homepage showroom. Add files here when supplied, e.g.
   'heu-vavi':{shirt:'images/heu-vavi-shirt.webp',model:'images/heu-vavi-model.webp'}
   shirt = flat shirt photo shown on the hanger; model = same model/pose wearing that shirt, as a transparent
   WebP/PNG cut-out at exactly 760x1080 with the model in the same position and scale as images/model/hanmak-model-front.webp.
   Until an entry exists the hanger shows a neutral outline and the supplied editorial model stays. */
/* Supplied HANMAK shirt photos (background removed, artwork untouched). Each entry lists the confirmed colours;
   the first colour is shown on the hanger by default. Designs not yet matched to a product are in images/shirts/ too:
    */
const BLK='#111111',WHT='#f4f4f4';
/* Colour swatches hidden on the home page: only the black designs are shown (set true to bring back white/navy/beige). */
const SHOW_SWATCHES=false;
const colourSet=list=>({colours:list.map(([name,file,hex])=>({name,hex,shirt:`images/shirts/${file}.webp`,print:hex===BLK?`images/shirts/print/${file}.webp`:null}))});
const showcaseImages={
  'heu-vavi':colourSet([['Black','heu-vavi-black',BLK],['White','heu-vavi-white',WHT]]),
  'kalami':colourSet([['Black (red label)','kalami-black',BLK],['White (red label)','kalami-white',WHT],['Navy (black label)','kalami-navy','#27475c']]),
  'marvelous-maprik':colourSet([['Black','marvelous-maprik-black',BLK],['White','marvelous-maprik-white',WHT]]),
  'kubalia-backup':colourSet([['Black','kubalia-backup-black',BLK]]),
  'east-4':colourSet([['Black','east-4-black',BLK]]),
  'sukundumi':colourSet([['Black','sukundumi-black',BLK],['Navy','sukundumi-navy','#27475c'],['White','sukundumi-white',WHT]]),
  'poro-sepik':colourSet([['Black','poro-sepik-black',BLK]]),
  'yangoru-drop':colourSet([['Black','yangoru-drop-black',BLK]]),
  'wosera-standby':colourSet([['Black','wosera-standby-black',BLK]]),
  'westside':colourSet([['Black','westside-black',BLK]]),
  'no-yua-no-yeno':colourSet([['Black','no-yua-no-yeno-black',BLK],['White','no-yua-no-yeno-white',WHT]]),
  'sepik-river-queen':colourSet([['Black','sepik-river-queen-black',BLK],['Navy','sepik-river-queen-navy','#27475c']]),
  'sundi':colourSet([['Black','sundi-black',BLK]]),
  'sweet-manui':colourSet([['Black','sweet-manui-black',BLK]]),
  'tamine-kove':colourSet([['Black','tamine-kove-black',BLK]]),
  'warrah-claan-chol':colourSet([['Black','warrah-claan-chol-black',BLK]]),
  'clock-tana':colourSet([['Black','clock-tana-black',BLK],['Beige','clock-tana-beige','#d8c8a6']]),
  'end-up-malac':colourSet([['Black','end-up-malac-black',BLK]]),
  'ialibu':colourSet([['Black','ialibu-black',BLK]]),
  'kelenu-feiyana':colourSet([['Black','kelenu-feiyana-black',BLK]]),
  'kiamsac':colourSet([['Black','kiamsac-black',BLK]]),
  'maienduo':colourSet([['Black','maienduo-black',BLK]])
};
function setupShowcase(){
  const hero=document.querySelector('[data-sr-hero]');
  const rail=document.querySelector('[data-sr-hangers]');
  if(!hero||!rail)return;
  const $=s=>hero.querySelector(s);
  const el={num:$('[data-sr-number]'),cat:$('[data-sr-category]'),name:$('[data-sr-name]'),price:$('[data-sr-price]'),count:$('[data-sr-count]'),caption:$('[data-sr-caption]'),shop:$('[data-sr-shop]'),enquire:$('[data-sr-enquire]'),msg:$('[data-sr-msg]'),spot:$('[data-sr-spot]'),sizes:$('[data-sr-sizes]'),arch:$('[data-sr-arch]'),colours:$('[data-sr-colours]'),note:$('[data-sr-note]'),total:$('[data-sr-total]'),wearFill:$('[data-sr-fill]'),wearArt:$('[data-sr-art]')};if(el.total)el.total.textContent=String(products.length);
  const imgs=[...el.arch.querySelectorAll('img')];
  const sizeButtons=[...el.sizes.querySelectorAll('button')];
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width:900px)');
  const labels={islands:'ISLANDS / ENB',sepik:'SEPIK COLLECTION',everyday:'EVERYDAY ESSENTIALS'};
  const DEFAULT_MODEL='images/model/hanmak-model-front.webp';
  const PHOTO_FALLBACK='images/hanmak-hero.webp';
  const DEFAULT_ALT='HANMAK model standing in a plain black t-shirt';
  const n=products.length,SLOT=22;
  const tee='M30 38 43 39Q55 54 67 39L80 38 104 54 94 76 82 70V150H28V70L16 76 6 54Z';
  rail.innerHTML=products.map((p,i)=>{
    const t=(i-(n-1)/2)/((n-1)/2),cs=(showcaseImages[p.id]||{}).colours,shirt=cs&&cs[0].shirt;
    const art=shirt?`<image href="${shirt}" x="5" y="45" width="100" height="114" preserveAspectRatio="xMidYMin meet" decoding="async"/>`:`<path class="sr-tee" d="${tee}"/><path class="sr-neck" d="M43 39Q55 54 67 39"/><path class="sr-fold" d="M40 84v56M70 84v56"/>`;
    return `<button type="button" class="sr-hanger" data-index="${i}" aria-pressed="false" aria-label="${p.name}, ${p.price}" style="--i:${i};--curve:${(30*t*t).toFixed(1)};--tilt:${(8.7*t).toFixed(2)}"><svg class="sr-garment" viewBox="0 0 110 160" aria-hidden="true" focusable="false"><path class="sr-bar" d="M55 24 8 50H102Z"/><path class="sr-hook" d="M55 24V15c0-3 6-4 6-9a6 6 0 0 0-12 0"/>${art}</svg><span class="sr-tag"><b>${p.number}</b>${p.name}</span></button>`;
  }).join('');
  const buttons=[...rail.querySelectorAll('.sr-hanger')];
  let c=0,raf=0;
  /* Desktop: hangers ride a semicircular rail. d = signed slot distance from the selected design;
     seven slots are visible, the rest fade out at the ends and re-enter as the rail rotates. */
  const place=()=>{
    buttons.forEach((b,i)=>{
      if(mobile.matches){b.style.removeProperty('opacity');b.style.removeProperty('visibility');b.style.removeProperty('z-index');return}
      let d=(((i-c)%n)+n)%n;if(d>=n/2)d-=n;
      const th=d*SLOT*Math.PI/180,op=Math.max(0,Math.min(1,4-Math.abs(d)));
      b.style.setProperty('--x',(600+540*Math.sin(th)).toFixed(1));
      b.style.setProperty('--y',(440-400*Math.cos(th)).toFixed(1));
      b.style.opacity=op.toFixed(2);b.style.visibility=op<.02?'hidden':'visible';b.style.zIndex=String(10-Math.round(Math.abs(d)));
    });
  };
  const rotateTo=target=>{
    cancelAnimationFrame(raf);
    if(mobile.matches||reduce.matches){c=target;place();return}
    let delta=(((target-c)%n)+n)%n;if(delta>n/2)delta-=n;
    const from=c,t0=performance.now(),dur=650;
    const tick=now=>{const k=Math.min(1,(now-t0)/dur);c=from+delta*(1-Math.pow(1-k,3));place();if(k<1)raf=requestAnimationFrame(tick);else{c=target;place()}};
    raf=requestAnimationFrame(tick);
  };
  place();

  const fit=()=>{
    if(mobile.matches){hero.style.removeProperty('--s');return}
    const s=Math.max(.5,Math.min(1,(hero.clientWidth-32)/1200,(window.innerHeight-84-44)/950));
    hero.style.setProperty('--s',s.toFixed(4));
  };
  fit();window.addEventListener('resize',fit);mobile.addEventListener('change',()=>{fit();place()});

  let front=0,current=DEFAULT_MODEL,sel=-1,size='',swapTimer=0,loadTimer=0;
  /* Fallback: if the transparent base model fails to load, show the original editorial photo in its arch window. */
  const useFallback=()=>{if(imgs[0].src.indexOf(PHOTO_FALLBACK)>-1)return;hero.classList.add('is-photo');current=PHOTO_FALLBACK;imgs[0].src=PHOTO_FALLBACK};
  imgs[0].addEventListener('error',useFallback,{once:true});
  if(imgs[0].complete&&!imgs[0].naturalWidth)useFallback();
  /* Crossfade: the incoming image fades in on top while the outgoing one stays fully opaque beneath,
     then is hidden. Transparent cut-outs never dip in opacity mid-fade. */
  const setModel=(src,alt)=>{
    if(src===current){imgs[front].alt=alt;return}
    const previous=current,next=imgs[1-front],old=imgs[front];current=src;
    clearTimeout(loadTimer);
    const done=()=>{clearTimeout(loadTimer);el.arch.classList.remove('is-loading')};
    const show=()=>{
      if(current!==src)return;done();
      next.alt=alt;next.classList.add('is-on','is-top');old.classList.remove('is-top');front=1-front;
      clearTimeout(swapTimer);swapTimer=setTimeout(()=>{if(!old.classList.contains('is-top'))old.classList.remove('is-on')},reduce.matches?0:700);
    };
    next.onload=show;next.onerror=()=>{if(current===src){current=previous;done()}};
    next.src=src;
    if(next.complete&&next.naturalWidth)show();else loadTimer=setTimeout(()=>{if(current===src)el.arch.classList.add('is-loading')},140);
  };
  /* Warm the cache for neighbouring designs so switching feels instant. */
  const warmed=new Set();
  const warm=i=>{const m=(showcaseImages[products[i].id]||{}).model;if(!m||warmed.has(m))return;warmed.add(m);const im=new Image();im.decoding='async';im.src=m};
  /* Colour swatches: only designs with more than one supplied colour get them; the chosen colour swaps the hanger photo. */
  const pick={};
  const colourIndex=p=>pick[p.id]||0;
  const renderColours=()=>{
    const p=products[sel],cs=(showcaseImages[p.id]||{}).colours;
    if(!SHOW_SWATCHES||!cs||cs.length<2){el.colours.classList.remove('has-swatches');el.colours.textContent='Colours confirmed on enquiry';return}
    el.colours.classList.add('has-swatches');
    el.colours.innerHTML='<span id="sr-colour-label">Colour</span>'+cs.map((c,k)=>`<button type="button" class="sr-swatch" style="--sw:${c.hex}" data-colour="${k}" aria-pressed="${k===colourIndex(p)}" aria-label="${c.name}" title="${c.name}"></button>`).join('');
  };
  el.colours.addEventListener('click',e=>{
    const b=e.target.closest('.sr-swatch');if(!b)return;
    const p=products[sel],cs=showcaseImages[p.id].colours,k=Number(b.dataset.colour);
    pick[p.id]=k;
    const art=buttons[sel].querySelector('image');if(art)art.setAttribute('href',cs[k].shirt);dress();
    el.colours.querySelectorAll('.sr-swatch').forEach(s=>s.setAttribute('aria-pressed',String(s===b)));
    el.msg.textContent=`${p.name} / ${cs[k].name}. Availability confirmed on enquiry.`;
  });
  /* Shirt layer: the base model never changes; the selected shirt photo is placed on the model's tee area (masked to it). */
  const WEAR={s:1.0,x:180,y:244};
  const dress=()=>{
    const p=products[sel],cs=(showcaseImages[p.id]||{}).colours,c=cs&&cs[colourIndex(p)];
    const shade=hero.querySelector('.sr-wear-shade');
    if(!c){el.wearFill.style.opacity='0';el.wearArt.removeAttribute('href');return}
    /* Black designs: keep the model's own real tee and print only the artwork on it. Other colours: recolour the tee too. */
    const print=!!c.print;
    el.wearFill.setAttribute('fill',c.hex);el.wearFill.style.opacity=print?'0':'1';
    if(shade)shade.style.opacity=print?'0':'';
    el.wearArt.setAttribute('transform',`translate(${WEAR.x} ${WEAR.y}) scale(${WEAR.s})`);
    el.wearArt.setAttribute('href',print?c.print:c.shirt);
    el.wearArt.classList.remove('is-fade');void el.wearArt.getBoundingClientRect();el.wearArt.classList.add('is-fade');
  };
  const select=i=>{
    const p=products[i];if(!p)return;
    const first=sel<0;sel=i;rotateTo(i);
    [1,-1,2,-2].forEach(d=>warm((i+d+n)%n));
    buttons.forEach((b,k)=>{const on=k===i;b.classList.toggle('is-selected',on);b.classList.remove('is-swing');b.setAttribute('aria-pressed',String(on));b.tabIndex=on?0:-1});
    if(!first&&!reduce.matches){void buttons[i].offsetWidth;buttons[i].classList.add('is-swing')}
    el.num.textContent=p.number;el.count.textContent=p.number;el.name.textContent=p.name;el.price.textContent=p.price;if(el.price.nextElementSibling)el.price.nextElementSibling.hidden=!/^K\d/.test(p.price);
    el.cat.textContent=labels[p.category]||p.category.toUpperCase();
    el.shop.href=`shop.html?filter=${p.category}`;
    const img=showcaseImages[p.id]||{};
    setModel(img.model||DEFAULT_MODEL,img.model?`HANMAK model wearing ${p.name}`:DEFAULT_ALT);
    el.caption.textContent=`Wearing ${p.name}`;
    el.note.textContent=img.colours?'Hanger shows the supplied HANMAK shirt photo. Colours and stock are confirmed on enquiry.':'Shirt photo for this design is coming soon. The hanger shows a neutral outline, not the final print.';
    renderColours();dress();
    el.msg.textContent='';
    if(!reduce.matches){el.spot.classList.remove('is-flash');void el.spot.offsetWidth;el.spot.classList.add('is-flash')}
    if(mobile.matches){const b=buttons[i];rail.scrollTo({left:b.offsetLeft-(rail.clientWidth-b.offsetWidth)/2,behavior:first||reduce.matches?'auto':'smooth'})}
  };
  const go=d=>select((sel+d+n)%n);

  buttons.forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.index))));
  rail.addEventListener('keydown',e=>{
    const map={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};
    let to=null;
    if(e.key in map)to=(sel+map[e.key]+n)%n;else if(e.key==='Home')to=0;else if(e.key==='End')to=n-1;
    if(to===null)return;e.preventDefault();select(to);buttons[to].focus({preventScroll:true});
  });
  hero.querySelector('[data-sr-prev]').addEventListener('click',()=>go(-1));
  hero.querySelector('[data-sr-next]').addEventListener('click',()=>go(1));
  let sx=null;
  el.arch.addEventListener('pointerdown',e=>{sx=e.clientX});
  el.arch.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>40)go(e.clientX<sx?1:-1);sx=null});
  el.arch.addEventListener('pointercancel',()=>{sx=null});

  sizeButtons.forEach(b=>b.addEventListener('click',()=>{
    size=b.textContent;sizeButtons.forEach(o=>o.setAttribute('aria-pressed',String(o===b)));el.msg.textContent='';
  }));
  el.enquire.addEventListener('click',e=>{
    if(!size){e.preventDefault();el.msg.textContent='Please select a size first.';el.sizes.classList.remove('needs');void el.sizes.offsetWidth;el.sizes.classList.add('needs');sizeButtons[0].focus();return}
    const p=products[sel];
    try{sessionStorage.setItem('hanmak-order-enquiry',`Order enquiry: ${p.name} (${p.price}). Preferred size: ${size}; preferred colour: ${((showcaseImages[p.id]||{}).colours||[])[colourIndex(p)]?.name||'to confirm'}. Actual availability to confirm with HANMAK.`)}catch(err){}
  });
  select(0);
}
renderShell();addFooterStyles();setupReveal();setupParallax();setupShowcase();setupCatalog();setupModal();setupForms();
