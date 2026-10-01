import { plans } from '../data/pricing';
import { LaunchButton } from './LaunchActions';

export default function Pricing() {
  return <section className="pricing-section" id="pricing" aria-labelledby="pricing-title"><div className="section-container">
    <header className="section-heading"><span className="eyebrow">الباقات</span><h2 id="pricing-title">رقم واحد لفريقك.<br />أو عدة أرقام لمؤسستك.</h2><p>اختر حسب طريقة تشغيلك، مع عدد غير محدود من الموظفين في الأساسية والمستخدمين والفرق في المؤسسات.</p></header>
    <div className="pricing-grid">{plans.map(plan => <article key={plan.id} className={'pricing-card ' + plan.id}>
      <span className="plan-label" dir="ltr">{plan.label}</span><h3>{plan.title}</h3><p className="plan-description">{plan.description}</p>
      <p className="plan-price">{plan.from && <small>يبدأ من </small>}<span dir="ltr">{plan.price}</span> <small>ريال / شهريًا</small></p>
      <p className="plan-billing">{plan.annual}</p><LaunchButton purpose={plan.purpose} className={plan.id === 'enterprise' ? 'button button-outline' : 'button button-dark'}>{plan.cta}</LaunchButton>
      <ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><p className="plan-note">{plan.note}</p>
    </article>)}</div><p className="pricing-fees">رسوم رسائل واتساب تُدفع لميتا بشكل منفصل عن الاشتراك.</p>
  </div></section>;
}
