document.addEventListener("DOMContentLoaded", () => {
    
    // Set Dynamic copyright year
    const copyrightElement = document.getElementById("copyright-year");
    
    // Copyrights
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Stratair Airconditioning & Electrical (Pty) Ltd. All Rights Reserved.`;
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
    // WhatsApp modal
    const waModal = document.getElementById('wa-modal');

    function toggleWaModal(show) {
        if (!waModal) return;
        waModal.classList.toggle('hidden', !show);
        document.body.style.overflow = show ? 'hidden' : '';
        if (show) document.getElementById('wa-modal-close')?.focus();
    }

    document.getElementById('wa-float-btn')?.addEventListener('click', () => toggleWaModal(true));
    document.getElementById('wa-hero-btn')?.addEventListener('click', () => toggleWaModal(true));
    document.getElementById('wa-modal-close')?.addEventListener('click', () => toggleWaModal(false));
    document.getElementById('wa-modal-backdrop')?.addEventListener('click', () => toggleWaModal(false));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!waModal?.classList.contains('hidden')) toggleWaModal(false);
            if (!emailModal?.classList.contains('hidden')) toggleEmailModal(false);
        }
    });

    // Email modal
    const emailModal = document.getElementById('email-modal');

    function toggleEmailModal(show) {
        if (!emailModal) return;
        emailModal.classList.toggle('hidden', !show);
        document.body.style.overflow = show ? 'hidden' : '';
        if (show) document.getElementById('email-modal-close')?.focus();
    }

    document.getElementById('email-trigger-btn')?.addEventListener('click', () => toggleEmailModal(true));
    document.getElementById('email-modal-close')?.addEventListener('click', () => toggleEmailModal(false));
    document.getElementById('email-modal-backdrop')?.addEventListener('click', () => toggleEmailModal(false));
});