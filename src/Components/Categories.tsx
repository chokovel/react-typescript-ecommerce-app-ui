import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div<ItemProps>`
    display: flex;
    justify-content:space-between;
    padding:20px;
`;

interface ItemProps {
    item?: string;
}

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item}/>
      ))}
    </Container>
  );
}

export default Categories
