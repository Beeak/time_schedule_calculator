const whole_day = 24;

document.querySelector("#submit").addEventListener("click", () => {
  const classes = parseFloat(document.querySelector("#classes").value);
  const class_time = classes * 1.5;

  if (classes <= 0) {
    alert("Please enter a valid number for classes.");
    window.location.reload();
  }

  const sleeping = parseFloat(document.querySelector("#sleeping").value);

  if (sleeping <= 0) {
    alert("Please enter a valid number for sleeping time.");
    window.location.reload();
  }

  const gaming = parseFloat(document.querySelector("#gaming").value);

  if (gaming <= 0) {
    alert("Please enter a valid number for gaming time.");
    window.location.reload();
  }

  const studying = parseFloat(document.querySelector("#studying").value);

  if (studying <= 0) {
    alert("Please enter a valid number for studying time.");
    window.location.reload();
  }

  const bathroom_time = parseFloat(document.querySelector("#bathroom").value);

  if (bathroom_time <= 0) {
    alert("Please enter a valid number for bathroom time.");
    window.location.reload();
  }

  const eating = parseFloat(document.querySelector("#eating").value);

  if (eating <= 0) {
    alert("Please enter a valid number for eating time.");
    window.location.reload();
  }

  const total_time =
    gaming + class_time + studying + sleeping + bathroom_time + eating;

  if (total_time > whole_day) {
    alert("Your activities exceed 24 hours! Please adjust your schedule.");
  }

  const free_time = whole_day - total_time;

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
});
