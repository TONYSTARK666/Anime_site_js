const mainData = () => {
    fetch("https://anime-js-b2bf0-default-rtdb.europe-west1.firebasedatabase.app/anime.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
};

mainData();
