import axios from "axios";
const FETCH_ENDPOINT = `https://api.itbook.store/1.0/search`;

const getHinds = (query, setHints) => {
  axios.get(`${FETCH_ENDPOINT}/${query}`).then((res) => {
    const titles = res.data.books.map((book) => book.title);

    setHints(titles);
  });
};

export { getHinds };
