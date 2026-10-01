import { useEffect, useRef, useState } from 'react';
import { LaunchButton } from './LaunchActions';
const links = [['product','المنصة'],['how','كيف تعمل'],['capabilities','المزايا'],['team','إدارة الفريق'],['pricing','الباقات'],['guides','الأدلة'],['contact','تواصل معنا']];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    const desktop = window.matchMedia('(min-width: 1100px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    update();
    window.addEventListener('scroll',update,{passive:true});
    desktop.addEventListener('change', closeOnDesktop);
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('scroll',update); desktop.removeEventListener('change',closeOnDesktop); document.removeEventListener('pointerdown',outside); };
  }, []);
  return <header ref={header} className={'site-header' + (scrolled ? ' site-header-scrolled' : '')}
    onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } }}>
    <div className="header-container">
      <a className="header-logo" href="#top" aria-label="Connect Wasl — الرئيسية" onClick={() => setOpen(false)}>
        <img src="/connectwasl-logo-white.png" alt="Connect Wasl" width="1456" height="688" fetchPriority="high" />
      </a>
      <nav className="header-nav" aria-label="القائمة الرئيسية">{links.map(([id,label]) => <a key={id} href={'#' + id}>{label}</a>)}</nav>
      <div className="header-action"><LaunchButton className="header-cta">ابدأ تجربتك <span aria-hidden="true">←</span></LaunchButton></div>
      <button ref={menuButton} type="button" className={'mobile-menu-button' + (open ? ' active' : '')} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <nav id="mobile-navigation" className="mobile-menu" aria-label="قائمة الجوال" hidden={!open}>
      {links.map(([id,label],index) => <a key={id} href={'#' + id} onClick={() => { setOpen(false); menuButton.current?.focus(); }}><span dir="ltr">0{index+1}</span>{label}</a>)}
      <LaunchButton className="button button-light">ابدأ تجربتك</LaunchButton>
    </nav>
  </header>;
}
