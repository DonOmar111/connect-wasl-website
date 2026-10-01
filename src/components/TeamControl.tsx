const members = [
  {letter:'س',name:'سارة',role:'المبيعات',status:'4 محادثات',waiting:'2 بانتظار الرد'},
  {letter:'خ',name:'خالد',role:'خدمة العملاء',status:'3 محادثات',waiting:'1 بانتظار الرد'},
  {letter:'ن',name:'نورة',role:'الدعم',status:'5 محادثات',waiting:'3 بانتظار الرد'},
];
const metrics = [
  {label:'المحادثات النشطة',value:'24',note:'الآن'},
  {label:'بانتظار الرد',value:'06',note:'تحتاج متابعة'},
  {label:'أعضاء الفريق',value:'08',note:'متصلون'},
];
export default function TeamControl() {
  return <section className="team-section" id="team" aria-labelledby="team-title">
    <div className="team-container">
      <div className="team-heading"><span className="eyebrow">فريقك أمامك</span><h2 id="team-title">اعرف من يتحدث.<br /><span>ومن يحتاج المتابعة.</span></h2><p>شاهد ما ينتظر الرد ومن يتولاه، وتابع توزيع المحادثات على فريقك من مكان واحد.</p></div>
      <div className="team-board" aria-label="مثال توضيحي لمتابعة نشاط الفريق">
        <p className="team-demo-label">معاينة نشاط الفريق — بيانات تجريبية</p>
        {metrics.map(metric => <div className="team-metric" key={metric.label}><span>{metric.label}</span><strong dir="ltr">{metric.value}</strong><small>{metric.note}</small></div>)}
        <div className="team-activity"><div className="activity-head"><span>المسؤول</span><span>المحادثات والمتابعة</span></div>{members.map(member => <div className="team-member-row" key={member.name}><div className="team-person"><span aria-hidden="true">{member.letter}</span><div><strong>{member.name}</strong><small>{member.role}</small></div></div><div className="team-status"><span>{member.status}</span><small>{member.waiting}</small></div></div>)}</div>
      </div>
    </div>
  </section>;
}


