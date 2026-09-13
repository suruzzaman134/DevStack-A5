import { use, useState } from "react"
import TechnologiesCard from "./TechnologiesCard";
import SelectedTechnology from "./SelectedTechnology";
import { toast } from "react-toastify";

export default function Technologies({technologiesPromise}) {
   const technologiesData = use(technologiesPromise);
   // console.log(technologiesData)
   const [selectTechnology, setSelectTechnology] = useState([]);
   const handleSelectTechnology = (technology) => {
      setSelectTechnology([...selectTechnology, technology])
      toast.success(`${technology.name} added to stack!`);
   }
   const handleAllRemove = () => {
      setSelectTechnology([]);
      toast.error(`removed all from stack!`);
   }
   const handleRemove = (id) => {
      const newSelect = selectTechnology.filter(st => st.id != id);
      setSelectTechnology(newSelect);
      toast.error(`removed from stack!`);
   }
  return (
    <div className="w-full md:flex container gap-5 py-9">
      <div className="min-h-screen md:w-3/4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologiesData.map((data) => (
          <TechnologiesCard handleSelectTechnology={handleSelectTechnology} data={data} key={data.id}/>
        ))}
      </div>
    </div>
    <div className="md:w-1/4 mt-4 md:mt-0">
      <SelectedTechnology handleRemove={handleRemove} handleAllRemove={handleAllRemove}  selectTechnology={selectTechnology}/>
    </div>
    </div>
  );
}
