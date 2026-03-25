export interface QuizQuestion {
  question: string
  options: string[]
  correct: number // 0-indexed
  explanation: string
}

export interface QuizData {
  es: QuizQuestion[]
  en: QuizQuestion[]
}

// Key is the lesson slug (without path), maps to quiz data in both languages
export const quizzes: Record<string, QuizData> = {
  'roadmap-1-1-que-es-cafe-especialidad': {
    es: [
      {
        question:
          '¿Cuál es la puntuación mínima de la escala SCA para que un café sea considerado especialidad?',
        options: ['75 puntos', '80 puntos', '85 puntos', '90 puntos'],
        correct: 1,
        explanation:
          'La Asociación de Cafés Especiales (SCA) establece que un café debe obtener al menos 80 puntos en su evaluación para ser clasificado como café de especialidad. A partir de 85 se considera excelente y 90+ excepcional.'
      },
      {
        question:
          '¿Qué factor distingue principalmente el café de especialidad del café comercial?',
        options: [
          'El color del grano',
          'La trazabilidad y la calidad de cultivo',
          'El tamaño del empaque',
          'La altitud de venta'
        ],
        correct: 1,
        explanation:
          'El café de especialidad se distingue por su trazabilidad completa, desde el productor hasta el consumidor, así como por prácticas de cultivo sostenibles y control de calidad riguroso.'
      },
      {
        question: '¿Qué caracteriza a la tercera ola del café?',
        options: [
          'Café instantáneo y conveniencia',
          'Lattes, mochas y café como experiencia social',
          'El café tratado como producto artesanal, similar al vino',
          'Café descafeinado y cápsulas'
        ],
        correct: 2,
        explanation:
          'La tercera ola (2000s–hoy) trata el café como un producto artesanal donde importa el origen, el procesamiento, la frescura y la extracción — similar a como se aprecia el vino. La primera ola fue conveniencia y la segunda fue la experiencia tipo Starbucks.'
      }
    ],
    en: [
      {
        question:
          'What is the minimum SCA score for a coffee to be considered specialty grade?',
        options: ['75 points', '80 points', '85 points', '90 points'],
        correct: 1,
        explanation:
          'The Specialty Coffee Association (SCA) establishes that a coffee must score at least 80 points in their evaluation to be classified as specialty grade. Scores of 85+ are considered excellent, and 90+ exceptional.'
      },
      {
        question:
          'What primarily distinguishes specialty coffee from commercial coffee?',
        options: [
          'The color of the bean',
          'Traceability and cultivation quality',
          'The package size',
          'The altitude of sale'
        ],
        correct: 1,
        explanation:
          'Specialty coffee is distinguished by complete traceability from producer to consumer, as well as sustainable cultivation practices and rigorous quality control.'
      },
      {
        question: 'What characterizes the third wave of coffee?',
        options: [
          'Instant coffee and convenience',
          'Lattes, mochas, and coffee as a social experience',
          'Coffee treated as an artisanal product, similar to wine',
          'Decaf coffee and capsules'
        ],
        correct: 2,
        explanation:
          'The third wave (2000s–today) treats coffee as an artisanal product where origin, processing, freshness, and extraction matter — similar to how wine is appreciated. The first wave was convenience and the second was the Starbucks-style experience.'
      }
    ]
  },
  'roadmap-1-2-del-grano-a-la-taza': {
    es: [
      {
        question:
          '¿Cuál es el procesamiento que conserva la mayor cantidad de cuerpo y dulzura en el café?',
        options: [
          'Procesamiento natural',
          'Procesamiento lavado',
          'Procesamiento honey',
          'Procesamiento semilíquido'
        ],
        correct: 0,
        explanation:
          'El procesamiento natural (o seco) mantiene la pulpa del fruto durante el secado, lo que resulta en cafés con mayor cuerpo, dulzura y notas frutales características.'
      },
      {
        question:
          '¿Cuántas capas tiene una cereza de café desde el exterior hacia el grano?',
        options: ['3 capas', '4 capas', '5 capas', '6 capas'],
        correct: 3,
        explanation:
          'Una cereza de café tiene 6 capas: piel (exocarpio), pulpa (mesocarpio), mucílago, pergamino (endocarpio), película plateada y el grano (endospermo).'
      },
      {
        question:
          '¿En qué procesamiento el café mantiene el mucílago (la capa pegajosa de azúcares) durante el secado?',
        options: [
          'Lavado',
          'Honey o pulped natural',
          'Natural',
          'Todas las anteriores'
        ],
        correct: 1,
        explanation:
          'El procesamiento honey (o pulped natural) es un método intermedio donde se remueve la piel pero se mantiene el mucílago durante parte del secado, creando un balance único de sabores.'
      },
      {
        question:
          '¿Qué variedad de café ganó el Best of Panama en 2004 y es considerada la estrella del café de especialidad?',
        options: ['Bourbon', 'SL28', 'Gesha (Geisha)', 'Caturra'],
        correct: 2,
        explanation:
          'La variedad Gesha, originaria de Etiopía, se hizo famosa cuando Hacienda La Esmeralda en Panamá ganó el Best of Panama en 2004. Es conocida por sus notas florales intensas (jazmín, bergamota) y su acidez tipo té.'
      }
    ],
    en: [
      {
        question:
          'Which processing method preserves the most body and sweetness in coffee?',
        options: [
          'Natural processing',
          'Washed processing',
          'Honey processing',
          'Semi-washed processing'
        ],
        correct: 0,
        explanation:
          'Natural (or dry) processing keeps the fruit pulp during drying, resulting in coffees with more body, sweetness, and characteristic fruity notes.'
      },
      {
        question:
          'How many layers does a coffee cherry have from the outside to the bean?',
        options: ['3 layers', '4 layers', '5 layers', '6 layers'],
        correct: 3,
        explanation:
          'A coffee cherry has 6 layers: skin (exocarp), pulp (mesocarp), mucilage, parchment (endocarp), silver skin, and the bean (endosperm).'
      },
      {
        question:
          'In which processing method does coffee retain the mucilage (the sticky sugar-rich layer) during drying?',
        options: [
          'Washed',
          'Honey or pulped natural',
          'Natural',
          'All of the above'
        ],
        correct: 1,
        explanation:
          'Honey processing (or pulped natural) is an intermediate method where the skin is removed but mucilage is retained during part of the drying, creating a unique flavor balance.'
      },
      {
        question:
          'Which coffee variety won the Best of Panama in 2004 and is considered the star of specialty coffee?',
        options: ['Bourbon', 'SL28', 'Gesha (Geisha)', 'Caturra'],
        correct: 2,
        explanation:
          'The Gesha variety, originally from Ethiopia, became famous when Hacienda La Esmeralda in Panama won the Best of Panama in 2004. It is known for its intense floral notes (jasmine, bergamot) and tea-like acidity.'
      }
    ]
  },
  'roadmap-1-3-ciencia-extraccion': {
    es: [
      {
        question:
          '¿Cuál es el porcentaje de extracción ideal para un café espresso bien balanceado?',
        options: ['15-18%', '18-22%', '22-25%', '25-30%'],
        correct: 1,
        explanation:
          'El porcentaje de extracción ideal para espresso es entre 18-22%. Menos del 18% resulta en café subextraído (agrio), más del 22% en café sobreextraído (amargo).'
      },
      {
        question:
          '¿Qué proceso químico es responsable de extraer los compuestos solubles del café?',
        options: ['Lixiviación', 'Osmosis', 'Difusión', 'Caramelización'],
        correct: 0,
        explanation:
          'La lixiviación es el proceso mediante el cual el agua disuelve y extrae los compuestos solubles (sabores, cafés, ácidos) de los sólidos de café molido.'
      },
      {
        question:
          '¿En cuánto tiempo típicamente alcanza su máxima extracción un café de filtro?',
        options: ['1-2 minutos', '2-3 minutos', '3-4 minutos', '5-6 minutos'],
        correct: 2,
        explanation:
          'Un café de filtro (pour-over) típicamente requiere entre 2:30 y 4:00 minutos para alcanzar una extracción óptima, dependiendo del método, tamaño de molienda y temperatura del agua.'
      },
      {
        question:
          'Si tu café tiene un TDS de 1.35% (valor ideal para filtrado), ¿significa que la extracción fue correcta?',
        options: [
          'Sí, TDS ideal siempre significa extracción ideal',
          'No, puedes tener TDS correcto pero extracción incorrecta',
          'Solo si usas refractómetro',
          'Depende del tipo de grano'
        ],
        correct: 1,
        explanation:
          'TDS mide concentración (qué tan fuerte está el café) y extracción mide eficiencia (cuánto disolviste del grano). Con el mismo TDS de 1.35%, puedes tener 13.5% de extracción (sub) o 27% (sobre) dependiendo del ratio café:agua.'
      },
      {
        question:
          '¿En qué orden se extraen los compuestos del café durante la preparación?',
        options: [
          'Azúcares → ácidos → amargos',
          'Ácidos → azúcares → amargos',
          'Amargos → azúcares → ácidos',
          'Todos se extraen al mismo tiempo'
        ],
        correct: 1,
        explanation:
          'Los compuestos se extraen en un orden predecible: primero los ácidos (por eso un café sub-extraído sabe agrio), después los azúcares y caramelos (la zona dulce que buscas), y al final los compuestos amargos y astringentes. Entender este orden es clave para saber qué ajustar cuando tu café no sabe bien.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal extraction percentage for a well-balanced espresso?',
        options: ['15-18%', '18-22%', '22-25%', '25-30%'],
        correct: 1,
        explanation:
          'The ideal extraction percentage for espresso is 18-22%. Less than 18% results in underextracted coffee (sour), more than 22% in overextracted coffee (bitter).'
      },
      {
        question:
          'What chemical process is responsible for extracting soluble compounds from coffee?',
        options: ['Leaching', 'Osmosis', 'Diffusion', 'Caramelization'],
        correct: 0,
        explanation:
          'Leaching is the process by which water dissolves and extracts soluble compounds (flavors, caffeine, acids) from ground coffee solids.'
      },
      {
        question:
          'In approximately how much time does a filter coffee typically reach maximum extraction?',
        options: ['1-2 minutes', '2-3 minutes', '3-4 minutes', '5-6 minutes'],
        correct: 2,
        explanation:
          'A filter coffee (pour-over) typically requires 2:30 to 4:00 minutes to achieve optimal extraction, depending on the method, grind size, and water temperature.'
      },
      {
        question:
          'If your coffee has a TDS of 1.35% (ideal value for filter), does that mean the extraction was correct?',
        options: [
          'Yes, ideal TDS always means ideal extraction',
          'No, you can have correct TDS but incorrect extraction',
          'Only if you use a refractometer',
          'It depends on the bean type'
        ],
        correct: 1,
        explanation:
          'TDS measures concentration (how strong the coffee is) and extraction measures efficiency (how much you dissolved from the bean). With the same 1.35% TDS, you can have 13.5% extraction (under) or 27% (over) depending on the coffee:water ratio.'
      },
      {
        question:
          'In what order are compounds extracted from coffee during brewing?',
        options: [
          'Sugars → acids → bitters',
          'Acids → sugars → bitters',
          'Bitters → sugars → acids',
          'All compounds extract at the same time'
        ],
        correct: 1,
        explanation:
          'Compounds extract in a predictable order: first acids (which is why under-extracted coffee tastes sour), then sugars and caramels (the sweet spot you\'re aiming for), and finally bitter and astringent compounds. Understanding this order is key to knowing what to adjust when your coffee doesn\'t taste right.'
      }
    ]
  },
  'roadmap-1-4-el-agua': {
    es: [
      {
        question:
          '¿Cuál es el rango ideal de TDS (Total Dissolved Solids) del agua para preparar café según la SCA?',
        options: ['0-50 ppm', '75-150 ppm', '150-250 ppm', '250-350 ppm'],
        correct: 1,
        explanation:
          'El rango ideal de TDS del agua para café es 75-150 ppm, con un objetivo de 150 ppm según la SCA. Esto proporciona suficientes minerales (calcio y magnesio) para extraer los compuestos de sabor sin hacer el agua "pesada". El rango 150-250 es aceptable pero no ideal.'
      },
      {
        question:
          '¿Qué efecto tiene el agua con dureza muy alta (>300 ppm) en la extracción de café?',
        options: [
          'Sobre-extrae, produciendo café áspero y amargo',
          'Reduce la extracción y el sabor',
          'No tiene efecto',
          'Mejora la acidez'
        ],
        correct: 0,
        explanation:
          'El agua muy dura tiene exceso de calcio y magnesio, que son los minerales responsables de extraer compuestos del café. Con demasiados, el agua sobre-extrae: produce café áspero, opaco y amargo. Además, genera depósitos de cal (escala) que dañan el equipo.'
      },
      {
        question:
          '¿Cuál es la dureza ideal del agua (concentración de calcio) para café según la SCA?',
        options: ['0-25 ppm', '50-175 ppm', '200-300 ppm', '300-400 ppm'],
        correct: 1,
        explanation:
          'La SCA recomienda una dureza de calcio con objetivo de 68 mg/L y un rango aceptable de 50-175 mg/L. Esto permite una extracción equilibrada de sabores mientras protege la máquina de espresso de acumulación de escala.'
      },
      {
        question:
          '¿Qué mineral del agua tiene mayor afinidad por los compuestos ácidos y afrutados del café?',
        options: [
          'Calcio',
          'Magnesio',
          'Sodio',
          'Bicarbonato'
        ],
        correct: 1,
        explanation:
          'El magnesio tiene mayor afinidad por los ácidos y compuestos aromáticos — es el responsable de las notas afrutadas, florales y la acidez brillante. El calcio, en cambio, extrae más los compuestos que dan cuerpo y dulzura. Por eso el balance entre ambos moldea el perfil final de tu taza.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal water TDS (Total Dissolved Solids) range for brewing coffee according to the SCA?',
        options: ['0-50 ppm', '75-150 ppm', '150-250 ppm', '250-350 ppm'],
        correct: 1,
        explanation:
          'The ideal water TDS range for coffee is 75-150 ppm, with a target of 150 ppm according to the SCA. This provides enough minerals (calcium and magnesium) to extract flavor compounds without making the water too "heavy". The 150-250 range is acceptable but not ideal.'
      },
      {
        question:
          'What effect does very hard water (>300 ppm) have on coffee extraction?',
        options: [
          'Over-extracts, producing harsh and bitter coffee',
          'Reduces extraction and flavor',
          'Has no effect',
          'Improves acidity'
        ],
        correct: 0,
        explanation:
          'Very hard water has excess calcium and magnesium — the minerals responsible for extracting coffee compounds. With too many, the water over-extracts: producing harsh, dull, and bitter coffee. It also creates limescale deposits that damage equipment.'
      },
      {
        question:
          'What is the ideal water hardness (calcium concentration) for coffee according to the SCA?',
        options: ['0-25 ppm', '50-175 ppm', '200-300 ppm', '300-400 ppm'],
        correct: 1,
        explanation:
          'The SCA recommends calcium hardness with a target of 68 mg/L and an acceptable range of 50-175 mg/L. This allows balanced flavor extraction while protecting espresso machines from scale buildup.'
      },
      {
        question:
          'Which mineral in water has the highest affinity for acidic and fruity compounds in coffee?',
        options: [
          'Calcium',
          'Magnesium',
          'Sodium',
          'Bicarbonate'
        ],
        correct: 1,
        explanation:
          'Magnesium has the highest affinity for acids and aromatic compounds — it\'s responsible for fruity, floral notes and bright acidity. Calcium, on the other hand, extracts more of the compounds that give body and sweetness. The balance between both shapes the final profile of your cup.'
      }
    ]
  },
  'roadmap-2-1-anatomia-espresso': {
    es: [
      {
        question:
          '¿Cuál es el ratio estándar de partida para un espresso en café de especialidad?',
        options: ['1:1', '1:1.5', '1:2', '1:3'],
        correct: 2,
        explanation:
          'El ratio 1:2 (ej: 18g de café → 36g en taza) es el punto de partida universal en café de especialidad. De ahí se ajusta según el café y el paladar.'
      },
      {
        question:
          '¿A cuántos bares de presión opera típicamente una máquina de espresso?',
        options: ['6 bares', '7 bares', '9 bares', '12 bares'],
        correct: 2,
        explanation:
          'Las máquinas de espresso operan típicamente a 9 bares de presión (~130 PSI). Este estándar viene de la Faema E61 (1961) y crea el balance ideal entre velocidad de extracción y emulsión de aceites.'
      },
      {
        question:
          '¿Qué indica la crema sobre la frescura del café?',
        options: [
          'Café de 1-3 días post-tueste',
          'Café de 7-14 días post-tueste',
          'Café de más de 30 días',
          'La crema no tiene relación con la frescura'
        ],
        correct: 1,
        explanation:
          'Una crema abundante y estable indica café fresco de 7-14 días post-tueste. Antes de 7 días hay demasiado CO2 (extracción errática), y después de 14 días la crema se vuelve pálida y delgada.'
      }
    ],
    en: [
      {
        question:
          'What is the standard starting ratio for an espresso in specialty coffee?',
        options: ['1:1', '1:1.5', '1:2', '1:3'],
        correct: 2,
        explanation:
          'The 1:2 ratio (e.g., 18g coffee → 36g in cup) is the universal starting point in specialty coffee. From there you adjust based on the coffee and your palate.'
      },
      {
        question:
          'At how many bars of pressure does a typical espresso machine operate?',
        options: ['6 bars', '7 bars', '9 bars', '12 bars'],
        correct: 2,
        explanation:
          'Espresso machines typically operate at 9 bars of pressure (~130 PSI). This standard comes from the Faema E61 (1961) and creates the ideal balance between extraction speed and oil emulsion.'
      },
      {
        question:
          'What does crema indicate about coffee freshness?',
        options: [
          'Coffee 1-3 days post-roast',
          'Coffee 7-14 days post-roast',
          'Coffee over 30 days old',
          'Crema has no relation to freshness'
        ],
        correct: 1,
        explanation:
          'Abundant, stable crema indicates fresh coffee 7-14 days post-roast. Before 7 days there is too much CO2 (erratic extraction), and after 14 days crema becomes pale and thin.'
      }
    ]
  },
  'roadmap-2-2-dial-in-espresso': {
    es: [
      {
        question:
          '¿Cuál es el tiempo de extracción (pull time) ideal para un espresso doble (18-20g)?',
        options: [
          '15-20 segundos',
          '20-25 segundos',
          '25-30 segundos',
          '30-35 segundos'
        ],
        correct: 2,
        explanation:
          'El tiempo ideal de extracción para un espresso doble es 25-30 segundos. Menos tiempo produce café agrio, más tiempo produce café amargo. Este tiempo asume 9 bares de presión.'
      },
      {
        question:
          '¿Qué significa "canalización" en el contexto de la extracción de espresso?',
        options: [
          'El agua fluye uniformemente',
          'El agua encuentra caminos de menor resistencia a través del puck',
          'La presión aumenta uniformemente',
          'El café se quema'
        ],
        correct: 1,
        explanation:
          'La canalización ocurre cuando el agua encuentra caminos de menor resistencia y fluye rápidamente a través de ciertos puntos del puck, resultando en una extracción desigual e incompleta.'
      },
      {
        question:
          '¿Cuál es el tamaño de molido ideal para espresso en comparación con café de filtro?',
        options: [
          'Más grueso',
          'Más fino',
          'El mismo',
          'Depende de la máquina'
        ],
        correct: 1,
        explanation:
          'El molido para espresso debe ser significativamente más fino que el de filtro para resistir los 9 bares de presión y lograr el tiempo de extracción de 25-30 segundos.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal extraction time (pull time) for a double espresso (18-20g)?',
        options: [
          '15-20 seconds',
          '20-25 seconds',
          '25-30 seconds',
          '30-35 seconds'
        ],
        correct: 2,
        explanation:
          'The ideal extraction time for a double espresso is 25-30 seconds. Less time produces sour coffee, more time produces bitter coffee. This timing assumes 9 bars of pressure.'
      },
      {
        question:
          'What does "channeling" mean in the context of espresso extraction?',
        options: [
          'Water flows uniformly',
          'Water finds paths of less resistance through the puck',
          'Pressure increases uniformly',
          'Coffee is burned'
        ],
        correct: 1,
        explanation:
          'Channeling occurs when water finds paths of less resistance and flows quickly through certain points in the puck, resulting in uneven and incomplete extraction.'
      },
      {
        question:
          'What is the ideal grind size for espresso compared to filter coffee?',
        options: ['Coarser', 'Finer', 'The same', 'Depends on the machine'],
        correct: 1,
        explanation:
          'The grind for espresso must be significantly finer than filter coffee to resist the 9 bars of pressure and achieve the 25-30 second extraction time.'
      }
    ]
  },
  'roadmap-2-3-presion-temperatura': {
    es: [
      {
        question:
          '¿Cuál es la temperatura de agua ideal para extraer espresso?',
        options: ['85-88°C', '88-92°C', '92-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'La temperatura ideal para espresso es 92-96°C (típicamente 93°C). A esta temperatura se extraen adecuadamente los ácidos y sabores sin quemar el café ni crear amargor excesivo.'
      },
      {
        question:
          '¿Qué efecto tiene una temperatura demasiado baja (<88°C) en la extracción de espresso?',
        options: [
          'Aumenta la amargura',
          'Produce café agrio y subextraído',
          'Mejora la crema',
          'Reduce la presión'
        ],
        correct: 1,
        explanation:
          'A temperaturas bajas, los compuestos del café se disuelven lentamente, resultando en una extracción incompleta que produce café agrio, débil y sin cuerpo.'
      },
      {
        question:
          '¿Qué es la "profiling de presión" en máquinas de espresso de nivel profesional?',
        options: [
          'Mantener presión constante',
          'Variar la presión durante la extracción',
          'Reducir la presión al final',
          'Aumentar la presión uniformemente'
        ],
        correct: 1,
        explanation:
          'El pressure profiling permite variar la presión durante la extracción (ej: comenzar baja, luego aumentar). Esto optimiza la extracción y permite más control sobre los sabores finales.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal water temperature for espresso extraction?',
        options: ['85-88°C', '88-92°C', '92-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'The ideal temperature for espresso is 92-96°C (typically 93°C). At this temperature, acids and flavors are extracted properly without burning the coffee or creating excessive bitterness.'
      },
      {
        question:
          "What effect does water temperature that's too low (<88°C) have on espresso extraction?",
        options: [
          'Increases bitterness',
          'Produces sour and underextracted coffee',
          'Improves crema',
          'Reduces pressure'
        ],
        correct: 1,
        explanation:
          'At low temperatures, coffee compounds dissolve slowly, resulting in incomplete extraction that produces sour, weak, and thin coffee.'
      },
      {
        question:
          'What is "pressure profiling" in professional-level espresso machines?',
        options: [
          'Maintaining constant pressure',
          'Varying pressure during extraction',
          'Reducing pressure at the end',
          'Increasing pressure uniformly'
        ],
        correct: 1,
        explanation:
          'Pressure profiling allows varying pressure during extraction (e.g., start low, then increase). This optimizes extraction and provides more control over final flavors.'
      }
    ]
  },
  'roadmap-2-4-diagnostico-shots': {
    es: [
      {
        question:
          '¿Cuál es el sabor característico de un espresso subextraído (< 18%)?',
        options: [
          'Amargo y quemado',
          'Agrio, débil y acuoso',
          'Equilibrado y dulce',
          'Demasiado concentrado'
        ],
        correct: 1,
        explanation:
          'Un espresso subextraído tiene sabor agrio, débil y acuoso porque no se disuelven suficientes compuestos del café. Se debe aumentar el tiempo de extracción o el tamaño del molido.'
      },
      {
        question:
          '¿Qué causa típicamente un flujo de espresso demasiado rápido (< 20 segundos)?',
        options: [
          'Molienda demasiado fina',
          'Molienda demasiado gruesa',
          'Presión demasiado alta',
          'Temperatura demasiado baja'
        ],
        correct: 1,
        explanation:
          'Una molienda demasiado gruesa no resiste la presión, permitiendo que el agua fluya rápidamente sin extraer suficientemente el café, resultando en un shot subextraído.'
      },
      {
        question:
          '¿Cuál es el indicador visual más confiable de una buena extracción de espresso?',
        options: [
          'Color oscuro del licor',
          'Presencia de crema abundante',
          'Flujo que empieza oscuro y viscoso, aclarándose gradualmente a caramelo dorado',
          'Duración total de 60 segundos'
        ],
        correct: 2,
        explanation:
          'Un shot bien extraído empieza oscuro y viscoso (como miel), y gradualmente se aclara a caramelo dorado. Si se vuelve rubio claro demasiado rápido (blonding), la extracción se agotó prematuramente.'
      }
    ],
    en: [
      {
        question:
          'What is the characteristic flavor of an underextracted espresso (< 18%)?',
        options: [
          'Bitter and burnt',
          'Sour, weak and watery',
          'Balanced and sweet',
          'Too concentrated'
        ],
        correct: 1,
        explanation:
          'An underextracted espresso tastes sour, weak, and watery because not enough coffee compounds are dissolved. You must increase extraction time or finer grind size.'
      },
      {
        question:
          "What typically causes espresso flow that's too fast (< 20 seconds)?",
        options: [
          'Grind too fine',
          'Grind too coarse',
          'Pressure too high',
          'Temperature too low'
        ],
        correct: 1,
        explanation:
          "A grind that's too coarse doesn't resist the pressure, allowing water to flow quickly without sufficiently extracting the coffee, resulting in an underextracted shot."
      },
      {
        question:
          'What is the most reliable visual indicator of good espresso extraction?',
        options: [
          'Dark color of the liquor',
          'Abundant crema presence',
          'Flow that starts dark and viscous, gradually lightening to golden caramel',
          'Total duration of 60 seconds'
        ],
        correct: 2,
        explanation:
          'A well-extracted shot starts dark and viscous (like honey), gradually lightening to golden caramel. If it turns pale blonde too quickly (blonding), the extraction ran out prematurely.'
      }
    ]
  },
  'roadmap-2-5-mantenimiento-maquina': {
    es: [
      {
        question:
          '¿Con qué frecuencia se debe hacer backflush con detergente (Cafiza) en una máquina de espresso casera?',
        options: [
          'Después de cada shot',
          'Diariamente',
          'Semanalmente',
          'Mensualmente'
        ],
        correct: 2,
        explanation:
          'El backflush con detergente debe hacerse una vez por semana para disolver aceites acumulados. El backflush solo con agua se puede hacer 2-3 veces por semana. En cafeterías de alto volumen, la frecuencia aumenta.'
      },
      {
        question:
          '¿Qué causa la acumulación de depósitos minerales en la ducha y grupos de una máquina de espresso?',
        options: [
          'Agua blanda',
          'Agua dura con alto contenido de calcio y magnesio',
          'Café molido muy fino',
          'Presión excesiva'
        ],
        correct: 1,
        explanation:
          'El agua dura, con alto contenido de calcio y magnesio, deja depósitos minerales que se acumulan en las superficies internas, afectando la distribución de agua.'
      },
      {
        question:
          '¿Cuál es el procedimiento correcto para mantener una válvula de 3 vías en una máquina de espresso?',
        options: [
          'Cambiarla cada mes',
          'Limpiarla regularmente con agua caliente',
          'Aplicar grasa cada semana',
          'No requiere mantenimiento'
        ],
        correct: 1,
        explanation:
          'Las válvulas de 3 vías deben limpiarse regularmente con agua caliente para evitar que se atasquen con residuos de café, lo que afectaría el drenaje y presión del grupo.'
      }
    ],
    en: [
      {
        question:
          'How often should a detergent backflush (Cafiza) be performed on a home espresso machine?',
        options: ['After every shot', 'Daily', 'Weekly', 'Monthly'],
        correct: 2,
        explanation:
          'Detergent backflush should be done once a week to dissolve accumulated oils. Water-only backflush can be done 2-3 times per week. In high-volume cafés, frequency increases.'
      },
      {
        question:
          'What causes mineral deposits to accumulate in the shower and group of an espresso machine?',
        options: [
          'Soft water',
          'Hard water with high calcium and magnesium content',
          'Very fine ground coffee',
          'Excessive pressure'
        ],
        correct: 1,
        explanation:
          'Hard water, with high calcium and magnesium content, leaves mineral deposits that accumulate on internal surfaces, affecting water distribution.'
      },
      {
        question:
          'What is the correct procedure for maintaining a 3-way solenoid valve in an espresso machine?',
        options: [
          'Replace it monthly',
          'Clean it regularly with hot water',
          'Apply grease weekly',
          'Requires no maintenance'
        ],
        correct: 1,
        explanation:
          'Three-way valves should be cleaned regularly with hot water to prevent them from clogging with coffee residue, which would affect group drainage and pressure.'
      }
    ]
  },
  'roadmap-3-1-pourover-v60': {
    es: [
      {
        question:
          '¿Cuál es la temperatura ideal del agua para preparar café V60?',
        options: ['80-85°C', '85-90°C', '90-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'La temperatura ideal para V60 es 90-96°C. Esta temperatura es suficientemente alta para extraer bien los sabores sin quemar el café, como lo requiere un dripper de flujo medio.'
      },
      {
        question:
          '¿Cuál es la proporción típica (ratio) de café a agua para un V60?',
        options: ['1:12', '1:15', '1:16', '1:18'],
        correct: 2,
        explanation:
          'La proporción típica es 1:16 (por ejemplo, 20g de café para 320ml de agua). Esta proporción crea un balance equilibrado entre cuerpo y sabor para este método de filtro.'
      },
      {
        question:
          '¿Cuál es la duración total ideal del proceso de vertido en un V60?',
        options: ['1-2 minutos', '2-3 minutos', '3-4 minutos', '4-5 minutos'],
        correct: 2,
        explanation:
          'El tiempo total de vertido en V60 debe ser 3-4 minutos. Esto incluye el bloom (30 segundos) y varios vertidos en espiral controlados para una extracción óptima.'
      }
    ],
    en: [
      {
        question: 'What is the ideal water temperature for brewing V60 coffee?',
        options: ['80-85°C', '85-90°C', '90-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'The ideal temperature for V60 is 90-96°C. This temperature is high enough to extract flavors well without burning the coffee, as required by a medium-flow dripper.'
      },
      {
        question: 'What is the typical ratio of coffee to water for a V60?',
        options: ['1:12', '1:15', '1:16', '1:18'],
        correct: 2,
        explanation:
          'The typical ratio is 1:16 (for example, 20g of coffee for 320ml of water). This ratio creates a balanced body and flavor for this filter method.'
      },
      {
        question:
          'What is the ideal total duration of the pouring process in a V60?',
        options: ['1-2 minutes', '2-3 minutes', '3-4 minutes', '4-5 minutes'],
        correct: 2,
        explanation:
          'The total pour time in V60 should be 3-4 minutes. This includes the bloom (30 seconds) and multiple controlled spiral pours for optimal extraction.'
      }
    ]
  },
  'roadmap-3-2-chemex-aeropress': {
    es: [
      {
        question:
          '¿Cuál es la característica única del filtro Chemex en comparación con otros métodos de filtro?',
        options: [
          'Es más fino que los filtros estándar',
          'Está hecho de madera',
          'Es 20-30% más grueso que los filtros de papel normales',
          'No contiene residuos'
        ],
        correct: 2,
        explanation:
          'Los filtros Chemex son 20-30% más gruesos que los filtros de papel normales, lo que resulta en un café más limpio y con menor cuerpo, destacando notas más delicadas.'
      },
      {
        question:
          '¿Cuál es la duración total ideal de la preparación en Aeropress?',
        options: ['1-2 minutos', '2-3 minutos', '3-4 minutos', '4-5 minutos'],
        correct: 0,
        explanation:
          'El tiempo total en Aeropress es rápido, generalmente 1-2 minutos desde el agua caliente hasta el café final. Este tiempo corto permite un control preciso de la extracción.'
      },
      {
        question:
          '¿Qué método de Aeropress produce un café más suave y limpio?',
        options: [
          'Método tradicional (presión hacia abajo)',
          'Método inverso (con emersión)',
          'Ambos producen el mismo resultado',
          'Depende del molido'
        ],
        correct: 1,
        explanation:
          'El método inverso (con emersión) permite que el café se contacte más tiempo con el agua antes de presionar, creando un café más limpio y controlado.'
      }
    ],
    en: [
      {
        question:
          'What is the unique characteristic of the Chemex filter compared to other filter methods?',
        options: [
          'It is finer than standard filters',
          'It is made of wood',
          'It is 20-30% thicker than normal paper filters',
          'It contains no sediment'
        ],
        correct: 2,
        explanation:
          'Chemex filters are 20-30% thicker than normal paper filters, resulting in cleaner coffee with less body, highlighting more delicate notes.'
      },
      {
        question: 'What is the ideal total duration for brewing in Aeropress?',
        options: ['1-2 minutes', '2-3 minutes', '3-4 minutes', '4-5 minutes'],
        correct: 0,
        explanation:
          'The total time in Aeropress is quick, typically 1-2 minutes from hot water to final coffee. This short time allows precise extraction control.'
      },
      {
        question:
          'Which Aeropress brewing method produces a smoother and cleaner coffee?',
        options: [
          'Traditional method (pressing down)',
          'Inverted method (with immersion)',
          'Both produce the same result',
          'Depends on grind size'
        ],
        correct: 1,
        explanation:
          'The inverted method (with immersion) allows the coffee to contact water longer before pressing, creating a cleaner and more controlled coffee.'
      }
    ]
  },
  'roadmap-3-3-metodo-hoffmann-french-press': {
    es: [
      {
        question: '¿Cuál es la temperatura ideal del agua para French Press?',
        options: ['85-90°C', '90-95°C', '95-100°C', '100°C exacto'],
        correct: 1,
        explanation:
          'La temperatura ideal es 90-95°C. El French Press requiere agua ligeramente más fría que espresso para evitar sobreextracción, ya que el tiempo de contacto es largo (4 minutos).'
      },
      {
        question:
          '¿Cuál es la duración ideal del tiempo de contacto (steep time) en French Press?',
        options: ['2-3 minutos', '3-4 minutos', '4-5 minutos', '5-6 minutos'],
        correct: 2,
        explanation:
          'El tiempo ideal de contacto es 4-5 minutos en French Press. Este tiempo permite una extracción completa de los sabores manteniendo una buena consistencia en el sabor.'
      },
      {
        question: '¿Cuál es el tamaño de molido ideal para French Press?',
        options: ['Muy fino', 'Fino', 'Grueso', 'Muy grueso'],
        correct: 2,
        explanation:
          'El French Press requiere un molido grueso para evitar que partículas finas pasen a través del filtro de malla, lo que causaría sedimento y sabor desagradable.'
      }
    ],
    en: [
      {
        question: 'What is the ideal water temperature for French Press?',
        options: ['85-90°C', '90-95°C', '95-100°C', '100°C exactly'],
        correct: 1,
        explanation:
          'The ideal temperature is 90-95°C. French Press requires slightly cooler water than espresso to avoid overextraction, since contact time is long (4 minutes).'
      },
      {
        question: 'What is the ideal duration of steep time in French Press?',
        options: ['2-3 minutes', '3-4 minutes', '4-5 minutes', '5-6 minutes'],
        correct: 2,
        explanation:
          'The ideal steep time is 4-5 minutes in French Press. This time allows complete extraction of flavors while maintaining good flavor consistency.'
      },
      {
        question: 'What is the ideal grind size for French Press?',
        options: ['Very fine', 'Fine', 'Coarse', 'Very coarse'],
        correct: 2,
        explanation:
          'French Press requires a coarse grind to prevent fine particles from passing through the mesh filter, which would cause sediment and unpleasant taste.'
      }
    ]
  },
  'roadmap-3-4-clever-kalita-origami': {
    es: [
      {
        question: '¿Cuál es la característica distintiva del dripper Clever?',
        options: [
          'Tiene 60 agujeros pequeños',
          'Tiene una válvula de liberación en el fondo',
          'Tiene costillas espirales',
          'Tiene forma hexagonal'
        ],
        correct: 1,
        explanation:
          'El Clever tiene una válvula inteligente en el fondo que abre solo cuando se coloca en una taza, combinando emersión (como French Press) con filtración (como V60).'
      },
      {
        question: '¿Cuál es la temperatura ideal para Kalita Wave?',
        options: ['85-90°C', '90-95°C', '92-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'La temperatura ideal para Kalita Wave es 92-96°C. El flujo plano y controlado requiere agua suficientemente caliente para una buena extracción en su tiempo de contacto específico.'
      },
      {
        question: '¿Qué diferencia tiene el filtro Origami en su geometría?',
        options: [
          'Tiene costillas profundas',
          'Tiene una forma cónica profunda',
          'Tiene un fondo plano',
          'Tiene espacios de aire'
        ],
        correct: 1,
        explanation:
          'El Origami tiene una forma cónica profunda y costillas espaciadas que crean un camino consistente para el agua, permitiendo mayor flexibilidad en la técnica de vertido.'
      }
    ],
    en: [
      {
        question:
          'What is the distinctive characteristic of the Clever dripper?',
        options: [
          'It has 60 small holes',
          'It has a release valve on the bottom',
          'It has spiral ribs',
          'It has a hexagonal shape'
        ],
        correct: 1,
        explanation:
          'The Clever has a smart valve on the bottom that opens only when placed on a cup, combining immersion (like French Press) with filtration (like V60).'
      },
      {
        question: 'What is the ideal temperature for Kalita Wave?',
        options: ['85-90°C', '90-95°C', '92-96°C', '96-100°C'],
        correct: 2,
        explanation:
          'The ideal temperature for Kalita Wave is 92-96°C. The flat and controlled flow requires water hot enough for good extraction in its specific contact time.'
      },
      {
        question:
          'What difference does the Origami filter have in its geometry?',
        options: [
          'It has deep ribs',
          'It has a deep conical shape',
          'It has a flat bottom',
          'It has air spaces'
        ],
        correct: 1,
        explanation:
          'The Origami has a deep conical shape and spaced ribs that create a consistent water pathway, allowing greater flexibility in pouring technique.'
      }
    ]
  },
  'roadmap-3-5-cold-brew-flash-brew': {
    es: [
      {
        question:
          '¿Cuál es el tiempo de remojo típico para una preparación de Cold Brew?',
        options: ['2-4 horas', '4-8 horas', '12-24 horas', '24-48 horas'],
        correct: 3,
        explanation:
          'El Cold Brew requiere típicamente 12-24 horas (o hasta 48 horas) de remojo. El agua fría extrae los compuestos lentamente, resultando en un café menos ácido y más suave.'
      },
      {
        question:
          '¿Cuál es la proporción típica de café a agua para Cold Brew?',
        options: ['1:8', '1:10', '1:15', '1:20'],
        correct: 2,
        explanation:
          'La proporción típica es 1:15 a 1:20. Este café concentrado se diluye luego con agua o leche al servir, ajustando el sabor según preferencia.'
      },
      {
        question: '¿Cuál es la característica principal del método Flash Brew?',
        options: [
          'Usa agua caliente y hielo simultáneamente',
          'Usa solo hielo',
          'Requiere 48 horas',
          'Usa mucho azúcar'
        ],
        correct: 0,
        explanation:
          'Flash Brew vierte café caliente sobre hielo, enfriándolo rápidamente. Esto mantiene más sabores complejos comparado con Cold Brew, tomando solo minutos en lugar de horas.'
      }
    ],
    en: [
      {
        question:
          'What is the typical steeping time for a Cold Brew preparation?',
        options: ['2-4 hours', '4-8 hours', '12-24 hours', '24-48 hours'],
        correct: 3,
        explanation:
          'Cold Brew typically requires 12-24 hours (or up to 48 hours) of steeping. Cold water extracts compounds slowly, resulting in less acidic and smoother coffee.'
      },
      {
        question: 'What is the typical ratio of coffee to water for Cold Brew?',
        options: ['1:8', '1:10', '1:15', '1:20'],
        correct: 2,
        explanation:
          'The typical ratio is 1:15 to 1:20. This concentrated coffee is then diluted with water or milk when serving, adjusting the flavor as desired.'
      },
      {
        question: 'What is the main characteristic of the Flash Brew method?',
        options: [
          'Uses hot water and ice simultaneously',
          'Uses only ice',
          'Requires 48 hours',
          'Uses lots of sugar'
        ],
        correct: 0,
        explanation:
          'Flash Brew pours hot coffee over ice, cooling it quickly. This retains more complex flavors compared to Cold Brew, taking only minutes instead of hours.'
      }
    ]
  },
  'roadmap-4-1-fisiologia-gusto': {
    es: [
      {
        question:
          '¿Cuántos tipos básicos de receptores de sabor tiene la lengua humana?',
        options: ['3', '4', '5', '7'],
        correct: 2,
        explanation:
          'La lengua tiene 5 tipos básicos de receptores de sabor: dulce, salado, ácido, amargo y umami. Cada uno detecta moléculas específicas de sabor.'
      },
      {
        question:
          '¿Cuál es el rol principal del olfato en la percepción del sabor del café?',
        options: [
          'Detecta solo aromas',
          'Proporciona 80-90% de la percepción del sabor total',
          'Solo contribuye a la sensación de temperatura',
          'No tiene rol significativo'
        ],
        correct: 1,
        explanation:
          'El olfato retronasal proporciona 80-90% de la experiencia de sabor del café. Sin olfato, solo percibiríamos dulce, salado, amargo, ácido y umami, sin los sabores complejos.'
      },
      {
        question:
          '¿Cuál es la temperatura óptima para que los receptores gustativos del café estén más activos?',
        options: ['40-50°C', '50-60°C', '60-70°C', '70-80°C'],
        correct: 2,
        explanation:
          'Los receptores gustativos son más sensibles entre 60-70°C. A temperaturas muy altas se generan reacciones al calor que enmascaran los sabores delicados del café.'
      }
    ],
    en: [
      {
        question:
          'How many basic types of taste receptors does the human tongue have?',
        options: ['3', '4', '5', '7'],
        correct: 2,
        explanation:
          'The tongue has 5 basic types of taste receptors: sweet, salty, sour, bitter, and umami. Each detects specific taste molecules.'
      },
      {
        question:
          'What is the main role of smell in the perception of coffee flavor?',
        options: [
          'Detects only aromas',
          'Provides 80-90% of total flavor perception',
          'Only contributes to temperature sensation',
          'Has no significant role'
        ],
        correct: 1,
        explanation:
          'Retronasal smell provides 80-90% of the coffee taste experience. Without smell, we would only perceive sweet, salty, bitter, sour, and umami, without complex flavors.'
      },
      {
        question:
          'What is the optimal temperature for coffee taste receptors to be most active?',
        options: ['40-50°C', '50-60°C', '60-70°C', '70-80°C'],
        correct: 2,
        explanation:
          'Taste receptors are most sensitive between 60-70°C. At very high temperatures, heat reactions are generated that mask the delicate flavors of coffee.'
      }
    ]
  },
  'roadmap-4-2-protocolo-catacion-sca': {
    es: [
      {
        question:
          '¿Cuál es la estructura de calificación de la escala de catación SCA?',
        options: [
          '0-50 puntos',
          '0-100 puntos',
          '0-150 puntos',
          '0-200 puntos'
        ],
        correct: 1,
        explanation:
          'La escala SCA va de 0-100 puntos, dividida en categorías como fragancia/aroma, sabor, posgusto, acidez, cuerpo, etc. Una puntuación de 80+ es especialidad.'
      },
      {
        question:
          '¿Cuántas muestras de café se catan típicamente en una sesión de catación SCA estándar?',
        options: ['3 muestras', '5 muestras', '8-10 muestras', '15 muestras'],
        correct: 2,
        explanation:
          'En una sesión de catación SCA típica se catan 8-10 muestras para comparación. Esta cantidad permite evaluar bien sin fatigarse el paladar excesivamente.'
      },
      {
        question:
          '¿En qué orden se evalúan los parámetros en el protocolo SCA?',
        options: [
          'Sabor, aroma, acidez, cuerpo',
          'Aroma, acidez, sabor, cuerpo',
          'Fragancia, aroma, sabor, acidez, cuerpo',
          'Cuerpo, acidez, sabor, aroma'
        ],
        correct: 2,
        explanation:
          'El protocolo SCA evalúa en orden: fragancia (café seco), aroma (café mojado), sabor, posgusto, acidez, cuerpo, uniformidad, balance y limpieza.'
      }
    ],
    en: [
      {
        question:
          'What is the scoring scale structure of the SCA cupping evaluation?',
        options: [
          '0-50 points',
          '0-100 points',
          '0-150 points',
          '0-200 points'
        ],
        correct: 1,
        explanation:
          'The SCA scale goes from 0-100 points, divided into categories such as fragrance/aroma, flavor, aftertaste, acidity, body, etc. A score of 80+ is specialty.'
      },
      {
        question:
          'How many coffee samples are typically cupped in a standard SCA cupping session?',
        options: ['3 samples', '5 samples', '8-10 samples', '15 samples'],
        correct: 2,
        explanation:
          'In a typical SCA cupping session, 8-10 samples are tasted for comparison. This quantity allows good evaluation without excessive palate fatigue.'
      },
      {
        question: 'In what order are parameters evaluated in the SCA protocol?',
        options: [
          'Flavor, aroma, acidity, body',
          'Aroma, acidity, flavor, body',
          'Fragrance, aroma, flavor, acidity, body',
          'Body, acidity, flavor, aroma'
        ],
        correct: 2,
        explanation:
          'The SCA protocol evaluates in order: fragrance (dry coffee), aroma (wet coffee), flavor, aftertaste, acidity, body, uniformity, balance, and cleanliness.'
      }
    ]
  },
  'roadmap-4-3-rueda-sabores-descriptores': {
    es: [
      {
        question:
          '¿Cuántos descriptores principales hay en la Rueda de Sabores de la SCA?',
        options: ['5', '10', '15', '20'],
        correct: 1,
        explanation:
          'La Rueda de Sabores SCA tiene 10 categorías principales (fragancia, frutas, flores, etc.), cada una con sus propios descriptores específicos para un total de ~100 términos.'
      },
      {
        question:
          '¿A qué familia sensorial pertenecen los descriptores como "cacahuete", "nuez" y "semillas"?',
        options: ['Frutas', 'Flores', 'Granos y vegetales', 'Especias'],
        correct: 2,
        explanation:
          'Descriptores como cacahuete, nuez y semilla pertenecen a la familia de "Granos y vegetales" en la Rueda de Sabores de la SCA.'
      },
      {
        question:
          '¿Cuál es el propósito principal de la Rueda de Sabores en la catación de café?',
        options: [
          'Clasificar por origen',
          'Proporcionar un lenguaje común para describir sabores',
          'Determinar el precio',
          'Identificar defectos'
        ],
        correct: 1,
        explanation:
          'La Rueda de Sabores proporciona un lenguaje estandarizado para que catadores describan sus experiencias de sabor de manera consistente y comunicable.'
      }
    ],
    en: [
      {
        question: 'How many main descriptors are on the SCA Flavor Wheel?',
        options: ['5', '10', '15', '20'],
        correct: 1,
        explanation:
          'The SCA Flavor Wheel has 10 main categories (fragrance, fruits, flowers, etc.), each with their own specific descriptors for a total of ~100 terms.'
      },
      {
        question:
          'To what sensory family do descriptors like "peanut", "nut", and "seed" belong?',
        options: ['Fruits', 'Flowers', 'Grains and vegetables', 'Spices'],
        correct: 2,
        explanation:
          'Descriptors like peanut, nut, and seed belong to the "Grains and vegetables" family in the SCA Flavor Wheel.'
      },
      {
        question:
          'What is the main purpose of the Flavor Wheel in coffee cupping?',
        options: [
          'Classify by origin',
          'Provide a common language to describe flavors',
          'Determine price',
          'Identify defects'
        ],
        correct: 1,
        explanation:
          'The Flavor Wheel provides a standardized language for cuppers to describe their flavor experiences consistently and communicably.'
      }
    ]
  },
  'roadmap-4-4-entrenamiento-sensorial': {
    es: [
      {
        question:
          '¿Cuál es el beneficio principal del entrenamiento sensorial repetido en catación de café?',
        options: [
          'Aumenta el apetito',
          'Entrena la memoria olfativa y sensorial',
          'Mejora la visión',
          'Reduce el costo del café'
        ],
        correct: 1,
        explanation:
          'El entrenamiento sensorial repetido construye una memoria olfativa y gustativa más fuerte, permitiendo al catador identificar y recordar sabores específicos más precisamente.'
      },
      {
        question:
          '¿Qué es un "olfatómetro" o "aromámetro" en el contexto del entrenamiento sensorial del café?',
        options: [
          'Un instrumento que mide la presión del café',
          'Un kit con referencias de aromas estándar',
          'Un medidor de temperatura',
          'Un equipo para tostar café'
        ],
        correct: 1,
        explanation:
          'Un aromámetro o olfatómetro es un kit de referencia estandarizado (como el SCA Cupping Kit) que contiene muestras de aromas para entrenar y calibrar el sentido del olfato.'
      },
      {
        question:
          '¿Cuál es el efecto de la fatiga sensorial en la evaluación del sabor del café?',
        options: [
          'Mejora la percepción',
          'Reduce la capacidad de detectar diferencias sutiles',
          'Intensifica los sabores dulces',
          'Aumenta la acidez percibida'
        ],
        correct: 1,
        explanation:
          'La fatiga sensorial (adaptación) reduce la sensibilidad a estímulos repetidos, disminuyendo la capacidad de detectar sabores sutiles y diferencias entre muestras.'
      }
    ],
    en: [
      {
        question:
          'What is the main benefit of repeated sensory training in coffee cupping?',
        options: [
          'Increases appetite',
          'Trains olfactory and sensory memory',
          'Improves vision',
          'Reduces coffee cost'
        ],
        correct: 1,
        explanation:
          'Repeated sensory training builds stronger olfactory and gustatory memory, allowing the cupper to identify and remember specific flavors more accurately.'
      },
      {
        question:
          'What is an "olfactometer" or "aroma kit" in the context of coffee sensory training?',
        options: [
          'An instrument measuring coffee pressure',
          'A kit with standard aroma references',
          'A temperature meter',
          'Equipment for roasting coffee'
        ],
        correct: 1,
        explanation:
          'An aroma kit or olfactometer is a standardized reference set (like the SCA Cupping Kit) containing aroma samples to train and calibrate the sense of smell.'
      },
      {
        question:
          'What is the effect of sensory fatigue on coffee flavor evaluation?',
        options: [
          'Improves perception',
          'Reduces ability to detect subtle differences',
          'Intensifies sweet flavors',
          'Increases perceived acidity'
        ],
        correct: 1,
        explanation:
          'Sensory fatigue (adaptation) reduces sensitivity to repeated stimuli, decreasing the ability to detect subtle flavors and differences between samples.'
      }
    ]
  },
  'roadmap-5-1-ciencia-leche-texturizado': {
    es: [
      {
        question:
          '¿Cuál es el rango ideal de temperatura para texturizar leche en un cappuccino?',
        options: ['50-55°C', '55-65°C', '60-65°C', '65-70°C'],
        correct: 2,
        explanation:
          'El rango ideal es 60-65°C. A esta temperatura, las proteínas se desnaturalizan óptimamente sin quemar la lactosa, creando la mejor microespuma y sabor.'
      },
      {
        question:
          '¿Cuál es el papel principal de las proteínas de la leche en la texturización?',
        options: [
          'Añaden dulzura',
          'Estabilizan la espuma capturando aire',
          'Reducen la densidad',
          'Cambian el color'
        ],
        correct: 1,
        explanation:
          'Las proteínas de la leche (principalmente caseína) se desnaturalizan con el calor y son surfactantes naturales que estabilizan la espuma capturando burbujas de aire.'
      },
      {
        question: '¿Qué tipo de leche crea la microespuma más fina y cremosa?',
        options: [
          'Leche descremada',
          'Leche entera',
          'Leche de soja',
          'Leche de almendra'
        ],
        correct: 1,
        explanation:
          'La leche entera, con su contenido de grasa (3.5-4%), crea la microespuma más fina, estable y cremosa. La grasa complementa las proteínas en la estabilización.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal temperature range for steaming milk in a cappuccino?',
        options: ['50-55°C', '55-65°C', '60-65°C', '65-70°C'],
        correct: 2,
        explanation:
          'The ideal range is 60-65°C. At this temperature, proteins denature optimally without burning lactose, creating the best microfoam and flavor.'
      },
      {
        question: 'What is the main role of milk proteins in steaming?',
        options: [
          'Add sweetness',
          'Stabilize foam by trapping air',
          'Reduce density',
          'Change color'
        ],
        correct: 1,
        explanation:
          'Milk proteins (mainly casein) denature with heat and are natural surfactants that stabilize foam by trapping air bubbles.'
      },
      {
        question:
          'Which type of milk creates the finest and creamiest microfoam?',
        options: ['Skim milk', 'Whole milk', 'Soy milk', 'Almond milk'],
        correct: 1,
        explanation:
          'Whole milk, with its fat content (3.5-4%), creates the finest, most stable, and creamiest microfoam. Fat complements proteins in stabilization.'
      }
    ]
  },
  'roadmap-5-2-heart-rosetta': {
    es: [
      {
        question:
          '¿Cuál es el patrón básico que se crea primero para empezar a hacer latte art?',
        options: ['Corazón', 'Rosetón', 'Tulipán', 'Hoja'],
        correct: 0,
        explanation:
          'El corazón es el patrón básico fundamental en latte art. Se crea controlando el flujo de leche texturizada y la altura de la taza para crear la forma característica.'
      },
      {
        question:
          '¿Cuál es la distancia típica entre la boquilla de la jarra y la superficie del café para crear un corazón?',
        options: ['1-2 cm', '2-3 cm', '3-4 cm', '5-10 cm'],
        correct: 1,
        explanation:
          'La distancia típica es 2-3 cm de la superficie. Esta altura permite que la leche blanca se integre gradualmente con el espresso oscuro, formando el patrón.'
      },
      {
        question:
          '¿Qué movimiento fundamental se debe dominar para crear un rosetón?',
        options: [
          'Movimiento circular',
          'Movimiento de zigzag',
          'Movimiento de lado a lado que crea pétalos',
          'Movimiento vertical'
        ],
        correct: 2,
        explanation:
          'El rosetón se crea con un movimiento lateral repetido que crea pétalos. Cada movimiento de lado a lado deja una marca blanca que forma los pétalos característicos.'
      }
    ],
    en: [
      {
        question:
          'What is the basic pattern created first when starting to make latte art?',
        options: ['Heart', 'Rosetta', 'Tulip', 'Leaf'],
        correct: 0,
        explanation:
          'The heart is the fundamental basic pattern in latte art. It is created by controlling the flow of steamed milk and the height of the cup to create the characteristic shape.'
      },
      {
        question:
          'What is the typical distance from the pitcher spout to the coffee surface to create a heart?',
        options: ['1-2 cm', '2-3 cm', '3-4 cm', '5-10 cm'],
        correct: 1,
        explanation:
          'The typical distance is 2-3 cm from the surface. This height allows the white milk to gradually integrate with the dark espresso, forming the pattern.'
      },
      {
        question:
          'What fundamental movement must be mastered to create a rosetta?',
        options: [
          'Circular movement',
          'Zigzag movement',
          'Side-to-side movement that creates petals',
          'Vertical movement'
        ],
        correct: 2,
        explanation:
          'The rosetta is created with a repeated side-to-side movement that creates petals. Each side-to-side motion leaves a white mark that forms the characteristic petals.'
      }
    ]
  },
  'roadmap-5-3-tulipan-patrones-avanzados': {
    es: [
      {
        question:
          '¿Cuál es la diferencia principal entre un rosetón y un tulipán en latte art?',
        options: [
          'El tulipán es más grande',
          'El tulipán tiene múltiples capas de pétalos separados',
          'El tulipán usa más leche',
          'No hay diferencia'
        ],
        correct: 1,
        explanation:
          'El tulipán tiene múltiples filas de pétalos superpuestos, creando una apariencia de flor de capas, mientras que el rosetón tiene pétalos planos en una línea.'
      },
      {
        question:
          '¿Cuántas "capas" o filas típicamente tienen un tulipán completo?',
        options: ['1 fila', '2 filas', '3-4 filas', '5-6 filas'],
        correct: 2,
        explanation:
          'Un tulipán completo tiene típicamente 3-4 filas (capas) de pétalos, cada una creada con el mismo movimiento de lado a lado pero a diferentes posiciones.'
      },
      {
        question:
          '¿Cuál es la técnica clave para crear patrones avanzados como etching?',
        options: [
          'Usar espresso caliente',
          'Usar una herramienta para dibujar directamente en la leche',
          'Verter la leche más rápido',
          'Aumentar la temperatura'
        ],
        correct: 1,
        explanation:
          'El etching (o free-pouring) permite crear diseños libres usando una herramienta pequeña (palillo) para dibujar directamente sobre la superficie de leche y espresso.'
      }
    ],
    en: [
      {
        question:
          'What is the main difference between a rosetta and a tulip in latte art?',
        options: [
          'The tulip is larger',
          'The tulip has multiple layers of separate petals',
          'The tulip uses more milk',
          'There is no difference'
        ],
        correct: 1,
        explanation:
          'The tulip has multiple rows of overlapping petals, creating a layered flower appearance, while the rosetta has flat petals in a line.'
      },
      {
        question:
          'How many "layers" or rows typically does a complete tulip have?',
        options: ['1 row', '2 rows', '3-4 rows', '5-6 rows'],
        correct: 2,
        explanation:
          'A complete tulip typically has 3-4 rows (layers) of petals, each created with the same side-to-side movement but at different positions.'
      },
      {
        question:
          'What is the key technique for creating advanced patterns like etching?',
        options: [
          'Use hot espresso',
          'Use a tool to draw directly on the milk',
          'Pour milk faster',
          'Increase temperature'
        ],
        correct: 1,
        explanation:
          'Etching (or free-pouring) allows creating free designs using a small tool (stick) to draw directly on the milk and espresso surface.'
      }
    ]
  },
  'roadmap-5-4-etching-disenos-libres': {
    es: [
      {
        question:
          '¿Cuál es el material típico de la herramienta usada para etching en latte art?',
        options: ['Madera', 'Plástico o bambú', 'Metal puro', 'Vidrio'],
        correct: 1,
        explanation:
          'Las herramientas de etching son típicamente de bambú o plástico, delgadas y puntiagudas para no dañar la taza ni rasguñar la leche sin control.'
      },
      {
        question:
          '¿Cuál es la velocidad ideal de vertido de leche para permitir control de etching?',
        options: [
          'Muy rápido',
          'Moderado y controlado',
          'Muy lento',
          'Depende del diseño'
        ],
        correct: 1,
        explanation:
          'La velocidad debe ser moderada y controlada, permitiendo que la leche se integre lentamente con el espresso, dando tiempo para dibujar los patrones deseados.'
      },
      {
        question:
          '¿Qué representa típicamente el contraste de color blanco y marrón en latte art de etching?',
        options: [
          'Temperatura del café',
          'Proporción de leche y espresso',
          'Calidad del grano',
          'Profundidad del dibujo'
        ],
        correct: 1,
        explanation:
          'El contraste entre la leche blanca y el espresso marrón crea los patrones visuales. Los trazos blancos son donde la leche está más cerca de la superficie, los marrón donde está el espresso.'
      }
    ],
    en: [
      {
        question:
          'What is the typical material of the tool used for etching in latte art?',
        options: ['Wood', 'Plastic or bamboo', 'Pure metal', 'Glass'],
        correct: 1,
        explanation:
          'Etching tools are typically bamboo or plastic, thin and pointed to avoid damaging the cup or scratching the milk without control.'
      },
      {
        question:
          'What is the ideal speed of milk pouring to allow etching control?',
        options: [
          'Very fast',
          'Moderate and controlled',
          'Very slow',
          'Depends on the design'
        ],
        correct: 1,
        explanation:
          'The speed should be moderate and controlled, allowing the milk to integrate slowly with the espresso, giving time to draw the desired patterns.'
      },
      {
        question:
          'What does the white and brown color contrast typically represent in latte art etching?',
        options: [
          'Coffee temperature',
          'Ratio of milk and espresso',
          'Bean quality',
          'Drawing depth'
        ],
        correct: 1,
        explanation:
          'The contrast between white milk and brown espresso creates the visual patterns. White strokes are where milk is closer to the surface, brown where espresso is.'
      }
    ]
  },
  'roadmap-6-1-reacciones-quimicas-tueste': {
    es: [
      {
        question:
          '¿Cuál es la reacción química principal responsable de los sabores oscuros en un tueste oscuro?',
        options: [
          'Reacción de Maillard',
          'Caramelización',
          'Reacción de Strecker',
          'Todas las anteriores'
        ],
        correct: 3,
        explanation:
          'Todas estas reacciones ocurren durante el tueste. La Maillard crea sabores complejos, la caramelización añade dulzura/amargura, y la de Strecker crea aromas sulfurosos.'
      },
      {
        question:
          '¿A qué temperatura ocurre típicamente el "primer crack" (primer craquido)?',
        options: ['150-160°C', '180-190°C', '200-210°C', '220-230°C'],
        correct: 1,
        explanation:
          'El primer crack ocurre típicamente a 180-190°C. Es causado por la expansión de vapor dentro del grano, marcando la transición a tueste medio.'
      },
      {
        question:
          '¿Cuál es el producto gaseoso principal que genera el café durante el tueste?',
        options: [
          'Oxígeno',
          'Dióxido de carbono',
          'Nitrógeno',
          'Vapor de agua'
        ],
        correct: 1,
        explanation:
          'El dióxido de carbono (CO2) es el principal producto gaseoso, generado especialmente después del primer crack. Este es el gas que crea la crema en espresso.'
      }
    ],
    en: [
      {
        question:
          'What is the main chemical reaction responsible for dark flavors in a dark roast?',
        options: [
          'Maillard reaction',
          'Caramelization',
          'Strecker reaction',
          'All of the above'
        ],
        correct: 3,
        explanation:
          'All these reactions occur during roasting. Maillard creates complex flavors, caramelization adds sweetness/bitterness, and Strecker creates sulfurous aromas.'
      },
      {
        question: 'At what temperature does the "first crack" typically occur?',
        options: ['150-160°C', '180-190°C', '200-210°C', '220-230°C'],
        correct: 1,
        explanation:
          'The first crack typically occurs at 180-190°C. It is caused by the expansion of vapor inside the bean, marking the transition to medium roast.'
      },
      {
        question:
          'What is the main gaseous product generated by coffee during roasting?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Water vapor'],
        correct: 1,
        explanation:
          'Carbon dioxide (CO2) is the main gaseous product, generated especially after the first crack. This is the gas that creates crema in espresso.'
      }
    ]
  },
  'roadmap-6-2-curva-tueste-ror': {
    es: [
      {
        question:
          '¿Qué representa el "Rate of Rise" (RoR) en una curva de tueste?',
        options: [
          'La velocidad a la que aumenta la temperatura',
          'La presión dentro del rotor',
          'La cantidad de grano',
          'El color final'
        ],
        correct: 0,
        explanation:
          'RoR (Rate of Rise) es la velocidad a la que aumenta la temperatura en °C por minuto. Una curva RoR descendente es típica y deseada en la mayoría de tuestes.'
      },
      {
        question:
          '¿Cuál es el rango típico de RoR (velocidad de aumento) durante el desarrollo del tueste medio?',
        options: ['10-12°C/min', '8-10°C/min', '5-8°C/min', '2-4°C/min'],
        correct: 2,
        explanation:
          'Durante el desarrollo (después del primer crack), el RoR típico es 5-8°C/min. Un RoR más bajo permite mejor desarrollo de sabor; más alto puede resultar en café amargo.'
      },
      {
        question:
          '¿Qué indica un aumento en RoR justo después del primer crack?',
        options: [
          'Café perfectamente tostado',
          'El grano libera energía y calor rápidamente',
          'Mala calibración del rotor',
          'Temperatura del aire baja'
        ],
        correct: 1,
        explanation:
          'Después del primer crack, el RoR típicamente aumenta (el grano libera calor), luego disminuye durante el desarrollo. Este patrón es normal e importante de controlar.'
      }
    ],
    en: [
      {
        question: 'What does "Rate of Rise" (RoR) represent in a roast curve?',
        options: [
          'The speed at which temperature increases',
          'The pressure inside the roaster',
          'The amount of beans',
          'The final color'
        ],
        correct: 0,
        explanation:
          'RoR (Rate of Rise) is the speed at which temperature increases in °C per minute. A declining RoR curve is typical and desired in most roasts.'
      },
      {
        question:
          'What is the typical RoR range (speed of increase) during medium roast development?',
        options: ['10-12°C/min', '8-10°C/min', '5-8°C/min', '2-4°C/min'],
        correct: 2,
        explanation:
          'During development (after first crack), typical RoR is 5-8°C/min. A lower RoR allows better flavor development; higher can result in bitter coffee.'
      },
      {
        question:
          'What does an increase in RoR just after the first crack indicate?',
        options: [
          'Perfectly roasted coffee',
          'The bean releases energy and heat rapidly',
          'Poor roaster calibration',
          'Low air temperature'
        ],
        correct: 1,
        explanation:
          'After the first crack, RoR typically increases (the bean releases heat), then decreases during development. This pattern is normal and important to control.'
      }
    ]
  },
  'roadmap-6-3-cadena-suministro-cafe-verde': {
    es: [
      {
        question:
          '¿Cuál es la humedad típica del café verde (green coffee) importado?',
        options: ['8-9%', '10-12%', '12-14%', '15-17%'],
        correct: 2,
        explanation:
          'El café verde importado típicamente tiene 12-14% de humedad. Esta humedad es importante para mantener la estabilidad durante el almacenamiento y transporte.'
      },
      {
        question:
          '¿Cuáles son los principales actores en la cadena de suministro de café verde?',
        options: [
          'Solo productores',
          'Productores, exportadores, importadores y tostadores',
          'Solo intermediarios',
          'Solo distribuidores'
        ],
        correct: 1,
        explanation:
          'La cadena incluye productores, cooperativas/exportadores, brokers, importadores, y finalmente tostadores. Cada paso agrega valor y control de calidad.'
      },
      {
        question:
          '¿Qué significa "traza verde" (green traceability) en café de especialidad?',
        options: [
          'Color del café verde',
          'Capacidad de rastrear el origen exacto del café',
          'Marca de fábrica',
          'Tipo de empaque'
        ],
        correct: 1,
        explanation:
          'La traceabilidad verde significa poder rastrear el café desde la finca específica hasta el tostador, asegurando autenticidad, calidad y prácticas sostenibles.'
      }
    ],
    en: [
      {
        question:
          'What is the typical moisture content of imported green coffee?',
        options: ['8-9%', '10-12%', '12-14%', '15-17%'],
        correct: 2,
        explanation:
          'Imported green coffee typically has 12-14% moisture content. This moisture is important for maintaining stability during storage and transport.'
      },
      {
        question: 'What are the main actors in the green coffee supply chain?',
        options: [
          'Producers only',
          'Producers, exporters, importers, and roasters',
          'Intermediaries only',
          'Distributors only'
        ],
        correct: 1,
        explanation:
          'The chain includes producers, cooperatives/exporters, brokers, importers, and finally roasters. Each step adds value and quality control.'
      },
      {
        question: 'What does "green traceability" mean in specialty coffee?',
        options: [
          'Color of green coffee',
          'Ability to trace the exact origin of the coffee',
          'Factory brand',
          'Type of packaging'
        ],
        correct: 1,
        explanation:
          'Green traceability means being able to trace coffee from the specific farm to the roaster, ensuring authenticity, quality, and sustainable practices.'
      }
    ]
  },
  'roadmap-6-4-abrir-cafeteria-negocio': {
    es: [
      {
        question:
          '¿Cuáles son los tres elementos fundamentales para abrir una cafetería exitosa?',
        options: [
          'Dinero, ubicación y máquinas',
          'Ubicación, producto de calidad y servicio excepcional',
          'Solo máquinas buenas',
          'Mucho capital inicial'
        ],
        correct: 1,
        explanation:
          'El éxito requiere: 1) Ubicación adecuada (flujo de clientes), 2) Producto de calidad consistente, 3) Servicio y experiencia excepcional que genere lealtad.'
      },
      {
        question:
          '¿Cuál es el margen de ganancia típico en una cafetería especializada?',
        options: ['10-15%', '20-30%', '40-50%', '60-70%'],
        correct: 2,
        explanation:
          'El margen típico es 40-50% después de costos (grano, leche, labor, alquiler). Esto permite reinvertir, mejorar, y mantener sostenibilidad del negocio.'
      },
      {
        question:
          '¿Qué tipo de capacitación es más importante para el personal de una cafetería?',
        options: [
          'Solo máquinas',
          'Conocimiento del café, técnica barista, y servicio al cliente',
          'Solo contabilidad',
          'Marketing digital'
        ],
        correct: 1,
        explanation:
          'El personal bien entrenado en café, técnica de barista y servicio distingue una cafetería especializada. Esto es más importante que cualquier otra cosa para la experiencia del cliente.'
      }
    ],
    en: [
      {
        question:
          'What are the three fundamental elements to open a successful café?',
        options: [
          'Money, location, and machines',
          'Location, quality product, and exceptional service',
          'Good machines only',
          'Large initial capital'
        ],
        correct: 1,
        explanation:
          'Success requires: 1) Proper location (customer flow), 2) Consistent quality product, 3) Exceptional service and experience that builds loyalty.'
      },
      {
        question: 'What is the typical profit margin in a specialty café?',
        options: ['10-15%', '20-30%', '40-50%', '60-70%'],
        correct: 2,
        explanation:
          'The typical margin is 40-50% after costs (beans, milk, labor, rent). This allows reinvestment, improvement, and maintaining business sustainability.'
      },
      {
        question: 'What type of training is most important for café staff?',
        options: [
          'Machines only',
          'Coffee knowledge, barista technique, and customer service',
          'Accounting only',
          'Digital marketing'
        ],
        correct: 1,
        explanation:
          'Well-trained staff in coffee, barista technique, and service distinguishes a specialty café. This is more important than anything else for customer experience.'
      }
    ]
  },
  'roadmap-7-1-grooming-distribucion-avanzada': {
    es: [
      {
        question:
          '¿Qué es el "grooming" (acicalamiento) en el contexto de espresso?',
        options: [
          'Limpiar la máquina',
          'Preparar y distribuir el café molido uniformemente en el portafiltro',
          'Aumentar la presión',
          'Cambiar filtros'
        ],
        correct: 1,
        explanation:
          'El grooming es la preparación meticulosa del café molido en el portafiltro, distribuyéndolo uniformemente para eliminar canalización y mejorar la extracción.'
      },
      {
        question:
          '¿Cuál es la herramienta más común para realizar distribución y grooming?',
        options: [
          'Cucharilla',
          'WDT (Weiss Distribution Technique) o distribuidores especializados',
          'Dedo',
          'Pañuelo'
        ],
        correct: 1,
        explanation:
          'El WDT usa un utensilio delgado para separar particulas aglomeradas, y los distribuidores especializados compactan uniformemente. Ambos mejoran la extracción.'
      },
      {
        question: '¿Qué efecto tiene una distribución pobre en el espresso?',
        options: [
          'Mejora la crema',
          'Causa canalización e inconsistencia de sabor',
          'Aumenta la dulzura',
          'Reduce el tiempo de extracción'
        ],
        correct: 1,
        explanation:
          'Una distribución pobre causa canalización, donde el agua encuentra caminos de menor resistencia, resultando en extracción desigual y sabor inconsistente.'
      }
    ],
    en: [
      {
        question: 'What is "grooming" in the context of espresso?',
        options: [
          'Cleaning the machine',
          'Preparing and distributing ground coffee uniformly in the portafilter',
          'Increasing pressure',
          'Changing filters'
        ],
        correct: 1,
        explanation:
          'Grooming is the meticulous preparation of ground coffee in the portafilter, distributing it uniformly to eliminate channeling and improve extraction.'
      },
      {
        question: 'What is the most common tool for distribution and grooming?',
        options: [
          'Teaspoon',
          'WDT (Weiss Distribution Technique) or specialized distributors',
          'Finger',
          'Cloth'
        ],
        correct: 1,
        explanation:
          'WDT uses a thin utensil to separate agglomerated particles, and specialized distributors compact uniformly. Both improve extraction.'
      },
      {
        question: 'What effect does poor distribution have on espresso?',
        options: [
          'Improves crema',
          'Causes channeling and flavor inconsistency',
          'Increases sweetness',
          'Reduces extraction time'
        ],
        correct: 1,
        explanation:
          'Poor distribution causes channeling, where water finds paths of less resistance, resulting in uneven extraction and inconsistent flavor.'
      }
    ]
  },
  'roadmap-7-2-pressure-profiling': {
    es: [
      {
        question:
          '¿Qué es "pressure profiling" (perfil de presión) en máquinas de espresso?',
        options: [
          'Aumentar la presión uniformemente',
          'Variar la presión durante la extracción para optimizar el sabor',
          'Reducir la presión constantemente',
          'Medición de presión'
        ],
        correct: 1,
        explanation:
          'Pressure profiling permite cambiar la presión durante la extracción (ej: empezar bajo para pre-infusión, luego aumentar). Esto optimiza sabor y control.'
      },
      {
        question:
          '¿Cuál es un beneficio del "low-pressure pre-infusion" (pre-infusión a baja presión)?',
        options: [
          'Reduce el tiempo total',
          'Permite que el agua se distribuya uniformemente antes de la presión plena',
          'Reduce la crema',
          'Aumenta la amargura'
        ],
        correct: 1,
        explanation:
          'La pre-infusión a baja presión (2-3 bares) permite que el agua sature uniformemente el puck antes de aumentar a 9 bares, mejorando la extracción.'
      },
      {
        question: '¿Cuáles son los tres perfiles de presión más comunes?',
        options: [
          'Normal, rápido, lento',
          'Progresivo, constante, decreciente',
          'Alto, medio, bajo',
          'Temprano, medio, tarde'
        ],
        correct: 1,
        explanation:
          'Los tres perfiles comunes son: progresivo (aumenta gradualmente), constante (9 bares todo el tiempo), y decreciente (comienza en 9 y baja al final).'
      }
    ],
    en: [
      {
        question: 'What is "pressure profiling" in espresso machines?',
        options: [
          'Increasing pressure uniformly',
          'Varying pressure during extraction to optimize flavor',
          'Constantly reducing pressure',
          'Pressure measurement'
        ],
        correct: 1,
        explanation:
          'Pressure profiling allows changing pressure during extraction (e.g., start low for pre-infusion, then increase). This optimizes flavor and control.'
      },
      {
        question: 'What is a benefit of "low-pressure pre-infusion"?',
        options: [
          'Reduces total time',
          'Allows water to distribute uniformly before full pressure',
          'Reduces crema',
          'Increases bitterness'
        ],
        correct: 1,
        explanation:
          'Low-pressure pre-infusion (2-3 bars) allows water to saturate the puck uniformly before increasing to 9 bars, improving extraction.'
      },
      {
        question: 'What are the three most common pressure profiles?',
        options: [
          'Normal, fast, slow',
          'Progressive, constant, declining',
          'High, medium, low',
          'Early, middle, late'
        ],
        correct: 1,
        explanation:
          'The three common profiles are: progressive (gradually increases), constant (9 bars all the time), and declining (starts at 9 and decreases at the end).'
      }
    ]
  },
  'roadmap-7-3-refractometro-tds': {
    es: [
      {
        question: '¿Qué mide un refractómetro en el contexto del café?',
        options: [
          'Temperatura del café',
          'TDS (Sólidos Disueltos Totales) - porcentaje de extracción',
          'Presión del espresso',
          'Color del café'
        ],
        correct: 1,
        explanation:
          'Un refractómetro mide TDS (Total Dissolved Solids), el porcentaje de sólidos disueltos en el líquido, que indica directamente el porcentaje de extracción.'
      },
      {
        question: '¿Cuál es el rango ideal de TDS para espresso?',
        options: ['8-10%', '10-12%', '12-14%', '14-16%'],
        correct: 2,
        explanation:
          'El rango ideal de TDS para espresso es 12-14%, lo que corresponde a una extracción del 18-22%. Esto asegura equilibrio entre concentración y sabor.'
      },
      {
        question:
          '¿Cómo se utiliza el refractómetro para ajustar la extracción?',
        options: [
          'Midiendo la temperatura',
          'Midiendo TDS para verificar si la extracción está dentro del rango óptimo',
          'Contando burbujas',
          'Midiendo el color'
        ],
        correct: 1,
        explanation:
          'Se mide el TDS del espresso. Si es bajo (<12%), la extracción es incompleta (aumentar molienda fina). Si es alto (>14%), es sobreextracción (molienda gruesa).'
      }
    ],
    en: [
      {
        question: 'What does a refractometer measure in the context of coffee?',
        options: [
          'Temperature of coffee',
          'TDS (Total Dissolved Solids) - extraction percentage',
          'Espresso pressure',
          'Coffee color'
        ],
        correct: 1,
        explanation:
          'A refractometer measures TDS (Total Dissolved Solids), the percentage of dissolved solids in the liquid, which directly indicates the extraction percentage.'
      },
      {
        question: 'What is the ideal TDS range for espresso?',
        options: ['8-10%', '10-12%', '12-14%', '14-16%'],
        correct: 2,
        explanation:
          'The ideal TDS range for espresso is 12-14%, which corresponds to an extraction of 18-22%. This ensures balance between concentration and flavor.'
      },
      {
        question: 'How is the refractometer used to adjust extraction?',
        options: [
          'By measuring temperature',
          'By measuring TDS to verify extraction is in optimal range',
          'By counting bubbles',
          'By measuring color'
        ],
        correct: 1,
        explanation:
          'The TDS of the espresso is measured. If low (<12%), extraction is incomplete (use finer grind). If high (>14%), it is overextraction (use coarser grind).'
      }
    ]
  },
  'roadmap-7-4-brewing-mathematics-rao-spin': {
    es: [
      {
        question:
          '¿Cuál es el principio físico detrás del "Rao Spin" en métodos de filtro?',
        options: [
          'Aumentar la temperatura',
          'Crear un movimiento de remolino que mejora la distribución de agua',
          'Aumentar la cantidad de café',
          'Reducir la altitud'
        ],
        correct: 1,
        explanation:
          'El Rao Spin crea un movimiento rotativo que mejora la distribución de agua a través del café molido, logrando una extracción más uniforme y controlada.'
      },
      {
        question:
          '¿Cómo se relaciona la ecuación de Darcy con la extracción de café?',
        options: [
          'No se relacionan',
          'Describe cómo el flujo de agua depende de la permeabilidad y la presión',
          'Solo mide la temperatura',
          'Mide el sabor'
        ],
        correct: 1,
        explanation:
          'La Ley de Darcy (Q = KA∆P/L) describe cómo el flujo de agua a través del café depende de la permeabilidad, área, diferencia de presión y espesor.'
      },
      {
        question:
          '¿Qué es el "número de Peclet" en el contexto de la extracción de café?',
        options: [
          'Medida de temperatura',
          'Relación entre convección y difusión en la extracción',
          'Proporción de agua y café',
          'Tipo de grano'
        ],
        correct: 1,
        explanation:
          'El número de Peclet es la relación entre transporte por convección (flujo) y difusión molecular. Un Peclet alto en métodos de filtro afecta la uniformidad.'
      }
    ],
    en: [
      {
        question:
          'What is the physical principle behind the "Rao Spin" in filter methods?',
        options: [
          'Increase temperature',
          'Create a swirling motion that improves water distribution',
          'Increase amount of coffee',
          'Reduce altitude'
        ],
        correct: 1,
        explanation:
          'The Rao Spin creates a rotative motion that improves water distribution through ground coffee, achieving more uniform and controlled extraction.'
      },
      {
        question: "How does Darcy's equation relate to coffee extraction?",
        options: [
          "It doesn't",
          'Describes how water flow depends on permeability and pressure',
          'Only measures temperature',
          'Measures flavor'
        ],
        correct: 1,
        explanation:
          "Darcy's Law (Q = KA∆P/L) describes how water flow through coffee depends on permeability, area, pressure difference, and thickness."
      },
      {
        question:
          'What is the "Peclet number" in the context of coffee extraction?',
        options: [
          'Measure of temperature',
          'Ratio of convection to diffusion in extraction',
          'Ratio of water and coffee',
          'Type of bean'
        ],
        correct: 1,
        explanation:
          'The Peclet number is the ratio between convective transport (flow) and molecular diffusion. A high Peclet in filter methods affects uniformity.'
      }
    ]
  },
  'roadmap-8-1-fisica-de-la-molienda': {
    es: [
      {
        question:
          '¿Cuál es el resultado ideal de la molienda en términos de distribución de tamaño de partícula?',
        options: [
          'Todas las partículas del mismo tamaño',
          'Distribución bimodal (dos picos de tamaño)',
          'Amplio rango de tamaños para exposición superficial',
          'Partículas muy grandes'
        ],
        correct: 1,
        explanation:
          'Una distribución bimodal (con dos picos) es ideal: finas para rápida extracción, gruesas para crear porosidad. Esto mejora la uniformidad de la extracción.'
      },
      {
        question:
          '¿Qué efecto tiene reducir el tamaño de partícula a la mitad?',
        options: [
          'Reduce área superficial a la mitad',
          'Aumenta área superficial 4 veces',
          'No hay cambio significativo',
          'Reduce la extracción'
        ],
        correct: 1,
        explanation:
          'Reducir el tamaño a la mitad aumenta el área superficial 4 veces (relación cuadrada), acelerando significativamente la velocidad de extracción.'
      },
      {
        question:
          '¿Cuáles son los dos tipos principales de molinillos según su mecanismo?',
        options: [
          'Cónicos y cilíndricos',
          'Planos y cónicos',
          'Eléctricos y manuales',
          'Rápidos y lentos'
        ],
        correct: 1,
        explanation:
          'Los dos tipos principales son molinillos de discos planos y de conos cónicos. Los cónicos son mejor para espresso, los planos para métodos de filtro.'
      }
    ],
    en: [
      {
        question:
          'What is the ideal result of grinding in terms of particle size distribution?',
        options: [
          'All particles same size',
          'Bimodal distribution (two size peaks)',
          'Wide range of sizes for surface exposure',
          'Very large particles'
        ],
        correct: 1,
        explanation:
          'A bimodal distribution (with two peaks) is ideal: fine for rapid extraction, coarse for creating porosity. This improves extraction uniformity.'
      },
      {
        question: 'What effect does reducing particle size by half have?',
        options: [
          'Reduces surface area by half',
          'Increases surface area 4 times',
          'No significant change',
          'Reduces extraction'
        ],
        correct: 1,
        explanation:
          'Reducing size by half increases surface area 4 times (square relationship), significantly accelerating extraction velocity.'
      },
      {
        question: 'What are the two main types of grinders by their mechanism?',
        options: [
          'Conical and cylindrical',
          'Flat and conical',
          'Electric and manual',
          'Fast and slow'
        ],
        correct: 1,
        explanation:
          'The two main types are flat disk and conical burr grinders. Conical are better for espresso, flat for filter methods.'
      }
    ]
  },
  'roadmap-8-2-percolacion-ley-de-darcy': {
    es: [
      {
        question:
          '¿Cuál es la ecuación de la Ley de Darcy para flujo a través del café?',
        options: ['Q = KA∆P/L', 'Q = mv²/2', 'P = ρgh', 'F = ma'],
        correct: 0,
        explanation:
          'La Ley de Darcy: Q = KA∆P/L, donde Q es caudal, K es permeabilidad, A es área, ∆P es diferencia de presión, y L es espesor del lecho de café.'
      },
      {
        question:
          '¿Qué variable en la Ley de Darcy es más importante para controlar el flujo en un espresso?',
        options: [
          'Área (A)',
          'Permeabilidad (K)',
          'Diferencia de presión (∆P)',
          'Todas son igualmente importantes'
        ],
        correct: 1,
        explanation:
          'La permeabilidad (K) es crítica y está determinada por el tamaño de grano y la distribución. Cambiar el molido cambia K más que ajustar presión o área.'
      },
      {
        question:
          '¿Cómo cambia la permeabilidad si las partículas se empaquetan más densamente?',
        options: [
          'Aumenta',
          'Disminuye',
          'No cambia',
          'Solo cambia con presión'
        ],
        correct: 1,
        explanation:
          'Un empaquetamiento más denso reduce la permeabilidad, ralentizando el flujo de agua. Este es un factor crítico en el "dial-in" del espresso.'
      }
    ],
    en: [
      {
        question:
          "What is the equation of Darcy's Law for flow through coffee?",
        options: ['Q = KA∆P/L', 'Q = mv²/2', 'P = ρgh', 'F = ma'],
        correct: 0,
        explanation:
          "Darcy's Law: Q = KA∆P/L, where Q is flow rate, K is permeability, A is area, ∆P is pressure difference, and L is coffee bed thickness."
      },
      {
        question:
          "Which variable in Darcy's Law is most important for controlling flow in an espresso?",
        options: [
          'Area (A)',
          'Permeability (K)',
          'Pressure difference (∆P)',
          'All are equally important'
        ],
        correct: 1,
        explanation:
          'Permeability (K) is critical and is determined by grind size and distribution. Changing the grind changes K more than adjusting pressure or area.'
      },
      {
        question:
          'How does permeability change if particles are packed more densely?',
        options: [
          'Increases',
          'Decreases',
          'Does not change',
          'Only changes with pressure'
        ],
        correct: 1,
        explanation:
          'Denser packing reduces permeability, slowing water flow. This is a critical factor in espresso dial-in.'
      }
    ]
  },
  'roadmap-8-3-geometria-drippers-filtros': {
    es: [
      {
        question: '¿Cómo afecta la geometría del dripper al flujo de agua?',
        options: [
          'No afecta',
          'Ángulos y costillas controlan velocidad y distribución del flujo',
          'Solo afecta el color',
          'Solo afecta la temperatura'
        ],
        correct: 1,
        explanation:
          'La geometría (ángulos de las paredes, costillas) controla cómo el agua fluye a través del café y las características del flujo (laminar vs turbulento).'
      },
      {
        question:
          '¿Cuál es la diferencia principal entre un V60 (60°) y un Chemex en términos de geometría?',
        options: [
          'Ambos tienen el mismo ángulo',
          'V60 tiene 60°, Chemex es más amplio con paredes planas',
          'Chemex es más estrecho',
          'No hay diferencia'
        ],
        correct: 1,
        explanation:
          'V60 tiene paredes a 60° (flujo más rápido), mientras que Chemex tiene paredes más planas (flujo más lento), afectando significativamente el tiempo de extracción.'
      },
      {
        question:
          '¿Qué es "flujo laminar" vs "flujo turbulento" en la percolación?',
        options: [
          'Lo mismo',
          'Laminar: capas suaves; turbulento: mezcla caótica',
          'Laminar es más rápido',
          'Turbulento es más lento'
        ],
        correct: 1,
        explanation:
          'Flujo laminar: agua fluye en capas paralelas (menos mezcla); turbulento: caótico con remolinos (mejor mezcla). La geometría determina cuál predomina.'
      }
    ],
    en: [
      {
        question: 'How does dripper geometry affect water flow?',
        options: [
          "It doesn't",
          'Angles and ribs control flow speed and distribution',
          'Only affects color',
          'Only affects temperature'
        ],
        correct: 1,
        explanation:
          'Geometry (wall angles, ribs) controls how water flows through the coffee and flow characteristics (laminar vs turbulent).'
      },
      {
        question:
          'What is the main geometric difference between a V60 (60°) and a Chemex?',
        options: [
          'Both have same angle',
          'V60 has 60°, Chemex is wider with flat walls',
          'Chemex is narrower',
          'No difference'
        ],
        correct: 1,
        explanation:
          'V60 has 60° walls (faster flow), while Chemex has flatter walls (slower flow), significantly affecting extraction time.'
      },
      {
        question: 'What is "laminar flow" vs "turbulent flow" in percolation?',
        options: [
          'The same',
          'Laminar: smooth layers; turbulent: chaotic mixing',
          'Laminar is faster',
          'Turbulent is slower'
        ],
        correct: 1,
        explanation:
          'Laminar flow: water flows in parallel layers (less mixing); turbulent: chaotic with eddies (better mixing). Geometry determines which predominates.'
      }
    ]
  },
  'roadmap-8-4-dinamica-puck-flow-profiling': {
    es: [
      {
        question: '¿Qué es el "puck" en una máquina de espresso?',
        options: [
          'Una taza pequeña',
          'El disco de café compactado en el portafiltro',
          'Un tipo de máquina',
          'Una técnica de vertido'
        ],
        correct: 1,
        explanation:
          'El puck es el disco compactado de café molido dentro del portafiltro. Su densidad, distribución y compactación son críticos para la extracción uniforme.'
      },
      {
        question: '¿Qué causa típicamente la "canalización" dentro del puck?',
        options: [
          'Presión alta',
          'Distribución desigual o presión insuficiente en algunas áreas',
          'Temperatura baja',
          'Agua limpia'
        ],
        correct: 1,
        explanation:
          'La canalización ocurre cuando hay áreas débiles o mal distribuidas en el puck, permitiendo que el agua encuentre caminos de menor resistencia.'
      },
      {
        question:
          '¿Cómo se relaciona el "puck prep" (preparación del puck) con la calidad de la extracción?',
        options: [
          'No se relacionan',
          'Una preparación adecuada previene canalización y asegura extracción uniforme',
          'Solo afecta la crema',
          'Afecta la velocidad solamente'
        ],
        correct: 1,
        explanation:
          'La preparación correcta del puck (distribución, compactación uniforme) es fundamental para asegurar que el agua fluya uniformemente a través de todo el café.'
      }
    ],
    en: [
      {
        question: 'What is the "puck" in an espresso machine?',
        options: [
          'A small cup',
          'The compacted disk of ground coffee in the portafilter',
          'A type of machine',
          'A pouring technique'
        ],
        correct: 1,
        explanation:
          'The puck is the compacted disk of ground coffee in the portafilter. Its density, distribution, and compaction are critical for uniform extraction.'
      },
      {
        question: 'What typically causes "channeling" within the puck?',
        options: [
          'High pressure',
          'Uneven distribution or insufficient pressure in some areas',
          'Low temperature',
          'Clean water'
        ],
        correct: 1,
        explanation:
          'Channeling occurs when there are weak or poorly distributed areas in the puck, allowing water to find paths of less resistance.'
      },
      {
        question:
          'How does "puck prep" (puck preparation) relate to extraction quality?',
        options: [
          'No relation',
          'Proper preparation prevents channeling and ensures uniform extraction',
          'Only affects crema',
          'Only affects speed'
        ],
        correct: 1,
        explanation:
          'Correct puck preparation (distribution, uniform compaction) is fundamental to ensuring water flows evenly through all the coffee.'
      }
    ]
  },
  'roadmap-9-1-gestion-cafeteria-especialidad': {
    es: [
      {
        question:
          '¿Cuáles son los tres pilares principales de la gestión de una cafetería de especialidad?',
        options: [
          'Dinero, máquinas, clientes',
          'Operaciones, personas y experiencia del cliente',
          'Solo ubicación',
          'Solo producto'
        ],
        correct: 1,
        explanation:
          'Los tres pilares son: 1) Operaciones eficientes (procesos, consistencia), 2) Personas (capacitación, cultura), 3) Experiencia del cliente (servicio, comunidad).'
      },
      {
        question:
          '¿Cuál es el indicador clave de desempeño (KPI) más importante en una cafetería?',
        options: [
          'Ingresos totales',
          'Costo del grano',
          'Satisfacción del cliente y retención',
          'Cantidad de máquinas'
        ],
        correct: 2,
        explanation:
          'La satisfacción y retención del cliente es el KPI más importante, ya que genera ingresos recurrentes, referencias y comunidad leal.'
      },
      {
        question:
          '¿Qué componente del costo operativo es típicamente el más alto en una cafetería?',
        options: [
          'Grano de café',
          'Alquiler/ubicación',
          'Trabajo (personal)',
          'Máquinas'
        ],
        correct: 2,
        explanation:
          'El costo de trabajo (personal) es típicamente el mayor (30-40% de ingresos), seguido por alquiler (15-20%) y grano (15-20%).'
      }
    ],
    en: [
      {
        question:
          'What are the three main pillars of managing a specialty café?',
        options: [
          'Money, machines, customers',
          'Operations, people, and customer experience',
          'Location only',
          'Product only'
        ],
        correct: 1,
        explanation:
          'The three pillars are: 1) Efficient operations (processes, consistency), 2) People (training, culture), 3) Customer experience (service, community).'
      },
      {
        question:
          'What is the most important Key Performance Indicator (KPI) in a café?',
        options: [
          'Total revenue',
          'Cost of beans',
          'Customer satisfaction and retention',
          'Number of machines'
        ],
        correct: 2,
        explanation:
          'Customer satisfaction and retention is the most important KPI, as it generates recurring revenue, referrals, and loyal community.'
      },
      {
        question:
          'What operating cost component is typically the highest in a café?',
        options: ['Coffee beans', 'Rent/location', 'Labor (staff)', 'Machines'],
        correct: 2,
        explanation:
          'Labor costs are typically the highest (30-40% of revenue), followed by rent (15-20%) and beans (15-20%).'
      }
    ]
  },
  'roadmap-9-2-barismo-competitivo-wbc': {
    es: [
      {
        question: '¿Qué significa WBC?',
        options: [
          'World Best Coffee',
          'World Barista Championship',
          'Worldwide Brewing Code',
          'World Business Coffee'
        ],
        correct: 1,
        explanation:
          'WBC son las siglas de World Barista Championship, la competencia internacional anual más prestigiosa de barismo, reconocida por la Specialty Coffee Association.'
      },
      {
        question:
          '¿Cuál es la duración típica de una rutina de competencia en WBC?',
        options: ['5 minutos', '15 minutos', '30 minutos', '60 minutos'],
        correct: 2,
        explanation:
          'Una rutina de WBC dura típicamente 15 minutos, durante los cuales el barista prepara 4 bebidas específicas (espresso, cappuccino, espresso libre) para jueces.'
      },
      {
        question:
          '¿Cuáles son los cuatro componentes principales evaluados en WBC?',
        options: [
          'Velocidad, tamaño, sabor',
          'Técnica espresso, bebidas de leche, bebida libre, comunicación',
          'Solo sabor y temperatura',
          'Decoración y apariencia'
        ],
        correct: 1,
        explanation:
          'WBC evalúa: 1) Técnica y consistencia en espresso, 2) Bebidas de leche (cappuccino, flat white), 3) Bebida libre creativa, 4) Comunicación y presentación.'
      }
    ],
    en: [
      {
        question: 'What does WBC stand for?',
        options: [
          'World Best Coffee',
          'World Barista Championship',
          'Worldwide Brewing Code',
          'World Business Coffee'
        ],
        correct: 1,
        explanation:
          'WBC stands for World Barista Championship, the most prestigious annual international barista competition, recognized by the Specialty Coffee Association.'
      },
      {
        question: 'What is the typical duration of a WBC competition routine?',
        options: ['5 minutes', '15 minutes', '30 minutes', '60 minutes'],
        correct: 2,
        explanation:
          'A WBC routine typically lasts 15 minutes, during which the barista prepares 4 specific drinks (espresso, cappuccino, signature drink) for judges.'
      },
      {
        question: 'What are the four main components evaluated in WBC?',
        options: [
          'Speed, size, flavor',
          'Espresso technique, milk drinks, signature drink, communication',
          'Only flavor and temperature',
          'Decoration and appearance'
        ],
        correct: 1,
        explanation:
          'WBC evaluates: 1) Espresso technique and consistency, 2) Milk drinks (cappuccino, flat white), 3) Creative signature drink, 4) Communication and presentation.'
      }
    ]
  },
  'roadmap-9-3-certificacion-q-grader': {
    es: [
      {
        question: '¿Qué es un Q Grader (Q-Grader)?',
        options: [
          'Un barista competidor',
          'Un profesional certificado en evaluación sensorial y calidad del café',
          'Una máquina de espresso',
          'Un tipo de grano'
        ],
        correct: 1,
        explanation:
          'Un Q Grader es un profesional certificado internacionalmente por el Coffee Quality Institute (CQI) especializado en catación y evaluación de calidad del café.'
      },
      {
        question:
          '¿Cuál es el requisito principal para aplicar a la certificación Q Grader?',
        options: [
          'Tener 5 años en el café',
          'Pasar una prueba de sensibilidad olfativa y gustativa',
          'Ser barista competidor',
          'Hablar inglés'
        ],
        correct: 1,
        explanation:
          'Antes de la certificación formal, los candidatos deben pasar una prueba de sensibilidad olfativa y gustativa para verificar que pueden distinguir diferentes sabores.'
      },
      {
        question:
          '¿En cuántas áreas de especialidad puede certificarse un Q Grader?',
        options: [
          'Solo una',
          'Dos: Arábica y Robusta',
          'Tres: Arábica, Robusta, y Espresso',
          'Cuatro o más'
        ],
        correct: 1,
        explanation:
          'Un Q Grader puede certificarse en dos áreas principales: Arábica y Robusta, cada una con su propio proceso de evaluación y protocolo.'
      }
    ],
    en: [
      {
        question: 'What is a Q Grader (Q-Grader)?',
        options: [
          'A competitive barista',
          'An internationally certified professional in sensory evaluation and coffee quality',
          'An espresso machine',
          'A type of bean'
        ],
        correct: 1,
        explanation:
          'A Q Grader is an internationally certified professional by the Coffee Quality Institute (CQI) specializing in cupping and coffee quality evaluation.'
      },
      {
        question:
          'What is the main requirement to apply for Q Grader certification?',
        options: [
          'Have 5 years in coffee',
          'Pass a test of olfactory and gustatory sensitivity',
          'Be a competitive barista',
          'Speak English'
        ],
        correct: 1,
        explanation:
          'Before formal certification, candidates must pass a sensory sensitivity test to verify they can distinguish different flavors.'
      },
      {
        question:
          'In how many specialization areas can a Q Grader be certified?',
        options: [
          'Only one',
          'Two: Arabica and Robusta',
          'Three: Arabica, Robusta, and Espresso',
          'Four or more'
        ],
        correct: 1,
        explanation:
          'A Q Grader can be certified in two main areas: Arabica and Robusta, each with its own evaluation process and protocol.'
      }
    ]
  },
  'roadmap-9-4-marca-personal-barista': {
    es: [
      {
        question:
          '¿Qué es "marca personal" (personal brand) en el contexto de ser barista?',
        options: [
          'Un logo personal',
          'La identidad y reputación única que creas como profesional',
          'Un contrato de trabajo',
          'Una máquina de espresso'
        ],
        correct: 1,
        explanation:
          'Marca personal es la identidad y reputación que construyes a través de tu expertise, consistencia, valores y cómo te relacionas con clientes y la comunidad.'
      },
      {
        question:
          '¿Cuáles son los elementos clave para construir una marca personal fuerte como barista?',
        options: [
          'Solo ser rápido',
          'Expertise técnico, consistencia, autenticidad, comunidad y comunicación',
          'Solo tener una buena máquina',
          'Solo tener muchos seguidores'
        ],
        correct: 1,
        explanation:
          'Una marca personal fuerte requiere: expertise técnico (habilidad), consistencia (confiabilidad), autenticidad (ser genuino), comunidad (conexiones), y comunicación.'
      },
      {
        question:
          '¿Qué plataforma es más importante para construir marca personal como barista especializado?',
        options: [
          'TikTok',
          'Instagram',
          'Una comunidad local fuerte y relaciones genuinas',
          'LinkedIn'
        ],
        correct: 2,
        explanation:
          'Aunque las redes sociales ayudan, una marca personal fuerte como barista se construye principalmente a través de comunidad local, clientes leales y relaciones genuinas.'
      }
    ],
    en: [
      {
        question: 'What is "personal brand" in the context of being a barista?',
        options: [
          'A personal logo',
          'The unique identity and reputation you create as a professional',
          'A work contract',
          'An espresso machine'
        ],
        correct: 1,
        explanation:
          'Personal brand is the identity and reputation you build through your expertise, consistency, values, and how you relate to customers and community.'
      },
      {
        question:
          'What are the key elements for building a strong personal brand as a barista?',
        options: [
          'Only being fast',
          'Technical expertise, consistency, authenticity, community, and communication',
          'Only having a good machine',
          'Only having many followers'
        ],
        correct: 1,
        explanation:
          'A strong personal brand requires: technical expertise (skill), consistency (reliability), authenticity (being genuine), community (connections), and communication.'
      },
      {
        question:
          'What platform is most important for building personal brand as a specialty barista?',
        options: [
          'TikTok',
          'Instagram',
          'A strong local community and genuine relationships',
          'LinkedIn'
        ],
        correct: 2,
        explanation:
          'While social media helps, a strong personal brand as a barista is built mainly through local community, loyal customers, and genuine relationships.'
      }
    ]
  }
}
