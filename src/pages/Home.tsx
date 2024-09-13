'use client'
import Button from "@/components/Button"
import { Heading } from "@/components/Heading"
import { SubHeading } from "@/components/SubHeading"
import ProductCard from "@/components/ProductCard"
import { useRouter } from "next/navigation"



export default function HomePage(){

    const router = useRouter();


    return <main className="flex flex-col  gap-8 p-10  bg-lightBiege min-h-screen">
        <div className="flex flex-col text-center gap-8 p-10 items-center" >
        <div className="flex flex-col items-center gap-10">
        <Heading label='Your Stop for Top Quality Garments with Affordable Pricing.'/>
        <SubHeading label='Discover latest trends and designs in many different styles from our collection.'/>
        </div>
        <Button onClick={()=>{router.push('/products')}} label='Shop Now!'/>
        </div>
        <div >
            <p className="text-5xl font-semibold text-left">Featured Products</p>
            <div className="m-5 flex gap-8">
                <ProductCard imageUrl="/dress.jpg" name="Dress 1" price={123} id={'123'} />
                <ProductCard imageUrl="/dress.jpg" name="Dress 2" price={123} id={'124'} />
                <ProductCard imageUrl="/dress.jpg" name="Dress 3" price={123} id={'125'} />
            </div>
        </div>
        <div>
        <p className="text-5xl font-semibold text-left">New Arrivals</p>
            <div className="m-5 flex gap-8">
                <ProductCard imageUrl="/dress.jpg" name="Dress 1" price={123} id={'126'} />
                <ProductCard imageUrl="/dress.jpg" name="Dress 2" price={123} id={'127'} />
                <ProductCard imageUrl="/dress.jpg" name="Dress 3" price={123} id={'128'} />
            </div>
        </div>
    </main>
}