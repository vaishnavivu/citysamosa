import React from "react";
import { Helmet } from "react-helmet";
import ControlledCarousel from "./ControlledCarousel";
import Slider from "./Slider";
import Scrolltxt from "./Scrolltxt";
import Instafeed from "./Instafeed";
import Comingsoon from "./Comingsoon";
import Homeabouts from "./Homeabouts";
import HomeGallery from "./HomeGallery";
import HomeProduct from "./HomeProduct";

function Home() {
  const structuredData = {
   "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "City Samosa",
  "url": "https://citysamosa.com",
  "description": "Welcome to City Samosa, your source for authentic samosa flavors.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://citysamosa.com/whlogo.png",
    "width": 600,
    "height": 60
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 7304454574",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/citysamosa",
    "https://www.instagram.com/citysamosaofficial/"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://citysamosa.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <ControlledCarousel />
      <Scrolltxt />
      <Homeabouts />
      <Comingsoon />
      <Slider />
      <HomeProduct />
      <Instafeed />
      <HomeGallery />
    </div>
  );
}

export default Home;
