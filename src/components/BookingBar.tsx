import { Typography } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';
import React from 'react';
import { BookingStatus, BookingType } from '../types/booking';

interface BookingBarProps {
    variant: BookingType,
    state?: BookingStatus,
    children?: React.ReactNode;
}

const BookingBarRoot = styled('div', {
    name: 'BookingBar',
    slot: 'root',
  })<{ props: BookingBarProps }>(({ props }) => ({
    width: '99%',
    height: '100%',
    borderRadius: 3,
    paddingLeft: 5,
    display: 'flex',
    alignItems: 'center',
    ...(props.variant === 'customer booking' && {
      backgroundColor: '#48007882',
      color: '#480078'
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

export const BookingBar = React.forwardRef<HTMLDivElement, BookingBarProps>(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'BookingBar' });
  const { variant, children, ...other } = props;

  return (
    // add handler - onDrag={dragstartHandler}
    <BookingBarRoot props={props} ref={ref} {...other} draggable="true">
        <Typography variant="caption">
        {children}      
        </Typography>
         
    </BookingBarRoot>
  );
});