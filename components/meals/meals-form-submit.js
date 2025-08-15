"use client";

export default function MealsFormSubmit({ isPending }) {
  return (
    <button type="submit" disabled={isPending}>
      {isPending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
