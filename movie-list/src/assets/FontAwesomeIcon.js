import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// To use icon, import "import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// and the corresponding icon from the top.

export default function FontAwesomeIcon() {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
      <FontAwesomeIcon icon={faBan} style={{ color: "#ffffff" }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
    </div>
  );
}
