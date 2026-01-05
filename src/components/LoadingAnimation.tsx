import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rotate-45 diamond-sparkle"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rotate-45 diamond-sparkle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rotate-45 diamond-sparkle" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rotate-45 diamond-sparkle" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(217, 119, 6, 0.1)"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="1"
              strokeDasharray="339.292"
              strokeDashoffset={339.292 - (339.292 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-8 text-center">
          <p className="text-amber-400 text-sm tracking-[0.3em] font-light uppercase">Loading</p>
        </div>
      </div>
    </div>
  );
}
