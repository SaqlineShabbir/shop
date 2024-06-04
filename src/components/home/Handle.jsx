import professionImage from "../../assets/job-application.jpg";

const Handle = () => {
  return (
    <main className="bg-slate-100 py-2 md:py-20  lg:px-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-2">
        {/* image section  */}
        <div>
          <img
            src={professionImage}
            alt="banner image"
            width={400}
            height={400}
            className="rounded-md grayscale hover:grayscale-0 duration-500 cursor-pointer"
          />
        </div>

        {/* content section  */}
        <div className="space-y-6 w-full">
          <h2 className="text-3xl font-bold text-slate-700">
            Discover Exquisite
            <br /> Products
            <span className="text-orange-500"> Shop with Confidence</span>
          </h2>

          <p className="text-slate-500">
            Allow us to be your ultimate destination for quality and style,
            where every product is carefully selected to meet your unique
            preferences. Start shopping today and experience unparalleled
            satisfaction and elegance.
          </p>

          <div className="flex justify-start items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-orange-500">500+</span>
              <span className="text-sm text-slate-500">Happy Customer</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold text-orange-500">16+</span>
              <span className="text-sm text-slate-500">Total Service</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Handle;
