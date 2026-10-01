import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type Purpose = 'signup' | 'sales' | 'contact';
const LaunchContext = createContext<(purpose: Purpose) => void>(() => {});
const messages: Record<Purpose, string> = {
  signup: 'صفحة التسجيل قيد التجهيز. سيُتاح بدء الاستخدام هنا عند إطلاقها.',
  sales: 'صفحة التواصل مع المبيعات قيد التجهيز. ستتمكن من مناقشة أرقام مؤسستك وفرقها ونطاق الخدمة عند إطلاق الصفحة.',
  contact: 'صفحة التواصل قيد التجهيز. ستظهر وسائل التواصل المعتمدة هنا عند إطلاقها.',
};
export function LaunchProvider({ children }: { children: ReactNode }) {
  const [purpose, setPurpose] = useState<Purpose | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (purpose && !dialog.current?.open) dialog.current?.showModal();
  }, [purpose]);
  return <LaunchContext.Provider value={setPurpose}>
    {children}
    <dialog ref={dialog} className="launch-dialog" aria-labelledby="launch-title" aria-describedby="launch-description" onClose={() => setPurpose(null)}>
      <span className="eyebrow" dir="ltr">CONNECT WASL</span>
      <h2 id="launch-title">قريبًا، نلتقي هنا.</h2>
      <p id="launch-description">{purpose ? messages[purpose] : ''}</p>
      <form method="dialog"><button className="button button-light" autoFocus>العودة للموقع</button></form>
    </dialog>
  </LaunchContext.Provider>;
}
export function LaunchButton({ children, purpose = 'signup', className = 'button button-light' }: {children: ReactNode; purpose?: Purpose; className?: string}) {
  const open = useContext(LaunchContext);
  if (purpose === 'sales') return <a href="https://calendly.com/connectwasl/connect-wasl" className={className}>{children}</a>;
  return <button type="button" className={className} onClick={() => open(purpose)} aria-haspopup="dialog">{children}</button>;
}

