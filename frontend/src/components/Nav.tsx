const Nav = () => {
  return (
    <div>
      <ul className="flex bg-stone-100 cursor-pointer w-screen">
        <li className=" mx-3 my-4 ml-10 text-2xl text-slate-900 hover:text-slate-700 transition">
          YMP Page
        </li>
        <li className="mx-3 my-5  text-slate-900 hover:text-slate-700 transition">
          test1
        </li>
        <li className="mx-3 my-5  text-slate-900 hover:text-slate-700 transition">
          test2
        </li>
        <li className="mx-3 my-5  text-slate-900 hover:text-slate-700 transition">
          test3
        </li>
        <li className="mx-3 my-5 place-self-end text-slate-900 hover:text-slate-700 transition">
          test3
        </li>
      </ul>
    </div>
  );
};
export default Nav;
