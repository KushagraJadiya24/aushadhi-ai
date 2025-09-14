import { DashboardLayout } from "@/components/layout/DashboardLayout";

const FoodDatabase = () => {
  const dummyFoods = [
    {
      name: "Turmeric",
      rasa: "Katu (Pungent), Tikta (Bitter)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha & Vata, may increase Pitta",
    },
    {
      name: "Milk",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Pitta, may increase Kapha",
    },
    {
      name: "Ginger",
      rasa: "Katu (Pungent)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Kapha, may increase Pitta",
    },
    {
      name: "Rice",
      rasa: "Madhura (Sweet)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Pitta, may increase Kapha",
    },
    {
      name: "Honey",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Kapha, aggravates Vata & Pitta in excess",
    },
    {
      name: "Ghee",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Pitta, may increase Kapha",
    },
    {
      name: "Black Pepper",
      rasa: "Katu (Pungent)",
      guna: "Laghu (Light), Tikshna (Sharp)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha, increases Pitta & Vata in excess",
    },
    {
      name: "Cumin",
      rasa: "Katu (Pungent), Tikta (Bitter)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha & Vata, may increase Pitta",
    },
    {
      name: "Cardamom",
      rasa: "Madhura (Sweet), Katu (Pungent)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances all three doshas",
    },
    {
      name: "Cloves",
      rasa: "Katu (Pungent), Tikta (Bitter)",
      guna: "Laghu (Light), Tikshna (Sharp)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha & Vata, may increase Pitta",
    },
    {
      name: "Apple",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Pitta, may aggravate Vata in excess",
    },
    {
      name: "Banana",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata, may increase Kapha",
    },
    {
      name: "Mango",
      rasa: "Madhura (Sweet), Amla (Sour)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata, increases Kapha & Pitta if overripe",
    },
    {
      name: "Pomegranate",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances all doshas",
    },
    {
      name: "Lemon",
      rasa: "Amla (Sour)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Kapha, increases Pitta",
    },
    {
      name: "Spinach",
      rasa: "Tikta (Bitter), Kashaya (Astringent)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha, may increase Vata & Pitta",
    },
    {
      name: "Carrot",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Kapha, may increase Pitta",
    },
    {
      name: "Potato",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Guru (Heavy), Ruksha (Dry)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Increases Vata & Kapha, balances Pitta",
    },
    {
      name: "Onion",
      rasa: "Madhura (Sweet), Katu (Pungent)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Vata & Kapha, may increase Pitta",
    },
    {
      name: "Garlic",
      rasa: "Katu (Pungent), Tikta (Bitter)",
      guna: "Laghu (Light), Tikshna (Sharp)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha & Vata, increases Pitta",
    },
    {
      name: "Wheat",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Pitta, increases Kapha",
    },
    {
      name: "Barley",
      rasa: "Madhura (Sweet), Kashaya (Astringent)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Kapha & Pitta, increases Vata",
    },
    {
      name: "Sesame Seeds",
      rasa: "Madhura (Sweet), Tikta (Bitter)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata, increases Pitta & Kapha",
    },
    {
      name: "Coconut",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Pitta & Vata, may increase Kapha",
    },
    {
      name: "Almonds",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Ushna (Hot)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata, increases Kapha & Pitta",
    },
    {
      name: "Dates",
      rasa: "Madhura (Sweet)",
      guna: "Guru (Heavy), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Vata & Pitta, increases Kapha",
    },
    {
      name: "Fennel",
      rasa: "Madhura (Sweet), Tikta (Bitter)",
      guna: "Laghu (Light), Snigdha (Unctuous)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances Pitta & Vata, may increase Kapha",
    },
    {
      name: "Coriander",
      rasa: "Madhura (Sweet), Tikta (Bitter)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Shita (Cold)",
      vipaka: "Madhura (Sweet)",
      dosha: "Balances all doshas",
    },
    {
      name: "Mustard Seeds",
      rasa: "Katu (Pungent)",
      guna: "Laghu (Light), Tikshna (Sharp)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha, increases Pitta & Vata",
    },
    {
      name: "Tulsi (Holy Basil)",
      rasa: "Katu (Pungent), Tikta (Bitter)",
      guna: "Laghu (Light), Ruksha (Dry)",
      virya: "Ushna (Hot)",
      vipaka: "Katu (Pungent)",
      dosha: "Balances Kapha & Vata, increases Pitta",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Food Database</h1>
        <p className="text-muted-foreground">
          Explore 8,000+ foods with complete Ayurvedic properties.
        </p>

        <div className="overflow-x-auto border rounded-lg shadow-sm max-h-[600px] overflow-y-scroll">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-muted/50 sticky top-0">
              <tr>
                <th className="px-4 py-2 border-b">Food</th>
                <th className="px-4 py-2 border-b">Rasa (Taste)</th>
                <th className="px-4 py-2 border-b">Guna (Qualities)</th>
                <th className="px-4 py-2 border-b">Virya (Potency)</th>
                <th className="px-4 py-2 border-b">Vipaka (Post-digestive)</th>
                <th className="px-4 py-2 border-b">Effect on Doshas</th>
              </tr>
            </thead>
            <tbody>
              {dummyFoods.map((food, idx) => (
                <tr key={idx} className="hover:bg-muted/30">
                  <td className="px-4 py-2 border-b font-medium">
                    {food.name}
                  </td>
                  <td className="px-4 py-2 border-b">{food.rasa}</td>
                  <td className="px-4 py-2 border-b">{food.guna}</td>
                  <td className="px-4 py-2 border-b">{food.virya}</td>
                  <td className="px-4 py-2 border-b">{food.vipaka}</td>
                  <td className="px-4 py-2 border-b">{food.dosha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FoodDatabase;
