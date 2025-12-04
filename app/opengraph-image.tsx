import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tracksy - Time Tracking & Business Management for Freelancers'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

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
          backgroundColor: '#0B0E12',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #D5FF3F20 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D5FF3F15 0%, transparent 50%)',
        }}
      >
        {/* Logo and Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              backgroundColor: '#D5FF3F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: '#0B0E12' }}
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: '#F2F3F5',
              letterSpacing: '-0.02em',
            }}
          >
            Tracksy
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: '#F2F3F5',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Time Tracking & Business Management
          </span>
          <span
            style={{
              fontSize: 32,
              color: '#D5FF3F',
              fontWeight: 500,
            }}
          >
            Built for Freelancers
          </span>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            marginTop: 50,
            gap: 40,
          }}
        >
          {['Track Time', 'Manage Clients', 'Generate Invoices'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1A1F2E',
                padding: '12px 24px',
                borderRadius: 50,
                border: '1px solid #2A2F3C',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                style={{ marginRight: 10 }}
              >
                <path
                  fill="#D5FF3F"
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span style={{ color: '#F2F3F5', fontSize: 18 }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 50,
            padding: '16px 40px',
            backgroundColor: '#D5FF3F',
            borderRadius: 50,
            color: '#0B0E12',
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Start Free Trial - No Credit Card Required
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
