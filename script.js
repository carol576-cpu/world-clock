let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", function () {
  let timezone = citySelect.value;

  if (!timezone) {
    return;
  }

  let time = moment().tz(timezone).format("dddd, MMMM D, YYYY h:mm A");

  document.querySelector("#result").innerHTML = `It is ${time}`;
});
