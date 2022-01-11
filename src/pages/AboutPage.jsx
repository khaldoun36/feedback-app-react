import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <h1 className="about">About page</h1>
      <br />
      <p>
        This is a feedback app project built with React meant to show my basic
        skills as a react developer
      </p>
      <br />
      <p>Version 1.0.0</p>
      <br />
      <Link to={"/"}>Go back to the home page</Link>
    </Card>
  );
};

export default AboutPage;
