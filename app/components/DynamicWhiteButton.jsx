const DynamicWhiteButton = ({
  children,
  href = null,
  onClick = null,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = `click-btn btn-style5`;

  if (href) {
    // Here, Rendering a <Link> if href is provided
    return (
      <a href={href} {...props} className={baseClasses}>
        {children}
      </a>
    );
  }

  // Here, Rendering a <button> otherwise
  return (
    <button type={type} onClick={onClick} className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default DynamicWhiteButton;

// As a Link Button:

// jsx
// Copy code
// <DynamicWhiteButton href="/about">
//   Go to About
// </DynamicWhiteButton>


// As a Regular Button:
// <DynamicWhiteButton onClick={() => alert('Button clicked!')}>
//   Click Me
// </DynamicWhiteButton>
