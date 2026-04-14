// ── Product Images ──────────────────────────────────────────────────
import imgPhytonatus from "@/assets/images/Gemini_Generated_Image_gznhxagznhxagznh.png"
import imgEmporioDoMel from "@/assets/images/Gemini_Generated_Image_vujvx2vujvx2vujv.png"
import imgEmporioNuts from "@/assets/images/Gemini_Generated_Image_th2ucfth2ucfth2u.png"
import imgVidaGourmet from "@/assets/images/Gemini_Generated_Image_xeblp7xeblp7xebl.png"
import imgAllProducts from "@/assets/images/Gemini_Generated_Image_516fos516fos516f.png"
import imgShelf from "@/assets/images/Gemini_Generated_Image_1ntgrz1ntgrz1ntg.png"
import imgIngredients from "@/assets/images/Gemini_Generated_Image_4jajwf4jajwf4jaj.png"
import imgWarehouse from "@/assets/images/close-up-warehouse-view.jpg"
import imgProduction from "@/assets/images/transparent-plastic-bottles-filled-with-yellow-substance.jpg"
import imgQuality from "@/assets/images/side-view-woman-working-beer-factory.jpg"

// ── Brand Logos ─────────────────────────────────────────────────────
import logoPhytonatus from "@/assets/logos/marca-phytonatus.png"
import logoEmporioDoMel from "@/assets/logos/marca-emporio-mel.png"
import logoEmporioNuts from "@/assets/logos/marca-emporio-nuts.png"
import logoVidaGourmet from "@/assets/logos/marca-vida-gourmet.png"

// ── Client Logos ────────────────────────────────────────────────────
import logoSonda from "@/assets/logos/sonda-supermercados.png"
import logoTauste from "@/assets/logos/tauste.png"

// ── Quality Seal Images ─────────────────────────────────────────────
import seloISO from "@/assets/selos/iso-9001.png"
import seloHACCP from "@/assets/selos/HACCP.jpeg"
import seloOrganico from "@/assets/selos/selo_organico.jpg"
import seloSIF from "@/assets/selos/selosif.png"
import seloArte from "@/assets/selos/selo-arte-clear.png"

export {
  imgAllProducts,
  imgShelf,
  imgIngredients,
  imgWarehouse,
  imgProduction,
  imgQuality,
}

// ── URLs ────────────────────────────────────────────────────────────
export const LOJA_URL = "https://loja.phytonatus.com.br/"
export const AMAZON_URL = "#" // TODO: inserir URL real
export const MERCADO_LIVRE_URL = "#" // TODO: inserir URL real

// ── Emails ──────────────────────────────────────────────────────────
export const EMAIL_COMERCIAL = "comercial@phytonatus.com.br" // TODO: confirmar
export const EMAIL_COMPRAS = "compras@phytonatus.com.br" // TODO: confirmar
export const EMAIL_RH = "rh@phytonatus.com.br" // TODO: confirmar

// ── Brands ──────────────────────────────────────────────────────────
export const BRANDS = [
  {
    id: "phytonatus",
    name: "Phytonatus",
    tagline: "O mel que vem do campo para sua mesa",
    description:
      "A marca que deu origem ao grupo. A bisnaga de mel Phytonatus é sinônimo de pureza e praticidade, levando o melhor do campo direto para a mesa das famílias brasileiras.",
    category: "Mel Flores do Campo",
    accentColor: "var(--color-apicultor-yellow)",
    image: imgPhytonatus,
    logo: logoPhytonatus,
    storeUrl: "https://loja.phytonatus.com.br/",
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
    image: imgEmporioDoMel,
    logo: logoEmporioDoMel,
    storeUrl: "https://loja.phytonatus.com.br/", // TODO: URL loja Empório do Mel
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
  {
    id: "emporio-nuts",
    name: "Empório Nut's",
    tagline: "Mercearia natural do jeito que deveria ser",
    description:
      "Mercearia natural com ingredientes puros: sal rosa, cacau 100%, óleo e farinha de coco, açúcar de coco, temperos, pimentas e cookie infantil sem glúten.",
    category: "Mercearia Natural",
    accentColor: "var(--color-nuts-accent)",
    image: imgEmporioNuts,
    logo: logoEmporioNuts,
    storeUrl: "https://loja.phytonatus.com.br/", // TODO: URL loja Empório Nut's
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
    image: imgVidaGourmet,
    logo: logoVidaGourmet,
    storeUrl: "https://loja.phytonatus.com.br/", // TODO: URL loja Vida Gourmet
    nutritionPdfUrl: "#", // TODO: inserir PDF real
  },
] as const

export const CATALOG_PDF_URL = "#" // TODO: inserir PDF real
export const NUTRITION_ALL_PDF_URL = "#" // TODO: inserir PDF tabela nutricional completa

export const QUALITY_SEALS = [
  { name: "ISO 9001", image: seloISO },
  { name: "HACCP", image: seloHACCP },
  { name: "Selo Orgânico", image: seloOrganico },
  { name: "SIF", image: seloSIF },
  { name: "Selo Arte", image: seloArte },
]

export const SUPERMARKET_CLIENTS = [
  { name: "Sonda", logo: logoSonda },
  { name: "Tauste", logo: logoTauste },
  { name: "Rede 1", logo: null },
  { name: "Rede 2", logo: null },
  { name: "Rede 3", logo: null },
  { name: "Rede 4", logo: null },
]

export const CONTACT_DESTINATIONS = [
  { value: "comercial", label: "Comercial", email: EMAIL_COMERCIAL },
  { value: "compras", label: "Compras", email: EMAIL_COMPRAS },
  { value: "rh", label: "RH", email: EMAIL_RH },
] as const
