function Content() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <p className="flex-row-center justify-center">
        <img
          src="https://user-images.githubusercontent.com/527559/66231995-3cd0c380-e6be-11e9-8782-c50c834aac93.png"
          width="520"
          alt="SimpleBar"
        />
      </p>

      <p className="flex-row-center justify-center gap-2">
        <a href="https://npmjs.org/package/simplebar">
          <img
            alt="NPM version"
            src="https://img.shields.io/npm/v/simplebar.svg?style=flat-square"
          />
        </a>
        <a href="https://npmjs.org/package/simplebar">
          <img
            alt="NPM downloads"
            src="https://img.shields.io/npm/dm/simplebar.svg?style=flat-square"
          />
        </a>
      </p>

      <p>
        SimpleBar does only one thing: replace the browser's default scrollbar
        with a custom CSS-styled one without losing performances. Unlike some
        popular plugins, SimpleBar doesn't mimic scroll with Javascript, causing
        janks and strange scrolling behaviours... You keep the awesomeness of
        native scrolling...with a custom scrollbar! SimpleBar&nbsp;
        <strong>does NOT implement a custom scroll behaviour</strong>
        . It keeps
        the&nbsp;
        <strong>native</strong>
        &nbsp;
        <code>overflow: auto</code>
        &nbsp; scroll and &nbsp;
        <strong>only</strong>
        &nbsp; replace the scrollbar visual appearance.
      </p>

      <ul className="list-disc px-10">
        <li>
          <strong>
            🐦 Follow me on&nbsp;
            <a
              className="text-yellow-500"
              href="https://twitter.com/adriendenat"
            >
              Twitter!
            </a>
            &nbsp;or&nbsp;
            <a className="text-yellow-500" href="https://mas.to/@adrien">
              Mastodon!
            </a>
          </strong>
        </li>
        <li>
          <strong>
            👨&zwj;💻 I'm available for hire!&nbsp;
            <a className="text-yellow-500" href="https://adriendenat.com/">
              Reach out to me!
            </a>
          </strong>
        </li>
        <li>
          <strong>
            🚧 Check out my new project&nbsp;
            <a
              className="text-yellow-500"
              href="https://github.com/Grsmto/scroll-snap-carousel"
            >
              Scroll Snap Carousel
            </a>
            &nbsp;!
          </strong>
        </li>
      </ul>

      <p>
        ⚠️ SimpleBar v6 is here! There are some
        <strong>breaking changes!</strong>
        Make sure to check out&nbsp;
        <a
          className="text-yellow-500"
          href="https://github.com/Grsmto/simplebar/blob/master/packages/simplebar-core/CHANGELOG.md"
        >
          the changelog
        </a>
        &nbsp;before updating.
      </p>

      <h4 className="text-xl font-bold text-gray-700">Design it as you want</h4>
      <p>
        SimpleBar uses pure CSS to style the scrollbar. You can easily customize
        it as you want! Or even have multiple style on the same page...or just
        keep the default style ("Mac OS" scrollbar style).
      </p>

      <h4 className="text-xl font-bold text-gray-700">
        Lightweight and performant
      </h4>
      <p>
        Only 6kb minified. SimpleBar doesn't use Javascript to handle scrolling.
        You keep the performances/behaviours of the native scroll.
      </p>
      <h4>Supported everywhere</h4>
      <p>
        SimpleBar has been tested on the following browsers: Chrome, Firefox,
        Safari, Edge, IE11.
      </p>

      <h3 className="text-2xl font-bold text-gray-700">Getting started</h3>
      <p>
        The easiest way to use SimpleBar is with the default dependency-free
        version:
        <code>npm install simplebar</code>
        .
      </p>
      <ul className="list-disc px-10">
        <li>
          <a href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar">
            Core documention
          </a>
        </li>
      </ul>
      <p>
        If you are using a framework, SimpleBar also supports the most popular
        ones: Vue, Angular and React.
      </p>
      <ul className="list-disc px-10">
        <li>
          <a href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react">
            React documention
          </a>
        </li>
        <li>
          <a href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-angular">
            Angular documentation
          </a>
        </li>
        <li>
          <a href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue">
            Vue documentation
          </a>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-700">Demo</h3>
      <p>
        You can check our&nbsp;
        <a
          className="text-yellow-500"
          href="https://grsmto.github.io/simplebar/examples"
        >
          demo page
        </a>
        &nbsp;(which is also the one we use for automated tests).
      </p>
      <h3>Changelog</h3>
      <p>
        See changelog here :&nbsp;
        <a
          className="text-yellow-500"
          href="https://github.com/Grsmto/simplebar/releases"
        >
          https://github.com/Grsmto/simplebar/releases
        </a>
      </p>

      <h3 className="text-2xl font-bold text-gray-700">Credits</h3>
      <ul className="list-disc px-10">
        <li>
          <a className="text-yellow-500" href="https://github.com/KingSora">
            KingSora
          </a>
          &nbsp;for multiple features and inspirations (
          <code>height: auto</code>
          detection, RTL mode cross browser support and more) with&nbsp;
          <a
            className="text-yellow-500"
            href="https://kingsora.github.io/OverlayScrollbars/"
          >
            OverlayScrollbars
          </a>
          .
        </li>
        <li>
          <a className="text-yellow-500" href="http://www.f6design.com/">
            Jonathan Nicol
          </a>
          &nbsp;for original idea with&nbsp;
          <a href="https://github.com/jnicol/trackpad-scroll-emulator">
            Trackpad Scroll Emulator
          </a>
          .
        </li>
        <li>
          <a className="text-yellow-500" href="https://cassiobittencourt.com/">
            Cassio Bittencourt
          </a>
          &nbsp;for the logo design.
        </li>
      </ul>
    </div>
  )
}

export default Content
