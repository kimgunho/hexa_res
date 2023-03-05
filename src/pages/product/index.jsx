import background from "../../assets/images/product/subTopBackground.jpg";

import { SubTop } from "../../component/global/subTop";
import { Part1 } from "./part/part1";

function Product() {
  return (
    <main>
      <SubTop text="제품" image={background} />
      <Part1 />
    </main>
  );
}

export default Product;
