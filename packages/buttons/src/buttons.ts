export function createButton(label: string, link?: string) {
  return {
    label,
    link,
    variant: "default" as const,
    size: "medium" as const,
  };
}
