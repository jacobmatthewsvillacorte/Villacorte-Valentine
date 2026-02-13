// 🆕 EMAIL NOTIFICATION FEATURE
// Get notified when your Valentine says YES!

function sendEmailNotification() {
    const config = window.VALENTINE_CONFIG;
    
    if (!config.emailNotification.enabled) {
        console.log('Email notifications are disabled');
        return;
    }

    const loveAmount = document.getElementById('loveValue').textContent;
    const valentineName = config.valentineName;
    const timestamp = new Date().toLocaleString();

    if (config.emailNotification.service === 'formsubmit') {
        sendViaFormSubmit(valentineName, loveAmount, timestamp);
    } else if (config.emailNotification.service === 'emailjs') {
        sendViaEmailJS(valentineName, loveAmount, timestamp);
    }
}

// Method 1: FormSubmit.co (Easiest - No setup required!)
function sendViaFormSubmit(valentineName, loveAmount, timestamp) {
    const config = window.VALENTINE_CONFIG;
    const email = config.emailNotification.yourEmail;
    
    if (!email || email === 'your-email@example.com') {
        console.log('Please set your email in config.js');
        return;
    }

    // Create form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', '💝 SHE SAID YES! Your Valentine Accepted! 💝');
    formData.append('message', `
🎉 AMAZING NEWS! 🎉

${valentineName} said YES to being your Valentine!

💖 Love Level: ${loveAmount}%
⏰ Time: ${timestamp}

She's waiting for you! 😊

---
Sent from your Valentine's website
    `);

    // Send via FormSubmit
    fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('✅ Email notification sent successfully!');
    })
    .catch(error => {
        console.log('Email notification failed (but celebration continues!):', error);
    });
}

// Method 2: EmailJS (More features but requires setup)
function sendViaEmailJS(valentineName, loveAmount, timestamp) {
    const config = window.VALENTINE_CONFIG;
    const emailConfig = config.emailNotification.emailJS;
    
    if (!emailConfig.publicKey || emailConfig.publicKey === 'your_public_key') {
        console.log('EmailJS not configured. Using FormSubmit instead.');
        sendViaFormSubmit(valentineName, loveAmount, timestamp);
        return;
    }

    // Initialize EmailJS
    emailjs.init(emailConfig.publicKey);

    // Template parameters
    const templateParams = {
        valentine_name: valentineName,
        love_amount: loveAmount,
        timestamp: timestamp,
        message: `${valentineName} said YES to being your Valentine! 💝`
    };

    // Send email
    emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams)
        .then(function(response) {
            console.log('✅ Email sent successfully!', response);
        })
        .catch(function(error) {
            console.log('Email failed:', error);
        });
}

// Make it globally available
window.sendEmailNotification = sendEmailNotification;
