import {
  Layers, Sparkles, Phone, Rocket, Building2, Briefcase, Code2,
  Target, Smartphone, TrendingUp, ArrowUpRight, Palette, Menu, X, MessageCircle,
  LayoutTemplate, CreditCard, MailOpen, FolderKanban, Globe, Building,
} from 'lucide-react'

const map = {
  layers: Layers, sparkles: Sparkles, phone: Phone, rocket: Rocket,
  building: Building2, briefcase: Briefcase, code: Code2, target: Target,
  smartphone: Smartphone, trending: TrendingUp, arrow: ArrowUpRight,
  palette: Palette, menu: Menu, close: X, whatsapp: MessageCircle,
  landing: LayoutTemplate, card: CreditCard, invite: MailOpen,
  portfolio: FolderKanban, globe: Globe, company: Building,
}

export default function Icon({ name, size = 16, strokeWidth = 1.8, className = '' }) {
  const C = map[name] || Sparkles
  return <C size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}
