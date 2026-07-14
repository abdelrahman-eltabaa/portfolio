import { FaDownload, FaFolderOpen } from "react-icons/fa";
import Button from "../UI/Button";
import cv from "../../assets/cv/Abdelrahman Eltabaa CV.pdf";

function HeroButtons() {
  return (
    <div className="mb-10 flex flex-wrap gap-4">
      <Button href={cv} variant="primary">
        <FaDownload />
        <span>View CV</span>
      </Button>

      <a href="#projects">
        <Button variant="secondary">
          <FaFolderOpen />
          <span>View Projects</span>
        </Button>
      </a>
    </div>
  );
}

export default HeroButtons;