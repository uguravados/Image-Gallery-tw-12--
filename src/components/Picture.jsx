import "../styles/styles.css";

const Picture = ({ photographer, src }) => {
  return (
   
    <div >
      <img src={src} alt="img" />
      <h3>{photographer}</h3>
    </div>
  );
};

export default Picture;
