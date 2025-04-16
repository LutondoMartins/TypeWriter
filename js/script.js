const translations = {
    en: {
      title: "TypeMaster",
      login: "Login",
      register: "Register",
      logout: "Logout",
      login_title: "Login",
      username_label: "Username",
      password_label: "Password",
      login_submit: "Login",
      no_account_text: "Don't have an account? Register",
      register_title: "Create Account",
      email_label: "Email",
      register_submit: "Create Account",
      has_account_text: "Already have an account? Login",
      edit_profile_title: "Edit Profile",
      edit_username_label: "Username",
      edit_email_label: "Email",
      edit_photo_label: "Profile Photo",
      edit_profile_submit: "Save Changes",
      difficulty_title: "Choose Difficulty:",
      time_left_label: "Time Left",
      accuracy_label: "Accuracy",
      accuracy_tooltip: "Percentage of correctly typed characters",
      wpm_label: "WPM",
      wpm_tooltip: "Words Per Minute (average 5 characters per word)",
      cpm_label: "CPM",
      cpm_tooltip: "Characters Per Minute (correct characters typed)",
      errors_label: "Errors",
      phrases_label: "Phrases",
      restart_btn: "Restart",
      results_title: "Results",
      results_subtitle: "Here's how you did",
      result_wpm_label: "WPM",
      result_accuracy_label: "Accuracy",
      result_cpm_label: "CPM",
      result_errors_label: "Errors",
      result_phrases_label: "Phrases Completed",
      xp_gained_label: "Experience Gained",
      play_again_btn: "Play Again",
      share_results_btn: "Share Results",
      leaderboard_title: "Leaderboard",
      rank_label: "Rank",
      player_label: "Player",
      wpm_leaderboard_label: "WPM",
      accuracy_leaderboard_label: "Accuracy",
      level_label: "Level",
      username_exists: "Username already exists. Please choose another one.",
      invalid_credentials: "Invalid username or password.",
      username_taken: "This username is already taken.",
      share_text: "I scored {wpm} WPM, {accuracy} accuracy, and {errors} errors on TypeMaster! Try to beat my score: {url}",
      level_up_title: "Congratulations!",
      level_up_text: "You've reached Level {level}! Unlocked: {rewards}"
    },
    pt: {
      title: "TypeMaster",
      login: "Entrar",
      register: "Registrar",
      logout: "Sair",
      login_title: "Entrar",
      username_label: "Nome de usuário",
      password_label: "Senha",
      login_submit: "Entrar",
      no_account_text: "Não tem uma conta? Registre-se",
      register_title: "Criar Conta",
      email_label: "E-mail",
      register_submit: "Criar Conta",
      has_account_text: "Já tem uma conta? Entrar",
      edit_profile_title: "Editar Perfil",
      edit_username_label: "Nome de usuário",
      edit_email_label: "E-mail",
      edit_photo_label: "Foto de Perfil",
      edit_profile_submit: "Salvar Alterações",
      difficulty_title: "Escolha a Dificuldade:",
      time_left_label: "Tempo Restante",
      accuracy_label: "Precisão",
      accuracy_tooltip: "Porcentagem de caracteres digitados corretamente",
      wpm_label: "PPM",
      wpm_tooltip: "Palavras Por Minuto (média de 5 caracteres por palavra)",
      cpm_label: "CPM",
      cpm_tooltip: "Caracteres Por Minuto (caracteres corretos digitados)",
      errors_label: "Erros",
      phrases_label: "Frases",
      restart_btn: "Reiniciar",
      results_title: "Resultados",
      results_subtitle: "Veja como você se saiu",
      result_wpm_label: "PPM",
      result_accuracy_label: "Precisão",
      result_cpm_label: "CPM",
      result_errors_label: "Erros",
      result_phrases_label: "Frases Completadas",
      xp_gained_label: "Experiência Ganha",
      play_again_btn: "Jogar Novamente",
      share_results_btn: "Compartilhar Resultados",
      leaderboard_title: "Classificação",
      rank_label: "Posição",
      player_label: "Jogador",
      wpm_leaderboard_label: "PPM",
      accuracy_leaderboard_label: "Precisão",
      level_label: "Nível",
      username_exists: "Nome de usuário já existe. Escolha outro.",
      invalid_credentials: "Nome de usuário ou senha inválidos.",
      username_taken: "Este nome de usuário já está em uso.",
      share_text: "Marquei {wpm} PPM, {accuracy} de precisão e {errors} erros no TypeMaster! Tente superar meu placar: {url}",
      level_up_title: "Parabéns!",
      level_up_text: "Você alcançou o Nível {level}! Desbloqueado: {rewards}"
    }
  };
  
  const paragraphs = {
    en: {
      easy: [
        "The quick brown fox jumps over the lazy dog.",
        "A small bird sings in the green forest.",
        "The sun sets behind the calm hill.",
        "A cat naps on the warm windowsill.",
        "Kids run fast in the open park.",
        "A boat floats on the quiet river.",
        "Bright flowers bloom in the garden.",
        "The dog chases its tail in circles.",
        "A warm breeze moves the soft leaves.",
        "Stars twinkle in the clear night sky.",
        "A kite soars high above the field.",
        "The moon glows softly in the dark.",
        "A puppy barks at the passing cars.",
        "Rain taps gently on the tin roof.",
        "A child draws with colorful crayons.",
        "The team plays on the green field.",
        "A runner sprints down the track.",
        "The crowd cheers at the big goal.",
        "A guitar hums a soft happy tune.",
        "The drums beat loud in the band."
      ],
      medium: [
        "The five boxing wizards jump quickly over obstacles.",
        "Programming is the art of turning ideas into reality.",
        "The internet connects people across the entire globe.",
        "A spaceship glides through the vast starry cosmos.",
        "The old clock ticks loudly in the silent room.",
        "Waves crash gently against the sandy shore at dusk.",
        "A writer crafts stories under the dim lamp light.",
        "The forest hums with the sounds of hidden creatures.",
        "A chef mixes spices to create a bold new dish.",
        "The train speeds through the foggy countryside.",
        "A painter blends colors to capture a vivid sunset.",
        "The market buzzes with vendors and eager shoppers.",
        "A musician strums a melody on an old guitar.",
        "The library holds secrets in its dusty tomes.",
        "A hiker climbs the steep trail to the peak.",
        "The striker kicks the ball past the diving goalie.",
        "A cyclist races through the winding mountain path.",
        "The violin sings a melody at the evening concert.",
        "A singer hits the high note in a packed stadium.",
        "The cat meme makes everyone laugh online."
      ],
      hard: [
        "Quantum entanglement defies classical physics with instantaneous particle correlations.",
        "Cryptographic algorithms safeguard data through complex mathematical transformations.",
        "The human brain adapts via intricate neural networks and synaptic plasticity.",
        "Interstellar travel demands precise navigation around massive gravitational fields.",
        "The philosophy of absurdism explores meaning in a chaotic, indifferent universe.",
        "Exoplanet atmospheres challenge assumptions with diverse chemical compositions.",
        "Machine learning optimizes systems through iterative data-driven refinements.",
        "Geopolitical tensions arise from competing economic and ideological interests.",
        "Nanotechnology manipulates matter at the atomic scale for innovative applications.",
        "The biodiversity of coral reefs supports intricate marine ecosystems under threat.",
        "Relativity theory reshapes our understanding of time and space interactions.",
        "The ethics of AI grapple with autonomy and societal impact questions.",
        "Deep-sea exploration uncovers species adapted to extreme pressure environments.",
        "The fusion of art and technology redefines creative expression boundaries.",
        "Climate models predict cascading effects from polar ice cap depletion.",
        "Athletes train relentlessly to break world records in sprinting.",
        "Orchestras blend instruments for a symphony’s complex harmony.",
        "The viral meme sparks debates across social media platforms.",
        "Basketball strategies evolve with data-driven play analysis.",
        "Jazz improvisation weaves intricate rhythms in live performances."
      ],
      exclusive: [
        "A dragon soars above the misty ancient peaks.",
        "The time traveler steps into a forgotten era.",
        "A rogue AI whispers secrets from the digital void.",
        "The knight battles shadows in the cursed forest.",
        "A comedian slips on a banana peel dramatically."
      ]
    },
    pt: {
      easy: [
        "A rápida raposa pula sobre o cão preguiçoso.",
        "Um pássaro canta na floresta verdejante.",
        "O sol se põe atrás da colina tranquila.",
        "Um gato dorme na janela aquecida.",
        "Crianças correm no parque aberto.",
        "Um barco flutua no rio calmo.",
        "Flores brilham no jardim colorido.",
        "O cão persegue o rabo em círculos.",
        "Uma brisa move as folhas suaves.",
        "Estrelas piscam no céu claro.",
        "Uma pipa voa alto sobre o campo.",
        "A lua brilha suave na escuridão.",
        "Um filhote late para os carros.",
        "Chuva toca leve no telhado.",
        "Uma criança desenha com giz colorido.",
        "O time joga no campo verde.",
        "O corredor corre na pista rápida.",
        "A torcida vibra com o gol marcado.",
        "A guitarra toca uma melodia leve.",
        "Os tambores soam alto na banda."
      ],
      medium: [
        "Cinco magos boxeadores pulam rápido por obstáculos.",
        "Programação é a arte de transformar ideias em realidade.",
        "A internet conecta pessoas por todo o globo terrestre.",
        "Uma nave desliza pelo cosmos estrelado e vasto.",
        "O relógio velho tiquetaqueia na sala silenciosa.",
        "Ondas batem suave na praia arenosa ao entardecer.",
        "Um escritor cria histórias sob a luz fraca do abajur.",
        "A floresta zumbe com sons de criaturas escondidas.",
        "Um chef mistura temperos para criar um prato novo.",
        "O trem corre pela paisagem campestre enevoada.",
        "Um pintor mescla cores para capturar um pôr do sol.",
        "O mercado pulsa com vendedores e clientes curiosos.",
        "Um músico toca uma melodia em um violão velho.",
        "A biblioteca guarda segredos em livros empoeirados.",
        "Um trilheiro sobe a trilha íngreme até o pico.",
        "O atacante chuta a bola e engana o goleiro.",
        "O ciclista pedala rápido na trilha da montanha.",
        "O violino canta uma melodia no concerto noturno.",
        "O cantor acerta a nota alta no show lotado.",
        "O meme do gato diverte todos na internet."
      ],
      hard: [
        "Entrelaçamento quântico desafia a física com correlações instantâneas.",
        "Algoritmos criptográficos protegem dados com transformações complexas.",
        "O cérebro humano adapta-se por redes neurais e plasticidade sináptica.",
        "Viagens interestelares exigem navegação precisa em campos gravitacionais.",
        "O absurdismo explora o sentido em um universo caótico e indiferente.",
        "Atmosferas de exoplanetas desafiam com composições químicas diversas.",
        "Aprendizado de máquina otimiza sistemas com refinamentos baseados em dados.",
        "Tensões geopolíticas surgem de interesses econômicos e ideológicos rivais.",
        "Nanotecnologia manipula matéria na escala atômica para inovações.",
        "A biodiversidade dos recifes sustenta ecossistemas marinhos ameaçados.",
        "A teoria da relatividade reformula interações de tempo e espaço.",
        "A ética da IA lida com questões de autonomia e impacto social.",
        "Exploração do fundo do mar revela espécies adaptadas a pressões extremas.",
        "A fusão de arte e tecnologia redefine limites da expressão criativa.",
        "Modelos climáticos preveem efeitos em cascata do degelo polar.",
        "Atletas treinam intensamente para quebrar recordes de velocidade.",
        "Orquestras criam harmonias complexas em sinfonias grandiosas.",
        "O meme viral provoca risadas em redes sociais globais.",
        "Estratégias de basquete evoluem com análises de dados precisas.",
        "Improviso de jazz tece ritmos complexos em shows ao vivo."
      ],
      exclusive: [
        "Um dragão voa sobre picos antigos e enevoados.",
        "O viajante do tempo entra em uma era esquecida.",
        "Uma IA rebelde sussurra segredos do vazio digital.",
        "O cavaleiro luta contra sombras na floresta amaldiçoada.",
        "Um comediante escorrega dramaticamente em uma casca de banana."
      ]
    }
  };
  
  let users = JSON.parse(localStorage.getItem('typeMasterUsers')) || {};
  let currentUser = JSON.parse(localStorage.getItem('typeMasterCurrentUser')) || null;
  let leaderboard = JSON.parse(localStorage.getItem('typeMasterLeaderboard')) || [];
  
  let timer;
  let timeLeft = 60;
  let isTyping = false;
  let charIndex = 0;
  let mistakes = 0;
  let totalChars = 0;
  let currentDifficulty = 'medium';
  let currentLanguage = 'en';
  let currentTheme = 'default';
  let phrasesCompleted = 0;
  let totalWpm = 0;
  let totalAccuracy = 0;
  let marathonStats = [];
  let currentEffect = 'none';
  
  const typingText = document.getElementById('typing-text');
  const typingInput = document.getElementById('typing-input');
  const timeLeftEl = document.getElementById('time-left');
  const wpmEl = document.getElementById('wpm');
  const cpmEl = document.getElementById('cpm');
  const accuracyEl = document.getElementById('accuracy');
  const errorsEl = document.getElementById('errors');
  const phrasesEl = document.getElementById('phrases-completed');
  const phrasesBox = document.getElementById('phrases-box');
  const progressBar = document.getElementById('progress-bar');
  const restartBtn = document.getElementById('restart-btn');
  
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const editProfileModal = document.getElementById('edit-profile-modal');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const editProfileForm = document.getElementById('edit-profile-form');
  const loginContainer = document.getElementById('login-container');
  const userProfile = document.getElementById('user-profile');
  const usernameDisplay = document.getElementById('username-display');
  const userAvatar = document.getElementById('user-avatar');
  const userInitial = document.getElementById('user-initial');
  const userLevel = document.getElementById('user-level');
  const logoutBtn = document.getElementById('logout-btn');
  const editProfileBtn = document.getElementById('edit-profile-btn');
  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');
  const closeLoginModal = document.getElementById('close-login-modal');
  const closeRegisterModal = document.getElementById('close-register-modal');
  const closeEditProfileModal = document.getElementById('close-edit-profile-modal');
  
  const resultsModal = document.getElementById('results-modal');
  const resultWpm = document.getElementById('result-wpm');
  const resultCpm = document.getElementById('result-cpm');
  const resultAccuracy = document.getElementById('result-accuracy');
  const resultErrors = document.getElementById('result-errors');
  const resultPhrases = document.getElementById('result-phrases');
  const marathonResults = document.getElementById('marathon-results');
  const playAgainBtn = document.getElementById('play-again-btn');
  const closeResultsModal = document.getElementById('close-results-modal');
  const xpProgress = document.getElementById('xp-progress');
  const xpBar = document.getElementById('xp-bar');
  const resultLevel = document.getElementById('result-level');
  const resultXp = document.getElementById('result-xp');
  const resultXpNeeded = document.getElementById('result-xp-needed');
  const shareResultsBtn = document.getElementById('share-results-btn');
  
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  const marathonBtn = document.getElementById('marathon-btn');
  const languageSelect = document.getElementById('language-select');
  const themeSelect = document.getElementById('theme-select');
  const effectSelect = document.getElementById('effect-select');
  
  function isAnyModalOpen() {
    return (
      !loginModal.classList.contains('hidden') ||
      !registerModal.classList.contains('hidden') ||
      !editProfileModal.classList.contains('hidden') ||
      !resultsModal.classList.contains('hidden')
    );
  }
  
  function manageTypingFocus() {
    if (!isAnyModalOpen()) {
      typingInput.focus();
    }
  }
  
  function updateLanguage() {
    const t = translations[currentLanguage];
    document.querySelector('h1').textContent = t.title;
    loginBtn.textContent = t.login;
    registerBtn.textContent = t.register;
    logoutBtn.textContent = t.logout;
    document.getElementById('login-title').textContent = t.login_title;
    document.getElementById('login-username-label').textContent = t.username_label;
    document.getElementById('login-password-label').textContent = t.password_label;
    document.getElementById('login-submit').textContent = t.login_submit;
    document.getElementById('no-account-text').innerHTML = `${t.no_account_text} <a href="#" id="switch-to-register" class="text-indigo-600 hover:underline">${t.register}</a>`;
    document.getElementById('register-title').textContent = t.register_title;
    document.getElementById('register-username-label').textContent = t.username_label;
    document.getElementById('register-email-label').textContent = t.email_label;
    document.getElementById('register-password-label').textContent = t.password_label;
    document.getElementById('register-submit').textContent = t.register_submit;
    document.getElementById('has-account-text').innerHTML = `${t.has_account_text} <a href="#" id="switch-to-login" class="text-indigo-600 hover:underline">${t.login}</a>`;
    document.getElementById('edit-profile-title').textContent = t.edit_profile_title;
    document.getElementById('edit-username-label').textContent = t.edit_username_label;
    document.getElementById('edit-email-label').textContent = t.edit_email_label;
    document.getElementById('edit-photo-label').textContent = t.edit_photo_label;
    document.getElementById('edit-profile-submit').textContent = t.edit_profile_submit;
    document.getElementById('difficulty-title').textContent = t.difficulty_title;
    document.getElementById('time-left-label').textContent = t.time_left_label;
    document.getElementById('accuracy-label').textContent = t.accuracy_label;
    document.getElementById('accuracy-tooltip').textContent = t.accuracy_tooltip;
    document.getElementById('wpm-label').textContent = t.wpm_label;
    document.getElementById('wpm-tooltip').textContent = t.wpm_tooltip;
    document.getElementById('cpm-label').textContent = t.cpm_label;
    document.getElementById('cpm-tooltip').textContent = t.cpm_tooltip;
    document.getElementById('errors-label').textContent = t.errors_label;
    document.getElementById('phrases-label').textContent = t.phrases_label;
    restartBtn.textContent = t.restart_btn;
    document.getElementById('results-title').textContent = t.results_title;
    document.getElementById('results-subtitle').textContent = t.results_subtitle;
    document.getElementById('result-wpm-label').textContent = t.result_wpm_label;
    document.getElementById('result-accuracy-label').textContent = t.result_accuracy_label;
    document.getElementById('result-cpm-label').textContent = t.result_cpm_label;
    document.getElementById('result-errors-label').textContent = t.result_errors_label;
    document.getElementById('result-phrases-label').textContent = t.result_phrases_label;
    playAgainBtn.textContent = t.play_again_btn;
    shareResultsBtn.textContent = t.share_results_btn;
    document.getElementById('leaderboard-title').textContent = t.leaderboard_title;
    document.getElementById('rank-label').textContent = t.rank_label;
    document.getElementById('player-label').textContent = t.player_label;
    document.getElementById('wpm-leaderboard-label').textContent = t.wpm_leaderboard_label;
    document.getElementById('accuracy-leaderboard-label').textContent = t.accuracy_leaderboard_label;
    document.getElementById('level-label').textContent = t.level_label;
  }
  
  function applyTheme(theme) {
    document.body.className = `min-h-screen ${theme === 'default' ? 'bg-gradient-to-br from-blue-100 to-indigo-200' : theme === 'dark' ? 'theme-dark' : 'theme-neon'}`;
    currentTheme = theme;
    if (currentUser) {
      currentUser.theme = theme;
      localStorage.setItem('typeMasterCurrentUser', JSON.stringify(currentUser));
      users[currentUser.username].theme = theme;
      localStorage.setItem('typeMasterUsers', JSON.stringify(users));
    }
  }
  
  function applyAvatar() {
    userAvatar.className = 'w-10 h-10 rounded-full flex items-center justify-center';
    userInitial.className = '';
    if (currentUser && currentUser.photo) {
      userAvatar.style.backgroundImage = `url(${currentUser.photo})`;
      userAvatar.style.backgroundSize = 'cover';
      userAvatar.style.backgroundPosition = 'center';
      userInitial.classList.add('hidden');
    } else {
      userAvatar.style.backgroundImage = '';
      userAvatar.classList.add('bg-indigo-600', 'text-white');
      userInitial.textContent = currentUser ? currentUser.username.charAt(0).toUpperCase() : 'U';
      userInitial.classList.remove('hidden');
    }
  }
  
  function applyEffect(effect) {
    currentEffect = effect;
    if (currentUser) {
      currentUser.effect = effect;
      localStorage.setItem('typeMasterCurrentUser', JSON.stringify(currentUser));
      users[currentUser.username].effect = effect;
      localStorage.setItem('typeMasterUsers', JSON.stringify(users));
    }
  }
  
  function updateThemeOptions() {
    themeSelect.innerHTML = '<option value="default">Default Theme</option>';
    if (currentUser && currentUser.level >= 5) {
      themeSelect.innerHTML += '<option value="dark">Dark Theme</option>';
    }
    if (currentUser && currentUser.level >= 10) {
      themeSelect.innerHTML += '<option value="neon">Neon Theme</option>';
    }
    themeSelect.value = currentUser && currentUser.theme ? currentUser.theme : 'default';
  }
  
  function updateEffectOptions() {
    effectSelect.innerHTML = '<option value="none">No Effect</option>';
    if (currentUser && currentUser.level >= 5) {
      effectSelect.innerHTML += '<option value="lightning">Lightning Effect</option>';
    }
    if (currentUser && currentUser.level >= 8) {
      effectSelect.innerHTML += '<option value="fire">Fire Effect</option>';
    }
    if (currentUser && currentUser.level >= 12) {
      effectSelect.innerHTML += '<option value="emoji">Emoji Effect</option>';
    }
    effectSelect.value = currentUser && currentUser.effect ? currentUser.effect : 'none';
    effectSelect.classList.toggle('hidden', currentUser && currentUser.level < 5);
  }
  
  function checkAuthState() {
    if (currentUser) {
      loginContainer.classList.add('hidden');
      userProfile.classList.remove('hidden');
      userProfile.classList.add('flex');
      usernameDisplay.textContent = currentUser.username;
      userLevel.textContent = currentUser.level;
      updateThemeOptions();
      updateEffectOptions();
      applyTheme(currentUser.theme || 'default');
      applyEffect(currentUser.effect || 'none');
      applyAvatar();
      editProfileBtn.classList.toggle('hidden', currentUser.level < 3);
      marathonBtn.classList.toggle('hidden', currentUser.level < 20);
      document.getElementById('dashboard-link').classList.toggle('hidden', currentUser.username !== 'LUNAS');
    } else {
      loginContainer.classList.remove('hidden');
      userProfile.classList.add('hidden');
      userProfile.classList.remove('flex');
      applyTheme('default');
      applyEffect('none');
      applyAvatar();
      effectSelect.classList.add('hidden');
      editProfileBtn.classList.add('hidden');
      marathonBtn.classList.add('hidden');
      document.getElementById('dashboard-link').classList.add('hidden');
    }
  }
  
  function loadParagraph() {
    let availableParagraphs = paragraphs[currentLanguage][currentDifficulty];
    if (currentUser && currentUser.level >= 15) {
      availableParagraphs = [...availableParagraphs, ...paragraphs[currentLanguage].exclusive];
    }
    const randomIndex = Math.floor(Math.random() * availableParagraphs.length);
    const selectedParagraph = availableParagraphs[randomIndex];
  
    typingText.innerHTML = '';
  
    selectedParagraph.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      typingText.appendChild(span);
    });
  
    typingText.querySelectorAll('span')[0].classList.add('text-blue-500', 'cursor-animation');
  
    totalChars = selectedParagraph.length;
    manageTypingFocus();
  }
  
  function initTimer() {
    if (currentDifficulty === 'marathon') {
      return;
    }
    if (timeLeft > 0) {
      timeLeft--;
      timeLeftEl.textContent = timeLeft;
  
      progressBar.style.width = `${(1 - timeLeft / 60) * 100}%`;
  
      const wpm = Math.round(((charIndex - mistakes) / 5) / (60 - timeLeft) * 60);
      const cpm = charIndex - mistakes;
      const accuracy = charIndex > 0 ? Math.floor(((charIndex - mistakes) / charIndex) * 100) : 100;
  
      wpmEl.textContent = wpm || 0;
      cpmEl.textContent = cpm;
      accuracyEl.textContent = accuracy;
      errorsEl.textContent = mistakes;
    } else {
      clearInterval(timer);
      showResults();
    }
  }
  
  function initTyping() {
    if (isAnyModalOpen()) {
      return;
    }
  
    const characters = typingText.querySelectorAll('span');
    const typedChar = typingInput.value.charAt(charIndex);
  
    if (charIndex < characters.length && (currentDifficulty === 'marathon' || timeLeft > 0)) {
      if (!isTyping) {
        if (currentDifficulty !== 'marathon') {
          timer = setInterval(initTimer, 1000);
        }
        isTyping = true;
      }
  
      if (typedChar !== '' && typedChar !== null) {
        characters[charIndex].classList.remove('cursor-animation');
  
        if (characters[charIndex].textContent === typedChar) {
          characters[charIndex].classList.add('text-green-500');
          if (currentEffect === 'lightning') {
            characters[charIndex].classList.add('lightning-effect');
            setTimeout(() => characters[charIndex].classList.remove('lightning-effect'), 300);
            confetti({
              particleCount: 5,
              spread: 20,
              origin: { x: (charIndex % 50) / 50, y: 0.5 },
              colors: ['#3B82F6', '#93C5FD'],
              disableForReducedMotion: true
            });
          } else if (currentEffect === 'fire') {
            characters[charIndex].classList.add('fire-effect');
            setTimeout(() => characters[charIndex].classList.remove('fire-effect'), 500);
          } else if (currentEffect === 'emoji' && characters[charIndex].textContent === ' ') {
            const wordSpans = Array.from(characters).slice(charIndex - 5, charIndex);
            if (wordSpans.length >= 3 && Math.random() < 0.1) {
              const emojis = ['😄', '🚀', '🌟', '🎉'];
              wordSpans.forEach(span => {
                span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                span.classList.add('emoji-effect');
                setTimeout(() => span.classList.remove('emoji-effect'), 500);
              });
            }
          }
        } else {
          characters[charIndex].classList.add('text-red-500');
          mistakes++;
        }
  
        charIndex++;
  
        if (charIndex < characters.length) {
          characters[charIndex].classList.add('text-blue-500', 'cursor-animation');
        }
  
        const elapsedTime = currentDifficulty === 'marathon' ? 1 : 60 - timeLeft;
        const wpm = elapsedTime > 0 ? Math.round(((charIndex - mistakes) / 5) / elapsedTime * 60) : 0;
        const accuracy = charIndex > 0 ? Math.floor(((charIndex - mistakes) / charIndex) * 100) : 100;
  
        wpmEl.textContent = wpm || 0;
        accuracyEl.textContent = accuracy;
        cpmEl.textContent = charIndex - mistakes;
        errorsEl.textContent = mistakes;
  
        if (charIndex === characters.length) {
          if (currentDifficulty === 'marathon') {
            marathonStats.push({
              wpm: wpm,
              accuracy: accuracy,
              cpm: charIndex - mistakes,
              errors: mistakes
            });
            phrasesCompleted++;
            phrasesEl.textContent = phrasesCompleted;
            totalWpm += wpm;
            totalAccuracy += accuracy;
            charIndex = 0;
            mistakes = 0;
            typingInput.value = '';
            loadParagraph();
          } else {
            clearInterval(timer);
            showResults();
          }
        }
      }
    }
  }
  
  function showResults() {
    let wpm, cpm, accuracy, errors;
    if (currentDifficulty === 'marathon') {
      wpm = phrasesCompleted > 0 ? Math.round(totalWpm / phrasesCompleted) : 0;
      accuracy = phrasesCompleted > 0 ? Math.round(totalAccuracy / phrasesCompleted) : 100;
      cpm = marathonStats.reduce((sum, stat) => sum + stat.cpm, 0);
      errors = marathonStats.reduce((sum, stat) => sum + stat.errors, 0);
      marathonResults.classList.remove('hidden');
      resultPhrases.textContent = phrasesCompleted;
    } else {
      const elapsedTime = 60 - timeLeft;
      wpm = elapsedTime > 0 ? Math.round(((charIndex - mistakes) / 5) / elapsedTime * 60) : 0;
      cpm = charIndex - mistakes;
      accuracy = charIndex > 0 ? Math.floor(((charIndex - mistakes) / charIndex) * 100) : 100;
      errors = mistakes;
      marathonResults.classList.add('hidden');
    }
  
    resultWpm.textContent = wpm;
    resultCpm.textContent = cpm;
    resultAccuracy.textContent = accuracy + '%';
    resultErrors.textContent = errors;
  
    if (currentUser) {
      xpProgress.classList.remove('hidden');
  
      const difficultyMultiplier = {
        easy: 0.8,
        medium: 1,
        hard: 1.5,
        marathon: 2
      };
  
      let xpGained = Math.floor((wpm * (accuracy / 100) * difficultyMultiplier[currentDifficulty]));
      currentUser.xp += xpGained;
  
      let leveledUp = false;
      let newRewards = [];
      while (currentUser.xp >= currentUser.level * 100) {
        currentUser.xp -= currentUser.level * 100;
        currentUser.level += 1;
        leveledUp = true;
        if (currentUser.level === 3) {
          newRewards.push('Profile Editing');
        } else if (currentUser.level === 5) {
          newRewards.push('Dark Theme', 'Lightning Effect');
        } else if (currentUser.level === 8) {
          newRewards.push('Fire Effect');
        } else if (currentUser.level === 10) {
          newRewards.push('Neon Theme');
        } else if (currentUser.level === 12) {
          newRewards.push('Emoji Effect');
        } else if (currentUser.level === 15) {
          newRewards.push('Exclusive Phrases');
        } else if (currentUser.level === 20) {
          newRewards.push('Marathon Mode');
        }
      }
  
      if (leveledUp) {
        userLevel.textContent = currentUser.level;
        updateThemeOptions();
        updateEffectOptions();
        applyAvatar();
        editProfileBtn.classList.toggle('hidden', currentUser.level < 3);
        marathonBtn.classList.toggle('hidden', currentUser.level < 20);
        if (newRewards.length > 0) {
          const message = translations[currentLanguage].level_up_text
            .replace('{level}', currentUser.level)
            .replace('{rewards}', newRewards.join(', '));
          Swal.fire({
            title: translations[currentLanguage].level_up_title,
            text: message,
            icon: 'success',
            confirmButtonText: 'Awesome!',
            confirmButtonColor: '#4CAF50',
            didOpen: () => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
            }
          });
        }
      }
  
      resultLevel.textContent = currentUser.level;
      resultXp.textContent = currentUser.xp;
      resultXpNeeded.textContent = currentUser.level * 100;
  
      setTimeout(() => {
        xpBar.style.width = `${(currentUser.xp / (currentUser.level * 100)) * 100}%`;
      }, 500);
  
      users[currentUser.username] = currentUser;
      localStorage.setItem('typeMasterUsers', JSON.stringify(users));
      localStorage.setItem('typeMasterCurrentUser', JSON.stringify(currentUser));
  
      if (!currentUser.history) {
        currentUser.history = [];
      }
  
      currentUser.history.push({
        date: new Date().toISOString(),
        wpm: wpm,
        cpm: cpm,
        accuracy: accuracy,
        errors: errors,
        difficulty: currentDifficulty,
        phrasesCompleted: currentDifficulty === 'marathon' ? phrasesCompleted : null
      });
  
      updateLeaderboard(currentUser.username, wpm, accuracy, currentUser.level);
    } else {
      xpProgress.classList.add('hidden');
    }
  
    resultsModal.classList.remove('hidden');
  }
  
  function updateLeaderboard(username, wpm, accuracy, level) {
    const existingEntry = leaderboard.findIndex(entry => entry.username === username);
  
    if (existingEntry !== -1) {
      if (wpm > leaderboard[existingEntry].wpm) {
        leaderboard[existingEntry] = { 
          username, 
          wpm, 
          accuracy, 
          level,
          photo: currentUser ? currentUser.photo : null
        };
      }
    } else {
      leaderboard.push({ 
        username, 
        wpm, 
        accuracy, 
        level,
        photo: currentUser ? currentUser.photo : null 
      });
    }
  
    leaderboard.sort((a, b) => b.wpm - a.wpm);
  
    if (leaderboard.length > 10) {
      leaderboard = leaderboard.slice(0, 10);
    }
  
    localStorage.setItem('typeMasterLeaderboard', JSON.stringify(leaderboard));
  
    renderLeaderboard();
  }
  
  function renderLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
  
    leaderboard.forEach((entry, index) => {
      const row = document.createElement('tr');
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'w-6 h-6 rounded-full flex items-center justify-center';
      const initialSpan = document.createElement('span');
      if (entry.photo) {
        avatarDiv.style.backgroundImage = `url(${entry.photo})`;
        avatarDiv.style.backgroundSize = 'cover';
        avatarDiv.style.backgroundPosition = 'center';
      } else {
        avatarDiv.classList.add('bg-indigo-600', 'text-white');
        initialSpan.textContent = entry.username.charAt(0).toUpperCase();
        avatarDiv.appendChild(initialSpan);
      }
      row.innerHTML = `
        <td class="py-3 px-4 border-b border-gray-200">${index + 1}</td>
        <td class="py-3 px-4 border-b border-gray-200 font-medium flex items-center gap-2">
          ${avatarDiv.outerHTML}
          ${entry.username}
        </td>
        <td class="py-3 px-4 border-b border-gray-200">${entry.wpm}</td>
        <td class="py-3 px-4 border-b border-gray-200">${entry.accuracy}%</td>
        <td class="py-3 px-4 border-b border-gray-200">${entry.level}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  }
  
  function resetGame() {
    clearInterval(timer);
    timeLeft = 60;
    isTyping = false;
    charIndex = 0;
    mistakes = 0;
    phrasesCompleted = 0;
    totalWpm = 0;
    totalAccuracy = 0;
    marathonStats = [];
    typingInput.value = '';
    timeLeftEl.textContent = timeLeft;
    wpmEl.textContent = 0;
    cpmEl.textContent = 0;
    accuracyEl.textContent = 100;
    errorsEl.textContent = 0;
    phrasesEl.textContent = 0;
    phrasesBox.style.display = currentDifficulty === 'marathon' ? 'block' : 'none';
    progressBar.style.width = '0%';
    loadParagraph();
  }
  
  function registerUser(username, email, password) {
    if (users[username]) {
      alert(translations[currentLanguage].username_exists);
      return false;
    }
  
    users[username] = {
      username,
      email,
      password,
      level: 1,
      xp: 0,
      theme: 'default',
      effect: 'none',
      photo: null,
      history: []
    };
  
    localStorage.setItem('typeMasterUsers', JSON.stringify(users));
    return true;
  }
  
  function loginUser(username, password) {
    const user = users[username];
  
    if (!user || user.password !== password) {
      alert(translations[currentLanguage].invalid_credentials);
      return false;
    }
  
    currentUser = user;
    localStorage.setItem('typeMasterCurrentUser', JSON.stringify(currentUser));
    return true;
  }
  
  function logoutUser() {
    currentUser = null;
    localStorage.removeItem('typeMasterCurrentUser');
    checkAuthState();
  }
  
  function shareResults() {
    const wpm = resultWpm.textContent;
    const accuracy = resultAccuracy.textContent;
    const errors = resultErrors.textContent;
    const url = 'https://typemaster.example.com';
    let shareText = translations[currentLanguage].share_text
      .replace('{wpm}', wpm)
      .replace('{accuracy}', accuracy)
      .replace('{errors}', errors)
      .replace('{url}', url);
  
    if (currentDifficulty === 'marathon') {
      shareText += ` Completed ${phrasesCompleted} phrases in Marathon Mode!`;
    }
  
    if (navigator.share) {
      navigator.share({
        text: shareText,
        url: url
      }).catch(err => {
        console.error('Erro ao compartilhar:', err);
        navigator.clipboard.writeText(shareText)
          .then(() => alert(translations[currentLanguage].share_results_btn + ' copiado para a área de transferência!'))
          .catch(err => alert('Erro ao copiar: ' + err));
      });
    } else {
      navigator.clipboard.writeText(shareText)
        .then(() => alert(translations[currentLanguage].share_results_btn + ' copiado para a área de transferência!'))
        .catch(err => alert('Erro ao copiar: ' + err));
    }
  }
  
  function setupFocusEvents() {
    typingText.addEventListener('click', () => {
      if (!isAnyModalOpen()) {
        typingInput.focus();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (isAnyModalOpen()) {
        return;
      }
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        typingInput.focus();
      }
    });
  
    typingInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
      }
    });
  }
  
  loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    document.getElementById('login-username').focus();
  });
  
  registerBtn.addEventListener('click', () => {
    registerModal.classList.remove('hidden');
    document.getElementById('register-username').focus();
  });
  
  editProfileBtn.addEventListener('click', () => {
    editProfileModal.classList.remove('hidden');
    document.getElementById('edit-username').value = currentUser.username;
    document.getElementById('edit-email').value = currentUser.email;
    document.getElementById('edit-photo').value = '';
    document.getElementById('edit-username').focus();
  });
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (loginUser(username, password)) {
      loginModal.classList.add('hidden');
      checkAuthState();
      manageTypingFocus();
    }
  });
  
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    if (registerUser(username, email, password)) {
      registerModal.classList.add('hidden');
      loginUser(username, password);
      checkAuthState();
      manageTypingFocus();
    }
  });
  
  editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('edit-username').value;
    const newEmail = document.getElementById('edit-email').value;
    const photoInput = document.getElementById('edit-photo');
    let newPhoto = currentUser.photo;
  
    if (newUsername !== currentUser.username && users[newUsername]) {
      alert(translations[currentLanguage].username_taken);
      return;
    }
  
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPhoto = event.target.result;
        updateProfile(newUsername, newEmail, newPhoto);
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      updateProfile(newUsername, newEmail, newPhoto);
    }
  });
  
  function updateProfile(username, email, photo) {
    if (username !== currentUser.username) {
      users[username] = { ...users[currentUser.username], username, email, photo };
      delete users[currentUser.username];
      leaderboard.forEach(entry => {
        if (entry.username === currentUser.username) {
          entry.username = username;
          entry.photo = photo;
        }
      });
    } else {
      users[username].email = email;
      users[username].photo = photo;
    }
  
    currentUser.username = username;
    currentUser.email = email;
    currentUser.photo = photo;
  
    localStorage.setItem('typeMasterUsers', JSON.stringify(users));
    localStorage.setItem('typeMasterCurrentUser', JSON.stringify(currentUser));
    localStorage.setItem('typeMasterLeaderboard', JSON.stringify(leaderboard));
  
    editProfileModal.classList.add('hidden');
    checkAuthState();
    renderLeaderboard();
    manageTypingFocus();
  }
  
  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('hidden');
    registerModal.classList.remove('hidden');
    document.getElementById('register-username').focus();
  });
  
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
    document.getElementById('login-username').focus();
  });
  
  closeLoginModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    manageTypingFocus();
  });
  
  closeRegisterModal.addEventListener('click', () => {
    registerModal.classList.add('hidden');
    manageTypingFocus();
  });
  
  closeEditProfileModal.addEventListener('click', () => {
    editProfileModal.classList.add('hidden');
    manageTypingFocus();
  });
  
  logoutBtn.addEventListener('click', () => {
    logoutUser();
    manageTypingFocus();
  });
  
  typingInput.addEventListener('input', initTyping);
  
  restartBtn.addEventListener('click', () => {
    resetGame();
  });
  
  playAgainBtn.addEventListener('click', () => {
    resultsModal.classList.add('hidden');
    resetGame();
  });
  
  closeResultsModal.addEventListener('click', () => {
    resultsModal.classList.add('hidden');
    resetGame();
  });
  
  shareResultsBtn.addEventListener('click', () => {
    shareResults();
  });
  
  difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentDifficulty = btn.dataset.level;
      difficultyBtns.forEach(b => b.classList.remove('ring-2', 'ring-indigo-600'));
      btn.classList.add('ring-2', 'ring-indigo-600');
      resetGame();
    });
  });
  
  marathonBtn.addEventListener('click', () => {
    currentDifficulty = 'marathon';
    difficultyBtns.forEach(b => b.classList.remove('ring-2', 'ring-indigo-600'));
    marathonBtn.classList.add('ring-2', 'ring-indigo-600');
    resetGame();
  });
  
  languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateLanguage();
    resetGame();
  });
  
  themeSelect.addEventListener('change', (e) => {
    applyTheme(e.target.value);
  });
  
  effectSelect.addEventListener('change', (e) => {
    applyEffect(e.target.value);
  });
  
  function initGame() {
    checkAuthState();
    updateLanguage();
    loadParagraph();
    renderLeaderboard();
    setupFocusEvents();
  }
  
  window.addEventListener('load', initGame);