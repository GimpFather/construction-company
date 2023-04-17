import ServiceBlock from "@/components/molecules/ServiceBlock/ServiceBlock";
import { Stack } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ConstructionIcon from "@mui/icons-material/Construction";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const OurServices = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems={{ xs: "center", md: "flex-start" }}
      spacing={{ xs: 6 }}
      mt={8}
    >
      <ServiceBlock
        title="Planowanie"
        description="Nasza firma pomoże Ci zaprojektować Twój wymarzony garaż! Nasz projekt planowania garażu to kompleksowe podejście do każdego zadania, uwzględniające potrzeby i preferencje klienta."
        icon={<NoteAltIcon color="secondary" sx={{ fontSize: "68px" }} />}
      />
      <ServiceBlock
        title="Budowa"
        description="Nasi specjaliści zawsze w stanie doradzić w kwestiach technicznych i estetycznych, a także proponować rozwiązania, które poprawią komfort i wygodę użytkowania."
        icon={<ConstructionIcon color="secondary" sx={{ fontSize: "68px" }} />}
      />
      <ServiceBlock
        title="Renowacja"
        description="Dzięki naszemu doświadczeniu i wiedzy, jesteśmy w stanie wykonać prace remontowe i rekonstrukcyjne na najwyższym poziomie, zachowując przy tym oryginalny charakter i styl budynku."
        icon={<RestartAltIcon color="secondary" sx={{ fontSize: "68px" }} />}
      />
    </Stack>
  );
};

export default OurServices;
