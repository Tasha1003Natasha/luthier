import React, { useEffect, useState } from "react";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <li>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "24vw",
          height: "40vh",
          objectFit: "cover",
        }}
        src={item?.webContentLink}
        alt={item?.etag}
      />
    </li>
  );
};

export default Card;
