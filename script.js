
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
                feliz: 'https://www.youtube.com/playlist?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8v2_4k',
                triste: 'https://www.youtube.com/playlist?list=PL4o29bINVT4F2s3D3z2ann_m_bA1c0o5g',
                animado: 'https://www.youtube.com/playlist?list=PL4o29bINVT4H8pP_1Gk2Yt_2-AhfjAn-i',
                estudando: 'https://www.youtube.com/playlist?list=PL4o29bINVT4E3o9Y2eGj_H-3a3qW9AIa8',
                cansado: 'https://www.youtube.com/playlist?list=PL4o29bINVT4E3o9Y2eGj_H-3a3qW9AIa8'
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