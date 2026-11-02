// --- ЧАСТЬ 1: ДАННЫЕ И ИНТЕРФЕЙС ---

const gachaPool = [
    { id: "thegod", stars: 0, name: "Thegodperson", emoji: "👼🏻", chance: 0.005, desc: "Абсолютное ничто. Ты видел то, что не должен был." },
    { id: "log", stars: 1, name: "Бревно", emoji: "🪵", chance: 8, desc: "Просто бревно. Иногда хочется просто полежать." },
    { id: "tea_usual", stars: 1, name: "Обычный чай", emoji: "☕", chance: 8, desc: "Классика. Без него не начинается ни один офис." },
    { id: "leaf", stars: 1, name: "Листок", emoji: "🍃", chance: 9, desc: "Упал с дерева. Намекает на осень и дедлайны." },
    { id: "green_tea", stars: 2, name: "Зелёный чай", emoji: "🍵", chance: 6, desc: "Полезный. Продлевает жизнь, если не пить его с тортом." },
    { id: "lemon", stars: 2, name: "Лимон", emoji: "🍋", chance: 6, desc: "Кислый. Твой спаситель, когда чай пересластили." },
    { id: "sugar", stars: 2, name: "Сахар", emoji: "🍬", chance: 6, desc: "Сладкий. Главный враг зубов и друг диабета." },
    { id: "cake", stars: 2, name: "Тортик", emoji: "🎂", chance: 5, desc: "Праздничный. А где свечи?" },
    { id: "source", stars: 2, name: "Первоисточник", emoji: "📒", chance: 4, desc: "Священная книга. Читать его — это отдельный вид работы." },
    { id: "sawada", stars: 3, name: "Савада", emoji: "👩🏻", chance: 4, desc: "Просто Савада. Пришла без приглашения." },
    { id: "fruit_tea", stars: 3, name: "Фруктовый чай", emoji: "🍹", chance: 4, desc: "Ягодный. Единственный способ заставить себя пить витамины." },
    { id: "milk", stars: 3, name: "Молоко", emoji: "🥛", chance: 4, desc: "Белое. Для тех, кто боится горького." },
    { id: "tea_sugar", stars: 3, name: "Чай с сахаром", emoji: "🍵", chance: 4, desc: "В кубиках. Когда сахар уже в чае, жизнь кажется проще." },
    { id: "oreo", stars: 4, name: "Орео", emoji: "🍪", chance: 2, desc: "Печенька. Всегда хочется съесть ещё одну." },
    { id: "yui", stars: 4, name: "Юи", emoji: "🎸", chance: 1.5, desc: "Гитара. Её соло слышно даже в соседнем районе." },
    { id: "mugi", stars: 4, name: "Муги-тян", emoji: "🧁", chance: 1.5, desc: "Кексик. Приносит сладости и хорошее настроение." },
    { id: "azusa", stars: 4, name: "Азуса", emoji: "🐈‍⬛", chance: 1.5, desc: "Meow~~. Играет на гитаре и обожает кошек. Её гитара звучит лучше, чем твои попытки настроить её." },
    { id: "ritsu", stars: 4, name: "Рицу", emoji: "🥁", chance: 1.5, desc: "Придумала шутку про барабаны, но она оказалась слишком ударной. Ба-дум-тсс!" },
    { id: "mio", stars: 4, name: "Мио", emoji: "🖤", chance: 1.5, desc: "Её кто-то слышал? Нет? Вот и она так думает. Играет тихо, но с черным юмором." },
    { id: "bird_hori", stars: 5, name: "Птица Хори", emoji: "🐦", chance: 1, desc: "Чирик. Прилетела за крошками." },
    { id: "bird_izumi", stars: 5, name: "Птица Изуми", emoji: "🕊️", chance: 1, desc: "Чирик-чирик. Вторая половинка предыдущей." },
    { id: "kefir", stars: 5, name: "Kefir_Kefblch", emoji: "🥛", chance: 1, desc: "Мастер клининга и тайпсеттинга. И это при его 16 см (волос, разумеется)." },
    { id: "alkash", stars: 5, name: "Chayniy alkash", emoji: "🍺", chance: 1, desc: "Друг Путина. Выше него в 1,168 раз и младше в 5,29 раз." },
    { id: "wood", stars: 5, name: "Woodlander", emoji: "🪓", chance: 1, desc: "Художник. В бывшем австрийский, теперь русский. Следит за сочностью картинки." },
    { id: "lutik", stars: 5, name: "Лютик", emoji: "🌼", chance: 1, desc: "Роль: переводчик. Цветок семейства Лютиковые, предпочитает кофе. 17.4 см с учётом лепестков. Дата рождения: 4.08.2008. Предатель чайной студии." },
    { id: "sawada_god", stars: 6, name: "Всевышняя Савада", emoji: "👑", chance: 0.3, desc: "Богиня. Её слово — закон." },
    { id: "death_god", stars: 6, name: "Чайный Бог", emoji: "🫖", chance: 0.2, desc: "Он не заваривает чай. Он им становится. Пить его — святотатство." },
    { id: "death_note", stars: 6, name: "Тетрадь смерти", emoji: "📓", chance: 0.2, desc: "Кира. Впиши сюда имя своего дедлайна." },
    { id: "nolan_mom", stars: 12, name: "Мама Нолана", emoji: "🤰🏻", chance: 0.00000001, desc: "Сын маминой подруги. Ты никогда не будешь так же хорош, как её сын." },
    { id: "shaurma", stars: 3, name: "Шаурма", emoji: "🥙", chance: 4, desc: "Секретный ингредиент — любовь. И немного просроченного майонеза." },
    { id: "sawa_chan", stars: 4, name: "Сава-тян", emoji: "👩🏻‍🎓", chance: 1.5, desc: "Пришла проверить твою домашку. Ты не сдал." },
    { id: "white_tea", stars: 3, name: "Белый чай", emoji: "🍶", chance: 4, desc: "Для тех, кто любит безвкусный чай. Но стоит он как элитный виски." },
    { id: "oolong", stars: 1, name: "Чай улун", emoji: "🍂", chance: 8, desc: "Все пьют, но никто не знает, как он выглядит. Загадка века." },
    { id: "yellow_tea", stars: 2, name: "Желтый чай", emoji: "🌼", chance: 5, desc: "Как зеленый, но для оптимистов. На вкус как солнце." },
    { id: "karkade", stars: 3, name: "Каркаде", emoji: "🌺", chance: 4, desc: "Оставит следы на зубах. И на твоей белой рубашке." },
    { id: "rooibos", stars: 3, name: "Ройбуш", emoji: "🌾", chance: 4, desc: "На вкус как дерево. Дорогое дерево из Африки." },
    { id: "mate", stars: 4, name: "Мате", emoji: "🧉", chance: 2, desc: "Пить через трубочку из тыквы. Нормально? Нормально." },
    { id: "buckwheat_tea", stars: 2, name: "Гречишный чай", emoji: "🍚", chance: 6, desc: "Когда чай закончился, а каша осталась. Кризисный вариант." },
    { id: "phyto_tea", stars: 2, name: "Фиточай", emoji: "🌿", chance: 6, desc: "Пахнет аптекой. Лечит от всего, кроме желания его пить." },
    { id: "ginger_tea", stars: 3, name: "Имбирный чай", emoji: "🫚", chance: 4, desc: "Жжет как перец чили. Пей, если хочешь почувствовать себя живым." },
    { id: "pryanik", stars: 2, name: "Пряник", emoji: "🍪", chance: 6, desc: "Твердый, как камень. С чаем сойдет." },
    { id: "da_hun_pao", stars: 6, name: "Да Хун Пао", emoji: "㊙️", chance: 0.1, desc: "Легендарный чай. Стоит как крыло от самолета." },
    { id: "matcha", stars: 4, name: "Матча", emoji: "🍵", chance: 2, desc: "Зеленый порошок для эстетики. Добавь в латте и ты инстаграмный блогер." },
    { id: "puer", stars: 4, name: "Пуэр", emoji: "🧱", chance: 2, desc: "Чем старее, тем лучше. Некоторые экземпляры старше твоей бабушки." },
    { id: "spiderman", stars: 4, name: "Человек паук", emoji: "🕷️", chance: 1.5, desc: "Залез в чашку. Спасает мир, но не может спасти чай от переслащивания." },
    { id: "tea_spoon", stars: 1, name: "Чайная ложка", emoji: "🥄", chance: 9, desc: "Главный инструмент. Вечно теряется в чашке." },
    { id: "cake_fork", stars: 1, name: "Вилка для тортика", emoji: "🍴", chance: 9, desc: "Вечно теряется. Как и торт." },
    { id: "torn_manga", stars: 1, name: "Потрепанная манга", emoji: "📖", chance: 9, desc: "Читали под одеялом. Под одеялом с фонариком." },
    { id: "tea_warrior", stars: 5, name: "Чайный воин", emoji: "⚔️", chance: 0.8, desc: "Побеждает кипятком. Сражается с пакетиками." },
    { id: "torn_leaf", stars: 1, name: "Вырванный листок", emoji: "📄", chance: 9, desc: "Упал из книги. Как и твои планы на вечер." },
    { id: "tea_dragon", stars: 5, name: "Чайный дракон", emoji: "🐉", chance: 0.8, desc: "Охраняет чай. От посягательств коллег." }
];

const titleList = [
    { id: "forbidden", name: "Запретный фрейм", desc: "Получить Потрепанную мангу и Вырванный листок. Читать мангу под одеялом — это спорт." },
    { id: "tea_master", name: "Чайный мастер", desc: "Выбить все виды чая. Теперь ты знаешь, что пуэр — это не сорт чая, а образ жизни." },
    { id: "shaurma_lord", name: "Шаурмечный лорд", desc: "Выбить 5 Шаурмы. Твой желудок уже подписал контракт с шаурмичной." },
    { id: "sommelier", name: "Сомелье", desc: "Выбить Да Хун Пао. Разбираешься в чае лучше, чем в людях." },
    { id: "web_cup", name: "Паутина в чашке", desc: "Выбить Человека паука. Спасает мир, но все равно не может спасти чай." },
    { id: "tea_samurai", name: "Чайный самурай", desc: "Выбить ложку и вилку. Твой путь — размешивание сахара с честью." },
    { id: "matcha_man", name: "Матча-мэн", desc: "Выбить 3 Матчи. Зеленый, как твои мысли после 10 круток." },
    { id: "dragon_warrior", name: "Воин дракона", desc: "Выбить Чайного дракона и Чайного воина. Охраняешь чай как зеницу ока." },
    { id: "walked_by", name: "Просто прошел мимо", desc: "Сделать 1 крутку. Начало положено." },
    { id: "spin_spin", name: "Крутим! Крутим!", desc: "Сделать 50 круток. Палец уже набил мозоль." },
    { id: "ludoman", name: "Лудоман", desc: "Сделать 100 круток. Ты уже видишь карты во сне." },
    { id: "tired_boss", name: "Я очень устал босс", desc: "Сделать 500 круток. Тебе срочно нужен отпуск." },
    { id: "i_know_all", name: "Я знаю всё", desc: "Сделать 1000 круток. Ты видел все комбинации, которые возможны." },
    { id: "secret_god", name: "Секретный бог", desc: "Выбить Thegodperson. Ты видел то, что не должен был." },
    { id: "mecenat", name: "Меценат", desc: "Потратить 10 000 листьев. Ты спонсируешь нашу чайную империю." },
    { id: "stilyaga", name: "Стиляга", desc: "Купить все темы оформления. Твой сайт выглядит лучше, чем у нас." },
    { id: "coffee_lover", name: "Кофеман", desc: "Прочитать описание Лютика. Предатель чайной студии." },
    { id: "tea_traitor", name: "Чайный предатель", desc: "Выбить 10 Лютиков. Ты слишком много пьешь кофе." },
    { id: "lover", name: "Я её любовник!", desc: "Найти секрет Кефира. Завидуйте, черти." },
    { id: "16cm", name: "16см?!", desc: "Открыть описание Кефира. Мы про волосы, если что." },
    { id: "god_slave", name: "Раб божий", desc: "Открыть описание Вуда. Он рисует, а ты страдаешь." },
    { id: "retired_14", name: "Вышел на пенсию в 14", desc: "Открыть описание Чайного алкаша. Он уже все понял про эту жизнь." },
    { id: "cup_storm", name: "Гроза чашки", desc: "Разбить чашку 20 раз. Ты опасен для посуды." },
    { id: "moon_eater", name: "Пожиратель Лун", desc: "Призвать черную дыру в Хардкоре. Ты сошел с ума, но получил ачивку." },
    { id: "kira", name: "Я — Кира", desc: "Выбить Тетрадь смерти и Чайного Бога. Твое имя теперь в тетради." },
    { id: "bad_meme", name: "Плохой мем", desc: "Сделать 67 круток. Смешно только в первый раз." },
    { id: "collector", name: "Коллекционер", desc: "Открыть 15 разных карт. Ты собираешь их как покемонов." },
    { id: "anime_fan", name: "Анимешник", desc: "Выбить всех участников K-On!. Теперь ты официально отаку." },
    { id: "zoologist", name: "Зоолог", desc: "Выбить обеих птиц и паука. Твой личный зоопарк." }
];

let state = {
    leaves: 0, inventory: {}, titles: [], totalSpins: 0, cupBreaks: 0,
    upgrades: { autoSpin: false, incomeLevel: 0, luckLevel: 0 },
    themes: { default: true, honey: false, halloween: false, newyear: false, purple: false },
    currentTheme: "default", musicOn: false
};

function loadGame() {
    const saved = localStorage.getItem('chayniySave_v5');
    if (saved) { try { state = { ...state, ...JSON.parse(saved) }; } catch(e) {} }
}
function saveGame() {
    localStorage.setItem('chayniySave_v5', JSON.stringify(state));
    updateCurrencyUI();
}
function updateCurrencyUI() {
    const el = document.getElementById('leaves-count');
    if (el) el.innerText = state.leaves;
}
function openModal(htmlContent) {
    document.getElementById('modal-inner-content').innerHTML = htmlContent;
    document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}
function playSound(id) {
    const sound = document.getElementById(id);
    if (sound && sound.src) { sound.currentTime = 0; sound.play().catch(e => {}); }
}

function showAchievement(titleName) {
    playSound("sound-title");
    const container = document.getElementById('achievement-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `<div style="font-size: 30px;">🏆</div><div><p class="ach-title">Новый титул!</p><p class="ach-desc">${titleName}</p></div>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ==========================================
// СЮДА ВСТАВЬ ЧАСТЬ 2
// ==========================================// --- ЧАСТЬ 2: ЛОГИКА ИГРЫ И РЕНДЕР ---

function renderInventory() {
    const container = document.getElementById('inventory-container');
    if (!container) return;
    container.innerHTML = '';
    gachaPool.forEach(card => {
        const count = state.inventory[card.id] || 0;
        const div = document.createElement('div');
        if (count > 0) {
            div.className = 'inv-card';
            div.innerHTML = `<div class="inv-emoji">${card.emoji}</div><div class="inv-count">x${count}</div>`;
            div.onclick = () => {
                openModal(`
                    <h2 style="color: #f39c12; margin-top: 0;">${card.name}</h2>
                    <div style="font-size: 60px; margin: 15px 0;">${card.emoji}</div>
                    <p><strong>Редкость:</strong> ${card.stars} ⭐</p>
                    <p><strong>В коллекции:</strong> ${count} шт.</p>
                    <p style="margin-top: 15px; font-style: italic; color: #aaa;">"${card.desc}"</p>
                `);
                if (card.id === "lutik" && !state.titles.includes("coffee_lover")) {
                    state.titles.push("coffee_lover"); showAchievement("Кофеман"); saveGame();
                }
                if (card.id === "kefir" && !state.titles.includes("16cm")) {
                    state.titles.push("16cm"); showAchievement("16см?!"); saveGame();
                }
                if (card.id === "wood" && !state.titles.includes("god_slave")) {
                    state.titles.push("god_slave"); showAchievement("Раб божий"); saveGame();
                }
                if (card.id === "alkash" && !state.titles.includes("retired_14")) {
                    state.titles.push("retired_14"); showAchievement("Вышел на пенсию в 14"); saveGame();
                }
            };
        } else {
            div.className = 'inv-card';
            div.style.background = '#050505'; div.style.borderColor = '#111'; div.style.color = '#333';
            div.innerHTML = `?`;
        }
        container.appendChild(div);
    });
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
        div.onclick = () => openModal(`<h2 style="color: #f39c12; margin-top: 0;">Титул: ${t.name}</h2><p style="margin-top: 15px; color: #ccc;">${t.desc}</p>`);
        container.appendChild(div);
    });
}

function checkTitles() {
    let unlocked = [];
    const inv = state.inventory;
    
    if (inv["torn_manga"] > 0 && inv["torn_leaf"] > 0) unlocked.push("forbidden");
    if (inv["shaurma"] >= 5) unlocked.push("shaurma_lord");
    if (inv["da_hun_pao"] > 0) unlocked.push("sommelier");
    if (inv["spiderman"] > 0) unlocked.push("web_cup");
    if (inv["tea_spoon"] > 0 && inv["cake_fork"] > 0) unlocked.push("tea_samurai");
    if (inv["matcha"] >= 3) unlocked.push("matcha_man");
    if (inv["tea_dragon"] > 0 && inv["tea_warrior"] > 0) unlocked.push("dragon_warrior");
    if (state.totalSpins >= 1) unlocked.push("walked_by");
    if (state.totalSpins >= 50) unlocked.push("spin_spin");
    if (state.totalSpins >= 100) unlocked.push("ludoman");
    if (state.totalSpins >= 500) unlocked.push("tired_boss");
    if (state.totalSpins >= 1000) unlocked.push("i_know_all");
    if (inv["thegod"] > 0) unlocked.push("secret_god");
    if (state.cupBreaks >= 20) unlocked.push("cup_storm");
    if (inv["lutik"] >= 10) unlocked.push("tea_traitor");
    if (state.totalSpins === 67) unlocked.push("bad_meme");
    
    let uniqueCards = 0;
    for (let key in inv) { if (inv[key] > 0) uniqueCards++; }
    if (uniqueCards >= 15) unlocked.push("collector");

    if (inv["yui"] > 0 && inv["mugi"] > 0 && inv["azusa"] > 0 && inv["ritsu"] > 0 && inv["mio"] > 0) unlocked.push("anime_fan");
    if (inv["bird_hori"] > 0 && inv["bird_izumi"] > 0 && inv["spiderman"] > 0) unlocked.push("zoologist");
    if (inv["death_note"] > 0 && inv["death_god"] > 0) unlocked.push("kira");

    const allTeas = ["tea_usual", "green_tea", "white_tea", "oolong", "yellow_tea", "karkade", "rooibos", "mate", "buckwheat_tea", "phyto_tea", "ginger_tea", "da_hun_pao", "matcha", "puer"];
    if (allTeas.every(t => inv[t] > 0)) unlocked.push("tea_master");

    unlocked.forEach(id => {
        if (!state.titles.includes(id)) {
            state.titles.push(id);
            const t = titleList.find(item => item.id === id);
            if (t) showAchievement(t.name);
        }
    });
    renderTitles();
}

function breakCup() {
    const cup = document.getElementById('cup');
    if (!cup || cup.classList.contains('broken')) return;
    cup.classList.add('smashed');
    playSound("sound-cup");
    setTimeout(() => {
        cup.classList.add('broken');
        const reward = Math.floor(Math.random() * 20) + 10;
        state.leaves += reward;
        state.cupBreaks++;
        saveGame();
        checkTitles();
        const items = ['drop-log', 'drop-flower', 'drop-tea', 'drop-kefir'];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        document.getElementById(randomItem).classList.add('active');
        setTimeout(() => {
            cup.classList.remove('broken', 'smashed');
            document.querySelectorAll('.drop-item').forEach(el => el.classList.remove('active'));
        }, 1000);
    }, 400);
}

function getRandomCard() {
    const rand = Math.random() * 100;
    let cumulative = 0;
    let pool = JSON.parse(JSON.stringify(gachaPool));
    if (state.upgrades.luckLevel > 0) {
        pool.forEach(c => { if (c.stars >= 4) c.chance *= (1 + state.upgrades.luckLevel * 0.2); });
    }
    for (let card of pool) {
        cumulative += card.chance;
        if (rand <= cumulative) return card;
    }
    return pool[1];
}

function pullGachaSilent() {
    state.leaves -= 10;
    state.totalSpins++;
    const selectedCard = getRandomCard();
    if (!state.inventory[selectedCard.id]) state.inventory[selectedCard.id] = 0;
    state.inventory[selectedCard.id]++;
    saveGame();
    renderInventory();
    checkTitles();
    playSound("sound-click");
    if (selectedCard.stars >= 4) playSound("sound-rare");
    
    const resultBox = document.getElementById('gacha-result');
    if (resultBox) {
        const starsStr = selectedCard.stars === 0 ? "0 ⭐" : selectedCard.stars === 12 ? "12 ⭐" : '⭐'.repeat(selectedCard.stars);
        resultBox.innerHTML = `<div style="font-size: 50px;">${selectedCard.emoji}</div><h3 style="color: #f39c12; margin: 5px 0;">${selectedCard.name}</h3><div style="color: gold; font-size: 14px;">${starsStr}</div>`;
    }
}

function pullGacha() {
    if (state.leaves < 10) { openModal(`<h2 style="color: #ff4757;">Не хватает листьев!</h2><p>Тебе нужно 10 🍃. Разбей чашку!</p>`); return; }
    pullGachaSilent();
}

let autoSpinInterval = null;
function toggleAutoSpin() {
    const autoBtn = document.getElementById('btn-auto-spin');
    const spinBtn = document.getElementById('btn-spin');
    if (autoSpinInterval) {
        clearInterval(autoSpinInterval); autoSpinInterval = null;
        autoBtn.innerText = "Авто"; autoBtn.style.background = "#9b59b6"; spinBtn.disabled = false;
    } else {
        spinBtn.disabled = true; autoBtn.innerText = "Стоп"; autoBtn.style.background = "#e74c3c";
        autoSpinInterval =         setInterval(() => {
            if (state.leaves < 10) { toggleAutoSpin(); openModal('<h2 style="color: #ff4757;">Листья кончились!</h2>'); return; }
            pullGachaSilent();
        }, 800);
    }
}

function openShopUpgrades() {
    let html = '<h2 style="color: #f39c12;">🛠 Улучшения</h2>';
    html += `<p>Твои листья: ${state.leaves} 🍃</p>`;
    if (!state.upgrades.autoSpin) {
        html += `<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin-top: 15px;"><h3 style="margin: 0;">Авто-спин</h3><p style="font-size: 12px; color: #aaa;">Автоматически крутит карты.</p><button id="buy-auto-spin" class="shop-btn" style="margin-top: 10px;">Купить за 500 🍃</button></div>`;
    } else { html += '<p style="color: #2ecc71; margin-top: 15px;">Авто-спин уже куплен!</p>'; }

    const incomeCost = 1000 + (state.upgrades.incomeLevel * 500);
    html += `<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin-top: 15px;"><h3 style="margin: 0;">Пассивный доход (Ур. ${state.upgrades.incomeLevel})</h3><p style="font-size: 12px; color: #aaa;">+${state.upgrades.incomeLevel * 5} листьев в минуту.</p><button id="buy-income" class="shop-btn" style="margin-top: 10px;">Улучшить за ${incomeCost} 🍃</button></div>`;
    const luckCost = 1500 + (state.upgrades.luckLevel * 1000);
    html += `<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin-top: 15px;"><h3 style="margin: 0;">Удача (Ур. ${state.upgrades.luckLevel})</h3><p style="font-size: 12px; color: #aaa;">Повышает шанс выпадения 4-6 звезд.</p><button id="buy-luck" class="shop-btn" style="margin-top: 10px;">Улучшить за ${luckCost} 🍃</button></div>`;
    openModal(html);

    const buyAuto = document.getElementById('buy-auto-spin');
    if (buyAuto) {
        buyAuto.onclick = () => {
            if (state.leaves >= 500) { state.leaves -= 500; state.upgrades.autoSpin = true; saveGame(); closeModal(); document.getElementById('btn-auto-spin').style.display = 'inline-block'; showAchievement("Транжира"); } else { alert("Не хватает листьев!"); }
        };
    }
    const buyIncome = document.getElementById('buy-income');
    if (buyIncome) {
        buyIncome.onclick = () => { if (state.leaves >= incomeCost) { state.leaves -= incomeCost; state.upgrades.incomeLevel++; saveGame(); openShopUpgrades(); } else { alert("Не хватает листьев!"); } };
    }
    const buyLuck = document.getElementById('buy-luck');
    if (buyLuck) {
        buyLuck.onclick = () => { if (state.leaves >= luckCost) { state.leaves -= luckCost; state.upgrades.luckLevel++; saveGame(); openShopUpgrades(); } else { alert("Не хватает листьев!"); } };
    }
}

function openShopCosmetics() {
    let html = '<h2 style="color: #f39c12;">🎨 Косметика</h2>';
    html += `<p>Твои листья: ${state.leaves} 🍃</p>`;
    html += `<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin-top: 15px;"><h3 style="margin: 0;">Темы оформления</h3><button class="shop-btn" onclick="changeTheme('default')" style="margin: 5px;">Стандарт</button><button class="shop-btn" onclick="buyTheme('honey', 500)" style="margin: 5px;">Медовый (500 🍃)</button><button class="shop-btn" onclick="buyTheme('halloween', 1000)" style="margin: 5px;">Хэллоуин (1000 🍃)</button><button class="shop-btn" onclick="buyTheme('newyear', 1000)" style="margin: 5px;">Новогодний (1000 🍃)</button><button class="shop-btn" onclick="buyTheme('purple', 1500)" style="margin: 5px;">Фиолетовый (1500 🍃)</button></div>`;
    html += `<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; margin-top: 15px;"><h3 style="margin: 0;">Музыка</h3><p style="font-size: 12px; color: #aaa;">Спокойный фон</p><button class="shop-btn" onclick="toggleMusic()" style="margin: 5px;">${state.musicOn ? 'Выключить' : 'Включить'} музыку</button></div>`;
    openModal(html);
}

function changeTheme(themeName) { document.body.className = `theme-${themeName}`; state.currentTheme = themeName; saveGame(); }
function buyTheme(themeName, cost) {
    if (state.themes[themeName]) { changeTheme(themeName); closeModal(); return; }
    if (state.leaves >= cost) { state.leaves -= cost; state.themes[themeName] = true; changeTheme(themeName); saveGame(); closeModal(); checkTitles(); } else { alert("Не хватает листьев!"); }
}
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    if (state.musicOn) { audio.pause(); state.musicOn = false; } else { audio.play(); state.musicOn = true; }
    closeModal();
}

document.addEventListener("DOMContentLoaded", () => {
    loadGame(); updateCurrencyUI(); renderInventory(); checkTitles();
    document.body.className = `theme-${state.currentTheme}`;
    
    document.getElementById('btn-spin').onclick = pullGacha;
    document.getElementById('cup').onclick = breakCup;
    document.getElementById('modal-close').onclick = closeModal;
    document.getElementById('btn-auto-spin').onclick = toggleAutoSpin;
    if (state.upgrades.autoSpin) document.getElementById('btn-auto-spin').style.display = 'inline-block';
    document.getElementById('modal-overlay').onclick = (e) => { if (e.target.id === 'modal-overlay') closeModal(); };
    document.getElementById('btn-shop-upgrades').onclick = openShopUpgrades;
    document.getElementById('btn-shop-cosmetics').onclick = openShopCosmetics;

    // Карточки команды
    document.getElementById('member-alkash').onclick = () => {
        openModal(`<h2 style="color: #ffb347;">Chayniy alkash</h2><p><strong>Роль:</strong> Переводчик, Админ</p><p>Человек, любимый чай персиковый. Выше Путина в 1,168 раз и младше его в 5,29 раз.</p>`);
        if (!state.titles.includes("retired_14")) { state.titles.push("retired_14"); showAchievement("Вышел на пенсию в 14"); saveGame(); }
    };
    document.getElementById('member-kefir').onclick = () => {
        openModal(`<h2 style="color: #9b59b6;">Kefir_Kefblch</h2><p><strong>Роль:</strong> Клинер, тайпер</p><p>Мастер клининга и тайпсеттинга. И это при его 16 см (волос, разумеется).</p>`);
        if (!state.titles.includes("16cm")) { state.titles.push("16cm"); showAchievement("16см?!"); saveGame(); }
    };
    document.getElementById('member-wood').onclick = () => {
        openModal(`<h2 style="color: #5d6d7e;">Woodlander</h2><p><strong>Роль:</strong> Редактор, дорисовщик</p><p>В бывшем австрийский, теперь русский художник. Следит за тем, чтобы картинка была сасной.</p>`);
        if (!state.titles.includes("god_slave")) { state.titles.push("god_slave"); showAchievement("Раб божий"); saveGame(); }
    };
    document.getElementById('member-lutik').onclick = () => {
        openModal(`<h2 style="color: #f1c40f;">Лютик</h2><p><strong>Роль:</strong> Переводчик</p><p>Цветок семейства Лютиковые, предпочитает кофе. 17.4 см с учётом лепестков.</p>`);
        if (!state.titles.includes("coffee_lover")) { state.titles.push("coffee_lover"); showAchievement("Кофеман"); saveGame(); }
    };

    setInterval(() => {
        if (state.upgrades.incomeLevel > 0) {
            state.leaves += state.upgrades.incomeLevel * 5;
            saveGame();
        }
    }, 60000);
});
