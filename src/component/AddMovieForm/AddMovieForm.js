import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";

function AddMovieForm(props) {
  const {movies, setMovies} = props;

  const [title, setTitle] = useState("");
  const [isTitleError, setIsTitleError] = useState("");
  const [date, setDate] = useState("");
  const [isDateError, setIsDateError] = useState("");

  function handleInput(event){
    setTitle(event.target.value);
  }

  function handleDate(event){
    setDate(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    if (title == ""){
      setIsTitleError(true);
    }
    else if (date == ""){
      setIsDateError(true);
    }
    else{
      const newMovie = {
        id: nanoid(8),
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400"
      };

      setMovies([...movies, newMovie]);
      setIsTitleError(false);
      setIsDateError(false);
    };
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__img}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h4 className={styles.form__title}>Add Movie</h4>
          <form action="" className={styles.form__area} onSubmit={handleSubmit}>
            <label  className={styles.form__label}>
              Title
            </label>
            <input name="title" className={styles.form__input} type="text" id="title" value={title} onChange={handleInput}/>
            {isTitleError ? <alert>Title wajib diisi</alert> : ""}
            <label  className={styles.form__label}>
              Year
            </label>
            <input name="year" className={styles.form__input} type="text" id="date" value={date} onChange={handleDate}/>
            {isDateError ? <alert>Date wajib diisi</alert> : ""}
            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;