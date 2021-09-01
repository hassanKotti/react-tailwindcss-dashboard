import React, { forwardRef } from 'react';

const style = {
  /*default: `font-medium active:opacity-70 rounded-md shadow  text-center focus:ring-4  ring-opacity-50 `,*/
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3',
  },

  default: `text-white focus:outline-none shadow rounded px-6 py-2 font-medium transition ease-in duration-200`,
  colors: {
    primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
    success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
    danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
    dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
    warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
    indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
  },
};

const Button = forwardRef( ({ children, className,rounded, color = 'success', disabled = false, size = 'md', ...props }, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${className} ${style.default} ${style.sizes[size]} 
      ${rounded ? 'rounded-full' : 'rounded'}
      ${style.colors[color]} ${disabled ? style.disabled : ''}`}
      {...props}
    >
      {children}
    </button>
  )
});

Button.displayName = 'Button';

export default Button;