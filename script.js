body { background: radial-gradient(circle at top, #1a1a2e 0%, #0f0f16 100%); color: #f4e1c1; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; padding: 20px; margin: 0; min-height: 100vh; overflow-x: hidden; transition: background 0.5s; }
.site-header { display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; }
h1 { margin-top: 10px; font-size: 28px; text-transform: lowercase; }
.main-title { color: #f39c12; text-shadow: 0 2px 10px rgba(243, 156, 18, 0.4); text-decoration: none; transition: 0.3s; }
h1 a.main-title:hover { color: #ffeb3b; text-shadow: 0 0 15px rgba(255, 235, 59, 0.8); }

/* --- КРАСНАЯ ЛУНА --- */
#red-moon {
    display: none;
    position: fixed;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #ff0000 0%, #8b0000 60%, transparent 70%);
    border-radius: 50%;
    box-shadow: 0 0 50px 20px rgba(255, 0, 0, 0.5);
    z-index: -1;
    pointer-events: none;
    animation: moonPulse 3s infinite alternate;
}
@keyframes moonPulse { from { box-shadow: 0 0 50px 20px rgba(255, 0, 0, 0.5); } to { box-shadow: 0 0 80px 30px rgba(255, 0, 0, 0.8); } }

/* --- ХАРДКОРНЫЙ РЕЖИМ --- */
body.hardcore-mode { background: radial-gradient(circle at top, #2a0000 0%, #0a0000 100%); }
body.hardcore-mode .main-title { color: #ff0000; text-shadow: 0 0 15px red; }
body.hardcore-mode .member-card { filter: grayscale(80%); border-color: #500; }
body.hardcore-mode .cup-container { filter: drop-shadow(0 0 10px red); }
body.hardcore-mode #red-moon { display: block; }
body.hardcore-mode .reset-btn { display: none !important; }

/* --- ЧАШКА --- */
.cup-container { position: relative; width: 80px; height: 80px; cursor: pointer; transition: transform 0.1s; display: flex; justify-content: center; align-items: center; }
.cup-container:active:not(.smashed) { transform: scale(0.95); }
.cup-body { position: absolute; bottom: 10px; left: 15px; width: 50px; height: 40px; background: linear-gradient(to right, #fff, #e0e0e0); border-radius: 5px 5px 20px 20px; border: 2px solid #aaa; z-index: 2; transition: opacity 0.2s; }
.cup-handle { position: absolute; top: 10px; right: -15px; width: 20px; height: 20px; border: 3px solid #aaa; border-radius: 50%; border-left-color: transparent; z-index: 1; }
.cup-saucer { position: absolute; bottom: 0; left: 10px; width: 60px; height: 10px; background: #ccc; border-radius: 50%; z-index: 0; transition: opacity 0.2s; }
.steam { position: absolute; top: -5px; left: 30px; width: 8px; height: 8px; background: rgba(255, 255, 255, 0.4); border-radius: 50%; filter: blur(3px); animation: rise 2s infinite ease-in; transition: opacity 0.2s; }
.steam2 { left: 38px; animation-delay: 0.5s; } .steam3 { left: 46px; animation-delay: 1s; }
@keyframes rise { 0% { transform: translateY(0) scale(1); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-30px) scale(3); opacity: 0; } }
.smashed { animation: shake 0.4s forwards; }
@keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 20% { transform: translate(-3px, 0px) rotate(10deg); } 40% { transform: translate(3px, -1px) rotate(-10deg); } 60% { transform: translate(-3px, 1px) rotate(5deg); } 100% { transform: translate(1px, -1px) rotate(0deg); } }
.cup-container.broken .cup-body, .cup-container.broken .cup-saucer, .cup-container.broken .steam { opacity: 0; pointer-events: none; animation: none; }
.drop-item { display: block; position: absolute; top: 5px; left: 10px; font-size: 55px; opacity: 0; transform: scale(0); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 5; pointer-events: none; }
.drop-item.active { opacity: 1; transform: scale(1); }

#drop-angel.active { filter: drop-shadow(0 0 15px gold) drop-shadow(0 0 30px orange); transform: scale(1); left: -25px; } 
#drop-demon.active { filter: drop-shadow(0 0 15px red) drop-shadow(0 0 30px darkred); transform: scale(1); left: 45px; } 

.shards { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 3; }
.shard { position: absolute; background: #fff; border: 1px solid #aaa; opacity: 0; transition: all 0.5s ease-out; }
.s1 { width: 15px; height: 15px; top: 40px; left: 30px; border-radius: 2px; } .s2 { width: 10px; height: 20px; top: 35px; left: 40px; border-radius: 2px; } .s3 { width: 12px; height: 12px; top: 45px; left: 35px; border-radius: 2px; } .s4 { width: 8px; height: 8px; top: 38px; left: 45px; border-radius: 50%; }
.cup-container.broken .shard { opacity: 1; } .cup-container.broken .s1 { transform: translate(-30px, -20px) rotate(45deg); } .cup-container.broken .s2 { transform: translate(25px, -30px) rotate(-60deg); } .cup-container.broken .s3 { transform: translate(-20px, 25px) rotate(90deg); } .cup-container.broken .s4 { transform: translate(30px, 20px) rotate(120deg); }

/* --- КОМАНДА --- */
.team-container { display: flex; flex-direction: column; gap: 15px; margin-top: 40px; max-width: 400px; margin-left: auto; margin-right: auto; }
.member-card { background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; border: 2px solid transparent; text-decoration: none; color: inherit; display: block; }
.member-card h3 { margin: 0 0 5px 0; color: #fff; } .member-card p { margin: 0; font-size: 14px; color: #ccc; }
.alkash-card:hover { border-color: #ffb347; box-shadow: 0 0 15px rgba(255, 179, 71, 0.4); transform: translateY(-3px); } .kefir-card:hover { border-color: #9b59b6; box-shadow: 0 0 15px rgba(155, 89, 182, 0.4); transform: translateY(-3px); } .wood-card:hover { border-color: #5d6d7e; box-shadow: 0 0 15px rgba(93, 109, 126, 0.4); transform: translateY(-3px); } .lutik-card:hover { border-color: #f1c40f; box-shadow: 0 0 15px rgba(241, 196, 15, 0.4); transform: translateY(-3px); }

/* --- БЛОКИ --- */
.section-title { margin-top: 50px; color: #f39c12; font-size: 24px; }
.titles-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; max-width: 600px; margin: 20px auto 80px auto; padding: 20px; background: rgba(255, 255, 255, 0.03); border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); }
.title-badge { background: #2c3e50; color: #ecf0f1; padding: 8px 15px; border-radius: 20px; font-size: 14px; border: 2px solid #f39c12; box-shadow: 0 0 10px rgba(243,156,18,0.3); animation: popIn 0.4s ease; cursor: pointer; }
.title-badge:hover { transform: scale(1.05); }
.title-locked { background: #111; color: #333; border-color: #222; box-shadow: none; cursor: pointer; }

.inventory-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 12px; max-width: 450px; margin: 20px auto 60px auto; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); }
.inv-card { background: #1c1c24; aspect-ratio: 1 / 1; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; border: 2px solid #333; transition: 0.3s; position: relative; }
.inv-card:hover { transform: scale(1.08); border-color: #f39c12; z-index: 10; }
.inv-card.locked { background: #050505; border-color: #111; cursor: default; color: #333; font-size: 24px; font-weight: bold; }
.inv-card:hover.locked { transform: none; border-color: #111; }
.inv-card .inv-emoji { font-size: 32px; }
.inv-card .inv-count { font-size: 11px; color: #f39c12; font-weight: bold; position: absolute; bottom: 5px; right: 8px; background: rgba(0,0,0,0.6); padding: 2px 5px; border-radius: 5px; }

/* --- ГАЧА --- */
.gacha-container { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; max-width: 500px; margin: 20px auto; }
.gacha-btn { background: #f39c12; color: #111; font-weight: bold; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; transition: 0.3s; font-size: 16px; }
.gacha-btn:hover { background: #ffb142; transform: scale(1.05); }
.gacha-btn:disabled { background: #555 !important; color: #888; cursor: not-allowed; transform: none !important; }
.gacha-result-box { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 20px; min-height: 200px; }

.gacha-card { width: 140px; background: #1c1c24; border-radius: 10px; padding: 10px; position: relative; animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 20; }
@keyframes popIn { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
.gacha-card .emoji-img { font-size: 80px; height: 140px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border-radius: 8px; margin-bottom: 8px; }
.gacha-card h4 { margin: 0; font-size: 14px; color: #fff; }
.gacha-card .stars { font-size: 12px; color: gold; margin-top: 5px; word-break: break-all; }

.rarity-0 { border: 4px solid #000; background: #000; animation: voidGlitch 0.5s infinite alternate; }
.rarity-1 { border: 2px solid #7f8c8d; }
.rarity-2 { border: 2px solid #2ecc71; }
.rarity-3 { border: 2px solid #3498db; }
.rarity-4 { border: 2px solid #9b59b6; }
.rarity-5 { border: 2px solid #e67e22; box-shadow: 0 0 15px rgba(230, 126, 34, 0.5); }
.rarity-6 { border: 3px solid #ff0000; animation: fireGlow 0.8s infinite alternate; }
.rarity-12 { border: 4px solid #00ffff; animation: cosmicSurge 1.5s infinite linear; background: linear-gradient(45deg, #1c1c24, #2a0033, #002233, #330022); }

@keyframes fireGlow { 0% { box-shadow: 0 0 30px #ff0000, inset 0 0 20px #ff0000; transform: scale(1); } 100% { box-shadow: 0 0 80px #ff0000, inset 0 0 40px #ff5500; transform: scale(1.08); } }
@keyframes cosmicSurge { 0% { box-shadow: 0 0 40px #00ffff, inset 0 0 30px #00ffff; transform: scale(1.05) rotate(0deg); filter: hue-rotate(0deg); } 50% { box-shadow: 0 0 100px #00ffff, inset 0 0 60px #ff00ff; transform: scale(1.15) rotate(2deg); filter: hue-rotate(180deg); } 100% { box-shadow: 0 0 40px #00ffff, inset 0 0 30px #00ffff; transform: scale(1.05) rotate(0deg); filter: hue-rotate(360deg); } }
@keyframes voidGlitch { 0% { box-shadow: 0 0 100px 20px #000; transform: translate(0, 0) scale(1.1) skewX(0deg); filter: grayscale(100%) contrast(200%); } 25% { box-shadow: 0 0 200px 50px #000, 0 0 80px #fff; transform: translate(-3px, 2px) scale(1.15) skewX(2deg); filter: grayscale(100%) invert(100%); } 50% { box-shadow: 0 0 150px 30px #000; transform: translate(3px, -2px) scale(1.12) skewX(-2deg); filter: grayscale(100%) contrast(300%); } 100% { box-shadow: 0 0 250px 60px #000; transform: translate(0, 0) scale(1.2) skewX(0deg); filter: grayscale(100%) brightness(0.2); } }
.rarity-6 .emoji-img, .rarity-12 .emoji-img, .rarity-0 .emoji-img { font-size: 100px; text-shadow: 0 0 30px currentColor; }

#flash-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; pointer-events: none; opacity: 0; z-index: 9999; }
.flash-animation { animation: screenFlash 0.8s ease-out forwards; }
@keyframes screenFlash { 0% { opacity: 1; } 20% { opacity: 0.8; } 100% { opacity: 0; } }
.shake-screen { animation: shakeScreen 0.5s cubic-bezier(.36,.07,.19,.97) both; }
@keyframes shakeScreen { 10%, 90% { transform: translate3d(-2px, 0, 0); } 20%, 80% { transform: translate3d(4px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-8px, 0, 0); } 40%, 60% { transform: translate3d(8px, 0, 0); } }

/* --- МОДАЛЬНЫЕ ОКНА --- */
.modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(5px); z-index: 1000; }
.modal-content { background: #1c1c24; margin: 15% auto; padding: 25px; border-radius: 15px; width: 85%; max-width: 420px; text-align: center; position: relative; animation: slideDown 0.3s ease; }
@keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
.info-box { background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 10px; text-align: left; margin-top: 15px; }
.border-alkash { border: 2px solid #ffb347; } .border-kefir { border: 2px solid #9b59b6; } .border-wood { border: 2px solid #5d6d7e; } .border-lutik { border: 2px solid #f1c40f; }
.secret-style { border: 3px solid #ff4757; background: #110a0c; }
.close-btn { position: absolute; top: 15px; right: 15px; background: rgba(255, 255, 255, 0.1); border: none; color: #fff; width: 35px; height: 35px; border-radius: 50%; font-size: 16px; cursor: pointer; transition: 0.3s; }
.close-btn:hover { background: #ff4757; transform: rotate(90deg); }
.reset-btn { display: none; position: fixed; top: 15px; right: 15px; background: transparent; color: #1a1a2e; border: none; padding: 10px; cursor: pointer; font-size: 12px; transition: all 0.5s ease; z-index: 999; }
.reset-btn.show { display: block; } .reset-btn:hover { color: #f39c12; text-shadow: 0 0 5px rgba(243, 156, 18, 0.5); }

/* ИСПРАВЛЕНО: убрано opacity: 0, чтобы элементы не пропадали */
.fade-in { transform: translateY(30px); transition: transform 0.8s ease-out; }
.fade-in.visible { transform: translateY(0); }

/* --- ЧЕРНАЯ ДЫРА --- */
.void-trigger { width: 100%; height: 60px; margin: 0 auto 40px auto; cursor: pointer; position: relative; display: flex; justify-content: center; align-items: center; z-index: 9999; }
.void-text { color: #222; font-size: 12px; letter-spacing: 2px; transition: color 0.3s; }
.void-trigger:hover .void-text { color: #555; }

.black-hole { 
    width: 0px; height: 0px; 
    background: #000; 
    border-radius: 50%; 
    box-shadow: 0 0 30px 10px #000, 0 0 50px 20px #4a00e0; 
    transition: width 0.3s ease, height 0.3s ease; 
    position: fixed; 
    top: 50%; left: 50%; 
    transform: translate(-50%, -50%); 
    pointer-events: none;
    z-index: 10;
    opacity: 0; 
}

.black-hole.growing { opacity: 1; }

.black-hole.expand { 
    width: 300vw; 
    height: 300vw; 
    transition: width 2s cubic-bezier(0.6, 0, 1, 1), height 2s cubic-bezier(0.6, 0, 1, 1); 
    z-index: 9999;
}

/* --- КАСТОМНОЕ УВЕДОМЛЕНИЕ (ВМЕСТО ALERT) --- */
.custom-toast {
    position: fixed;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 20, 24, 0.95);
    border: 2px solid #f39c12;
    box-shadow: 0 0 20px rgba(243, 156, 18, 0.4);
    color: #fff;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition: bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s;
    opacity: 0;
    z-index: 10001;
    pointer-events: none;
    backdrop-filter: blur(10px);
    max-width: 90%;
}

.custom-toast.show-toast {
    bottom: 30px;
    opacity: 1;
    }
