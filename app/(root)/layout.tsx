import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { Button } from "@/components/ui/button";
import { routesConfig } from "@/config/routes";
import { Download } from "lucide-react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-5">
            <ModeToggle />

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://drive.google.com/file/d/1Pz3krbxHuVJXO6r3n8awrFrKPa_70AG7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
