import React from 'react';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { Box } from '../shared/Box';
import { Icon } from '../shared/Icon';

export interface PaymentCardProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  className = '',
  style = {},
}) => {
  const cardStyles: React.CSSProperties = {
    height: '250px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    ...style,
  };

  return (
    <Card className={className} style={cardStyles}>
      <Box direction="row" fit style={{ height: '100%' }}>
        {/* Content Section */}
        <Box 
          direction="column" 
          style={{ 
            flex: 1, 
            padding: '24px 32px',
            justifyContent: 'center'
          }}
        >
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '12px',
            lineHeight: '1.3',
            margin: '0 0 12px 0',
          }}>
            Set up Kajabi Payments
          </h2>
          
          <p style={{
            color: '#6b7280',
            fontSize: '13px',
            lineHeight: '1.4',
            marginBottom: '20px',
            maxWidth: '280px',
            margin: '0 0 20px 0',
          }}>
            Kajabi Payments let you manage payments in one place, offer methods like Apple Pay and Afterpay, automate sales tax, and sync with QuickBooks or Xero.
          </p>
          
          <Box direction="row" alignItems="center" gap="sm">
            <Button 
              variant="primary"
              style={{
                backgroundColor: '#111827',
                padding: '6px 16px',
                fontWeight: '500',
                fontSize: '13px',
                borderRadius: '6px',
              }}
            >
              Take me there
            </Button>
            
            <Button 
              variant="ghost"
              style={{
                color: '#374151',
                padding: '0',
                height: 'auto',
                fontWeight: '500',
                fontSize: '13px',
              }}
            >
              <Box direction="row" alignItems="center" gap="xs">
                <span>Learn more</span>
                <Icon name="external-link" size="small" />
              </Box>
            </Button>
            
            <Button 
              variant="ghost"
              style={{
                color: '#374151',
                padding: '0',
                height: 'auto',
                fontWeight: '500',
                fontSize: '13px',
              }}
            >
              Dismiss
            </Button>
          </Box>
        </Box>
        
        {/* Image Section */}
        <Box 
          style={{ 
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: '24px',
            width: '320px',
          }}
        >
          <div style={{ 
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            width: '280px',
            height: '160px',
          }}>
            {/* Kajabi Logo */}
            <div style={{
              backgroundColor: '#000',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gridColumn: 'span 1',
            }}>
              <span style={{ color: '#ff4444', fontSize: '24px', fontWeight: 'bold' }}>K</span>
            </div>
            
            {/* Apple Pay */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '500',
            }}>
              🍎 Pay
            </div>
            
            {/* Google Pay */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '500',
            }}>
              G Pay
            </div>
            
            {/* Klarna */}
            <div style={{
              backgroundColor: '#ffb3d9',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#000',
            }}>
              klarna.
            </div>
            
            {/* Dollar Sign */}
            <div style={{
              backgroundColor: '#22c55e',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#fff',
            }}>
              $
            </div>
            
            {/* Visa/Mastercard */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '600',
              color: '#1e40af',
            }}>
              VISA
            </div>
          </div>
        </Box>
      </Box>
    </Card>
  );
};