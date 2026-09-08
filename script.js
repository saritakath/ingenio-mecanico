const menu=document.querySelector('.menu');
const nav=document.querySelector('#navLinks');
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.querySelector('#contactForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const text=`Hola Ingenio Mecánico. Soy ${d.get('nombre')}. Teléfono: ${d.get('telefono')}. Vehículo: ${d.get('vehiculo')}. ${d.get('mensaje')||''}`;
  window.open('https://wa.me/573166722371?text='+encodeURIComponent(text),'_blank');
});