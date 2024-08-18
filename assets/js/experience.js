AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/DRDO.png",
    place: "DRDO",
    time: "June 2024 - Aug 2024",
    desp: "<li>⚡Building strong knowledge on No-SQL databases and exploring data management and optimization with MongoDB , Redis & Cassandra .</li><li> ⚡Implemented advanced querying techniques in MongoDB to improve data retrieval times, enhancing overall system efficiency.</li>",
  },
  {
    title: "Python Developer",
    cardImage: "assets/images/experience-page/Techvidya.png",
    place: "Noida, India",
    time: "May2024 - July 2024",
    desp: "<li>⚡Optimized Data Processing: Improved data processing speed by 30% by refactoring Python scripts and implementing efficient data handling techniques.</li>",
  },
  {
    title: "Indian Meteorological Department",
    cardImage: "assets/images/experience-page/Mausam.png",
    place: "Delhi, india",
    time: "Nov 2023 - Dec 2023",
    desp: "<li>⚡Performed Website Development in Indian Meteorological Department.</li><br><li>⚡Utilized HTML, CSS, JavaScript, and MySQL to build the backend infrastructure and manage database operations. The project significantly enhanced the digital presence of the department and streamlined user access to crucial weather information.</li><br><li>⚡Developed and implemented a responsive and user-friendly website for the Indian Meteorological Department. The project involved designing the site architecture, integrating real-time weather data, and optimizing the platform for performance and scalability. This work improved the accessibility and efficiency of weather information dissemination to the public.</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Google DSC-GBU 2021-25",
    cardImage: "assets/images/experience-page/GDSC.png",
    description:
      "Meet students interested in developer technologies at your college or university.",
  },
  {
    title: "UNESCO-INDIA-AFRICA HACKATHON",
    cardImage: "assets/images/experience-page/G-20.png",
    description:
      "UNESCO India Africa Hackathon was inaugurated at Gautam Buddha University with a grand opening ceremony.",
  },
  {
    title: "Glitch Tech-Fest 2024",
    cardImage: "assets/images/experience-page/Glitch.png",
    description:
      "Is all about community, learning, and innovation. It's the ultimate gathering of the brightest minds in the tech industry.",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section



const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
