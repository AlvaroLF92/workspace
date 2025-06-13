import { ReactNode } from "react";

// COMPONENTES ---

// Menú de lenguajes
export class Language implements ValueLabel{
  value!: string;
  label!: string;
  flagLabel!: string;
}
export interface ValueLabel {
  value: string;
  label: ReactNode;
}
  // Label del menú de lenguaje

export type LanguageLabelComponentProps = {
  language: Language;
};

// Menú genérico
export interface DropDownProps {
  options: ValueLabel[];
  onChange: Function;
  placeholder: ReactNode;
}
export interface ButtonProps {
  onClick: () => void;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}

// Carousel 

export interface CarouselProps {
  images: { src: string; texts: string[] }[];
}

// Galería de imágenes

export type GalleryImage = {
  src: string;
  thumb: string;
  alt: string;
};

// Botón de Home

export interface HomeButtonProps {
  className?: string;
}

// Barra de navegación

export interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Prefooter

 interface PreFooterTexts {
  text1: string;
  text2: string;
}

export interface Section {
  value: string; 
  texts: PreFooterTexts; 
}

// Componente lupa

export interface SearchResult {
  label: string;
  url: string;
  foundText: string;
}

// Social media 

export interface SocialMediaProps {
  className?: string;
  inHeader?: boolean; 
}

// Componente de texto-imagen 

export interface TextImageProps {
  textKeys: string[];
  imageSrc: string;
  layout: "text-left" | "text-right" | "text-top" | "text-bottom";
}

// PAGINAS ---

// Página Tours

export type TourId = "tour-1" | "tour-2" | "tour-3" | "tour-4";

export interface Tour {
  name: string;
  description: string;
  duration: string;
  price: string;
  stops: string[];
  extras: string[];
  icon: string;
  image: string;
}

// Página Rentals

export interface ListItem {
  textKey: string;
}
