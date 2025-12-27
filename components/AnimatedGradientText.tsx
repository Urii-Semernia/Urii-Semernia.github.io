import React from 'react';

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  text, 
  className = '',
  delay = 0 
}) => {
  return (
    <span className={`${className} inline-block whitespace-nowrap`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-gradient-char"
          style={{
            animationDelay: `${delay + index * 0.05}s`,
            background: 'linear-gradient(90deg, #22d3ee, #60a5fa, #818cf8, #a78bfa, #22d3ee)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedGradientText;

