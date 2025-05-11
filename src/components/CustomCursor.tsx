import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (mobileOrTablet) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverOn);
      link.addEventListener('mouseleave', handleLinkHoverOff);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setVisible(false));
      document.removeEventListener('mouseenter', () => setVisible(true));

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverOn);
        link.removeEventListener('mouseleave', handleLinkHoverOff);
      });
    };
  }, []);

  // Don't render the cursor on mobile/tablet
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${clicked ? 'scale-90' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>
      <div
        className={`fixed pointer-events-none z-50 border border-white rounded-full transition-all duration-300 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${linkHovered ? 'w-9 h-9' : 'w-10 h-10'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transitionDelay: '50ms',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;