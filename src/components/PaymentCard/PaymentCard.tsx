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
    backgroundColor: '#f9fafb',
    border: 'none',
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
            padding: '32px',
            justifyContent: 'center'
          }}
        >
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
          }}>
            Set up Kajabi Payments
          </h2>
          
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            lineHeight: '1.5',
            marginBottom: '24px',
            maxWidth: '320px',
            margin: '0 0 24px 0',
          }}>
            Kajabi Payments let you manage payments in one place, offer methods like Apple Pay and Afterpay, automate sales tax, and sync with QuickBooks or Xero.
          </p>
          
          <Box direction="row" alignItems="center" gap="md">
            <Button 
              variant="primary"
              style={{
                backgroundColor: '#111827',
                padding: '8px 24px',
                fontWeight: '500',
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
            paddingRight: '32px'
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=320&h=180&fit=crop"
              alt="Payment methods illustration"
              style={{
                width: '320px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
        </Box>
      </Box>
    </Card>
  );
};