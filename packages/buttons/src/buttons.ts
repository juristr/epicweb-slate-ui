export function createButton(label: string) {
  console.log("some bugfix message");
  return {
    label,
    variant: "default" as const,
    size: "medium" as const,
  };
}
