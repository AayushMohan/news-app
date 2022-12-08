import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: Article;
};

const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  return <div></div>;
};

export default ReadMoreButton;
