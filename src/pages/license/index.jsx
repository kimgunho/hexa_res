import background from "../../assets/images/license/subTopBackground.jpg";

import { SubTop } from "../../component/global/subTop";

import { Wrapper } from "./style";

function License() {
  return (
    <Wrapper>
      <SubTop text="특허" image={background} />
    </Wrapper>
  );
}

export default License;
