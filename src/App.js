import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList";
import { useState } from "react";
import React from "react";

function App() {
  const [movies, setmovies] = useState([
    {
      title: "Don't Look Up",
      Year: "2021",
      Rating: "5",
      description: "Don't Look Up : Déni cosmique (Don't Look Up), ou simplement Déni cosmique au Québec1, est une comédie dramatique américaine écrite et réalisée par Adam McKay, sortie à la fin de l'année 2021, sa diffusion mondiale ayant lieu sur la plateforme Netflix. Leonardo DiCaprio et Jennifer Lawrence interprètent les deux personnages centraux du film, entourés notamment par Meryl Streep, Jonah Hill, Rob Morgan, Cate Blanchett, Tyler Perry, Mark Rylance, Ariana Grande et Timothée Chalamet.",
      rating: "5",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNjZjNDE1NTYtYTgwZS00M2VmLWEyODktM2FlNjhiYTk3OGU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      
    },
       {
      title: "La Casa De Papel",
      Year: "2020",
      Rating: "5",
      description: "La casa de papel (prononcé : [la kasa de papel])1, ou La Maison de papier au Québec, est une série télévisée espagnole créée par Álex Pina et diffusée entre le 2 mai 2017 et le 23 novembre 2017 sur la chaîne Antena 3 en Espagne.Dans le reste du monde, la diffusion de la première saison – en deux parties – débute le 20 décembre 2017 sur Netflix et connaît un très grand succès mondial. La deuxième saison, exclusive à Netflix, est composée des troisième, quatrième et cinquième parties. Les troisième et quatrième parties sortent respectivement le 19 juillet 2019 et le 3 avril 2020. Les 5 premiers épisodes de la cinquième et dernière partie sont diffusés sur Netflix le 3 septembre 2021 tandis que les 5 derniers épisodes sont diffuser le 3 décembre 20212.",
      rating: "5",
      posterURL: "https://www.journaldugeek.com/content/uploads/2020/04/lcdp-s4-vert-main-rgb-es-365x540.jpg"
      
    },{
      title: "Red Notice",
      Year: "2021",
      Rating: "4",
      description: "Red Notice ou Notice rouge1 au Québec, est une comédie d'action américaine écrite, coproduite et réalisée par Rawson Marshall Thurber, sortie en 2021 sur Netflix2",
      rating: "4",
      posterURL:
        "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/10/red-notice-1200.jpg",
    },
    {
      title: "Star Trek",
      Year: "2009",
      Rating: "4",
      description: "tt0796366",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    },
    {
      title: "Star Trek Into Darkness",
      Year: "2013",
      Rating: "4",
      description: "tt1408101",
      rating: "3",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg",
    },
    {
      title: "Star Trek Beyond",
      Year: "2016",
      Rating: "4",
      description: "tt2660888",
      rating: "2",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZDRiOGE5ZTctOWIxOS00MWQwLThlMDYtNWIwMDQwNzBjZDY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      title: "Star Trek: First Contact",
      Year: "1996",
      Rating: "3",
      description: "tt0117731",
      rating: "1",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTllZjRkY2QtYTJlMy00ZTMxLWE0YWQtMWMwYzY2YTM3YzRjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Star Trek II: The Wrath of Khan",
      Year: "1982",
      Rating: "4",
      description: "tt0084726",
      rating: "3",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzcyYWE5YmQtNDE1Yi00ZjlmLWFlZTAtMzRjODBiYjM3OTA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Star Trek: The Next Generation",
      Year: "1987–1994",
      Rating: "2",
      description: "tt0092455",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDViYjAyZWUtNGQxMy00MDUyLTlkZTAtOWNkY2M5ZTk5MTE5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      title: "Star Trek: The Motion Picture",
      Year: "1979",
      Rating: "4",
      description: "tt0079945",
      rating: "3",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzNlMzNlNmQtNmYzNS00YmU5LWIzYWQtMDRkYzIzNzEzOTIyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Star Trek IV: The Voyage Home",
      Year: "1986",
      description: "tt0092007",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGY2MDE2MGQtMjczYi00YTdhLWIzNzktNDk2NzMzZmYwMTJjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Star Trek: Generations",
      Year: "1994",
      description: "tt0111280",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjFiMzc4YzAtNGMzYS00NjI0LWJhYTYtN2JiOTI2ODczYzE3XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    },
    {
      title: "Star Trek III: The Search for Spock",
      Year: "1984",
      Rating: "4",
      description: "tt0088170",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTliZGVjZmMtNzEzMy00MzVhLWFhYjYtNDhlYmViNGNiMGFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Terminator 2: Judgment Day",
      Year: "1991",
      description: "tt0103064",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      title: "The Terminator",
      Year: "1984",
      Rating: "5",
      description: "tt0088247",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "Terminator 3: Rise of the Machines",
      Year: "2003",
      description: "tt0181852",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg",
    },
    {
      title: "Terminator Salvation",
      Year: "2009",
      description: "tt0438488",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg@@._V1_SX300.jpg",
    },
    {
      title: "Terminator Genisys",
      Year: "2015",
      description: "tt1340138",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg",
    },
    {
      title: "Terminator: The Sarah Connor Chronicles",
      Year: "2008–2009",
      description: "tt0851851",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg",
    },
    {
      title: "Terminator 3: Rise of the Machines",
      Year: "2003",
      description: "tt0364056",
      rating: "game",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg",
    },
    {
      title: "Terminator 2: Judgment Day",
      Year: "1991",
      description: "tt0244839",
      rating: "game",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BN2FhOTQ2MmQtNTY0OC00NWYyLThjNjMtZmZiOTBmYTY4MmM2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      title: "Lady Terminator",
      Year: "1989",
      description: "tt0095483",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzgxMGFiMzQtZjNhNy00MzI4LTg1YzktZWJiNjRhZGRjZjJmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg",
    },
    {
      title: "Ninja Terminator",
      Year: "1985",
      description: "tt0199849",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGZiNTczNWItOTdmYy00OTFjLWIwOWUtMmE3Y2QyNzBmZDJkXkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_SX300.jpg",
    },
    {
      title: "Robo Vampire",
      Year: "1988",
      description: "tt0121694",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOGQzY2NiMjctNzAwYS00MjdhLWI2M2EtNWYwZGNmZDQzYWUxXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
    },
    {
      title: "Robo Jî",
      Year: "2012",
      description: "tt1805492",
      rating: "4",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BYzk1Y2FiOTQtMjhkMy00MjYzLWE4ZGUtNmEyMWYzMGY5MDRiXkEyXkFqcGdeQXVyNTA2NDg0MTc@._V1_SX300.jpg",
    },
    {
      title: "Karate-Robo Zaborgar",
      Year: "2011",
      description: "tt1645048",
      rating: "4",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjY4OTkyN15BMl5BanBnXkFtZTcwMDEzMzAzNQ@@._V1_SX300.jpg",
    },
    {
      title: "Robo Warriors",
      Year: "1996",
      description: "tt0117497",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQzNzM0MDc0NV5BMl5BanBnXkFtZTYwNDQ5MjY5._V1_SX300.jpg",
    },
    {
      title: "Giant Robo: The Animation",
      Year: "1991",
      description: "tt0101950",
      rating: "4",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODY2ODQzMzUyNV5BMl5BanBnXkFtZTcwNTI3ODUzMw@@._V1_SX300.jpg",
    },
    {
      title: "The Jetsons & WWE: Robo-WrestleMania!",
      Year: "2017",
      description: "tt6415248",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTE0OGY1ZDUtMjMxYS00OTZkLTlkOTktNjk4MDM1OTUzMmI5L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
    },
    {
      title: "Robo-Dog",
      Year: "2015",
      description: "tt3591946",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjIyMjI4NDI3MV5BMl5BanBnXkFtZTgwOTAxNjIwNzE@._V1_SX300.jpg",
    },
    {
      title: "Dallas & Robo",
      Year: "2018–",
      description: "tt7896392",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjJhNDkzZTMtODc1Yi00Mjc2LWIyZDctMzNkNGY0MGRkYzlhXkEyXkFqcGdeQXVyMDcwODc3OA@@._V1_SX300.jpg",
    },
    {
      title: "Robo-Dog: Airborne",
      Year: "2017",
      description: "tt5198868",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDE4OGUwODktOWQwNC00OTZiLWI0NWItNDJmNjY4MWE0ODAxL2ltYWdlXkEyXkFqcGdeQXVyMTg4MTI5Ng@@._V1_SX300.jpg",
    },
    {
      title: "Tabi no robo kara",
      Year: "2015",
      description: "tt6114460",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYWI2YTc5NzAtYjUxYy00OGVkLWFlZmEtYWIyZDAyZTRjNTcwXkEyXkFqcGdeQXVyNjkzNzg5Njg@._V1_SX300.jpg",
    },
    {
      title: "The Book of Eli",
      Year: "2010",
      description: "tt1037705",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    },
    {
      title: "The Jungle Book",
      Year: "2016",
      description: "tt3040964",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
    },
    {
      title: "National Treasure: Book of Secrets",
      Year: "2007",
      description: "tt0465234",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTU2NTM3NjU1N15BMl5BanBnXkFtZTcwODg1MDU1MQ@@._V1_SX300.jpg",
    },
    {
      title: "Green Book",
      Year: "2018",
      description: "tt6966692",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
    },
    {
      title: "The Jungle Book",
      Year: "1967",
      description: "tt0061852",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAwMTExODExNl5BMl5BanBnXkFtZTgwMjM2MDgyMTE@._V1_SX300.jpg",
    },
    {
      title: "The Book Thief",
      Year: "2013",
      description: "tt0816442",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOTE3NzkyMjAyNF5BMl5BanBnXkFtZTgwMDc5MTE0MDE@._V1_SX300.jpg",
    },
    {
      title: "Black Book",
      Year: "2006",
      description: "tt0389557",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BODFlNTI0ZWQtOTcxNC00OTc0LTkwZDUtMmNkM2I1ZWFlYzZkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      title: "The Book of Life",
      Year: "2014",
      description: "tt2262227",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_SX300.jpg",
    },
    {
      title: "American Pie Presents: The Book of Love",
      Year: "2009",
      description: "tt1407050",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjMwODk5MzE4NV5BMl5BanBnXkFtZTgwNzQyNzg5NjE@._V1_SX300.jpg",
    },
    {
      title: "Book of Shadows: Blair Witch 2",
      Year: "2000",
      description: "tt0229260",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BY2YzNzg1YTAtMjU4MC00OWU5LWFiNjAtZmI0Zjc5MmM4YzcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      description: "tt0120737",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      description: "tt0167260",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      description: "tt0167261",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "Lord of War",
      Year: "2005",
      description: "tt0399295",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings",
      Year: "1978",
      description: "tt0077869",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Lord of the Flies",
      Year: "1990",
      description: "tt0100054",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      description: "tt0087365",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      title: "Lord of the Flies",
      Year: "1963",
      description: "tt0057261",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      title: "Lord of Illusions",
      Year: "1995",
      description: "tt0113690",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      title: "Something the Lord Made",
      Year: "2004",
      description: "tt0386792",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTIzNTE0NjU4N15BMl5BanBnXkFtZTcwNjgyNDcyMQ@@._V1_SX300.jpg",
    },
    {
      title: "You Are the Apple of My Eye",
      Year: "2011",
      description: "tt2036416",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg",
    },
    {
      title: "The Apple Dumpling Gang",
      Year: "1975",
      description: "tt0072653",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZTc5NDk1NDgtMThmYy00MWViLTk2ZjUtNTQyMDI1MDI0MDRjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      title: "Apple Tree Yard",
      Year: "2017–",
      description: "tt5336698",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzEzM2E2N2EtYzE2Yy00MGEyLWI5YmQtOWU3OTE1ODFjNmIxXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
    },
    {
      title: "The Apple Dumpling Gang Rides Again",
      Year: "1979",
      description: "tt0078790",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjI2OTJlYjQtOTAwMi00NTM1LWI0MTktYTMzZjlhNGRlMjIwXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      title: "The Apple",
      Year: "1998",
      description: "tt0156901",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjE3ZTUzMWItMzUxYy00MjMxLWFkNmQtYzQ3ZTc5NjU1NzhmXkEyXkFqcGdeQXVyMjUwMzM0Mjc@._V1_SX300.jpg",
    },
    {
      title: "The Apple",
      Year: "1980",
      description: "tt0080380",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTViYTQyZjYtNDJhNC00MjcyLTk3NzctYTQxNmFkNjBmOWIwXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    },
    {
      title: "The Apple War",
      Year: "1971",
      description: "tt0068025",
      rating: "4",
      posterURL:
        "https://ia.media-imdb.com/images/M/MV5BYzdmMWI3MDEtMTBjZS00MDQ3LWJiMjktMmU2YmJlMmVlZDcxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg",
    },
    {
      title: "Apple Mac: 1984",
      Year: "1984",
      description: "tt4227346",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTUwMjczY2ItYTY5Ny00M2UyLTlmMDgtZjEyMmQ1Y2JkNmMwXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg",
    },
    {
      title: "Bad Apple",
      Year: "2004",
      description: "tt0383902",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMyODM4MjU5Ml5BMl5BanBnXkFtZTcwMzg5NDgyMQ@@._V1_SX300.jpg",
    },
    {
      title: "Apple of My Eye",
      Year: "2017",
      description: "tt5579982",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNTIzOTU1MzQ5Nl5BMl5BanBnXkFtZTgwMTI1NjUzMDI@._V1_SX300.jpg",
    },
    {
      title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      description: "tt2975590",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Superman Returns",
      Year: "2006",
      description: "tt0348150",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      title: "Superman",
      Year: "1978",
      description: "tt0078346",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      title: "Superman II",
      Year: "1980",
      description: "tt0081573",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWUzNDJjMDUtNGEzMi00YThlLTlkMmEtNjVlOGQwOWM3MjM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      title: "Superman III",
      Year: "1983",
      description: "tt0086393",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      title: "Superman IV: The Quest for Peace",
      Year: "1987",
      description: "tt0094074",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    },
    {
      title: "Superman/Batman: Apocalypse",
      Year: "2010",
      description: "tt1673430",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Superman/Batman: Public Enemies",
      Year: "2009",
      description: "tt1398941",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Lois & Clark: The New Adventures of Superman",
      Year: "1993–1997",
      description: "tt0106057",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
    },
    {
      title: "Superman/Doomsday",
      Year: "2007",
      description: "tt0934706",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjU4MzIyZWUtNWQ4Yy00YTU4LTk5NjUtNDBiNDkxZTVlZDgwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      title: "Batman Begins",
      Year: "2005",
      description: "tt0372784",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      description: "tt2975590",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Batman",
      Year: "1989",
      description: "tt0096895",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    },
    {
      title: "Batman Returns",
      Year: "1992",
      description: "tt0103776",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
    {
      title: "Batman Forever",
      Year: "1995",
      description: "tt0112462",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Batman & Robin",
      Year: "1997",
      description: "tt0118688",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    },
    {
      title: "The Lego Batman 4",
      Year: "2017",
      description: "tt4116284",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      title: "Batman: The Animated Series",
      Year: "1992–1995",
      description: "tt0103359",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
    },
    {
      title: "Batman: Under the Red Hood",
      Year: "2010",
      description: "tt1569923",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      title: "Batman: The Dark Knight Returns, Part 1",
      Year: "2012",
      description: "tt2313197",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
    },
    {
      title: "Big Hero 6",
      Year: "2014",
      description: "tt2245084",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
    },
    {
      title: "Hero",
      Year: "2002",
      description: "tt0299977",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWE5MDBjOGYtMTAxMi00NGUyLWFiMmItYWI1MTQxNzBmZmNkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Last Action Hero",
      Year: "1993",
      description: "tt0107362",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      title: "Starship Troopers 2: Hero of the Federation",
      Year: "2004",
      description: "tt0367093",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOWNiNzRlOWMtNzY2Yi00M2MzLWE0MGEtYzM0NmZhODk3NjUyXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
    },
    {
      title: "Hero",
      Year: "1992",
      description: "tt0104412",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYyMDk0OWItZWQxYy00YzFkLWIwNDctYTYxODU5Zjk3MjAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Local Hero",
      Year: "1983",
      description: "tt0085859",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BODhiMmM3YzQtZjMwNy00YTdkLTkwOTItZDhjYWE1ZTVlNmExXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
    },
    {
      title: "Bilal: A New Breed of Hero",
      Year: "2015",
      description: "tt3576728",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNmEyY2IxYTktMzIxMS00MzNmLTlmMjEtZGE1YzZkMDVjYzdiXkEyXkFqcGdeQXVyMTYxMzQzNTU@._V1_SX300.jpg",
    },
    {
      title: "Boku no Hero Academia",
      Year: "2016–",
      description: "tt5626028",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "Nayak: The Real Hero",
      Year: "2001",
      description: "tt0291376",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGIxZGVlMzEtYjZlZS00NGRkLWEwMjUtNGEwOGUwY2ViZTA2XkEyXkFqcGdeQXVyNjY1NTEzNjE@._V1_SX300.jpg",
    },
    {
      title: "Ten Inch Hero",
      Year: "2007",
      description: "tt0829297",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTY2NTk2NTY5MF5BMl5BanBnXkFtZTcwMzQ5MTYzMg@@._V1_SX300.jpg",
    },
    {
      title: "Charlie and the Chocolate Factory",
      Year: "2005",
      description: "tt0367594",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_SX300.jpg",
    },
    {
      title: "Charlie Bartlett",
      Year: "2007",
      description: "tt0423977",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTUyNTgyNDI2NF5BMl5BanBnXkFtZTcwOTA2NTg1MQ@@._V1_SX300.jpg",
    },
    {
      title: "Charlie St. Cloud",
      Year: "2010",
      description: "tt1438254",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTI4MjkyNDM2NV5BMl5BanBnXkFtZTcwOTExNDc0Mw@@._V1_SX300.jpg",
    },
    {
      title: "A Charlie Brown Christmas",
      Year: "1965",
      description: "tt0059026",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ1NDQxNTcxN15BMl5BanBnXkFtZTgwNzY1Njc1MzE@._V1_SX300.jpg",
    },
    {
      title: "Charlie Countryman",
      Year: "2013",
      description: "tt1196948",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjA3MTcyNjk3NF5BMl5BanBnXkFtZTgwNjkzNzUzMDE@._V1_SX300.jpg",
    },
    {
      title: "Good Luck Charlie",
      Year: "2010–2014",
      description: "tt1415889",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjI5NjUzMTcwNF5BMl5BanBnXkFtZTgwODE3NzQxMDE@._V1_SX300.jpg",
    },
    {
      title: "It's the Great Pumpkin, Charlie Brown",
      Year: "1966",
      description: "tt0060550",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQzMDc1NTYzM15BMl5BanBnXkFtZTgwMDQ2NDUzMzE@._V1_SX300.jpg",
    },
    {
      title: "The Truth About Charlie",
      Year: "2002",
      description: "tt0270707",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzk5MzA3MGEtN2UzZi00ZDUyLTljYjgtYjM3Yzk0ZWYyNGY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "A Charlie Brown Thanksgiving",
      Year: "1973",
      description: "tt0068359",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ0NTE5NDUxNV5BMl5BanBnXkFtZTcwMDQxNjUxMQ@@._V1_SX300.jpg",
    },
    {
      title: "Avengers: Infinity War",
      Year: "2018",
      description: "tt4154756",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      title: "Captain America: Civil War",
      Year: "2016",
      description: "tt3498820",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
    {
      title: "World War Z",
      Year: "2013",
      description: "tt0816711",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      title: "War of the Worlds",
      Year: "2005",
      description: "tt0407304",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg",
    },
    {
      title: "Lord of War",
      Year: "2005",
      description: "tt0399295",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      title: "War for the Planet of the Apes",
      Year: "2017",
      description: "tt3450958",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg",
    },
    {
      title: "This Means War",
      Year: "2012",
      description: "tt1596350",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg",
    },
    {
      title: "War Dogs",
      Year: "2016",
      description: "tt2005151",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg",
    },
    {
      title: "War Horse",
      Year: "2011",
      description: "tt1568911",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg",
    },
    {
      title: "Charlie Wilson's War",
      Year: "2007",
      description: "tt0472062",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg",
    },
    {
      title: "Captain America: The First Avenger",
      Year: "2011",
      description: "tt0458339",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    },
    {
      title: "Captain America: The Winter Soldier",
      Year: "2014",
      description: "tt1843866",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    },
    {
      title: "Captain America: Civil War",
      Year: "2016",
      description: "tt3498820",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
    {
      title: "Captain Phillips",
      Year: "2013",
      description: "tt1535109",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BODhiZWRhMjctNDUyMS00NmUwLTgwYmItMjJhOWNkZWQ3ZTQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      title: "Captain Marvel",
      Year: "2019",
      description: "tt4154664",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    },
    {
      title: "Captain Fantastic",
      Year: "2016",
      description: "tt3553976",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg",
    },
    {
      title: "Sky Captain and the World of Tomorrow",
      Year: "2004",
      description: "tt0346156",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTM0NDQzMDA1NF5BMl5BanBnXkFtZTcwNTU3ODAzMw@@._V1_SX300.jpg",
    },
    {
      title: "Captain Corelli's Mandolin",
      Year: "2001",
      description: "tt0238112",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzE5ODcyMF5BMl5BanBnXkFtZTcwODQ1NjEyMQ@@._V1_SX300.jpg",
    },
    {
      title: "Captain Underpants: The First Epic 4",
      Year: "2017",
      description: "tt2091256",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjE1MzM2NzgzNV5BMl5BanBnXkFtZTgwODU3NTI0MTI@._V1_SX300.jpg",
    },
    {
      title: "Fast & Furious 6",
      Year: "2013",
      description: "tt1905041",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
    },
    {
      title: "Fast Five",
      Year: "2011",
      description: "tt1596343",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg",
    },
    {
      title: "The Fast and the Furious",
      Year: "2001",
      description: "tt0232500",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      title: "Fast & Furious",
      Year: "2009",
      description: "tt1013752",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "2 Fast 2 Furious",
      Year: "2003",
      description: "tt0322259",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "The Fast and the Furious: Tokyo Drift",
      Year: "2006",
      description: "tt0463985",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
    },
    {
      title: "Fast Times at Ridgemont High",
      Year: "1982",
      description: "tt0083929",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    },
    {
      title: "Fast Food Nation",
      Year: "2006",
      description: "tt0460792",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OGItZDZhMy00NDk0LWJmNTgtZGRiMTBjMDI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "Atanarjuat: The Fast Runner",
      Year: "2001",
      description: "tt0285441",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNmIwMjRiMzgtYjM5NC00MTdlLWI2ZWMtNDQxOTAzZTJmNzMxXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg",
    },
    {
      title: "Fast, Cheap & Out of Control",
      Year: "1997",
      description: "tt0119107",
      rating: "4",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyMTQ4OTg3NF5BMl5BanBnXkFtZTcwNzE3NDIyMQ@@._V1_SX300.jpg",
    },
    {
      title: "How to Train Your Dragon",
      Year: "2010",
      description: "tt0892769",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
    },
    {
      title: "The Girl with the Dragon Tattoo",
      Year: "2011",
      description: "tt1568346",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg",
    },
    {
      title: "How to Train Your Dragon 2",
      Year: "2014",
      description: "tt1646971",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
    },
    {
      title: "Crouching Tiger, Hidden Dragon",
      Year: "2000",
      description: "tt0190332",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      title: "Red Dragon",
      Year: "2002",
      description: "tt0289765",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ4MDgzNjM5MF5BMl5BanBnXkFtZTYwMjUwMzY2._V1_SX300.jpg",
    },
    {
      title: "The Girl with the Dragon Tattoo",
      Year: "2009",
      description: "tt1132620",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_SX300.jpg",
    },
    {
      title: "The Mummy: Tomb of the Dragon Emperor",
      Year: "2008",
      description: "tt0859163",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg",
    },
    {
      title: "Dragon Ball Z",
      Year: "1996–2003",
      description: "tt0214341",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      title: "Enter the Dragon",
      Year: "1973",
      description: "tt0070034",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNGZiMTkyNzQtMDdmZi00ZDNkLWE4YTAtZGNlNTIzYzQyMGM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      title: "Kiss of the Dragon",
      Year: "2001",
      description: "tt0271027",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzM0ZDIxNDYtZDJjMy00NTc5LWIyMTgtMzBhNGRiZTU0ZmRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      title: "American Dad!",
      Year: "2005–",
      description: "tt0397306",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDRkOWIyOTUtMjg5YS00OTJjLTgwNGYtMjgxMTA0NWQ2NGI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      title: "World's Greatest Dad",
      Year: "2009",
      description: "tt1262981",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDZhMThjMDMtYTY4Mi00YmVjLTgxZDYtZDQzZjdmNjNhZGVmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      title: "Mom and Dad",
      Year: "2017",
      description: "tt5462326",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZGRkM2Q3MmEtNzIyZC00NDdmLWFiMjEtMjk2NjNlODYwOWVlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      title: "Ghost Dad",
      Year: "1990",
      description: "tt0099654",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzUxYmZlNzctYjZlNy00YTQzLWFiM2UtY2UxOGY4MDYyMjExXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      title: "Getting Even with Dad",
      Year: "1994",
      description: "tt0109891",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMmY3NGRhM2MtY2UwZi00ZTNkLTljNTYtYjc4ZWE1OTQ3YjBhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      title: "Mum & Dad",
      Year: "2008",
      description: "tt1129428",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZGEyZDYzZmYtNmI1NS00ODNhLWJlYWEtZDcwYThiMTYzZDEyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYzMjA3NzI@._V1_SX300.jpg",
    },
    {
      title: "$#*! My Dad Says",
      Year: "2010–2011",
      description: "tt1612578",
      rating: "series",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTk1ODM3OTgyMF5BMl5BanBnXkFtZTcwNDU4MTAwNA@@._V1_SX300.jpg",
    },
    {
      title: "Billboard Dad",
      Year: "1998",
      description: "tt0167049",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAwNTA5Mjk1Nl5BMl5BanBnXkFtZTcwMjYyOTUyMQ@@._V1_SX300.jpg",
    },
    {
      title: "Dad",
      Year: "1989",
      description: "tt0097142",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNjcwOTE5MGMtNGU1ZC00M2RmLThlZjQtYzdiMTQ3MzY2MjQ1XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    },
    {
      title: "Mom and Dad Save the World",
      Year: "1992",
      description: "tt0104905",
      rating: "4",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTUxNTIwMTY3MF5BMl5BanBnXkFtZTgwMDU0MTQ5MDE@._V1_SX300.jpg",
    },
  ]);
  const [searchtitle, setsearchtitle] = useState("");
  const [rating, setrating] = useState(0);
  const addMovie = (movie) => {
    setmovies([...movies, movie]);
  };

  return (
    <div className="App bg-danger">
      <Header
      
        onAdd={addMovie}
        setsearchtitle={setsearchtitle}
        setrating={setrating}
        rating={rating}
      />

      <MovieList movies={movies} searchtitle={searchtitle} rating={rating} />
    </div>
  );
}

export default App;
