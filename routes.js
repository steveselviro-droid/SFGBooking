// ============================================================
//  SF&G ROUTES — the only file you need to edit.
//
//  TO OPEN A ROUTE:   change "coming soon" to "open" next to the town.
//  TO CLOSE A ROUTE:  change "open" back to "coming soon".
//  Keep the quotes and the comma at the end of each line.
//  Every town works both ways (Windhoek to town, town to Windhoek).
//  Then click "Commit changes". The site updates in about 1 minute.
//
//  TO CHANGE A PRICE: edit the number next to the town in "prices" below
//  (price per seat, in N$, one way, same both directions).
//  Prices show in "Where we go" and under From/To on the booking form.
//  homePrices = price per seat when the passenger is taken all the way home.
//  Customers get an "Until home" tick box on the form; ticking it uses this price.
//  The price and total are also written into the WhatsApp booking message.
//  Delete a town's line to hide its price. Keep the quotes and the commas.
// ============================================================
window.SFG = {
  whatsapp: "264812385723",       // secretary WhatsApp (no + and no leading 0)
  callNumber: "264812128606",     // alternative number for calls
  email: "sfgbooking97@gmail.com",
  instagram: "https://www.instagram.com/sfgbooking/",   // Instagram link (button in "Talk to us")
  hub: "Windhoek",
  maxSeats: 8,                    // most seats one booking can ask for
  cutoffMinutes: 60,              // bookings close 1 hour before departure
  slots: ["06:00", "07:00", "08:00", "11:00", "14:00", "17:00", "18:00", "20:00", "21:00"],

  currency: "N$",
  homeLabel: "Until home",

  prices: {
    "Rehoboth": 80,
    "Swakopmund": 250,
    "Walvis Bay": 250
  },

  homePrices: {
    "Swakopmund": 260,
    "Walvis Bay": 260
  },

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
  }
};
