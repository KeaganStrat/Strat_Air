document.addEventListener("DOMContentLoaded", () => {
    
    // Set Dynamic copyright year
    const copyrightElement = document.getElementById("copyright-year");
    
    if (copyrightElement){
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Strat Air Air-Conditioning. All Rights Reserved.`;
    }

    // Business and Operation Hours calculation
    const statusElement = document.getElementById("business-status");
    
    if (statusElement) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const timeAsDecimal = currentHour + currentMinute / 60;

        // Strat Air closes at 4:30 PM (16.5)
        if (timeAsDecimal >= 7.5 && timeAsDecimal < 16.5 && now.getDay() !== 0) {
            statusElement.textContent = "Open Now • Closes at 4:30 PM";
            statusElement.className = "px-3 py-1 rounded-full text-sm font-semibold bg-green-900/50 text-green-400 border border-green-700";
        } 
        else{
            statusElement.textContent = "Closed • Opens at 7:30 AM";
            statusElement.className = "px-3 py-1 rounded-full text-sm font-semibold bg-red-900/50 text-red-400 border border-red-700";
        }
    }
});