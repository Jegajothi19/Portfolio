document.querySelectorAll('.reveal').forEach((el)=>{
  const io=new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){el.classList.add('visible');io.disconnect();}
  },{threshold:.12});
  io.observe(el);
});

const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('formName').value.trim();
    const email=document.getElementById('formEmail').value.trim();
    const phone=document.getElementById('formPhone').value.trim();
    const company=document.getElementById('formCompany').value.trim();
    const message=document.getElementById('formMessage').value.trim();
    const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nCompany: ${company || '-'}\n\nMessage:\n${message}`);
    window.location.href=`mailto:jegajothi195@gmail.com?subject=${subject}&body=${body}`;
  });
}
