import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Twitter", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube }
];

export function Footer() {
  return (
    <footer className="bg-white py-16 text-gray-700">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div>
              <span className="block text-4xl font-extrabold lowercase leading-none tracking-tight text-blue">
                accredian
              </span>
              <span className="block text-sm font-medium tracking-[0.28em] text-gray-500">
                credentials that matter
              </span>
            </div>
            <div className="mt-8 flex gap-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href="#" aria-label={`Accredian on ${social.label}`} className="text-gray-700 hover:text-blue">
                    <Icon size={28} fill="currentColor" strokeWidth={social.label === "Instagram" ? 2 : 0} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-left lg:text-center">
            <a href="#home" className="inline-flex rounded-lg bg-blue px-12 py-4 text-2xl font-bold text-white">
              Enquire Now
            </a>
            <p className="mt-5 text-xl font-bold text-gray-600">Speak with our Advisor</p>
          </div>
        </div>

        <div className="my-10 h-px bg-gray-600" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold text-black">Accredian</h3>
            <ul className="mt-5 space-y-5 text-xl font-bold">
              <li><a href="#" className="hover:text-blue">About</a></li>
              <li><a href="#" className="hover:text-blue">Blog</a></li>
              <li><a href="#" className="hover:text-blue">Why Accredian</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-black">Contact Us</h3>
            <p className="mt-5 text-xl font-bold">
              Email us: <a className="text-blue" href="mailto:enterprise@accredian.com">enterprise@accredian.com</a>
            </p>
            <p className="mt-5 max-w-3xl text-xl font-bold leading-8">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <div className="my-10 h-px bg-gray-600" />
        <p className="text-center text-xl font-bold text-gray-600">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
