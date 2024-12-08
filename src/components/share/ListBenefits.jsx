import Benefits from "../ui/benefits.jsx";
import icons from "../../assets/icon.js";

export default function ListBenefits() {
  return (
    <>
    <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:px-0 px-8 md:justify-between md:items-center mb-11 font-roboto">
      <Benefits title="Modern House" description="Modern & Stylish Homes" color="bg-violet-100" img={icons.house} />
      <Benefits title="Green Living" description="Eco-Friendly Living" color="bg-green-100" img={icons.tree} />
      <Benefits title="24/7 Security" description="24/7 Security Protection" color="bg-blue-100" img={icons.camera} />
      <Benefits title="Family-Friendly" description="Perfect for Families" color="bg-red-100" img={icons.family} />
    </div>
    <hr />
    </>
  )
}