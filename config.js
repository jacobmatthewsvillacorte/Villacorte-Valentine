// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Janeille",  // 👈 Your girlfriend's name!

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💕', '❣️'],
        bears: ['🧸', '🐻'],
        extras: ['🌹', '🎁', '💐', '🍫', '✨']  // NEW!
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: ""  // Removed secret answer
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // Celebration messages
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: false,  // Changed to false - user must click to play
        musicUrl: "https://res.cloudinary.com/dpkcv1sne/video/upload/v1770986680/Paramore__The_Only_Exception_OFFICIAL_VIDEO_vtewrt.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.7  // Increased volume
    },

    // 🆕 EMAIL NOTIFICATION - Get notified when she says YES!
    emailNotification: {
        enabled: true,
        service: "formsubmit",  // Options: "formsubmit" or "emailjs"
        
        // For FormSubmit (easiest - just add your email!)
        yourEmail: "villacortejacob@gmail.com",  // 👈 CHANGE THIS TO YOUR EMAIL
        
        // For EmailJS (optional, more features):
        emailJS: {
            serviceId: "your_service_id",
            templateId: "your_template_id",
            publicKey: "your_public_key"
        }
    },

    // 🆕 COUNTDOWN TIMER
    countdown: {
        enabled: true,
        targetDate: "2026-02-14T00:00:00",
        showDays: true,
        showHours: true,
        showMinutes: true,
        showSeconds: true
    }
};

// Don't modify below this line
window.VALENTINE_CONFIG = CONFIG;
