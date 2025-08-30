function Achievement(props) {
  return (
    <div className="bg-white p-8 flex flex-col items-center space-y-6 rounded-md mt-18 mx-5 shadow-primary border-2 border-gray-100">
      <img src={props?.icon} className="w-10 h-10"></img>
      <h3 className="text-xl font-medium">{props?.title}</h3>
      <p className="text-lg text-brand-gray text-center text-balance">
        <a
          className="font-bold hover:underline cursor-pointer"
          href={props?.link}
        >
          {props?.name}
        </a>
        &nbsp;
        {props?.description}
      </p>

      <div className="h-2.5"></div>
    </div>
  );
}

export default Achievement;
