import { ImageResponse } from 'next/og';

export const dynamic = "force-static";

// Image metadata
export const alt = 'Johan Sutrisno — Senior Product Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712', // Very dark slate
          padding: '80px',
        }}
      >
        {/* Subtle background glow */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          }} 
        />
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '40px',
          padding: '60px 80px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ 
            display: 'flex',
            fontSize: 84, 
            fontWeight: 800, 
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            <span>Johan Sutrisno</span><span style={{ color: '#3b82f6' }}>.</span>
          </div>
          
          <div style={{ 
            fontSize: 32, 
            fontWeight: 500, 
            color: '#9ca3af', // gray-400
            marginBottom: '48px',
          }}>
            Senior Product Engineer
          </div>
          
          <div style={{ 
            fontSize: 20, 
            fontWeight: 600, 
            color: '#3b82f6', // blue-500
            padding: '10px 24px',
            borderRadius: '100px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          }}>
            johansutrisno.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
