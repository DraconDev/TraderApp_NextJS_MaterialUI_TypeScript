import { useRouter } from "next/router";
import React from "react";

interface Props {}

const person = (props: Props) => {
  const router = useRouter();
  // console.log(useRouter());
  return (
    <div>
      test
      {router.query.person}
      {router.query.vehicle}
    </div>
  );
};

export default person;
