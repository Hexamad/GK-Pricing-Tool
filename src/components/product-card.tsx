import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Product, ProductSelection } from '@/lib/types';
import { calculatePrice, formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selection: ProductSelection, price: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { toast } = useToast();
  const [selection, setSelection] = useState<ProductSelection>({
    density: product.densities[0],
    dimension: product.dimensions[0],
    size: product.sizes[0],
  });

  const price = calculatePrice(product.basePrice, selection);

  const handleAddToCart = () => {
    onAddToCart(product, selection, price);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <Badge variant="secondary" className="uppercase">
            {product.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select
              value={selection.density}
              onValueChange={(value) => setSelection({ ...selection, density: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Density" />
              </SelectTrigger>
              <SelectContent>
                {product.densities.map((density) => (
                  <SelectItem key={density} value={density}>
                    {density.charAt(0).toUpperCase() + density.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selection.size}
              onValueChange={(value) => setSelection({ ...selection, size: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Select
            value={selection.dimension.toString()}
            onValueChange={(value) => setSelection({ ...selection, dimension: parseInt(value, 10) })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Dimension (mm)" />
            </SelectTrigger>
            <SelectContent>
              {product.dimensions.map((dim) => (
                <SelectItem key={dim} value={dim.toString()}>
                  {dim}mm
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-muted-foreground">Price</div>
            <div className="text-2xl font-bold">{formatPrice(price)}</div>
          </div>
          <Button className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}