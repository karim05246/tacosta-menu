import React from "react";

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>☕ Tacos'Ta Menu 55 🌮</h1>
  <p> Helloo! Enjoy the cozy vibes of our café and the best drinks with us.</p>
      
    
    <section class="menu-section">
      <h2><i class="fa-solid fa-mug-hot"></i> Hot Drinks</h2>
      <div class="subcategory">
        <h3>Coffee</h3>
        <ul>
          <li><span>Espresso</span><span class="price">3.300</span></li>
          <li><span>Cappuccino</span><span class="price">3.600</span></li>
          <li><span>Latte</span><span class="price">4.000</span></li>
          <li><span>Americano</span><span class="price">3.800</span></li>
          <li><span>Nescafe / Ricoré</span><span class="price">4.000</span></li>
          <li><span>Chocolat au lait</span><span class="price">4.000</span></li>
          <li><span>Café Turc</span><span class="price">5.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Thé</h3>
        <ul>
          <li><span>À la menthe</span><span class="price">3.000</span></li>
          <li><span>Aux amandes</span><span class="price">5.000</span></li>
          <li><span>Infusion</span><span class="price">3.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Macchiato</h3>
        <ul>
          <li><span>Caramel</span><span class="price">6.000</span></li>
          <li><span>Noisette</span><span class="price">6.000</span></li>
          <li><span>Nutella</span><span class="price">6.000</span></li>
          <li><span>Chocolat chaud</span><span class="price">5.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Café Capsule</h3>
        <ul>
          <li><span>Espresso</span><span class="price">5.000</span></li>
          <li><span>Cappuccino</span><span class="price">5.500</span></li>
          <li><span>Latte</span><span class="price">6.000</span></li>
          <li><span>Americano</span><span class="price">6.500</span></li>
        </ul>
      </div>
    </section>

    
    <section class="menu-section">
      <h2><i class="fa-solid fa-wine-bottle"></i> Cold Drinks</h2>
      <div class="subcategory">
        <h3>Soft Drinks</h3>
        <ul>
          <li><span>Soda</span><span class="price">3.800</span></li>
          <li><span>Orangina</span><span class="price">4.000</span></li>
          <li><span>Schweppes</span><span class="price">4.000</span></li>
          <li><span>Eau minérale</span><span class="price">2.800</span></li>
          <li><span>Bière sans alcool</span><span class="price">5.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Juice</h3>
        <ul>
          <li><span>Citronnade</span><span class="price">4.500</span></li>
          <li><span>Orange</span><span class="price">5.500</span></li>
          <li><span>Fraise</span><span class="price">5.500</span></li>
          <li><span>Lait de poule</span><span class="price">7.500</span></li>
          <li><span>Duo Fraise-Banane</span><span class="price">6.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Mojito</h3>
        <ul>
          <li><span>Virgin</span><span class="price">9.000</span></li>
          <li><span>Blue</span><span class="price">10.000</span></li>
          <li><span>Red</span><span class="price">10.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Milk Shake</h3>
        <ul>
          <li><span>Fraise</span><span class="price">9.000</span></li>
          <li><span>Banane</span><span class="price">9.000</span></li>
          <li><span>Nutella</span><span class="price">10.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Iced Coffee</h3>
        <ul>
          <li><span>Coffee</span><span class="price">8.000</span></li>
          <li><span>Caramel</span><span class="price">8.000</span></li>
          <li><span>Noisette</span><span class="price">8.000</span></li>
          <li><span>Nutella</span><span class="price">9.000</span></li>
        </ul>
      </div>
    </section>

    
    <section class="menu-section">
      <h2><i class="fa-solid fa-burrito"></i> Salties</h2>
      <div class="subcategory">
        <h3>Mexican</h3>
        <ul>
          <li><span>Tacos Ceado Grillé</span><span class="price">9.500</span></li>
          <li><span>Tacos Ceado Pané</span><span class="price">10.500</span></li>
          <li><span>Cheese XL Grillé</span><span class="price">13.500</span></li>
          <li><span>Cheese XL Pané</span><span class="price">14.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Crêpe Salées</h3>
        <ul>
          <li><span>Crêpe Thon</span><span class="price">8.000</span></li>
          <li><span>Crêpe Jambon</span><span class="price">9.000</span></li>
          <li><span>Crêpe Poulet</span><span class="price">8.500</span></li>
          <li><span>Crêpe Tunisienne</span><span class="price">9.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Panini</h3>
        <ul>
          <li><span>Panini Thon</span><span class="price">5.500</span></li>
          <li><span>Panini Jambon</span><span class="price">6.000</span></li>
          <li><span>Panini Poulet</span><span class="price">6.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Omelette</h3>
        <ul>
          <li><span>Thon, Fromage, Salade Spéciale</span><span class="price">9.000</span></li>
          <li><span>Jambon, Fromage, Salade Spéciale</span><span class="price">9.000</span></li>
        </ul>
      </div>
    </section>

    
    <section class="menu-section">
      <h2><i class="fa-solid fa-ice-cream"></i> Sweets</h2>
      <div class="subcategory">
        <h3>Crêpe Sweety</h3>
        <ul>
          <li><span>Crêpe Nutella</span><span class="price">8.500</span></li>
          <li><span>Crêpe Nutella Bananes</span><span class="price">9.000</span></li>
          <li><span>Crêpe Nutella Amandes</span><span class="price">9.500</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Pancake</h3>
        <ul>
          <li><span>Pancake Nutella</span><span class="price">9.000</span></li>
          <li><span>Pancake Nutella Bananes</span><span class="price">10.000</span></li>
          <li><span>Pancake Nutella Amandes</span><span class="price">10.000</span></li>
        </ul>
      </div>
      <div class="subcategory">
        <h3>Gaufre</h3>
        <ul>
          <li><span>Gaufre Nutella</span><span class="price">9.000</span></li>
          <li><span>Gaufre Nutella Bananes</span><span class="price">10.000</span></li>
          <li><span>Gaufre Nutella Amandes</span><span class="price">10.000</span></li>
        </ul>
      </div>
      </section>
      <footer class="footer">
  <div class="footer-content">
    <p>© 2025 Tacos'ta Bistro & Coffee Shop</p>
    <div class="social">
      <a href="https://www.instagram.com/tacostacoffee" title="Instagram" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i> Instagram
      </a>
      <a href="https://www.facebook.com/TacostaCoffee" title="Facebook" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook"></i> Facebook
      </a>
    </div>
  </div>
</footer>

     
    </div>
  );
}

export default App;
