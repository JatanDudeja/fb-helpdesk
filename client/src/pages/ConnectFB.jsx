const ConnectFB = () => {
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Working");
      };
    
      return (
        <div className="flex justify-center items-center h-screen">
          <form className="p-12 bg-[#fff] flex flex-col items-center w-[430px] rounded-[20px] justify-between">
            <h2 className=" text-[20px] font-semibold mb-6">Facebook Page Integration</h2>
            <button
              onClick={handleRegisterSubmit}
              className="bg-[#1e4d91] w-full rounded-[5px] h-[50px] text-white"
            >
              Connect Page
            </button>
          </form>
        </div>
      );
    };
    
export default ConnectFB;