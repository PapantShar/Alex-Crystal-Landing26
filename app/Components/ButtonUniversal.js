export default function ButtonUniversal({ onClick, title }) {
  return (
    <div className="h-[70px] border-0 border-b-[#FF6500] border-r-[#FF6500]  lg:w-[260px] lg:border-2 lg:border-l-0 lg:border-t-0 ">
      <button
        className=" primary-button h-[60px] w-full lg:w-[250px]"
        onClick={() => onClick()}
      >
        {title}
      </button>
    </div>
  );
}
