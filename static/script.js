var aimlBtn = document.getElementById("aiml-btn");

// Get a reference to the modal
var aimlModal = document.getElementById("aiml-modal");

// Get a reference to the close button inside the modal
var aimlCloseBtn = document.getElementById("aiml-close-btn");

// Add an event listener to the button that will open the modal
aimlBtn.addEventListener("click", function () {
  aimlModal.style.display = "block";
});

// Add an event listener to the close button that will close the modal
aimlCloseBtn.addEventListener("click", function () {
  aimlModal.style.display = "none";
});


const courses = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    videoUrl: "https://www.youtube.com/watch?v=_8fzJfUZetg",
    thumbnailUrl: "https://i.ytimg.com/vi/_8fzJfUZetg/maxresdefault.jpg",
    description: "This course provides an introduction to Machine Learning concepts."
  },
  {
    id: 2,
    title: "Deep Learning with TensorFlow",
    videoUrl: "https://www.youtube.com/watch?v=JLzV2ys5nDc",
    thumbnailUrl: "https://i.ytimg.com/vi/JLzV2ys5nDc/maxresdefault.jpg",
    description: "This course provides an introduction to Deep Learning using TensorFlow."
  }
];

const courseRow = document.querySelector(".course-row");

function createCourseCard(course) {
  const card = document.createElement("div");
  card.classList.add("col-md-4");
  card.innerHTML = `
    <div class="card">
      <img src="${course.thumbnailUrl}" class="card-img-top" alt="${course.title}">
      <div class="card-body">
        <h5 class="card-title">${course.title}</h5>
        <p class="card-text">${course.description}</p>
        <a href="${course.videoUrl}" class="btn btn-primary" target="_blank">Watch</a>
      </div>
    </div>
  `;
  return card;
}

courses.forEach((course) => {
  courseRow.appendChild(createCourseCard(course));
});

// Example of adding a new course dynamically
const newCourse = {
  id: 3,
  title: "Web Development with React",
  videoUrl: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  thumbnailUrl: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
  description: "This course provides an introduction to web development using React."
};

courseRow.appendChild(createCourseCard(newCourse));
