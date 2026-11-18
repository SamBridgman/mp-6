
import "./globals.css";
import Header from "@/app/components/Header";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
      <Header/>

      {children}
      </body>
    </html>
  );
}
