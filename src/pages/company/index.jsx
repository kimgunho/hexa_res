import background from "../../assets/images/company/subTopBackground.jpg";

import { SubTop } from "../../component/global/subTop";
import { Part1 } from "./part/part1";

function Company() {
  return (
    <main>
      <SubTop text="íėŽėę°" image={background} />
      <Part1 />
    </main>
  );
}

export default Company;
