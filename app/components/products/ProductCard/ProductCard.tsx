import { getAmountStr, getBrCurrencyStr } from "~/utils/text-format";
import type { ProductCardProps } from "./ProductCardProps";

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, quantity, imgUrl } = product;
  const currencyPrice = getBrCurrencyStr(price);
  const amount = getAmountStr(quantity);

  return (
    <article
      className="flex flex-col w-[300px] h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      aria-label={`Produto: ${name}`}
    >
      <img
        className="flex-none rounded-t-lg w-[300px] h-[300px] object-cover"
        src={imgUrl}
        alt={`Imagem do produto ${name}`}
      />
      <div className="m-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gray-900 dark:text-white text-xl">{currencyPrice}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Quantidade disponível: {amount}
          </p>
        </div>
        <button
          type="button"
          className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center"
          aria-label={`Adicionar ${name} ao carrinho`}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}
