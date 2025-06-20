import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col pt-50 px-10 pb-10 bg-black rounded-4xl border-5 border-gray-600">
        <div className="flex gap-2">
          <Button
            className="bg-gray-400 rounded-full px-[17px] py-4 font-semibold"
            onClick={() => {}}
          >
            AC
          </Button>
          <Button
            className="bg-gray-400 rounded-full px-[22px] py-4 font-semibold"
            onClick={() => {}}
          >
            ±
          </Button>
          <Button
            className="bg-gray-400 rounded-full px-[22px] py-4 font-semibold"
            onClick={() => {}}
          >
            %
          </Button>
          <Button
            className="bg-yellow-600 rounded-full px-[22px] py-4 font-semibold text-white text-white"
            onClick={() => {}}
          >
            ÷
          </Button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button
            className="bg-neutral-800 rounded-full px-[22px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            7
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            8
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            9
          </Button>
          <Button
            className="bg-yellow-600 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            x
          </Button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button
            className="bg-neutral-800 rounded-full px-[22px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            4
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            5
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            6
          </Button>
          <Button
            className="bg-yellow-600 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            -
          </Button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button
            className="bg-neutral-800 rounded-full px-[23.5px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            1
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            2
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-6 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            3
          </Button>
          <Button
            className="bg-yellow-600 rounded-full px-[22px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            +
          </Button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button
            className="bg-neutral-800 rounded-full px-14 py-4 font-semibold text-white"
            onClick={() => {}}
          >
            0
          </Button>
          <Button
            className="bg-neutral-800 rounded-full px-[26px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            ,
          </Button>
          <Button
            className="bg-yellow-600 rounded-full px-[22px] py-4 font-semibold text-white"
            onClick={() => {}}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
