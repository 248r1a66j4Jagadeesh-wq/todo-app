import "../styles/Footer.css";

function Footer({

totalTasks,

completedTasks

}) {

return (

<footer className="footer">

<p>

Total Tasks : {totalTasks}

</p>

<p>

Completed : {completedTasks}

</p>

</footer>

);

}

export default Footer;