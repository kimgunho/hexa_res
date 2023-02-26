import { Link } from "react-router-dom";

import LOGO_WHITE from "../../assets/images/global/logo_white.png";

import { Layout } from "../layout";

export const Header = () => {
  return (
    <header>
      <Layout>
        <Link to={"/"}>
          <img src={LOGO_WHITE} alt="헥사프로 로고" />
        </Link>

        <ul>
          <li>
            <Link to="/company">회사소개</Link>
          </li>
          <li>
            <Link to="/stack">핵심기술</Link>
          </li>
          <li>
            <Link to="/product">제품</Link>
          </li>
          <li>
            <Link to="license">특허</Link>
          </li>
          <li>
            <a href="mailto:test@naver.com">문의</a>
          </li>
        </ul>
      </Layout>
    </header>
  );
};
