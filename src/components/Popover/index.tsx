import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

interface CustomPopoverProps {
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  anchorEl: any;
  options: string[];
  children: any;
}
const CustomPopover: React.FC<CustomPopoverProps> = ({
  handleClose,
  open,
  anchorEl,
  options,
  children,
}): React.ReactElement => {
  return (
    <div>
      {children}
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 50 * 4.5,
            width: '20ch',
          },
        }}>
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomPopover;
