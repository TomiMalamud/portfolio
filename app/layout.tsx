import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tomás Malamud",
  metadataBase: new URL("https://tmalamud.com"),
  description: "Some things about me.",
  openGraph: {
    title: "Tomás Malamud",
    description: "Some things about me.",
    siteName: "Tomás Malamud",
    images: [
      {
        url: "/tomasmalamud.jpg",
        width: 1200,
        height: 630,
        alt: "Tomás Malamud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Malamud",
    description: "Some things about me.",
    images: ["/tomasmalamud.jpg"],
    creator: "@tomasmalamud",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-gray-50 ${GeistSans.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <span className="text-md md:text-lg whitespace-nowrap font-bold">
                  <Link
                    href="/"
                    className="hover:bg-gray-200 hover:opacity-100 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-md -ml-2 transition-[background-color]"
                  >
                    Tomás Malamud
                  </Link>
                </span>
                <nav className="flex text-sm font-medium space-x-4 items-center">
                  <Link
                    href="/reading-list"
                    className="relative rounded-md w-auto h-8 flex items-center justify-center px-3 hover:bg-gray-200 dark:hover:bg-[#313131] hover:scale-105 transition-all duration-200"
                  >
                    Reading
                  </Link>
                  <a
                    href="https://x.com/tomasmalamud"
                    target="_blank"
                    rel="noreferrer"
                    className="relative rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#313131] hover:scale-105 transition-all duration-200"
                    aria-label="X Profile"
                    title="X Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                    <span className="sr-only">@tomasmalamud</span>
                  </a>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <footer>
              <div className="prose dark:prose-invert mt-8">
                <hr />
                <ul>
                  <li>
                    X{" "}
                    <a href="https://x.com/tomasmalamud" target="_blank">
                      @tomasmalamud
                    </a>
                  </li>
                  <li>
                    GitHub{" "}
                    <a
                      className=""
                      href="https://github.com/TomiMalamud"
                      target="_blank"
                    >
                      @TomiMalamud
                    </a>
                  </li>
                  <li>
                    LinkedIn{" "}
                    <a
                      href="https://www.linkedin.com/in/tomas-malamud/"
                      target="_blank"
                    >
                      Tomás Malamud
                    </a>
                  </li>
                  <li>
                    Email{" "}
                    <a href="mailto:tomasmalamud@gmail.com" target="_blank">
                      tomasmalamud@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
