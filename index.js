var weightResult,
  timeResult,
  distanceResult,
  fromWeight,
  toWeight,
  weightOptionFrom,
  weightOptionTo,
  fromTime,
  timeOptionFrom,
  TimeOptionTo,
  fromDistance,
  distanceOptionFrom,
  distanceOptionTo;
$("#fromWeightSelect").change(function () {
  toKg();
  toGram();
  toMilliGram();
  toMicroGram();
  toPound();
});
$("#toWeightSelect").change(function () {
  toKg();
  toGram();
  toMilliGram();
  toMicroGram();
  toPound();
});
$("#fromWeightInput").keyup(function () {
  toKg();
  toGram();
  toMilliGram();
  toMicroGram();
  toPound();
});

$("#fromTimeInput").keyup(function () {
  toHour();
  toMinute();
  toSec();
  toDay();
  toWeek();
  toMonth();
});
$("#fromtimeSelect").change(function () {
  toHour();
  toMinute();
  toSec();
  toDay();
  toWeek();
  toMonth();
});
$("#TotimeSelect").change(function () {
  toHour();
  toMinute();
  toSec();
  toDay();
  toWeek();
  toMonth();
});

$("#distanceFromInput").keyup(function () {
  toKm();
  toM();
  toCm();
  toFoot();
  toInch();
});
$("#fromDistanceSelect").change(function () {
  toKm();
  toM();
  toCm();
  toFoot();
  toInch();
});
$("#toDistanceSelect").change(function () {
  toKm();
  toM();
  toCm();
  toFoot();
  toInch();
});
function toKg() {
  fromWeight = $("#fromWeightInput").val();
  weightOptionFrom = $("#fromWeightSelect option:selected").val();
  weightOptionTo = $("#toWeightSelect option:selected").val();
  //GramToKg
  if (weightOptionFrom == 2 && weightOptionTo == 1) {
    weightResult = fromWeight / 1000;
    $("#toWeightInput").val(weightResult);
  } else if (weightOptionFrom == 3 && weightOptionTo == 1) {
    weightResult = fromWeight / 1000000;
    $("#toWeightInput").val(weightResult);
  } else if (weightOptionFrom == 4 && weightOptionTo == 1) {
    weightResult = fromWeight / 1000000000;
    $("#toWeightInput").val(weightResult);
  } else if (weightOptionFrom == 5 && weightOptionTo == 1) {
    weightResult = fromWeight / 2.205;
    $("#toWeightInput").val(weightResult.toFixed(4));
  } else if (weightOptionFrom == 1 && weightOptionTo == 1) {
    weightResult = fromWeight;
    $("#toWeightInput").val(weightResult);
  }
}
function toGram() {
  fromWeight = $("#fromWeightInput").val();
  weightOptionFrom = $("#fromWeightSelect option:selected").val();
  weightOptionTo = $("#toWeightSelect option:selected").val();

  //KG TO GRAM
  if (weightOptionFrom == 1 && weightOptionTo == 2) {
    weightResult = fromWeight * 1000;
    $("#toWeightInput").val(weightResult);
  }
  //GRAM TO GRAM
  else if (weightOptionFrom == 2 && weightOptionTo == 2) {
    weightResult = fromWeight;
    $("#toWeightInput").val(weightResult);
  }
  //MILIIGRAM TO GRAM
  else if (weightOptionFrom == 3 && weightOptionTo == 2) {
    weightResult = fromWeight / 1000;
    $("#toWeightInput").val(weightResult);
  }
  //MICROGRAM TO GRAM
  else if (weightOptionFrom == 4 && weightOptionTo == 2) {
    weightResult = fromWeight / 1000000;
    $("#toWeightInput").val(weightResult);
  }
  //POUND TO GRAM
  else if (weightOptionFrom == 5 && weightOptionTo == 2) {
    weightResult = fromWeight * 453.6;
    $("#toWeightInput").val(weightResult);
  }
}
function toMilliGram() {
  fromWeight = $("#fromWeightInput").val();
  weightOptionFrom = $("#fromWeightSelect option:selected").val();
  weightOptionTo = $("#toWeightSelect option:selected").val();
  //KG TO MILLIGRAM
  if (weightOptionFrom == 1 && weightOptionTo == 3) {
    weightResult = fromWeight * 1000000;
    $("#toWeightInput").val(weightResult);
  }
  //GRAM TO MILLIGRAM
  else if (weightOptionFrom == 2 && weightOptionTo == 3) {
    weightResult = fromWeight * 1000;
    $("#toWeightInput").val(weightResult);
  }
  //MILLIGRAM TO MILLIGRAM
  else if (weightOptionFrom == 3 && weightOptionTo == 3) {
    weightResult = fromWeight;
    $("#toWeightInput").val(weightResult);
  }
  //MICROGRAM TO MILLIGRAM
  else if (weightOptionFrom == 4 && weightOptionTo == 3) {
    weightResult = fromWeight / 1000;
    $("#toWeightInput").val(weightResult);
  }
  //POUND TO MILLIGRAM
  else if (weightOptionFrom == 5 && weightOptionTo == 3) {
    weightResult = fromWeight * 453600;
    $("#toWeightInput").val(weightResult);
  }
}
function toMicroGram() {
  fromWeight = $("#fromWeightInput").val();
  weightOptionFrom = $("#fromWeightSelect option:selected").val();
  weightOptionTo = $("#toWeightSelect option:selected").val();
  //KG TO MICROGRAM
  if (weightOptionFrom == 1 && weightOptionTo == 4) {
    weightResult = fromWeight * 1000000000;
    $("#toWeightInput").val(weightResult);
  }
  //GRAM TO MICROGRAM
  else if (weightOptionFrom == 2 && weightOptionTo == 4) {
    weightResult = fromWeight * 1000000;
    $("#toWeightInput").val(weightResult);
  }
  //MILLIGRAM TO MICROGRAM
  else if (weightOptionFrom == 3 && weightOptionTo == 4) {
    weightResult = fromWeight * 1000;
    $("#toWeightInput").val(weightResult);
  }
  //MICROGRAM TO MICROGRAM
  else if (weightOptionFrom == 4 && weightOptionTo == 4) {
    weightResult = fromWeight;
    $("#toWeightInput").val(weightResult);
  }
  //POUND TO MICROGRAM
  else if (weightOptionFrom == 5 && weightOptionTo == 4) {
    weightResult = fromWeight * 0.00000004536;
    $("#toWeightInput").val(weightResult);
  }
}
function toPound() {
  fromWeight = $("#fromWeightInput").val();
  weightOptionFrom = $("#fromWeightSelect option:selected").val();
  weightOptionTo = $("#toWeightSelect option:selected").val();
  //KG TO Pound
  if (weightOptionFrom == 1 && weightOptionTo == 5) {
    weightResult = fromWeight * 2.205;
    $("#toWeightInput").val(weightResult);
  }
  //GRAM TO Pound
  else if (weightOptionFrom == 2 && weightOptionTo == 5) {
    weightResult = fromWeight / 453.6;
    $("#toWeightInput").val(weightResult);
  }
  //MILLIGRAM TO Pound
  else if (weightOptionFrom == 3 && weightOptionTo == 5) {
    weightResult = fromWeight / 453600;
    $("#toWeightInput").val(weightResult);
  }
  //MICROGRAM TO Pound
  else if (weightOptionFrom == 4 && weightOptionTo == 5) {
    weightResult = fromWeight / 453600000;
    $("#toWeightInput").val(weightResult);
  }
  //POUND TO Pound
  else if (weightOptionFrom == 5 && weightOptionTo == 5) {
    weightResult = fromWeight;
    $("#toWeightInput").val(weightResult);
  }
}
function toHour() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();
  if (timeOptionFrom == 2 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime / 60;
    $("#toTimeInput").val(timeResult.toFixed(7));
  } else if (timeOptionFrom == 3 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime / 3600;
    $("#toTimeInput").val(timeResult.toFixed(7));
  } else if (timeOptionFrom == 4 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime * 24;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 5 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime * 168;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 6 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime * 730;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 1 && TimeOptionTo == 1 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(timeResult);
  }
}
function toMinute() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();

  if (timeOptionFrom == 1 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime * 60;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 2 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 3 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime / 60;
    $("#toTimeInput").val(timeResult.toFixed(7));
  } else if (timeOptionFrom == 4 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime * 1440;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 5 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime * 10080;
    $("#toTimeInput").val(timeResult);
  } else if (timeOptionFrom == 6 && TimeOptionTo == 2 && fromTime.length != 0) {
    timeResult = fromTime * 43800;
    $("#toTimeInput").val(timeResult);
  }
}
function toSec() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();
  // hour to sec
  if (timeOptionFrom == 1 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime * 3600;
    $("#toTimeInput").val(timeResult);
  }
  //min to sec
  else if (timeOptionFrom == 2 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime * 60;
    $("#toTimeInput").val(timeResult);
  }
  // sec to sec
  else if (timeOptionFrom == 3 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(timeResult);
  }
  // day to sec
  else if (timeOptionFrom == 4 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime * 86400;
    $("#toTimeInput").val(timeResult);
  }
  // week to sec
  else if (timeOptionFrom == 5 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime * 604800;
    $("#toTimeInput").val(timeResult);
  }
  // month to sec
  else if (timeOptionFrom == 5 && TimeOptionTo == 3 && fromTime.length != 0) {
    timeResult = fromTime * 2.628e6;
    $("#toTimeInput").val(timeResult);
  }
}
function toDay() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();

  // hour to day
  if (timeOptionFrom == 1 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime / 24;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // min to day
  else if (timeOptionFrom == 2 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime / 1440;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // sec to day
  else if (timeOptionFrom == 3 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime / 86400;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // day to day
  else if (timeOptionFrom == 4 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(timeResult);
  }
  // week to day
  else if (timeOptionFrom == 5 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime * 7;
    $("#toTimeInput").val(timeResult);
  }
  // month to day
  else if (timeOptionFrom == 6 && TimeOptionTo == 4 && fromTime.length != 0) {
    timeResult = fromTime * 30;
    $("#toTimeInput").val(timeResult);
  }
}
function toWeek() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();
  // hour to week
  if (timeOptionFrom == 1 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime / 168;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // min to week
  else if (timeOptionFrom == 2 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime / 10080;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // sec to week
  else if (timeOptionFrom == 3 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime / 604800;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // day to week
  else if (timeOptionFrom == 4 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime / 7;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // week to week
  else if (timeOptionFrom == 5 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // month to week
  else if (timeOptionFrom == 6 && TimeOptionTo == 5 && fromTime.length != 0) {
    timeResult = fromTime * 4;
    $("#toTimeInput").val(timeResult);
  }
}
function toMonth() {
  fromTime = $("#fromTimeInput").val();
  timeOptionFrom = $("#fromtimeSelect option:selected").val();
  TimeOptionTo = $("#TotimeSelect option:selected").val();
  // hour to month
  if (timeOptionFrom == 1 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime / 730;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // min to month
  else if (timeOptionFrom == 2 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime / 43800;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // sec to month
  else if (timeOptionFrom == 3 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime / 2.628e6;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // day to month
  else if (timeOptionFrom == 4 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime / 30;
    $("#toTimeInput").val(timeResult);
  }
  // week to month
  else if (timeOptionFrom == 5 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime / 4.345;
    $("#toTimeInput").val(timeResult.toFixed(7));
  }
  // month to month
  else if (timeOptionFrom == 6 && TimeOptionTo == 6 && fromTime.length != 0) {
    timeResult = fromTime;
    $("#toTimeInput").val(fromTime);
  }
}

function toKm() {
  fromDistance = $("#distanceFromInput").val();
  distanceOptionFrom = $("#fromDistanceSelect option:selected").val();
  distanceOptionTo = $("#toDistanceSelect option:selected").val();
  //km to km
  if (
    distanceOptionFrom == 1 &&
    distanceOptionTo == 1 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance;
    $("#toDistanceInput").val(distanceResult);
  }
  //m to km
  else if (
    distanceOptionFrom == 2 &&
    distanceOptionTo == 1 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 1000;
    $("#toDistanceInput").val(distanceResult);
  }
  //cm to km
  else if (
    distanceOptionFrom == 3 &&
    distanceOptionTo == 1 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 100000;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
  //foot to km
  else if (
    distanceOptionFrom == 4 &&
    distanceOptionTo == 1 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 3281;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
  //inch to km
  else if (
    distanceOptionFrom == 5 &&
    distanceOptionTo == 1 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 39370;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
}
function toM() {
  fromDistance = $("#distanceFromInput").val();
  distanceOptionFrom = $("#fromDistanceSelect option:selected").val();
  distanceOptionTo = $("#toDistanceSelect option:selected").val();

  //km to m
  if (
    distanceOptionFrom == 1 &&
    distanceOptionTo == 2 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 1000;
    $("#toDistanceInput").val(distanceResult);
  }
  //m to m
  else if (
    distanceOptionFrom == 2 &&
    distanceOptionTo == 2 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance;
    $("#toDistanceInput").val(distanceResult);
  }
  //cm to m
  else if (
    distanceOptionFrom == 3 &&
    distanceOptionTo == 2 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 100;
    $("#toDistanceInput").val(distanceResult);
  }
  //foot to m
  else if (
    distanceOptionFrom == 4 &&
    distanceOptionTo == 2 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 3.281;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
  //in to m
  else if (
    distanceOptionFrom == 5 &&
    distanceOptionTo == 2 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 39.37;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
}
function toCm() {
  fromDistance = $("#distanceFromInput").val();
  distanceOptionFrom = $("#fromDistanceSelect option:selected").val();
  distanceOptionTo = $("#toDistanceSelect option:selected").val();
  //km to cm
  if (
    distanceOptionFrom == 1 &&
    distanceOptionTo == 3 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 100000;
    $("#toDistanceInput").val(distanceResult);
  }
  //m to cm
  else if (
    distanceOptionFrom == 2 &&
    distanceOptionTo == 3 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 100;
    $("#toDistanceInput").val(distanceResult);
  }
  //cm to cm
  else if (
    distanceOptionFrom == 3 &&
    distanceOptionTo == 3 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance;
    $("#toDistanceInput").val(distanceResult);
  }
  //foot to cm
  else if (
    distanceOptionFrom == 4 &&
    distanceOptionTo == 3 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 30.48;
    $("#toDistanceInput").val(distanceResult);
  }
  //in to cm
  else if (
    distanceOptionFrom == 5 &&
    distanceOptionTo == 3 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 2.54;
    $("#toDistanceInput").val(distanceResult);
  }
}
function toFoot() {
  fromDistance = $("#distanceFromInput").val();
  distanceOptionFrom = $("#fromDistanceSelect option:selected").val();
  distanceOptionTo = $("#toDistanceSelect option:selected").val();
  //km to foot
  if (
    distanceOptionFrom == 1 &&
    distanceOptionTo == 4 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 3281;
    $("#toDistanceInput").val(distanceResult);
  }
  //m to foot
  else if (
    distanceOptionFrom == 2 &&
    distanceOptionTo == 4 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 3.281;
    $("#toDistanceInput").val(distanceResult);
  }
  //cm to ft
  else if (
    distanceOptionFrom == 3 &&
    distanceOptionTo == 4 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 30.48;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
  //ft to ft
  else if (
    distanceOptionFrom == 4 &&
    distanceOptionTo == 4 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance;
    $("#toDistanceInput").val(distanceResult);
  }
  //in to ft
  else if (
    distanceOptionFrom == 5 &&
    distanceOptionTo == 4 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 12;
    $("#toDistanceInput").val(distanceResult);
  }
}
function toInch() {
  fromDistance = $("#distanceFromInput").val();
  distanceOptionFrom = $("#fromDistanceSelect option:selected").val();
  distanceOptionTo = $("#toDistanceSelect option:selected").val();
  //km to in
  if (
    distanceOptionFrom == 1 &&
    distanceOptionTo == 5 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 39370;
    $("#toDistanceInput").val(distanceResult);
  }
  //m to in
  else if (
    distanceOptionFrom == 2 &&
    distanceOptionTo == 5 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 39.37;
    $("#toDistanceInput").val(distanceResult);
  }
  //cm to in
  else if (
    distanceOptionFrom == 3 &&
    distanceOptionTo == 5 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance / 2.54;
    $("#toDistanceInput").val(distanceResult.toFixed(7));
  }
  //foot to in
  else if (
    distanceOptionFrom == 4 &&
    distanceOptionTo == 5 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance * 12;
    $("#toDistanceInput").val(distanceResult);
  }
  //in to in
  else if (
    distanceOptionFrom == 5 &&
    distanceOptionTo == 5 &&
    fromDistance.length != 0
  ) {
    distanceResult = fromDistance;
    $("#toDistanceInput").val(distanceResult);
  }
}
