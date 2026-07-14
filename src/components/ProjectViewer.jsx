import { useState, useRef, useEffect } from 'react';

/**
 * Shows a project's screenshots as if the site were open in a tab:
 * the top ("landing") is visible and the rest is reachable via a scrollbar.
 * When multiple screenshots exist, prev/next arrows page between them,
 * and each one is independently scrollable. Images render at native width
 * (no cropping / upscaling) so they stay crisp.
 *
 * frame: 'browser' (light chrome bar) | 'phone' (dark device panel)
 */
export default function ProjectViewer({ shots, label, alt, frame = 'browser', viewport = 'aspect-video' }) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  const isPhone = frame === 'phone';
  const multi = shots.length > 1;

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [index]);

  const go = (dir) => setIndex((i) => (i + dir + shots.length) % shots.length);

  const arrowClass = isPhone
    ? 'bg-slate-800/90 text-white hover:bg-slate-700 border-slate-700'
    : 'bg-white/90 text-primary hover:bg-white border-slate-200';

  return (
    <div
      className={`relative rounded overflow-hidden shadow-sm border ${
        isPhone ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
      }`}
    >
      {/* Chrome / label bar */}
      {isPhone ? (
        <div className="flex items-center justify-center py-3 border-b border-slate-800">
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" aria-hidden="true" />
          <span className="ml-3 flex-1 max-w-[240px] h-6 rounded-full bg-white border border-slate-200 flex items-center gap-1.5 px-3">
            <span className="material-symbols-outlined text-[13px] text-slate-400" aria-hidden="true">lock</span>
            <span className="font-inter text-[11px] text-slate-400 truncate">{label}</span>
          </span>
        </div>
      )}

      {/* Scrollable viewport */}
      <div className={`relative ${viewport}`}>
        <div
          ref={scrollRef}
          className={`doc-scroll absolute inset-0 overflow-y-scroll ${isPhone ? 'flex justify-center items-start' : ''}`}
        >
          <img
            src={shots[index]}
            alt={multi ? `${alt} — screen ${index + 1}` : alt}
            className={isPhone ? 'w-auto max-w-[300px] h-auto block self-start' : 'w-full h-auto block'}
          />
        </div>

        {multi && (
          <>
            <button
              type="button"
              aria-label="Previous screen"
              onClick={() => go(-1)}
              className={`absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 rounded-full border flex items-center justify-center shadow-md transition-colors ${arrowClass}`}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_left</span>
            </button>
            <button
              type="button"
              aria-label="Next screen"
              onClick={() => go(1)}
              className={`absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 rounded-full border flex items-center justify-center shadow-md transition-colors ${arrowClass}`}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_right</span>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {shots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to screen ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index
                      ? isPhone ? 'bg-white' : 'bg-primary'
                      : isPhone ? 'bg-slate-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
