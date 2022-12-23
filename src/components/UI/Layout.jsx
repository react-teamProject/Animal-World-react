// 웹페이지 전체의 Layout
// Header, Footer는 고정이기 때문에 Layout에 추가
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
