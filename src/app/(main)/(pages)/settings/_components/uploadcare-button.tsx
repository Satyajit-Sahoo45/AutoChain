"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const [files, setFiles] = useState<any>([]);

  const handleChangeEvent = async (items: any) => {
    setFiles([
      ...items.allEntries.filter((file: any) => file.status === "success"),
    ]);

    // const file = await onUpload(
    //   items &&
    //     [
    //       ...items.allEntries.filter((file: any) => file.status === "success"),
    //     ][0]?.cdnUrl
    // );
    // if (file) {
    //   router.refresh();
    // }
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="037ee281604f3e6d2b84"
        ctxName="my-uploader"
      />
    </div>
  );
};

export default UploadCareButton;
