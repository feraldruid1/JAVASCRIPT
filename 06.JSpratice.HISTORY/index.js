const span = document.querySelector("span");
const p = document.querySelector("p");
const text = "2-ეს ამბავი 1941 წლის აგვისტოში დაიწყო და ზუსტად ორი წლისთავზე გათავდა. ომი სულ რაღაც ორი თვის გამოცხადებული იყო, მისმა სუსხმა რომ ჩვენს სოფელს მოაღწია. ასეა თუ ისე, შეძლებულ ცხოვრებას მიჩვეულმა გლეხმა უცებ ვერ აწონა ქვეყნად მომხდარი საშინელება, უცებ ვერ დააგდო ხელგაშლილი ცხოვრება და უკვე აგვისტოში, ბევრის ბეღელი, ჭური და სალარო დაცარიელებული აღმოჩნდა, ყოველ შემთხვევაში, ჩვენს ოჯახს ასე დაემართა. წყალმანკით დაუძლურებული და ძვალგაციებული ბაბუაჩემი სპირიდონი დღედაღამ ბუხართან იჯდა და მთელი ოჯახის სიმძიმე მე მაწვა კისერზე. სხვას რომ თავი დავანებოთ, მარტო ტყიდან შეშისა და ფიჩხის თრევას ვერ ვუთავდებოდი, რათა ძვალგაციებულ ბაბუას ბუხარი არ გაპარვოდა.";

function shorten(text) {
  return text.slice(0, 150) + "...";
}

p.innerHTML = shorten(text);
span.innerHTML = "Read More";
function addtext() {
  if (span.innerHTML === "Read More") {
    p.innerHTML = text;
    span.innerHTML = "Show less";
  } else {
    span.innerHTML = "Read More";
    p.innerHTML = shorten(text);
  }
}
span.addEventListener("click", addtext);
