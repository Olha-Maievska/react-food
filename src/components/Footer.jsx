const Footer = () => {
  return (
    <footer className="page-footer brown darken-2">
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/Olha-Maievska/react-shop"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
