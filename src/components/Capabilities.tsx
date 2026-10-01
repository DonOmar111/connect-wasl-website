import { useState } from 'react';
import { capabilities } from '../data/capabilities';

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const item = capabilities[active];
  return <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-title"><div className="capabilities-container">
    <header className="capabilities-heading"><span className="eyebrow">داخل Connect Wasl</span><h2 id="capabilities-title">أتمتة واتساب.<br />وردود تصل للفريق المناسب.</h2><p>ردود وأتمتة وتوزيع للمحادثات، تساعد فريقك على خدمة العميل ومتابعة فرص البيع.</p></header>
    <div className="capabilities-layout"><div className="capabilities-list" role="group" aria-label="اختيار ميزة المنصة">
      {capabilities.map((capability,index) => <button key={capability.number} type="button" className={'capability-item' + (active === index ? ' active' : '')} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="capability-details"><span className="capability-number" aria-hidden="true">{capability.number}</span><span className="capability-item-copy"><strong>{capability.title}</strong><span>{capability.short}</span></span><span className="capability-arrow" aria-hidden="true">←</span></button>)}
    </div><div className="capability-preview"><div className="capability-preview-grid" aria-hidden="true" /><div className="capability-preview-top"><span dir="ltr">CONNECT WASL</span><span>معاينة توضيحية</span></div>
      <div id="capability-details" aria-live="polite" aria-atomic="true" className="capability-preview-content"><span className="preview-label">{item.title}</span><h3>{item.title}</h3><p>{item.description}</p>
        <ol className="cap-visual capability-flow" aria-label="خطوات استخدام الميزة">{item.steps.map((step,index) => <li key={step}><span aria-hidden="true">{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></li>)}</ol>
      </div><div className="capability-preview-footer" aria-hidden="true"><span>{item.number} / {String(capabilities.length).padStart(2,'0')}</span><div className="preview-progress"><i style={{width:((active+1)/capabilities.length*100)+'%'}} /></div></div>
    </div></div>
    <div className="section-action"><a className="button button-light" href="#pricing">اختر باقتك <span aria-hidden="true">←</span></a></div>
  </div></section>;
}

