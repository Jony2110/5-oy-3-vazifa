let arr = [
  {
    name: "BMW M5 COMPETION",
    imgSrc:
      "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/3Re64RYD-8o3Q6nLfwb-(edit).jpg?t=169269654564",
    price: 90000,
    color: "black",
    max_speed: 360,
    value: 4.5,
  },
  {
    name: "BMW M4 COMPETION",
    imgSrc:
      "https://cdn.bmwblog.com/wp-content/uploads/2019/02/BMW-M4-Ferrari-Red-01.jpg",
    price: 80000,
    color: "red",
    max_speed: 360,
    value: 4,
  },
  {
    name: "BMW M3 COMPETION",
    imgSrc:
      "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/3758PE5vRVqufOgPSzJF",
    price: 75000,
    color: "blue",
    max_speed: 360,
    value: 4,
  },
  {
    name: "BMW M2",
    imgSrc:
      "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/8864cd06c16cf34eddf5229bf01bf6bfafe9d766/photos/KP8wX65q-r-Nj86DvAb-(edit).jpg?t=167105126742",
    price: 30000,
    color: "white",
    max_speed: 250,
    value: 2.5,
  },
];
let arr2 = [
  {
    name: "DODGE CHALLENGER",
    imgSrc:
      "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/05/27100521/Car-history-Dodge-Challenger-Cover-27-05.jpg",
    price: 25000,
    color: "grey",
    max_speed: 300,
    value: 3,
  },
  {
    name: "MERCEDES BENZ",
    imgSrc:
      "https://media.istockphoto.com/id/1353477509/photo/mercedes-benz-c-class-on-a-road.jpg?s=612x612&w=0&k=20&c=X4CfV_oH3Rapuh5_P69QyX_Iaj9FYDqIqKOrqXl0eVY=",
    price: 250000,
    color: "blue",
    max_speed: 400,
    value: 5,
  },
  {
    name: "CHEVROLET SPARK",
    imgSrc:
      "https://bigfoto.top/uploads/posts/2022-11/1667569959_5-bigfoto-top-p-shevrole-spark-tyuning-6.jpg",
    price: 10000,
    color: "white",
    max_speed: 85,
    value: 1.25,
  },
  {
    name: "BMW X5",
    imgSrc:
      "https://g05.bimmerpost.com/forums/attachment.php?attachmentid=2952315",
    price: 111000,
    color: "green",
    max_speed: 600,
    value: 8,
  },
];

let carList = document.querySelector("#carList");

let jamlovchi = "";
arr.forEach(({ name, price, color, value, imgSrc }) => {
  let li = `<li class="block">
    <img src=${imgSrc} alt="">
    <h2>${name}</h2>
    <p>${price}</p>
    <span style='background-color: ${color};' class="color"> </span>
    <p>${value}</p>
    </li>`;
  jamlovchi += li;
});
carList.innerHTML = jamlovchi;

let productsList = document.querySelector("#productsList");

let jamlovchi2 = "";
arr2.forEach(({ name, price, color, value, imgSrc , max_speed }) => {
  productsList.innerHTML += `<li class="block">
    <img src=${imgSrc} alt="">
    <h2>${name}</h2>
    <p>${price}</p>
    <span style='background-color: ${color};' class="color"> </span>
    <p>${value}</p>
    <p>${max_speed}</p>
    
    </li>`;
});
