export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.22em] text-text">
            Studio Seventeen
          </p>
          <p className="max-w-md text-sm text-text-muted">
            Focused software for engineers and operators working in real-world
            industrial environments.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span>© 2026 Studio Seventeen</span>
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
