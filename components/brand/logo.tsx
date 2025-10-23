import Image from 'next/image';

export function Logo({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="SMERP TEK Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

export function LogoMark({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="SMERP TEK"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
