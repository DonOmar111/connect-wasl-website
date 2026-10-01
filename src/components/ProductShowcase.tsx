import { conversations, messages } from '../data/product';
import { LaunchButton } from './LaunchActions';

function Avatar({letter = 'أ'}: {letter?: string}) { return <span className="small-avatar" aria-hidden="true">{letter}</span>; }
function CustomerHeader() { return <div className="chat-top"><div className="chat-customer"><Avatar /><div><strong>أحمد محمد</strong><span>متصل الآن</span></div></div><span aria-hidden="true">•••</span></div>; }
function ChatMessages() { return <div className="chat-messages"><span className="chat-day">اليوم</span>{messages.map(message => <div key={message.time} className={'chat-message ' + message.type}><p>{message.text}</p><time dir="ltr">{message.time}</time></div>)}</div>; }
function Composer() { return <div className="chat-composer" aria-label="معاينة منطقة كتابة الرسالة"><span aria-hidden="true">＋</span><span className="composer-placeholder">اكتب رسالة...</span><span className="send" aria-hidden="true">←</span></div>; }
function Context({mobile = false}: {mobile?: boolean}) { return <dl className={mobile ? 'mobile-context' : 'details-group'}>{[['القناة','WhatsApp'],['المسؤول','فريق المبيعات'],['الحالة','بانتظار الرد']].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>; }
export default function ProductShowcase() {
  return <section className="product-section" id="product" aria-labelledby="product-title">
    <div className="section-container">
      <header className="product-heading section-heading"><span className="eyebrow">مساحة عمل واحدة</span><h2 id="product-title">صندوق وارد مشترك.<br /><span>لفريقك على واتساب.</span></h2><p>شغّل واتساب لعدة موظفين، مع مسؤول واضح لكل محادثة ومعلومات العميل بجانب الردود.</p></header>
      <ul className="product-benefits"><li><strong>مسؤول واضح</strong><span>اعرف من يتولى الرد.</span></li><li><strong>سياق محفوظ</strong><span>معلومات العميل بجانب المحادثة.</span></li><li><strong>متابعة ظاهرة</strong><span>شاهد ما ينتظر رد الفريق.</span></li></ul><div className="dashboard-stage">
        <div className="dashboard-desktop dashboard-window" role="img" aria-label="معاينة صندوق وارد يجمع المحادثات، مسؤول المحادثة ومعلومات العميل في واجهة عربية">
          <div className="browser-bar"><span dir="ltr">app.connectwasl.com</span><div className="browser-dots"><i /><i /><i /></div></div>
          <div className="dashboard-layout">
            <aside className="dash-menu" aria-hidden="true"><span className="dash-logo">W</span>{['▣','♙','▤','⚙'].map((icon,index) => <span key={icon} className={'menu-icon' + (!index ? ' active' : '')}>{icon}</span>)}<span className="menu-spacer" /><Avatar letter="س" /></aside>
            <div className="dash-conversations"><div className="inbox-title"><div><span>صندوق الوارد</span><strong className="inbox-heading">المحادثات</strong></div><span aria-hidden="true">＋</span></div><div className="inbox-search">بحث في المحادثات...</div>{conversations.map((conversation,index) => <div key={conversation.name} className={'conversation-row' + (!index ? ' active' : '')}><Avatar letter={conversation.avatar} /><div className="conversation-copy"><div><strong>{conversation.name}</strong><time dir="auto">{conversation.time}</time></div><span>{conversation.message}</span></div></div>)}</div>
            <div className="dash-chat"><CustomerHeader /><ChatMessages /><Composer /></div>
            <aside className="dash-details"><Avatar /><strong>أحمد محمد</strong><span className="customer-type">عميل</span><span className="customer-status">بانتظار رد الفريق</span><div className="details-line" /><span className="details-label">معلومات العميل</span><dl className="details-group"><div><dt>الجوال</dt><dd dir="ltr">+966 5X XXX XXXX</dd></div></dl><Context /><div className="details-line" /><div className="customer-tags"><span>عميل جديد</span><span>متابعة</span></div></aside>
          </div>
        </div>
        <div className="dashboard-mobile dashboard-window" aria-label="معاينة محادثة العميل على الهاتف"><div className="browser-bar"><span dir="ltr">CONNECT WASL</span><span>معاينة المحادثة</span></div><CustomerHeader /><Context mobile /><ChatMessages /><Composer /></div>
        <p className="demo-caption">معاينة توضيحية — بيانات المحادثات والفريق تجريبية.</p>
        <div className="product-notes">{[['01','محادثة واحدة','سياق كامل'],['02','فريق واحد','رؤية مشتركة']].map(([number,title,description]) => <div className="product-note" key={number}><span dir="ltr">{number}</span><div><strong>{title}</strong><small>{description}</small></div></div>)}</div>
      </div>
    </div>
    <div className="section-action"><LaunchButton className="button button-dark">ابدأ تجربتك</LaunchButton><small className="trial-reassurance">7 أيام للتجربة · بدون رسوم إعداد</small></div>
  </section>;
}



