
import React from 'react';

const StaticBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Primary Glow */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.15] blur-[120px]"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)' }}
            />

            {/* Secondary Glow */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.1] blur-[120px]"
                style={{ background: 'radial-gradient(circle, #0055FF 0%, transparent 70%)' }}
            />

            {/* Center Accents */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.05] blur-[150px]"
                style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 50%)' }}
            />

            {/* Subtle Mesh Texture Layer */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 30%, #00D4FF 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #0055FF 0%, transparent 40%)
          `
                }}
            />
        </div>
    );
};

export default StaticBackground;
