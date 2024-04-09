'use client'
import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#imagin-ai-rium">ImaginAIrium</Link></li>
                <li><Link href="#veloci-trade">VelociTrade</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </>
    )
}
