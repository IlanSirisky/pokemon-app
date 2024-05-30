// import AppRouter from "./components/AppRouter/AppRouter";

// function App() {
//   return <AppRouter />;
// }
import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "./components/Modal/Modal";
import BulbasaurModal from "../public/Images/pokemon/BulbasaurModal.svg";
import PokemonModalCard from "./features/PokemonModalCard/PokemonModalCard";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalData = {
    title: "Bulbasaur",
    id: "#001",
    imageUrl: BulbasaurModal,
    description:
      "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
    attributes: [
      { label: "Height", value: "2' 04\"" },
      { label: "Weight", value: "15.2 lbs" },
      { label: "Type", value: "Grass" },
      { label: "HP", value: "35" },
      { label: "Power", value: "20" },
    ],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <PokemonModalCard
          title={modalData.title}
          subheadText={modalData.id}
          image={modalData.imageUrl}
          description={modalData.description}
          attributes={modalData.attributes}
        />
      </Modal>
    </div>
  );
}

export default App;
