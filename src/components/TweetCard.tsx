import Image from "next/image";

interface Props {
  text: string;
}

const TweetCard = (props: Props) => {
  return (
    <div className="card shadow-md">
      <div className="m-5">
        <div className="flex">
          <div className="h-14 w-14 flex-none">
            <div className="avatar">
              <div className="w-12">
                <Image
                  className="rounded-full"
                  src="https://picsum.photos/200"
                  alt="user image"
                  fill
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-72 flex-initial break-words">
            <h2 className="font-semibold">user name</h2>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
