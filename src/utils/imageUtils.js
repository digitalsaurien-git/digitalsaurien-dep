export function getPlaceholderImage(animal) {
  if (!animal) return "https://images.unsplash.com/photo-1549480017-d76466a4b7e8";
  
  const text = `${animal.commonName || ''} ${animal.scientificName || ''}`.toLowerCase();
  
  let keyword = "reptile";
  
  if (text.includes("python")) keyword = "python-snake";
  else if (text.includes("boa")) keyword = "boa-constrictor";
  else if (text.includes("gecko")) {
    if (text.includes("leopard")) keyword = "leopard-gecko";
    else if (text.includes("crested") || text.includes("ciliatus")) keyword = "crested-gecko";
    else keyword = "gecko";
  }
  else if (text.includes("couleuvre") || text.includes("corn") || text.includes("guttatus")) keyword = "corn-snake";
  else if (text.includes("pogona") || text.includes("bearded")) keyword = "bearded-dragon";
  else if (text.includes("tortoise") || text.includes("tortue")) keyword = "tortoise";
  else if (text.includes("snake") || text.includes("serpent")) keyword = "snake";

  return `https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=600&q=80&sig=${encodeURIComponent(keyword)}-${animal.id || 'default'}`;
}
