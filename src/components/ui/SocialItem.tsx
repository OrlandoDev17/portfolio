// Tipos
import type { SocialItem } from "@/lib/index";

export default function SocialItem({ icon: Icon, url }: SocialItem) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className="size-12 p-2 rounded-lg text-white bg-gradient-to-br from-blue-500 to-violet-700 hover:scale-110 hover:-translate-y-1 transition" />
    </a>
  );
}
