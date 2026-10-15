import IconInstagram from "@/assets/images/icons/instagram.svg";
import IconFacebook from "@/assets/images/icons/facebook.svg";
import IconTiktok from "@/assets/images/icons/tiktok.svg";
import IconWhatsApp from "@/assets/images/icons/whatsapp.svg";

const socialLinks = [
  { href: "#", icon: IconInstagram, name: "Instagram" },
  { href: "#", icon: IconFacebook, name: "Facebook" },
  { href: "#", icon: IconTiktok, name: "TikTok" },
  { href: "#", icon: IconWhatsApp, name: "WhatsApp" },
];

export const SocialLinks = () => {
    return (
        <div>
              <p className="mb-4 text-xl font-medium">Redes Sociais</p>

              <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                  <li key={name} className="border rounded-full p-1 hover:border-[#cccccc] transition-colors ">
                    <a href={href} aria-label={name}>
                      <img src={icon} alt={name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
    )
}