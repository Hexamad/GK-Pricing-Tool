import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ProductSelection } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculatePrice(basePrice: number, selection: ProductSelection): number {
  const dimensionMultiplier = selection.dimension / 10 ; // Convert mm to cm
  const densityMultiplier = getDensityMultiplier(selection.density);
  const sizeMultiplier = getSizeMultiplier(selection.size);
  
  return basePrice * dimensionMultiplier * densityMultiplier * sizeMultiplier;
}

function getDensityMultiplier(density: string): number {
  const multipliers: Record<string, number> = {
    '9 density': 9,
    '10 density': 10,
    '12 density': 12,
    '14 density': 14,
    '16 density': 16,
    '18 density': 18,
    '20 density': 20,
    '22 density': 22,
    '23 density': 23,
    '24 density': 24,
    // '24 density': 25,
    '28 density': 28, 
    // '28 density': 29,
    // '28 density': 30,
    '32 density': 31,
    // '32 density': 32,
    // '32 density': 33,
    '40 density': 40,
    '50 density': 50,
    '60 density': 60,
    // '60 density': 62,
    '70 density': 71,
    '80 density': 82,
    '90 density': 92,
    '100 density': 102,
     '110 density': 112,
     '120 density': 122,
    // '60 density': 61,
    '65 density': 65,
    // '70 density': 70,
    // '80 density': 80,
    // '80 density': 81,
    // '90 density': 90,
    // '90 density': 91,
    // '100 density': 100, 
    // '100 density': 101,
    // '110 density': 110,
    // '110 density': 111,
    // '120 density': 120,
    // '120 density': 121,
    'Standard GMF': 130,
    'Standard LS' : 140,
    'Standard L7ZS': 150,
    'Standard 16 inch': 200,
    'Standard 17 inch': 400,
    'Standard 16 Inch': 300,
    'Standard 17 Inch': 500,
    'Standard 16 inch ': 800,
    'Standard 17 inch ': 900,
    '70 GSM': 500,
    '80 GSM': 510,
    '90 GSM': 520,
    '100 GSM': 530,
    '110 GSM': 540,
    '120 GSM': 550,
    '80GSM': 560,
    '100GSM': 570,
    '120GSM': 580,
    '150GSM': 590,
    '180GSM': 600,
    '240GSM': 610,
    '100 GSM ': 620,
    '200GSM': 630,
    '300GSM': 640,
    '400GSM': 650,
    '200 GSM': 660,
    '300 GSM': 670,
    '400 GSM': 680,
    '18  density': 690,
    '20  density': 700,
    '23   density': 710,
    '18     density': 720,
    '20    density': 730,
    '23    density': 740,

  };
  return multipliers[density] || 1;
}

function getSizeMultiplier(size: string): number {
  const multipliers: Record<string, number> = {
    '80inch': 2,
    '90inch': 3,
    '6 feet x 2 feet': 12,
    'medium': 1,
    'large': 1.3,
    'xlarge': 1.6
  };
  return multipliers[size] || 1;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
}