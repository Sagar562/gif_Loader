import RandomGif from "./components/RandomGif";
import TagGif from "./components/TagGif";

export default function App() {
  return (
      <div className="background w-full flex flex-col items-center h-full">

        <h1 className="bg-white font-bold mx-auto w-11/12 rounded-lg mt-7 pt-1 pb-1 text-4xl text-center">
          Random Gifs
        </h1>

        <div className="w-full flex flex-col items-center mt-10 mb-10 gap-7">
            <RandomGif/>
            <TagGif/>
        </div>

     </div>
     );
}
