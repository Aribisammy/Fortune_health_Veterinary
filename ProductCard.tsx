import { PackageOpen } from "lucide-react";
import type { ProductCategory } from "@/data/products";

export default function ProductCard({ product }: { product: ProductCategory }) {
  return (
    <article className="rounded-3xl border border-[#e3eae7] bg-white p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#edf6f3] text-[#176b57]">
        <PackageOpen size={23} />
      </div>
      <h3 className="mt-5 font-[var(--font-poppins)] text-xl font-bold text-[#17201d]">
        {product.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#5f6b67]">{product.description}</p>
    </article>
  );
}
