export default {
  title: 'donation_contribution',
  type: 'object',
  properties: {
    treeCount: {
      type: 'integer',
      title: 'label.tree_count',
      attr: {
        pattern: '.{1,}'
      },
      pattern: '.{1,}',
      propertyOrder: 1
    },
    amount: {
      type: 'number',
      title: 'label.amount',
      propertyOrder: 2
    },
    currency: {
      type: 'string',
      title: 'label.currency',
      attr: {
        maxlength: 3
      },
      maxLength: 3,
      propertyOrder: 3
    },
    paymentResponse: {
      type: 'hidden',
      title: 'label.payment_method',
      widget: 'hidden',
      propertyOrder: 4
    },
    recipientType: {
      type: 'string',
      title: 'recipientType',
      propertyOrder: 5
    },
    receiptIndividual: {
      title: 'receiptIndividual',
      type: 'object',
      properties: {
        firstname: {
          type: 'string',
          title: 'label.firstname',
          attr: {
            maxlength: 50,
            pattern: '.{2,}'
          },
          pattern: '.{2,}',
          maxLength: 50,
          minLength: 2,
          propertyOrder: 1,
          icon: 'userAvtar'
        },
        lastname: {
          type: 'string',
          title: 'label.lastname',
          attr: {
            maxlength: 50,
            pattern: '.{2,}'
          },
          pattern: '.{2,}',
          maxLength: 50,
          minLength: 2,
          propertyOrder: 2,
          icon: 'userAvtar'
        },
        email: {
          type: 'string',
          title: 'label.email',
          attr: {
            maxlength: 50
          },
          widget: 'email',
          maxLength: 50,
          icon: 'email',
          propertyOrder: 3
        },
        address: {
          type: 'string',
          title: 'label.address',
          attr: {
            maxlength: 255
          },
          icon: 'home',
          maxLength: 255,
          propertyOrder: 4
        },
        zipCode: {
          type: 'string',
          title: 'label.zipCode',
          attr: {
            maxlength: 15
          },
          maxLength: 15,
          propertyOrder: 5
        },
        city: {
          type: 'string',
          title: 'label.city',
          attr: {
            maxlength: 255
          },
          maxLength: 255,
          propertyOrder: 6
        },
        country: {
          enum: [
            'AF',
            'AX',
            'AL',
            'DZ',
            'AS',
            'AD',
            'AO',
            'AI',
            'AQ',
            'AG',
            'AR',
            'AM',
            'AW',
            'AC',
            'AU',
            'AT',
            'AZ',
            'BS',
            'BH',
            'BD',
            'BB',
            'BY',
            'BE',
            'BZ',
            'BJ',
            'BM',
            'BT',
            'BO',
            'BA',
            'BW',
            'BR',
            'IO',
            'VG',
            'BN',
            'BG',
            'BF',
            'BI',
            'KH',
            'CM',
            'CA',
            'IC',
            'CV',
            'BQ',
            'KY',
            'CF',
            'EA',
            'TD',
            'CL',
            'CN',
            'CX',
            'CC',
            'CO',
            'KM',
            'CG',
            'CD',
            'CK',
            'CR',
            'CI',
            'HR',
            'CU',
            'CW',
            'CY',
            'CZ',
            'DK',
            'DG',
            'DJ',
            'DM',
            'DO',
            'EC',
            'EG',
            'SV',
            'GQ',
            'ER',
            'EE',
            'ET',
            'EZ',
            'FK',
            'FO',
            'FJ',
            'FI',
            'FR',
            'GF',
            'PF',
            'TF',
            'GA',
            'GM',
            'GE',
            'DE',
            'GH',
            'GI',
            'GR',
            'GL',
            'GD',
            'GP',
            'GU',
            'GT',
            'GG',
            'GN',
            'GW',
            'GY',
            'HT',
            'HN',
            'HK',
            'HU',
            'IS',
            'IN',
            'ID',
            'IR',
            'IQ',
            'IE',
            'IM',
            'IL',
            'IT',
            'JM',
            'JP',
            'JE',
            'JO',
            'KZ',
            'KE',
            'KI',
            'XK',
            'KW',
            'KG',
            'LA',
            'LV',
            'LB',
            'LS',
            'LR',
            'LY',
            'LI',
            'LT',
            'LU',
            'MO',
            'MK',
            'MG',
            'MW',
            'MY',
            'MV',
            'ML',
            'MT',
            'MH',
            'MQ',
            'MR',
            'MU',
            'YT',
            'MX',
            'FM',
            'MD',
            'MC',
            'MN',
            'ME',
            'MS',
            'MA',
            'MZ',
            'MM',
            'NA',
            'NR',
            'NP',
            'NL',
            'NC',
            'NZ',
            'NI',
            'NE',
            'NG',
            'NU',
            'NF',
            'KP',
            'MP',
            'NO',
            'OM',
            'PK',
            'PW',
            'PS',
            'PA',
            'PG',
            'PY',
            'PE',
            'PH',
            'PN',
            'PL',
            'PT',
            'PR',
            'QA',
            'RE',
            'RO',
            'RU',
            'RW',
            'WS',
            'SM',
            'ST',
            'SA',
            'SN',
            'RS',
            'SC',
            'SL',
            'SG',
            'SX',
            'SK',
            'SI',
            'SB',
            'SO',
            'ZA',
            'GS',
            'KR',
            'SS',
            'ES',
            'LK',
            'BL',
            'SH',
            'KN',
            'LC',
            'MF',
            'PM',
            'VC',
            'SD',
            'SR',
            'SJ',
            'SZ',
            'SE',
            'CH',
            'SY',
            'TW',
            'TJ',
            'TZ',
            'TH',
            'TL',
            'TG',
            'TK',
            'TO',
            'TT',
            'TA',
            'TN',
            'TR',
            'TM',
            'TC',
            'TV',
            'UM',
            'VI',
            'UG',
            'UA',
            'AE',
            'GB',
            'UN',
            'US',
            'UY',
            'UZ',
            'VU',
            'VA',
            'VE',
            'VN',
            'WF',
            'EH',
            'YE',
            'ZM',
            'ZW'
          ],
          enum_titles: [
            'Afghanistan',
            '\u00c5land Islands',
            'Albania',
            'Algeria',
            'American Samoa',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antarctica',
            'Antigua & Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Ascension Island',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia & Herzegovina',
            'Botswana',
            'Brazil',
            'British Indian Ocean Territory',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Canary Islands',
            'Cape Verde',
            'Caribbean Netherlands',
            'Cayman Islands',
            'Central African Republic',
            'Ceuta & Melilla',
            'Chad',
            'Chile',
            'China',
            'Christmas Island',
            'Cocos (Keeling) Islands',
            'Colombia',
            'Comoros',
            'Congo - Brazzaville',
            'Congo - Kinshasa',
            'Cook Islands',
            'Costa Rica',
            'C\u00f4te d\u2019Ivoire',
            'Croatia',
            'Cuba',
            'Cura\u00e7ao',
            'Cyprus',
            'Czechia',
            'Denmark',
            'Diego Garcia',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'Eurozone',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Guiana',
            'French Polynesia',
            'French Southern Territories',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guadeloupe',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea-Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong SAR China',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Kosovo',
            'Kuwait',
            'Kyrgyzstan',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau SAR China',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Islands',
            'Martinique',
            'Mauritania',
            'Mauritius',
            'Mayotte',
            'Mexico',
            'Micronesia',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Myanmar (Burma)',
            'Namibia',
            'Nauru',
            'Nepal',
            'Netherlands',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Niue',
            'Norfolk Island',
            'North Korea',
            'Northern Mariana Islands',
            'Norway',
            'Oman',
            'Pakistan',
            'Palau',
            'Palestinian Territories',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Pitcairn Islands',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'R\u00e9union',
            'Romania',
            'Russia',
            'Rwanda',
            'Samoa',
            'San Marino',
            'S\u00e3o Tom\u00e9 & Pr\u00edncipe',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Sint Maarten',
            'Slovakia',
            'Slovenia',
            'Solomon Islands',
            'Somalia',
            'South Africa',
            'South Georgia & South Sandwich Islands',
            'South Korea',
            'South Sudan',
            'Spain',
            'Sri Lanka',
            'St. Barth\u00e9lemy',
            'St. Helena',
            'St. Kitts & Nevis',
            'St. Lucia',
            'St. Martin',
            'St. Pierre & Miquelon',
            'St. Vincent & Grenadines',
            'Sudan',
            'Suriname',
            'Svalbard & Jan Mayen',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            'Timor-Leste',
            'Togo',
            'Tokelau',
            'Tonga',
            'Trinidad & Tobago',
            'Tristan da Cunha',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks & Caicos Islands',
            'Tuvalu',
            'U.S. Outlying Islands',
            'U.S. Virgin Islands',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United Nations',
            'United States',
            'Uruguay',
            'Uzbekistan',
            'Vanuatu',
            'Vatican City',
            'Venezuela',
            'Vietnam',
            'Wallis & Futuna',
            'Western Sahara',
            'Yemen',
            'Zambia',
            'Zimbabwe'
          ],
          type: 'string',
          title: 'label.country',
          attr: { maxlength: 2 },
          propertyOrder: 7
        }
      },
      required: [
        'firstname',
        'lastname',
        'email'
        // 'address',
        // 'zipCode',
        // 'city',
        // 'country'
      ],
      propertyOrder: 6
    },
    receiptCompany: {
      title: 'receiptCompany',
      type: 'object',
      properties: {
        companyname: {
          type: 'string',
          title: 'label.company_or_orga_name',
          attr: {
            maxlength: 255
          },
          maxLength: 255,
          propertyOrder: 1
        },
        firstname: {
          type: 'string',
          title: 'label.contact_firstname',
          attr: {
            maxlength: 50,
            pattern: '.{2,}'
          },
          pattern: '.{2,}',
          maxLength: 50,
          minLength: 2,
          propertyOrder: 2,
          icon: 'userAvtar'
        },
        lastname: {
          type: 'string',
          title: 'label.contact_lastname',
          attr: {
            maxlength: 50,
            pattern: '.{2,}'
          },
          pattern: '.{2,}',
          maxLength: 50,
          minLength: 2,
          propertyOrder: 3,
          icon: 'userAvtar'
        },
        email: {
          type: 'string',
          title: 'label.email',
          attr: {
            maxlength: 50
          },
          widget: 'email',
          icon: 'email',
          maxLength: 50,
          propertyOrder: 4
        },
        address: {
          type: 'string',
          title: 'label.address',
          attr: {
            maxlength: 255
          },
          maxLength: 255,
          propertyOrder: 5,
          icon: 'home'
        },
        zipCode: {
          type: 'string',
          title: 'label.zipCode',
          attr: {
            maxlength: 15
          },
          maxLength: 15,
          propertyOrder: 6
        },
        city: {
          type: 'string',
          title: 'label.city',
          attr: {
            maxlength: 255
          },
          maxLength: 255,
          propertyOrder: 7
        },
        country: {
          enum: [
            'AF',
            'AX',
            'AL',
            'DZ',
            'AS',
            'AD',
            'AO',
            'AI',
            'AQ',
            'AG',
            'AR',
            'AM',
            'AW',
            'AC',
            'AU',
            'AT',
            'AZ',
            'BS',
            'BH',
            'BD',
            'BB',
            'BY',
            'BE',
            'BZ',
            'BJ',
            'BM',
            'BT',
            'BO',
            'BA',
            'BW',
            'BR',
            'IO',
            'VG',
            'BN',
            'BG',
            'BF',
            'BI',
            'KH',
            'CM',
            'CA',
            'IC',
            'CV',
            'BQ',
            'KY',
            'CF',
            'EA',
            'TD',
            'CL',
            'CN',
            'CX',
            'CC',
            'CO',
            'KM',
            'CG',
            'CD',
            'CK',
            'CR',
            'CI',
            'HR',
            'CU',
            'CW',
            'CY',
            'CZ',
            'DK',
            'DG',
            'DJ',
            'DM',
            'DO',
            'EC',
            'EG',
            'SV',
            'GQ',
            'ER',
            'EE',
            'ET',
            'EZ',
            'FK',
            'FO',
            'FJ',
            'FI',
            'FR',
            'GF',
            'PF',
            'TF',
            'GA',
            'GM',
            'GE',
            'DE',
            'GH',
            'GI',
            'GR',
            'GL',
            'GD',
            'GP',
            'GU',
            'GT',
            'GG',
            'GN',
            'GW',
            'GY',
            'HT',
            'HN',
            'HK',
            'HU',
            'IS',
            'IN',
            'ID',
            'IR',
            'IQ',
            'IE',
            'IM',
            'IL',
            'IT',
            'JM',
            'JP',
            'JE',
            'JO',
            'KZ',
            'KE',
            'KI',
            'XK',
            'KW',
            'KG',
            'LA',
            'LV',
            'LB',
            'LS',
            'LR',
            'LY',
            'LI',
            'LT',
            'LU',
            'MO',
            'MK',
            'MG',
            'MW',
            'MY',
            'MV',
            'ML',
            'MT',
            'MH',
            'MQ',
            'MR',
            'MU',
            'YT',
            'MX',
            'FM',
            'MD',
            'MC',
            'MN',
            'ME',
            'MS',
            'MA',
            'MZ',
            'MM',
            'NA',
            'NR',
            'NP',
            'NL',
            'NC',
            'NZ',
            'NI',
            'NE',
            'NG',
            'NU',
            'NF',
            'KP',
            'MP',
            'NO',
            'OM',
            'PK',
            'PW',
            'PS',
            'PA',
            'PG',
            'PY',
            'PE',
            'PH',
            'PN',
            'PL',
            'PT',
            'PR',
            'QA',
            'RE',
            'RO',
            'RU',
            'RW',
            'WS',
            'SM',
            'ST',
            'SA',
            'SN',
            'RS',
            'SC',
            'SL',
            'SG',
            'SX',
            'SK',
            'SI',
            'SB',
            'SO',
            'ZA',
            'GS',
            'KR',
            'SS',
            'ES',
            'LK',
            'BL',
            'SH',
            'KN',
            'LC',
            'MF',
            'PM',
            'VC',
            'SD',
            'SR',
            'SJ',
            'SZ',
            'SE',
            'CH',
            'SY',
            'TW',
            'TJ',
            'TZ',
            'TH',
            'TL',
            'TG',
            'TK',
            'TO',
            'TT',
            'TA',
            'TN',
            'TR',
            'TM',
            'TC',
            'TV',
            'UM',
            'VI',
            'UG',
            'UA',
            'AE',
            'GB',
            'UN',
            'US',
            'UY',
            'UZ',
            'VU',
            'VA',
            'VE',
            'VN',
            'WF',
            'EH',
            'YE',
            'ZM',
            'ZW'
          ],
          enum_titles: [
            'Afghanistan',
            'Åland Islands',
            'Albania',
            'Algeria',
            'American Samoa',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antarctica',
            'Antigua & Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Ascension Island',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia & Herzegovina',
            'Botswana',
            'Brazil',
            'British Indian Ocean Territory',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Canary Islands',
            'Cape Verde',
            'Caribbean Netherlands',
            'Cayman Islands',
            'Central African Republic',
            'Ceuta & Melilla',
            'Chad',
            'Chile',
            'China',
            'Christmas Island',
            'Cocos (Keeling) Islands',
            'Colombia',
            'Comoros',
            'Congo - Brazzaville',
            'Congo - Kinshasa',
            'Cook Islands',
            'Costa Rica',
            'Côte d’Ivoire',
            'Croatia',
            'Cuba',
            'Curaçao',
            'Cyprus',
            'Czechia',
            'Denmark',
            'Diego Garcia',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'Eurozone',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Guiana',
            'French Polynesia',
            'French Southern Territories',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guadeloupe',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea-Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong SAR China',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Kosovo',
            'Kuwait',
            'Kyrgyzstan',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau SAR China',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Islands',
            'Martinique',
            'Mauritania',
            'Mauritius',
            'Mayotte',
            'Mexico',
            'Micronesia',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Myanmar (Burma)',
            'Namibia',
            'Nauru',
            'Nepal',
            'Netherlands',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Niue',
            'Norfolk Island',
            'North Korea',
            'Northern Mariana Islands',
            'Norway',
            'Oman',
            'Pakistan',
            'Palau',
            'Palestinian Territories',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Pitcairn Islands',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Réunion',
            'Romania',
            'Russia',
            'Rwanda',
            'Samoa',
            'San Marino',
            'São Tomé & Príncipe',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Sint Maarten',
            'Slovakia',
            'Slovenia',
            'Solomon Islands',
            'Somalia',
            'South Africa',
            'South Georgia & South Sandwich Islands',
            'South Korea',
            'South Sudan',
            'Spain',
            'Sri Lanka',
            'St. Barthélemy',
            'St. Helena',
            'St. Kitts & Nevis',
            'St. Lucia',
            'St. Martin',
            'St. Pierre & Miquelon',
            'St. Vincent & Grenadines',
            'Sudan',
            'Suriname',
            'Svalbard & Jan Mayen',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            'Timor-Leste',
            'Togo',
            'Tokelau',
            'Tonga',
            'Trinidad & Tobago',
            'Tristan da Cunha',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks & Caicos Islands',
            'Tuvalu',
            'U.S. Outlying Islands',
            'U.S. Virgin Islands',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United Nations',
            'United States',
            'Uruguay',
            'Uzbekistan',
            'Vanuatu',
            'Vatican City',
            'Venezuela',
            'Vietnam',
            'Wallis & Futuna',
            'Western Sahara',
            'Yemen',
            'Zambia',
            'Zimbabwe'
          ],
          type: 'string',
          title: 'label.country',
          propertyOrder: 8
        }
      },
      required: [
        'companyname',
        'firstname',
        'lastname',
        'email',
        'address',
        'zipCode',
        'city',
        'country'
      ],
      propertyOrder: 7
    },
    communityTreecounter: {
      type: 'integer',
      title: 'label.supported_treecount...',
      widget: 'hidden',
      propertyOrder: 8
    }
  },
  required: [
    'treeCount',
    'amount',
    'currency',
    'recipientType',
    'communityTreecounter'
  ],
  submit_url: '',
  submit_method: 'POST'
};
