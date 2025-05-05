document.addEventListener('DOMContentLoaded', function () {
    console.log("Results page loaded");


    const nameElement = document.getElementById('playerName');
    const countryElement = document.getElementById('selectedCountry');
    const scoreElement = document.getElementById('totalScore');
    const avatarElement = document.getElementById('playerAvatar');
    const correctFakesElement = document.getElementById('correctFakes');
    const correctFactsElement = document.getElementById('correctFacts');
    const timelineList = document.getElementById('timelineList');

  
    const playerName = localStorage.getItem('playerName') || 'Unknown';
    const selectedCountry = localStorage.getItem('selectedCountry') || 'Unknown';
    const avatarId = localStorage.getItem('playerAvatar') || 1;
    const quizScore = parseInt(localStorage.getItem('quizScore')) || 0;
    const answers = JSON.parse(localStorage.getItem('answers')) || [];


    nameElement.textContent = playerName;
    countryElement.textContent = selectedCountry;
    scoreElement.textContent = `${quizScore}/30`;

    const correctFakes = answers.filter(ans => ans.correct && ans.isFake).length;
    const correctFacts = answers.filter(ans => ans.correct && !ans.isFake).length;
    correctFakesElement.textContent = correctFakes;
    correctFactsElement.textContent = correctFacts;

    const correctCount = answers.filter(ans => ans.correct).length;
    let avatarMood = correctCount > answers.length / 2 ? 'success' : 'fail';
    avatarElement.src = `avatars/avatar${avatarId}_${avatarMood}.png`;


    answers.forEach((ans, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const icon = document.createElement('img');
        icon.src = ans.correct ? 'icons/correct.png' : 'icons/incorrect.png';
        icon.alt = ans.correct ? 'Correct' : 'Incorrect';
        icon.className = 'timeline-icon';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'timeline-content';

        const title = document.createElement('h4');
        const type = ans.isFake ? 'Real' : 'Fake';
        title.textContent = `News #${index + 1} (${type})`;

        const summary = document.createElement('p');
        summary.textContent = ans.title;

        const button = document.createElement('button');
        button.className = 'popup-button';
        button.setAttribute('data-index', index);
        button.textContent = 'Click to see more';

        contentDiv.appendChild(title);
        contentDiv.appendChild(summary);
        contentDiv.appendChild(button);

        item.appendChild(icon);
        item.appendChild(contentDiv);
        timelineList.appendChild(item);
    });


    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup-button')) {
            const index = e.target.getAttribute('data-index');
            const answer = answers[index];

            const popup = document.createElement('div');
            popup.className = 'news-popup';
            popup.innerHTML = `
            <div class="popup-content">
                <div class="popup-text">
                    <h3 class="popup-title">${answer.title}</h3>
                    <h3 class="popup-date">${answer.date}</h3>
                    <p>${answer.text}</p>
                    
                </div>
                <button class="close-popup">Close</button>
            </div>
            `;
            document.body.appendChild(popup);
        }

        if (e.target.classList.contains('close-popup')) {
            e.target.closest('.news-popup').remove();
        }
    });



    document.getElementById('chooseCountryButton').addEventListener('click', () => {

        const playerName = localStorage.getItem('playerName');
        const playerAvatar = localStorage.getItem('playerAvatar');

        localStorage.clear();


        if (playerName) localStorage.setItem('playerName', playerName);
        if (playerAvatar) localStorage.setItem('playerAvatar', playerAvatar);


        window.location.href = "country.html";
    });
});
