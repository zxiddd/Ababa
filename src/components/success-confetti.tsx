import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function SuccessConfetti() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; color: string }>>([]);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    // Generate confetti particles with varied colors
    const colors = ['#7C3AED', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 1.2 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);

    // Delay check icon appearance for dramatic effect
    setTimeout(() => setShowCheck(true), 100);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-confetti-fall"
            style={{
              left: `${particle.x}%`,
              top: '-20px',
              width: Math.random() > 0.5 ? '8px' : '6px',
              height: Math.random() > 0.5 ? '8px' : '6px',
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 10px ${particle.color}40`,
            }}
          />
        ))}
      </div>

      {/* Success Icon with spring animation */}
      {showCheck && (
        <div className="relative z-10 flex flex-col items-center gap-4 animate-spring-in">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-[#7C3AED]/20 rounded-full blur-2xl animate-pulse" />
            
            {/* Main circle */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-full flex items-center justify-center shadow-2xl shadow-[#7C3AED]/40">
              <CheckCircle size={52} className="text-white" strokeWidth={2.5} />
            </div>
            
            {/* Inner shine effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(720deg) scale(0.8);
            opacity: 0;
          }
        }
        
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }
      `}</style>
    </div>
  );
}
