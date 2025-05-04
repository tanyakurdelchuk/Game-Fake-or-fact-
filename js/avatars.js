document.addEventListener('DOMContentLoaded', function() {
    const avatarGrid = document.getElementById('avatarGrid');
    const nextButton = document.getElementById('nextButton');
    let selectedAvatar = null;


    const avatars = [
        { id: 1, image: 'avatars/avatar1_normal.png' },
        { id: 2, image: 'avatars/avatar2_normal.png' },
        { id: 3, image: 'avatars/avatar3_normal.png' },
        { id: 4, image: 'avatars/avatar4_normal.png' },
        { id: 5, image: 'avatars/avatar5_normal.png' },
        { id: 6, image: 'avatars/avatar6_normal.png' }
    ];


    avatars.forEach(avatar => {
        const avatarOption = document.createElement('div');
        avatarOption.className = 'avatar-option';
        avatarOption.dataset.id = avatar.id;

        const img = document.createElement('img');
        img.src = avatar.image;
        img.alt = `Avatar ${avatar.id}`;
        img.onerror = function() {
            this.parentElement.textContent = `Avatar ${avatar.id}`;
            this.parentElement.style.fontSize = '24px';
            this.parentElement.style.color = '#555';
        };

        avatarOption.appendChild(img);

        avatarOption.addEventListener('click', function() {
            document.querySelectorAll('.avatar-option').forEach(option => {
                option.classList.remove('selected');
            });

            this.classList.add('selected');
            selectedAvatar = avatar.id;  
            nextButton.disabled = false;
        });

        avatarGrid.appendChild(avatarOption);
    });

    nextButton.disabled = true;

    nextButton.addEventListener('click', function() {
        if (selectedAvatar !== null) {

            localStorage.setItem('playerAvatar', selectedAvatar);

            console.log('Збережено аватара в localStorage:', selectedAvatar);


            window.location.href = "country.html";
        }
    });
});
