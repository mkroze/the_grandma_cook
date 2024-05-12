import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="navbar bg-primary">
        <div className="flex-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-24 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/logo.png"
              />
            </div>
          </div>
          <h1 className="font-styled text-neutral ml-8 text-3xl"> Grandma's recipees </h1>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-accent bg-neutral w-24 md:w-auto"
            />
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
