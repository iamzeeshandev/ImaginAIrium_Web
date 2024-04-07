'use client'
import Layout from "@/layout/Layout";
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </Layout>
        </>
    )
}