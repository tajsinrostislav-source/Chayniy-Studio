const gachaPool = [
    { id: "thegod", stars: 0, name: "Thegodperson", emoji: "👼🏻", chance: 0.005, desc: "Абсолютное ничто." },
    { id: "log", stars: 1, name: "Бревно", emoji: "🪵", chance: 8, desc: "Просто бревно." },
    { id: "tea_usual", stars: 1, name: "Обычный чай", emoji: "☕", chance: 8, desc: "Классика." },
    { id: "leaf", stars: 1, name: "Листок", emoji: "🍃", chance: 9, desc: "Упал с дерева." },
    { id: "green_tea", stars: 2, name: "Зелёный чай", emoji: "🍵", chance: 6, desc: "Полезный." },
    { id: "lemon", stars: 2, name: "Лимон", emoji: "🍋", chance: 6, desc: "Кислый." },
    { id: "sugar", stars: 2, name: "Сахар", emoji: "🍬", chance: 6, desc: "Сладкий." },
    { id: "cake", stars: 2, name: "Тортик", emoji: "🎂", chance: 5, desc: "Праздничный." },
    { id: "source", stars: 2, name: "Первоисточник", emoji: "📒", chance: 4, desc: "Священная книга." },
    { id: "sawada", stars: 3, name: "Савада", emoji: "👩🏻", chance: 4, desc: "Просто Савада." },
    { id: "fruit_tea", stars: 3, name: "Фруктовый чай", emoji: "🍹", chance: 4, desc: "Ягодный." },
    { id: "milk", stars: 3, name: "Молоко", emoji: "🥛", chance: 4, desc: "Белое." },
    { id: "tea_sugar", stars: 3, name: "Чай с сахаром", emoji: "🍵", chance: 4, desc: "В кубиках." },
    { id: "oreo", stars: 4, name: "Орео", emoji: "🍪", chance: 2, desc: "Печенька." },
    { id: "yui", stars: 4, name: "Юи", emoji: "🎸", chance: 1.5, desc: "Гитара." },
    { id: "mugi", stars: 4, name: "Муги-тян", emoji: "🧁", chance: 1.5, desc: "Кексик." },
    { id: "azusa", stars: 4, name: "Азуса", emoji: "🎻", chance: 1.5, desc: "Барабаны (в душе)." },
    { id: "ritsu", stars: 4, name: "Рицу", emoji: "🎧", chance: 1.5, desc: "Бас." },
    { id: "mio", stars: 4, name: "Мио", emoji: "🖤", chance: 1.5, desc: "Клавиши." },
    { id: "bird_hori", stars: 5, name: "Птица Хори", emoji: "🐦", chance: 1, desc: "Чирик." },
    { id: "bird_izumi", stars: 5, name: "Птица Изуми", emoji: "🕊️", chance: 1, desc: "Чирик-чирик." },
    { id: "kefir", stars: 5, name: "Kefir_Kefblch", emoji: "🥛", chance: 1, desc: "Мастер клининга и тайпсеттинга. И это при его 16 см (волос, разумеется)." },
    { id: "alkash", stars: 5, name: "Chayniy alkash", emoji: "🍺", chance: 1, desc: "Друг Путина." },
    { id: "wood", stars: 5, name: "Woodlander", emoji: "🪓", chance: 1, desc: "Художник." },
    { id: "sawada_god", stars: 6, name: "Всевышняя Савада", emoji: "👑", chance: 0.3, desc: "Богиня." },
    { id: "death_god", stars: 6, name: "Бог смерти", emoji: "☠️", chance: 0.2, desc: "Ужас." },
    { id: "death_note", stars: 6, name: "Тетрадь смерти", emoji: "📓", chance: 0.2, desc: "Кира." },
    { id: "nolan_mom", stars: 12, name: "Мама Нолана", emoji: "🤰🏻", chance: 0.00000001, desc: "Сын маминой подруги." }
];

const titleList = [
    { id: "birds", name: "Птички летят...", desc: "Получить 1 птицу Хори и 1 птицу Изуми" },
    { id: "otaku", name: "Отаку", desc: "Выбить всех, кроме 12 и 0 звезд" },
    { id: "combo", name: "Комбо!", desc: "Выбить Орео и Молоко" },
    { id: "tea_lover", name: "Чайный любитель", desc: "Выбить все виды чая" },
    { id: "cook", name: "Повар", desc: "Выбить всю еду" },
    { id: "biologist", name: "Биолог", desc: "Выбить всех растений" },
    { id: "k_on", name: "К-он", desc: "Выбить Азусу, Рицу, Мио, Юи и Муги" },
    { id: "kefir_god", name: "Кефирный бог", desc: "Выбить Кефира 100 раз" },
    { id: "supreme_god", name: "Всевышний бог", desc: "Выбить всех карт по 1 разу" },
    { id: "know_it_all", name: "Тот, кто познал всё", desc: "Выбить всех карт по 5 раз" },
    { id: "secret_god", name: "Секретный бог", desc: "Выбить Thegodperson" },
    { id: "putin_friend", name: "Друг Путина", desc: "Выбить Алкаша 100 раз" },
    { id: "blind_artist", name: "Слепой художник", desc: "Выбить Вуда 100 раз" },
    { id: "cup_storm", name: "Гроза чашки", desc: "Разбить чашку 20 раз" },
    { id: "studio", name: "Chayniy Studio", desc: "Собрать всех, кто выпадает с чашки" },
    { id: "lover", name: "Я любовник!", desc: "Найти секрет Кефира" },
    { id: "walked_by", name: "Просто прошел мимо", desc: "Сделать 1 крутку" },
    { id: "spin_spin", name: "Крутим! Крутим!", desc: "Сделать 50 круток" },
    { id: "ludoman", name: "Лудоман", desc: "Сделать 100 круток" },
    { id: "tired_boss", name: "Я очень устал босс", desc: "Сделать 500 круток" },
    { id: "i_know_all", name: "Я знаю всё", desc: "Сделать 1000 круток" },
    { id: "mom_friend", name: "Сын маминой подруги", desc: "Выбить Маму Нолана" },
    { id: "love_sawada", name: "Я люблю Саваду", desc: "Выбить Саваду 5 раз и Всевышнюю Саваду 1 раз" },
    { id: "retired_14", name: "Вышел на пенсию в 14", desc: "Посмотреть описание Чайного алкаша" },
    { id: "16cm", name: "16см?!", desc: "Посмотреть описание Кефира" },
    { id: "god_slave", name: "Раб божий", desc: "Посмотреть описание Вуда" },
    { id: "flower", name: "Цветочек", desc: "Посмотреть описание Лютика" },
    { id: "kira", name: "Я — Кира", desc: "Выбить Тетрадь смерти и Бога смерти" },
    { id: "bad_meme", name: "Плохой мем", desc: "Сделать 67 круток" },
    { id: "moon_eater", name: "Пожиратель Лун", desc: "Призвать черную дыру во время Сложного режима" }
];

let state = {
    inventory: {}, titles: [], totalSpins: 0, cupBreaks: 0,
    kefirSecretFound: false, readAlkash: false, readKefir: false, readWood: false, readLutik: false,
    hardcoreMode: false, hardcoreClicks: { alkash: 0, kefir: 0, wood: 0, lutik: 0 }
};

// Загрузка сохранений
if (localStorage.getItem('chayniyStudioSave')) {
    try { 
        state = JSON.parse(localStorage.getItem('chayniyStudioSave')); 
        if(!state.hardcoreClicks) state.hardcoreClicks = { alkash: 0, kefir: 0, wood: 0, lutik: 0 };
    } catch(e) {}
}

function saveGame() {
    localStorage.setItem('chayniyStudioSave', JSON.stringify(state));
    renderInventory();
    checkTitles();
    if (state.hardcoreMode) document.body.classList.add('hardcore-mode');
    else document.body.classList.remove('hardcore-mode');
}

// --- ФУНКЦИИ ОКОН ---
function openModal(id) { 
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.style.display = "block"; 
    if (id === 'alkash' && !state.readAlkash) { state.readAlkash = true; saveGame(); }
    if (id === 'kefir' && !state.readKefir) { state.readKefir = true; saveGame(); }
    if (id === 'wood' && !state.readWood) { state.readWood = true; saveGame(); }
    if (id === 'lutik' && !state.readLutik) { state.readLutik = true; saveGame(); }
}

function closeModal(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none"; 
}

function showTitleInfo(titleId) {
    const t = titleList.find(item => item.id === titleId);
    if (!t) return;
    const body = document.getElementById('card-view-body');
    body.innerHTML = `<h2 style="color: #f39c12;">Титул</h2><h3 style="margin-top: 10px;">${t.name}</h3><p style="margin-top: 20px; font-size: 16px;"><strong>Как получить:</strong></p><p style="color: #ccc;">${t.desc}</p>`;
    openModal('card-view-modal');
}

function showToast(message) {
    const toast = document.getElementById('custom-toast');
    const text = document.getElementById('toast-text');
    if (!toast || !text) return;
    text.innerHTML = message;
    toast.classList.add('show-toast');
    setTimeout(() => { toast.classList.remove('show-toast'); }, 3500);
}

// --- ЧАШКА ---
function breakCup() {
    const cup = document.getElementById('cup');
    const resetBtn = document.getElementById('reset-btn');
    if (!cup || cup.classList.contains('broken')) return;
    
    cup.classList.add('smashed'); 
    cup.style.cursor = "default";
    document.querySelectorAll('.drop-item').forEach(el => el.classList.remove('active'));
    
    setTimeout(() => {
        cup.classList.add('broken');
        const chance = Math.floor(Math.random() * 100) + 1;
        
        if (chance <= 10) { 
            const angel = document.getElementById('drop-angel');
            const demon = document.getElementById('drop-demon');
            angel.classList.add('active'); 
            demon.classList.add('active');
            angel.style.pointerEvents = "auto"; angel.style.cursor = "pointer";
            demon.style.pointerEvents = "auto"; demon.style.cursor = "pointer";
            const openChoice = (e) => { e.stopPropagation(); openModal('void-choice-modal'); };
            angel.onclick = openChoice;
            demon.onclick = openChoice;
        } else {
            const randomItem = Math.floor(Math.random() * 4);
            if (randomItem === 0) document.getElementById('drop-log').classList.add('active');
            if (randomItem === 1) document.getElementById('drop-flower').classList.add('active');
            if (randomItem === 2) document.getElementById('drop-tea').classList.add('active');
            if (randomItem === 3) document.getElementById('drop-kefir').classList.add('active');
        }
        if (resetBtn && !state.hardcoreMode) resetBtn.classList.add('show');
        state.cupBreaks++;
        saveGame();
    }, 400);
}

function resetCup(event) {
    if (state.hardcoreMode) return;
    event.stopPropagation(); 
    const cup = document.getElementById('cup');
    const resetBtn = document.getElementById('reset-btn');
    if (cup) { cup.classList.remove('broken'); cup.classList.remove('smashed'); cup.style.cursor = "pointer"; }
    document.querySelectorAll('.drop-item').forEach(el => el.classList.remove('active'));
    if (resetBtn) resetBtn.classList.remove('show');
}

function acceptDarkness() {
    if(confirm("Ты уверен? ВЕСЬ прогресс будет удален, а игра станет сложнее.")) {
        localStorage.removeItem('chayniyStudioSave');
        localStorage.setItem('chayniyHardcore', 'true');
        location.reload();
    }
}

function takePower() {
    state.titles = titleList.map(t => t.id); 
    saveGame(); 
    closeModal('void-choice-modal');
    showToast("Все титулы получены!");
}

// --- ГАЧА ---
function getRandomCard() {
    const rand = Math.random() * 100;
    let cumulativeChance = 0;
    let pool = JSON.parse(JSON.stringify(gachaPool)); 
    if (state.hardcoreMode) {
        pool.forEach(c => {
            if (c.stars >= 4) c.chance = c.chance / 10;
            else c.chance = c.chance * 1.5;
        });
    }
    for (let i = 0; i < pool.length; i++) {
        cumulativeChance += pool[i].chance;
        if (rand <= cumulativeChance) return pool[i];
    }
    return pool[1]; 
}

function pullGacha() {
    const btn = document.getElementById('spin-btn');
    if (!btn || btn.disabled) return;
    const resultBox = document.getElementById('gacha-result');
    if (!resultBox) return;
    resultBox.innerHTML = ''; 

    const card = getRandomCard();
    const cardElement = document.createElement('div');
    cardElement.className = `gacha-card rarity-${card.stars}`;
    let starsStr = card.stars === 0 ? "0 ⭐ (АБСОЛЮТ)" : card.stars === 12 ? "12 ⭐ (БОЖЕСТВЕННО)" : '⭐'.repeat(card.stars);
    
    cardElement.innerHTML = `<div class="emoji-img">${card.emoji}</div><h4>${card.name}</h4><div class="stars">${starsStr}</div>`;
    resultBox.appendChild(cardElement);

    if (!state.inventory[card.id]) state.inventory[card.id] = 0;
    state.inventory[card.id]++;
    state.totalSpins++;
    saveGame();

    if (card.stars === 6 || card.stars === 12 || card.stars === 0) {
        btn.disabled = true;
        const originalText = btn.innerText;
        btn.innerText = "КРУТИТСЯ...";
        setTimeout(() => { btn.disabled = false; btn.innerText = originalText; }, 2500);
        document.body.classList.add('shake-screen');
        setTimeout(() => document.body.classList.remove('shake-screen'), 600);
        let flash = document.getElementById('flash-overlay');
        if (!flash) { flash = document.createElement('div'); flash.id = 'flash-overlay'; document.body.appendChild(flash); }
        if (card.stars === 12) flash.style.background = 'radial-gradient(circle, #00ffff, #ff00ff, #000)';
        else if (card.stars === 6) flash.style.background = 'radial-gradient(circle, #ffffff, #ff0000, #000)';
        else flash.style.background = '#000000';
        flash.classList.remove('flash-animation');
        void flash.offsetWidth; 
        flash.classList.add('flash-animation');
        if (card.stars === 0) {
            document.body.style.animation = "shakeScreen 0.2s infinite";
            setTimeout(() => { document.body.style.animation = "none"; }, 1500);
        }
    }
}

// --- ИНВЕНТАРЬ ---
function renderInventory() {
    const invContainer = document.getElementById('inventory-container');
    if (!invContainer) return;
    invContainer.innerHTML = '';
    gachaPool.forEach(card => {
        const count = state.inventory[card.id] || 0;
        const div = document.createElement('div');
        if (count > 0) {
            div.className = `inv-card rarity-${card.stars}`;
            div.innerHTML = `<div class="inv-emoji">${card.emoji}</div><div class="inv-count">x${count}</div>`;
            div.onclick = () => showCardInfo(card, count);
        } else {
            div.className = `inv-card locked`;
            div.innerHTML = `?`;
        }
        invContainer.appendChild(div);
    });
}

function showCardInfo(card, count) {
    const body = document.getElementById('card-view-body');
    if (!body) return;
    body.innerHTML = `<h2>${card.name}</h2><div style="font-size: 60px; margin: 15px 0;">${card.emoji}</div><p><strong>Редкость:</strong> ${card.stars} ⭐</p><p><strong>Шанс:</strong> ${card.chance}%</p><p><strong>Выпало раз:</strong> ${count}</p><p style="margin-top: 15px; font-style: italic; color: #aaa;">"${card.desc}"</p>`;
    openModal('card-view-modal');
}

// --- ТИТУЛЫ ---
function checkTitles() {
    let unlocked = [];
    const inv = state.inventory;

    if (inv["bird_hori"] > 0 && inv["bird_izumi"] > 0) unlocked.push("birds");
    const allCommon = gachaPool.filter(c => c.stars > 0 && c.stars <= 5).every(c => inv[c.id] > 0);
    if (allCommon) unlocked.push("otaku");
    if (inv["oreo"] > 0 && inv["milk"] > 0) unlocked.push("combo");
    if (inv["tea_usual"] > 0 && inv["green_tea"] > 0 && inv["fruit_tea"] > 0 && inv["tea_sugar"] > 0) unlocked.push("tea_lover");
    if (inv["cake"] > 0 && inv["oreo"] > 0) unlocked.push("cook");
    if (inv["leaf"] > 0 && inv["lemon"] > 0) unlocked.push("biologist");
    if (inv["azusa"] > 0 && inv["ritsu"] > 0 && inv["mio"] > 0 && inv["yui"] > 0 && inv["mugi"] > 0) unlocked.push("k_on");
    if (inv["kefir"] >= 100) unlocked.push("kefir_god");
    if (gachaPool.every(c => inv[c.id] > 0)) unlocked.push("supreme_god");
    if (gachaPool.every(c => inv[c.id] >= 5)) unlocked.push("know_it_all");
    if (inv["thegod"] > 0) unlocked.push("secret_god");
    if (inv["alkash"] >= 100) unlocked.push("putin_friend");
    if (inv["wood"] >= 100) unlocked.push("blind_artist");
    if (state.cupBreaks >= 20) unlocked.push("cup_storm");
    if (inv["log"] > 0 && inv["tea_usual"] > 0 && inv["kefir"] > 0) unlocked.push("studio");
    if (state.kefirSecretFound) unlocked.push("lover");
    if (state.totalSpins >= 1) unlocked.push("walked_by");
    if (state.totalSpins >= 50) unlocked.push("spin_spin");
    if (state.totalSpins >= 100) unlocked.push("ludoman");
    if (state.totalSpins >= 500) unlocked.push("tired_boss");
    if (state.totalSpins >= 1000) unlocked.push("i_know_all");
    if (inv["nolan_mom"] > 0) unlocked.push("mom_friend");
    if (inv["sawada"] >= 5 && inv["sawada_god"] > 0) unlocked.push("love_sawada");
    if (state.readAlkash) unlocked.push("retired_14");
    if (state.readKefir) unlocked.push("16cm");
    if (state.readWood) unlocked.push("god_slave");
    if (state.readLutik) unlocked.push("flower");
    if (inv["death_note"] > 0 && inv["death_god"] > 0) unlocked.push("kira");
    if (state.totalSpins === 67) unlocked.push("bad_meme");

    const savedMoonEater = state.titles.includes("moon_eater");
    state.titles = unlocked;
    if (savedMoonEater) state.titles.push("moon_eater");
    
    renderTitles();
}

function renderTitles() {
    const container = document.getElementById('titles-container');
    if (!container) return;
    container.innerHTML = '';
    titleList.forEach(t => {
        const div = document.createElement('div');
        if (state.titles.includes(t.id)) {
            div.className = 'title-badge';
            div.innerText = t.name;
        } else {
            div.className = 'title-badge title-locked';
            div.innerText = '???';
        }
        div.onclick = () => showTitleInfo(t.id); 
        container.appendChild(div);
    });
}

function countHardcoreClick(memberId) {
    if (!state.hardcoreMode) return;
    if (!state.hardcoreClicks[memberId]) state.hardcoreClicks[memberId] = 0;
    state.hardcoreClicks[memberId]++;
    if (state.hardcoreClicks.alkash >= 3 && state.hardcoreClicks.kefir >= 3 && state.hardcoreClicks.wood >= 3 && state.hardcoreClicks.lutik >= 3) {
        state.hardcoreMode = false;
        state.hardcoreClicks = { alkash: 0, kefir: 0, wood: 0, lutik: 0 };
        document.body.classList.remove('hardcore-mode');
        saveGame();
        showToast("ТЫ ВЫРВАЛСЯ ИЗ ТЬМЫ! Сложный режим отключен.");
    } else {
        saveGame();
    }
}

// --- ЧЕРНАЯ ДЫРА ---
let voidClicks = 0;
function clickVoid() {
    voidClicks++;
    const hole = document.getElementById('black-hole');
    if (!hole) return;
    
    hole.classList.add('growing');
    const currentSize = 10 + (voidClicks * 10);
    hole.style.width = currentSize + 'px';
    hole.style.height = currentSize + 'px';

    if (voidClicks >= 20) {
        hole.classList.add('expand');
        setTimeout(() => {
            if (state.hardcoreMode) {
                if (!state.titles.includes("moon_eater")) { state.titles.push("moon_eater"); }
                localStorage.removeItem('chayniyStudioSave');
                localStorage.removeItem('chayniyHardcore');
                const body = document.getElementById('card-view-body');
                body.innerHTML = `
                    <h2 style="color: #ff4757; text-shadow: 0 0 10px red;">СЕКРЕТ РАСКРЫТ!</h2>
                    <div style="font-size: 60px; margin: 15px 0;">🌑👑</div>
                    <h3>Титул: Пожиратель Лун</h3>
                    <p style="margin-top: 15px; color: #ccc;">Ты поглотил тьму вместе с луной. Твой прогресс сброшен, но ты получил новый титул!</p>
                `;
                openModal('card-view-modal');
                voidClicks = 0;
                hole.classList.remove('expand'); hole.classList.remove('growing');
                hole.style.width = '0px'; hole.style.height = '0px';
                setTimeout(() => { location.reload(); }, 3000);
            } else {
                showToast("Ты заглянул в бездну... но тьма не ответила. Попробуй в Сложном режиме.");
                voidClicks = 0;
                hole.classList.remove('expand'); hole.classList.remove('growing');
                hole.style.width = '0px'; hole.style.height = '0px';
            }
        }, 2000);
    }

    clearTimeout(window.voidTimeout);
    if (voidClicks < 20) {
        window.voidTimeout = setTimeout(() => {
            voidClicks = 0;
            hole.classList.remove('growing');
            hole.style.width = '0px'; hole.style.height = '0px';
        }, 1000);
    }
}

// --- ЗАПУСК ---
if (localStorage.getItem('chayniyHardcore') === 'true') {
    state.hardcoreMode = true;
    localStorage.removeItem('chayniyHardcore');
}

if (state.hardcoreMode) document.body.classList.add('hardcore-mode');

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
            }
