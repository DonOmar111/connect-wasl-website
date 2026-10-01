import { useCallback, useEffect, useRef, useState } from 'react';
import { useStaticStory, useStoryProgress } from '../hooks/useStoryProgress';
import { LaunchButton } from './LaunchActions';

export default function ScrollHero() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const target = useRef(0);
  const [finished, setFinished] = useState(false);
  const [failed, setFailed] = useState(false);
  const isStatic = useStaticStory();
  const seek = useCallback(() => {
    const media = video.current;
    if (!media || media.seeking || !Number.isFinite(media.duration)) return;
    const time = target.current * Math.max(media.duration - .08, 0);
    if (Math.abs(media.currentTime - time) > .07) media.currentTime = time;
  }, []);
  const update = useCallback((progress: number) => {
    target.current = Math.min(progress / .86, 1);
    seek();
    setFinished(progress >= .86);
  }, [seek]);
  useStoryProgress(section, update, isStatic);
  useEffect(() => { if (isStatic) { target.current = 1; seek(); } }, [isStatic,seek]);
  const showCopy = finished || isStatic || failed;
  return <section ref={section} id="top" className={'hero-scroll' + (isStatic || failed ? ' story-static' : '')} aria-labelledby="hero-title">
    <div className="hero-sticky">
      <video ref={video} className="hero-video" src="/videos/connect-wasl-hero.mp4" muted playsInline preload="auto" aria-hidden="true" onLoadedMetadata={seek} onSeeked={seek} onError={() => setFailed(true)} />
      <div className={'hero-overlay' + (showCopy ? ' is-visible' : '')} />
      <div className={'hero-copy' + (showCopy ? ' is-visible' : '')} inert={!showCopy}>
        <div className="hero-copy-inner">
          <span className="eyebrow" dir="ltr">CONNECT WASL</span>
          <h1 id="hero-title">محادثات واتساب.<br />في مكانها الصحيح.</h1>
          <p>منصة لإدارة محادثات واتساب للأعمال، تجمع فريقك في صندوق وارد مشترك لتوزيع المحادثات وأتمتة الردود ومتابعة العملاء.</p>
          <div className="hero-buttons"><LaunchButton>ابدأ تجربتك</LaunchButton><a href="https://calendly.com/connectwasl/connect-wasl" className="button button-glass">احجز موعد</a></div>
          <small className="trial-reassurance">7 أيام للتجربة · بدون رسوم إعداد</small>
        </div>
      </div>
      <div className="hero-scroll-hint" hidden={showCopy}><span />مرّر لتكتشف كيف تتصل المحادثات</div>
      <a href="#product" className="hero-skip" hidden={showCopy}>تجاوز المقدمة <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}

