// CHANGE: Phase 5 is now a birthday-wishes-only final reveal.
document.addEventListener('DOMContentLoaded', () => {
    // CHANGE: Load the styling for the final birthday-wishes section.
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'phase5.css';
    document.head.appendChild(css);

    const main = document.querySelector('.browser');
    if (!main) return;

    const section = document.createElement('section');
    section.className = 'phase5';
    section.id = 'final';

    section.innerHTML = `
        <div class="p5-sky"></div>

        <div class="p5-title">
            <div class="p5-kicker">phase 5 · final birthday wishes</div>
            <h2>For my <em>Didi</em> ♡</h2>
            <p class="p5-sub">
                May your birthday be filled with happiness, laughter, beautiful memories,
                success and all the things that make you smile.
            </p>
        </div>

        <div class="p5-garden">
            <div class="p5-ground"></div>

            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>
            <i class="p5-petal"></i>

            ${[1, 2, 3, 4, 5]
                .map(
                    n => `
                        <div class="p5-flower p5-f${n}">
                            <div class="p5-head"></div>
                            <div class="p5-leaf l"></div>
                            <div class="p5-leaf r"></div>
                        </div>
                    `
                )
                .join('')}
        </div>

        <div class="p5-final">
            <span>ONE LAST BIRTHDAY WISH</span>
            <h3>Happy Birthday, Manisha ♡</h3>
            <b>May this be your happiest year yet.</b>
            <br>
            <button class="p5-back" data-back-top>
                BACK TO THE BEGINNING ↑
            </button>
        </div>
    `;

    main.appendChild(section);

    // CHANGE: Keep the final birthday section easy to revisit from the beginning.
    section.querySelector('[data-back-top]').onclick = () =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
});