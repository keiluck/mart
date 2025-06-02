
import React from 'react'
import Link from "next/link";
import Admin from '@/app/admin/page';


export default function Main(){
    return (
        <main>
                <div>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the main content of the home page.</p>
                    <Admin />
                    <Link href="/marts">Go to Admin</Link>          
                </div>
            </main>
    )
}