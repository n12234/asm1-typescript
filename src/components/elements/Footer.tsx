import React from 'react';

const Footer = () => {
  return (
    <div
      id="mega-menu-full-image-dropdown"
      className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
        <ul
          className="hidden mb-4 space-y-4 md:mb-0 md:block"
          aria-labelledby="mega-menu-full-image-button"
        >
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Online Stores
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Segmentation
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Marketing CRM
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Online Stores
            </a>
          </li>
        </ul>
        <ul className="mb-4 space-y-4 md:mb-0">
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Our Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              License
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              Resources
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
          style={{ backgroundImage: 'url(/docs/images/dashboard-overview.png)' }}
        >
          <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
            Preview the new Flowbite dashboard navigation.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
          >
            Get started
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
