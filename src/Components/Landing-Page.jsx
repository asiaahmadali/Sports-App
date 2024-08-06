import NavBar from "./NavBar";
import Header from "./Header";
import CardSection from "./Cards-Section";
import DashBoard from "./DashBoard";
import Features from "./Features";
import Analysis from "./Analysis";
import DataFigures from "./Data-Figures";
function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <CardSection></CardSection>
      <DashBoard></DashBoard>
      <Features></Features>
      <Analysis></Analysis>
      <DataFigures></DataFigures>
    </>
  );
}

export default LandingPage;
