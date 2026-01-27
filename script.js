// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.addEventListener('DOMContentLoaded', function() {
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
                ">Thank you for signing up!</h3>
                <p style="
                    color: #065F46;
                    font-size: 14px;
                ">We'll send setup instructions to your email shortly.</p>
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
