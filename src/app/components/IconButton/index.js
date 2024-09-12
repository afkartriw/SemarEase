// components/IconButton.js
import Link from 'next/link';

const IconButton = ({ href, iconSrc, text }) => {
  return (
    <Link href={href} className="flex items-center space-x-4 group">
      <img src={iconSrc} alt={text} className="h-6 w-6" />
      <span className="hidden group-hover:inline-block text-black">{text}</span>
    </Link>
  );
};

export default IconButton;
