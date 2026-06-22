import "../styles/Footer.css";

function Footer({ totalTasks }) {

  return (

    <footer className="footer">

      <p>Total Tasks : {totalTasks}</p>

    </footer>

  );

}

export default Footer;