const whole_day = 24;

document.querySelector("#submit").addEventListener("click", () => {
  const classes = parseFloat(document.querySelector("#classes").value);
  const class_time = classes * 1.5;

  const sleeping = parseFloat(document.querySelector("#sleeping").value);

  const gaming = parseFloat(document.querySelector("#gaming").value);

  const studying = parseFloat(document.querySelector("#studying").value);

  const bathroom_time = parseFloat(document.querySelector("#bathroom").value);

  const eating = parseFloat(document.querySelector("#eating").value);

  const total_time =
    gaming + class_time + studying + sleeping + bathroom_time + eating;

  if (total_time > whole_day) {
    alert("Your activities exceed 24 hours! Please adjust your schedule.");
  } else {
    const free_time = whole_day - total_time;
    console.log(`You have ${free_time} hours of free time today.`);
    console.log(
      `Or in minutes you have ${parseInt(
        free_time * 60
      )} minutes of free time today.`
    );

    const data = [
      {
        values: [
          gaming,
          class_time,
          studying,
          sleeping,
          bathroom_time,
          eating,
          free_time,
        ],
        labels: [
          "Gaming time " + gaming + " hours",
          "Classes " + class_time + " hours",
          "Studies " + studying + " hours",
          "Sleeping " + sleeping + " hours",
          "Bathroom time " + bathroom_time + " hours",
          "Eating " + eating + " hours",
          "Free time " + free_time + " hours",
        ],
        type: "pie",
      },
    ];

    Plotly.newPlot("myPlot", data);
  }
});
