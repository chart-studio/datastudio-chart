import React, { Dispatch, SetStateAction } from "react"
import ModalAdd from "./ModalAdd"
import ModalConnect from "./ModalConnect"
import ModalCreditUsed from "./ModalCreditUsed"
import ModalShareDialog from "./ModalShareDialog"
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
  selectedGraph?: string
  selectedDoc?: string
  setOpenModal: Dispatch<SetStateAction<boolean>>
  selectedGrapPrice?: string
}) => {
  if (selectedModal === "connect") {
    return <ModalConnect setOpenModal={setOpenModal} />
  }
  if (selectedModal === "allCreditUsed") {
    return <ModalCreditUsed />
  }
  if (
    selectedModal === "subsc" &&
    selectedGrapPrice &&
    selectedDoc &&
    selectedGraph
  ) {
    return (
      <ModalSubsc
        selectedGraph={selectedGraph}
        setOpenModal={setOpenModal}
        selectedDoc={selectedDoc}
        selectedGrapPrice={selectedGrapPrice}
      />
    )
  }
  if (selectedModal === "add" && selectedDoc && selectedGraph) {
    return (
      <ModalAdd
        selectedGraph={selectedGraph}
        setOpenModal={setOpenModal}
        selectedDoc={selectedDoc}
      />
    )
  }
  if (selectedModal === "try" && selectedDoc && selectedGraph) {
    return (
      <ModalTry
        selectedGraph={selectedGraph}
        setOpenModal={setOpenModal}
        selectedDoc={selectedDoc}
      />
    )
  }
  if (selectedModal === "share") {
    return <ModalShareDialog selectedDoc={selectedDoc!} />
  }

  return null
}

export default Modals
