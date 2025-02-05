import React, { useState } from 'react';
import { MenuButton } from './styles';
import icons from '../icons'; // Certifique-se de que o caminho está correto

const Button = ({ children, active, icon, ...props }) => {
  const SvgIcon = icons[icon];
  const [isHovered, setIsHovered] = useState(false);

  const iconColor = active ? '#FFFFFF' : isHovered ? '#484848' : '#1E1E1E';

  return (
    <MenuButton
      active={active}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <SvgIcon width={24} height={24} fill={iconColor} />}
      {children}
    </MenuButton>
  );
};

export default Button;
