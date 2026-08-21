import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth follower loop
    const render = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Event delegation for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-magnetic], .interactive-target');
      const projectCard = e.target.closest('.project-card-interactive, [data-cursor-card]');

      if (projectCard) {
        setIsCardHovered(true);
        setCursorText('EXPLORE');
      } else if (target) {
        setIsHovered(true);
        setIsCardHovered(false);
        setCursorText('');
      } else {
        setIsHovered(false);
        setIsCardHovered(false);
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${isVisible ? 'is-visible' : ''}`} 
        aria-hidden="true" 
      />
      <div 
        ref={followerRef} 
        className={`custom-cursor-follower ${isVisible ? 'is-visible' : ''} ${isHovered ? 'is-hovered' : ''} ${isCardHovered ? 'is-card-hovered' : ''}`}
        aria-hidden="true"
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>
  );
};

export default CustomCursor;
