
document.addEventListener('DOMContentLoaded', () => {

    
    const cadastroForm = document.getElementById('form-cadastro');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            
            if (password !== confirmPassword) {
                alert("As senhas não conferem!");
                return;
            }

           
            const users = JSON.parse(localStorage.getItem('users')) || [];

            
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert("Este email já está cadastrado!");
                return;
            }

            
            users.push({ name, email, password });

            
            localStorage.setItem('users', JSON.stringify(users));

            alert("Cadastro realizado com sucesso!");
            window.location.href = 'index.html'; 
        });
    }

  
    const loginForm = document.getElementById('form-login');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

           
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert(`Login bem-sucedido! Bem-vindo(a), ${user.name}!`);
               
                localStorage.setItem('loggedInUser', JSON.stringify(user));
               
                window.location.href = 'home.html';
            } else {
                alert("Email ou senha incorretos.");
            }
        });
    }

    
    const sugestaoForm = document.getElementById('form-sugestao');

    if (sugestaoForm) {
        sugestaoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const sugestao = document.getElementById('sugere').value;
            
           
            console.log('Sugestão Recebida:');
            console.log('Mensagem:', sugere);

            alert('Obrigado! Sua sugestão foi enviada com sucesso.');
            sugestaoForm.reset(); 
        });
    }

   
    const moodForm = document.getElementById('form-humor');

    if (moodForm) {
        moodForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const mood = document.getElementById('mood-select').value;
            
            
            const playlists = {
                feliz: 'https://open.spotify.com/playlist/5ntQTxst8llLHNdpmRHo2p?si=_DOC7HIBRyKF8wa7iK9fYw',
                triste: 'https://open.spotify.com/playlist/35V3ZpspucNggeY5651fzR?si=BxiRRLq0Qu-_s1KjxZZ-QA',
                animado: 'https://open.spotify.com/playlist/2MaQY2EHmehh2X8ADMtf42?si=lt_LgR9aQi6T1OKyamR5KA',
                estudando: 'https://open.spotify.com/playlist/64NuFJ9iSdev7z9Z4sYA5c?si=kIvHKMH6RZiLuUvfZViN_w',
                cansado: 'https://open.spotify.com/playlist/4Lw6TUrPoiQkTjXE46J8cD?si=-otsx8eRQwqK-3opuqfW-w'
            };

            const url = playlists[mood];

            if (url) {
               
                window.open(url, '_blank');
            } else {
                alert('Por favor, selecione um humor para continuar.');
            }
        });
    }
});