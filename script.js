// ============================================
// Translations Object
// ============================================

const translations = {
    en: {
        hero: {
            title: "Your Smart WhatsApp Assistant for Business",
            subtitle: "Replies to customers, takes bookings, and accepts Mpesa — automatically.",
            cta: "Get Started",
            supporting: "Built for Kenyan businesses 🇰🇪"
        },
        why: {
            title: "Why Choose Biashara-Assistant?",
            card1: {
                title: "Save Hours Every Day",
                body: "Stop manually replying to every message. Biashara-Assistant handles customer inquiries 24/7, so you can focus on growing your business."
            },
            card2: {
                title: "Never Miss a Customer",
                body: "Instant replies mean customers get answers immediately, even when you're busy. Turn every inquiry into a sale."
            },
            card3: {
                title: "Get Paid Faster",
                body: "Accept M-Pesa payments directly through WhatsApp. No need to share numbers or wait for confirmations—payments happen in the chat."
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
                title: "Customize Your Bot",
                body: "Set your business hours, services, prices, and payment options. Make it yours."
            },
            step4: {
                title: "Start Receiving Customers",
                body: "Your bot is live! Customers can now book, ask questions, and pay—all automatically."
            }
        },
        features: {
            title: "Everything You Need to Run Your Business"
        },
        who: {
            title: "Perfect for Kenyan Small Businesses"
        },
        pricing: {
            title: "Simple, Transparent Pricing"
        },
        form: {
            title: "Get Started in 5 Minutes",
            subtitle: "Fill out the form below and we'll set up your Biashara-Assistant right away.",
            businessName: {
                label: "Business Name *",
                placeholder: "e.g., Mama Sarah's Salon"
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
                salon: "Salon/Barbershop",
                restaurant: "Restaurant/Café",
                service: "Service Provider",
                retail: "Retail Shop",
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
            submit: "Start My Free Trial"
        },
        cta: {
            title: "Ready to Grow Your Biashara?",
            subtitle: "Join hundreds of Kenyan businesses using Biashara-Assistant to serve customers better."
        },
        chat: {
            contactName: "Mama Sarah's Salon",
            status: "online",
            message1: "Hi, do you have time for a haircut today?",
            message2: "Yes! We have slots at 2pm, 3pm, and 4pm. Which works for you?",
            message3: "3pm works. How much?",
            message4: "KES 500. You can pay via M-Pesa. Tap here to pay:",
            payButton: "Pay KES 500"
        }
    },
    sw: {
        hero: {
            title: "Msaidizi Wako wa WhatsApp wa Kibiashara",
            subtitle: "Hujibu wateja, huchukua mareservi, na hukubali malipo ya M-Pesa — kiotomatiki.",
            cta: "Anza Sasa",
            supporting: "Imeundwa kwa biashara za Kenya 🇰🇪"
        },
        why: {
            title: "Kwa Nini Uchague Biashara-Assistant?",
            card1: {
                title: "Okoa Masaa Kila Siku",
                body: "Acha kujibu kila ujumbe mwenyewe. Biashara-Assistant hushughulikia maswali ya wateja masaa 24, ili uweze kuzingatia kukuza biashara yako."
            },
            card2: {
                title: "Usikose Mteja Yeyote",
                body: "Majibu ya haraka yanamaanisha wateja hupata majibu mara moja, hata unapokuwa bize. Badilisha kila swali kuwa mauzo."
            },
            card3: {
                title: "Lipwa Haraka Zaidi",
                body: "Kubali malipo ya M-Pesa moja kwa moja kupitia WhatsApp. Hakuna haja ya kushiriki nambari au kusubiri uthibitisho—malipo hufanyika kwenye mazungumzo."
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
                title: "Sanidi Boti Yako",
                body: "Weka masaa ya biashara yako, huduma, bei, na chaguzi za malipo. Ifanye iwe yako."
            },
            step4: {
                title: "Anza Kupokea Wateja",
                body: "Boti yako iko hai! Wateja sasa wanaweza kujireservi, kuuliza maswali, na kulipa—yote kiotomatiki."
            }
        },
        features: {
            title: "Kila Kitu Unachohitaji Kuendesha Biashara Yako"
        },
        who: {
            title: "Inafaa Kwa Biashara Ndogo za Kenya"
        },
        pricing: {
            title: "Bei Rahisi na Wazi"
        },
        form: {
            title: "Anza kwa Dakika 5",
            subtitle: "Jaza fomu hapa chini na tutasanidi Biashara-Assistant yako mara moja.",
            businessName: {
                label: "Jina la Biashara *",
                placeholder: "mf., Salon ya Mama Sarah"
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
                salon: "Salon/Kinyozi",
                restaurant: "Mkahawa/Kahawa",
                service: "Mtoa Huduma",
                retail: "Duka la Rejareja",
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
            submit: "Anza Jaribio Bure"
        },
        cta: {
            title: "Tayari Kukuza Biashara Yako?",
            subtitle: "Jiunge na mamia ya biashara za Kenya zinazotumia Biashara-Assistant kuwahudumia wateja vyema zaidi."
        },
        chat: {
            contactName: "Salon ya Mama Sarah",
            status: "huko mtandaoni",
            message1: "Hujambo, una muda wa kunyoa leo?",
            message2: "Ndio! Tuna nafasi saa 2 asubuhi, 3 asubuhi, na 4 asubuhi. Ipi inakufaa?",
            message3: "Saa 3 inanifaa. Ni kiasi gani?",
            message4: "KES 500. Unaweza kulipa kupitia M-Pesa. Bofya hapa kulipa:",
            payButton: "Lipa KES 500"
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
            element.textContent = translation;
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
    // Handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
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
                
                // Calculate offset for fixed headers if needed
                const offset = 0;
                const targetPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Form Handling (Frontend Only)
    // ============================================
    
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!validateForm(data)) {
                return;
            }
            
            // Show success message (since there's no backend)
            showFormSuccess();
            
            // Reset form
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
});
