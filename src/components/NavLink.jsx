import React from 'react';

const NavLink = ({ href, children, external = false, className = "",onClick }) => {
  const externalProps = external 
    ? { target: "_blank", rel: "noopener noreferrer" } 
    : {};

  return (
    <a 
      href={href} 
      {...externalProps}
      onClick={onClick}
      // Aquí el className permite que las clases del botón se mezclen
      className={`transition-colors ${className}`}
    >
      {children}
    </a>
  );
};
export default NavLink;
