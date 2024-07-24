import './globals.css';

export const metadata = {
  title: 'My Parallax App',
  description: 'A Next.js app with parallax animation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
