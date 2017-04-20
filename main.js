// question page 

$(".next").on("click", function(){
  nextPage();
});

$(".prev").on("click", function(){
  prevPage();
})


function nextPage(){
  $(".page-title").text("Welche Anforderungen stellen Sie an die Fassung");
  $(".img-container").html(pageTwoImages());
  toggleButton();
}

function prevPage(){
  $(".page-title").text("Welche Gesichtsform haben sie?");
  $(".img-container").html(pageOneImages());
  toggleButton();
}

function pageOneImages(){
  $(".img-container").empty();
  return '<img src="images/image1.png" class="slide"/> \
          <img src="images/image2.png" class="slide"/> \
          <img src="images/image3.png" class="slide"/> \
          <img src="images/image4.png" class="slide"/>'
}

function pageTwoImages(){
  $(".img-container").empty();
  return '<img src="images/page2image1.png" class="slide"/> \
  <img src="images/page2image2.png" class="slide"/> \
  <img src="images/page2image3.png" class="slide"/>'
}

function toggleButton(){
  $(".next-button").toggle();
  $(".prev-button").toggle();
}

