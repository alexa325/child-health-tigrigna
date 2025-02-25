// DOM Element Cache
const tipsGrid = document.querySelector('.tips-grid');
const parentingGrid = document.querySelector('.parenting-grid');

// Content Data - Improved Structure
const contentData = {
  healthTips: [
    {
      title: "ሕማም ምክልኻል",
      content: "ካብ ሓሚምካ ሕክምና ምክልኻል",
      icon: "fas fa-shield-virus",
      category: "health"
    },
    {
      title: "ዝተመጣጠን ምግቢ",
      content: "ልምዓት ህፃናት ንጥዕና ዘለዎ ጠቓሚ ምግቢ...",
      icon: "fas fa-utensils",
      category: "health"
    }
  ],
  parentingTips: [
    {
      title: "ሃናፃይ ኣተዓባብያን ክትትልን",
      content: "ቆልዑ ብሓልዮትን ፍቕርን ምዕባይ",
      icon: "fas fa-heart",
      category: "parenting"
    }
  ]
};

// Card Generator - Enhanced with Error Handling
function createTipCard(tip) {
  try {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.innerHTML = `
      <i class="${tip.icon}" aria-hidden="true"></i>
      <h3>${tip.title}</h3>
      <p>${tip.content}</p>
    `;
    return card;
  } catch (error) {
    console.error('Error creating tip card:', error);
    return document.createElement('div'); // Return empty div as fallback
  }
}

// Content Initializer - Optimized
function initializeContent() {
  try {
    contentData.healthTips.forEach(tip => {
      tipsGrid.appendChild(createTipCard(tip));
    });
    
    contentData.parentingTips.forEach(tip => {
      parentingGrid.appendChild(createTipCard(tip));
    });
  } catch (error) {
    console.error('Content initialization failed:', error);
  }
}

// Document Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  initializeContent();
  // Add other initializations here
});

// Add your existing animations and event listeners below
