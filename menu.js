exports.handler = async () => {
  const menus = [
    { id: 1, name: "Nasi Box Ayam Bakar Madu", description: "Ayam bakar bumbu madu, nasi putih, lalapan, sambal terpisah.", price: 35000, taste: "manis" },
    { id: 2, name: "Nasi Box Rendang Sapi", description: "Rendang sapi empuk, nasi, daun singkong, telur balado.", price: 42000, taste: "pedas" },
    { id: 3, name: "Paket Sehat Dada Ayam Panggang", description: "Dada ayam panggang, brokoli kukus, nasi merah.", price: 38000, taste: "asin" }
  ];
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menus)
  };
};
