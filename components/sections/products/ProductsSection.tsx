"use client";

import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Physical Tools",
        price: "$24.00",
        image: "/products/p1.png",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Digital Resources",
        price: "$12.00",
        image: "/products/p2.png"
    },
    {
        id: 3,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Educational Kits",
        price: "$45.00",
        image: "/products/p3.png",
        badge: "New"
    },
    {
        id: 4,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Bundles",
        price: "$75.00",
        image: "/products/p4.png"
    },
    {
        id: 5,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Physical Tools",
        price: "$18.00",
        image: "/products/p5.png"
    },
    {
        id: 6,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Digital Resources",
        price: "$15.00",
        image: "/products/p6.png"
    },
    {
        id: 7,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Educational Kits",
        price: "$32.00",
        image: "/products/p7.png"
    },
    {
        id: 8,
        name: "Captain Experimentosaurus & the Body Galaxy",
        category: "Digital Resources",
        price: "$18.00",
        image: "/products/p8.png"
    }
];

export default function ProductsSection() {
    return (
        <section className="bg-[#F0EEE6] pt-4 pb-16 md:py-24">
            <div className="max-w-[1242px] mx-auto px-0 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4 justify-items-center">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
