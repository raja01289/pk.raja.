import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'FAWAD SPORTS | Premium Sports Store Pakistan',description:'Premium football, cricket, jerseys, shoes, tracksuits and sports accessories in Pakistan.',openGraph:{title:'FAWAD SPORTS',description:'Premium sports gear for Pakistan.'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
