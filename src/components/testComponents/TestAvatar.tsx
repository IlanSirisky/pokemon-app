import { avatarSizes } from "../../styles/stylingValues";
import Avatar from "../Avatar/Avatar";
import caterpie from "../../assets/pokemons/caterpie.svg";
import { HeadingXLargeMedium } from "../../styles/typography";

const TestAvatar = () => {
  return (
    <div style={{
      border: `1px solid black`,
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
      padding: "10px"
    }}>
      <HeadingXLargeMedium>Avatar Component</HeadingXLargeMedium>
      <Avatar image={caterpie} size={avatarSizes.small} />
      <Avatar image={caterpie} size={avatarSizes.medium} />
      <Avatar image={caterpie} size={avatarSizes.large} />
    </div>
  );
};

export default TestAvatar;
