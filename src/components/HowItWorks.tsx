import { useRef, useState } from 'react';
import { howItWorksSteps } from '../data/siteContent';
const visuals = [ReceiveVisual, AssignVisual, FollowVisual];
export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = howItWorksSteps[active];
  const Visual = visuals[active];
  return <section className="how-section" id="how" aria-labelledby="how-title">
    <div className="how-sticky">
      <div className="how-top"><div><span className="eyebrow">كيف تعمل Connect Wasl</span><h2 id="how-title">من رسالة واردة.<br />إلى متابعة واضحة.</h2></div><span className="how-counter" dir="ltr">03 STEPS</span></div>
      <div className="how-progress" role="tablist" aria-label="خطوات العمل">
        {howItWorksSteps.map((item,index) => <button ref={node => { tabs.current[index] = node; }} key={item.number} id={'how-tab-'+index} role="tab" type="button" className={'progress-step' + (active===index ? ' active' : '')} aria-selected={active===index} aria-controls="how-panel" tabIndex={active===index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
          let next = index;
          if(event.key==='ArrowLeft') next=(index+1)%3;
          else if(event.key==='ArrowRight') next=(index+2)%3;
          else if(event.key==='Home') next=0;
          else if(event.key==='End') next=2;
          else return;
          event.preventDefault(); setActive(next); tabs.current[next]?.focus();
        }}><span dir="ltr">{item.number}</span><strong>{item.eyebrow}</strong><span aria-hidden="true">←</span></button>)}
      </div>
      <div id="how-panel" role="tabpanel" aria-labelledby={'how-tab-'+active} tabIndex={0} className="how-scenes">
        <div key={step.number} className="how-layout active">
          <div className="how-copy"><span className="how-eyebrow">الخطوة {step.number}</span><h3>{step.title}</h3><p>{step.description}</p><span className="how-result">{['صندوق واحد. سياق محفوظ.','مسؤول واضح لكل محادثة.','كل متابعة أمام فريقك.'][active]}</span></div>
          <div className="how-visual" aria-hidden="true"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-state active"><Visual /></div><span className="how-visual-label">معاينة توضيحية</span></div>
        </div>
      </div>
    </div>
  </section>;
}
function ReceiveVisual() {
  return (
    <div className="receive-visual">
      <div className="receive-center">
        W
      </div>
      <div className="receive-card card-a">
        <span>أ</span>
        <div>
          <strong>أحمد</strong>
          <small>
            لدي استفسار عن طلبي
          </small>
        </div>
      </div>
      <div className="receive-card card-b">
        <span>س</span>
        <div>
          <strong>سارة</strong>
          <small>
            أحتاج مساعدة
          </small>
        </div>
      </div>
      <div className="receive-card card-c">
        <span>م</span>
        <div>
          <strong>محمد</strong>
          <small>
            أين وصل طلبي؟
          </small>
        </div>
      </div>
      <div className="receive-line line-a" />
      <div className="receive-line line-b" />
      <div className="receive-line line-c" />
    </div>
  );
}
function AssignVisual() {
  return (
    <div className="assign-visual">
      <div className="assign-conversation">
        <span className="assign-avatar">
          أ
        </span>
        <div>
          <small>
            محادثة واردة
          </small>
          <strong>
            أحمد محمد
          </strong>
        </div>
      </div>
      <div className="routing-line">
        <i />
      </div>
      <div className="employee-stack">
        <div className="employee selected">
          <span>س</span>
          <div>
            <strong>سارة</strong>
            <small>
              المبيعات
            </small>
          </div>
          <b>✓</b>
        </div>
        <div className="employee">
          <span>خ</span>
          <div>
            <strong>خالد</strong>
            <small>
              خدمة العملاء
            </small>
          </div>
        </div>
        <div className="employee">
          <span>ن</span>
          <div>
            <strong>نورة</strong>
            <small>
              الدعم
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
function FollowVisual() {
  return (
    <div className="follow-visual">
      <div className="follow-header">
        <span>
          حالة المحادثة
        </span>
        <strong>
          قيد المتابعة
        </strong>
      </div>
      <div className="follow-path">
        <div className="follow-point done">
          <span>✓</span>
          <strong>وصلت</strong>
        </div>
        <i />
        <div className="follow-point done">
          <span>✓</span>
          <strong>
            تم التعيين
          </strong>
        </div>
        <i />
        <div className="follow-point current">
          <span>3</span>
          <strong>
            متابعة
          </strong>
        </div>
      </div>
      <div className="follow-footer">
        <span>
          آخر نشاط
        </span>
        <strong>
          الآن
        </strong>
      </div>
    </div>
  );
}
