// translations.ts - All language translations for TGA website

export interface Translations {
  [key: string]: {
    [key: string]: any;
  };
}

export const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      regulations: 'Regulations',
      principles: 'Principles',
      membership: 'Membership',
      csr: 'CSR',
      news: 'News',
      events: 'Events',
      contact: 'Contact'
    },
    home: {
      hero: {
        title: 'Welcome to Tanzania Gaming Association',
        subtitle: 'The voice of licensed gaming operators in Tanzania, working closely with the Gaming Board of Tanzania to promote responsible industry growth.',
        becomeMember: 'Become a Member',
        learnMore: 'Learn More'
      },
      commitment: {
        title: 'Our Commitment',
        responsibleGaming: {
          title: 'Responsible Gaming',
          desc: 'We champion responsible gaming practices, educating and protecting customers across Tanzania.'
        },
        industryExcellence: {
          title: 'Industry Excellence',
          desc: 'Driving innovation and best practices in the gaming industry through collaboration and standards.'
        },
        communityImpact: {
          title: 'Community Impact',
          desc: 'Actively supporting social causes with a positive impact on Tanzanian society.'
        }
      },
      latestNews: 'Latest News',
      readMore: 'Read More',
      newsItems: {
        news1: {
          title: 'Tanzania Gaming Industry Shows Significant Growth',
          excerpt: 'Latest reports indicate a 25% growth in the licensed gaming sector...'
        },
        news2: {
          title: 'TGA Launches New Responsible Gaming Initiative',
          excerpt: 'A comprehensive program to support players and promote safe gaming...'
        },
        news3: {
          title: 'Annual Gaming Conference Set for March 2025',
          excerpt: 'Industry leaders to gather for discussions on regulation and innovation...'
        }
      }
    },
    about: {
      title: 'About Tanzania Gaming Association',
      established: 'Established in 2017, the Tanzania Gaming Association (TGA) is the voice of licensed gaming operators in Tanzania. We work closely with the Gaming Board of Tanzania (GBT) to promote the responsible growth of the industry.',
      governance: 'Our association is governed by a council of up to eight members who oversee operations, with a dedicated staff managing day-to-day activities.',
      aboutMembers: 'About Our Members:',
      membersDesc: 'TGA\'s members include slot, land-based casino and sports betting operators in Tanzania.',
      vision: {
        title: 'Our Vision',
        desc: 'To create a level playing field for all operators, fostering fair competition and a sustainable future. We prioritize responsible gaming practices and believe our contributions enhance Tanzania\'s sports culture and infrastructure.'
      },
      mission: {
        title: 'Our Mission',
        responsibleGaming: 'Responsible Gaming: Champion responsible practices',
        industryExcellence: 'Industry Excellence: Drive innovation and standards',
        collaboration: 'Collaboration: Work with regulators and members',
        communityImpact: 'Community Impact: Support social causes'
      },
      missionStatements: {
        title: 'Mission Statements',
        responsibleGaming: {
          title: 'Responsible Gaming',
          desc: 'We champion responsible gaming practices, educating and protecting customers. We believe sports betting should be enjoyed as entertainment, within one\'s means.'
        },
        industryExcellence: {
          title: 'Industry Excellence and Innovation',
          desc: 'TGA drives innovation in sports betting, leveraging technology and best practices. We promote customer experience, data security, responsible gaming tools, and industry standards with stakeholders.'
        },
        collaboration: {
          title: 'Collaboration with Regulators and Members',
          desc: 'We collaborate with regulators and members to ensure fairness, voluntary compliance, equity, and accountability. We believe a strong industry benefits all.'
        },
        communityResponsibility: {
          title: 'Community and Social Responsibility',
          desc: 'We actively support social causes with a positive impact on Tanzanian society.'
        }
      }
    },
    regulations: {
      title: 'Regulations',
      description: 'Access important regulatory documents governing the gaming industry in Tanzania.',
      documents: {
        gamingAct: {
          title: 'Gaming Act',
          desc: 'The primary legislation governing gaming operations in Tanzania.'
        },
        constitution: {
          title: 'TGA Constitution',
          desc: 'The constitution governing the Tanzania Gaming Association.'
        },
        other: {
          title: 'Other Regulatory Documents',
          desc: 'Additional regulations and guidelines for the gaming industry.'
        }
      },
      downloadPDF: 'Download PDF'
    },
    principles: {
      title: 'Our Principles',
      description: 'The Tanzania Gaming Association is dedicated to promoting a safe, secure, and reliable environment for all games of chance in Tanzania. TGA members adhere to the following standards:',
      taxation: {
        title: 'Taxation',
        desc: 'In collaboration with the GBT, TGA advocates for clearly defined taxes and fees in the Gaming Act.'
      },
      fraudPrevention: {
        title: 'Zero Tolerance for Fraud',
        desc: 'TGA members have robust anti-money laundering policies.'
      },
      responsibleGambling: {
        title: 'Responsible Gambling',
        desc: 'TGA members prioritize responsible gambling:',
        items: {
          educating: 'Educating Customers: We inform customers about potential risks associated with games of chance.',
          helpLines: 'Providing Help Lines: Customers have access to helplines for gambling addiction assistance.',
          limits: 'Setting Limits: Customers can define daily, weekly, or monthly betting/deposit limits.',
          selfExclusion: 'Self-Exclusion: Customers can self-exclude from betting if needed.',
          training: 'Employee Training: We implement the "It is possible to quit" program (developed by the EOGL) and train employees to recognize signs of gambling addiction.'
        }
      },
      underagePrevention: {
        title: 'Preventing Underage Gambling',
        desc: 'Gambling under 18 is strictly prohibited. TGA members rigorously verify customer age through registration and verification processes. Age limitations are clearly displayed on websites and in stores.'
      },
      employment: {
        title: 'Employment Policy',
        desc: 'TGA members only employ individuals over 18. Identification documents are verified for accuracy. Staff are trained to use additional verification methods if initial procedures are inconclusive.'
      },
      license: {
        title: 'Legal Operating License for a Safe and Reliable Environment',
        desc: 'All TGA members must provide proof of a valid operating license issued by the Gaming Board of Tanzania.'
      }
    },
    membership: {
      title: 'TGA Membership',
      requirements: {
        title: 'Membership Requirements',
        items: [
          'Certificate of Incorporation',
          'TIN Certificate',
          'Principal Business License',
          'Memorandum and Articles of Association'
        ],
        note: 'The Board of Directors will review your application, and upon approval, you will be required to pay a minimum six-month fee.'
      },
      benefits: {
        title: 'Membership Benefits',
        items: [
          'Networking opportunities with industry professionals, experts, and stakeholders',
          'Regulatory support to navigate complex regulations and compliance issues',
          'Advocacy and representation to address industry challenges',
          'Training opportunities on industry trends and best practices',
          'Collaboration on projects that benefit the sports betting ecosystem',
          'Enhanced credibility and reputation within the industry',
          'Industry updates on the latest developments and market trends'
        ]
      },
      cta: {
        title: 'Become a Member and Join a Strong Voice',
        desc: 'Are you a licensed sports betting operator seeking industry support and a strong voice? Apply for TGA membership today!',
        applyNow: 'Apply Now'
      }
    },
    csr: {
      title: 'Corporate Social Responsibility',
      description: 'We actively support social causes with a positive impact on Tanzanian society through various CSR programs.',
      programs: {
        health: {
          title: 'Health',
          desc: 'Supporting healthcare initiatives and promoting healthy lifestyles in communities across Tanzania.'
        },
        environment: {
          title: 'Environment',
          desc: 'Environmental conservation efforts and sustainable practices for a greener Tanzania.'
        },
        responsibleGaming: {
          title: 'Responsible Gaming',
          desc: 'Addressing mental health issues among youth and promoting responsible gaming practices.'
        },
        sports: {
          title: 'Sports',
          desc: 'Supporting local sports development and youth athletic programs throughout Tanzania.'
        }
      },
      initiatives: {
        title: 'Notable Initiatives',
        items: [
          'Support for Tembo Warriors and Twiga Stars in their respective 2021 World Cup Tournaments',
          'Sponsorship of the 2024 Tulia Marathon'
        ]
      }
    },
    news: {
      title: 'Latest News',
      stayUpdated: 'Stay updated with the latest industry news.',
      readFullArticle: 'Read Full Article'
    },
    events: {
      title: 'Events',
      pastEvents: 'Past Events',
      upcomingEvents: 'Upcoming Events',
      viewPhotos: 'View Photos',
      checkBackSoon: 'Check back soon for announcements about upcoming events and conferences.',
      eventsList: {
        agm2023: {
          title: 'AGM 2023',
          desc: 'Annual General Meeting bringing together all TGA members for strategic planning and review.'
        },
        sabasaba2024: {
          title: '2024 Dar es Salaam International Trade Fair - Sabasaba',
          desc: 'TGA participation in the annual Sabasaba trade fair showcasing responsible gaming initiatives.'
        }
      }
    },
    responsibleGaming: {
      title: 'Responsible Gaming and Prevention of Addiction',
      intro: 'TGA is committed to promoting a responsible gaming environment for all users, whether online or in-store. Gaming should be a socially enjoyable source of entertainment. TGA members ensure access to safe and advanced gaming platforms and provide responsible gaming education to both staff and players.',
      support: {
        title: 'Support for Players',
        desc: 'Measures are in place to support players exhibiting excessive gaming behaviors, including online and in-person counseling.'
      },
      guidelines: {
        title: 'Player Guidelines',
        items: [
          'Set and adhere to budgets.',
          'Set deposit and betting limits.',
          'Take regular breaks to avoid compulsive gaming.',
          'Seek help if a gaming problem is suspected.',
          'Utilize self-exclusion options to control gaming habits.'
        ]
      },
      needHelp: {
        title: 'Need Help?',
        desc: 'If you or someone you know is struggling with gambling addiction, help is available. Contact our support services or speak with a trained professional.',
        button: 'Get Support Now'
      }
    },
    contact: {
      title: 'Contact Us',
      getInTouch: 'Get in Touch',
      description: 'Have questions about membership, regulations, or our initiatives? We\'re here to help. Reach out to us using the contact information below or fill out the form.',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      sendMessage: 'Send us a Message',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      required: 'Required',
      thankYou: 'Thank you for your message. We will get back to you soon!'
    },
    footer: {
      aboutTGA: 'About TGA',
      aboutDesc: 'The voice of licensed gaming operators in Tanzania, promoting responsible growth of the industry.',
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      becomeMember: 'Become a Member',
      responsibleGaming: 'Responsible Gaming',
      contactUs: 'Contact Us',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      copyright: '© 2025 Tanzania Gaming Association. All rights reserved.'
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      regulations: 'Kanuni',
      principles: 'Misingi',
      membership: 'Uanachama',
      csr: 'CSR',
      news: 'Habari',
      events: 'Matukio',
      contact: 'Wasiliana'
    },
    home: {
      hero: {
        title: 'Karibu Chama cha Michezo ya Kubahatisha Tanzania',
        subtitle: 'Sauti ya waendeshaji wa michezo ya kubahatisha walioidhinishwa Tanzania, tukifanya kazi kwa karibu na Bodi ya Michezo ya Kubahatisha Tanzania kukuza ukuaji wa sekta kwa uwajibikaji.',
        becomeMember: 'Kuwa Mwanachama',
        learnMore: 'Jifunze Zaidi'
      },
      commitment: {
        title: 'Dhamira Yetu',
        responsibleGaming: {
          title: 'Michezo ya Kuwajibika',
          desc: 'Tunatetea mazoea ya michezo ya kuwajibika, kuelimisha na kulinda wateja kote Tanzania.'
        },
        industryExcellence: {
          title: 'Ubora wa Sekta',
          desc: 'Kuendesha ubunifu na mbinu bora katika sekta ya michezo kupitia ushirikiano na viwango.'
        },
        communityImpact: {
          title: 'Athari kwa Jamii',
          desc: 'Kusaidia kwa dhati mambo ya kijamii yenye athari chanya kwa jamii ya Tanzania.'
        }
      },
      latestNews: 'Habari za Hivi Karibuni',
      readMore: 'Soma Zaidi',
      newsItems: {
        news1: {
          title: 'Sekta ya Michezo ya Kubahatisha Tanzania Inaonyesha Ukuaji Mkubwa',
          excerpt: 'Ripoti za hivi karibuni zinaonyesha ukuaji wa 25% katika sekta ya michezo ya kubahatisha iliyoidhinishwa...'
        },
        news2: {
          title: 'TGA Inazindua Mpango Mpya wa Michezo ya Kuwajibika',
          excerpt: 'Mpango kamili wa kusaidia wachezaji na kukuza michezo salama...'
        },
        news3: {
          title: 'Mkutano Mkuu wa Michezo Umepangwa Machi 2025',
          excerpt: 'Viongozi wa sekta watakutana kwa majadiliano kuhusu udhibiti na ubunifu...'
        }
      }
    },
    about: {
      title: 'Kuhusu Chama cha Michezo ya Kubahatisha Tanzania',
      established: 'Kilianzishwa mwaka 2017, Chama cha Michezo ya Kubahatisha Tanzania (TGA) ni sauti ya waendeshaji wa michezo ya kubahatisha walioidhinishwa Tanzania. Tunafanya kazi kwa karibu na Bodi ya Michezo ya Kubahatisha Tanzania (GBT) kukuza ukuaji wa sekta kwa uwajibikaji.',
      governance: 'Chama chetu kinaongozwa na baraza la wajumbe wasiozidi wanane wanaosimamia shughuli, na wafanyakazi wa kudumu wanaosimamia shughuli za kila siku.',
      aboutMembers: 'Kuhusu Wanachama Wetu:',
      membersDesc: 'Wanachama wa TGA ni pamoja na waendeshaji wa mashine za mchezo, kasino za ardhini na kubashiri michezo Tanzania.',
      vision: {
        title: 'Maono Yetu',
        desc: 'Kuunda uwanja sawa kwa waendeshaji wote, kukuza ushindani wa haki na mustakabali endelevu. Tunaweka kipaumbele mazoea ya michezo ya kuwajibika na tunaamini michango yetu inaimarisha utamaduni wa michezo na miundombinu ya Tanzania.'
      },
      mission: {
        title: 'Dhamira Yetu',
        responsibleGaming: 'Michezo ya Kuwajibika: Kutetea mazoea ya kuwajibika',
        industryExcellence: 'Ubora wa Sekta: Kuendesha ubunifu na viwango',
        collaboration: 'Ushirikiano: Kufanya kazi na wadhibiti na wanachama',
        communityImpact: 'Athari kwa Jamii: Kusaidia mambo ya kijamii'
      },
      missionStatements: {
        title: 'Kauli za Dhamira',
        responsibleGaming: {
          title: 'Michezo ya Kuwajibika',
          desc: 'Tunatetea mazoea ya michezo ya kuwajibika, kuelimisha na kulinda wateja. Tunaamini kubashiri michezo inapaswa kufurahishwa kama burudani, ndani ya uwezo wa mtu.'
        },
        industryExcellence: {
          title: 'Ubora wa Sekta na Ubunifu',
          desc: 'TGA inaendesha ubunifu katika kubashiri michezo, kutumia teknolojia na mbinu bora. Tunakuza uzoefu wa wateja, usalama wa data, zana za michezo ya kuwajibika, na viwango vya sekta na wadau.'
        },
        collaboration: {
          title: 'Ushirikiano na Wadhibiti na Wanachama',
          desc: 'Tunashirikiana na wadhibiti na wanachama kuhakikisha haki, uzingatiaji wa hiari, usawa, na uwajibikaji. Tunaamini sekta imara inanufaisha wote.'
        },
        communityResponsibility: {
          title: 'Uwajibikaji wa Kijamii na Jamii',
          desc: 'Tunasaidia kwa dhati mambo ya kijamii yenye athari chanya kwa jamii ya Tanzania.'
        }
      }
    },
    regulations: {
      title: 'Kanuni',
      description: 'Pata nyaraka muhimu za kisheria zinazoongoza sekta ya michezo ya kubahatisha Tanzania.',
      documents: {
        gamingAct: {
          title: 'Sheria ya Michezo',
          desc: 'Sheria kuu inayoongoza uendeshaji wa michezo ya kubahatisha Tanzania.'
        },
        constitution: {
          title: 'Katiba ya TGA',
          desc: 'Katiba inayoongoza Chama cha Michezo ya Kubahatisha Tanzania.'
        },
        other: {
          title: 'Nyaraka Nyingine za Kisheria',
          desc: 'Kanuni na miongozo ya ziada ya sekta ya michezo ya kubahatisha.'
        }
      },
      downloadPDF: 'Pakua PDF'
    },
    principles: {
      title: 'Kanuni Zetu',
      description: 'Chama cha Michezo ya Kubahatisha Tanzania kimejitolea kukuza mazingira salama, yenye usalama na ya kuaminika kwa michezo yote ya bahati Tanzania. Wanachama wa TGA wanazingatia viwango vifuatavyo:',
      taxation: {
        title: 'Ushuru',
        desc: 'Kwa kushirikiana na GBT, TGA inatetea kodi na ada zilizofafanuliwa wazi katika Sheria ya Michezo.'
      },
      fraudPrevention: {
        title: 'Kutokubali Udanganyifu Kabisa',
        desc: 'Wanachama wa TGA wana sera kali za kuzuia utakatishaji wa fedha.'
      },
      responsibleGambling: {
        title: 'Kucheza kwa Kuwajibika',
        desc: 'Wanachama wa TGA wanaweka kipaumbele kucheza kwa kuwajibika:',
        items: {
          educating: 'Kuelimisha Wateja: Tunawafahamisha wateja kuhusu hatari zinazoweza kutokana na michezo ya bahati.',
          helpLines: 'Kutoa Mistari ya Msaada: Wateja wana ufikiaji wa mistari ya simu ya msaada wa uraibu wa kucheza.',
          limits: 'Kuweka Mipaka: Wateja wanaweza kufafanua mipaka ya kila siku, kila wiki, au kila mwezi ya kubashiri/kuweka pesa.',
          selfExclusion: 'Kujitenga: Wateja wanaweza kujitenga na kubashiri inapohitajika.',
          training: 'Mafunzo ya Wafanyakazi: Tunatekeleza mpango wa "Inawezekana kuacha" (uliotengenezwa na EOGL) na kuwazoeza wafanyakazi kutambua dalili za uraibu wa kucheza.'
        }
      },
      underagePrevention: {
        title: 'Kuzuia Kucheza kwa Watoto',
        desc: 'Kucheza chini ya miaka 18 ni marufuku kabisa. Wanachama wa TGA wanathibitisha kwa makini umri wa wateja kupitia usajili na uthibitishaji. Vizuizi vya umri vimeonyeshwa wazi kwenye tovuti na madukani.'
      },
      employment: {
        title: 'Sera ya Ajira',
        desc: 'Wanachama wa TGA wanaajiri tu watu walio zaidi ya miaka 18. Hati za kitambulisho zinathibitishwa kwa usahihi. Wafanyakazi wanazozwa kutumia mbinu za ziada za uthibitishaji ikiwa taratibu za awali hazitoi hitimisho.'
      },
      license: {
        title: 'Leseni Halali ya Uendeshaji kwa Mazingira Salama na ya Kuaminika',
        desc: 'Wanachama wote wa TGA lazima watoe uthibitisho wa leseni halali ya uendeshaji iliyotolewa na Bodi ya Michezo ya Kubahatisha Tanzania.'
      }
    },
    membership: {
      title: 'Uanachama wa TGA',
      requirements: {
        title: 'Mahitaji ya Uanachama',
        items: [
          'Cheti cha Usajili wa Kampuni',
          'Cheti cha TIN',
          'Leseni Kuu ya Biashara',
          'Hati ya Makubaliano na Kanuni za Kampuni'
        ],
        note: 'Bodi ya Wakurugenzi itapitia maombi yako, na baada ya kuidhinishwa, utahitajika kulipa ada ya angalau miezi sita.'
      },
      benefits: {
        title: 'Faida za Uanachama',
        items: [
          'Fursa za kuungana na wataalamu wa sekta, wataalam, na wadau',
          'Msaada wa kisheria kukabiliana na kanuni ngumu na masuala ya uzingatiaji',
          'Utetezi na uwakilishi wa kushughulikia changamoto za sekta',
          'Fursa za mafunzo kuhusu mwenendo wa sekta na mbinu bora',
          'Ushirikiano katika miradi inayonufaisha mfumo wa kubashiri michezo',
          'Kuimarishwa kwa uaminifu na sifa ndani ya sekta',
          'Sasisho za sekta kuhusu maendeleo ya hivi karibuni na mwenendo wa soko'
        ]
      },
      cta: {
        title: 'Kuwa Mwanachama na Jiunge na Sauti Kali',
        desc: 'Je, wewe ni mwendeshaji wa kubashiri michezo aliyeidhinishwa anayetafuta msaada wa sekta na sauti kali? Omba uanachama wa TGA leo!',
        applyNow: 'Omba Sasa'
      }
    },
    csr: {
      title: 'Uwajibikaji wa Kijamii wa Kampuni',
      description: 'Tunasaidia kwa dhati mambo ya kijamii yenye athari chanya kwa jamii ya Tanzania kupitia programu mbalimbali za CSR.',
      programs: {
        health: {
          title: 'Afya',
          desc: 'Kusaidia mipango ya afya na kukuza maisha yenye afya katika jamii kote Tanzania.'
        },
        environment: {
          title: 'Mazingira',
          desc: 'Juhudi za uhifadhi wa mazingira na mbinu endelevu kwa Tanzania ya kijani zaidi.'
        },
        responsibleGaming: {
          title: 'Michezo ya Kuwajibika',
          desc: 'Kushughulikia masuala ya afya ya akili miongoni mwa vijana na kukuza mazoea ya michezo ya kuwajibika.'
        },
        sports: {
          title: 'Michezo',
          desc: 'Kusaidia maendeleo ya michezo ya ndani na programu za riadha za vijana kote Tanzania.'
        }
      },
      initiatives: {
        title: 'Mipango Maarufu',
        items: [
          'Msaada kwa Tembo Warriors na Twiga Stars katika Mashindano yao ya Kombe la Dunia 2021',
          'Ufadhili wa Mbio za Tulia 2024'
        ]
      }
    },
    news: {
      title: 'Habari za Hivi Karibuni',
      stayUpdated: 'Endelea kupata habari za hivi karibuni za sekta.',
      readFullArticle: 'Soma Makala Kamili'
    },
    events: {
      title: 'Matukio',
      pastEvents: 'Matukio Yaliyopita',
      upcomingEvents: 'Matukio Yanayokuja',
      viewPhotos: 'Tazama Picha',
      checkBackSoon: 'Rudi hivi karibuni kwa matangazo kuhusu matukio na mikutano ijayo.',
      eventsList: {
        agm2023: {
          title: 'Mkutano Mkuu wa Mwaka 2023',
          desc: 'Mkutano Mkuu wa Mwaka unaowakutanisha wanachama wote wa TGA kwa mipango na mapitio ya kimkakati.'
        },
        sabasaba2024: {
          title: 'Maonyesho ya Kimataifa ya Biashara ya Dar es Salaam 2024 - Sabasaba',
          desc: 'Ushiriki wa TGA katika maonyesho ya kila mwaka ya biashara ya Sabasaba kuonyesha mipango ya michezo ya kuwajibika.'
        }
      }
    },
    responsibleGaming: {
      title: 'Michezo ya Kuwajibika na Kuzuia Uraibu',
      intro: 'TGA imejitolea kukuza mazingira ya michezo ya kuwajibika kwa watumiaji wote, iwe mtandaoni au dukani. Michezo inapaswa kuwa chanzo cha burudani ya kijamii kinachofurahisha. Wanachama wa TGA wanahakikisha ufikiaji wa majukwaa salama na ya kisasa ya michezo na kutoa elimu ya michezo ya kuwajibika kwa wafanyakazi na wachezaji.',
      support: {
        title: 'Msaada kwa Wachezaji',
        desc: 'Hatua zimewekwa kusaidia wachezaji wanaoonyesha tabia za kucheza kupita kiasi, ikiwa ni pamoja na ushauri mtandaoni na ana kwa ana.'
      },
      guidelines: {
        title: 'Miongozo ya Wachezaji',
        items: [
          'Weka na uzingatie bajeti.',
          'Weka mipaka ya kuweka pesa na kubashiri.',
          'Chukua mapumziko ya mara kwa mara kuepuka kucheza kwa kulazimisha.',
          'Tafuta msaada ikiwa unashuku tatizo la kucheza.',
          'Tumia chaguzi za kujitenga kudhibiti tabia za kucheza.'
        ]
      },
      needHelp: {
        title: 'Unahitaji Msaada?',
        desc: 'Ikiwa wewe au mtu unayemjua anajitahidi na uraibu wa kucheza, msaada unapatikana. Wasiliana na huduma zetu za msaada au zungumza na mtaalamu aliyezoezwa.',
        button: 'Pata Msaada Sasa'
      }
    },
    contact: {
      title: 'Wasiliana Nasi',
      getInTouch: 'Wasiliana Nasi',
      description: 'Una maswali kuhusu uanachama, kanuni, au mipango yetu? Tuko hapa kukusaidia. Wasiliana nasi kwa kutumia maelezo ya mawasiliano hapa chini au jaza fomu.',
      address: 'Anwani',
      email: 'Barua pepe',
      phone: 'Simu',
      sendMessage: 'Tutumie Ujumbe',
      yourName: 'Jina Lako',
      emailAddress: 'Anwani ya Barua Pepe',
      subject: 'Kichwa cha Habari',
      message: 'Ujumbe',
      send: 'Tuma Ujumbe',
      required: 'Inahitajika',
      thankYou: 'Asante kwa ujumbe wako. Tutawasiliana nawe hivi karibuni!'
    },
    footer: {
      aboutTGA: 'Kuhusu TGA',
      aboutDesc: 'Sauti ya waendeshaji wa michezo ya kubahatisha walioidhinishwa Tanzania, tukikuza ukuaji wa sekta kwa uwajibikaji.',
      quickLinks: 'Viungo vya Haraka',
      aboutUs: 'Kuhusu Sisi',
      becomeMember: 'Kuwa Mwanachama',
      responsibleGaming: 'Michezo ya Kuwajibika',
      contactUs: 'Wasiliana Nasi',
      contactInfo: 'Maelezo ya Mawasiliano',
      followUs: 'Tufuate',
      copyright: '© 2025 Chama cha Michezo ya Kubahatisha Tanzania. Haki zote zimehifadhiwa.'
    }
  }
};

// Type-safe translation function
export const getTranslation = (language: string, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language] || translations['en'];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};