import { Outlet } from "react-router-dom";

const LoginRegisterLayout = () => {
  return (
    <div className="bg-[#F1F0FE] min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-[1300px] w-full">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-[600px] hidden md:block">
            <img
              className="h-full w-full object-cover"
              src="./LeftSideImage.png"
              alt="Left Side Image"
            />
          </div>
          <div className="w-full md:w-1/2 h-auto md:h-[600px] p-6 md:p-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
