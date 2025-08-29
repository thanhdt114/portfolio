function Skill(props) {
  return (
    <div className="bg-white p-8 flex flex-col items-center space-y-6 rounded-md mt-18 mx-5 shadow-primary border-2 border-gray-100">
      {props.icon}
      <h3 className="text-xl font-medium">{props.title}</h3>
      <p className="text-lg text-brand-gray text-center text-balance">
        {props.description}
      </p>
      <h4 className="text-xl text-third">Technologies</h4>

      {props.technologies.map((technologyItem, index) => (
        <div className="flex items-center mb-0">
          <img src={technologyItem.icon} className="h-8"></img>
          <p>{technologyItem.name}</p>
        </div>
      ))}
      <div className="h-2.5"></div>
    </div>
  );
}

export default Skill;
