import {
  states as STATES,
  countries,
} from 'vets-json-schema/dist/constants.json';

export const branchCodeLabels = {
  A: 'Army',
  C: 'Coast Guard',
  F: 'Air Force',
  N: 'Navy',
  M: 'Marine Corps',
};

export const countryValues = countries.map(country => country.value);
export const countryLabels = countries.map(country => country.label);

const { CAN, MEX, USA } = ['USA', 'MEX', 'CAN'].reduce((acc, country) => {
  acc[country] = STATES[country].map(state => state.label);
  return acc;
}, {});

export const states = {
  CAN,
  MEX,
  USA,
  BRA: [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ],
  ITA: [
    'Agrigento',
    'Alessandria',
    'Ancona',
    'Aosta',
    'Arezzo',
    'Ascoli Piceno',
    'Asti',
    'Avellino',
    'Bari',
    'Barletta-Andria-Trani',
    'Belluno',
    'Benevento',
    'Bergamo',
    'Biella',
    'Bologna',
    'Bolzano',
    'Brescia',
    'Brindisi',
    'Cagliari',
    'Caltanissetta',
    'Campobasso',
    'Carbonia-Iglesias',
    'Caserta',
    'Catania',
    'Catanzaro',
    'Chieti',
    'Como',
    'Cosenza',
    'Cremona',
    'Crotone',
    'Cuneo',
    'Enna',
    'Fermo',
    'Ferrara',
    'Florence',
    'Foggia',
    'Forlì-Cesena',
    'Frosinone',
    'Genoa',
    'Gorizia',
    'Grosseto',
    'Imperia',
    'Isernia',
    "L'Aquila",
    'La Spezia',
    'Latina',
    'Lecce',
    'Lecco',
    'Livorno',
    'Lodi',
    'Lucca',
    'Macerata',
    'Mantua',
    'Massa and Carrara',
    'Matera',
    'Medio Campidano',
    'Messina',
    'Milan',
    'Modena',
    'Monza and Brianza',
    'Naples',
    'Novara',
    'Nuoro',
    'Ogliastra',
    'Olbia-Tempio',
    'Oristano',
    'Padua',
    'Palermo',
    'Parma',
    'Pavia',
    'Perugia',
    'Pesaro and Urbino',
    'Pescara',
    'Piacenza',
    'Pisa',
    'Pistoia',
    'Pordenone',
    'Potenza',
    'Prato',
    'Ragusa',
    'Ravenna',
    'Reggio Calabria',
    'Reggio Emilia',
    'Rieti',
    'Rimini',
    'Rome',
    'Rovigo',
    'Salerno',
    'Sassari',
    'Savona',
    'Siena',
    'Sondrio',
    'Syracuse',
    'Taranto',
    'Teramo',
    'Terni',
    'Trapani',
    'Trento',
    'Treviso',
    'Trieste',
    'Turin',
    'Udine',
    'Varese',
    'Venice',
    'Verbano-Cusio-Ossola',
    'Vercelli',
    'Verona',
    'Vibo Valentia',
    'Vicenza',
    'Viterbo',
  ],
  IND: [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
  ],
  CHN: [
    'Anhui',
    'Beijing',
    'Chinese Taipei',
    'Chongqing',
    'Fujian',
    'Gansu',
    'Guangdong',
    'Guangxi',
    'Guizhou',
    'Hainan',
    'Hebei',
    'Heilongjiang',
    'Henan',
    'Hong Kong',
    'Hubei',
    'Hunan',
    'Jiangsu',
    'Jiangxi',
    'Jilin',
    'Liaoning',
    'Macao',
    'Nei Mongol',
    'Ningxia',
    'Qinghai',
    'Shaanxi',
    'Shandong',
    'Shanghai',
    'Shanxi',
    'Sichuan',
    'Tianjin',
    'Xinjiang',
    'Xizang',
    'Yunnan',
    'Zhejiang',
  ],
  AUS: [
    'Australian Capital Territory',
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia',
  ],
  IRL: [
    'Carlow',
    'Cavan',
    'Clare',
    'Cork',
    'Donegal',
    'Dublin',
    'Galway',
    'Kerry',
    'Kildare',
    'Kilkenny',
    'Laois',
    'Leitrim',
    'Limerick',
    'Longford',
    'Louth',
    'Mayo',
    'Meath',
    'Monaghan',
    'Offaly',
    'Roscommon',
    'Sligo',
    'Tipperary',
    'Waterford',
    'Westmeath',
    'Wexford',
    'Wicklow',
  ],
};
