exports.handler = async (event, context) => {
  const menus = [
    { id: 1, name: "Nasi Box Ayam Bakar Madu", description: "Ayam bakar bumbu madu, nasi putih, lalapan, sambal terpisah.", price: 35000, taste: "manis", diets: ["tinggi_protein"], allergens: "kedelai (kecap)", allergen_known: 1 },
    { id: 2, name: "Nasi Box Rendang Sapi", description: "Rendang sapi empuk, nasi, daun singkong, telur balado.", price: 42000, taste: "pedas", diets: ["tinggi_protein"], allergens: "santan, kelapa, telur", allergen_known: 1 },
    { id: 3, name: "Paket Sehat Dada Ayam Panggang", description: "Dada ayam panggang, brokoli kukus, nasi merah.", price: 38000, taste: "asin", diets: ["rendah_kalori","rendah_gula","tinggi_protein","rendah_lemak"], allergens: "", allergen_known: 1 },
    { id: 4, name: "Nasi Kuning Komplit", description: "Nasi kuning, ayam suwir, telur dadar, kering tempe.", price: 32000, taste: "asin", diets: [], allergens: "telur, santan, kedelai (tempe)", allergen_known: 1 },
    { id: 5, name: "Pecel Sayur Lontong", description: "Aneka sayur rebus, lontong, bumbu pecel.", price: 28000, taste: "pedas", diets: ["rendah_kalori","rendah_lemak","rendah_gula"], allergens: "kacang", allergen_known: 1 }
  ];

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menus)
  };
};
