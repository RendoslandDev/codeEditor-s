<template>
  <section id="merchant">
    <div class="production-intro">
      <router-link to="/" class="back-link link">
        <span class="decoration" aria-hidden="true">—</span>back
      </router-link>
      <h1 class="heading outline-font" v-fill-heading>Merchant 🐿️</h1>
      <p class="subheading">osland — sell &amp; showcase</p>
    </div>

    <div class="merchant-layout">
      <aside class="merchant-sidebar" aria-label="Merchant navigation">
        <p class="sidebar-mark">
          <span class="mark-glyph" aria-hidden="true">🐿️</span>
          osland
        </p>

        <nav class="lace-nav">
          <div class="lace-group">
            <p class="nav-group-label">Sell</p>
            <ul class="lace-track sidebar-mark">
              <li
                v-for="item in sellLinks"
                :key="item.to"
                class="lace-item"
              >
                <router-link :to="item.to" class="nav-link" active-class="is-active">
                  <span class="eyelet" aria-hidden="true"></span>
                  <span class="nav-label">{{ item.label }}</span>
                  <span class="nav-count" v-if="item.count">{{ item.count }}</span>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="lace-group">
            <p class="nav-group-label ">Models</p>
            <ul class="lace-track sidebar-mark">
              <li
                v-for="item in modelLinks"
                :key="item.to"
                class="lace-item"
              >
                <router-link :to="item.to" class="nav-link" active-class="is-active">
                  <span class="eyelet" aria-hidden="true"></span>
                  <span class="nav-label">{{ item.label }}</span>
                  <span class="nav-badge" v-if="item.badge">{{ item.badge }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <router-link to="/merchant/new" class="sidebar-cta">
          + list an item
        </router-link>
      </aside>

      <div class="merchant-content">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script setup>
const sellLinks = [
  { to: '/merchant/books', label: 'Books', count: 12 },
  { to: '/merchant/shoes', label: 'Shoes', count: 34 },
  { to: '/merchant/sneakers', label: 'Sneakers', count: 51 },
]

const modelLinks = [
  { to: '/merchant/models/upcoming', label: 'Upcoming', badge: 'new' },
  { to: '/merchant/models/registered', label: 'Registered' },
]
</script>

<style lang="scss">
.production-intro {
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  position: relative;

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: $step--1;
    color: $rose-gold;
    font-family: 'le murmure';
    margin-bottom: 1.5rem;
  }

  .heading {
    text-align: left;
    margin: 0;
  }

  .subheading {
    margin: 1rem 0 0 0;
    font-family: monospace;
    font-size: $step--1;
    opacity: 0.6;
    letter-spacing: 0.03em;
  }
}

.merchant-layout {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

// ---- Sidebar -------------------------------------------------

.merchant-sidebar {
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  @media (max-width: 768px) {
    position: static;
  }
}

.sidebar-mark {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-family: 'le murmure';
  font-size: $step--1;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  opacity: 0.55;

  .mark-glyph {
    font-size: 1.1em;
    filter: grayscale(0.2);
  }
}

.nav-group-label {
  font-family: monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.4;
  margin: 0 0 0.75rem 0;
}

.lace-group + .lace-group {
  margin-top: 2rem;
}

// the "lace": a stitched vertical thread that runs behind each row,
// with a small eyelet marker per item. Active item pulls the thread
// taut and lights it up in rose-gold, like a laced eyelet cinched down.
.lace-track {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 0.6rem;
    bottom: 0.6rem;
    width: 1px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.18) 0,
      rgba(0, 0, 0, 0.18) 5px,
      transparent 5px,
      transparent 9px
    );
    background-size: 1px 9px;
    background-repeat: repeat-y;
  }
}

.lace-item {
  position: relative;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.55rem 0 0.55rem 0;
  color: currentColor;
  text-decoration: none;
  font-size: $step--1;
  opacity: 0.6;
  transition: opacity 0.2s ease, padding-left 0.25s ease;

  .eyelet {
    flex: none;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.35);
    background: var(--surface, #fff);
    transition: border-color 0.25s ease, background 0.25s ease,
      transform 0.25s ease;
  }

  .nav-label {
    flex: 1;
  }

  .nav-count {
    font-family: monospace;
    font-size: 0.7rem;
    opacity: 0.5;
  }

  .nav-badge {
    font-family: 'le murmure';
    font-size: 0.65rem;
    text-transform: lowercase;
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    background: $rose-gold;
    color: white;
  }

  &:hover {
    opacity: 0.9;
    padding-left: 0.25rem;

    .eyelet {
      border-color: $rose-gold;
    }
  }

  &.is-active {
    opacity: 1;
    padding-left: 0.25rem;
    font-weight: 600;

    .eyelet {
      border-color: $rose-gold;
      background: $rose-gold;
      transform: scale(1.15);
    }
  }
}

.sidebar-cta {
  align-self: flex-start;
  font-family: 'le murmure';
  font-size: $step--1;
  color: $rose-gold;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: $rose-gold;
    background: rgba(217, 119, 87, 0.06);
  }
}

.merchant-content {
  min-width: 0;
}
</style>