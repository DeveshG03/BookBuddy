document.addEventListener('DOMContentLoaded', () => {
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
            <div class="p5-kicker">phase 5 · the final garden</div>
            <h2>For my <em>Didi</em> ♡</h2>
            <p class="p5-sub">
                Let the flowers carry the last part of this little surprise —
                a birthday wish and a reminder that you will always have your brother.
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
            <span>AND ONE LAST THING</span>
            <h3>Happy Birthday, Manisha ♡</h3>
            <b>With love, Your Brother</b>
            <br>
            <button class="p5-back" data-back-top>
                BACK TO THE BEGINNING ↑
            </button>
        </div>
    `;

    main.appendChild(section);

    section.querySelector('[data-back-top]').onclick = () =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
});