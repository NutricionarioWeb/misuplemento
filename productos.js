const products = [
  {
    name: "EVEA",
    components: ["Triptófano", "GABA", "Lupulo", "Magnesio"],
    benefits: ["Salud Cerebral", "Calidad del Sueño", "Estado de Ánimo", "Relajación", "Recuperación Muscular", "Salud del Sistema Nervioso"],
    image: "media/Evea.png",
    description: ""
  },
  {
    name: "UPMEN",
    components: ["Acido alfa lipoico", "Acido fólico", "Biotina", "Calcio", "Citrato de potasio", "Cobre", "Coenzima Q10", "Colina", "Extracto de semilla de calabaza", "Inositol", "L-Arginina", "Licopeno", "Luteína", "Magnesio", "Manganeso","Selenio", "Vitamina A", "Complejo Vitamina B", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Zinc"],
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
    components: ["Acido fólico", "BCAAs (Leucina, Valina, Isoleucina)", "Calcio", "Cobre", "Magnesio", "Manganeso", "Polinicotinato de cromo", "Selenio", "Te verde", "Vitamina A", "Complejo Vitamina B", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Zinc"],
    benefits: ["Salud de la Sangre", "Salud de la Piel", "Recuperación Muscular", "Rendimiento Deportivo", "Salud Ósea", "Sistema Inmune", "Salud del Sistema Nervioso", "Metabolismo", "Relajación", "Salud Cerebral", "Energía", "Control de Peso", "Antioxidante", "Salud Cardiovascular", "Fertilidad", "Antienvejecimiento"],
    image: "media/Upstar.png",
    description: ""
  },
  {
    name: "UPFEM",
    components: ["Acido fólico", "Biotina", "Calcio", "Cobre", "Hierro", "Jengibre", "Luteína", "Magnesio", "Myo Inositol", "Polinicotinato de cromo", "Resveratrol", "Vitamina A", "Complejo Vitamina B", "Vitamina C", "Vitamina D", "Vitamina E", "Vitamina K2", "Zinc"],
    benefits: ["Salud del Cabello", "Salud de la Piel", "Salud Ósea", "Recuperación Muscular", "Sistema Inmune", "Salud del Sistema Nervioso", "Metabolismo", "Salud de la Sangre", "Energía", "Salud Digestiva", "Salud Cardiovascular", "Salud Visual", "Antioxidante", "Relajación", "Salud Cerebral", "Salud Hormonal", "Control de Peso", "Antienvejecimiento"],
    image: "media/Upfem.png",
    description: ""
  },
  {
    name: "ALCIEN",
    components: ["Acido glutámico", "Coenzima Q10", "Colina", "Inositol", "L-Teanina", "Vitamina C", "Vitamina E", "Complejo Vitamina B"],
    benefits: ["Salud Cerebral", "Sistema Inmune", "Relajación", "Energía Celular", "Antioxidante", "Función Hepática", "Salud Cardiovascular", "Enfoque"],
    image: "media/Alcien.png",
    description: ""
  },
  {
    name: "EVALAI",
    components: ["Astrágalo", "GABA", "L-Teanina", "Magnesio", "Vitamina C", "Complejo Vitamina B"],
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

const ingredientDetails = [
  {
    name: "Triptófano",
    image: "media/ingredients/1.png",
    description: "El 5‐hidroxitriptófano (5‐HTP) es el precursor directo de la serotonina, y se produce en el organismo a partir del aminoácido L‐triptófano (LT). Beneficios: que incrementa los niveles cerebrales de serotonina, un neurotransmisor importante para una función normal de los nervios y el cerebro. Es capaz de incrementar los niveles de melatonina, dopamina, norepinefrina y beta‐endorfinas. Mejorando especialmente la calidad del sueño al incrementar el sueño REM."
  },
  {
    name: "Acido alfa lipoico",
    image: "media/ingredients/2.png",
    description: "Ayuda a neutralizar los efectos los radicales libres en el organismo aumentando la función antioxidante del glutatión y de las vitaminas C y E. Un beneficio adicional de este nutriente es que garantiza el correcto funcionamiento de dos enzimas clave para la conversión del alimento en energía."
  },
  {
    name: "Acido cítrico",
    image: "media/ingredients/3.png",
    description: "El ácido cítrico es un compuesto natural que se encuentra en todos los seres vivos, pero está particularmente concentrado en las frutas cítricas. Es uno de los principales aditivos alimentarios, usado como conservante, anti-oxidante, acidulante y saborizante. Beneficios: es un buen aliado para reforzar el sistema inmunológico y mantenernos alejado de los resfriados. Ayuda a desintoxicar y depurar el organismo de todos aquellos alimentos más grasos, el alcohol y los extras que ya no necesitemos."
  },
  {
    name: "Acido fólico",
    image: "media/ingredients/4.png",
    description: "Conocido como folato en su forma natural, es parte del grupo de las vitaminas B, que se encuentra de forma natural en ciertos alimentos de origen vegetal. Beneficios: Es importante para la correcta formación de las células sanguíneas, es componente de enzimas necesarias para la formación de glóbulos rojos y su presencia mantiene sana la piel."
  },
  {
    name: "Acido glutámico",
    image: "media/ingredients/5.png",
    description: "El ácido glutámico como tal o en su forma ionizada L-glutamato (GLU) es uno de los aminoácidos más abundantes en la naturaleza debido a que cumple funciones importantes a nivel celular y sistémico. Beneficios: sirve como estimulante del sistema neurológico e inmunológico, por lo que tiene una potente función a nivel del cerebro, estimulándolo, y que en conjunto de la vitamina B6, se convierte en un precursor de sustancias que poseen una acción tranquilizante y sedante."
  },
  {
    name: "Astrágalo",
    image: "media/ingredients/6.png",
    description: "El Astrágalo es una planta adaptógena que se ha utilizado durante siglos en la medicina tradicional china. El astrágalo se conoce como un “adaptógeno inmunitario”, por su capacidad de fortalecer el sistema inmune, calmándolo o activándose según lo necesite. Beneficios: neutralizar los radicales libres que dañan las células del cuerpo. Estos radicales libres son responsables de muchos de los signos del envejecimiento, como las arrugas y las manchas en la piel. Ayuda a aliviar la ansiedad y mejorar el estado de ánimo."
  },
  {
    name: "BCAAs (Leucina, Valina, Isoleucina)",
    image: "media/ingredients/7.png",
    description: "Son conocidos por ayudar a mejorar la síntesis de proteínas musculares, lo que puede ayudar a aumentar la masa muscular y mejorar la fuerza. También se ha demostrado que pueden ayudar a reducir la fatiga muscular y mejorar el rendimiento durante el ejercicio de resistencia."
  },
  {
    name: "Betaglucanos de levadura",
    image: "media/ingredients/8.png",
    description: "Los betaglucanos son polisacáridos, una molécula que está constituida de monosacáridos unidos mediante diferentes enlaces. Los betaglucanos se pueden encontrar en ciertos cereales (como la avena), hongos, algas y algunas bacterias. Beneficios: capaces de activar las células inmunitarias del cuerpo generando que las defensas actúen en mayor proporción ante una amenaza externa, reducción en el riesgo de padecer eventos cardiovasculares en personas de riesgo – mediante, de forma generalizada, una disminución en el colesterol LDL (malo). Actividad antitumoral y anticarcinogénica."
  },
  {
    name: "Biotina",
    image: "media/ingredients/9.png",
    description: "Se encuentra de forma natural en muchos alimentos y es un nutriente esencial. La función de la biotina en el organismo es ayudar a éste a funcionar y crecer correctamente. También puede contribuir a la actividad del sistema nervioso. Beneficios: Favorece principalmente el mantenimiento normal del cabello y ayuda a la salud de la piel. Una carencia de esta sustancia provoca debilitamiento del cabello, erupciones cutáneas en la cara y uñas quebradizas."
  },
  {
    name: "Calcio",
    image: "media/ingredients/10.png",
    description: "Importante para la salud de los dientes y los huesos; ayuda a relajar y a contraer los músculos; importante en el funcionamiento nervioso, la coagulación de la sangre, la regulación de la presión arterial, la salud del sistema inmunitario."
  },
  {
    name: "Cetonas de frambuesa",
    image: "media/ingredients/11.png",
    description: "La cetona de frambuesa es un potente antioxidante natural derivado de las frambuesas, pero también de otras bayas como los arándanos o las moras, o de frutas como las manzanas, los melocotones, el kiwi o las uvas. Beneficios: Supresor natural del apetito, Potencia la lipólisis (efecto quemagrasas), Reducción de la diabetes de tipo 2, Ralentizar los efectos del envejecimiento, Es un poderoso antioxidante."
  },
  {
    name: "Citrato de potasio",
    image: "media/ingredients/12.png",
    description: "El potasio forma parte del grupo de minerales conocida como electrolitos. El potasio juega un papel en el metabolismo de los hidratos de carbono. Es fundamental para que pueda llevarse a cabo el almacenamiento de la glucosa, en forma de glucógeno muscular y hepático. Beneficios: Ayuda a regular la presión arterial. El potasio ayuda a disminuir la presión arterial al permitir que los vasos sanguíneos se contraigan normalmente. Permite la transmisión de impulsos nerviosos. Permite la correcta síntesis de proteínas."
  },
  {
    name: "Cobre",
    image: "media/ingredients/13.png",
    description: "Parte de muchas enzimas; necesario para el metabolismo del hierro. Contribuye al mantenimiento de un tejido conjuntivo normal, al metabolismo energético normal y al funcionamiento normal del sistema nervioso."
  },
  {
    name: "Coenzima Q10",
    image: "media/ingredients/14.png",
    description: "La coenzima Q10 (también conocida como CoQ10, Q10, vitamina Q10, ubiquinona y ubidecarenona) es un tipo de benzoquinona sintetizado de forma natural por el cuerpo humano. Denota que se trata de una molécula orgánica (contiene átomos de carbono) no proteica necesaria para el buen funcionamiento de su pareja proteica (una enzima o un complejo enzimático). Beneficios: Ayuda a las células a producir energía y actúa como antioxidante."
  },
  {
    name: "Colina",
    image: "media/ingredients/15.png",
    description: "La colina es un nutriente esencial que forma parte de las vitaminas hidrosolubles del grupo B. La colina es necesaria para el funcionamiento adecuado de hígado, músculos y cerebro, así como para el metabolismo lipídico, la composición de la membrana celular y su reparación. Beneficios: precursor necesario para la síntesis de acetilcolina, que es un neurotransmisor clave implicado en funciones relacionadas con la memoria y el control muscular, es necesaria para la síntesis de fosfatidilcolina, que es el fosfolípido más abundante en el organismo, y forma parte de las membranas celulares contribuyendo a su estructura y funcionalidad."
  },
  {
    name: "Cúrcuma",
    image: "media/ingredients/16.png",
    description: "Es una fuente milenaria de sustancias con poder para atacar virus, bacterias y hongos, además de ser antioxidante, anticancerígeno y estimulante del sistema inmune. Beneficios: capacidad de evitar el deterioro de las células gracias a la actividad antioxidante en presencia de sustancias negativas como los radicales libres. Ataca a diversos virus con el de influenza, adenovirus, hepatitis, el del papiloma humano, de la inmunodeficiencia humana, del herpes, Zika y muy probablemente también al SARS-Cov-2 causa de un síndrome agudo grave respiratorio de alta letalidad."
  },
  {
    name: "Extracto de semilla de calabaza",
    image: "media/ingredients/17.png",
    description: "Las semillas de calabaza son ricas de muchos antioxidantes que protegen nuestras células de los daños que causan patologías y que disminuyen las inflamaciones. Los estudios manifestaron que la propiedad antiinflamatoria de la semilla de calabaza es importante para la salud del hígado, vejiga, intestinos y articulaciones."
  },
  {
    name: "GABA",
    image: "media/ingredients/18.png",
    description: "Es un aminoácido producido naturalmente en el cerebro. El GABA funciona como un neurotransmisor, facilitando la comunicación entre las células cerebrales. El gran papel del GABA en el cuerpo es reducir la actividad de las neuronas en el cerebro y el sistema nervioso central. Beneficios: una mayor relajación, reducción del estrés, un estado de ánimo más tranquilo y equilibrado, alivio del dolor y una mejora en el sueño."
  },
  {
    name: "Hierro",
    image: "media/ingredients/19.png",
    description: "Ayuda a transportar el oxígeno a las células, y es fundamental para la formación de los glóbulos rojos de la sangre. Su déficit provoca fatiga, falta de energía y anemia. La menstruación comporta la pérdida de sangre y hierro, por lo que es importante mantener unos niveles adecuados. Además, durante la adolescencia, el embarazo y la lactancia aumenta mucho la necesidad de este mineral. "
  },
  {
    name: "Inositol",
    image: "media/ingredients/20.png",
    description: "El inositol es categorizado como una «pseudovitamina», y en ocasiones englobado dentro del grupo de vitaminas B, considerándolo como B8. Necesarios para el buen funcionamiento de los neurotransmisores, acetilcolina y serotonina, que regulan el estado de ánimo y los movimientos musculares. Ambos nutrientes se encuentran en el cuerpo o se obtienen a través de diferentes fuentes de alimentos. Beneficios: Apoyo al metabolismo de la grasa y colesterol, Ayuda a eliminar el exceso de acumulación de lípidos en el hígado, Ayuda a eliminar el exceso de acumulación de lípidos en el hígado, Se considera un nutriente para el cerebro, junto a la colina."
  },
  {
    name: "Jengibre",
    image: "media/ingredients/21.png",
    description: "Evita las náuseas y vómitos, aumenta la fuerza de contracción del miocardio, fomenta la secreción de saliva y jugos gástricos, actúa como colagogo y estimula el peristaltismo intestinal."
  },
  {
    name: "Jugo de limón en polvo",
    image: "media/ingredients/22.png",
    description: "Producto obtenido a partir de jugo de limón natural fresco y que, gracias las técnicas más avanzadas para la deshidratación, mantiene todo su sabor y aroma natural. Beneficios: gran fuente de vitamina C. Esta vitamina ayuda en la prevención de enfermedades del sistema inmunológico, enfermedades cardiovasculares, enfermedades prenatales, etc."
  },
  {
    name: "L-Arginina",
    image: "media/ingredients/23.png",
    description: "Aminoácido esencial que se convierte en óxido nítrico, lo que provoca la relajación de los vasos sanguíneos. Estudios científicos sugieren que esta sustancia puede ayudar a tratar afecciones que mejoran con la vasodilatación. La Arginina también estimula la síntesis de proteína y podría ser útil para mejorar la cicatrización de heridas, el crecimiento de los músculos y la producción de esperma (espermatogénesis)."
  },
  {
    name: "L-Carnitina",
    image: "media/ingredients/24.png",
    description: "Tiene un importante papel en el catabolismo de los ácidos grasos y actúa transportándolos al interior de la mitocondria. El cuerpo humano la sintetiza de manera natural para facilitar el metabolismo de las grasas y obtener así energía. Actúa como un complejo enzimático que se encarga del transporte de ácidos grasos a través de la membrana al citosol. Beneficios: prevención cardiovascular, tratamiento de infertilidad; neuropatía periférica diabética; tratamiento de encefalopatía hepática y/o síndrome de Fanconi. recuperación más rápida a nivel muscular y “orgánico”; incremento de la resistencia en la actividad deportiva; mejora de la espermatogénesis; disminución de los niveles de lípidos en sangre."
  },
  {
    name: "Licopeno",
    image: "media/ingredients/25.png",
    description: "Es una sustancia química responsable de brindar el color rojo a ciertas frutas y verduras. Es un poderoso antioxidante que puede ayudar a proteger a las células para que no sufran daños. Disminuye de forma significativa la oxidación de los lípidos y en particular de las LDL (que transportan el colesterol malo.) Estos resultados pueden ser relevantes para disminuir el riesgo de padecer alguna enfermedad coronaria."
  },
  {
    name: "L-Teanina",
    image: "media/ingredients/26.png",
    description: "La L-teanina es un aminoácido. El cuerpo humano no produce este compuesto, y no es esencial para los humanos. El té verde, el té negro y ciertos tipos de hongos contienen naturalmente L-teanina. Beneficios: Mejor concentración mental, Aumento del rendimiento cognitivo, Desencadena la liberación de ondas alfa, lo que mejora la relajación, el enfoque y la creatividad."
  },
  {
    name: "Lupulo",
    image: "media/ingredients/27.png",
    description: "El lúpulo es una planta vivaz, trepadora que se da en los bosques caducifolios de las regiones templadas. Beneficios: Presenta acción hipnótico-sedante y depresora del sistema nervioso por lo que se utiliza en el caso de malestar asociado a estados de ansiedad e intranquilidad, hiperexcitabilidad e insomnio de origen nervioso,"
  },
  {
    name: "Luteína",
    image: "media/ingredients/28.png",
    description: "Evitar la formación de radicales libres y de moléculas oxidativas, que son las causantes de los daños en las membranas de las células de los tejidos oculares. Su función es proteger a la macula y al cristalino de la acción oxidante de la luz."
  },
  {
    name: "Magnesio",
    image: "media/ingredients/29.png",
    description: "El magnesio es conocido como un mineral anti estrés, es un tranquilizante natural que relaja los músculos y es altamente recomendado en tratamientos contra la depresión, la fatiga o la irritabilidad. Beneficios: El magnesio regula la función normal del sistema nervioso central (SNC). En el hipotálamo y en la hipófisis se segregan hormonas que regulan a las hormonas del estrés de la glándula suprarrenal. El magnesio es un mineral importante para la estimulación de membranas neuronales como las de las células cerebrales. Un suministro suficiente de magnesio tiene por ello un efecto positivo sobre la ansiedad, el estrés y el nerviosismo."
  },
  {
    name: "Manganeso",
    image: "media/ingredients/30.png",
    description: "El organismo usa el manganeso para producir energía y proteger las células. El organismo también necesita manganeso para fortalecer los los huesos, para la reproducción, la coagulación sanguínea y para mantener un sistema inmunitario sano."
  },
  {
    name: "Myo Inositol",
    image: "media/ingredients/31.png",
    description: "Mejorar la regularidad menstrual, disminuir los niveles de insulina y mejorar la ovulación en mujeres con síndrome de ovario poliquístico. Las mujeres con esta condición tienen niveles reducidos de inositol en sus tejidos."
  },
  {
    name: "Polinicotinato de cromo",
    image: "media/ingredients/32.png",
    description: "Es un oligoelemento esencial y también se encuentra dentro de los minerales traza, el cromo se requiere para el metabolismo normal de proteínas, grasas y carbohidratos. Beneficios: "
  },
  {
    name: "Resveratrol",
    image: "media/ingredients/33.png",
    description: "Es un tipo de polifenol o sustancia que se produce en los compuestos de origen vegetal con potentes propiedades antioxidantes. Protege la piel: funciona como un antioxidante para eliminar los radicales libres. El resveratrol, además, muestra una actividad antimicrobiana y antibacterial para la piel, lo que se traduce en que pueda beneficiar en casos de brotes y acné. Retrasa el envejecimiento, Reduce el enrojecimiento y calma la sensibilidad en la piel,  Unifica el tono de la piel, Luminosidad, Hidratación."
  },
  {
    name: "Selenio",
    image: "media/ingredients/34.png",
    description: "Antioxidante. Es un mineral anticancerígeno, antienvejecimiento, actúa como antioxidante, incrementa la eficacia de la vitamina E. Ayuda a proteger el organismo de enfermedades cardiovasculares. Incrementar la fertilidad, especialmente en los hombres, ya que se ha demostrado que este mineral aumenta la producción de semen y la motilidad de los espermatozoides. "
  },
  {
    name: "Te verde",
    image: "media/ingredients/35.png",
    description: "Contiene compuestos antioxidantes que son muy beneficiosos para luchar frente a determinados tipos de cáncer y para revertir los efectos del envejecimiento. Beneficios: Previene el envejecimiento y fortalece el sistema de defensas del ser humano, Contribuye a regular el proceso de digestión y regula los niveles de colesterol, Evita la formación coágulos en la sangre."
  },
  {
    name: "Vinagre de manzana",
    image: "media/ingredients/36.png",
    description: "El vinagre de sidra de manzana es el jugo fermentado de manzanas trituradas. Contiene ácido acético y nutrientes como vitaminas B y vitamina C. Se ha utilizado tradicionalmente como medicina. Podría ayudar a reducir los niveles de azúcar en sangre después de una comida. Es beneficioso para la digestión acelerada de las grasas eliminándolas del organismo con gran eficacia. Beneficios: revitalizante para la piel y el cabello; de su potencial como digestivo; es depurativo, digestivo y ligeramente laxante (aumenta el movimiento intestinal), riqueza en Vitamina A le confiere efectos muy positivos para la sequedad de la piel y de todas las mucosas del cuerpo, gran beneficio diurético, ya que es muy rico en Potasio y ayuda a alcalinizar un poco nuestro pH sanguíneo."
  },
  {
    name: "Vitamina A",
    image: "media/ingredients/37.png",
    description: "Es una vitamina liposoluble que se encuentra presente en forma natural en los alimentos. La vitamina A es importante para la visión normal, el sistema inmunitario, la reproducción, además del crecimiento y el desarrollo. Beneficios: La vitamina A es necesaria para mantener la integridad de la piel y el revestimiento del tracto urinario, los pulmones y el sistema digestivo. Esas barreras contribuyen al mantenimiento de tu sistema inmunitario. "
  },
  {
    name: "Complejo Vitamina B",
    image: "media/ingredients/38.png",
    description: "Las vitaminas del grupo B desempeñan una función clave en asegurar que el cerebro alcance todo su potencial. Nos dan energía y nos mantienen optimistas y concentrados a diario, mientras que ayudan a promover la salud del cerebro a largo plazo a medida que envejecemos. Beneficios: importancia especial por el papel que desempeñan los nutrientes en las vías metabólicas y los componentes estructurales. Son necesarias para las vías metabólicas esenciales del cerebro y fundamentales en todos los aspectos del desarrollo y el mantenimiento de la salud del cerebro en todo el ciclo vital."
  },
  {
    name: "Vitamina B3",
    image: "media/ingredients/38.png",
    description: "La niacina (también conocida como vitamina B3) ayuda a convertir los alimentos que se consumen en la energía que se necesita. La niacina es importante para el desarrollo y la función de las células en el organismo. Beneficios: convertir alimentos en glucosa, utilizada para producir energía; producir macromoléculas, inclusive ácidos grasos y colesterol; reparar el ADN y responder al estrés, Funcionamiento normal del metabolismo productor de energía; Mantenimiento de la piel y las membranas mucosas normales."
  },
  {
    name: "Vitamina C",
    image: "media/ingredients/39.png",
    description: "Conocida como ácido ascórbico, es un nutriente hidrosoluble que se encuentra en ciertos alimentos. Beneficios: En el cuerpo, actúa como antioxidante, al ayudar a proteger las células contra los daños causados por los radicales libres. Los radicales libres son compuestos que se forman cuando el cuerpo convierte los alimentos que consumimos en energía. Es un nutriente indispensable para la formación de colágeno, una proteína responsable de mantener la firmeza de la piel y la integridad de las articulaciones."
  },
  {
    name: "Vitamina D",
    image: "media/ingredients/40.png",
    description: "Interviene en la absorción del calcio y el fósforo en el intestino y por lo tanto en el depósito de los mismos en huesos y dientes. Se sintetiza a través de la exposición a la luz solar convirtiendo el colesterol (provitamina) en vitamina D. La vitamina D se asocia con la producción de testosterona."
  },
  {
    name: "Vitamina D3",
    image: "media/ingredients/40.png",
    description: "Protege el sistema inmunológico evitando posibles enfermedades y síntomas perjudiciales para nuestra salud. En concreto, la Vitamina D3 mantiene en forma nuestro sistema inmunitario y es fundamental para la correcta absorción del calcio en los huesos previniendo la osteoporosis y las fracturas óseas por caída, jugando un papel importante en la salud muscular. Beneficios:  reducir el riesgo de diversas enfermedades, como el cáncer, enfermedades cardiovasculares, depresión, y enfermedades autoinmunitarias."
  },
  {
    name: "Vitamina E",
    image: "media/ingredients/41.png",
    description: "La vitamina E es un nutriente importante para la visión, la reproducción y la salud de la sangre, el cerebro y la piel. efecto protector sobre el funcionamiento mental, específicamente en la lentitud del deterioro cognitivo y la enfermedad de Alzheimer. Los antioxidantes ayudan a proteger las células cerebrales del daño irreversible causado por los radicales libres."
  },
  {
    name: "Vitamina K2",
    image: "media/ingredients/42.png",
    description: "Importante para la salud de los huesos porque ayuda a activar las proteínas que se encuentran en los huesos y los dientes. De ahí que también suponga un beneficio en la salud dental al aumentar la mineralización de los dientes."
  },
  {
    name: "Zinc",
    image: "media/ingredients/43.png",
    description: "Es el microelemento más comprometido con la inmunidad, de forma que si bajan sus niveles en el organismo, también lo hacen las células mediadoras en las funciones inmunes. Beneficios:  Interviene en el metabolismo para contribuir al buen funcionamiento de nuestro cuerpo, Actúa reforzando nuestro sistema inmunitario, Potente antioxidante, Contribuye a la integridad de las barreras inmunitarias."
  }
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
                <p><strong>Ingredientes:</strong> ${item.components.join(', ')}</p>
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
    container.innerHTML = "";
    if (type === 'components') {
        const foundIngredient = ingredientDetails.find(i => i.name.toLowerCase() === value.toLowerCase());
        
        if (foundIngredient) {
            const infoCard = document.createElement('div');
            infoCard.className = 'product-card ingredient-highlight-card'; // Uses same layout base
            
            infoCard.innerHTML = `
                <div class="product-left">
                    <img src="${foundIngredient.image}" alt="${foundIngredient.name}">
                </div>
                <div class="product-right">
                    <span class="badge">Detalle del Ingrediente</span>
                    <h2>${foundIngredient.name}</h2>
                    <p>${foundIngredient.description}</p>
                </div>
            `;
            container.appendChild(infoCard);
        }
    }
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-left">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-right">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p><strong>Ingredientes:</strong> ${item.components.join(', ')}</p>
                <p><strong>Beneficios:</strong> ${item.benefits.join(', ')}</p>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.classList.remove('mobile-show');
    });
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

function toggleMobileMenu(menuId) {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
        const currentMenu = document.getElementById(menuId);
        const isOpen = currentMenu.classList.contains('mobile-show');
        
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.classList.remove('mobile-show');
        });
        
        if (!isOpen) {
            currentMenu.classList.add('mobile-show');
        }
    }
}



setupFilters();
displayAll();
