import background from "../../assets/images/stack/subTopBackground.jpg";

import { SubTop } from "../../component/global/subTop";
import { Part1 } from "./part/part1";
import { Part2 } from "./part/part2";
import { Part3 } from "./part/part3";

function Stack() {
  return (
    <main>
      <SubTop text="핵심기술" image={background} />
      <Part1 />
      <Part2 />
      <Part3 />
    </main>
  );
}

export default Stack;
