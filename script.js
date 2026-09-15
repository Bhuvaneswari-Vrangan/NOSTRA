var navbar = document.getElementById("navbar");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function() {
    navbar.style.display = "block";
});

closenav.addEventListener("click", function() {
    navbar.style.display = "none";
});
const closeButton = document.getElementById("close-banner");
const offerbanner = document.getElementById("offer-banner");
function openNav() { document.getElementById("side-navbar").style.
  right = "0"; } 
function closeNav() { document.getElementById("side-navbar").style.
  right = "-300px"; }
  const banner = document.getElementById('topBanner');
  const btn = document.getElementById('closeBtn');
  // DOM Elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
const topBanner = document.getElementById("topBanner");
const closeBannerBtn = document.getElementById("closeBannerBtn");

// Render Products
function renderProducts(productList) {
  productGrid.innerHTML = "";

  if (productList.length === 0) {
    productGrid.innerHTML = `<p class="no-products">No products match your filter/search criteria.</p>`;
    return;
  }

  productList.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <h4 class="product-title">${product.title}</h4>
      <p class="product-price">₹${product.price}</p>
    `;

    productGrid.appendChild(card);
  });
}

// Filter and Search Logic
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Get selected filters categorized by type
  const selectedFilters = {
    occasion: [],
    color: []
  };

  filterCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const category = checkbox.getAttribute("data-category");
      selectedFilters[category].push(checkbox.value.toLowerCase());
    }
  });

  // Filter products matching search AND selected checkboxes
  const filtered = products.filter(product => {
    // Search match
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);

    // Occasion match
    const matchesOccasion =
      selectedFilters.occasion.length === 0 ||
      product.occasion.some(occ => selectedFilters.occasion.includes(occ));

    // Color match
    const matchesColor =
      selectedFilters.color.length === 0 ||
      product.color.some(col => selectedFilters.color.includes(col));

    return matchesSearch && matchesOccasion && matchesColor;
  });

  renderProducts(filtered);
}

// Event Listeners
searchInput.addEventListener("input", filterProducts);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", filterProducts);
});

closeBannerBtn.addEventListener("click", () => {
  topBanner.style.display = "none";
});


  btn.addEventListener('click', function() {
    banner.style.display = 'none';
  });
const searchInput = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

function filterProducts(){
  const searchText = searchInput.value.toLowerCase();
  const selectedOccasion = [...document.querySelectorAll('[data-type="occasion"]:checked')].map(e=>e.value);
  const selectedColor = [...document.querySelectorAll('[data-type="color"]:checked')].map(e=>e.value);

  cards.forEach(card=>{
    const name = card.dataset.name.toLowerCase();
    const occasion = card.dataset.occasion;
    const color = card.dataset.color;

    const matchSearch = name.includes(searchText);
    const matchOccasion = selectedOccasion.length==0 || selectedOccasion.includes(occasion);
    const matchColor = selectedColor.length==0 || selectedColor.includes(color);

    if(matchSearch && matchOccasion && matchColor){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProducts);
filters.forEach(f=> f.addEventListener('change', filterProducts));

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
var closenav = document.getElementById("closenav");

closenav.addEventListener("click", function() {
    document.getElementById("navbar").style.display = "none";
});


  menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
const topbanner = document.getElementById('topBanner');
  const btn = document.getElementById('closeBtn');

  btn.addEventListener('click', function() {
    banner.style.display = 'none';
  });
btn.addEventListener('click', function() {
  banner.style.display = 'none';
  localStorage.setItem('bannerClosed', 'true');
});

// On page load
if(localStorage.getItem('bannerClosed') === 'true'){
  banner.style.display = 'none';
}

  let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}
  var closenav = document.getElementById("closenav");

closenav.addEventListener("click", function() {
    document.getElementById("navbar").style.display = "none";
});
  slides[slideIndex - 1].style.display = "block";
  // Select the element
const targetImage = document.querySelector('.my-image');

// Make it semi-transparent
targetImage.style.opacity = "0.4"; 

// Make it fully visible again
targetImage.style.opacity = "1"; 

const track = document.querySelector('.image-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
document.getElementById('closeBtn').addEventListener('click', function() {
document.getElementById('banner').style.display = 'none';

let currentPosition = 0;
const slideStep = 266; // Width of image (250px) + gap (16px)

nextBtn.addEventListener('click', () => {
  const maxScroll = -(track.scrollWidth - track.parentElement.clientWidth);
  
  if (currentPosition > maxScroll) {
    currentPosition -= slideStep;
    // Don't scroll past the last image
    if (currentPosition < maxScroll) {
      currentPosition = maxScroll;
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += slideStep;
    // Don't scroll past the first image
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});
nextBtn.addEventListener('click', () => {
  const maxScroll = -(track.scrollWidth - track.parentElement.clientWidth);
  
  if (currentPosition > maxScroll) {
    currentPosition -= slideStep;
    if (currentPosition < maxScroll) currentPosition = maxScroll;
    triggerSlide();
  }
});

// Click Prev Arrow -> Slide Right
prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += slideStep;
    if (currentPosition > 0) currentPosition = 0;
    triggerSlide();
  }
});document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    let targetId = this.getAttribute('href').substring(1); // remove #
    let target = document.getElementById(targetId);
    
    if(target) {
      // 1. Close sidenav if open
      document.getElementById('sidenav').style.left = '-280px';
      document.body.style.overflow = 'auto';
      
      // 2. Scroll after 300ms (let menu close)
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      
    } 
    else {
      console.log('ID NOT FOUND:', targetId);
      alert('No section with id="' + targetId + '" found! Check spelling.');
    }
  });
})
@media (max-width: 768px) {
  track-content span {
    font-size: 16px;
  }
  .experience-track {
    padding: 10px 0;
  }
}

banner.addEventListener('mouseenter', () => {
  banner.classList.add('hover-close');
});

banner.addEventListener('mouseleave', () => {
  banner.classList.remove('hover-close');
});//selecting side navbar,Menuicon
document.body.style.overflow = 'hidden'; 
const sidenav = document.getElementById('sidenav');
const overlay = document.getElementById('overlay');

document.getElementById('menuBtn').onclick = () => {
  sidenav.classList.add('active');
  overlay.classList.add('active');
}
document.getElementById('closeSidenav').onclick = closeNav;
overlay.onclick = closeNav;

function closeNav() {
  sidenav.classList.remove('active');

  overlay.classList.remove('active');
}
function openMenu() {
  document.getElementById('sidenav').style.left = '0px';
  console.log('menu opened');
}
function closeMenu() {
  document.getElementById('sidenav').style.left = '-280px';
}
