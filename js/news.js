document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript is running!");

    const avatarElement = document.getElementById('player-avatar');
    const counterElement = document.getElementById('question-counter');
    const titleElement = document.getElementById('news-title');
    const dateElement = document.getElementById('news-date');
    const textElement = document.getElementById('news-text');
    const imageElement = document.getElementById('news-image');
    const fakeBtn = document.getElementById('fake-btn');
    const factBtn = document.getElementById('fact-btn');

    const avatarId = localStorage.getItem('playerAvatar');
    avatarElement.src = `avatars/avatar${avatarId}_normal.png`;

    const countryCode = localStorage.getItem('selectedCountry');
    let newsItems = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const totalQuestions = 6;

    const userAnswers = []; 

    async function loadNews() {
        try {
            const response = await fetch(`data/news_${countryCode}.json`);
            if (!response.ok) throw new Error('File not found or data error');

            const allNews = await response.json();
            shuffleArray(allNews);
            newsItems = allNews.slice(0, totalQuestions);

            showQuestion();
        } catch (error) {
            console.error("Помилка завантаження новин:", error);
            alert("Error loading news. Please try again later.");
        }
    }

    function showQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            showResults();
            return;
        }

        const question = newsItems[currentQuestionIndex];
        counterElement.textContent = `News #${currentQuestionIndex + 1}`;
        titleElement.textContent = question.title || "No title";
        dateElement.textContent = question.date || "No date";
        textElement.textContent = question.text || "No content";

        if (question.image) {
            imageElement.src = question.image;
            imageElement.style.display = 'block';
        } else {
            imageElement.style.display = 'none';
        }
    }

    function handleAnswer(userThinksFake) {
        const currentNews = newsItems[currentQuestionIndex];
        const isCorrect = currentNews.isFake === userThinksFake;

        if (isCorrect) score += 5;


        userAnswers.push({
            title: currentNews.title,
            date: currentNews.date,
            text: currentNews.text,
            image: currentNews.image || '',
            isFake: currentNews.isFake,
            userAnswer: userThinksFake,
            correct: isCorrect
        });

        currentQuestionIndex++;
        showQuestion();
    }

    fakeBtn.addEventListener('click', () => handleAnswer(true));
    factBtn.addEventListener('click', () => handleAnswer(false));

    function showResults() {
        localStorage.setItem('quizScore', score);
        localStorage.setItem('answers', JSON.stringify(userAnswers));
        window.location.href = 'result.html';
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    loadNews();
});
