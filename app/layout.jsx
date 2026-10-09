export const metadata = {
  title: "CyberTech - The Global Cybersecurity Directory",
  description:
    "Find and compare cybersecurity companies, service providers, technology vendors and security experts by city, country, services and industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
