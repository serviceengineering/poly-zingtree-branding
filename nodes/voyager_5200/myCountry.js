<script>
$("table.country-table").hide(); 
$(document.body).on('change',"#table-selector",function (e) {
  $("table.country-table").hide();
  $("#" + this.value).show();
});
$(document.body).on('change',"#usb-parts",function (e) {
  $("p.usb-adapter").hide();
  $("#" + this.value).show();
});
$(window.document).ready(function() {
  const myCountry = form_data["zt_country"];
  if (myCountry === "Brunei Darussalam") {
     assignSessionVar("zt_country", "Brunei");
}  else if (myCountry === "China") {
    assignSessionVar("zt_country", "China Mainland");
}  else if (myCountry === "Cote D'ivoire") {
    assignSessionVar("zt_country", "Côte d'Ivoire");
}  else if (myCountry === "Czechia") {
    assignSessionVar("zt_country", "Czech Republic");
}  else if (myCountry === "Lao People's Democratic Republic") {
    assignSessionVar("zt_country", "Laos");
}  else if (myCountry === "Moldova (Republic of)") {
    assignSessionVar("zt_country", "Moldova");
}  else if (myCountry === "Russian Federation") {
    assignSessionVar("zt_country", "Russia");
}  else if (myCountry === "Korea (Democratic People's Republic of)") {
    assignSessionVar("zt_country", "South Korea");
}  else if (myCountry === "Saint Helena, Ascension and Tristan Da Cunha") {
    assignSessionVar("zt_country", "St Helena");
}  else if (myCountry === "Taiwan (Province of China)") {
    assignSessionVar("zt_country", "Taiwan");
}  else if (myCountry === "United Kingdom of Great Britain and Northern Ireland") {
    assignSessionVar("zt_country", "United Kingdom");
}  else if (myCountry === "United States of America") {
    assignSessionVar("zt_country", "United States");
}  else if (myCountry === "Venezuela (Bolivarian Republic of)") {
    assignSessionVar("zt_country", "Venezuela");
}  else if (myCountry === "Viet Nam") {
    assignSessionVar("zt_country", "Vietnam");
}
});
</script>
