const questions = [
  {question:'ما هي منصة Connect Wasl؟',answer:'Connect Wasl منصة لإدارة محادثات واتساب للأعمال من صندوق وارد مشترك. تساعد الفريق على توزيع المحادثات، وأتمتة الردود، وتنظيم متابعة العملاء.'},
  {question:'هل يمكن استخدام واتساب لعدة موظفين على رقم واحد؟',answer:'نعم. تشمل الباقة الأساسية رقم واتساب واحدًا وعددًا غير محدود من الموظفين دون رسوم إضافية لكل موظف. يتعامل الفريق مع المحادثات من مساحة عمل مشتركة.'},
  {question:'هل يمكن ربط رقم واتساب الأعمال الحالي؟',answer:'يدعم Connect Wasl ربط رقم WhatsApp Business الحالي عبر ميزة التعايش، مع استمرار استخدام التطبيق على الرقم نفسه. تُراجع متطلبات الربط وأهلية الرقم أثناء الإعداد.'},
  {question:'ما الفرق بين الباقة الأساسية وباقة المؤسسات؟',answer:'الأساسية: 349 ريال شهريًا أو 3,490 ريال سنويًا، لرقم واحد وموظفين غير محدودين. المؤسسات: 1,499 ريال شهريًا بسعر ثابت، لعدة أرقام ومستخدمين وفرق غير محدودة، مع مساعد ذكاء اصطناعي ودعم بأولوية.'},
  {question:'هل شات بوت واتساب بالذكاء الاصطناعي متاح في كل الباقات؟',answer:'مساعد الذكاء الاصطناعي ضمن باقة المؤسسات؛ يرد اعتمادًا على معلومات نشاطك ويحوّل المحادثة للموظف عند الحاجة. الباقة الأساسية تشمل الردود التلقائية وأتمتة المسارات بدون برمجة.'},
  {question:'هل رسوم رسائل واتساب مشمولة في الاشتراك؟',answer:'رسوم رسائل واتساب منفصلة عن اشتراك Connect Wasl، وتُدفع لميتا مباشرة. تختلف التكلفة حسب فئة الرسالة والسوق والتسعير المعتمد من ميتا.'},
  {question:'كيف أبدأ التجربة أو أحجز موعدًا مع المبيعات؟',answer:'تتوفر تجربة لمدة 7 أيام دون رسوم إعداد. صفحة التسجيل في هذا الموقع قيد التجهيز حاليًا، ويمكنك حجز موعد مع فريق المبيعات من زر «احجز موعد».'},
];
export default function FAQ() {
  return <section className="faq-section" id="faq" aria-labelledby="faq-title"><div className="section-container">
    <header className="section-heading"><span className="eyebrow">إجابات قبل أن تبدأ</span><h2 id="faq-title">أسئلة شائعة عن واتساب للأعمال.</h2><p>معلومات واضحة عن ربط رقمك، وإدارة فريقك، والباقات والرسوم.</p></header>
    <div className="faq-list">{questions.map((item,index)=><details key={item.question} open={index===0}><summary><h3>{item.question}</h3><span aria-hidden="true">＋</span></summary><p>{item.answer}</p></details>)}</div>
    <script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',inLanguage:'ar',mainEntity:questions.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))})}</script>
  </div></section>;
}
