import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../Ui/Button/Button";
import StyledForm from "./StyledForm";

// Menangkap props
function AddMovieForm(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  /**
   * TODO
   * - PROBLEM: 1 ERROR 1 STATE.
   * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
   */
  // const [isTitleError, setIsTitleError] = useState(false);
  // const [isDateError, setIsDateError] = useState(false);
  // const [isPosterError, setIsPosterError] = useState(false);
  const [error, setError] = useState({
    title: false,
    date: false,
    poster: false,
  });

  // const [count, setCount] = useState(0);

  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setError((prev) => {
        return {
          ...prev,
          title: true,
        };
      });
      return false;
    } else if (date === "") {
      setError((prev) => {
        return {
          ...prev,
          title: false,
          date: true,
        };
      });
      return false;
    } else if (poster === "") {
      setError((prev) => {
        return {
          ...prev,
          poster: true,
          date: false,
        };
      });
      return false;
    } else {
      setError((prev) => {
        return {
          ...prev,
          title: false,
          date: false,
        };
      });
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      addMovie();
    }
  }
  // useEffect(()=>{
  //   console.log("inisiet component")
  //   setCount(count + 1)
  // },[count])

  const { title, date, poster, type } = formData;

  return (
    <StyledForm>
      <section>
        <div className="form__left">
          <img src="https://picsum.photos/536/354" alt="" />
        </div>
        <div className="form__right">
          <h2>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {/* best practics */}
              {error.title ? <Alert>Title Wajib Diisi</Alert> : null}
            </div>
            <div className="form__group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {error.date && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className="form__group">
              <label htmlFor="poster">Poster</label>
              <input
                onChange={handleChange}
                id="poster"
                name="poster"
                type="text"
                value={poster}
              />
              {error.poster && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className="form__group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
            </div>
            {/* <button className={styles.form__button} type="submit">
              Submit
            </button> */}
            <Button variant="secondary" full>
              submit
            </Button>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default AddMovieForm;
