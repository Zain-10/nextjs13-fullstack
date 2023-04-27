import React from 'react'
import styles from "@/app/styles/common.module.css"
import MovieCard from "@/app/components/MovieCard";

const page = async() => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '09253f919emshb0f68cb50a004e4p198011jsna6189b6ed073',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options)
  const data = await res.json()
  const main_data = data.titles;

  return (
    <div>
      <section className={styles.movieSection}>
          <div className={styles.container}>
              <h1>Series & Movie</h1>
              <div className={styles.card_section}>
                  {
                      main_data.map((curElem) => {
                          return <MovieCard key={curElem.id} {...curElem} />
                      })
                  }
              </div>
          </div>
      </section>
    </div>
  )
}

export default page