import Banner from "@/components/banner/Banner";

export default function Home() {
  const onSerchBtn = () => {
    console.log("Button is clicked");
  };

  return (
    <>
      <header>
        <h1>Home page</h1>
      </header>

      <Banner />

      <div className="search_field">
        <label htmlFor="searchGif">Search</label>
        <input id="searchGif" type="text" />
        <button onClick={onSerchBtn}>search</button>
      </div>

      <div className="gif_collection">
        <div className="gif_collection-gif">
          <p className="user">@mavimedia</p>
          <img
            className="gif"
            src="https://media0.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif?cid=ecf05e474dlz7bdxgeivqpfm73xj1jmlw8fcoaatecszavq9&rid=giphy.gif&ct=g"
            alt=""
          />
          <p className="description">design and advertising agency !</p>
        </div>

        <div className="gif_collection-gif">
          <p className="user">@mavimedia</p>
          <img
            className="gif"
            src="https://media3.giphy.com/media/ukMiDlCmdv2og/giphy.gif?cid=ecf05e47w6nyla8od954euw744m5zdmjx5142e25oexexxf6&rid=giphy.gif&ct=g"
            alt=""
          />
          <p className="description">design and advertising agency !</p>
        </div>
      </div>
    </>
  );
}
