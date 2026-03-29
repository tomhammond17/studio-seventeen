export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="mx-auto max-w-content px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-text-muted">
          © 2025 Studio Seventeen
        </p>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <a
            href="mailto:hello@studioseventeen.io"
            className="hover:text-text transition-colors"
          >
            hello@studioseventeen.io
          </a>
          <a
            href="https://github.com/tomhammond17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
