export const brandName = "Amigos da Cruz";

export const footerTheme = {
  strong: "rgba(240,232,216,0.92)",
  heading: "rgba(240,232,216,0.72)",
  muted: "rgba(240,232,216,0.56)",
  soft: "rgba(240,232,216,0.5)",
} as const;

export const sectionIdFromLabel = (label: string) =>
  label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
