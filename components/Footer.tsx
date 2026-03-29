export default function Footer() {
  return (
    <footer className="py-6">
      <div className="mx-auto max-w-content px-6 text-center">
        <p className="text-xs text-text-muted font-mono">
          © 2025 Studio Seventeen · hello@studioseventeen.io ·{" "}
          <a
            href="https://github.com/studio-seventeen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
