import { UserProvider } from '@auth0/nextjs-auth0/client';
import './global.css';

export const metadata = {
  title: 'Welcome to multi-zones-nextjs',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
