const DisconnectFB = () => {
    const handleDeleteIntegrationSubmit = (e) => {
      e.preventDefault();
      console.log("Working");
    };

    const handleMessageSubmit = (e) => {
      e.preventDefault();
      console.log("Working");
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form className="p-12 bg-[#fff] flex flex-col items-center w-[430px] rounded-[20px] justify-between">
          <h2 className=" text-[15px] text-[#2f2f2f] font-semibold mb-2">Facebook Page Integration</h2>
          <h2 className=" text-[15px] text-[#2f2f2f] font-semibold mb-6">Integrated Page: <span className="font-bold">{`{PageName}`}</span></h2>
          <button
            onClick={handleDeleteIntegrationSubmit}
            className="bg-red-500 w-full rounded-[5px] h-[50px] text-white"
          >
            Delete Integration
          </button>
          <button
            onClick={handleMessageSubmit}
            className="bg-[#1e4d91] w-full rounded-[5px] h-[50px] text-white mt-3"
          >
            Reply To Messages
          </button>
        </form>
      </div>
    );
  };
  
export default DisconnectFB;