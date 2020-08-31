import { CssBaseline } from "@material-ui/core";
import Cards from "../Component/Cards/Cards";
import Header from "../Component/header/Header";

export default function Home() {
  return (
    <div className="container">
      {/* Default CSS to get rid of margin */}
      <CssBaseline />
      <Header></Header>
      <Cards></Cards>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit
      consequatur sed sequi, dolorum eius sapiente nostrum perspiciatis, officia
      totam consectetur quisquam, eaque asperiores praesentium provident
      exercitationem porro tempore
    </div>
  );
}
