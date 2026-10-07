'use client';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import {products} from '../lib/data';
import ProductCard from '../components/ProductCard';

const cats=['Football','Cricket','Jerseys','Shoes','Tracksuits','Caps','Accessories','Sale'];
export default function Home(){
 const [cart,setCart]=useState<any[]>([]);
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem('fawad-cart')||'[]'))}catch{}} ,[]);
 const count=cart.reduce((a,p)=>a+p.qty,0);
 const best=useMemo(()=>products.filter(p=>p.bestSeller),[]);
 return <main>
  <div className="topbar">🇵🇰 Nationwide delivery across Pakistan • Cash on Delivery available • WhatsApp 03405049439</div>
  <header className="header"><Link href="/" className="brand"><span>F</span> FAWAD SPORTS</Link><div className="searchWrap"><input placeholder="Search jerseys, shoes, cricket..." onKeyDown={e=>{if(e.key==='Enter') location.href='/shop?q='+encodeURIComponent(e.currentTarget.value)}}/></div><div className="headActions"><Link href="/admin">Account</Link><Link href="/cart">Cart ({count})</Link><a href="https://wa.me/923405049439" target="_blank">WhatsApp</a></div></header>
  <nav className="nav">{cats.map(c=><Link key={c} href={'/shop?category='+c}>{c}</Link>)}</nav>
  <section className="hero"><div className="heroGrid"><div><div className="eyebrow">FAWAD SPORTS • PAKISTAN</div><h1>GEAR UP.<br/><em>PLAY BOLD.</em></h1><p>Premium football, cricket, jerseys, shoes and training essentials for Pakistan's next generation of players.</p><div className="actions"><Link className="btn gold" href="/shop">Shop Now</Link><Link className="btn" href="/shop?category=Football">Explore Football</Link></div></div><div className="heroVisual"><div className="orb">⚽</div><div className="heroBadge">PERFORMANCE<br/><b>COLLECTION 2026</b></div></div></div></section>
  <section className="section"><div className="container"><div className="sectop"><div><div className="eyebrow">SHOP BY SPORT</div><h2>Find Your Game</h2></div><Link className="muted" href="/shop">View all →</Link></div><div className="cats">{cats.map((c,i)=><Link className="cat" href={'/shop?category='+c} key={c}><span>{['⚽','🏏','👕','👟','🧥','🧢','🎒','%'][i]}</span>{c}<small>Shop collection</small></Link>)}</div></div></section>
  <section className="section"><div className="container"><div className="sectop"><div><div className="eyebrow">CURATED FOR YOU</div><h2>Best Sellers</h2></div><Link className="muted" href="/shop">View all →</Link></div><div className="grid">{best.map(p=><ProductCard p={p} key={p.id}/>)}</div></div></section>
  <section className="split"><div><div className="eyebrow">FOOTBALL COLLECTION</div><h2>Own the pitch.</h2><p>Match-ready jerseys, shorts and footwear built around a clean premium look.</p><Link className="btn gold" href="/shop?category=Football">Shop Football</Link></div><div className="splitVisual">⚽</div></section>
  <section className="section"><div className="container"><div className="sectop"><div><div className="eyebrow">NEW ARRIVALS</div><h2>Fresh on the field</h2></div></div><div className="grid">{products.slice(2,6).map(p=><ProductCard p={p} key={p.id}/>)}</div></div></section>
  <section className="promo"><div><div className="eyebrow">ORDER DIRECT</div><h2>Need help choosing your gear?</h2><p>Message FAWAD SPORTS on WhatsApp for quick product and order support.</p></div><a className="btn gold" href="https://wa.me/923405049439?text=Assalam%20o%20Alaikum%2C%20I%20need%20help%20choosing%20sports%20gear." target="_blank">Chat on WhatsApp</a></section>
  <section className="section"><div className="container"><div className="features"><div className="feature"><b>Cash on Delivery</b><span>Simple ordering across Pakistan.</span></div><div className="feature"><b>WhatsApp Support</b><span>Fast help at 03405049439.</span></div><div className="feature"><b>Curated Gear</b><span>Football, cricket & training essentials.</span></div><div className="feature"><b>Easy Shopping</b><span>Browse, cart and checkout in minutes.</span></div></div></div></section>
  <footer className="footer"><div className="brand"><span>F</span> FAWAD SPORTS</div><p>Premium sportswear & equipment for Pakistan.</p><div><Link href="/shop">Shop</Link> · <a href="https://wa.me/923405049439">WhatsApp</a> · <Link href="/admin">Admin</Link></div><small>© 2026 FAWAD SPORTS. All rights reserved.</small></footer>
 </main>
}
