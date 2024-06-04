import React from "react";
import img from "../assets//job-application.jpg";

const Jobs = () => {
  //   const [control, setControl] = useState(false);
  return (
    <div>
      <div className="lg:flex space-x-10  w-[100%] lg:px-[200px] px-10 py-20  bg-white  min-h-[100vh]">
        <div className="lg:w-[50%]">
          <img src={img} alt="" />
        </div>
        <div className="space-y-3 lg:w-[50%]">
          <p>Now Hiring</p>
          <p className="text-3xl font-bold">
            Cooks, Servers,Bussers,and Dishwashers
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque maiores ipsa quia vero hic officiis corrupti facilis
            voluptate, nemo laboriosam ullam, labore fugit <br />
            cupiditate modi consequatur in maxime quasi voluptatibus ad
            temporibus doloribus. Ipsam, <br />
            dolores. Veritatis quis voluptates iure in delectus at totam
            deleniti facere, tempore cumque. Sunt, laborum?
          </p>
          <button
            onClick={() => setControl(true)}
            className="bg-orange-500 px-10 py-3"
          >
            Apply Here
          </button>
        </div>
      </div>
      {/* {control && <ApplyModal setControl={setControl} control={control} />} */}
    </div>
  );
};

export default Jobs;
