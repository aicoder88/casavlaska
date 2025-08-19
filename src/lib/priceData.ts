export interface PricePoint {
  month: string;
  pricePerM2: number;
}

export interface Comparable {
  address: string;
  size: number;
  renovated: boolean;
  price: number;
  pricePerM2: number;
  yearBuilt: number;
}

export interface CurrentListing extends Comparable {
  rooms: string;
  floor: number;
  features: string[];
}

export interface PriceData {
  city_avg: PricePoint[];
  kvaternik_vlaska: PricePoint[];
  comps: Comparable[];
  currentListing: CurrentListing;
}

export async function fetchPriceData(): Promise<PriceData> {
  try {
    const response = await fetch("/data/prices.json");
    if (!response.ok) {
      throw new Error("Failed to fetch price data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching price data:", error);
    throw error;
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPricePerM2(pricePerM2: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(pricePerM2);
}

export function calculatePriceChange(data: PricePoint[]): {
  absolute: number;
  percentage: number;
} {
  if (data.length < 2) return { absolute: 0, percentage: 0 };

  const first = data[0].pricePerM2;
  const last = data[data.length - 1].pricePerM2;
  const absolute = last - first;
  const percentage = (absolute / first) * 100;

  return { absolute, percentage };
}

export function getLatestPrice(data: PricePoint[]): number {
  return data.length > 0 ? data[data.length - 1].pricePerM2 : 0;
}

export function compareToMarket(
  listingPricePerM2: number,
  marketPricePerM2: number,
): {
  difference: number;
  percentage: number;
  isBelow: boolean;
} {
  const difference = listingPricePerM2 - marketPricePerM2;
  const percentage = (Math.abs(difference) / marketPricePerM2) * 100;
  const isBelow = difference < 0;

  return { difference, percentage, isBelow };
}
