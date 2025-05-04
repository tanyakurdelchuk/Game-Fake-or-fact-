document.addEventListener('DOMContentLoaded', function() {
    const countryGrid = document.getElementById('countryGrid');
    const startButton = document.getElementById('startButton');
    const modalOverlay = document.getElementById('modalOverlay'); 
    const modalStartButton = document.getElementById('modalStartButton'); 
    let selectedCountry = null;


    if (!countryGrid || !startButton || !modalOverlay || !modalStartButton) {
        console.error("Один або кілька елементів не знайдено на сторінці.");
        return;
    }


    const countries = [
        { name: "USA", flag: "flags/USA.png" },
        { name: "Venezuela", flag: "flags/venezuela.png" },
        { name: "Ukraine", flag: "flags/ukraine.png" },
        { name: "France", flag: "flags/france.png" },
        { name: "Brazil", flag: "flags/brazil.png" },
        { name: "China", flag: "flags/china.png" }
    ];


    countries.forEach(country => {
        const countryOption = document.createElement('div');
        countryOption.className = 'country-option';
        countryOption.innerHTML = `
            <img src="${country.flag}" alt="${country.name} flag" class="country-flag">
            <div class="country-name">${country.name}</div>
        `;
        
        countryOption.addEventListener('click', function() {

            document.querySelectorAll('.country-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            

            this.classList.add('selected');
            selectedCountry = country.name;
            startButton.disabled = false;
        });
        
        countryGrid.appendChild(countryOption);
    });


    startButton.disabled = true;


    startButton.addEventListener('click', function() {
        if (selectedCountry) {
            modalOverlay.style.display = 'flex';
        }
    });


    modalStartButton.addEventListener('click', function() {

        localStorage.setItem('selectedCountry', selectedCountry);
        

        window.location.href = 'news.html';
    });
});
