type Props = {};
const UserProfileInfo = (props: Props) => {
  return (
    <div className="w-full h-40 bg-gray-500 flex flex-col justify-center items-center gap-3">
      <div className="w-16 h-16 bg-zinc-900 rounded-full"></div>
      <div className="w-2/6 h-5 bg-zinc-900 rounded text-white font-bold flex justify-center items-center">
        1
      </div>
      <div className="flex justify-start items-center gap-2">
        {/* <img
          src="../../../../assets/images/Coin_of_Plentiful.png"
          alt="Gold"
          className="w-8"
        /> */}
        siema
        <div>230</div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
