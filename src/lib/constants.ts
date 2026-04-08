export const LOJA_URL = "https://loja.phytonatus.com.br/"
export const AMAZON_URL = "#" // TODO: inserir URL real
export const MERCADO_LIVRE_URL = "#" // TODO: inserir URL real

export const EMAIL_COMERCIAL = "comercial@phytonatus.com.br" // TODO: confirmar
export const EMAIL_COMPRAS = "compras@phytonatus.com.br" // TODO: confirmar
export const EMAIL_RH = "rh@phytonatus.com.br" // TODO: confirmar

export const BRANDS = [
  {
    id: "phytonatus",
    name: "Phytonatus",
    tagline: "O mel que vem do campo para sua mesa",
    description:
      "A marca que deu origem ao grupo. A bisnaga de mel Phytonatus é sinônimo de pureza e praticidade, levando o melhor do campo direto para a mesa das famílias brasileiras.",
    category: "Mel Flores do Campo",
    accentColor: "var(--color-phyto-accent)",
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
  {
    id: "emporio-do-mel",
    name: "Empório do Mel",
    tagline: "Variedade e pureza em cada florada",
    description:
      "Linha premium de méis selecionados por florada — laranjeira, eucalipto, flores do campo — além de própolis puro, spray de própolis e versões especiais como mel com nozes.",
    category: "Mel & Derivados",
    accentColor: "var(--color-mel-accent)",
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
  {
    id: "emporio-nuts",
    name: "Empório Nuts",
    tagline: "Mercearia natural do jeito que deveria ser",
    description:
      "Mercearia natural com ingredientes puros: sal rosa, cacau 100%, óleo e farinha de coco, açúcar de coco, temperos, pimentas e cookie infantil sem glúten.",
    category: "Mercearia Natural",
    accentColor: "var(--color-nuts-accent)",
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
  {
    id: "vida-gourmet",
    name: "Vida Gourmet",
    tagline: "Para quem cozinha com intenção",
    description:
      "Linha premium gourmet com produtos especiais como o Timury — sal artesanal para hidratação em azeite e vinagre. Expansão contínua com novos produtos selecionados.",
    category: "Premium Gourmet",
    accentColor: "var(--color-gourmet-accent)",
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
  // TODO: Mel Origens — adicionar após lançamento (dez/jan)
] as const

export const CATALOG_PDF_URL = "#" // TODO: inserir PDF real

export const QUALITY_SEALS = [
  { name: "ISO 9001", imagePlaceholder: "ISO 9001" },
  { name: "HACCP", imagePlaceholder: "HACCP" },
  { name: "Selo Orgânico", imagePlaceholder: "Orgânico" },
  { name: "SIF", imagePlaceholder: "SIF" },
  { name: "Selo Arte", imagePlaceholder: "Selo Arte" },
]

export const SUPERMARKET_CLIENTS = [
  { name: "Sonda", imagePlaceholder: "Sonda" },
  { name: "Tust", imagePlaceholder: "Tust" },
  { name: "Rede 1", imagePlaceholder: "Rede 1" },
  { name: "Rede 2", imagePlaceholder: "Rede 2" },
  { name: "Rede 3", imagePlaceholder: "Rede 3" },
  { name: "Rede 4", imagePlaceholder: "Rede 4" },
]

export const CONTACT_DESTINATIONS = [
  { value: "comercial", label: "Comercial", email: EMAIL_COMERCIAL },
  { value: "compras", label: "Compras", email: EMAIL_COMPRAS },
  { value: "rh", label: "RH", email: EMAIL_RH },
] as const
