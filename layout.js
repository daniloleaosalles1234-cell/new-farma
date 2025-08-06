export const metadata = {
  title: 'New Farma',
  description: 'Venda de medicamentos online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
