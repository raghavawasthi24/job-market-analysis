import React, { useState } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { IoMdSearch } from "react-icons/io";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineSell } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";

export default function Categories() {
  const sectors = [
    {
      name: "Healthcare",
      icon: MdHealthAndSafety,
    },
    {
      name: "Education",
      icon: PiGraduationCap,
    },
    {
      name: "Manufacturing",
      icon: FaBuildingColumns,
    },
    {
      name: "Sales",
      icon: MdOutlineSell,
    },
    {
      name: "Finance",
      icon: MdAttachMoney,
    },
    {
      name: "Technology",
      icon: GrCloudSoftware,
    },
  ];

  const [search, setSearch] = useState("");

  const submitHandler = () => {
    console.log(search);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Explore the jobs</p>
      <div className="flex items-center gap-6">
        {sectors.map((sector, key) => (
          <div className="flex flex-col items-center" key={key}>
            <sector.icon className="w-10 h-10 border p-2 rounded-full" />
            <p className="text-gray-600">{sector.name}</p>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center">
              <IoMdSearch className="w-10 h-10 border p-2 rounded-full" />
              <p className="text-gray-600">Search More</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <p className="font-medium">Enter to search</p>
            </DialogHeader>
            <Input type="search" onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={submitHandler}>Search</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
