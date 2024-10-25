const express = require("express");
const { escape } = require("querystring");

const router = express.Router();
const elements = [
   
 
      { id: 1, symbol: "H", name: "Hidrógeno", type: "NoMetal", y: 1, x:1  },

      { id: 2, symbol: "He", name: "Helio", type: "GasNoble", y: 18 , x:1 },

      { id: 3, symbol: "Li", name: "Litio", type: "Alcalino" ,y: 1, x:2},
      { id: 4, symbol: "Be", name: "Berilio", type: "Alcalinotérreo" ,y: 2, x:2},
 
      { id: 5, symbol: "B", name: "Boro", type: "Metaloide" ,y: 13, x:2},
      { id: 6, symbol: "C", name: "Carbono", type: "NoMetal" ,y: 14, x:2},
      { id: 7, symbol: "N", name: "Nitrógeno", type: "NoMetal" ,y: 15, x:2},
      { id: 8, symbol: "O", name: "Oxígeno", type: "NoMetal" ,y: 16, x:2},
      { id: 9, symbol: "F", name: "Flúor", type: "Halógeno" ,y: 17, x:2},
      { id: 10, symbol: "Ne", name: "Neón", type: "GasNoble" ,y: 18, x:2},

      { id: 11, symbol: "Na", name: "Sodio", type: "Alcalino"  ,y: 1, x:3},
      { id: 12, symbol: "Mg", name: "Magnesio", type: "Alcalinotérreo" ,y: 2, x:3},

      { id: 13, symbol: "Al", name: "Aluminio", type: "Metal" ,y: 13, x:3},
      { id: 14, symbol: "Si", name: "Silicio", type: "Metaloide",y: 14, x:3 },
      { id: 15, symbol: "P", name: "Fósforo", type: "NoMetal",y: 15, x:3 },
      { id: 16, symbol: "S", name: "Azufre", type: "NoMetal" ,y: 16, x:3},
      { id: 17, symbol: "Cl", name: "Cloro", type: "Halógeno" ,y: 17, x:3},
      { id: 18, symbol: "Ar", name: "Argón", type: "GasNoble" ,y: 18, x:3},

      { id: 19, symbol: "K", name: "Potasio", type: "Alcalino" ,y: 1, x:4},
      { id: 20, symbol: "Ca", name: "Calcio", type: "Alcalinotérreo" ,y: 2, x:4},
      { id: 21, symbol: "Sc", name: "Escandio", type: "MetalDeTransición" ,y: 3, x:4},
      { id: 22, symbol: "Ti", name: "Titanio", type: "MetalDeTransición" ,y: 4, x:4},
      { id: 23, symbol: "V", name: "Vanadio", type: "MetalDeTransición" ,y: 5, x:4},
      { id: 24, symbol: "Cr", name: "Cromo", type: "MetalDeTransición" ,y: 6, x:4},
      { id: 25, symbol: "Mn", name: "Manganeso", type: "MetalDeTransición" ,y: 7, x:4},
      { id: 26, symbol: "Fe", name: "Hierro", type: "MetalDeTransición" ,y: 8, x:4},
      { id: 27, symbol: "Co", name: "Cobalto", type: "MetalDeTransición" ,y: 9, x:4},
      { id: 28, symbol: "Ni", name: "Níquel", type: "MetalDeTransición" ,y: 10, x:4},
      { id: 29, symbol: "Cu", name: "Cobre", type: "MetalDeTransición" ,y: 11, x:4},
      { id: 30, symbol: "Zn", name: "Zinc", type: "MetalDeTransición" ,y: 12, x:4},
   
      { id: 31, symbol: "Ga", name: "Galio", type: "Metal" ,y: 13, x:4},
      { id: 32, symbol: "Ge", name: "Germanio", type: "Metaloide" ,y: 14, x:4},
      { id: 33, symbol: "As", name: "Arsénico", type: "Metaloide" ,y: 15, x:4},
      { id: 34, symbol: "Se", name: "Selenio", type: "NoMetal" ,y: 16, x:4},
      { id: 35, symbol: "Br", name: "Bromo", type: "Halógeno" ,y: 17, x:4},
      { id: 36, symbol: "Kr", name: "Kriptón", type: "GasNoble" ,y: 18, x:4},
 
      { id: 37, symbol: "Rb", name: "Rubidio", type: "Alcalino" ,y: 1, x:5},
      { id: 38, symbol: "Sr", name: "Estroncio", type: "Alcalinotérreo"  ,y: 2, x:5},
      { id: 39, symbol: "Y", name: "Itrio", type: "MetalDeTransición"  ,y: 3, x:5},
      { id: 40, symbol: "Zr", name: "Circonio", type: "MetalDeTransición"  ,y: 4, x:5},
      { id: 41, symbol: "Nb", name: "Niobio", type: "MetalDeTransición"  ,y: 5, x:5},
      { id: 42, symbol: "Mo", name: "Molibdeno", type: "MetalDeTransición" ,y: 6, x:5 },
      { id: 43, symbol: "Tc", name: "Tecnecio", type: "MetalDeTransición"  ,y: 7, x:5},
      { id: 44, symbol: "Ru", name: "Rutenio", type: "MetalDeTransición"  ,y: 8, x:5},
      { id: 45, symbol: "Rh", name: "Rodio", type: "MetalDeTransición" ,y: 9, x:5 },
      { id: 46, symbol: "Pd", name: "Paladio", type: "MetalDeTransición" ,y: 10, x:5 },
      { id: 47, symbol: "Ag", name: "Plata", type: "MetalDeTransición" ,y: 11, x:5 },
      { id: 48, symbol: "Cd", name: "Cadmio", type: "MetalDeTransición" ,y: 12, x:5 },
      { id: 49, symbol: "In", name: "Indio", type: "Metal" ,y: 13, x:5 },
      { id: 50, symbol: "Sn", name: "Estaño", type: "Metal" ,y: 14, x:5 },
      { id: 51, symbol: "Sb", name: "Antimonio", type: "Metaloide"  ,y: 15, x:5},
      { id: 52, symbol: "Te", name: "Telurio", type: "Metaloide" ,y: 16, x:5 },
      { id: 53, symbol: "I", name: "Yodo", type: "Halógeno" ,y: 17, x:5 },
      { id: 54, symbol: "Xe", name: "Xenón", type: "GasNoble" ,y: 18, x:5 },
  
      { id: 55, symbol: "Cs", name: "Cesio", type: "Alcalino" ,y: 1, x:6},
      { id: 56, symbol: "Ba", name: "Bario", type: "Alcalinotérreo" ,y: 2, x:6},
      { id: "57-71", symbol: "la-lu", name: "Lantánido", type: "Lantánido" ,y: 3, x:6},
      { id: 72, symbol: "Hf", name: "Hafnio", type: "MetalDeTransición" ,y: 4, x:6},
      { id: 73, symbol: "Ta", name: "Tántalo", type: "MetalDeTransición" ,y: 5, x:6},
      { id: 74, symbol: "W", name: "Wolframio", type: "MetalDeTransición" ,y: 6, x:6},
      { id: 75, symbol: "Re", name: "Renio", type: "MetalDeTransición" ,y: 7, x:6},
      { id: 76, symbol: "Os", name: "Osmio", type: "MetalDeTransición" ,y: 8, x:6},
      { id: 77, symbol: "Ir", name: "Iridio", type: "MetalDeTransición" ,y: 9, x:6},
      { id: 78, symbol: "Pt", name: "Platino", type: "MetalDeTransición" ,y: 10, x:6},
      { id: 79, symbol: "Au", name: "Oro", type: "MetalDeTransición" ,y: 11, x:6},
      { id: 80, symbol: "Hg", name: "Mercurio", type: "MetalDeTransición" ,y: 12, x:6},
      { id: 81, symbol: "Tl", name: "Talio", type: "Metal" ,y: 13, x:6},
      { id: 82, symbol: "Pb", name: "Plomo", type: "Metal" ,y: 14, x:6},
      { id: 83, symbol: "Bi", name: "Bismuto", type: "Metal" ,y: 15, x:6},
      { id: 84, symbol: "Po", name: "Polonio", type: "Metaloide" ,y: 16, x:6},
      { id: 85, symbol: "At", name: "Astato", type: "Halógeno" ,y: 17, x:6},
      { id: 86, symbol: "Rn", name: "Radón", type: "GasNoble" ,y: 18, x:6},

      { id: 87, symbol: "Fr", name: "Francio", type: "Alcalino" ,y: 1, x:7},
      { id: 88, symbol: "Ra", name: "Radio", type: "Alcalinotérreo" ,y: 2, x:7},
      { id: "89-103", symbol: "Ac-lr", name: "Actinio", type: "Actínido" ,y: 3, x:7},
      { id: 104, symbol: "Rf", name: "Rutherfordio", type: "MetalDeTransición" ,y: 4, x:7},
      { id: 105, symbol: "Db", name: "Dubnio", type: "MetalDeTransición" ,y: 5, x:7},
      { id: 106, symbol: "Sg", name: "Seaborgio", type: "MetalDeTransición" ,y: 6, x:7},
      { id: 107, symbol: "Bh", name: "Bohrio", type: "MetalDeTransición" ,y: 7, x:7},
      { id: 108, symbol: "Hs", name: "Hasio", type: "MetalDeTransición" ,y: 8, x:7},
      { id: 109, symbol: "Mt", name: "Meitnerio", type: "MetalDeTransición" ,y: 9, x:7},
      { id: 110, symbol: "Ds", name: "Darmstadtio", type: "MetalDeTransición" ,y: 10, x:7},
      { id: 111, symbol: "Rg", name: "Roentgenio", type: "MetalDeTransición" ,y: 11, x:7},
      { id: 112, symbol: "Cn", name: "Copernicio", type: "Metal" ,y: 12, x:7},
      { id: 113, symbol: "Nh", name: "Nihonio", type: "Metal" ,y: 13, x:7},
      { id: 114, symbol: "Fl", name: "Flerovio", type: "Metal" ,y: 14, x:7},
      { id: 115, symbol: "Mc", name: "Moscovio", type: "Metal" ,y: 15, x:7},
      { id: 116, symbol: "Lv", name: "Livermorio", type: "Metal",y: 16, x:7 },
      { id: 117, symbol: "Ts", name: "Tenesino", type: "NoMetal" ,y: 17, x:7},
      { id: 118, symbol: "Og", name: "Oganesón", type: "GasNoble",y: 18, x:7 },

      { id: 57, symbol: "La", name: "Lantano", type: "Lantánido" ,y: 4, x:8},
      { id: 58, symbol: "Ce", name: "Cerio", type: "Lantánido" ,y: 5, x:8},
      { id: 59, symbol: "Pr", name: "Praseodimio", type: "Lantánido" ,y: 6, x:8},
      { id: 60, symbol: "Nd", name: "Neodimio", type: "Lantánido",y: 7, x:8 },
      { id: 61, symbol: "Pm", name: "Prometio", type: "Lantánido",y: 8, x:8 },
      { id: 62, symbol: "Sm", name: "Samario", type: "Lantánido",y: 9, x:8 },
      { id: 63, symbol: "Eu", name: "Europio", type: "Lantánido" ,y: 10, x:8},
      { id: 64, symbol: "Gd", name: "Gadolinio", type: "Lantánido",y: 11, x:8 },
      { id: 65, symbol: "Tb", name: "Terbio", type: "Lantánido",y: 12, x:8 },
      { id: 66, symbol: "Dy", name: "Disprosio", type: "Lantánido",y: 13, x:8 },
      { id: 67, symbol: "Ho", name: "Holmio", type: "Lantánido",y: 14, x:8 },
      { id: 68, symbol: "Er", name: "Erbio", type: "Lantánido",y: 15, x:8 },
      { id: 69, symbol: "Tm", name: "Tulio", type: "Lantánido",y: 16, x:8 },
      { id: 70, symbol: "Yb", name: "Iterbio", type: "Lantánido" ,y: 17, x:8},
      { id: 71, symbol: "Lu", name: "Lutecio", type: "Lantánido",y: 18, x:8 },
 
      { id: 89, symbol: "Ac", name: "Actinio", type: "Actínido" ,y: 4, x:9},
      
      { id: 90, symbol: "Th", name: "Torio", type: "Actínido" ,y: 5, x:9},
      { id: 91, symbol: "Pa", name: "Protactinio", type: "Actínido" ,y: 6, x:9},
      { id: 92, symbol: "U", name: "Uranio", type: "Actínido" ,y: 7, x:9},
      { id: 93, symbol: "Np", name: "Neptunio", type: "Actínido" ,y: 8, x:9},
      { id: 94, symbol: "Pu", name: "Plutonio", type: "Actínido" ,y: 9, x:9},
      { id: 95, symbol: "Am", name: "Americio", type: "Actínido",y: 10, x:9 },
      { id: 96, symbol: "Cm", name: "Curio", type: "Actínido" ,y: 11, x:9},
      { id: 97, symbol: "Bk", name: "Berkelio", type: "Actínido" ,y: 12, x:9},
      { id: 98, symbol: "Cf", name: "Californio", type: "Actínido",y: 13, x:9 },
      { id: 99, symbol: "Es", name: "Einstenio", type: "Actínido" ,y: 14, x:9},
      { id: 100, symbol: "Fm", name: "Fermio", type: "Actínido" ,y: 15, x:9},
      { id: 101, symbol: "Md", name: "Mendelevio", type: "Actínido" ,y: 16, x:9},
      { id: 102, symbol: "No", name: "Nobelio", type: "Actínido" ,y: 17, x:9},
      { id: 103, symbol: "Lr", name: "Lawrencio", type: "Actínido" ,y: 18, x:9},
 
];


let count = 0;


router.get("/", (req, res,next) =>{
   res.render( "index", {layout: false, 
      elements: elements,
      count: 0
   })}
);

module.exports = router