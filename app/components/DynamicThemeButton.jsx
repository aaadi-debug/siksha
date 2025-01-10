import Link from 'next/link';

const DynamicThemeButton = ({
  children,
  href = null,
  onClick = null,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = `click-btn btn-style6`;

  if (href) {
    // Here, Rendering a <Link> if href is provided
    return (
      <Link href={href} {...props} className={baseClasses}>
        {children}
      </Link>
    );
  }

  // Here, Rendering a <button> otherwise
  return (
    <button type={type} onClick={onClick} className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default DynamicThemeButton;

// As a Link Button:

// jsx
// Copy code
// <DynamicThemeButton href="/about">
//   Go to About
// </DynamicThemeButton>


// As a Regular Button:
// <DynamicThemeButton onClick={() => alert('Button clicked!')}>
//   Click Me
// </DynamicThemeButton>
