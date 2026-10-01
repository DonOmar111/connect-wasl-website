import { useEffect, useRef, useState } from 'react';

const guides = [
  {slug:'link-unified-number-to-whatsapp',category:'ربط واتساب',icon:'phone',title:'ربط الرقم الموحد بالواتساب: دليل تفعيل 9200 على واتساب',description:'تعرّف على خطوات ربط رقم منشأتك الموحد بمنصة واتساب للأعمال.'},
  {slug:'whatsapp-ai-chatbot',category:'الذكاء الاصطناعي',icon:'spark',title:'شات بوت واتساب بالذكاء الاصطناعي: الدليل الكامل',description:'كيف تجهّز مساعدًا من معلومات نشاطك، وتحول المحادثة إلى موظف عند الحاجة.'},
  {slug:'whatsapp-shared-team-inbox',category:'إدارة الفريق',icon:'team',title:'واتساب لعدة موظفين: صندوق وارد مشترك لفريقك',description:'نظّم الردود والمسؤوليات والمتابعة لفريق يعمل على رقم واحد.'},
  {slug:'whatsapp-business-api',category:'واتساب للأعمال',icon:'link',title:'واتساب بزنس API: الدليل الكامل للأعمال في السعودية',description:'افهم الفرق بين التطبيق ومنصة الأعمال، وما تحتاجه للبدء.'},
  {slug:'whatsapp-pricing-saudi-arabia',category:'الأسعار',icon:'price',title:'أسعار واتساب في السعودية: ماذا يتغير في أكتوبر 2026؟',description:'دليل لفهم تكاليف الرسائل وحساب ميزانية استخدام واتساب.'},
  {slug:'bulk-whatsapp-without-ban',category:'الحملات',icon:'message',title:'ارسال رسائل واتساب جماعية بدون حظر: الطريقة الرسمية',description:'تعرّف على القوالب المعتمدة وقوائم الموافقة لإعداد حملاتك.'},
];
const paths: Record<string,string> = {
  phone:'M8 3H5a2 2 0 0 0-2 2c0 9 7 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 2a12 12 0 0 1-6-6l2-2-2-5Z',
  spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',
  team:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.9M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  link:'m10 13 4-4M8 15l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 9l1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0',
  price:'M4 5h16v14H4V5ZM8 9h8M8 15h2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  message:'M21 11a8 8 0 0 1-8 8H7l-4 3V5h10a8 8 0 0 1 8 6ZM7 9h10M7 13h6',
};
export default function Guides() {
  const track = useRef<HTMLUListElement>(null);
  const [position,setPosition] = useState(0);
  const [end,setEnd] = useState(false);
  useEffect(() => {
    const node=track.current;
    if(!node) return;
    const update=()=>{
      const offset=Math.abs(node.scrollLeft);
      const card=node.firstElementChild as HTMLElement | null;
      setPosition(card ? Math.round(offset/(card.offsetWidth+20)) : 0);
      setEnd(offset >= node.scrollWidth-node.clientWidth-2);
    };
    const observer=new ResizeObserver(update);observer.observe(node);
    node.addEventListener('scroll',update,{passive:true});update();
    return ()=>{observer.disconnect();node.removeEventListener('scroll',update);};
  },[]);
  const move=(next:boolean)=>{
    const node=track.current;
    if(!node) return;
    const card=node.firstElementChild as HTMLElement;
    node.scrollBy({left:(next ? -1 : 1)*(card.offsetWidth+20),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  };
  return <section className="guides-section" id="guides" aria-labelledby="guides-title"><div className="section-container">
    <header className="guides-heading"><div><span className="eyebrow">أدلة واتساب للأعمال</span><h2 id="guides-title">أدلة تساعدك تبدأ صح.</h2><p>إجابات عملية لأسئلتك عن الربط والفريق والذكاء الاصطناعي.</p></div><a className="guides-all" href="https://connectwasl.com/ar/guides">جميع الأدلة <span aria-hidden="true">←</span></a></header>
    <ul id="guides-track" ref={track} className="guides-track" aria-label="أدلة Connect Wasl" tabIndex={0}>{guides.map(guide=><li key={guide.slug}><a className="guide-card" href={'https://connectwasl.com/ar/guides/'+guide.slug}><span className="guide-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={paths[guide.icon]} /></svg></span><span className="guide-category">{guide.category}</span><h3>{guide.title}</h3><p>{guide.description}</p><span className="guide-read">اقرأ الدليل <span aria-hidden="true">←</span></span></a></li>)}</ul>
    <div className="guides-controls"><span>اسحب لاستكشاف الأدلة</span><div><button type="button" aria-label="الأدلة السابقة" aria-controls="guides-track" disabled={position===0} onClick={()=>move(false)}>→</button><button type="button" aria-label="الأدلة التالية" aria-controls="guides-track" disabled={end} onClick={()=>move(true)}>←</button></div></div>
  </div></section>;
}

