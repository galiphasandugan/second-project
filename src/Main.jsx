import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";


const Main = () => {
  const imgStyle = {
    width: "70%",
    border: "5px solid red",
  };

  return (
    <div className=" text-center mt-3">
      <h1>hello</h1>
      <p className="par">Lorem ipsum dolor sit amet.</p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/05/07/09/59/mountains-7976041_1280.jpg"
        alt=""
      />
      
      <button className="button">SEN</button>
      <p style={{backgroundColor: "gray" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        blanditiis quos aperiam necessitatibus quisquam hic facere commodi
        eligendi! At velit ab reprehenderit est veritatis maxime officia veniam
        sequi similique quas?
      </p>
    </div>
  );
};

export default Main;
