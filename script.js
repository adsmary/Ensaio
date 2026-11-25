function bars(id,n){var e=document.getElementById(id);if(!e)return;for(var i=0;i<n;i++){var s=document.createElement('span');s.style.animationDelay=(i*0.07)%1.2+'s';s.style.animationDuration=(0.9+(i%5)*0.15)+'s';e.appendChild(s)}}
bars('wave',28);bars('wave2',22);bars('wave3',40);
var d=document.getElementById('dlg');
document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){d.showModal()})});
document.getElementById('close').addEventListener('click',function(){d.close()});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});