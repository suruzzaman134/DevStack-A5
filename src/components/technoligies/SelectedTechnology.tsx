import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../../type";
interface SelectedTechnologyProps {
  selectTechnology: Technology[];
  handleAllRemove: () => void;
  handleRemove: (id: string) => void;
}
export default function SelectedTechnology({ selectTechnology, handleAllRemove, handleRemove }: SelectedTechnologyProps) {
  return (
    <>
    <div className="border-1 rounded-2xl p-3 py-4  border-gray-200">
      <h1 className="text-xl font-semibold mb-2">Your Stack</h1>
      {selectTechnology.length == 0 ? (
        <p className="text-gray-600">No Technologies selected yet</p>
      ) : (
        <p className="text-gray-600">{selectTechnology.length} Technology Selected</p>
      )}
      {selectTechnology.length == 0 ? (
        <div className="border-1 rounded-2xl flex justify-center items-center p-2 py-5 border-gray-400 border-dashed mt-5 text-gray-600">
          <p>Your stack is empty</p>
        </div>
      ) : (
        selectTechnology.map(t => (
         <div className="flex justify-between items-center border-1 border-gray-300 p-3 my-3 rounded-xl">
         <div className="flex gap-3 items-center">
            <img
            className="h-10 w-10"
            src={t.icon}
            alt={t.name}
          />
            <div className="text-sm">
               <p className="font-semibold ">{t.name}</p>
               <p className=" text-xs text-gray-500">{t.badge}</p>
            </div>
         </div>
         <p><RxCross2 onClick={() => handleRemove(t.id)}/></p>
        </div>
        ))
      )}
    {selectTechnology.length != 0 && <button onClick={handleAllRemove} className="border-1 text-red-500 border-red-600 p-2 mt-3 flex items-center justify-center w-full rounded-2xl">Remove all</button>}
    </div>
    </>
  );
}
