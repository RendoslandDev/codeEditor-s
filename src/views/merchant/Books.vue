<template>
  <div class="drawer">
    <div class="card" :class="{ stamped }">
      <div class="card__row">
        <span class="card__call">813.54</span>
        <span class="card__call">B66 2026</span>
      </div>
      <div class="card__rule" />

      <div class="card__body">
        <p class="card__lede">Not yet catalogued.</p>
        <p class="card__text">
          This title is being filed. The shelf will hold it
          just as soon as the ink is dry.
        </p>
      </div>

      <div class="stamp" aria-hidden="true">
        <span class="stamp__line">COMING</span>
        <span class="stamp__line">SOON</span>
      </div>

      <div class="card__rule" />

      <div class="card__tab">
        <span>BOOKS</span>
        <span class="card__tab-letter">B</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const stamped = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    stamped.value = true
  }, 450)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Special+Elite&display=swap');

.drawer {
  --paper: #ede4ce;
  --paper-shadow: #dcd0ae;
  --ink: #2b2a22;
  --felt: #24352a;
  --felt-dark: #1b2921;
  --brass: #b08d46;
  --stamp: #a23b2e;
  --rule: #c7b98f;

  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8vh 6vw;
  background:
    radial-gradient(ellipse 120% 90% at 50% 0%, rgba(255, 255, 255, 0.05), transparent 60%),
    repeating-linear-gradient(
      100deg,
      var(--felt) 0px,
      var(--felt) 3px,
      var(--felt-dark) 3px,
      var(--felt-dark) 4px
    );
  box-sizing: border-box;
}

.card {
  position: relative;
  width: min(420px, 100%);
  padding: 2.6rem 2.2rem 1.4rem;
  background: var(--paper);
  color: var(--ink);
  border-radius: 2px;
  transform: rotate(-1.4deg);
  box-shadow:
    0 1px 0 var(--paper-shadow) inset,
    0 24px 45px -20px rgba(0, 0, 0, 0.55),
    0 2px 6px rgba(0, 0, 0, 0.25);
  font-family: 'Fraunces', serif;
  transition: transform 0.4s ease;
}

.card:hover {
  transform: rotate(-0.4deg) translateY(-2px);
}

.card__row {
  display: flex;
  justify-content: space-between;
  font-family: 'Special Elite', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--brass);
}

.card__rule {
  margin: 0.85rem 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    var(--rule) 0,
    var(--rule) 6px,
    transparent 6px,
    transparent 11px
  );
}

.card__body {
  padding: 0.35rem 0 1.1rem;
}

.card__lede {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
}

.card__text {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.55;
  color: rgba(43, 42, 34, 0.78);
  max-width: 30ch;
}

.stamp {
  position: absolute;
  top: 46%;
  right: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.95;
  transform: translateY(-50%) rotate(-9deg) scale(1.7);
  opacity: 0;
  color: var(--stamp);
  font-family: 'Special Elite', monospace;
  font-size: 1.05rem;
  letter-spacing: 0.06em;
  text-shadow: 0.5px 0.5px 0 var(--stamp);
  transition: opacity 0.15s ease, transform 0.28s cubic-bezier(0.2, 1.4, 0.4, 1);
  filter: blur(0.3px);
  border: 2.5px solid var(--stamp);
  padding: 0.35rem 0.6rem;
  border-radius: 3px;
  mix-blend-mode: multiply;
}

.card.stamped .stamp {
  opacity: 0.86;
  transform: translateY(-50%) rotate(-9deg) scale(1);
}

.card__tab {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-family: 'Special Elite', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: rgba(43, 42, 34, 0.6);
  padding-top: 0.6rem;
}

.card__tab-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid var(--brass);
  border-radius: 50%;
  color: var(--brass);
  font-size: 0.7rem;
}

@media (max-width: 480px) {
  .card {
    padding: 2.1rem 1.5rem 1.2rem;
  }
  .card__lede {
    font-size: 1.3rem;
  }
  .stamp {
    right: 1.1rem;
    font-size: 0.9rem;
    transform: translateY(-50%) rotate(-9deg) scale(1.4);
  }
  .card.stamped .stamp {
    transform: translateY(-50%) rotate(-9deg) scale(0.92);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .stamp {
    transition: none;
  }
}
</style>