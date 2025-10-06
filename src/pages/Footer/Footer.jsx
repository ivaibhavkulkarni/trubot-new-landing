import TrubotLogo from '../../assets/TrubotLogo.png'

const Footer = () => {
  return (
    <footer className="py-6 text-white border-t border-gray-200 dark:border-gray-700 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center h-[20vh]">
        {/* Left Side - Company Name */}
        <div className="text-2xl tracking-wide text-orange-400 mb-4 sm:mb-0">
        {/* Logo Section */}
        <a
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            href="#"
        >
            <img
            src={TrubotLogo}
            alt="Trubot Electronics"
            className="h-10 w-auto"
            />
            <span className="text-2xl text-orange-400 tracking-tight">
            Trubot Electronics
            </span>
        </a>
        </div>
        {/* Right Side - Social Icons */}
        <div className="flex space-x-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a2.977 2.977 0 0 0-2.095-2.095C19.648 3.5 12 3.5 12 3.5s-7.648 0-9.403.591A2.977 2.977 0 0 0 .502 6.186C0 7.94 0 12 0 12s0 4.06.502 5.814a2.977 2.977 0 0 0 2.095 2.095C4.352 20.5 12 20.5 12 20.5s7.648 0 9.403-.591a2.977 2.977 0 0 0 2.095-2.095C24 16.06 24 12 24 12s0-4.06-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.146 3.836.426 2.714 1.548c-1.122 1.122-1.402 2.483-1.476 4.338C1.18 7.168 1.166 7.577 1.166 12s.014 4.832.072 6.112c.074 1.855.354 3.216 1.476 4.338 1.122 1.122 2.483 1.402 4.338 1.476 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.855-.074 3.216-.354 4.338-1.476 1.122-1.122 1.402-2.483 1.476-4.338.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.074-1.855-.354-3.216-1.476-4.338C20.164.426 18.803.146 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.162a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.85-3.037-1.852 0-2.136 1.447-2.136 2.941v5.665H9.352V9.004h3.414v1.561h.048c.476-.9 1.636-1.85 3.365-1.85 3.602 0 4.267 2.37 4.267 5.455v6.282zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.558V9.004h3.556v11.448zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.458C0 23.208.792 24 1.771 24h20.454c.979 0 1.771-.792 1.771-1.771V1.771C24 .792 23.208 0 22.225 0z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Trubot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
