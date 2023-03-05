import background from "../../assets/images/stack/subTopBackground.jpg";

import { SubTop } from "../../component/global/subTop";
import { Part1 } from "./part/part1";

function Stack() {
  return (
    <main>
      <SubTop text="핵심기술" image={background} />
      <Part1 />
    </main>
  );
}

export default Stack;
