let movie_img = document.getElementById("hero");
let movie_name = document.getElementById("movie_name");
let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");
let btn = document.getElementById("movie");

function back()
{
    main1.style.display = "block";
    main2.style.display = "none";
    btn.innerHTML = "Watch";
}
function watch1()
{
    main2.style.display = "block";
    main1.style.display = "none";
    movie_img.src = "https://m.media-amazon.com/images/M/MV5BZDI4OTM1ZjMtOWQxMC00OTY5LTg3NjQtMjlhMWVjODFlYTY4XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg";
    movie_name.innerHTML = "12th Fail";
}
function watch2()
{
    main2.style.display = "block";
    main1.style.display = "none";
    movie_img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/220px-Animal_%282023_film%29_poster.jpg";
    movie_name.innerHTML = "Animal";
    btn.innerHTML = "<a href='https://drive.google.com/file/d/1BcR6xbuAIijnku65YHUpyroeZo4YjbqB/view?usp=sharing' target='_blank' style='text-decoration: none;'>Watch</a>"
}
function watch3()
{
    main2.style.display = "block";
    main1.style.display = "none";
    movie_img.src = "https://upload.wikimedia.org/wikipedia/en/f/f8/Tiger_3_poster.jpg";
    movie_name.innerHTML = "Tiger 3";
}
function watch4()
{
    main2.style.display = "block";
    main1.style.display = "none";
    movie_img.src = "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg";
    movie_name.innerHTML = "Oppenheimer";
}