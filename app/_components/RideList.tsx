import React from "react";
import Header from "./Header";
import { Search } from "lucide-react";
import { getrides } from "../../backend/services/rides";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SingleRide from "./SingleRide";
import Link from "next/link";

const RideList = async () => {
  const rides = await getrides()
  

  return (
    <>
      <div className="p-2">
        {/* {JSON.stringify(rides)} */}
        <div className="flex justify-center gap-2 items-center bg-gray-50 p-2 rounded-full border-2 border-gray-300">
          <Search className="text-gray-500" />
          <input
            className="w-[90%] bg-gray-50 outline-none "
            placeholder="Search location"
          />
        </div>
        <div className=" ">
          <div className="flex justify-end">
            <p className="text-xs font-bold">Sort By:</p>{" "}
            <Select>
              <SelectTrigger className=" !text-xs items-start justify-start p-0 !border-0 focus:outline-none focus:ring-0 focus:ring-ring w-[80px] !shadow-0 !outline-none">
                <SelectValue
                  className="!text-xs !shadow-0 !outline-none!border "
                  placeholder="None"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="amore-seats">More seats</SelectItem>
                  <SelectItem value="bmore-seats">More seats</SelectItem>
                  <SelectItem value="cmore-seats">More seats</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            {rides?.map((e, i) => (
            
                <SingleRide details={e} key={i} />
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RideList;
