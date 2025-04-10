// Car Data
const carCollections = [
  { image: "audi.png", name: "2012 Audi TT RS" },
  { image: "bmw-m3-1995.png", name: "1995 BMW M3" },
  { image: "bmw-m5.png", name: "1991 BMW M5 Dinan" },
  { image: "alpina.png", name: "1981 BMW 323i Alpina B6 2.8" },
  {
    image: "bmw-orange.png",
    name: "2023 BMW M3 Competition Jahre edition 1 of 500",
  },
  { image: "bmw-track.png", name: "1997 BMW M3 Modified Track Car" },
  { image: "bmw-323i.png", name: "1996 BMW 323i" },
  { image: "bmw-330ci.png", name: "2006 BMW 330Ci" },
];

// Auction Data
const auctionData = [
  {
    image: "bmw-m4.png",
    title: "2015 BMW M4",
    desc: "This is a 2015 (F83) M4 hardtop convertible BMW Individual in Peridot Green Metallic with Opal White Interior and Dark Red Sycamore wood trim.",
    location: "South Carolina, 29706",
    bid: "$10,250",
  },
  {
    image: "subaru.png",
    title: "2001 Subaru Impreza 2.5 RS Coupe",
    desc: "This 2001 Subaru Impreza 2.5RS in Blue Ridge Pearl Metallic is modified.",
    location: "New York, 11704",
    bid: "$27,000",
  },
  {
    image: "bmw-e21.png",
    title: "1981 BMW 323i Alpina B6 2.8",
    desc: "This is a 1981 Alpina B6 2.8 based on the original BMW e21 3-series with approximately 141k miles.",
    location: "Pennsylvania, 19501",
    bid: "$20,340",
  },
  {
    image: "bmw-2002tii.png",
    title: "1973 BMW 2002tii",
    desc: "This is a 1973 BMW Euro-version 2002tii with sunroof, A/C, and 4-speed transmission.",
    location: "California, 91767",
    bid: "$55,000",
  },
];

// news Data
const newsData = [
  {
    authorImg: "images/news/profile.png",
    author: "Hallie Parker",
    time: "1 hour ago",
    description:
      "I've always loved the e36 chassis as long as I can remember, in fact my first BMW was a 1998 CPO 323iS Coupe. Through the years I've gone on to own just about every body style I could of this generation with the Touring (Wagon) being the exception, because BMW NA never imported them here. Finally being eligble for import my experience is complet...",
    images: ["images/news/news1a.png", "images/news/news1b.png"],
  },
  {
    authorImg: "images/news/profile.png",
    author: "Douglas",
    time: "4 hours ago",
    description:
      "I am the third owner of this car. Originally purchased in Minneapolis and never driven in winter. Absolutely no rust with a flawless exterior. I converted the car to a five speed manual after I purchased it.",
    images: ["images/news/news2a.png", "images/news/news2b.png"],
  },
  {
    authorImg: "images/news/profile.png",
    author: "Nikita",
    time: "1 week ago",
    description: `Intro
This is a 1995 BMW e36 M3 in Hellrot Red with Black leather interior. It has approximately 158k miles and is all original with no accidents and a clean Carfax. It has spent time in Ohio and Pennsylvania and is 4 owner car. It is a stock example except for the aftermarket TSW wheels, clear indicator lights, and Double Din stereo with ...`,
    images: ["images/news/news3a.png", "images/news/news3b.png"],
  },
];

// genera listing Data
const listingsData = [
  {
    title: "2000 BMW 540i Sport Package",
    offer: "$0",
    buyNow: "$7,000",
    image: "images/listing/listing1.png",
  },
  {
    title: "2001 BMW M3",
    offer: "$0",
    buyNow: "$25,000",
    image: "images/listing/listing2.png",
  },
  {
    title: "1986 BMW M5",
    offer: "$0",
    buyNow: "$8,500",
    image: "images/listing/listing3.png",
  },
  {
    title: "2018 BMW M5",
    offer: "$0",
    buyNow: "$105,000",
    image: "images/listing/listing4.png",
  },
  {
    title: "1974 BMW 2002",
    offer: "$0",
    buyNow: "$7,700",
    image: "images/listing/listing5.png",
  },
  {
    title: "2020 BMW M5",
    offer: "$0",
    buyNow: "$96,500",
    image: "images/listing/listing6.png",
  },
];

//hero section
let index = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 5000);

showSlide();

// collection
const grid = document.getElementById("collectionGrid");

carCollections.map((car) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url('images/collections/${car.image}')`;
  card.innerHTML = `<p>${car.name}</p>`;
  grid.appendChild(card);
});

// Auction
const auctionGrid = document.getElementById("auctionGrid");

auctionData.forEach((auction) => {
  const card = document.createElement("div");
  card.className = "auction-card";
  card.innerHTML = `
    <img src="images/auctions/${auction.image}" alt="${auction.title}">
    <div class="card-content">
      <h3>${auction.title}</h3>
      <p>${auction.desc}</p>
      <div class="location">📍 ${auction.location}</div>
      <hr />
      <div class="bid">Current Bid: <span>${auction.bid}</span></div>
    </div>
  `;
  auctionGrid.appendChild(card);
});

// Render News
const newsContainer = document.getElementById("newsContainer");

newsData.forEach((news) => {
  const newsCard = document.createElement("div");
  newsCard.classList.add("news-card");

  newsCard.innerHTML = `
    <div class="meta">
      <img src="${news.authorImg}" alt="profile"/>
      <div>
     <p> ${news.author}</p>
     <p>🕒 ${news.time}</p></div>
    </div>
    <p class="desc">${news.description}</p>
    <div class="images">
      ${news.images
        .map((img) => `<img src="${img}" alt="News image"/>`)
        .join("")}
    </div>
  `;

  newsContainer.appendChild(newsCard);
});

// Render Listings
const listingContainer = document.getElementById("listingContainer");
listingsData.map((listing) => {
  listingContainer.innerHTML += `
    <div class="listing-card">
      <img src="${listing.image}" alt="${listing.title}" />
      <div class="listing-content">
        <strong>${listing.title}</strong><br/>
        <hr/>
        <span>Current Offer: ${listing.offer}</span><br/>
        <span>Buy Now: <strong style="color:#d4af7a;">${listing.buyNow}</strong></span>
      </div>
    </div>
  `;
});

// footer
document.querySelector("footer button").addEventListener("click", () => {
  const email = document.querySelector('footer input[type="email"]').value;
  if (email) {
    alert(`Thanks for subscribing with ${email}!`);
    document.querySelector('footer input[type="email"]').value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// Event Listener for the button
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".event-container");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("animate");
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(section);
});
