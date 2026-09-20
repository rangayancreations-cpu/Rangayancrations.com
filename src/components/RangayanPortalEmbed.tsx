import React, { useState } from 'react';

interface RangayanPortalEmbedProps {
  /** Optional custom URL, defaults to the published preview app */
  appUrl?: string;
  /** Optional container height, defaults to 100vh */
  height?: string;
  /** Optional container width, defaults to 100% */
  width?: string;
  /** Optional CSS class name */
  className?: string;
}

export const RangayanPortalEmbed: React.FC<RangayanPortalEmbedProps> = ({
  appUrl = 'https://ais-pre-malwpie6tq3v2v7crmss3j-3388070068.asia-southeast1.run.app',
  height = '100vh',
  width = '100%',
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        backgroundColor: '#F6F7F4',
      }}
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F6F7F4',
            color: '#0F4C3A',
            zIndex: 10,
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: '3px solid rgba(15, 76, 58, 0.15)',
              borderTopColor: '#0F4C3A',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              marginBottom: '12px',
            }}
          />
          <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.04em', color: '#11231D' }}>
            RANGAYAN CREATIONS
          </span>
          <span style={{ fontSize: '12px', color: '#4D6359', marginTop: '4px' }}>
            Loading HR & Statutory Payroll Portal...
          </span>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <iframe
        src={appUrl}
        title="Rangayan Creations HR & Payroll Portal"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        allow="clipboard-write; camera; microphone"
        loading="eager"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default RangayanPortalEmbed;
