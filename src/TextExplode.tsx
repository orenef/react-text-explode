import React from 'react';
import './style.css';

interface Props {
  text?: string;
  trigger?: string;
  initialFontSize?: string;
}
export const TextExplode: React.FC<Props> = ({
  text = 'Are you ready ?',
  trigger = "mouseover",
  initialFontSize = '12px'
}) => {
  const elRef =  React.useRef(null);
  let STOP = false; // limit the effect, once per render
  function onTrigger(e: { type: string; }) {
    if(trigger !== e.type) {
      return;
    }
    if(elRef) {
      if (STOP) {
        return;
      }
      STOP = true;
      const lettersSpan = [...(elRef?.current as any).childNodes];
      lettersSpan.forEach((span, index) => {
        const newTop = Math.floor(Math.random()*500)*((index%2)?1:-1);
        const newLeft = Math.floor(Math.random()*500)*((index%2)?1:-1);
        const duration = Math.floor(Math.random()*2500);
        span.animate([
          {
            position: 'relative',
            opacity: 1,
            fontSize: initialFontSize,
            top: 0,
            left: 0,
          },
          {
            position: 'relative',
            opacity: 0,
            fontSize: '84px',
            top: `${newTop}px`,
            left: `${newLeft}px`,
          }
        ], { 
          duration: duration,
          fill: 'forwards',
          iterations: 1,
        });
      });
    }
  }
  return (
    <div ref={elRef} onMouseOver={onTrigger} onClick={onTrigger}>
      {text.split('').map((c, index) => <span key={`${index}-${c}`}>{c}</span>)}
    </div>
  )
}
