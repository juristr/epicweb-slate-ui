export function useForm() {
  return {
    handleSubmit: (values: unknown) => console.log(values),
    reset: () => console.log("form reset"),
  };
}
