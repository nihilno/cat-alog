import { Dispatch, SetStateAction } from "react";

declare global {
  type ModalProps = {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
  };

  type ScrapedProduct = {
    productName: string;
    currentPrice: number;
    currencyCode?: string;
    productImageUrl?: string;
  };

  type Product = {
    id: string;
    user_id: string;
    url: string;
    name: string;
    current_price: number;
    currency: string;
    image_url?: string;
    created_at: string;
    updated_at: string;
  };

  type GetProductsResult =
    | { success: true; products: Product[] }
    | { success: false; error: string };

  export type PriceHistory = {
    id: string;
    product_id: string;
    price: number;
    currency: string;
    checked_at: string;
  };

  type GetPriceHistoryResult =
    | { success: true; history: PriceHistory[] }
    | { success: false; error: string };
}
