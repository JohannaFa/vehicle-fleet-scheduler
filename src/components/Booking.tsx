import { Typography } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';
import React from 'react';
import { BookingStatus } from '../types/booking';

interface BookingProps {
    variant: string,
    state: BookingStatus,
    children?: React.ReactNode;
    //'confirmed' | 'unconfirmed';
}

const BookingRoot = styled('div', {
    name: 'Booking',
    slot: 'root',
  })<{ props: BookingProps }>(({ props }) => ({
    width: '99%',
    height: '100%',
    borderRadius: 10,
    paddingLeft: 5,
    display: 'flex',
    alignItems: 'center',
    ...(props.variant === 'customer booking' && {
      backgroundColor: '#480078',
      color: 'pink'
    }),
    ...(props.variant === 'provisioning' && {
      backgroundColor: '#b26400a6',
      color: '#48007882',
    }),
    ...(props.variant === 'maintenance' && {
        backgroundColor: '#03428566',
        color: '#034285'
      }),
    ...(props.state === 'pending' && {
          backgroundImage: `repeating-linear-gradient(
            45deg, 
            rgba(255, 255, 255, 0.3) 0px, 
            rgba(255, 255, 255, 0.3) 3px, 
            transparent 3px, 
            transparent 6px
          )`,
      }),
  }));

export const Booking = React.forwardRef<HTMLDivElement, BookingProps>(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'Booking' });
  const { variant, children, ...other } = props;

  return (
    <BookingRoot props={props} ref={ref} {...other}>
        <Typography variant="caption">
        {children}      
        </Typography>
         
    </BookingRoot>
  );
});