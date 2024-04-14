// import type Metadata  from 'next';

// // import './globals.css'
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// // export const metadata: Metadata = {
// //   title: 'ECWA Birmingham',
// //   description: 'Evangelical Church Winning All Birmingham',
// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="relative overflow-hidden">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }


import React from "react";
//@ts-ignore
import Navbar from '@/constants/Header/Navigation/Navbar';
import dynamic from "next/dynamic";
import Footer from '@/components/Footer';
import Header from "./Header copy/Header";
export default function Layout(props: any) {
  const { children, global } = props;
  const {
    Address,
    TelephoneNumber,
    Linkedin,
    Twitter,
    Instagram,
    FaceBook,
    FooterImage,
    EmailAddress,
    FooterContent,
    NavMenus,
    MetaSocial,
  } = global;
  return (
    <html lang="en">
      <body>
        <Header header={{
          NavMenus,
          TelephoneNumber,
          Linkedin,
          Twitter,
          Instagram,
          FaceBook,
        }}
          global={{ global }} />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer footer={{
          Address,
          TelephoneNumber,
          Linkedin,
          Twitter,
          Instagram,
          FaceBook,
          FooterImage,
          FooterContent,
          EmailAddress,
          NavMenus,
          MetaSocial,
        }} />
      </body>
    </html>
  );
}
