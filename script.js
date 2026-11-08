
// Дані продуктів
const productsData = {
    // ---- КАБЛУЧКИ ----
    'ring-green': { category: 'rings', name: 'Каблучка "Зелене серце"', price: 500, img: 'новые позолоченные колечки с подвесками из….jpeg', desc: 'Ніжна каблучка ручної роботи, що ідеально підкреслить витонченість твоїх рук. Зелений камінь символізує спокій та гармонію.', material: 'Авантюрин, ювелірний сплав, позолота', collection: 'Базовий мінімалізм' },
    'ring-pink': { category: 'rings', name: 'Сет "Рожевий світанок"', price: 750, img: 'Pierścionki z kamieni naturalnych.jpeg', desc: 'Набір з двох витончених каблучок. Чудово виглядають як разом, так і поштучно.', material: 'Рожевий кварц, місячне каміння, золотисті вставки', collection: 'Перлинна ніжність' },
    'ring-emerald': { category: 'rings', name: 'Каблучка "Смарагдова крапля"', price: 600, img: 'Жми _ПЕРЕЙТИ НА ВЕБ-САЙТ_, чтобы увидеть ещё больше СТИЛЬНЫХ УКРАШЕНИЙ.jpeg', desc: 'Яскравий акцентний виріб з білим базовим кольором та глибоким смарагдовим кристалом по центру.', material: 'Білий бісер, скляний кристал (цирконій)', collection: 'Преміум кастом' },
    'ring-labradorite': { category: 'rings', name: 'Каблучка "Лабрадорит"', price: 450, img: 'Колечка😍  Все каміння натуральне🤞🏼 Ціна….jpeg', desc: 'Містичне напівпрозоре каміння з золотим мінімалістичним серцем. Заворожує своїм переливом на сонці.', material: 'Лабрадорит, золотиста фурнітура', collection: 'Базовий мінімалізм' },
    
    // ---- БРАСЛЕТИ ----
    'br-pearl-luxury': { category: 'bracelets', name: 'Браслет "Перлинна розкіш"', price: 1200, img: 'Браслет _Ніжний дотик___Тонка, мінімалістична….jpeg', desc: 'Класика, яка завжди в тренді. Масивний браслет з ідеально круглих перлин та шикарною інкрустрованою застібкою-магнітом.', material: 'Натуральні прісноводні перли, цирконій, позолота', collection: 'Преміум кастом' },
    'br-earth': { category: 'bracelets', name: 'Браслет "Земна енергія"', price: 950, img: 'Натуральне каміння не змінить твоє життя_⠀_Але….jpeg', desc: 'Багатошаровий стильний браслет, що поєднує різні текстури та кольори природних мінералів.', material: 'Яшма, далматинський камінь, агат', collection: 'Природний вайб' },
    'br-femininity': { category: 'bracelets', name: 'Сет "Жіночність"', price: 1100, img: 'Браслети для розкриття твоєї жіночності ✨ Ці….jpeg', desc: 'Два браслети в подарунковому пакуванні. Поєднання каміння, що розкриває жіночу енергетику.', material: 'Аметист, рожевий кварц, білий агат', collection: 'Перлинна ніжність' },
    'br-pearl-knot': { category: 'bracelets', name: 'Браслет "Перлинний вузол"', price: 800, img: '1006132373016957089.jpeg', desc: 'Оригінальне плетіння у вигляді вузла нескінченності. Поєднує перли та сріблясті намистини.', material: 'Перли, гематит (сріблясте покриття)', collection: 'Преміум кастом' },
    'br-epoxy-rose': { category: 'bracelets', name: 'Сет "Епоксидна троянда"', price: 1400, img: 'Чокер , браслет с розочками из гепоксидной смолы.jpeg', desc: 'Ексклюзивний сет (браслет + намисто) зі справжніми висушеними трояндами, застиглими в ювелірній смолі.', material: 'Натуральні перли, рожевий кварц, епоксидна смола', collection: 'Ексклюзив' },
    
    // ---- НАМИСТА ТА ЧОКЕРИ ----
    'nk-neon': { category: 'necklaces', name: 'Неоновий чокер', price: 550, img: 'Прикраси з натурального каміння _ Чокери… (1).jpeg', desc: 'Для найсміливіших образів. Яскравий текстильний шнур-зав`язка з натуральним кулоном.', material: 'Текстиль, аметист (серце)', collection: 'Яскравий акцент' },
    'nk-flower-heart': { category: 'necklaces', name: 'Намисто "Квіткове серце"', price: 850, img: 'Це намисто — її віддзеркалення__У ньому поєднані….jpeg', desc: 'Сріблясте базове намисто з неймовірно ніжним кулоном, в якому застигли справжні квіти.', material: 'Сріблястий гематит, смола, сухоцвіти', collection: 'Весняна колекція' },
    'nk-strawberry': { category: 'necklaces', name: 'Сет "Весняний настрій"', price: 1500, img: 'Коли хочеться весняного настрою_Полуничний кварц у….jpeg', desc: 'Розкішний набір з намиста та сережок. Об`ємна центральна квітка робить прикрасу унікальною.', material: 'Полуничний кварц, кераміка, позолота', collection: 'Ексклюзив' },
    'nk-crystal-dew': { category: 'necklaces', name: 'Чокер "Кришталева роса"', price: 700, img: 'чокер.jpeg', desc: 'Багатошаровий делікатний чокер з імітацією краплі води.', material: 'Опаліт (місячне каміння), кришталь, сріблястий ланцюжок', collection: 'Перлинна ніжність' },
    'nk-starry-sky': { category: 'necklaces', name: 'Сет "Зоряне небо"', price: 1300, img: 'Украшения ручной работы из натуральных камней и жемчуга (для заказа - перейти на сайт 🔗.jpeg', desc: 'Намисто та сережки з підвісками у формі зірок. Глибокий зелений колір каміння заворожує.', material: 'Зелений авантюрин, перли, цирконій', collection: 'Преміум кастом' },
    'nk-steel-heart': { category: 'necklaces', name: 'Кольє "Сталеве серце"', price: 1100, img: 'Колье из яшмы и гематита___2350_-.jpeg', desc: 'Зухвалий дизайн із масивним срібним серцем та спадаючими ланцюжками.', material: 'Сіра яшма, гематит, ювелірний сплав', collection: 'Темний вайб' },
    'nk-wild-nature': { category: 'necklaces', name: 'Кольє "Дика природа"', price: 1200, img: 'Украшения из натуральных камней 🪐🫧2500₽ В НАЛИЧИИ.jpeg', desc: 'Поєднання каміння з потужною енергетикою у трендовому асиметричному дизайні.', material: 'Тигрове око, блакитний апатит, далматин', collection: 'Природний вайб' },
    'nk-pearl-twist': { category: 'necklaces', name: 'Кольє "Перлинний вихор"', price: 1600, img: 'Шикарное украшение для тех, кто хочет сиять 😍.jpeg', desc: 'Розкішне переплетення кількох ниток перлин різного розміру для вечірніх та весільних образів.', material: 'Натуральні перли високого класу', collection: 'Ексклюзив' },
    'nk-multi-layer': { category: 'necklaces', name: 'Сет "Багатошаровий шик"', price: 1800, img: '590816044903480624.jpeg', desc: 'Готове рішення з трьох окремих намист, які ідеально доповнюють одне одного.', material: 'Перли, прозорий гірський кришталь, позолочені кулони', collection: 'Преміум кастом' },
    'nk-blue-hearts': { category: 'necklaces', name: 'Чокер "Блакитні серця"', price: 850, img: '715227984606959303.jpeg', desc: 'Ніжне поєднання класичних перлів та яскравих блакитних намистин у формі сердець.', material: 'Перли, керамічні серця', collection: 'Базовий мінімалізм' },
    
    // ---- СЕРЕЖКИ ----
    'er-dalmatian': { category: 'earrings', name: 'Сережки "Далматин та лайм"', price: 650, img: 'Невозможно не влюбиться 😍 сет серег с съемными….jpeg', desc: 'Стильні сережки-трансформери зі знімними підвісками. Трендове поєднання кольорів.', material: 'Далматинський камінь, зелений агат, срібна фурнітура', collection: 'Яскравий акцент' }
};

// Генерація каталогу
document.addEventListener('DOMContentLoaded', () => {
    const grids = {
        'rings': document.getElementById('grid-rings'),
        'bracelets': document.getElementById('grid-bracelets'),
        'necklaces': document.getElementById('grid-necklaces'),
        'earrings': document.getElementById('grid-earrings')
    };

    for (const [id, product] of Object.entries(productsData)) {
        const cardHtml = `
            <div class="collection-card" onclick="openModal('${id}')">
                <img src="${product.img}" alt="${product.name}">
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <span class="price">${product.price} грн</span>
                </div>
            </div>
        `;
        if (grids[product.category]) {
            grids[product.category].innerHTML += cardHtml;
        }
    }
});

// Логіка модального вікна
let currentBasePrice = 0;
const modal = document.getElementById('product-modal');

function openModal(id) {
    const p = productsData[id];
    currentBasePrice = p.price;
    
    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-material').innerText = p.material;
    
    const catNames = { 'rings':'Каблучка', 'bracelets':'Браслет', 'necklaces':'Намисто/Чокер', 'earrings':'Сережки' };
    document.getElementById('modal-category').innerText = catNames[p.category];
    document.getElementById('modal-collection').innerText = "Колекція: " + p.collection;
    
    document.getElementById('modal-price').innerText = p.price + ' грн';
    
    // Скидання кастомізації
    document.getElementById('custom-color-checkbox').checked = false;
    document.getElementById('custom-color-input').style.display = 'none';
    document.getElementById('custom-color-input').value = '';
    
    modal.classList.add('show');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// Закриття модалки при кліку поза її межами
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Логіка чекбоксу +15%
function toggleCustomColor() {
    const isChecked = document.getElementById('custom-color-checkbox').checked;
    const input = document.getElementById('custom-color-input');
    const priceEl = document.getElementById('modal-price');
    
    if (isChecked) {
        input.style.display = 'block';
        const newPrice = Math.round(currentBasePrice * 1.15);
        priceEl.innerText = newPrice + ' грн';
    } else {
        input.style.display = 'none';
        priceEl.innerText = currentBasePrice + ' грн';
    }
}

// Логіка квізу
let userAnswers = { occasion: '', color: '' };
function nextStep(currentStep, answer) {
    if (currentStep === 1) {
        userAnswers.occasion = answer;
        document.getElementById('question-1').classList.remove('active');
        document.getElementById('question-2').classList.add('active');
    }
}
function showResult(answer) {
    userAnswers.color = answer;
    document.getElementById('question-2').classList.remove('active');
    let resultText = "";
    if (userAnswers.occasion === 'everyday' && userAnswers.color === 'light') {
        resultText = "Твій ідеальний вибір — мінімалістична каблучка з лабрадориту або перлинний браслет! Ніжно та доречно щодня.";
    } else if (userAnswers.occasion === 'everyday' && userAnswers.color === 'dark') {
        resultText = "Зверни увагу на браслет 'Земна енергія' або каблучку 'Зелене серце'. Стильний акцент для кежуал образів.";
    } else if (userAnswers.occasion === 'party' && userAnswers.color === 'light') {
        resultText = "Тобі підійде кольє 'Перлинний вихор' або сет із рожевого кварцу. Сяй на всі 100%!";
    } else {
        resultText = "Твій вайб — кольє 'Сталеве серце' або каблучка 'Смарагдова крапля'. Зухвало та стильно!";
    }
    document.getElementById('result-text').innerText = resultText;
    document.getElementById('quiz-result').classList.add('active');
}
function resetQuiz() {
    userAnswers = { occasion: '', color: '' };
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('question-1').classList.add('active');
}
