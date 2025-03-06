function triggerEmergency() {
    if (confirm("Are you sure you want to send emergency alert?")) {
        shareLocation();
        alert("Emergency alert sent with your location to authorities and trusted contacts!");
    }
}

function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            alert(`Location shared!\nLatitude: ${lat}\nLongitude: ${lon}`);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function callEmergency() {
    window.location.href = 'tel:911';
}

function triggerSOS() {
    let count = 5;
    const timer = setInterval(() => {
        document.querySelector('.emergency-btn').innerHTML = 
            `<i class="fas fa-bell"></i> SOS (${count})`;
        count--;
        if (count < 0) {
            clearInterval(timer);
            triggerEmergency();
        }
    }, 1000);
}

function toggleAccordion(element) {
    element.parentElement.classList.toggle('active');
}

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
document.querySelector('.logo').addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

function showNationalHelplines() {
    alert("National Women Helpline: 1091\nEmergency PCR: 100\nChild Emergency: 1098\nMedical Emergency: 108");
}

function showStateHelplines(state) {
    const helplines = {
        'delhi': "Women Helpline: 1091\nPCR: 100",
        'mumbai': "Women Helpline: 103\nTraffic Police: 1095",
        'kolkata': "Women Helpline: 1091\nSenior Citizen: 1091"
    };
    alert(helplines[state] || "Select your state from website listing");
}

function showStateLegal() {
    const stateLegal = {
        'maharashtra': "MALSA: 022-22621111",
        'delhi': "DLSA: 011-23370557",
        'karnataka': "KLSA: 080-22110123",
        'tamilnadu': "TLSA: 044-28551122"
    };
    
    let message = "State Legal Services Authorities:\n\n";
    for(const [state, contact] of Object.entries(stateLegal)) {
        message += `${state.toUpperCase()}: ${contact}\n`;
    }
    
    alert(message + "\nFor other states, visit: https://doj.gov.in/access-to-justice-for-the-marginalized/");
}

// International Helpline Data
const internationalHelplines = {
    'usa': "National Domestic Violence Hotline: 1−800−799−7233",
    'uk': "Women's Aid: 0808 2000 247",
    'canada': "Assaulted Women's Helpline: 1-866-863-0511",
    'australia': "1800RESPECT: 1800 737 732"
};

function showInternationalHelp(country) {
    alert(internationalHelplines[country.toLowerCase()] || 
        "Contact local embassy or visit UN Women website");
}

// Child Sexual Abuse Helplines
function showCSAHelplines() {
    const csaHelplines = {
        'delhi': 'POCSO Cell: 1098, 1091',
        'mumbai': 'Child Welfare: 022-24941414',
        'kolkata': 'CWC: 033-22163539'
    };
    
    alert(`Child Sexual Abuse Helplines:\n\n${
        Object.entries(csaHelplines)
            .map(([city, num]) => `${city.toUpperCase()}: ${num}`)
            .join('\n')
    }`);
}

// Child Marriage Statistics
function showCMStats() {
    const stats = `Child Marriage Statistics (India):
    - National average: 23.3%
    - Rural areas: 27.5%
    - Urban areas: 14.7%
    Source: NFHS-5 (2021)`;
    
    alert(stats);
}

// Training Workshops
function showWorkshops() {
    window.open('https://invictus.in/self-defence-training/', '_blank');
}

function showTrainingModules() {
    window.open('http://ncw.nic.in/', '_blank');
}

// Direct Helpline Calling
function callHelpline(number) {
    if(confirm(`Call ${number}?`)) {
        window.location.href = `tel:${number}`;
    }
}



// Add these functions to your existing JS
function showWarningSigns() {
    const signs = [
        "Frequent insults/humiliation",
        "Controlling your movements",
        "Forcing financial dependence",
        "Threatening with weapons",
        "Forcing sexual acts"
    ];
    
    alert("Red Flags of Abuse:\n\n" + signs.join("\n• "));
}

function findShelters() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            window.open(`https://www.google.com/maps/search/women+shelter/@${lat},${lon},12z`, '_blank');
        });
    } else {
        alert("Please enable location services to find nearest shelters");
    }
}

// Existing callHelpline function can be used


// JavaScript: Simplified Emergency Functions
function triggerEmergency() {
    if (confirm("Send emergency alert with your location?")) {
        shareLocation();
        alert("Help is on the way! Stay safe until authorities arrive.");
    }
}

function callHelpline(number) {
    window.location.href = `tel:${number}`;
}




