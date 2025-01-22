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
    '9 kg/m³': 9,
    '10 kg/m³': 10,
    '12 kg/m³': 12,
    '14 kg/m³': 14,
    '16 kg/m³': 16,
    '18 kg/m³': 18,
    '20 kg/m³': 20,
    '22 kg/m³': 22,
    '23 kg/m³': 23,
    '24 kg/m³': 24,
    '24 Kg/m³': 25,
    '28 kg/m³': 28, 
    '28 Kg/m³': 29,
    '28 KG/m³': 30,
    '32 KG/m³': 31,
    '32 kg/m³': 32,
    '32 Kg/m³': 33,
    '40 kg/m³': 40,
    '50 kg/m³': 50,
    '60 kg/m³': 60,
    '60 KG/m³': 62,
    '70 KG/m³': 71,
    '80 KG/m³': 82,
    '90 KG/m³': 92,
    '100 KG/m³': 102,
     '110 KG/m³': 112,
     '120 KG/m³': 122,
    '60 Kg/m³': 61,
    '65 kg/m³': 65,
    '70 Kg/m³': 70,
    '80 kg/m³': 80,
    '80 Kg/m³': 81,
    '90 kg/m³': 90,
    '90 Kg/m³': 91,
    '100 kg/m³': 100, 
    '100 Kg/m³': 101,
    '110 kg/m³': 110,
    '110 Kg/m³': 111,
    '120 kg/m³': 120,
    '120 Kg/m³': 121,
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
    '18  kg/m³': 690,
    '20  kg/m³': 700,
    '23   kg/m³': 710,
    '18     kg/m³': 720,
    '20    kg/m³': 730,
    '23    kg/m³': 740,
    

  


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