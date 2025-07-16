import StreamClientProvider from "@/components/providers/StreamClientProvider";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StreamClientProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </StreamClientProvider>
  );
}
