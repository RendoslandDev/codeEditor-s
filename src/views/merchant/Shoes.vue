<template>
  <div class="shop">
    <header class="shop__header">
      <p class="shop__eyebrow">Sneaker Wall</p>
      <h1 class="shop__title">Pick your pair</h1>
      <p class="shop__sub">Placeholder styles — swap in real product photos and names when ready.</p>
    </header>

    <div class="grid">
      <article
        v-for="item in products"
        :key="item.id"
        class="tile"
        :class="{ 'tile--active': item.qty > 0 }"
      >
        <div class="tile__image" :style="{ '--hue': item.hue }">
          <svg viewBox="0 0 120 70" class="tile__svg" aria-hidden="true">
            <path
              d="M8 46 C 14 34, 26 30, 34 32 L 50 24 C 60 18, 74 18, 84 24
                 L 100 34 C 108 38, 112 44, 112 50 L 112 56 C 112 60, 108 62, 104 62
                 L 14 62 C 10 62, 8 59, 8 55 Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linejoin="round"
            />
            <path d="M34 32 L 34 46" stroke="currentColor" stroke-width="2" />
            <path d="M50 24 L 54 40" stroke="currentColor" stroke-width="2" />
            <path d="M8 55 L 112 55" stroke="currentColor" stroke-width="2.5" />
          </svg>
        </div>

        <div class="tile__body">
          <p class="tile__name">{{ item.name }}</p>
          <p class="tile__price">${{ item.price.toFixed(2) }}</p>
        </div>

        <div class="tile__controls">
          <button
            class="stepper__btn"
            type="button"
            :disabled="item.qty === 0"
            @click="changeQty(item, -1)"
            aria-label="Remove one"
          >
            −
          </button>
          <span class="stepper__count">{{ item.qty }}</span>
          <button
            class="stepper__btn"
            type="button"
            @click="changeQty(item, 1)"
            aria-label="Add one"
          >
            +
          </button>
        </div>
      </article>
    </div>

    <transition name="rise">
      <div class="cart" v-if="totalItems > 0">
        <div class="cart__info">
          <span class="cart__count">{{ totalItems }} {{ totalItems === 1 ? 'pair' : 'pairs' }}</span>
          <span class="cart__total">${{ totalPrice.toFixed(2) }}</span>
        </div>
        <button class="cart__order" type="button" @click="placeOrder">
          {{ ordered ? 'Order placed ✓' : 'Place order' }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const products = reactive([
  { id: 1, name: 'Court Classic', price: 78, hue: 210, qty: 0 },
  { id: 2, name: 'Trail Ridge', price: 96, hue: 25, qty: 0 },
  { id: 3, name: 'Street Line', price: 64, hue: 340, qty: 0 },
  { id: 4, name: 'Aero Runner', price: 110, hue: 165, qty: 0 },
  { id: 5, name: 'Retro Court', price: 82, hue: 45, qty: 0 },
  { id: 6, name: 'Cloud Step', price: 120, hue: 260, qty: 0 },
])

const ordered = ref(false)

const totalItems = computed(() =>
  products.reduce((sum, item) => sum + item.qty, 0)
)

const totalPrice = computed(() =>
  products.reduce((sum, item) => sum + item.qty * item.price, 0)
)

function changeQty(item, delta) {
  const next = item.qty + delta
  item.qty = Math.max(0, next)
  ordered.value = false
}

function placeOrder() {
  if (totalItems.value === 0) return
  // Replace with a real checkout call to your ordering API.
  ordered.value = true
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Special+Elite&display=swap');

.shop {
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
  padding: 6vh 6vw 12vh;
  box-sizing: border-box;
  background:
    radial-gradient(ellipse 120% 60% at 50% 0%, rgba(255, 255, 255, 0.05), transparent 60%),
    repeating-linear-gradient(
      100deg,
      var(--felt) 0px,
      var(--felt) 3px,
      var(--felt-dark) 3px,
      var(--felt-dark) 4px
    );
  font-family: 'Fraunces', serif;
  color: var(--paper);
}

.shop__header {
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
}

.shop__eyebrow {
  margin: 0 0 0.4rem;
  font-family: 'Special Elite', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  color: var(--brass);
  text-transform: uppercase;
}

.shop__title {
  margin: 0 0 0.6rem;
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 500;
}

.shop__sub {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(237, 228, 206, 0.7);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.tile {
  background: var(--paper);
  color: var(--ink);
  border-radius: 3px;
  padding: 1.2rem 1.2rem 1.4rem;
  box-shadow:
    0 1px 0 var(--paper-shadow) inset,
    0 14px 26px -14px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tile--active {
  box-shadow:
    0 1px 0 var(--paper-shadow) inset,
    0 0 0 2px var(--brass),
    0 16px 30px -14px rgba(0, 0, 0, 0.55);
}

.tile:hover {
  transform: translateY(-3px);
}

.tile__image {
  color: hsl(var(--hue), 45%, 32%);
  display: flex;
  justify-content: center;
  padding: 0.6rem 0 1rem;
}

.tile__svg {
  width: 100%;
  max-width: 160px;
  height: auto;
}

.tile__body {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 0.9rem;
  border-bottom: 1px dashed var(--rule);
}

.tile__name {
  margin: 0;
  font-size: 1.02rem;
  font-style: italic;
}

.tile__price {
  margin: 0;
  font-family: 'Special Elite', monospace;
  font-size: 0.85rem;
  color: var(--brass);
}

.tile__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding-top: 0.9rem;
}

.stepper__btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--brass);
  background: transparent;
  color: var(--brass);
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.stepper__btn:hover:not(:disabled) {
  background: var(--brass);
  color: var(--paper);
}

.stepper__btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.stepper__btn:focus-visible,
.cart__order:focus-visible {
  outline: 2px solid var(--brass);
  outline-offset: 2px;
}

.stepper__count {
  min-width: 1.4rem;
  text-align: center;
  font-family: 'Special Elite', monospace;
  font-size: 0.95rem;
}

.cart {
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1.4rem;
  background: var(--paper);
  color: var(--ink);
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  box-shadow: 0 14px 34px -12px rgba(0, 0, 0, 0.6);
}

.cart__info {
  display: flex;
  flex-direction: column;
  font-family: 'Special Elite', monospace;
  font-size: 0.78rem;
  line-height: 1.3;
}

.cart__count {
  color: rgba(43, 42, 34, 0.65);
}

.cart__total {
  font-size: 1rem;
  color: var(--ink);
}

.cart__order {
  border: none;
  background: var(--stamp);
  color: var(--paper);
  padding: 0.65rem 1.2rem;
  border-radius: 999px;
  font-family: 'Fraunces', serif;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.cart__order:hover {
  transform: translateY(-1px);
}

.rise-enter-active,
.rise-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.rise-enter-from,
.rise-leave-to {
  opacity: 0;
  transform: translate(-50%, 12px);
}

@media (prefers-reduced-motion: reduce) {
  .tile,
  .stepper__btn,
  .cart__order,
  .rise-enter-active,
  .rise-leave-active {
    transition: none;
  }
}
</style>