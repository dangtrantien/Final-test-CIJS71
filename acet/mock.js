
export const mock = [
  {
    title: "Free React Course for 2022",
    image:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/react2022.png",
  },
  {
    title: "Beautiful way to fetch data in React",
    image:
      "https://i0.wp.com/itsfoss.com/wp-content/uploads/2021/11/exa-features.png?w=983&ssl=1",
  },
];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));