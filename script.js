// ============================================
// Translations Object
// ============================================

const translations = {
    en: {
        hero: {
            title: "The AI-Powered Front Desk Your Business Deserves",
            subtitle: "Give your customers a 5-star WhatsApp experience — instant replies, seamless bookings, and M-Pesa payments, 24/7. No extra staff needed.",
            cta: "Get Started",
            whatsappButton: "Message us on WhatsApp",
            supporting: "Trusted by businesses across Kenya 🇰🇪"
        },
        why: {
            title: "Why Leading Businesses Choose Us",
            card1: {
                title: "Reclaim Your Team's Time",
                body: "Free your staff from repetitive inquiries. Biashara-Assistant handles customer questions around the clock so your team can focus on high-value work."
            },
            card2: {
                title: "Convert Every Inquiry",
                body: "Instant, professional replies mean no customer is left waiting. Faster responses directly translate to higher conversion rates and more revenue."
            },
            card3: {
                title: "Seamless M-Pesa Collection",
                body: "Accept payments directly in the conversation. No friction, no follow-ups — customers pay via M-Pesa without ever leaving the chat."
            }
        },
        customerService: {
            title: "Deliver a 5-Star Experience",
            subtitle: "Your customers expect fast, professional service. We make sure every interaction reflects the quality of your brand.",
            card1: {
                title: "Instant Response, 24/7",
                body: "Every customer gets an immediate, professional reply — day or night. No voicemail, no \"we'll get back to you.\" Just premium responsiveness."
            },
            card2: {
                title: "Consistent & On-Brand",
                body: "Accurate services, pricing, hours, and location — every time. No mixed messages. The consistency your reputation depends on."
            },
            card3: {
                title: "Zero Missed Opportunities",
                body: "Every inquiry is answered and captured automatically. No leads slip through the cracks, no customers left on \"read.\""
            }
        },
        how: {
            title: "How It Works",
            step1: {
                title: "Sign Up in Minutes",
                body: "Fill out a simple form with your business details. No technical skills needed."
            },
            step2: {
                title: "Connect Your WhatsApp",
                body: "Link your business WhatsApp number. We'll guide you through the simple setup process."
            },
            step3: {
                title: "Deliver Premium Service",
                body: "You're live. Every customer now gets instant, professional responses — bookings, answers, and payments handled automatically."
            }
        },
        who: {
            title: "Built for Businesses That Demand More",
            barber: {
                heading: "Barbershops",
                body: "Fast bookings and walk-ins. Show services & prices, book appointments, send reminders, and accept deposits automatically.",
                feature1: "Service menu & prices",
                feature2: "Instant bookings",
                feature3: "Walk-in support",
                feature4: "Automated reminders"
            },
            spa: {
                heading: "Spas",
                body: "Let clients book treatments, massages, and packages. Show available slots, collect deposits via M-Pesa, and send appointment reminders.",
                feature1: "Treatment menu",
                feature2: "Slot booking",
                feature3: "M-Pesa deposits",
                feature4: "Appointment reminders"
            },
            clinic: {
                heading: "Clinics",
                body: "Build trust with accurate appointments. Show services, doctor availability, handle insurance inquiries, and escalate to staff when needed.",
                feature1: "Doctor availability",
                feature2: "Appointment booking",
                feature3: "Insurance info",
                feature4: "Staff escalation"
            },
            realestate: {
                heading: "Real Estate Agents",
                body: "Qualify leads automatically. Capture property inquiries, budget, location preferences, schedule viewings, and hand off to agents.",
                feature1: "Lead qualification",
                feature2: "Budget capture",
                feature3: "Viewing scheduling",
                feature4: "Agent handoff"
            },
            hotel: {
                heading: "Hotels",
                body: "Convert inquiries to bookings. Show room types & rates, check availability, handle reservation requests, share amenities and directions.",
                feature1: "Room types & rates",
                feature2: "Availability inquiry",
                feature3: "Reservation requests",
                feature4: "Amenities & directions"
            }
        },
        pricing: {
            title: "Simple, Transparent Pricing",
            planName: "Professional Plan",
            dealBadge: "Limited offer: try Biashara-Assistant free",
            subtext: "Everything you need to deliver world-class service",
            feature2: "✓ Auto-reply to inquiries",
            feature3: "✓ Booking system",
            feature4: "✓ M-Pesa payment integration",
            feature5: "✓ Basic analytics",
            feature6: "✓ Email support",
            ctaButton: "Start Free Trial",
            trust1: "No credit card required",
            trust2: "Cancel anytime",
            trust3: "14-day free trial"
        },
        form: {
            title: "Get Started in 5 Minutes",
            subtitle: "Fill out the form below and we'll set up your Biashara-Assistant right away.",
            businessName: {
                label: "Business Name *",
                placeholder: "e.g., Kamau's Barbershop"
            },
            yourName: {
                label: "Your Name *",
                placeholder: "e.g., Sarah Wanjiku"
            },
            phone: {
                label: "WhatsApp Business Number *",
                placeholder: "e.g., 0712 345 678",
                helper: "The number customers will message"
            },
            businessType: {
                label: "What type of business? *",
                default: "Select your business type",
                barber: "Barbershop",
                spa: "Spa",
                clinic: "Clinic",
                realestate: "Real Estate",
                hotel: "Hotel",
                other: "Other"
            },
            email: {
                label: "Email Address *",
                placeholder: "your@email.com",
                helper: "We'll send setup instructions here"
            },
            additionalInfo: {
                label: "Tell us about your business (optional)",
                placeholder: "Any specific requirements or questions?"
            },
            submit: "Start My Free Trial",
            trustMessage: "🔒 Your information is secure. We'll never share your data.",
            legalText: "By submitting, you agree to our",
            termsLink: "Terms of Service",
            and: "and",
            privacyLink: "Privacy Policy"
        },
        cta: {
            title: "Ready to Elevate Your Customer Experience?",
            subtitle: "Join the businesses using Biashara-Assistant to deliver faster service, capture more revenue, and stand out from the competition.",
            button: "Start Free Trial Now"
        },
        chatDemoTabs: {
            label: "See example for",
            barber: "Barber",
            spa: "Spa",
            clinic: "Clinic",
            realestate: "Real Estate",
            hotel: "Hotel"
        },
        chatDemo: {
            barber: {
                contactName: "Kamau's Barbershop",
                status: "online",
                m1: "Hi, can I book a haircut today?",
                m2: "Sure! What service? (Haircut / Beard trim / Both)",
                m3: "Both.",
                m4: "Available slots: 11:00am or 3:00pm. Which works?",
                m5: "3:00pm.",
                m6: "Booked! KES 500 total. Pay on arrival or via M-Pesa. See you at 3!"
            },
            spa: {
                contactName: "Serene Spa & Wellness",
                status: "online",
                m1: "Hi, I'd like to book a massage.",
                m2: "Welcome! What type? (Swedish / Deep Tissue / Hot Stone)",
                m3: "Deep Tissue.",
                m4: "Available: Today 2pm or Tomorrow 10am. Which do you prefer?",
                m5: "Today 2pm.",
                m6: "Great—KES 3,500. Send deposit of KES 1,000 via M-Pesa to confirm. See you at 2!"
            },
            clinic: {
                contactName: "GreenCare Clinic",
                status: "online",
                m1: "Hi, I need to see a doctor.",
                m2: "Sure—what service do you need? (Consultation / Lab / Dental)",
                m3: "Consultation.",
                m4: "Available times: 10:30am or 2:00pm. Which do you prefer?",
                m5: "2:00pm.",
                m6: "Please share your full name + NHIF/insurance (if any). A staff member will confirm shortly."
            },
            realestate: {
                contactName: "Nairobi Homes",
                status: "online",
                m1: "I'm looking for a 2 bedroom.",
                m2: "Great—what location do you prefer?",
                m3: "Kilimani.",
                m4: "Budget range?",
                m5: "Up to 60k.",
                m6: "When can you view? (Sat 11am / Sat 2pm / Sun 1pm)",
                m7: "Thanks—an agent will contact you to confirm."
            },
            hotel: {
                contactName: "Coastline Hotel",
                status: "online",
                m1: "Do you have rooms this weekend?",
                m2: "Sure—what dates and how many guests?",
                m3: "Fri–Sun, 2 adults.",
                m4: "Options: Standard / Deluxe. Which do you prefer?",
                m5: "Deluxe.",
                m6: "Thanks—share your name + phone. Staff will confirm availability and send payment details."
            },
            },
        nav: {
            home: "Home",
            blog: "Blog",
            why: "Why",
            customerService: "Customer Service",
            how: "How",
            who: "Who",
            pricing: "Pricing",
            getStarted: "Get Started"
        },
        footer: {
            brand: "Biashara-Assistant",
            tagline: "Your WhatsApp business assistant",
            product: "Product",
            company: "Company",
            legal: "Legal",
            features: "Features",
            howItWorks: "How It Works",
            pricing: "Pricing",
            faq: "FAQ",
            aboutUs: "About Us",
            contact: "Contact",
            blog: "Blog",
            careers: "Careers",
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            refundPolicy: "Refund Policy",
            copyright: "© 2026 Biashara-Assistant. All rights reserved.",
            madeInKenya: "Made with ❤️ in Kenya",
            terms: "Terms",
            privacy: "Privacy"
        }
    },
    sw: {
        hero: {
            title: "Ofisi ya Mbele ya AI Ambayo Biashara Yako Inastahili",
            subtitle: "Wape wateja wako uzoefu wa nyota 5 kwenye WhatsApp — majibu ya haraka, mareservi rahisi, na malipo ya M-Pesa, masaa 24. Bila wafanyakazi wa ziada.",
            cta: "Anza Sasa",
            whatsappButton: "Tutumie ujumbe kwa WhatsApp",
            supporting: "Inaaminika na biashara kote Kenya 🇰🇪"
        },
        why: {
            title: "Kwa Nini Biashara Zinazoongoza Zinatuchagua",
            card1: {
                title: "Okoa Muda wa Timu Yako",
                body: "Wachie wafanyakazi wako maswali ya kujirudia. Biashara-Assistant hushughulikia maswali ya wateja masaa 24 ili timu yako izingatie kazi ya thamani zaidi."
            },
            card2: {
                title: "Badilisha Kila Swali Kuwa Mauzo",
                body: "Majibu ya haraka na ya kitaalamu yanamaanisha hakuna mteja anayesubiri. Majibu ya haraka yanasababisha viwango vya juu vya ubadilishaji na mapato zaidi."
            },
            card3: {
                title: "Malipo ya M-Pesa Bila Msuguano",
                body: "Kubali malipo moja kwa moja kwenye mazungumzo. Hakuna usumbufu, hakuna kufuatilia — wateja hulipa kupitia M-Pesa bila kuacha mazungumzo."
            }
        },
        customerService: {
            title: "Toa Uzoefu wa Nyota 5",
            subtitle: "Wateja wako wanatarajia huduma ya haraka na ya kitaalamu. Tunahakikisha kila mwingiliano unaonyesha ubora wa chapa yako.",
            card1: {
                title: "Jibu la Haraka, Masaa 24",
                body: "Kila mteja anapata jibu la kitaalamu mara moja — usiku au mchana. Hakuna ujumbe wa sauti, hakuna \"tutarudi.\" Ni ujibuji wa hali ya juu tu."
            },
            card2: {
                title: "Thabiti na Kwa Chapa Yako",
                body: "Huduma sahihi, bei, masaa, na eneo — kila wakati. Hakuna ujumbe uliochanganyika. Uthabiti ambao sifa yako inategemea."
            },
            card3: {
                title: "Hakuna Fursa Zilizopotea",
                body: "Kila swali linajibiwa na kukamatwa kiotomatiki. Hakuna wateja wanaopotea, hakuna aliyeachwa \"imesomwa.\""
            }
        },
        how: {
            title: "Inavyofanya Kazi",
            step1: {
                title: "Jisajili kwa Dakika Chache",
                body: "Jaza fomu rahisi na maelezo ya biashara yako. Hakuna ujuzi wa kiufundi unahitajika."
            },
            step2: {
                title: "Unganisha WhatsApp Yako",
                body: "Unganisha nambari yako ya WhatsApp ya biashara. Tutakuongoza kupitia mchakato rahisi wa kusanidi."
            },
            step3: {
                title: "Toa Huduma ya Hali ya Juu",
                body: "Uko hai. Kila mteja sasa anapata majibu ya haraka na ya kitaalamu — mareservi, majibu, na malipo yanashughulikiwa kiotomatiki."
            }
        },
        who: {
            title: "Imeundwa kwa Biashara Zinazotaka Zaidi",
            barber: {
                heading: "Vinyozi",
                body: "Mareservi ya haraka na watembezi. Onyesha huduma na bei, reservi miadi, tuma vikumbusho, na kubali amana kiotomatiki.",
                feature1: "Orodha ya huduma na bei",
                feature2: "Mareservi ya papo hapo",
                feature3: "Msaada wa watembezi",
                feature4: "Vikumbusho vya kiotomatiki"
            },
            spa: {
                heading: "Spa",
                body: "Ruhusu wateja kureservi matibabu, massage, na paketi. Onyesha nafasi zilizo wazi, kusanya amana kwa M-Pesa, na kutuma vikumbusho vya miadi.",
                feature1: "Orodha ya matibabu",
                feature2: "Kureservi nafasi",
                feature3: "Amana za M-Pesa",
                feature4: "Vikumbusho vya miadi"
            },
            clinic: {
                heading: "Kliniki",
                body: "Jenga uaminifu kwa miadi sahihi. Onyesha huduma, upatikanaji wa daktari, shughulikia maswali ya bima, na ongeza kwa wafanyakazi inapohitajika.",
                feature1: "Upatikanaji wa daktari",
                feature2: "Kujireservi miadi",
                feature3: "Taarifa za bima",
                feature4: "Kuongeza kwa wafanyakazi"
            },
            realestate: {
                heading: "Wakala wa Mali za Isimu",
                body: "Thibitisha wateja wanaowezekana kiotomatiki. Kamata maswali ya mali, bajeti, mapendeleo ya eneo, ratibu maonyesho, na wasilisha kwa wakala.",
                feature1: "Uthibitishaji wa wateja wanaowezekana",
                feature2: "Kukamata bajeti",
                feature3: "Kuratibu maonyesho",
                feature4: "Kuwasilisha kwa wakala"
            },
            hotel: {
                heading: "Hoteli",
                body: "Badilisha maswali kuwa mareservi. Onyesha aina za vyumba na bei, angalia upatikanaji, shughulikia maombi ya mareservi, shiriki vifaa na maelekezo.",
                feature1: "Aina za vyumba na bei",
                feature2: "Swali la upatikanaji",
                feature3: "Maombi ya mareservi",
                feature4: "Vifaa na maelekezo"
            }
        },
        pricing: {
            title: "Bei Rahisi na Wazi",
            planName: "Mpango wa Kitaalamu",
            dealBadge: "Ofa ya muda: jaribu Biashara-Assistant bure",
            subtext: "Kila kitu unachohitaji kutoa huduma ya kiwango cha juu",
            feature2: "✓ Jibu la kiotomatiki kwa maswali",
            feature3: "✓ Mfumo wa mareservi",
            feature4: "✓ Ujumuishaji wa malipo ya M-Pesa",
            feature5: "✓ Uchambuzi wa msingi",
            feature6: "✓ Msaada wa barua pepe",
            ctaButton: "Anza Jaribio Bure",
            trust1: "Hakuna kadi ya mkopo inahitajika",
            trust2: "Ghairi wakati wowote",
            trust3: "Jaribio la siku 14 bure"
        },
        form: {
            title: "Anza kwa Dakika 5",
            subtitle: "Jaza fomu hapa chini na tutasanidi Biashara-Assistant yako mara moja.",
            businessName: {
                label: "Jina la Biashara *",
                placeholder: "mf., Kinyozi ya Kamau"
            },
            yourName: {
                label: "Jina Lako *",
                placeholder: "mf., Sarah Wanjiku"
            },
            phone: {
                label: "Nambari ya WhatsApp ya Biashara *",
                placeholder: "mf., 0712 345 678",
                helper: "Nambari ambayo wateja watatumia"
            },
            businessType: {
                label: "Ni aina gani ya biashara? *",
                default: "Chagua aina ya biashara yako",
                barber: "Kinyozi",
                spa: "Spa",
                clinic: "Kliniki",
                realestate: "Mali za Isimu",
                hotel: "Hoteli",
                other: "Nyingine"
            },
            email: {
                label: "Anwani ya Barua Pepe *",
                placeholder: "barua@pepe.com",
                helper: "Tutatumia hii kutuma maelekezo ya kusanidi"
            },
            additionalInfo: {
                label: "Tuambie kuhusu biashara yako (si lazima)",
                placeholder: "Mahitaji yoyote maalum au maswali?"
            },
            submit: "Anza Jaribio Bure",
            trustMessage: "🔒 Taarifa zako ziko salama. Hatutawahi kushiriki data yako.",
            legalText: "Kwa kuwasilisha, unakubali",
            termsLink: "Sheria za Huduma",
            and: "na",
            privacyLink: "Sera ya Faragha"
        },
        cta: {
            title: "Tayari Kuinua Uzoefu wa Wateja Wako?",
            subtitle: "Jiunge na biashara zinazotumia Biashara-Assistant kutoa huduma ya haraka, kupata mapato zaidi, na kujitofautisha na washindani.",
            button: "Anza Jaribio Bure Sasa"
        },
        chatDemoTabs: {
            label: "Ona mfano kwa",
            barber: "Kinyozi",
            spa: "Spa",
            clinic: "Kliniki",
            realestate: "Mali",
            hotel: "Hoteli"
        },
        chatDemo: {
            barber: {
                contactName: "Kinyozi ya Kamau",
                status: "huko mtandaoni",
                m1: "Hujambo, naweza kujireservi kunyolewa leo?",
                m2: "Sawa! Huduma gani? (Kunyolewa / Ndevu / Vyote)",
                m3: "Vyote.",
                m4: "Nafasi: 11:00 au 3:00. Ipi inafaa?",
                m5: "3:00.",
                m6: "Imereservwa! KES 500 jumla. Lipa ukifika au kwa M-Pesa. Tutaonana saa 9!"
            },
            spa: {
                contactName: "Serene Spa & Ustawi",
                status: "huko mtandaoni",
                m1: "Hujambo, ningependa kujireservi massage.",
                m2: "Karibu! Aina gani? (Swedish / Deep Tissue / Hot Stone)",
                m3: "Deep Tissue.",
                m4: "Nafasi: Leo 2pm au Kesho 10am. Unapendelea ipi?",
                m5: "Leo 2pm.",
                m6: "Sawa—KES 3,500. Tuma amana ya KES 1,000 kwa M-Pesa kuthibitisha. Tutaonana saa 8!"
            },
            clinic: {
                contactName: "GreenCare Kliniki",
                status: "huko mtandaoni",
                m1: "Hujambo, nahitaji kumuona daktari.",
                m2: "Sawa—unahitaji huduma gani? (Ushauri / Maabara / Meno)",
                m3: "Ushauri.",
                m4: "Nafasi: 10:30 au 2:00. Unapendelea ipi?",
                m5: "2:00.",
                m6: "Tafadhali tuma jina kamili + NHIF/bima (kama ipo). Mfanyakazi atathibitisha hivi karibuni."
            },
            realestate: {
                contactName: "Nairobi Homes",
                status: "huko mtandaoni",
                m1: "Natafuta nyumba ya vyumba 2.",
                m2: "Sawa—unapendelea eneo gani?",
                m3: "Kilimani.",
                m4: "Bajeti yako ni kiasi gani?",
                m5: "Hadi 60k.",
                m6: "Unaweza kuja kuona lini? (Jumamosi 11 / Jumamosi 2 / Jumapili 1)",
                m7: "Asante—wakala atakupigia kuthibitisha."
            },
            hotel: {
                contactName: "Coastline Hoteli",
                status: "huko mtandaoni",
                m1: "Mna vyumba wikendi hii?",
                m2: "Sawa—tarehe gani na wageni wangapi?",
                m3: "Ijumaa–Jumapili, watu wazima 2.",
                m4: "Chaguo: Standard / Deluxe. Unapendelea ipi?",
                m5: "Deluxe.",
                m6: "Asante—tuma jina + simu. Wafanyakazi watathibitisha upatikanaji na kutuma malipo."
            },
            },
        nav: {
            home: "Nyumbani",
            blog: "Blogu",
            why: "Kwa Nini",
            customerService: "Huduma ya Wateja",
            how: "Jinsi",
            who: "Kwa Nani",
            pricing: "Bei",
            getStarted: "Anza"
        },
        footer: {
            brand: "Biashara-Assistant",
            tagline: "Msaidizi wako wa WhatsApp wa biashara",
            product: "Bidhaa",
            company: "Kampuni",
            legal: "Kisheria",
            features: "Vipengele",
            howItWorks: "Inavyofanya Kazi",
            pricing: "Bei",
            faq: "Maswali Yanayoulizwa Mara Kwa Mara",
            aboutUs: "Kuhusu Sisi",
            contact: "Wasiliana",
            blog: "Blogu",
            careers: "Kazi",
            termsOfService: "Sheria za Huduma",
            privacyPolicy: "Sera ya Faragha",
            refundPolicy: "Sera ya Rudi Pesa",
            copyright: "© 2026 Biashara-Assistant. Haki zote zimehifadhiwa.",
            madeInKenya: "Imetengenezwa kwa ❤️ nchini Kenya",
            terms: "Sheria",
            privacy: "Faragha"
        }
    }
};

// ============================================
// Language Switcher
// ============================================

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        if (translation) {
            // Handle select options differently
            if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                // Check if element has white-space: pre-line style (for multi-line text)
                const hasPreLine = element.style.whiteSpace === 'pre-line' || 
                                   window.getComputedStyle(element).whiteSpace === 'pre-line';
                if (hasPreLine) {
                    // For pre-line elements, preserve \n characters
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, lang);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update language toggle button text (show the language you can switch TO)
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'en' ? 'SW' : 'EN';
    }
}

function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return typeof value === 'string' ? value : null;
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    setLanguage(currentLang);
    
    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'sw' : 'en';
            setLanguage(newLang);
        });
    }

    // Top nav mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    function closeMobileNav() {
        if (navLinks) navLinks.classList.remove('is-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }

    // Handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const fixedNavOffset = document.getElementById('topNav') ? 56 : 0;

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                closeMobileNav();

                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - fixedNavOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Form Handling (WhatsApp)
    // ============================================
    
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            if (!validateForm(data)) {
                return;
            }

            // Open WhatsApp with pre-filled message
            const whatsappNumber = '16086081288';
            const messageLines = [
                'New Biashara-Assistant signup request:',
                `Business Name: ${data.businessName || ''}`,
                `Your Name: ${data.yourName || ''}`,
                `WhatsApp Business Number: ${data.phone || ''}`,
                `Business Type: ${data.businessType || ''}`,
                `Email: ${data.email || ''}`,
                '',
                `Additional Info: ${data.additionalInfo || 'N/A'}`
            ];
            const whatsappText = messageLines.join('\n');
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
            window.open(whatsappUrl, '_blank');

            showFormSuccess();
            this.reset();
        });
    }
    
    // ============================================
    // Form Validation
    // ============================================
    
    function validateForm(data) {
        let isValid = true;
        
        // Validate required fields
        const requiredFields = ['businessName', 'yourName', 'phone', 'businessType', 'email'];
        
        requiredFields.forEach(fieldName => {
            const field = document.querySelector(`[name="${fieldName}"]`);
            
            if (!data[fieldName] || data[fieldName].trim() === '') {
                isValid = false;
                showFieldError(field, 'This field is required');
            } else {
                clearFieldError(field);
            }
        });
        
        // Validate email format
        const emailField = document.querySelector('[name="email"]');
        if (data.email && !isValidEmail(data.email)) {
            isValid = false;
            showFieldError(emailField, 'Please enter a valid email address');
        }
        
        // Validate phone format (basic Kenyan phone validation)
        const phoneField = document.querySelector('[name="phone"]');
        if (data.phone && !isValidKenyanPhone(data.phone)) {
            isValid = false;
            showFieldError(phoneField, 'Please enter a valid Kenyan phone number');
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidKenyanPhone(phone) {
        // Remove spaces and common formatting
        const cleaned = phone.replace(/\s+/g, '').replace(/[-\+]/g, '');
        // Kenyan phone numbers: 07XXXXXXXX or 2547XXXXXXXX
        const phoneRegex = /^(07\d{8}|2547\d{8})$/;
        return phoneRegex.test(cleaned);
    }
    
    function showFieldError(field, message) {
        if (!field) return;
        
        // Remove existing error
        clearFieldError(field);
        
        // Add error class
        field.classList.add('error');
        
        // Create error message element
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#EF4444';
        errorElement.style.fontSize = '12px';
        errorElement.style.marginTop = '4px';
        errorElement.style.display = 'block';
        
        // Insert after field
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        if (!field) return;
        
        field.classList.remove('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // ============================================
    // Show Form Success Message
    // ============================================
    
    function showFormSuccess() {
        const form = document.getElementById('signupForm');
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        const successTitle = currentLang === 'en' ? 'Thank you for signing up!' : 'Asante kwa kujisajili!';
        const successText = currentLang === 'en' 
            ? "We'll send setup instructions to your email shortly."
            : "Tutatumia maelekezo ya kusanidi kwenye barua pepe yako hivi karibuni.";
        successMessage.innerHTML = `
            <div style="
                background: #F0FDF4;
                border: 2px solid #10B981;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 24px;
                text-align: center;
            ">
                <div style="
                    font-size: 48px;
                    margin-bottom: 12px;
                ">✓</div>
                <h3 style="
                    color: #10B981;
                    font-size: 20px;
                    margin-bottom: 8px;
                ">${successTitle}</h3>
                <p style="
                    color: #065F46;
                    font-size: 14px;
                ">${successText}</p>
            </div>
        `;
        
        // Insert at the top of the form
        form.insertBefore(successMessage, form.firstChild);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    // ============================================
    // Real-time Field Validation
    // ============================================
    
    const formFields = document.querySelectorAll('#signupForm input, #signupForm select, #signupForm textarea');
    
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            const fieldName = this.name;
            const fieldValue = this.value.trim();
            
            // Clear previous errors
            clearFieldError(this);
            
            // Validate on blur
            if (this.hasAttribute('required') && !fieldValue) {
                showFieldError(this, 'This field is required');
                return;
            }
            
            // Email validation
            if (fieldName === 'email' && fieldValue && !isValidEmail(fieldValue)) {
                showFieldError(this, 'Please enter a valid email address');
                return;
            }
            
            // Phone validation
            if (fieldName === 'phone' && fieldValue && !isValidKenyanPhone(fieldValue)) {
                showFieldError(this, 'Please enter a valid Kenyan phone number');
                return;
            }
        });
        
        // Clear error on input
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearFieldError(this);
            }
        });
    });
    
    // ============================================
    // Add CSS for error states
    // ============================================
    
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #EF4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // Animated Chat Demo
    // ============================================

    const CHAT_INDUSTRIES = ['hotel', 'realestate', 'spa', 'clinic', 'barber'];

    // Defines bubble structure per industry (keys live under translations.{lang}.chatDemo.<industry>.*)
    const CHAT_DEMO_STRUCTURE = {
        barber: [
            { dir: 'in', keys: ['m1'] },
            { dir: 'out', keys: ['m2'] },
            { dir: 'in', keys: ['m3'] },
            { dir: 'out', keys: ['m4'] },
            { dir: 'in', keys: ['m5'] },
            { dir: 'out', keys: ['m6'] },
        ],
        spa: [
            { dir: 'in', keys: ['m1'] },
            { dir: 'out', keys: ['m2'] },
            { dir: 'in', keys: ['m3'] },
            { dir: 'out', keys: ['m4'] },
            { dir: 'in', keys: ['m5'] },
            { dir: 'out', keys: ['m6'] },
        ],
        clinic: [
            { dir: 'in', keys: ['m1'] },
            { dir: 'out', keys: ['m2'] },
            { dir: 'in', keys: ['m3'] },
            { dir: 'out', keys: ['m4'] },
            { dir: 'in', keys: ['m5'] },
            { dir: 'out', keys: ['m6'] },
        ],
        realestate: [
            { dir: 'in', keys: ['m1'] },
            { dir: 'out', keys: ['m2'] },
            { dir: 'in', keys: ['m3'] },
            { dir: 'out', keys: ['m4'] },
            { dir: 'in', keys: ['m5'] },
            { dir: 'out', keys: ['m6'] },
            { dir: 'out', keys: ['m7'] },
        ],
        hotel: [
            { dir: 'in', keys: ['m1'] },
            { dir: 'out', keys: ['m2'] },
            { dir: 'in', keys: ['m3'] },
            { dir: 'out', keys: ['m4'] },
            { dir: 'in', keys: ['m5'] },
            { dir: 'out', keys: ['m6'] },
        ],
        };

    let currentChatIndustry = 'hotel';
    let chatAutoRotateTimer = null;
    let userStoppedAutoRotate = false;
    let chatAnimationRunId = 0;

    function setActiveIndustrySelect(industry) {
        const select = document.getElementById('industrySelect');
        if (select) select.value = industry;
    }

    function clearChatMessages(chatMessages, typingIndicator) {
        // Remove everything except typing indicator
        const nodesToRemove = [];
        chatMessages.childNodes.forEach(node => {
            if (node !== typingIndicator) nodesToRemove.push(node);
        });
        nodesToRemove.forEach(n => chatMessages.removeChild(n));
    }

    function renderChatDemo(industry) {
        if (!CHAT_INDUSTRIES.includes(industry)) return;

        const chatMessages = document.getElementById('chatMessages');
        const typingIndicator = document.getElementById('typingIndicator');
        const contactNameEl = document.getElementById('chatContactName');
        const contactStatusEl = document.getElementById('chatContactStatus');

        if (!chatMessages || !typingIndicator || !contactNameEl || !contactStatusEl) return;

        currentChatIndustry = industry;
        setActiveIndustrySelect(industry);

        // Reset typing indicator
        typingIndicator.classList.remove('active');

        // Make sure typing indicator stays last
        if (typingIndicator.parentElement === chatMessages) {
            chatMessages.appendChild(typingIndicator);
        }

        clearChatMessages(chatMessages, typingIndicator);

        // Set contact header keys
        contactNameEl.setAttribute('data-i18n', `chatDemo.${industry}.contactName`);
        contactStatusEl.setAttribute('data-i18n', `chatDemo.${industry}.status`);

        const structure = CHAT_DEMO_STRUCTURE[industry] || [];
        structure.forEach((msg, idx) => {
            const messageEl = document.createElement('div');
            messageEl.className = `message ${msg.dir === 'out' ? 'message-outgoing' : 'message-incoming'}`;
            messageEl.setAttribute('data-message', String(idx + 1));

            const bubble = document.createElement('div');
            bubble.className = `message-bubble ${msg.dir === 'out' ? 'outgoing' : 'incoming'}`;

            const prelineSet = new Set(msg.prelineKeys || []);
            msg.keys.forEach((k, lineIdx) => {
                const p = document.createElement('p');
                p.setAttribute('data-i18n', `chatDemo.${industry}.${k}`);
                if (prelineSet.has(k)) {
                    p.classList.add('preline');
                    if (lineIdx > 0) p.style.marginTop = '8px';
                    if (k === 'pay') p.style.fontWeight = '600';
                } else if (lineIdx > 0) {
                    p.style.marginTop = '8px';
                }
                bubble.appendChild(p);
            });

            messageEl.appendChild(bubble);
            chatMessages.insertBefore(messageEl, typingIndicator);
        });

        // Translate freshly injected nodes
        setLanguage(currentLang);

        // Restart animation safely
        startChatAnimation();
    }

    function startChatAnimation() {
        chatAnimationRunId += 1;
        const runId = chatAnimationRunId;
        animateChatDemo(runId);
    }

    function animateChatDemo(runId) {
        const messages = document.querySelectorAll('#chatMessages .message[data-message]');
        const typingIndicator = document.getElementById('typingIndicator');
        const chatMessages = document.getElementById('chatMessages');

        if (!messages.length || !typingIndicator || !chatMessages) return;

        // Reset all messages to hidden
        messages.forEach(msg => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(10px)';
            msg.style.display = 'none';
        });

        typingIndicator.classList.remove('active');

        // per-message timing (slightly more natural than fixed arrays)
        const baseDelayIn = 1100;
        const baseDelayOut = 1500;
        const baseTyping = 900;
        const endLoopPause = 2600;

        let currentMessage = 0;

        function isStillActive() {
            return runId === chatAnimationRunId;
        }

        function showNextMessage() {
            if (!isStillActive()) return;

            if (currentMessage >= messages.length) {
                setTimeout(() => {
                    if (!isStillActive()) return;
                    startChatAnimation();
                }, endLoopPause);
                return;
            }

            const message = messages[currentMessage];
            const isOutgoing = message.classList.contains('message-outgoing');

            const afterShowDelay = isOutgoing ? baseDelayOut : baseDelayIn;

            if (isOutgoing) {
                typingIndicator.classList.add('active');
                setTimeout(() => {
                    if (!isStillActive()) return;
                    typingIndicator.classList.remove('active');

                    message.style.display = 'flex';
                    setTimeout(() => {
                        if (!isStillActive()) return;
                        message.style.opacity = '1';
                        message.style.transform = 'translateY(0)';
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }, 50);

                    currentMessage += 1;
                    setTimeout(showNextMessage, afterShowDelay);
                }, baseTyping);
            } else {
                message.style.display = 'flex';
                setTimeout(() => {
                    if (!isStillActive()) return;
                    message.style.opacity = '1';
                    message.style.transform = 'translateY(0)';
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 50);

                currentMessage += 1;
                setTimeout(showNextMessage, afterShowDelay);
            }
        }

        setTimeout(showNextMessage, 700);
    }

    function stopAutoRotate() {
        if (chatAutoRotateTimer) {
            clearInterval(chatAutoRotateTimer);
            chatAutoRotateTimer = null;
        }
    }

    function startAutoRotate() {
        stopAutoRotate();
        if (userStoppedAutoRotate) return;

        chatAutoRotateTimer = setInterval(() => {
            if (userStoppedAutoRotate) return;
            const idx = CHAT_INDUSTRIES.indexOf(currentChatIndustry);
            const next = CHAT_INDUSTRIES[(idx + 1) % CHAT_INDUSTRIES.length];
            renderChatDemo(next);
        }, 12000);
    }

    // Hook up industry dropdown
    const industrySelect = document.getElementById('industrySelect');
    if (industrySelect) {
        industrySelect.addEventListener('change', () => {
            userStoppedAutoRotate = true;
            stopAutoRotate();
            const industry = industrySelect.value || 'clinic';
            renderChatDemo(industry);
        });
    }

    // Initial render + animation + auto-rotate
    renderChatDemo('hotel');
    startAutoRotate();

    // ============================================
    // Scroll Reveal (Intersection Observer)
    // ============================================
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        // Fallback: show everything immediately
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }
});
