const numExercises = 20;

for (let i = 1; i <= numExercises; i++) {
  let script = document.createElement("script");
  script.setAttribute("src", `js/exercises/exercise-${i}.js`);
  document.body.appendChild(script);
}
