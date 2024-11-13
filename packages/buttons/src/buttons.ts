export function createButton(label: string) {
  return {
    label,
    variant: "default" as const,
    size: "medium" as const,
  };
}
