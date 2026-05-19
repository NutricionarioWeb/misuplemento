const products = [
  {
    name: "EVEA",
    components: ["Triptófano", "GABA", "Lupulo", "Magnesio", "Vitamina B6"],
    benefits: ["Salud Cerebral", "Calidad del Sueño", "Estado de Ánimo", "Relajación", "Recuperación Muscular", "Salud del Sistema Nervioso"],
    image: "media/Evea.png",
    description: ""
  },
  {
    name: "UPMEN",
    components: ["Acido alfa lipoico", "Acido fólico", "Biotina", "Calcio", "Citrato de potasio", "Cobre", "Coenzima Q10", "Colina", "Extracto de semilla de calabaza", "Inositol", "L-Arginina", "Licopeno", "Luteína", "Magnesio", "Manganeso","Selenio", "Vitamina A", "Vitamina B1", "Vitamina B12", "Vitamina B2", "Vitamina B3", "Vitamina B5", "Vitamina B6", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Vitaminas B", "Zinc"],
    benefits: ["Antioxidante", "Energía Celular", "Salud del Cabello", "Salud de la Piel", "Salud Ósea", "Recuperación Muscular", "Sistema Inmune", "Salud Cardiovascular", "Metabolismo", "Salud del Sistema Nervioso", "Salud Cerebral", "Función Hepática", "Antiinflamatorio", "Salud Visual", "Relajación", "Energía", "Fertilidad"],
    image: "media/Upmen.png",
    description: ""
  },
  {
    name: "TRIM",
    components: ["Acido cítrico", "Cetonas de frambuesa", "Citrato de potasio", "Jugo de limón en polvo", "L-Carnitina", "Polinicotinato de cromo", "Vinagre de manzana", "Vitamina B3"],
    benefits: ["Sistema Inmune", "Desintoxicación", "Salud Digestiva", "Salud Cardiovascular", "Control de Peso", "Antioxidante", "Antienvejecimiento", "Recuperación Muscular", "Metabolismo", "Energía"],
    image: "media/Trim.png",
    description: ""
  },
  {
    name: "UPSTAR",
    components: ["Acido fólico", "BCAAs (Leucina, Valina, Isoleucina)", "Calcio", "Cobre", "Magnesio", "Manganeso", "Polinicotinato de cromo", "Selenio", "Te verde", "Vitamina A", "Vitamina B1", "Vitamina B12", "Vitamina B2", "Vitamina B3", "Vitamina B5", "Vitamina B6", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Zinc"],
    benefits: ["Salud de la Sangre", "Salud de la Piel", "Recuperación Muscular", "Rendimiento Deportivo", "Salud Ósea", "Sistema Inmune", "Salud del Sistema Nervioso", "Metabolismo", "Relajación", "Salud Cerebral", "Energía", "Control de Peso", "Antioxidante", "Salud Cardiovascular", "Fertilidad", "Antienvejecimiento"],
    image: "media/Upstar.png",
    description: ""
  },
  {
    name: "UPFEM",
    components: ["Acido fólico", "Biotina", "Calcio", "Cobre", "Hierro", "Jengibre", "Luteína", "Magnesio", "Myo Inositol", "Polinicotinato de cromo", "Resveratrol", "Vitamina A", "Vitamina B1", "Vitamina B12", "Vitamina B2", "Vitamina B3", "Vitamina B5", "Vitamina B6", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Vitaminas B", "Zinc"],
    benefits: ["Salud del Cabello", "Salud de la Piel", "Salud Ósea", "Recuperación Muscular", "Sistema Inmune", "Salud del Sistema Nervioso", "Metabolismo", "Salud de la Sangre", "Energía", "Salud Digestiva", "Salud Cardiovascular", "Salud Visual", "Antioxidante", "Relajación", "Salud Cerebral", "Salud Hormonal", "Control de Peso", "Antienvejecimiento"],
    image: "media/Upfem.png",
    description: ""
  },
  {
    name: "ALCIEN",
    components: ["Acido glutámico", "Coenzima Q10", "Colina", "Inositol", "L-Teanina", "Vitamina C", "Vitamina E", "Vitaminas B"],
    benefits: ["Salud Cerebral", "Sistema Inmune", "Relajación", "Energía Celular", "Antioxidante", "Función Hepática", "Salud Cardiovascular", "Enfoque"],
    image: "media/Alcien.png",
    description: ""
  },
  {
    name: "EVALAI",
    components: ["Astrágalo", "GABA", "L-Teanina", "Magnesio", "Vitamina C", "Vitaminas B"],
    benefits: ["Sistema Inmune", "Antienvejecimiento", "Estado de Ánimo", "Relajación", "Calidad del Sueño", "Salud Cerebral", "Enfoque", "Recuperación Muscular"],
    image: "media/Evalai.png",
    description: ""
  },
  {
    name: "ARMOR",
    components: ["Betaglucanos de levadura", "Cúrcuma", "Vitamina A", "Vitamina C", "Vitamina D3", "Zinc"],
    benefits: ["Sistema Inmune", "Salud Cardiovascular", "Sistema Inmune", "Antioxidante", "Antiinflamatorio", "Salud de la Piel", "Energía", "Salud Ósea"],
    image: "media/Armor.png",
    description: ""
  },
];

const container = document.getElementById('product-container');

function renderProducts(productList) {
    container.innerHTML = ""; // Clear current view
    
    productList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-left">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-right">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p><strong>Componentes:</strong> ${item.components.join(', ')}</p>
                <p><strong>Beneficios:</strong> ${item.benefits.join(', ')}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function displayAll() {
    renderProducts(products);
}

function filterBy(type, value) {
    const filtered = products.filter(p => p[type].includes(value));
    renderProducts(filtered);
}


function setupFilters() {
    const components = [...new Set(products.flatMap(p => p.components))].sort();
    const benefits = [...new Set(products.flatMap(p => p.benefits))].sort();

    const compDiv = document.getElementById('component-list');
    compDiv.innerHTML = "";
    components.forEach(c => {
        compDiv.innerHTML += `<button onclick="filterBy('components', '${c}')">${c}</button>`;
    });

    const benDiv = document.getElementById('benefit-list');
    benDiv.innerHTML = "";
    benefits.forEach(b => {
        benDiv.innerHTML += `<button onclick="filterBy('benefits', '${b}')">${b}</button>`;
    });
}

setupFilters();
displayAll();
