import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Select() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isActiveSelect, setIsActiveSelect] = useState(false);
  const router=useRouter();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
    if(itemName=="home"){
      router.push(`/${itemname}`)
    }else if(itemName=="chat"){
      router.push('chatfolder')
    }else {
      router.push('/signout')
    }
    

  };

  return (
    <div className="relative z-10" aria-expanded={isActiveSelect}>
      <div
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className="flex w-[100px] cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-3 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {selectedItem === null ? 'Home' : selectedItem}
          <IoIosArrowDown
            style={{ transform: `rotate(${isActiveSelect ? '180deg' : '0'})` }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </div>
      <div
        style={{
          top: isActiveSelect ? '20px' : '50px',
          opacity: isActiveSelect ? '1' : '0',
          visibility: isActiveSelect ? 'visible' : 'hidden',
        }}
        role="listbox"
        aria-labelledby="select-label"
        className="relative left-0 top-[70px] w-[100%] rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        <button
          onClick={() => {
            handleItemClick('Home');
          }}
          className="block w-full border-b-2 border-black bg-[#C4A1FF] px-5 py-3 first:rounded-t-[5px] hover:bg-[#a36ec4]"
        >
          Home
        </button>
        <button
          onClick={() => {
            handleItemClick('Chat');
          }}
          className="block w-full border-b-2 border-black bg-[#C4A1FF] px-5 py-3 hover:bg-[#a36ec4]"
        >
          Chat
        </button>
        <button
          onClick={() => {
            handleItemClick('Logout');
          }}
          className="block w-full bg-[#C4A1FF] px-5 py-3 last:rounded-b-[5px] hover:bg-[#a36ec4]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
