import React, { Dispatch, SetStateAction } from "react"
import ModalConnect from "./ModalConnect"
import ModalCreditUsed from "./ModalCreditUsed"
import ModalSubsc from "./ModalSubsc"
import ModalTry from "./ModalTry"

const Modals = ({
  selectedModal,
  selectedGraph,
  selectedDoc,
  setOpenModal,
  selectedGrapPrice,
}: {
  selectedModal: string
  selectedGraph: string
  selectedDoc: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
  selectedGrapPrice: string
}) => {
  if (selectedModal === "connect") {
    return <ModalConnect />
  }
  if (selectedModal === "allCreditUsed") {
    return <ModalCreditUsed />
  }
  if (selectedModal === "subsc") {
    return (
      <ModalSubsc
        selectedGraph={selectedGraph}
        setOpenModal={setOpenModal}
        selectedDoc={selectedDoc}
        selectedGrapPrice={selectedGrapPrice}
      />
    )
  }
  if (selectedModal === "try") {
    return (
      <ModalTry
        selectedGraph={selectedGraph}
        setOpenModal={setOpenModal}
        selectedDoc={selectedDoc}
      />
    )
  }
  return null
}

export default Modals
