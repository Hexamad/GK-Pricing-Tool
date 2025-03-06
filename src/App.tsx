import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';
import { Cart } from '@/components/cart';
import { products } from '@/data/products';
import { FilterState, CartItem, Product, ProductSelection } from '@/lib/types';
import { Store } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    search: '',
    sort: 'name',
  });

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const categories = useMemo(() => 
    Array.from(new Set(products.map((p) => p.category))).sort(),
    []
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.basePrice - b.basePrice;
        case 'price-desc':
          return b.basePrice - a.basePrice;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [filters]);

  const handleAddToCart = (product: Product, selection: ProductSelection, price: number) => {
    setCartItems((prev) => [...prev, { product, selection, quantity: 1, price }]);
  };

  const handleUpdateQuantity = (itemIndex: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) => 
      prev.map((item, index) => 
        index === itemIndex ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemIndex: number) => {
    setCartItems((prev) => prev.filter((_, index) => index !== itemIndex));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
<<<<<<< Updated upstream
              <Store className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Gurukrupa Traders</h1>
=======
              {/* <Store className="h-8 w-8" /> */}
              <img src="gktLogo.png" alt="Logo" className="h-10 w-18" />
                <h1 className="text-3xl font-bold">
                <span className="text-red-500">Gurukrupa</span> <span className="text-blue-900">Traders</span>
                </h1>
      
>>>>>>> Stashed changes
            </div>
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            categories={categories}
          />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>
      <Toaster />
    </div>
  );
}

export default App;