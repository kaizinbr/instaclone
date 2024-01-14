import React from 'react'
import ReactDOM from 'react-dom/client'
import Carousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from './Header'
import Footer from './Footer'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS: EmblaOptionsType = { containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App: React.FC = () => (
  <main className="sandbox">
    <Header />
    <section className="sandbox__carousel">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </section>
    <Footer />
  </main>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
