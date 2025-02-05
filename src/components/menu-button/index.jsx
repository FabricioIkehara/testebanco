import React, { useState } from 'react';
import { MenuButton } from './styles';
import icons from '../icons'; 

const Button = ({ children, active, icon, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const SvgIcon = active ? icons[icon].white : icons[icon].black;

  return (
    <MenuButton
      active={active}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <SvgIcon width={24} height={24} />}
      {children}
    </MenuButton>
  );
};

export default Button;
