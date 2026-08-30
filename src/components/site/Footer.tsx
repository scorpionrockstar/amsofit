import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";
import { submitEnquiry } from "@/services/enquiries";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-lg font-display text-lg font-bold text-primary-foreground">
              A
            </span>
            <span className="font-display text-lg font-bold">
              AMSO<span className="text-gradient-brand">FIT</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Commercial-grade cardio and strength equipment engineered for gyms, hotels,
            institutions and premium home setups.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Equipment</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About AMSOFIT
              </Link>
            </li>
            <li>
              <Link to="/gym-solutions" className="hover:text-foreground">
                Gym Solutions
              </Link>
            </li>
            <li>
              <Link to="/catalogues" className="hover:text-foreground">
                Catalogues
              </Link>
            </li>
            <li>
              <Link to="/series/$slug" params={{ slug: "timberline" }} className="hover:text-foreground">
                Timberline Series
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get In Touch</p>
<ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Opposite Reliance Smart Bazaar, Una, Himachal Pradesh, India</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+918629803939" className="transition-colors hover:text-foreground">
                +91 86298-03939
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:amsofit1@gmail.com" className="transition-colors hover:text-foreground">
                amsofit1@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="https://www.instagram.com/amsofitness"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                @amsofitness
              </a>
            </li>
          </ul>

          <form
            className="mt-5 flex gap-2"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email) return;
              await submitEnquiry({ type: "newsletter", email });
              setEmail("");
              toast.success("You're subscribed to AMSOFIT updates.");
            }}
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="bg-surface-2"
            />
            <Button type="submit" className="bg-gradient-brand">
              Join
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
<p>© {new Date().getFullYear()} AMSOFIT Fitness Equipment. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>Built for commercial performance.</p>
            <a
              href="https://www.instagram.com/amsofitness"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <Instagram className="h-3.5 w-3.5" /> @amsofitness
            </a>
            <a
              href="https://www.instagram.com/fitnesspointgymu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <Instagram className="h-3.5 w-3.5" /> @fitnesspointgymu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
