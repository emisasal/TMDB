import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer class="footer footer-custom has-background-dark">
      <div class="content has-text-centered ">
        <p className="has-text-primary-light">
          <strong className="has-text-primary-light">Emi's TMDB</strong>{" "}
          Developed by Emiliano Sasal ©
        </p>
        <h4 className="has-text-primary-light footer-icon">
          <a
            href="https://www.linkedin.com/in/emiliano-sasal/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon-custom" />
          </a>{" "}
          <a
            href="https://github.com/emisasal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="icon-custom" />
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
