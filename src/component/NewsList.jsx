import React, { useEffect } from "react";
import axios from "axios";
import { newsBaseUrl } from "../util/helper";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import NewsCard from "./NewsCard";

function NewsList({ category }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getNews = async () => {
    const options = {
      params: {
        category: category,
        language: "en",
        country: "ng",
        sort: "top",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}/category`, options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      {/* News section */}
      <section className="max-w-5xl mx-auto my-10 px-4">
        <h1 className="capitalize my-4">Trending {category} news</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <NewsCard key={item._id} {...item} />
          ))}
        </div>
      </section>
      {/* ********** */}
    </>
  );
}

export default NewsList;
