const translations = {
    en: {
      dashboard_title: "Creator Dashboard",
      users_title: "User Statistics",
      total_users_label: "Total Registered Users",
      active_users_label: "Active Users",
      charts_title: "Performance & Usage",
      performance_chart_title: "Average WPM by Difficulty",
      usage_chart_title: "Daily Usage",
      access_stats_title: "Site Access Statistics",
      total_visits_label: "Total Visits",
      unique_visitors_label: "Unique Visitors",
      home_page_label: "Home Page",
      typing_page_label: "Typing Page",
      leaderboard_page_label: "Leaderboard Page",
      leaderboard_title: "Top Players",
      rank_label: "Rank",
      username_label: "Username",
      max_wpm_label: "Max WPM",
      level_label: "Level",
      record_date_label: "Record Date",
      all_players_title: "All Players",
      all_username_label: "Username",
      all_level_label: "Level",
      avg_wpm_label: "Avg WPM",
      tests_taken_label: "Tests Taken",
      join_date_label: "Join Date",
      no_data: "No data available yet.",
      access_denied: "Only the creator (LUNAS) can access the Creator Dashboard.",
      logout: "Logout"
    },
    pt: {
      dashboard_title: "Painel do Criador",
      users_title: "Estatísticas de Usuários",
      total_users_label: "Total de Usuários Cadastrados",
      active_users_label: "Usuários Ativos",
      charts_title: "Desempenho e Uso",
      performance_chart_title: "PPM Médio por Dificuldade",
      usage_chart_title: "Uso Diário",
      access_stats_title: "Estatísticas de Acesso ao Site",
      total_visits_label: "Total de Visitas",
      unique_visitors_label: "Visitantes Únicos",
      home_page_label: "Página Inicial",
      typing_page_label: "Página de Digitação",
      leaderboard_page_label: "Página de Classificação",
      leaderboard_title: "Melhores Jogadores",
      rank_label: "Posição",
      username_label: "Nome de Usuário",
      max_wpm_label: "PPM Máximo",
      level_label: "Nível",
      record_date_label: "Data do Recorde",
      all_players_title: "Todos os Jogadores",
      all_username_label: "Nome de Usuário",
      all_level_label: "Nível",
      avg_wpm_label: "PPM Médio",
      tests_taken_label: "Testes Realizados",
      join_date_label: "Data de Registro",
      no_data: "Nenhum dado disponível ainda.",
      access_denied: "Apenas o criador (LUNAS) pode acessar o Painel do Criador.",
      logout: "Sair"
    }
  };
  
  let users = JSON.parse(localStorage.getItem('typeMasterUsers')) || {};
  let currentUser = JSON.parse(localStorage.getItem('typeMasterCurrentUser')) || null;
  let activeSessions = JSON.parse(localStorage.getItem('typeMasterActiveSessions')) || [];
  let siteAccesses = JSON.parse(localStorage.getItem('typeMasterSiteAccesses')) || {
    totalVisits: 0,
    uniqueVisitors: [],
    byPage: { home: 0, typing: 0, leaderboard: 0 },
    dailyUsage: {}
  };
  
  let currentLanguage = 'en';
  let currentTheme = currentUser ? currentUser.theme || 'default' : 'default';
  
  const totalUsersEl = document.getElementById('total-users');
  const activeUsersEl = document.getElementById('active-users');
  const performanceChartCanvas = document.getElementById('performance-chart');
  const usageChartCanvas = document.getElementById('usage-chart');
  const totalVisitsEl = document.getElementById('total-visits');
  const uniqueVisitorsEl = document.getElementById('unique-visitors');
  const homePageEl = document.getElementById('home-page');
  const typingPageEl = document.getElementById('typing-page');
  const leaderboardPageEl = document.getElementById('leaderboard-page');
  const accessDeniedEl = document.getElementById('access-denied');
  const dashboardContentEl = document.getElementById('dashboard-content');
  const languageSelect = document.getElementById('language-select');
  const logoutBtn = document.getElementById('logout-btn');
  const leaderboardTable = document.getElementById('leaderboard-table');
  const allPlayersTable = document.getElementById('all-players-table');
  
  let performanceChart, usageChart;
  let sortColumn = 'level';
  let sortDirection = -1;
  
  function updateLanguage() {
    const t = translations[currentLanguage];
    document.getElementById('dashboard-title').textContent = t.dashboard_title;
    document.getElementById('users-title').textContent = t.users_title;
    document.getElementById('total-users-label').textContent = t.total_users_label;
    document.getElementById('active-users-label').textContent = t.active_users_label;
    document.getElementById('charts-title').textContent = t.charts_title;
    document.getElementById('performance-chart-title').textContent = t.performance_chart_title;
    document.getElementById('usage-chart-title').textContent = t.usage_chart_title;
    document.getElementById('access-stats-title').textContent = t.access_stats_title;
    document.getElementById('total-visits-label').textContent = t.total_visits_label;
    document.getElementById('unique-visitors-label').textContent = t.unique_visitors_label;
    document.getElementById('home-page-label').textContent = t.home_page_label;
    document.getElementById('typing-page-label').textContent = t.typing_page_label;
    document.getElementById('leaderboard-page-label').textContent = t.leaderboard_page_label;
    document.getElementById('leaderboard-title').textContent = t.leaderboard_title;
    document.getElementById('rank-label').textContent = t.rank_label;
    document.getElementById('username-label').textContent = t.username_label;
    document.getElementById('max-wpm-label').textContent = t.max_wpm_label;
    document.getElementById('level-label').textContent = t.level_label;
    document.getElementById('record-date-label').textContent = t.record_date_label;
    document.getElementById('all-players-title').textContent = t.all_players_title;
    document.getElementById('all-username-label').textContent = t.all_username_label;
    document.getElementById('all-level-label').textContent = t.all_level_label;
    document.getElementById('avg-wpm-label').textContent = t.avg_wpm_label;
    document.getElementById('tests-taken-label').textContent = t.tests_taken_label;
    document.getElementById('join-date-label').textContent = t.join_date_label;
    logoutBtn.textContent = t.logout;
  }
  
  function applyTheme() {
    document.body.className = `min-h-screen ${currentTheme === 'default' ? 'bg-gradient-to-br from-blue-100 to-indigo-200' : currentTheme === 'dark' ? 'theme-dark' : 'theme-neon'}`;
  }
  
  function checkAdminAccess() {
    if (!currentUser || currentUser.username !== 'LUNAS' || users['LUNAS']?.password !== 'LUNAS') {
      accessDeniedEl.classList.remove('hidden');
      dashboardContentEl.classList.add('hidden');
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: translations[currentLanguage].access_denied,
        confirmButtonColor: '#4CAF50'
      });
      return false;
    }
    accessDeniedEl.classList.add('hidden');
    dashboardContentEl.classList.remove('hidden');
    return true;
  }
  
  function updateUserStats() {
    totalUsersEl.textContent = Object.keys(users).length;
  
    // Simular usuários ativos (expira sessões após 30 minutos)
    const now = Date.now();
    activeSessions = activeSessions.filter(session => now - session.timestamp < 30 * 60 * 1000);
    activeUsersEl.textContent = activeSessions.length;
  
    // Adicionar sessão atual para LUNAS
    if (currentUser && currentUser.username === 'LUNAS' && users['LUNAS']?.password === 'LUNAS') {
      const existingSession = activeSessions.find(s => s.username === currentUser.username);
      if (!existingSession) {
        activeSessions.push({ username: currentUser.username, timestamp: now });
      } else {
        existingSession.timestamp = now;
      }
      localStorage.setItem('typeMasterActiveSessions', JSON.stringify(activeSessions));
    }
  }
  
  function updateAccessStats() {
    // Simular novos acessos
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    siteAccesses.totalVisits += Math.floor(Math.random() * 5);
    siteAccesses.byPage.home += Math.floor(Math.random() * 2);
    siteAccesses.byPage.typing += Math.floor(Math.random() * 3);
    siteAccesses.byPage.leaderboard += Math.floor(Math.random() * 2);
  
    // Simular visitantes únicos
    const visitorId = 'user_' + Math.random().toString(36).substr(2, 9);
    if (!siteAccesses.uniqueVisitors.includes(visitorId)) {
      siteAccesses.uniqueVisitors.push(visitorId);
    }
  
    // Simular uso diário
    if (!siteAccesses.dailyUsage[today]) {
      siteAccesses.dailyUsage[today] = 0;
    }
    siteAccesses.dailyUsage[today] += Math.floor(Math.random() * 10);
  
    localStorage.setItem('typeMasterSiteAccesses', JSON.stringify(siteAccesses));
  
    totalVisitsEl.textContent = siteAccesses.totalVisits;
    uniqueVisitorsEl.textContent = siteAccesses.uniqueVisitors.length;
    homePageEl.textContent = siteAccesses.byPage.home;
    typingPageEl.textContent = siteAccesses.byPage.typing;
    leaderboardPageEl.textContent = siteAccesses.byPage.leaderboard;
  }
  
  function initPerformanceChart() {
    const wpmByDifficulty = {
      easy: { total: 0, count: 0 },
      medium: { total: 0, count: 0 },
      hard: { total: 0, count: 0 },
      marathon: { total: 0, count: 0 }
    };
  
    Object.values(users).forEach(user => {
      if (user.history) {
        user.history.forEach(entry => {
          wpmByDifficulty[entry.difficulty].total += entry.wpm;
          wpmByDifficulty[entry.difficulty].count += 1;
        });
      }
    });
  
    const labels = ['Easy', 'Medium', 'Hard', 'Marathon'];
    const data = labels.map(label => {
      const diff = label.toLowerCase();
      return wpmByDifficulty[diff].count > 0
        ? Math.round(wpmByDifficulty[diff].total / wpmByDifficulty[diff].count)
        : 0;
    });
  
    const chartColors = currentTheme === 'neon'
      ? ['#FF007A', '#00FF88', '#FF00FF', '#FFFF00']
      : ['#4CAF50', '#FBBF24', '#EF4444', '#8B5CF6'];
  
    performanceChart = new Chart(performanceChartCanvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: translations[currentLanguage].performance_chart_title,
          data,
          backgroundColor: chartColors,
          borderColor: chartColors.map(c => c.replace('0.6', '1')),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, title: { display: true, text: currentLanguage === 'en' ? 'WPM' : 'PPM' } },
          x: { title: { display: true, text: currentLanguage === 'en' ? 'Difficulty' : 'Dificuldade' } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
  
  function initUsageChart() {
    const today = new Date();
    const labels = [];
    const data = [];
  
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      labels.push(dateStr);
      data.push(siteAccesses.dailyUsage[dateStr] || 0);
    }
  
    const chartColor = currentTheme === 'neon' ? '#00FF88' : '#4CAF50';
  
    usageChart = new Chart(usageChartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: translations[currentLanguage].usage_chart_title,
          data,
          borderColor: chartColor,
          backgroundColor: chartColor + '60',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, title: { display: true, text: currentLanguage === 'en' ? 'Accesses' : 'Acessos' } },
          x: { title: { display: true, text: currentLanguage === 'en' ? 'Date' : 'Data' } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
  
  function initLeaderboard() {
    const players = Object.entries(users).map(([username, user]) => {
      const maxWpmEntry = user.history
        ? user.history.reduce((max, entry) => entry.wpm > max.wpm ? entry : max, { wpm: 0, date: '' })
        : { wpm: 0, date: '' };
      return {
        username,
        maxWpm: maxWpmEntry.wpm,
        level: user.level || 1,
        recordDate: maxWpmEntry.date ? new Date(maxWpmEntry.date).toLocaleDateString() : '-'
      };
    });
  
    const topPlayers = players
      .filter(p => p.maxWpm > 0)
      .sort((a, b) => b.maxWpm - a.maxWpm)
      .slice(0, 5);
  
    leaderboardTable.innerHTML = topPlayers.length > 0
      ? topPlayers.map((player, index) => `
          <tr class="${index === 0 ? 'leaderboard-rank-1' : index === 1 ? 'leaderboard-rank-2' : index === 2 ? 'leaderboard-rank-3' : ''}">
            <td class="py-3 px-4 border-b border-gray-200">${index + 1}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.username}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.maxWpm}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.level}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.recordDate}</td>
          </tr>
        `).join('')
      : `<tr><td colspan="5" class="py-3 px-4 text-center text-gray-600">${translations[currentLanguage].no_data}</td></tr>`;
  }
  
  function initAllPlayers() {
    const players = Object.entries(users).map(([username, user]) => {
      const history = user.history || [];
      const avgWpm = history.length > 0
        ? Math.round(history.reduce((sum, entry) => sum + entry.wpm, 0) / history.length)
        : 0;
      return {
        username,
        level: user.level || 1,
        avgWpm,
        tests: history.length,
        joinDate: user.joinDate ? new Date(user.joinDate).toLocaleDateString() : '-'
      };
    });
  
    players.sort((a, b) => {
      const valA = a[sortColumn];
      const valB = b[sortColumn];
      if (sortColumn === 'username' || sortColumn === 'joinDate') {
        return sortDirection * (valA.localeCompare ? valA.localeCompare(valB) : valA - valB);
      }
      return sortDirection * (valA - valB);
    });
  
    allPlayersTable.innerHTML = players.length > 0
      ? players.map(player => `
          <tr>
            <td class="py-3 px-4 border-b border-gray-200">${player.username}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.level}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.avgWpm}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.tests}</td>
            <td class="py-3 px-4 border-b border-gray-200">${player.joinDate}</td>
          </tr>
        `).join('')
      : `<tr><td colspan="5" class="py-3 px-4 text-center text-gray-600">${translations[currentLanguage].no_data}</td></tr>`;
  }
  
  function setupSortListeners() {
    document.querySelectorAll('#all-players-table th').forEach(th => {
      th.addEventListener('click', () => {
        const newSortColumn = th.dataset.sort;
        if (newSortColumn === sortColumn) {
          sortDirection *= -1;
        } else {
          sortColumn = newSortColumn;
          sortDirection = -1;
        }
        initAllPlayers();
      });
    });
  }
  
  function logoutUser() {
    localStorage.removeItem('typeMasterCurrentUser');
    window.location.href = 'index.html';
  }
  
  languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    updateLanguage();
    if (performanceChart) performanceChart.destroy();
    if (usageChart) usageChart.destroy();
    initPerformanceChart();
    initUsageChart();
    initLeaderboard();
    initAllPlayers();
  });
  
  logoutBtn.addEventListener('click', logoutUser);
  
  function initDashboard() {
    if (!checkAdminAccess()) return;
  
    updateLanguage();
    applyTheme();
    updateUserStats();
    updateAccessStats();
    initPerformanceChart();
    initUsageChart();
    initLeaderboard();
    initAllPlayers();
    setupSortListeners();
  }
  
  initDashboard();