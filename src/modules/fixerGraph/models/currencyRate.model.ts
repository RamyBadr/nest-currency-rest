import { Field, ObjectType, Int } from 'type-graphql';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

// @ObjectType()
// export class CurrencyRate {
//     'AED'?: number;
//     'AFN'?: number;
//     'ALL'?: number;
//     'AMD'?: number;
//     'ANG'?: number;
//     'AOA'?: number;
//     'ARS'?: number;
//     'AUD'?: number;
//     'AWG'?: number;
//     'AZN'?: number;
//     'BAM'?: number;
//     'BBD'?: number;
//     'BDT'?: number;
//     'BGN'?: number;
//     'BHD'?: number;
//     'BIF'?: number;
//     'BMD'?: number;
//     'BND'?: number;
//     'BOB'?: number;
//     'BRL'?: number;
//     'BSD'?: number;
//     'BTC'?: number;
//     'BTN'?: number;
//     'BWP'?: number;
//     'BYN'?: number;
//     'BYR'?: number;
//     'BZD'?: number;
//     'CAD'?: number;
//     'CDF'?: number;
//     'CHF'?: number;
//     'CLF'?: number;
//     'CLP'?: number;
//     'CNY'?: number;
//     'COP'?: number;
//     'CRC'?: number;
//     'CUC'?: number;
//     'CUP'?: number;
//     'CVE'?: number;
//     'CZK'?: number;
//     'DJF'?: number;
//     'DKK'?: number;
//     'DOP'?: number;
//     'DZD'?: number;
//     'EGP'?: number;
//     'ERN'?: number;
//     'ETB'?: number;
//     'EUR'?: number;
//     'FJD'?: number;
//     'FKP'?: number;
//     'GBP'?: number;
//     'GEL'?: number;
//     'GGP'?: number;
//     'GHS'?: number;
//     'GIP'?: number;
//     'GMD'?: number;
//     'GNF'?: number;
//     'GTQ'?: number;
//     'GYD'?: number;
//     'HKD'?: number;
//     'HNL'?: number;
//     'HRK'?: number;
//     'HTG'?: number;
//     'HUF'?: number;
//     'IDR'?: number;
//     'ILS'?: number;
//     'IMP'?: number;
//     'INR'?: number;
//     'IQD'?: number;
//     'IRR'?: number;
//     'ISK'?: number;
//     'JEP'?: number;
//     'JMD'?: number;
//     'JOD'?: number;
//     'JPY'?: number;
//     'KES'?: number;
//     'KGS'?: number;
//     'KHR'?: number;
//     'KMF'?: number;
//     'KPW'?: number;
//     'KRW'?: number;
//     'KWD'?: number;
//     'KYD'?: number;
//     'KZT'?: number;
//     'LAK'?: number;
//     'LBP'?: number;
//     'LKR'?: number;
//     'LRD'?: number;
//     'LSL'?: number;
//     'LTL'?: number;
//     'LVL'?: number;
//     'LYD'?: number;
//     'MAD'?: number;
//     'MDL'?: number;
//     'MGA'?: number;
//     'MKD'?: number;
//     'MMK'?: number;
//     'MNT'?: number;
//     'MOP'?: number;
//     'MRO'?: number;
//     'MUR'?: number;
//     'MVR'?: number;
//     'MWK'?: number;
//     'MXN'?: number;
//     'MYR'?: number;
//     'MZN'?: number;
//     'NAD'?: number;
//     'NGN'?: number;
//     'NIO'?: number;
//     'NOK'?: number;
//     'NPR'?: number;
//     'NZD'?: number;
//     'OMR'?: number;
//     'PAB'?: number;
//     'PEN'?: number;
//     'PGK'?: number;
//     'PHP'?: number;
//     'PKR'?: number;
//     'PLN'?: number;
//     'PYG'?: number;
//     'QAR'?: number;
//     'RON'?: number;
//     'RSD'?: number;
//     'RUB'?: number;
//     'RWF'?: number;
//     'SAR'?: number;
//     'SBD'?: number;
//     'SCR'?: number;
//     'SDG'?: number;
//     'SEK'?: number;
//     'SGD'?: number;
//     'SHP'?: number;
//     'SLL'?: number;
//     'SOS'?: number;
//     'SRD'?: number;
//     'STD'?: number;
//     'SVC'?: number;
//     'SYP'?: number;
//     'SZL'?: number;
//     'THB'?: number;
//     'TJS'?: number;
//     'TMT'?: number;
//     'TND'?: number;
//     'TOP'?: number;
//     'TRY'?: number;
//     'TTD'?: number;
//     'TWD'?: number;
//     'TZS'?: number;
//     'UAH'?: number;
//     'UGX'?: number;
//     'USD'?: number;
//     'UYU'?: number;
//     'UZS'?: number;
//     'VEF'?: number;
//     'VND'?: number;
//     'VUV'?: number;
//     'WST'?: number;
//     'XAF'?: number;
//     'XAG'?: number;
//     'XAU'?: number;
//     'XCD'?: number;
//     'XDR'?: number;
//     'XOF'?: number;
//     'XPF'?: number;
//     'YER'?: number;
//     'ZAR'?: number;
//     'ZMK'?: number;
//     'ZMW'?: number;
//     'ZWL'?: number;
// }

@ObjectType()
export class TestType {
    @Field(() => String)
    test: string;
}
@ObjectType()
export class CurrencyRateResponse {
    @Field(() => Boolean)
    @IsBoolean()
    success?: boolean;

    @Field(() => Int)
    @IsNumber()
    timestamp?: number;

    @Field()
    @IsString()
    readonly base: string;

    @Field()
    date: Date;

    // @Field(type => CurrencyRate)
    // rates: CurrencyRate;
}

export enum CurrencyCode {
    'AED' = 'United Arab Emirates Dirham',
    'AFN' = 'Afghan Afghani',
    'ALL' = 'Albanian Lek',
    'AMD' = 'Armenian Dram',
    'ANG' = 'Netherlands Antillean Guilder',
    'AOA' = 'Angolan Kwanza',
    'ARS' = 'Argentine Peso',
    'AUD' = 'Australian Dollar',
    'AWG' = 'Aruban Florin',
    'AZN' = 'Azerbaijani Manat',
    'BAM' = 'Bosnia-Herzegovina Convertible Mark',
    'BBD' = 'Barbadian Dollar',
    'BDT' = 'Bangladeshi Taka',
    'BGN' = 'Bulgarian Lev',
    'BHD' = 'Bahraini Dinar',
    'BIF' = 'Burundian Franc',
    'BMD' = 'Bermudan Dollar',
    'BND' = 'Brunei Dollar',
    'BOB' = 'Bolivian Boliviano',
    'BRL' = 'Brazilian Real',
    'BSD' = 'Bahamian Dollar',
    'BTC' = 'Bitcoin',
    'BTN' = 'Bhutanese Ngultrum',
    'BWP' = 'Botswanan Pula',
    'BYN' = 'New Belarusian Ruble',
    'BYR' = 'Belarusian Ruble',
    'BZD' = 'Belize Dollar',
    'CAD' = 'Canadian Dollar',
    'CDF' = 'Congolese Franc',
    'CHF' = 'Swiss Franc',
    'CLF' = 'Chilean Unit of Account (UF)',
    'CLP' = 'Chilean Peso',
    'CNY' = 'Chinese Yuan',
    'COP' = 'Colombian Peso',
    'CRC' = 'Costa Rican Colón',
    'CUC' = 'Cuban Convertible Peso',
    'CUP' = 'Cuban Peso',
    'CVE' = 'Cape Verdean Escudo',
    'CZK' = 'Czech Republic Koruna',
    'DJF' = 'Djiboutian Franc',
    'DKK' = 'Danish Krone',
    'DOP' = 'Dominican Peso',
    'DZD' = 'Algerian Dinar',
    'EGP' = 'Egyptian Pound',
    'ERN' = 'Eritrean Nakfa',
    'ETB' = 'Ethiopian Birr',
    'EUR' = 'Euro',
    'FJD' = 'Fijian Dollar',
    'FKP' = 'Falkland Islands Pound',
    'GBP' = 'British Pound Sterling',
    'GEL' = 'Georgian Lari',
    'GGP' = 'Guernsey Pound',
    'GHS' = 'Ghanaian Cedi',
    'GIP' = 'Gibraltar Pound',
    'GMD' = 'Gambian Dalasi',
    'GNF' = 'Guinean Franc',
    'GTQ' = 'Guatemalan Quetzal',
    'GYD' = 'Guyanaese Dollar',
    'HKD' = 'Hong Kong Dollar',
    'HNL' = 'Honduran Lempira',
    'HRK' = 'Croatian Kuna',
    'HTG' = 'Haitian Gourde',
    'HUF' = 'Hungarian Forint',
    'IDR' = 'Indonesian Rupiah',
    'ILS' = 'Israeli New Sheqel',
    'IMP' = 'Manx pound',
    'INR' = 'Indian Rupee',
    'IQD' = 'Iraqi Dinar',
    'IRR' = 'Iranian Rial',
    'ISK' = 'Icelandic Króna',
    'JEP' = 'Jersey Pound',
    'JMD' = 'Jamaican Dollar',
    'JOD' = 'Jordanian Dinar',
    'JPY' = 'Japanese Yen',
    'KES' = 'Kenyan Shilling',
    'KGS' = 'Kyrgystani Som',
    'KHR' = 'Cambodian Riel',
    'KMF' = 'Comorian Franc',
    'KPW' = 'North Korean Won',
    'KRW' = 'South Korean Won',
    'KWD' = 'Kuwaiti Dinar',
    'KYD' = 'Cayman Islands Dollar',
    'KZT' = 'Kazakhstani Tenge',
    'LAK' = 'Laotian Kip',
    'LBP' = 'Lebanese Pound',
    'LKR' = 'Sri Lankan Rupee',
    'LRD' = 'Liberian Dollar',
    'LSL' = 'Lesotho Loti',
    'LTL' = 'Lithuanian Litas',
    'LVL' = 'Latvian Lats',
    'LYD' = 'Libyan Dinar',
    'MAD' = 'Moroccan Dirham',
    'MDL' = 'Moldovan Leu',
    'MGA' = 'Malagasy Ariary',
    'MKD' = 'Macedonian Denar',
    'MMK' = 'Myanma Kyat',
    'MNT' = 'Mongolian Tugrik',
    'MOP' = 'Macanese Pataca',
    'MRO' = 'Mauritanian Ouguiya',
    'MUR' = 'Mauritian Rupee',
    'MVR' = 'Maldivian Rufiyaa',
    'MWK' = 'Malawian Kwacha',
    'MXN' = 'Mexican Peso',
    'MYR' = 'Malaysian Ringgit',
    'MZN' = 'Mozambican Metical',
    'NAD' = 'Namibian Dollar',
    'NGN' = 'Nigerian Naira',
    'NIO' = 'Nicaraguan Córdoba',
    'NOK' = 'Norwegian Krone',
    'NPR' = 'Nepalese Rupee',
    'NZD' = 'New Zealand Dollar',
    'OMR' = 'Omani Rial',
    'PAB' = 'Panamanian Balboa',
    'PEN' = 'Peruvian Nuevo Sol',
    'PGK' = 'Papua New Guinean Kina',
    'PHP' = 'Philippine Peso',
    'PKR' = 'Pakistani Rupee',
    'PLN' = 'Polish Zloty',
    'PYG' = 'Paraguayan Guarani',
    'QAR' = 'Qatari Rial',
    'RON' = 'Romanian Leu',
    'RSD' = 'Serbian Dinar',
    'RUB' = 'Russian Ruble',
    'RWF' = 'Rwandan Franc',
    'SAR' = 'Saudi Riyal',
    'SBD' = 'Solomon Islands Dollar',
    'SCR' = 'Seychellois Rupee',
    'SDG' = 'Sudanese Pound',
    'SEK' = 'Swedish Krona',
    'SGD' = 'Singapore Dollar',
    'SHP' = 'Saint Helena Pound',
    'SLL' = 'Sierra Leonean Leone',
    'SOS' = 'Somali Shilling',
    'SRD' = 'Surinamese Dollar',
    'STD' = 'São Tomé and Príncipe Dobra',
    'SVC' = 'Salvadoran Colón',
    'SYP' = 'Syrian Pound',
    'SZL' = 'Swazi Lilangeni',
    'THB' = 'Thai Baht',
    'TJS' = 'Tajikistani Somoni',
    'TMT' = 'Turkmenistani Manat',
    'TND' = 'Tunisian Dinar',
    'TOP' = 'Tongan Paʻanga',
    'TRY' = 'Turkish Lira',
    'TTD' = 'Trinidad and Tobago Dollar',
    'TWD' = 'New Taiwan Dollar',
    'TZS' = 'Tanzanian Shilling',
    'UAH' = 'Ukrainian Hryvnia',
    'UGX' = 'Ugandan Shilling',
    'USD' = 'United States Dollar',
    'UYU' = 'Uruguayan Peso',
    'UZS' = 'Uzbekistan Som',
    'VEF' = 'Venezuelan Bolívar Fuerte',
    'VND' = 'Vietnamese Dong',
    'VUV' = 'Vanuatu Vatu',
    'WST' = 'Samoan Tala',
    'XAF' = 'CFA Franc BEAC',
    'XAG' = 'Silver (troy ounce)',
    'XAU' = 'Gold (troy ounce)',
    'XCD' = 'East Caribbean Dollar',
    'XDR' = 'Special Drawing Rights',
    'XOF' = 'CFA Franc BCEAO',
    'XPF' = 'CFP Franc',
    'YER' = 'Yemeni Rial',
    'ZAR' = 'South African Rand',
    'ZMK' = 'Zambian Kwacha (pre-2013)',
    'ZMW' = 'Zambian Kwacha',
    'ZWL' = 'Zimbabwean Dollar',
}
/*
"AED": "United Arab Emirates Dirham",
"AFN": "Afghan Afghani",
"ALL": "Albanian Lek",
"AMD": "Armenian Dram",
"ANG": "Netherlands Antillean Guilder",
"AOA": "Angolan Kwanza",
"ARS": "Argentine Peso",
"AUD": "Australian Dollar",
"AWG": "Aruban Florin",
"AZN": "Azerbaijani Manat",
"BAM": "Bosnia-Herzegovina Convertible Mark",
"BBD": "Barbadian Dollar",
"BDT": "Bangladeshi Taka",
"BGN": "Bulgarian Lev",
"BHD": "Bahraini Dinar",
"BIF": "Burundian Franc",
"BMD": "Bermudan Dollar",
"BND": "Brunei Dollar",
"BOB": "Bolivian Boliviano",
"BRL": "Brazilian Real",
"BSD": "Bahamian Dollar",
"BTC": "Bitcoin",
"BTN": "Bhutanese Ngultrum",
"BWP": "Botswanan Pula",
"BYN": "New Belarusian Ruble",
"BYR": "Belarusian Ruble",
"BZD": "Belize Dollar",
"CAD": "Canadian Dollar",
"CDF": "Congolese Franc",
"CHF": "Swiss Franc",
"CLF": "Chilean Unit of Account (UF)",
"CLP": "Chilean Peso",
"CNY": "Chinese Yuan",
"COP": "Colombian Peso",
"CRC": "Costa Rican Colón",
"CUC": "Cuban Convertible Peso",
"CUP": "Cuban Peso",
"CVE": "Cape Verdean Escudo",
"CZK": "Czech Republic Koruna",
"DJF": "Djiboutian Franc",
"DKK": "Danish Krone",
"DOP": "Dominican Peso",
"DZD": "Algerian Dinar",
"EGP": "Egyptian Pound",
"ERN": "Eritrean Nakfa",
"ETB": "Ethiopian Birr",
"EUR": "Euro",
"FJD": "Fijian Dollar",
"FKP": "Falkland Islands Pound",
"GBP": "British Pound Sterling",
"GEL": "Georgian Lari",
"GGP": "Guernsey Pound",
"GHS": "Ghanaian Cedi",
"GIP": "Gibraltar Pound",
"GMD": "Gambian Dalasi",
"GNF": "Guinean Franc",
"GTQ": "Guatemalan Quetzal",
"GYD": "Guyanaese Dollar",
"HKD": "Hong Kong Dollar",
"HNL": "Honduran Lempira",
"HRK": "Croatian Kuna",
"HTG": "Haitian Gourde",
"HUF": "Hungarian Forint",
"IDR": "Indonesian Rupiah",
"ILS": "Israeli New Sheqel",
"IMP": "Manx pound",
"INR": "Indian Rupee",
"IQD": "Iraqi Dinar",
"IRR": "Iranian Rial",
"ISK": "Icelandic Króna",
"JEP": "Jersey Pound",
"JMD": "Jamaican Dollar",
"JOD": "Jordanian Dinar",
"JPY": "Japanese Yen",
"KES": "Kenyan Shilling",
"KGS": "Kyrgystani Som",
"KHR": "Cambodian Riel",
"KMF": "Comorian Franc",
"KPW": "North Korean Won",
"KRW": "South Korean Won",
"KWD": "Kuwaiti Dinar",
"KYD": "Cayman Islands Dollar",
"KZT": "Kazakhstani Tenge",
"LAK": "Laotian Kip",
"LBP": "Lebanese Pound",
"LKR": "Sri Lankan Rupee",
"LRD": "Liberian Dollar",
"LSL": "Lesotho Loti",
"LTL": "Lithuanian Litas",
"LVL": "Latvian Lats",
"LYD": "Libyan Dinar",
"MAD": "Moroccan Dirham",
"MDL": "Moldovan Leu",
"MGA": "Malagasy Ariary",
"MKD": "Macedonian Denar",
"MMK": "Myanma Kyat",
"MNT": "Mongolian Tugrik",
"MOP": "Macanese Pataca",
"MRO": "Mauritanian Ouguiya",
"MUR": "Mauritian Rupee",
"MVR": "Maldivian Rufiyaa",
"MWK": "Malawian Kwacha",
"MXN": "Mexican Peso",
"MYR": "Malaysian Ringgit",
"MZN": "Mozambican Metical",
"NAD": "Namibian Dollar",
"NGN": "Nigerian Naira",
"NIO": "Nicaraguan Córdoba",
"NOK": "Norwegian Krone",
"NPR": "Nepalese Rupee",
"NZD": "New Zealand Dollar",
"OMR": "Omani Rial",
"PAB": "Panamanian Balboa",
"PEN": "Peruvian Nuevo Sol",
"PGK": "Papua New Guinean Kina",
"PHP": "Philippine Peso",
"PKR": "Pakistani Rupee",
"PLN": "Polish Zloty",
"PYG": "Paraguayan Guarani",
"QAR": "Qatari Rial",
"RON": "Romanian Leu",
"RSD": "Serbian Dinar",
"RUB": "Russian Ruble",
"RWF": "Rwandan Franc",
"SAR": "Saudi Riyal",
"SBD": "Solomon Islands Dollar",
"SCR": "Seychellois Rupee",
"SDG": "Sudanese Pound",
"SEK": "Swedish Krona",
"SGD": "Singapore Dollar",
"SHP": "Saint Helena Pound",
"SLL": "Sierra Leonean Leone",
"SOS": "Somali Shilling",
"SRD": "Surinamese Dollar",
"STD": "São Tomé and Príncipe Dobra",
"SVC": "Salvadoran Colón",
"SYP": "Syrian Pound",
"SZL": "Swazi Lilangeni",
"THB": "Thai Baht",
"TJS": "Tajikistani Somoni",
"TMT": "Turkmenistani Manat",
"TND": "Tunisian Dinar",
"TOP": "Tongan Paʻanga",
"TRY": "Turkish Lira",
"TTD": "Trinidad and Tobago Dollar",
"TWD": "New Taiwan Dollar",
"TZS": "Tanzanian Shilling",
"UAH": "Ukrainian Hryvnia",
"UGX": "Ugandan Shilling",
"USD": "United States Dollar",
"UYU": "Uruguayan Peso",
"UZS": "Uzbekistan Som",
"VEF": "Venezuelan Bolívar Fuerte",
"VND": "Vietnamese Dong",
"VUV": "Vanuatu Vatu",
"WST": "Samoan Tala",
"XAF": "CFA Franc BEAC",
"XAG": "Silver (troy ounce)",
"XAU": "Gold (troy ounce)",
"XCD": "East Caribbean Dollar",
"XDR": "Special Drawing Rights",
"XOF": "CFA Franc BCEAO",
"XPF": "CFP Franc",
"YER": "Yemeni Rial",
"ZAR": "South African Rand",
"ZMK": "Zambian Kwacha (pre-2013)",
"ZMW": "Zambian Kwacha",
"ZWL": "Zimbabwean Dollar"
*/
