// ==========================================================
//  SFG ROUTES AND PRICES  -  the only file you need to edit
// ==========================================================
//
//  Each town is ONE line, in this order:
//
//     "Town name":  ["status",  price,  home price],
//
//  STATUS      "open"  or  "coming soon"
//  PRICE       price per seat in N$ (numbers only, no N$ sign)
//  HOME PRICE  optional. Leave it out if there is no home drop-off price.
//
//  EXAMPLES
//     "Rehoboth":   ["open", 80],            open, N$80 per seat
//     "Swakopmund": ["open", 250, 260],      open, N$250, N$260 to home
//     "Tsumeb":     ["coming soon"],         coming soon, no price yet
//
//  RULES  - keep the quotes and the commas exactly as they are.
//         - every town works both ways (Windhoek to town, town to Windhoek).
//         - to change something, edit the line, then click "Commit changes".
//           The site updates in about 1 to 2 minutes.
// ==========================================================

window.SFG = {

  // ---------- CONTACT DETAILS ----------
  whatsapp:   "264812385723",   // secretary WhatsApp (no + and no leading 0)
  callNumber: "264812128606",   // alternative number for calls
  email:      "sfgbooking97@gmail.com",

  // ---------- BOOKING SETTINGS ----------
  hub: "Windhoek",              // the starting town for every route
  maxSeats: 8,                  // most seats one booking can ask for
  cutoffMinutes: 60,            // bookings close 1 hour before departure
  slots: ["06:00", "07:00", "08:00", "11:00", "14:00", "17:00", "18:00", "20:00", "21:00"],

  // ---------- PRICE WORDING ----------
  currency: "N$",
  priceLabel: "meeting point",  // shown next to the first price when there is also a home price
  homeLabel: "home drop-off",   // shown next to the home price

  // ---------- TOWNS, STATUS AND PRICES ----------
  towns: {
    "Rehoboth":      ["open", 80],
    "Swakopmund":    ["coming soon", 250, 260],
    "Okahandja":     ["coming soon"],
    "Walvis Bay":    ["coming soon"],
    "Otjiwarongo":   ["coming soon"],
    "Tsumeb":        ["coming soon"],
    "Mariental":     ["coming soon"],
    "Keetmanshoop":  ["coming soon"],
    "Gobabis":       ["coming soon"],
    "Osona Village": ["coming soon"],
    "Groot Aub":     ["coming soon"],
    "Oshakati":      ["coming soon"],
    "Grootfontein":  ["coming soon"],
    "Karibib":       ["coming soon"],
    "Okakarara":     ["coming soon"],
    "Khorixas":      ["coming soon"]
  }
};
