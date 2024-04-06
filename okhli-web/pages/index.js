import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "../styles/web.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-screen bg-green-100">
      <nav className="bg-green-100 p-5 h-35 w-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex items-center justify-between h-full mt-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-extrabold text-3xl text-green-600">Okhli Ayurveda</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:black">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center">
                <a href="#" className="mr-10 text-black hover:text-white">Home</a>
                <a href="#" className="mr-10 text-black hover:text-white">Product</a>
                <a href="#" className="mr-10 text-black hover:text-white">About</a>
                <a href="#" className="mr-10 text-black hover:text-white">Contact</a>
                <button className="text-black bg-green-600 p-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-full ">
        <div className="font-black text-8xl text-green-600" style={{ marginTop:120,marginLeft:90,height: 400,width:600 }} >
           An Ethnic Stop For All Ayurvedic Needs
        </div>
        <div className="text-xl text-gray-600" style={{ marginLeft:90 }}>
          Ayurveda: Where traditions meets transformation
        </div>
        <button className="bg-green-600 text-white" style={{ marginTop:20,marginLeft:100,height: 65,width:170 }}>Buy Now</button>
        <button className="border border-2 border border-green-600 text-green-600" style={{ marginTop:20,marginLeft:80,height: 65,width:170 }}>Products</button>
      </div>
    </div>
  );
}
