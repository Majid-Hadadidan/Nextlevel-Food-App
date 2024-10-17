import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>MealsPage</h1>
      <h2>
        <Link href="/meals/meals-1">meals 1</Link>
      </h2>
      <h2>
        <Link href="/meals/meals-2">meals 2</Link>
      </h2>
    </main>
  );
}
