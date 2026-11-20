# HANMAK Apparel Website TODO

## Shared site shell and truthful brand presentation
- [x] Build a reusable responsive site shell for Home, Shop All, Bulk Printing & Resellers, Our Story, and Where to Buy & Contact, with consistent navigation, footer, active-page states, mobile menu, and working internal links.
- [x] Use a premium black, charcoal, white, and neutral streetwear presentation with bold editorial typography, locally staged editorial imagery, smooth scrolling, viewport-triggered reveal sequences, alternating content motion, subtle parallax, polished hover states, and reduced-motion support.
- [x] Use the available HANMAK project mark and generated editorial assets locally; keep the product presentation truthful because no genuine HANMAK logo/product artwork/model photographs were supplied in the brief. Do not invent products, product designs, prices, contact numbers, stock levels, delivery prices, or payment integrations.

## Interactive homepage fashion showcase
- [x] Replace the homepage hero experience with a premium full-screen fashion showcase: a large consistent editorial model at center, a semicircular boutique hanger rail at right on desktop, ten individual clickable hanger thumbnails, selected shirt name and Kina price, and a prominent SHOP NOW CTA.
- [x] Make every thumbnail interactive: highlight the selection, rotate the semicircular hanger rail smoothly, update the selected product name, category, price, and shop filter, animate the model panel, and support keyboard arrow navigation.
- [x] Keep the model appearance, face, body proportions, and pose consistent by reusing the supplied editorial model image. Matching model photographs for the ten individual shirt designs were not supplied, so the interface explicitly identifies the model as a supplied editorial visual and does not paste or invent shirt artwork over it.
- [x] Keep the mobile experience responsive: model remains prominent, the selector becomes a horizontal scroll rail, product information remains visible, and the SHOP NOW action remains accessible.

## Home campaign page
- [x] Keep the exact supplied campaign messaging and retain the existing lower homepage sections: PNG-owned introduction, provincial collection highlights, Design • Print • Marketing service strip, Port Moresby/Kokopo/Lae location preview, and final shopping CTA.

## Shop All catalogue and enquiry ordering
- [x] Include only the ten specified products and Kina prices: Heu Vavi K80; Sukundumi K70; Kalami K50; Marvelous Maprik K80; Poro Sepik K80; Yangoru Drop K80; Kubalia Backup K80; Wosera Standby K80; East 4 K80; Westside K80.
- [x] Implement working filters for All Designs, Sepik Collection, Islands & ENB, and Everyday Essentials, with responsive sequentially animated product cards.
- [x] Support sizes S, M, L, XL, 2XL and 3XL and colours Black, White, Red, Pink and Green subject to actual product availability, without claiming stock.
- [x] Open an immersive product showcase for each shirt with a truthful temporary presentation visual, a model presentation only where genuine assets support it, product name and Kina price, product details, size and colour selection, and an order enquiry action that carries the selected size and colour into the enquiry draft.
- [x] Explain that customers browse, select a shirt, choose size/colour, submit an enquiry, and contact HANMAK to confirm stock, payment, and delivery. Display exactly: “All online and provincial orders are processed upon confirmed payment. Out-of-town air and sea freight orders require 1+ week for printing and dispatch.”

## Bulk Printing & Resellers
- [x] Use the exact headline “We Design, Print & Do the Marketing For You!” and cover corporate, school, church/youth, sports, community/event, graphic-design, and provincial reseller services.
- [x] Include recruitment locations Wewak, Madang, Morobe, West New Britain, and Bougainville; production guidance; freight information; and “Apply to Become an Agent” CTA.
- [x] Provide separate custom-printing enquiry and provincial reseller application forms with clear validation and submission feedback; without a backend, clearly use an enquiry-based contact fallback rather than implying server delivery.

## Our Story
- [x] Use the exact headline “From Malakuna No. 4 to the Nation’s Capital”.
- [x] Tell the supplied Malakuna No. 4 / Kokopo / East New Britain origin story, grassroots growth, Unity Mall flagship presence, school building-material donations, youth reseller support, and community identity with storytelling visuals and elegant scroll transitions.

## Where to Buy & Contact
- [x] Use the exact headline “Visit Our Stalls or Order Direct”.
- [x] Include exact Port Moresby Unity Mall Stall No. 27 details and hours; Kokopo Malakuna No. 4 / Kokopo Market next to 2A Bus Stop / town deliveries details; Lae Top Town / Mr. Price Mart / Mori Finance Office / Room 207 pickup details; postal address P.O. Box 1962, Kokopo, 613, East New Britain; Facebook Hanmak; Instagram @hanmak25.
- [x] Include direct social links, enquiry options, and location information without inventing phone numbers or other details.

## Delivery shape
- [x] Keep the source organized, static-hosting ready, responsive across desktop/tablet/mobile, and free of React, Node.js, npm, or complicated build processes.
- [x] Provide `manus-routes.json` for all five page routes before starting the development server.
- [x] Stage a deployable `public/` output with local image assets, configure the no-build static publication contract, and verify the local preview, HTTP routes, route JSON, JavaScript syntax, and required copy.
