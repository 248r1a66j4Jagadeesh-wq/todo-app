import "../styles/Footer.css";

function Footer({

  totalTasks,

  completedTasks

}) {

  return (

    <footer className="footer">

      <p>Total Tasks : {totalTasks}</p>

      <p>Completed : {completedTasks}</p>

      <p>

        Progress :

        {completedTasks}

        /

        {totalTasks}

      </p>

    </footer>

  );

}

export default Footer;