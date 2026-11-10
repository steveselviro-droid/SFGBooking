// ============================================================
//  SFG ROUTES & PRICES — the only file you need to edit.
//
//  OPEN OR CLOSE A ROUTE (the "towns" list):
//     change "coming soon" to "open" next to the town, or back again.
//
//  CHANGE A PRICE (the "prices" list):
//     change the number next to the town. Numbers only, no quotes,
//     no "N$". Price is per seat, the same each way (Windhoek <-> town).
//
//  HOME DROP-OFF PRICE (the "homePrices" list):
//     the price per seat if the passenger is dropped at their home.
//     Delete a town's line to remove the home option for that town.
//
//  Keep the quotes around the town names and the comma at the end of
//  each line (but no comma after the last line in a list).
//  Then click "Commit changes". The site updates in about 1 minute.
// ============================================================
window.SFG = {
  whatsapp: "264812385723",       // secretary WhatsApp (no + and no leading 0)
  callNumber: "264812128606",     // alternative number for calls
  email: "sfgbooking97@gmail.com",
  hub: "Windhoek",
  maxSeats: 8,                    // most seats one booking can ask for
  cutoffMinutes: 60,              // bookings close 1 hour before departure
  currency: "N$",
  slots: ["06:00", "07:00", "08:00", "11:00", "14:00", "17:00", "18:00", "20:00", "21:00"],

  // ---- ROUTES: "open" or "coming soon" ----
  towns: {
    "Rehoboth": "open",
    "Okahandja": "coming soon",
    "Swakopmund": "coming soon",
    "Walvis Bay": "coming soon",
    "Otjiwarongo": "coming soon",
    "Tsumeb": "coming soon",
    "Mariental": "coming soon",
    "Keetmanshoop": "coming soon",
    "Gobabis": "coming soon",
    "Osona Village": "coming soon",
    "Groot Aub": "coming soon",
    "Oshakati": "coming soon",
    "Grootfontein": "coming soon",
    "Karibib": "coming soon",
    "Okakarara": "coming soon",
    "Khorixas": "coming soon"
  },

  // ---- PRICES: per seat, N$ ----
  prices: {
    "Rehoboth": 80,
    "Swakopmund": 250,
    "Walvis Bay": 250
  },

  // ---- HOME DROP-OFF PRICES: per seat, N$ ----
  homePrices: {
    "Swakopmund": 260,
    "Walvis Bay": 260
  }
};
