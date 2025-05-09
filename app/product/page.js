import { useState } from 'react';

// Components
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import Tabs from '@/components/product/Tabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import WishlistButton from '@/components/product/WishlistButton';

// Sample product data (normally would be fetched)
const product = {
    id: "BJV-SER-001",
    name: "BJV Hyaluronic Acid Hydrating Serum",
    brand: "BJV Cosmetics",
    description:
        "Our advanced hyaluronic acid serum delivers intense hydration with a lightweight formula that absorbs quickly. Enriched with vitamin E and botanical extracts to plump, smooth, and protect the skin. Suitable for all skin types including sensitive skin. Dermatologist tested. Cruelty-free.",
    longDescription:
        "<p>This revolutionary serum combines <strong>1.5% hyaluronic acid complex</strong> with <strong>2% vitamin E</strong> to deliver multi-level hydration:</p><ul><li>Penetrates deep into skin's surface</li><li>Locks in moisture for 72 hours</li><li>Reduces appearance of fine lines</li><li>Creates a protective moisture barrier</li><li>Non-greasy, fast-absorbing formula</li></ul><p>Clinical results show:</p><ul><li>89% reported improved hydration</li><li>78% saw reduced fine lines</li><li>94% said skin felt smoother</li></ul>",
    category: "Serums",
    subCategory: "Hydration",
    actualPrice: 2499,
    currentPrice: 1999,
    discountPercentage: 20,
    discountLabel: "FLAT20",
    inStock: true,
    stockCount: 142,
    rating: 4.7,
    reviewCount: 1286,
    skinType: ["All", "Dry", "Combination", "Sensitive"],
    ingredients: [
        "Aqua/Water",
        "Hyaluronic Acid",
        "Glycerin",
        "Vitamin E (Tocopherol)",
        "Aloe Barbadensis Leaf Juice",
        "Chamomilla Recutita (Matricaria) Flower Extract",
        "Panthenol",
        "Allantoin",
        "Phenoxyethanol",
        "Ethylhexylglycerin",
    ],
    howToUse: [
        "Apply 2-3 drops to clean face and neck",
        "Gently pat into skin until fully absorbed",
        "Use morning and night before moisturizer",
        "Follow with sunscreen during daytime",
    ],
    benefits: [
        "Deep hydration",
        "Plumps fine lines",
        "Non-comedogenic",
        "Vegan formula",
        "Alcohol-free",
        "Paraben-free",
    ],
    images: [
        {
            url: "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
            alt: "BJV Serum Bottle Front View",
            zoomUrl:
                "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
        },
        {
            url: "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
            alt: "BJV Serum Bottle Side View",
            zoomUrl:
                "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
        },
        {
            url: "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
            alt: "BJV Serum Dropper Detail",
            zoomUrl:
                "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
        },
        {
            url: "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
            alt: "BJV Serum Ingredients Showcase",
            zoomUrl:
                "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
        },
    ],
    variants: [
        {
            id: "BJV-SER-001-30",
            size: "30ml",
            priceDiff: 0,
            sku: "SER30",
            inStock: true,
            stockCount: 89,
        },
        {
            id: "BJV-SER-001-50",
            size: "50ml",
            priceDiff: 800,
            sku: "SER50",
            inStock: true,
            stockCount: 53,
        },
        {
            id: "BJV-SER-001-100",
            size: "100ml",
            priceDiff: 1200,
            sku: "SER100",
            inStock: false,
            stockCount: 0,
        },
    ],
    relatedProducts: [
        {
            id: "BJV-MOI-002",
            name: "BJV Ceramide Moisturizer",
            currentPrice: 1499,
            actualPrice: 1799,
            discountPercentage: 17,
            rating: 4.5,
            image:
                "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
            inStock: true,
        },
        {
            id: "BJV-CLE-003",
            name: "BJV Gentle Cleansing Gel",
            currentPrice: 899,
            actualPrice: 999,
            discountPercentage: 10,
            rating: 4.3,
            image:
                "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
            inStock: true,
        },
        {
            id: "BJV-SPF-004",
            name: "BJV Mineral Sunscreen SPF 50",
            currentPrice: 1299,
            actualPrice: 1499,
            discountPercentage: 13,
            rating: 4.6,
            image:
                "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
            inStock: false,
        },
        {
            id: "BJV-TON-005",
            name: "BJV Rose Water Toner",
            currentPrice: 799,
            actualPrice: 899,
            discountPercentage: 11,
            rating: 4.4,
            image:
                "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
            inStock: true,
        },
    ],
    badges: [
        {
            type: "bestseller",
            text: "Bestseller",
        },
        {
            type: "new",
            text: "New Formula",
        },
        {
            type: "award",
            text: "Beauty Award 2023",
        },
    ],
    comments: {
        data: [
            {
                id: "REV-001",
                user: {
                    name: "Priya Sharma",
                    avatar:
                        "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
                    verified: true,
                },
                rating: 5,
                title: "Best serum I've ever used!",
                text: "I've tried many hyaluronic acid serums but this one is exceptional. My skin drinks it up and stays hydrated all day. The 50ml bottle lasts about 3 months with daily use.",
                date: "2023-10-15T11:30:00Z",
                skinType: "Dry",
                likes: 42,
                images: [
                    "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
                ],
            },
            {
                id: "REV-002",
                user: {
                    name: "Rahul Patel",
                    avatar:
                        "https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
                    verified: false,
                },
                rating: 4,
                title: "Good but slightly sticky",
                text: "Does a great job hydrating but leaves a slight sticky feeling for 5-10 minutes after application. Still worth it for the results though.",
                date: "2023-09-28T14:45:00Z",
                skinType: "Oily",
                likes: 18,
            },
            {
                id: "REV-003",
                user: {
                    name: "Maya Joshi",
                    avatar:
                        "https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400",
                    verified: true,
                },
                rating: 5,
                title: "Amazing for winter dryness",
                text: "This serum saved my skin during harsh winter months. No more flakiness and my makeup applies much smoother now. Would definitely repurchase!",
                date: "2023-11-10T09:15:00Z",
                skinType: "Combination",
                likes: 35,
            },
        ],
        pagination: {
            total: 1286,
            limit: 3,
            offset: 0,
            hasMore: true,
        },
        ratingDistribution: {
            5: 892,
            4: 254,
            3: 98,
            2: 28,
            1: 14,
        },
    },
    ingredientAnalysis: {
        vegan: true,
        crueltyFree: true,
        alcoholFree: true,
        fragranceFree: true,
        parabenFree: true,
        sulfateFree: true,
        dermatologistTested: true,
    },
};

export default function ProductPage() {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className="min-h-screen bg-white">
            {/* Header - Simplified for demo */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-green-600">BJV Cosmetics</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                            <button className="p-2">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </button>
                            <button className="p-2 relative">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <span className="absolute top-0 right-0 bg-green-500 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">2</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Product Header - Only visible on mobile */}
                    <div className="md:hidden mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                        <div className="flex items-center mt-1">
                            <div className="flex items-center">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="ml-1 text-sm text-gray-600">({product.rating}) {product.reviewCount} reviews</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute top-2 right-2 z-10">
                            <WishlistButton />
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Product Images */}
                            <div className="md:w-1/2">
                                <ImageGallery images={product.images} />
                            </div>

                            {/* Product Info */}
                            <div className="md:w-1/2">
                                <ProductInfo product={product} />
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs */}
                    <div className="mt-12">
                        <Tabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            product={product}
                        />
                    </div>

                    {/* Related Products */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                        <RelatedProducts products={product.relatedProducts} />
                    </div>
                </div>
            </main>

            {/* Footer - Simplified for demo */}
            <footer className="bg-gray-100 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Shop</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">New Arrivals</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Bestsellers</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Skincare</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Hair Care</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Support</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Track Order</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sustainability</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <p className="text-sm text-gray-500 text-center">© 2025 BJV Cosmetics. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}