function Project(props) {
  return (
    <div className="px-5 mt-12 md:grid md:grid-cols-2 md:w-full md:gap-8 md:items-center md:px-10 lg:px-16">
      <img src={props?.image} className="w-full rounded-md"></img>
      <div className="border-b-3 border-third rounded-md ">
        <div className="mt-12 border border-gray-100 shadow-primary rounded-md py-16 md:mt-0">
          <h2 className="text-3xl text-third font-medium">{props?.title}</h2>
          <p className="my-8 text-brand-gray text-balance">
            {props?.description}
          </p>
          <a className="text-fifth text-lg hover:underline" href={props?.link}>
            View project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
