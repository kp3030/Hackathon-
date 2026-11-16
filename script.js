
'use strict';

const nasaImage = {
    rover: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/missionswebmer.jpg',
    panorama: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia05/pia05049/PIA05049.jpg?fit=clip&w=1500',
    track: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia11/pia11758/PIA11758.jpg?fit=clip&w=1500',
    soil: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia09/pia09491/PIA09491.jpg',
    winter: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia04/pia04995/PIA04995.jpg?fit=clip&w=1400'
};

const sourceMission = 'https://science.nasa.gov/mission/mer-spirit/';
const sourceSilica = 'https://science.nasa.gov/photojournal/silica-rich-soil-found-by-spirit/';
const sourceTrack = 'https://science.nasa.gov/photojournal/rovers-wheel-churns-up-bright-martian-soil/';

const chapters = [
    {
        year: '2003–2004',
        short: 'The Arrival',
        eyebrow: 'CHAPTER 01 · THE BEGINNING',
        title: 'I was sent to follow the water.',
        image: nasaImage.rover,
        caption: 'NASA/JPL rover illustration (artist concept)',
        source: sourceMission,
        quote: '“I crossed millions of kilometres of darkness with a question in my circuits: did water once shape this world?”',
        text: 'NASA launched Spirit on June 10, 2003. It landed at Gusev Crater on January 3, 2004 (Pacific Time). The rover was designed for a 90-Martian-day mission, but its work lasted more than six Earth years.',
        fact: 'Spirit was a robotic geologist, not a life-detection machine.',
        detail: 'Its cameras and instruments studied rocks and soil to find evidence of past environments that might once have supported life. Finding signs of ancient water does not mean finding life.',
        question: 'What was one of Spirit’s main science goals?',
        answers: [
            'Deliver astronauts to Mars.',
            'Search for clues about the history of water on Mars.',
            'Build a permanent Martian city.'
        ],
        correct: 1,
        why: 'Spirit and its twin Opportunity were sent to study rocks and soil for clues about Mars’s past climate and water.'
    },

    {
        year: '2006',
        short: 'The Broken Wheel',
        eyebrow: 'CHAPTER 02 · THE ACCIDENT',
        title: 'Then a wheel stopped turning.',
        image: nasaImage.panorama,
        caption: 'Spirit’s view of the Martian surface — NASA/JPL/Cornell',
        source: sourceMission,
        quote: '“One of my six wheels would not turn. I was still moving, but I was dragging a part of myself across the ground.”',
        text: 'Spirit’s right-front wheel stopped working in 2006. NASA engineers kept the rover moving, often driving it backward while the faulty wheel dragged through Martian soil. That unexpected scrape exposed material hidden beneath the surface.',
        fact: 'A malfunction became an unexpected scientific tool.',
        detail: 'The dragging wheel disturbed the ground and uncovered material that ordinary surface photography might not have revealed. This is a real example of adapting to an engineering failure.',
        question: 'How did the broken wheel unexpectedly help the mission?',
        answers: [
            'It exposed deeper soil as Spirit moved.',
            'It created liquid water on Mars.',
            'It allowed Spirit to fly over rocks.'
        ],
        correct: 0,
        why: 'As the rover drove, its non-rotating wheel scraped the surface and revealed soil beneath the dusty layer.'
    },

    {
        year: '2007',
        short: 'The White Trail',
        eyebrow: 'CHAPTER 03 · THE DISCOVERY',
        title: 'Beneath the dust, a clue.',
        image: nasaImage.soil,
        caption: 'Bright silica-rich soil exposed by Spirit — NASA/JPL/Cornell',
        source: sourceSilica,
        quote: '“A pale trail appeared behind me. To some, it looked like ordinary dust. To the scientists watching from Earth, it was a question worth investigating.”',
        text: 'In 2007, Spirit uncovered bright soil at a location scientists named Gertrude Weise. Its instruments measured a deposit containing about 90% silica. Researchers concluded water was likely involved in forming such a concentrated deposit, possibly through hot springs or steam vents.',
        fact: 'The silica was evidence about ancient water, not proof of life.',
        detail: 'On Earth, silica can be concentrated by water-related processes. Spirit’s measurements made ancient water activity a strong explanation for the deposit. Scientists considered more than one possible formation process.',
        question: 'What is the strongest evidence-based conclusion from the silica?',
        answers: [
            'Mars definitely has living microbes today.',
            'The deposit likely formed through a process involving water.',
            'Spirit accidentally made a new mineral.'
        ],
        correct: 1,
        why: 'The approximately 90%-silica deposit suggested an ancient water-related process. It did not demonstrate that life existed.'
    },

    {
        year: '2009–2010',
        short: 'The Last Winter',
        eyebrow: 'CHAPTER 04 · THE SILENCE',
        title: 'The sun grew weaker. I could not move.',
        image: nasaImage.track,
        caption: 'Spirit’s wheel tracks and disturbed soil — NASA/JPL-Caltech/Cornell',
        source: sourceTrack,
        quote: '“I tried to keep working as the cold season approached. But my wheels were trapped, and I could not turn my solar panels towards the light.”',
        text: 'Spirit became stuck in soft soil in May 2009. Engineers tried to free it, but it remained trapped. Its inability to tilt toward the winter Sun contributed to a severe power problem. NASA last heard from Spirit on March 22, 2010.',
        fact: 'Spirit depended on sunlight to keep its batteries charged.',
        detail: 'NASA reported about 89 watt-hours per Martian day during a particularly difficult period in late 2008, compared with roughly 700 watt-hours under normal conditions. Those figures are historical examples, not a live simulation.',
        question: 'Why was the approaching Martian winter such a serious danger?',
        answers: [
            'Less solar energy made it harder to power electronics and heaters.',
            'Mars moved much closer to the Sun.',
            'Spirit needed liquid fuel for its engine.'
        ],
        correct: 0,
        why: 'With Spirit stuck and poorly oriented toward the Sun, generating enough solar power became difficult during the cold season.'
    },

    {
        year: '2011 → TODAY',
        short: 'The Legacy',
        eyebrow: 'CHAPTER 05 · THE LEGACY',
        title: 'My last signal was not my last discovery.',
        image: nasaImage.rover,
        caption: 'Spirit rover — NASA/JPL illustration',
        source: sourceMission,
        quote: '“I did not come home. I never needed to. The knowledge I sent back travelled farther than my wheels ever could.”',
        text: 'NASA ended attempts to contact Spirit on May 25, 2011. It drove about 7.73 kilometres and operated more than 25 times longer than its planned mission. Spirit remains on Mars, but its discoveries about ancient watery environments continue to influence how we explore the Red Planet.',
        fact: 'A completed mission can keep teaching us.',
        detail: 'Mission data remain useful for researchers and students. Spirit did not prove that Mars hosted life, but it helped scientists understand how water shaped parts of its ancient environment.'
    }
];

const $ = (id) => document.getElementById(id);

let state = {
    chapter: 0,
    solved: {},
    name: '',
    started: false
};

try {
    const s = JSON.parse(localStorage.getItem('outerx-last-signal-v1') || 'null');

    if (s && typeof s === 'object') {
        state = {
            ...state,
            ...s,
            solved: (s.solved && typeof s.solved === 'object') ? s.solved : {}
        }
    }
} catch (e) {}

const save = () => {
    try {
        localStorage.setItem('outerx-last-signal-v1', JSON.stringify(state))
    } catch (e) {}
};

function countSolved() {
    return Object.keys(state.solved).filter(k => state.solved[k] === true && +k < 4).length
}

function setScreen(playing) {
    $('home').style.display = playing ? 'none' : 'block';
    $('experience').style.display = playing ? 'block' : 'none';
    state.started = playing;
    save();
    window.scrollTo(0, 0);

    if (playing) render();
}

function selectChapter(i) {
    stopVoice();
    state.chapter = Math.max(0, Math.min(4, i));
    save();
    render();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function renderNav() {
    const items = chapters.map((c, i) => `<button data-chapter="${i}" class="chapter-link ${state.chapter === i ? 'active' : ''}" ${state.chapter === i ? 'aria-current="step"' : ''}><span class="chapter-number">${state.solved[i] ? '✓' : String(i + 1).padStart(2, '0')}</span><span><span class="chapter-title">${c.short}</span><span class="chapter-year">${c.year}</span></span></button>`).join('');

    $('chapter-nav').innerHTML = items;

    $('mobile-nav').innerHTML = chapters.map((c, i) => `<button data-chapter="${i}" class="${state.chapter === i ? 'active' : ''}">${i + 1}. ${c.short}</button>`).join('');

    document.querySelectorAll('[data-chapter]').forEach(b => b.addEventListener('click', () => selectChapter(Number(b.dataset.chapter))))
}

function render() {
    const i = state.chapter, c = chapters[i];

    $('crumb').textContent = `FIELD JOURNAL / ${String(i + 1).padStart(2, '0')}`;
    $('progress-txt').textContent = `${countSolved()} / 4`;
    $('progress-fill').style.width = `${countSolved() * 25}%`;

    renderNav();

    const story = `<div class="chapter-intro"><div><div class="eyebrow">${c.eyebrow}</div><h2>${c.title}</h2><div class="muted small">MARS EXPLORATION ROVER · ${c.year}</div></div><div class="chapter-number-big">0${i + 1}</div></div>
 <div class="story-visual"><div class="image-fallback" aria-hidden="true"><div class="orb">✦</div><span class="fallback-label">MARS · ${c.year}</span></div><img src="${c.image}" alt="NASA mission visual for ${c.short}" loading="lazy" onerror="this.style.opacity='0';this.parentElement.setAttribute('data-missing-photo','true')"><div class="image-caption"><span>${c.caption} ${''}</span><a href="${c.source}" target="_blank" rel="noopener">Original NASA source ↗</a></div></div>
 <div class="story-body"><article class="story-card"><div class="eyebrow">SPIRIT'S IMAGINED JOURNAL</div><div class="quote">${c.quote}</div><p>${c.text}</p><div class="fiction">✧ Creative narration based on real mission events</div></article><aside class="science-card"><div class="eyebrow">THE REAL SCIENCE</div><div class="fact">${c.fact}</div><p>${c.detail}</p><a href="${c.source}" target="_blank" rel="noopener">Verify with NASA ↗</a></aside></div>`;

    let challenge = '';

    if (i < 4) {
        const solved = !!state.solved[i];

        challenge = `<section class="investigation" aria-labelledby="question-title"><div class="investigation-top"><div class="eyebrow">⌁ EVIDENCE INVESTIGATION ${String(i + 1).padStart(2, '0')}</div><span class="chip" id="evidence-chip">${solved ? '✓ Evidence recovered' : 'UNSOLVED'}</span></div><h3 id="question-title">${c.question}</h3><p class="hint">Study the mission story and the science note before choosing your answer.</p><div class="options" id="options">${c.answers.map((a, j) => `<button class="option ${solved && j === c.correct ? 'correct' : ''}" data-answer="${j}" ${solved ? 'disabled' : ''}><span class="letter">${'ABC'[j]}</span><span>${a}</span></button>`).join('')}</div><div id="feedback" role="status" aria-live="polite">${solved ? `<div class="feedback"><strong>✓ Evidence recovered.</strong> ${c.why}</div>` : ''}</div></section>`
    }
    else {
        const all = countSolved() === 4;

        challenge = `<section class="end-card"><div class="big-star">✧</div><div class="eyebrow">MISSION REPORT</div><h3>${all ? 'Investigation complete.' : 'Your mission is almost complete.'}</h3><p>${all ? 'You followed Spirit’s story and recovered every science clue. Your evidence report is ready.' : 'You have recovered ' + countSolved() + ' of 4 clues. Return to any incomplete chapter to finish the investigation.'}</p><div class="mini-lab"><div class="lab-stat"><strong>${countSolved()}/4</strong><span>Evidence clues</span></div><div class="lab-stat"><strong>7.73 km</strong><span>Rover distance</span></div><div class="lab-stat"><strong>2011</strong><span>Mission declared complete</span></div></div>${all ? `<label for="explorer-name" class="small">Enter your first name for your mission certificate</label><br/><input id="explorer-name" class="name-input" maxlength="40" placeholder="Space explorer"/><br/><button class="primary-btn" id="certificate-btn">Print / Save certificate ↗</button>` : `<button class="primary-btn" id="missing-btn">Review missing clues ↗</button>`}<p style="font-size:.74rem;margin:17px auto 0;color:#9ba7b3">Educational achievement within this demo. Not an official NASA award.</p></section>`
    }

    $('story-area').innerHTML = story + challenge + `<div class="continue-row"><button class="small-link" id="prev-btn">${i === 0 ? '← Back to welcome' : '← Previous chapter'}</button>${i < 4 ? `<button class="primary-btn" id="next-btn">${i === 3 ? 'View the legacy' : 'Continue the journey'} →</button>` : `<button class="ghost-btn" id="back-home-btn">Return to welcome</button>`}</div>`;

    if (i < 4) {
        document.querySelectorAll('[data-answer]').forEach(btn => btn.addEventListener('click', () => answer(Number(btn.dataset.answer))));
        $('next-btn').addEventListener('click', () => selectChapter(i + 1))
    } else {
        if (countSolved() === 4) {
            $('explorer-name').value = state.name || '';

            $('explorer-name').addEventListener('input', e => {
                state.name = e.target.value;
                save()
            });

            $('certificate-btn').addEventListener('click', printCertificate)
        } else {
            $('missing-btn').addEventListener('click', () => selectChapter([0, 1, 2, 3].find(n => !state.solved[n]) ?? 0))
        }

        $('back-home-btn').addEventListener('click', () => setScreen(false))
    }

    $('prev-btn').addEventListener('click', () => i === 0 ? setScreen(false) : selectChapter(i - 1));
}

function answer(selected) {
    const i = state.chapter, c = chapters[i];

    if (i > 3 || state.solved[i]) return;

    document.querySelectorAll('[data-answer]').forEach(b => {
        b.classList.toggle('selected', +b.dataset.answer === selected)
    });

    if (selected === c.correct) {
        state.solved[i] = true;
        save();
        $('progress-txt').textContent = `${countSolved()} / 4`;
        $('progress-fill').style.width = `${countSolved() * 25}%`;
        $('evidence-chip').textContent = '✓ Evidence recovered';

        document.querySelectorAll('[data-answer]').forEach(b => {
            b.disabled = true;
            b.classList.toggle('correct', +b.dataset.answer === selected)
        });

        $('feedback').innerHTML = `<div class="feedback"><strong>✓ Correct — evidence recovered!</strong> ${c.why}</div>`;
        renderNav()
    } else {
        $('feedback').innerHTML = `<div class="feedback error"><strong>Not quite. Try another explanation.</strong> The clues are in the science note above. You can try again.</div>`
    }
}

function printCertificate() {
    const v = (state.name || 'Space Explorer').trim().slice(0, 40);
    $('print-name').textContent = v || 'Space Explorer';
    window.print()
}

let reading = false;

function stopVoice() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
    }

    reading = false;
    $('narrate-btn').textContent = '▶ Read aloud'
}

function narrate() {
    if (!('speechSynthesis' in window)) {
        alert('This browser does not support text-to-speech. You can still read the story.');
        return
    }

    if (reading) {
        stopVoice();
        return
    }

    const c = chapters[state.chapter];
    const text = c.title + '. ' + c.quote.replace(/[“”]/g, '') + ' ' + c.text + ' ' + c.fact + ' ' + c.detail;
    const utter = new SpeechSynthesisUtterance(text);

    utter.lang = 'en-US';
    utter.rate = .93;
    utter.pitch = 1;

    utter.onend = () => {
        reading = false;
        $('narrate-btn').textContent = '▶ Read aloud'
    };

    utter.onerror = () => {
        reading = false;
        $('narrate-btn').textContent = '▶ Read aloud'
    };

    reading = true;
    $('narrate-btn').textContent = '■ Stop audio';
    window.speechSynthesis.speak(utter)
}

function openModal() {
    stopVoice();
    $('sources-modal').classList.add('open');
    $('close-modal').focus()
}

function closeModal() {
    $('sources-modal').classList.remove('open')
}

$('start-btn').addEventListener('click', () => setScreen(true));

$('how-btn').addEventListener('click', () => alert('Explore five story chapters. Read the NASA science evidence, answer four questions, and unlock a printable mission certificate. The first-person dialogue is imagined, but all science facts are from NASA.'));

$('home-link').addEventListener('click', e => {
    e.preventDefault();
    stopVoice();
    setScreen(false)
});

$('narrate-btn').addEventListener('click', narrate);

$('reset-btn').addEventListener('click', () => {
    if (confirm('Restart the investigation and clear all saved answers?')) {
        stopVoice();

        state = {
            chapter: 0,
            solved: {},
            name: '',
            started: true
        };

        save();
        render()
    }
});

$('sources-top').addEventListener('click', openModal);
$('sources-side').addEventListener('click', openModal);
$('close-modal').addEventListener('click', closeModal);

$('sources-modal').addEventListener('click', e => {
    if (e.target === $('sources-modal')) closeModal()
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal()
});

if (state.started) {
    setScreen(true)
} else {
    setScreen(false)
}
