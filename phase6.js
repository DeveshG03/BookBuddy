// CHANGE: Phase 6 supports the birthday-only experience and contains no festival-specific content.
document.addEventListener('DOMContentLoaded',()=>{
 // CHANGE: Load the shared visual effects used by the birthday page.
 const link=document.createElement('link');link.rel='stylesheet';link.href='phase6.css';document.head.appendChild(link);
 const progress=document.createElement('div');progress.className='page-progress';document.body.appendChild(progress);
 const sections=[...document.querySelectorAll('.reveal,.memories,.personal,.phase5')];
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});sections.forEach(s=>io.observe(s));

 // CHANGE: Birthday buttons now move only through the birthday story sections.
 document.querySelectorAll('[data-scroll-next]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#memories')?.scrollIntoView({behavior:'smooth'})));
 document.querySelector('.scroll-hint')?.addEventListener('click',()=>document.querySelector('#phase2')?.scrollIntoView({behavior:'smooth'}));
 document.querySelector('[data-enter]')?.addEventListener('click',e=>{e.currentTarget.classList.add('is-used');document.body.classList.add('reveal-opened');document.querySelector('#phase2')?.scrollIntoView({behavior:'smooth'});});

 window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max)*100:0)+'%';},{passive:true});

 // Birthday photo gallery: automatically replaces placeholders when the exact image files exist.
 document.querySelectorAll('.memory-card').forEach(card=>{
   const slot=card.querySelector('.photo-slot');const label=slot?.querySelector('small')?.textContent||'';const match=label.match(/photo-\d+\.jpg/i);if(!match)return;
   const src='assets/photos/'+match[0];const img=new Image();img.onload=()=>{slot.classList.add('has-photo');slot.prepend(img)};img.src=src;
 });

 // Birthday memory lightbox.
 const box=document.createElement('div');box.className='photo-lightbox';box.innerHTML='<div class="lightbox-inner"><button class="lightbox-close" aria-label="Close">×</button><img class="lightbox-image" alt="Birthday memory"><div class="lightbox-caption"></div></div>';document.body.appendChild(box);
 const lbImg=box.querySelector('.lightbox-image'),lbCap=box.querySelector('.lightbox-caption');
 document.querySelectorAll('.memory-card').forEach(card=>card.addEventListener('click',()=>{const img=card.querySelector('.photo-slot img');if(!img)return;lbImg.src=img.src;lbCap.textContent=card.querySelector('.caption b')?.textContent||'Birthday Memory';box.classList.add('open');document.body.style.overflow='hidden'}));
 const close=()=>{box.classList.remove('open');document.body.style.overflow=''};box.querySelector('.lightbox-close').addEventListener('click',close);box.addEventListener('click',e=>{if(e.target===box)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});

 // Birthday music player: works automatically once assets/music/birthday-song.mp3 exists.
 const audio=document.querySelector('#birthdayAudio'),music=document.querySelector('.music-card'),play=document.querySelector('[data-play]');
 if(audio&&music&&play){audio.src='assets/music/birthday-song.mp3';audio.addEventListener('loadedmetadata',()=>{music.dataset.ready='true';music.querySelector('.track-times span:last-child').textContent=format(audio.duration)});audio.addEventListener('timeupdate',()=>{music.querySelector('.track-times span:first-child').textContent=format(audio.currentTime);const line=music.querySelector('.track-line');line.style.setProperty('--p',(audio.duration?(audio.currentTime/audio.duration)*100:0)+'%')});audio.addEventListener('play',()=>{music.classList.add('is-playing');play.textContent='❚❚'});audio.addEventListener('pause',()=>{music.classList.remove('is-playing');play.textContent='▶'});audio.addEventListener('ended',()=>{music.classList.remove('is-playing');play.textContent='▶'});play.addEventListener('click',()=>{if(audio.paused)audio.play().catch(()=>{});else audio.pause()});}
 function format(sec){if(!Number.isFinite(sec))return'0:00';return Math.floor(sec/60)+':'+String(Math.floor(sec%60)).padStart(2,'0')}

 // Birthday-themed cursor effect.
 let last=0;document.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(Date.now()-last<180)return;last=Date.now();const h=document.createElement('span');h.className='cursor-heart';h.textContent='♡';h.style.left=e.clientX+'px';h.style.top=e.clientY+'px';document.body.appendChild(h);setTimeout(()=>h.remove(),900)});
});