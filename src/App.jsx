import { useEffect } from "react";
import "./App.css";
// import { FaWhatsapp } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { NavBar, ProductList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "./store/app/thunks";

function App() {
  //const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.app);

  /* const sentToWhatsapp = () => {
    window.open("https://wa.me/+51946814055/?text=urlencodedtext", "_blank");
  }; */

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex justify-center items-center h-screen pt-20">
        {isLoading ? (
          <VscLoading className="animate-spin" />
        ) : error ? (
          error
        ) : (
          <ProductList />
        )}

        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <button
          className="bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer select-none"
          onClick={sentToWhatsapp}
        >
          <FaWhatsapp className="fill-current w-4 h-4 mr-2" />
          <span>Contactar</span>
        </button> */}
      </section>
    </>
  );
}

export default App;
