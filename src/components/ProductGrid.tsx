import ProductCard, { Product } from "./ProductCard";
import headphonesImage from "@/assets/headphones.jpg";
import smartwatchImage from "@/assets/smartwatch.jpg";
import chargerImage from "@/assets/charger.jpg";
import smartphoneImage from "@/assets/smartphone.jpg";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 299,
    originalPrice: 399,
    image: headphonesImage,
    category: "Audio",
    rating: 4.8,
    reviews: 1247
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 449,
    image: smartwatchImage,
    category: "Wearables",
    rating: 4.6,
    reviews: 892
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    price: 79,
    originalPrice: 99,
    image: chargerImage,
    category: "Accessories",
    rating: 4.4,
    reviews: 563
  },
  {
    id: "4",
    name: "Premium Smartphone",
    price: 899,
    image: smartphoneImage,
    category: "Mobile",
    rating: 4.9,
    reviews: 2156
  }
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular tech essentials
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;